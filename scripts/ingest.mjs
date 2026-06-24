#!/usr/bin/env node
// Ingest Flox's published docs into an Astro content collection.
//
// Two sources, both pinned:
//   - flox/floxdocs  docs/                 -> the curated guides & concepts
//   - flox/flox      cli/flox/doc/*.md     -> the CLI "Manual" (man pages),
//                                             which floxdocs pulls in at build time
//
// Flox's docs are MkDocs Material. This normalizes the Material/pymdownx
// extensions into clean CommonMark so (a) the Astro `docs` collection builds and
// (b) @hevmind/ask gets clean prose:
//   - nav/group/order recovered from mkdocs.yml's `nav:` (encoded below as NAV)
//   - snippets         --8<-- "x.md"            -> inlined from docs/snippets/
//   - include-markdown {% include-markdown "x" %} -> inlined from docs/
//   - pandoc includes  ```{.include}\n./x.md``` -> inlined (man pages)
//   - macros           {{ FLOX_VERSION }} etc.  -> substituted
//   - admonitions      !!! note "T" / ??? ...   -> **T** label + dedented body
//   - content tabs     === "Tab"                -> **Tab** label + dedented body
//   - code fences      ```{ .bash .copy }        -> ```bash
//   - attr lists       { #id } {:target=_blank} {.md-button} -> stripped
//   - icon shortcodes  :material-foo: :simple-x: -> stripped
//   - def lists        term \n :   def           -> **term** def
//   - relative .md links  -> /docs/<slug> ; man links -> /docs/man/<slug>
//   - relative images     -> the pinned raw.githubusercontent URL
// Man-page headings are demoted one level (`# NAME` -> `## NAME`) so each page
// has a single title (rendered by the layout) and clean H2 sections.
//
//   node scripts/ingest.mjs            # dry run: plan only
//   node scripts/ingest.mjs --write    # write src/content/docs/**/*.md
import { mkdir, writeFile, rm, readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const WRITE = process.argv.includes('--write');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- pinned sources -------------------------------------------------------
const DOCS_SRC = process.env.FLOXDOCS_SRC || '/tmp/floxdocs/docs';
const MAN_SRC = process.env.FLOX_MAN_SRC || '/tmp/flox-cli/cli/flox/doc';
const DOCS_REF = process.env.FLOXDOCS_REF || 'ed5868432ebadf830228325e961b33b9bc302769';
const RAW_DOCS = `https://raw.githubusercontent.com/flox/floxdocs/${DOCS_REF}/docs`;
const OUT = path.resolve(__dirname, '../src/content/docs');

// Macros from mkdocs.yml `extra:` (the live site fills FLOX_VERSION from $FLOX_VERSION
// at build; we pin the current stable release).
const MACROS = {
  FLOX_VERSION: process.env.FLOX_VERSION || '1.13.0',
  FLOX_PUBLIC_KEY: 'flox-cache-public-1:7F4OyH7ZCnFhcze3fJdfyXYLQw/aV7GEed86nQ7IsOs=',
};

const SNIPPETS_DIR = path.join(DOCS_SRC, 'snippets'); // pymdownx.snippets base_path

// --- nav (from mkdocs.yml) ------------------------------------------------
// Each entry: { group, label?, path } in nav order. `flat` groups are expanded
// from the filesystem. Single-page groups render as a plain link in the sidebar.
const NAV_GROUPS = [
  { group: 'Introduction', pages: [['index.md', 'Introduction']] },
  {
    group: 'Install Flox',
    pages: [
      ['install-flox/install.md', 'Install'],
      ['install-flox/uninstall.md', 'Uninstall'],
      ['install-flox/troubleshooting.md', 'Troubleshooting'],
      ['install-flox/ide-extensions.md', 'Extensions'],
    ],
  },
  { group: 'Flox in 5 minutes', pages: [['flox-5-minutes.md', 'Flox in 5 minutes']] },
  {
    group: 'Tutorials',
    pages: [
      ['tutorials/creating-environments.md', 'Creating environments'],
      ['tutorials/default-environment.md', 'The default environment'],
      ['tutorials/sharing-environments.md', 'Sharing environments'],
      ['tutorials/layering-multiple-environments.md', 'Layering multiple environments'],
      ['tutorials/customizing-environments.md', 'Customizing the shell environment'],
      ['tutorials/multi-arch-environments.md', 'Designing multi-arch environments'],
      ['tutorials/build-and-publish.md', 'Building and publishing packages'],
      ['tutorials/overriding-packages.md', 'Using a newer version of a package'],
      ['tutorials/ci-cd.md', 'Running Flox in CI/CD'],
      ['tutorials/composition.md', 'Reusing and combining developer environments'],
      ['tutorials/package-outputs.md', 'Selecting package outputs'],
      ['tutorials/cuda.md', 'Flox + CUDA'],
      ['tutorials/flox-and-systemd.md', 'Flox and systemd'],
      ['tutorials/installing-from-repo.md', 'Installing Flox from its repository on Debian and Red Hat'],
      { flat: 'tutorials/migrations' },
    ],
  },
  {
    group: 'Imageless Kubernetes',
    pages: [
      ['imageless-kubernetes/intro.md', 'Introduction'],
      ['imageless-kubernetes/tech.md', 'Tech'],
      ['imageless-kubernetes/install/eks.md', 'Amazon EKS'],
      ['imageless-kubernetes/install/self-managed.md', 'Self-managed'],
      ['imageless-kubernetes/install/troubleshooting.md', 'Troubleshooting'],
      ['imageless-kubernetes/install/upgrading.md', 'Upgrading'],
      ['imageless-kubernetes/install/uninstall.md', 'Uninstall'],
      { flat: 'imageless-kubernetes/examples' },
      ['imageless-kubernetes/config.md', 'Configuration'],
    ],
  },
  {
    group: 'Concepts',
    pages: [
      ['concepts/environments.md', 'Environments'],
      ['concepts/activation.md', 'Activating environments'],
      ['concepts/compatibility.md', 'Compatibility policy'],
      ['concepts/floxhub.md', 'FloxHub'],
      ['concepts/floxhub-environments.md', 'FloxHub environments'],
      ['concepts/generations.md', 'Generations'],
      ['concepts/packages-and-catalog.md', 'Catalog and Packages'],
      ['concepts/package-groups.md', 'Package Groups'],
      ['concepts/base-catalog.md', 'Base Catalog'],
      ['concepts/services.md', 'Services'],
      ['concepts/composition.md', 'Composing environments'],
      ['concepts/organizations.md', 'Organizations'],
      ['concepts/builds.md', 'Builds'],
      ['concepts/manifest-builds.md', 'Manifest builds'],
      ['concepts/nix-expression-builds.md', 'Nix expression builds'],
      ['concepts/publishing.md', 'Publishing'],
      ['concepts/secrets-management.md', 'Secrets management'],
      ['concepts/flox-vs-containers.md', 'Flox vs. container workflows'],
    ],
  },
  { group: 'Languages', pages: [{ flat: 'languages' }] },
  { group: 'Customer', pages: [{ flat: 'customer' }] }, // not in nav, but real pages
  { group: 'Manual', pages: [['man/flox.md', 'flox'], { flat: 'man' }] },
];
const GROUP_ORDER = NAV_GROUPS.map((g) => g.group);

// Files that are partials, not pages.
const isPartial = (rel) => rel.startsWith('snippets/') || rel.startsWith('include/');

// --- fs walk --------------------------------------------------------------
async function walk(dir, base = dir) {
  const out = [];
  for (const entry of await readdir(dir)) {
    const full = path.join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) out.push(...(await walk(full, base)));
    else if (entry.endsWith('.md')) out.push(path.relative(base, full).split(path.sep).join('/'));
  }
  return out;
}

// --- slug -----------------------------------------------------------------
// rel is docs-root-relative ('concepts/environments.md', 'index.md', 'man/flox.md').
// Astro's glob loader strips dots from ids (manifest.toml -> manifesttoml), so we
// match that here — otherwise digest deep links wouldn't resolve to the pages
// Astro renders.
function slugFor(rel) {
  if (rel === 'index.md') return 'index';
  let s = rel.replace(/\.md$/, '');
  s = s.replace(/\/index$/, '');
  s = s.replace(/\./g, '');
  return s;
}

// Both the Go corpus and Astro slug headings with github-slugger, but Astro slugs
// the *rendered* text while the corpus slugs the *raw* markdown. Pre-render the
// heading text here (strip the markup a renderer would consume) so both feed
// github-slugger identical input and the anchors match byte-for-byte.
function sanitizeHeading(text) {
  return text
    .replace(/<[^>\n]+>/g, '') // html-like tags (<owner>, <name>, autolinks) — dropped by the browser
    .replace(/`([^`]*)`/g, '$1').replace(/`/g, '') // inline code -> its text
    .replace(/!?\[([^\]]+)\]\([^)]*\)/g, '$1') // links/images -> text
    .replace(/!?\[([^\]]+)\]\[[^\]]*\]/g, '$1') // reference links -> text
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // bold
    .replace(/\*([^*]+)\*/g, '$1') // italic *
    .replace(/(?<=\s|^)_([^_]+)_(?=\s|$)/g, '$1') // italic _ at word boundaries
    .replace(/:(?:material|fontawesome|fontawesome-brands|octicons|simple|emojione|twemoji|gemoji)[\w/-]*:/g, '') // icon shortcodes
    .replace(/&amp;/g, ' and ')
    .replace(/&(?:[a-z]+|#\d+);/gi, '')
    .replace(/&/g, ' and ')
    .replace(
      /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{2300}-\u{23FF}️]/gu,
      '',
    )
    // brackets/pipes/slashes -> space (slug-neutral with hyphens, and reads better
    // for man-page usage headings like "Pulling a new environment (--dir)")
    .replace(/[()[\]{}|/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    // trim outer punctuation so neither slugger emits a leading/trailing hyphen
    // (Astro's rehype-slug trims trailing hyphens; the corpus slugger does not)
    .replace(/^[^A-Za-z0-9]+/, '')
    .replace(/[^A-Za-z0-9]+$/, '');
}

// --- include / snippet inlining (indentation-aware, recursive) ------------
async function readMaybe(file) {
  try {
    return await readFile(file, 'utf8');
  } catch {
    return null;
  }
}

function indentBlock(text, indent) {
  if (!indent) return text;
  return text
    .split('\n')
    .map((l) => (l.trim() === '' ? l : indent + l))
    .join('\n');
}

// --8<-- "name"  (pymdownx.snippets, base_path docs/snippets)
async function inlineSnippets(text, depth = 0) {
  if (depth > 6) return text;
  const lines = text.split('\n');
  const out = [];
  for (const line of lines) {
    const m = line.match(/^(\s*)--8<--\s+"([^"]+)"\s*$/);
    if (m) {
      const raw = await readMaybe(path.join(SNIPPETS_DIR, m[2]));
      if (raw != null) {
        out.push(indentBlock(await inlineSnippets(stripComments(raw).trim(), depth + 1), m[1]));
        continue;
      }
    }
    out.push(line);
  }
  return out.join('\n');
}

// {% include-markdown "x" %} and {% include "x" %} (paths relative to docs/)
async function inlineIncludeMarkdown(text, depth = 0) {
  if (depth > 6) return text;
  const re = /([ \t]*)\{%[\s]*include(?:-markdown)?[\s]+"([^"]+)"[\s\S]*?%\}/g;
  let out = '';
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    out += text.slice(last, m.index);
    const raw = await readMaybe(path.join(DOCS_SRC, m[2]));
    out += raw != null ? indentBlock(await inlineIncludeMarkdown(stripComments(raw).trim(), depth + 1), m[1]) : '';
    last = re.lastIndex;
  }
  out += text.slice(last);
  // strip {% raw %} / {% endraw %} wrappers (content kept)
  return out.replace(/\{%\s*(?:end)?raw\s*%\}/g, '');
}

// ```{.include}\n ./a.md\n ./b.md\n```  (pandoc man-page includes, relative to MAN_SRC)
async function inlinePandocIncludes(text, baseDir) {
  const lines = text.split('\n');
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const open = lines[i].match(/^\s*(`{3,}|~{3,})\s*\{\s*\.include\s*\}\s*$/);
    if (open) {
      const marker = open[1][0];
      const files = [];
      i++;
      while (i < lines.length && !new RegExp(`^\\s*${marker === '`' ? '`' : '~'}{3,}\\s*$`).test(lines[i])) {
        const f = lines[i].trim();
        if (f) files.push(f);
        i++;
      }
      for (const f of files) {
        const raw = await readMaybe(path.join(baseDir, f));
        if (raw != null) out.push(stripComments(raw).trim());
      }
      continue;
    }
    out.push(lines[i]);
  }
  return out.join('\n');
}

function stripComments(text) {
  return text.replace(/<!--[\s\S]*?-->/g, '');
}

function substituteMacros(text) {
  return text.replace(/\{\{\s*([A-Z_][A-Z0-9_]*)\s*\}\}/g, (m, name) =>
    Object.prototype.hasOwnProperty.call(MACROS, name) ? MACROS[name] : m,
  );
}

// --- flatten admonitions / content tabs -----------------------------------
// MkDocs admonitions (`!!! note "T"`, `??? warning`) and content tabs (`=== "Tab"`)
// indent their bodies 4 spaces per level. Replace each marker with a bold label and
// dedent the contained body so it renders as plain CommonMark. Code fences inside a
// container keep their relative indentation (we don't close containers mid-fence).
const ADM_LABEL = {
  note: 'Note', tip: 'Tip', info: 'Info', abstract: 'Abstract', summary: 'Summary',
  question: 'Question', warning: 'Warning', caution: 'Caution', danger: 'Danger',
  failure: 'Failure', bug: 'Bug', example: 'Example', quote: 'Quote', success: 'Success',
  important: 'Important', hint: 'Hint',
};
const expandTabs4 = (s) => s.replace(/\t/g, '    ');

function flattenContainers(text) {
  const lines = expandTabs4(text).split('\n');
  const out = [];
  const stack = []; // marker column indents of currently-open containers
  let fence = null; // { marker, len } while inside a fenced code block

  const dedent = (line, n) => {
    if (n <= 0) return line;
    const lead = line.match(/^ */)[0];
    const cut = Math.min(lead.length, n);
    return line.slice(cut);
  };

  for (const line of lines) {
    const trimmed = line.trim();
    const indent = line.match(/^ */)[0].length;

    // fence tracking (so we don't mis-close containers on indented code content)
    const fm = trimmed.match(/^(`{3,}|~{3,})(.*)$/);
    if (fm && !fence) {
      // close any containers this fence is dedented out of, then open the fence
      while (stack.length && indent <= stack[stack.length - 1]) stack.pop();
      out.push(dedent(line, stack.length * 4));
      fence = { marker: fm[1][0], len: fm[1].length };
      continue;
    }
    if (fence) {
      const close = trimmed.match(/^(`{3,}|~{3,})\s*$/);
      out.push(dedent(line, stack.length * 4));
      if (close && close[1][0] === fence.marker && close[1].length >= fence.len) fence = null;
      continue;
    }

    if (trimmed !== '') {
      while (stack.length && indent <= stack[stack.length - 1]) stack.pop();
    }

    const adm = trimmed.match(/^(?:!!!|\?\?\?\+?)\s+([\w-]+)(?:\s+"([^"]*)")?\s*$/);
    const tab = trimmed.match(/^===\s*"([^"]*)"\s*$/);
    if (adm) {
      const label = adm[2] != null && adm[2] !== '' ? adm[2] : ADM_LABEL[adm[1].toLowerCase()] || adm[1];
      out.push(dedent('', 0)); // ensure block separation
      out.push(' '.repeat(Math.max(0, indent - stack.length * 4)) + `**${label}**`);
      out.push('');
      stack.push(indent);
      continue;
    }
    if (tab) {
      out.push('');
      out.push(' '.repeat(Math.max(0, indent - stack.length * 4)) + `**${tab[1]}**`);
      out.push('');
      stack.push(indent);
      continue;
    }

    out.push(dedent(line, stack.length * 4));
  }
  return out.join('\n');
}

// --- def lists ------------------------------------------------------------
// `term` \n `:   definition` (+ indented continuations). CommonMark has no def
// lists; bold the term and fold the definition into normal prose.
function flattenDefLists(text) {
  const lines = text.split('\n');
  // bold a term line when the next non-blank line is a `:   ` definition
  for (let i = 0; i < lines.length; i++) {
    if (/^:\s{2,}\S/.test(lines[i])) {
      let j = i - 1;
      while (j >= 0 && lines[j].trim() === '') j--;
      if (j >= 0 && lines[j].trim() && !/^[#>*\-|]/.test(lines[j].trim()) && !/\*\*$/.test(lines[j].trim())) {
        lines[j] = `**${lines[j].trim()}**`;
      }
    }
  }
  const out = [];
  let inDef = false;
  for (const line of lines) {
    const def = line.match(/^:\s{2,}(.*)$/);
    if (def) {
      out.push(def[1]);
      inDef = true;
      continue;
    }
    if (inDef) {
      if (line.trim() === '') {
        out.push(line);
        continue;
      }
      if (/^\s{2,}\S/.test(line)) {
        out.push(line.replace(/^\s+/, ''));
        continue;
      }
      inDef = false;
    }
    out.push(line);
  }
  return out.join('\n');
}

// --- body cleanup ---------------------------------------------------------
// Shiki (bundled with Astro) throws on unknown languages, so map anything outside
// a known-good set to `text`. Diagram fences (mermaid, d2) render as plain code.
const SHIKI_LANGS = new Set([
  'console', 'shell', 'shellscript', 'sh', 'bash', 'zsh', 'fish', 'powershell', 'ps',
  'text', 'txt', 'plaintext', 'ansi', 'log',
  'toml', 'yaml', 'yml', 'json', 'json5', 'jsonc', 'ini', 'properties', 'env', 'csv',
  'nix', 'dockerfile', 'docker', 'hcl', 'terraform', 'diff', 'make', 'makefile', 'cmake',
  'go', 'rust', 'rs', 'python', 'py', 'ruby', 'rb', 'c', 'cpp', 'cs', 'java', 'kotlin',
  'javascript', 'js', 'jsx', 'typescript', 'ts', 'tsx', 'html', 'xml', 'css', 'scss',
  'markdown', 'md', 'sql', 'graphql', 'lua', 'perl', 'php', 'groovy', 'scala', 'swift',
]);
function fenceLang(info) {
  const s = info.trim();
  if (!s) return '';
  let lang;
  const braced = s.match(/^\{([^}]*)\}$/);
  if (braced) {
    const cls = braced[1].trim().match(/\.([A-Za-z0-9_-]+)/); // first .class is the language
    lang = cls ? cls[1] : '';
  } else {
    lang = s.split(/\s+/)[0];
  }
  if (!lang) return '';
  return SHIKI_LANGS.has(lang.toLowerCase()) ? lang : 'text';
}

function stripAttrLists(line) {
  // { #id }, {:target="_blank" .md-button}, { .flox-purple .flox-heart } etc.
  return line.replace(/\{\s*[.:#][^}]*\}/g, '');
}

function stripIcons(line) {
  // Material/FontAwesome/Octicons/Simple icon shortcodes
  return line.replace(/:(?:material|fontawesome|fontawesome-brands|octicons|simple|emojione|twemoji|gemoji)[\w/-]*:/g, '');
}

function cleanBody(body, rel) {
  const fromDir = path.posix.dirname(rel);
  const lines = body.split('\n');
  const kept = [];
  let fence = null;
  for (let line of lines) {
    const fm = line.match(/^(\s*)(`{3,}|~{3,})(.*)$/);
    if (fm) {
      const marker = fm[2][0];
      const len = fm[2].length;
      const info = fm[3].trim();
      if (!fence) {
        fence = { marker, len };
        kept.push(`${fm[1]}${fm[2]}${fenceLang(info)}`); // normalize info string -> lang
      } else if (marker === fence.marker && len >= fence.len && info === '') {
        fence = null;
        kept.push(`${fm[1]}${fm[2]}`);
      } else {
        kept.push(line);
      }
      continue;
    }
    if (fence) {
      // demote ATX H2-H6 inside fences (e.g. `## comment`) to H1 — the corpus
      // parser sections on H2+ even inside fences, emitting anchors Astro never
      // renders. Single `#` is handled correctly.
      if (/^#{2,6}\s/.test(line)) line = line.replace(/^#{2,6}(\s)/, '#$1');
      kept.push(line);
      continue;
    }

    // headings: strip trailing attr list, sanitize text for slug parity
    const heading = line.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (heading) {
      const text = sanitizeHeading(stripAttrLists(heading[2]).replace(/\s+/g, ' ').trim());
      if (text) {
        kept.push(`${heading[1]} ${text}`);
        continue;
      }
    }

    // drop standalone HTML layout wrappers; leave inline HTML & autolinks
    if (/^\s*<\/?(div|figure|figcaption|span|center|p|details|summary)\b[^>]*>\s*$/i.test(line)) continue;

    line = stripIcons(stripAttrLists(line));

    // relative image links -> pinned raw URL
    line = line.replace(/(!\[[^\]]*\]\()([^)\s]+\.(?:png|jpe?g|gif|svg|webp|mp4))(\s+"[^"]*")?(\))/gi,
      (_m, pre, p, title, post) => {
        if (/^https?:/.test(p)) return `${pre}${p}${title || ''}${post}`;
        const joined = path.posix.normalize(path.posix.join(fromDir === '.' ? '' : fromDir, p));
        return `${pre}${RAW_DOCS}/${joined}${title || ''}${post}`;
      });
    line = line.replace(/(\b(?:src|poster)=")([^"]+\.(?:png|jpe?g|gif|svg|webp|mp4))(")/gi,
      (_m, pre, p, post) => {
        if (/^https?:/.test(p)) return `${pre}${p}${post}`;
        const joined = path.posix.normalize(path.posix.join(fromDir === '.' ? '' : fromDir, p));
        return `${pre}${RAW_DOCS}/${joined}${post}`;
      });

    // relative .md links -> /docs/<slug> (keep #fragment). Absolute/anchor/mail skip.
    line = line.replace(/\]\((?!https?:|\/|#|mailto:)([^)\s]+?)(#[^)\s]*)?\)/g, (_m, p, hash) => {
      if (!/\.md$/.test(p)) return `](${p}${hash || ''})`;
      const joined = path.posix.normalize(path.posix.join(fromDir === '.' ? '' : fromDir, p));
      return `](/docs/${slugFor(joined)}${hash || ''})`;
    });
    // reference-style link definitions: [ref]: ../x.md#a
    line = line.replace(/^(\s*\[[^\]]+\]:\s*)(?!https?:|\/|#|mailto:)([^\s#]+\.md)(#\S*)?\s*$/,
      (_m, pre, p, hash) => {
        const joined = path.posix.normalize(path.posix.join(fromDir === '.' ? '' : fromDir, p));
        return `${pre}/docs/${slugFor(joined)}${hash || ''}`;
      });

    kept.push(line);
  }
  return kept.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

// --- frontmatter ----------------------------------------------------------
function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n(?:---|\.\.\.)\n([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].replace(/^["']|["']$/g, '').trim();
  }
  return { data, body: m[2] };
}

function deriveDescription(body, title) {
  const para = body
    .split(/\n\s*\n/)
    .map((s) => s.trim())
    .find((s) => /^[A-Za-z`*]/.test(s) && !s.startsWith('```') && !s.startsWith('#') && !s.startsWith('<') && !s.startsWith('>') && !s.startsWith('**'));
  return (para || title)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#]/g, '')
    .replace(/\s+/g, ' ')
    .slice(0, 160)
    .trim();
}

const manTitle = (base) => (/^flox/.test(base) ? base.replace(/-/g, ' ') : base);

// --- build page list from NAV ---------------------------------------------
async function resolveNav(docRels, manRels) {
  const docSet = new Set(docRels);
  const manSet = new Set(manRels.map((r) => `man/${r}`));
  const pages = [];
  const seen = new Set();
  let order = 0;
  const add = (rel, label, group) => {
    if (seen.has(rel)) return;
    seen.add(rel);
    pages.push({ rel, label, group, order: order++ });
  };
  for (const { group, pages: entries } of NAV_GROUPS) {
    for (const e of entries) {
      if (Array.isArray(e)) {
        const [rel, label] = e;
        if (docSet.has(rel) || manSet.has(rel)) add(rel, label, group);
      } else if (e.flat) {
        const prefix = e.flat + '/';
        const matches = [...docSet, ...manSet].filter((r) => r.startsWith(prefix)).sort();
        for (const r of matches) {
          const base = r.slice(prefix.length).replace(/\.md$/, '');
          add(r, null, group); // label derived later
        }
      }
    }
  }
  // any docs page not placed by NAV -> fallback group by top dir
  for (const r of docRels) {
    if (!seen.has(r) && !isPartial(r)) add(r, null, 'More');
  }
  return pages;
}

// --- main -----------------------------------------------------------------
const docRels = (await walk(DOCS_SRC)).filter((r) => !isPartial(r)).sort();
const manRels = (await walk(MAN_SRC)).filter((r) => !r.includes('/')).sort(); // top-level man only
const navPages = await resolveNav(docRels, manRels);

const docs = [];
for (const { rel, label, group, order } of navPages) {
  const isMan = rel.startsWith('man/');
  const srcFile = isMan ? path.join(MAN_SRC, rel.slice('man/'.length)) : path.join(DOCS_SRC, rel);
  const raw = await readFile(srcFile, 'utf8');
  const { data, body: rawBody } = parseFrontmatter(raw);

  let body = stripComments(rawBody);
  if (isMan) {
    body = await inlinePandocIncludes(body, MAN_SRC);
    body = body.replace(/^(#{1,5})(\s)/gm, '#$1$2'); // demote headings one level
    body = flattenDefLists(body);
    body = cleanBody(body, rel);
  } else {
    body = await inlineSnippets(body);
    body = await inlineIncludeMarkdown(body);
    body = substituteMacros(body);
    body = flattenContainers(body);
    body = flattenDefLists(body);
    body = cleanBody(body, rel);
  }

  const h1 = body.match(/^#\s+(.+?)\s*$/m);
  const base = rel.replace(/\.md$/, '').split('/').pop();
  // Man pages carry an uppercase `title: FLOX-INSTALL` for troff; prefer the
  // friendly command form (`flox install`) for the site & sidebar.
  const title = (
    label ||
    (isMan ? manTitle(base) : data.title) ||
    (h1 && h1[1]) ||
    (isMan ? manTitle(base) : base.replace(/[_-]/g, ' '))
  ).trim();

  // drop a leading H1 (the layout renders the title)
  const bodyNoH1 = body.replace(/^#\s+.+\r?\n+/, '').trim();
  const description = data.description || deriveDescription(bodyNoH1, title);

  docs.push({ slug: slugFor(rel), title, description, group, order, body: bodyNoH1, bytes: bodyNoH1.length });
}

const totalBytes = docs.reduce((n, d) => n + d.bytes, 0);
console.log(`docs ${docRels.length} + man ${manRels.length} -> ${docs.length} pages, ${(totalBytes / 1024).toFixed(0)}KB body`);
const byGroup = {};
for (const d of docs) (byGroup[d.group] ??= []).push(d.slug);
for (const g of GROUP_ORDER.concat(Object.keys(byGroup).filter((g) => !GROUP_ORDER.includes(g)))) {
  if (byGroup[g]) console.log(`  [${g}] (${byGroup[g].length})`);
}

if (!WRITE) {
  console.log('\n(dry run — pass --write to emit files)');
} else {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  for (const d of docs) {
    const fm = `---\ntitle: ${JSON.stringify(d.title)}\ndescription: ${JSON.stringify(d.description)}\ngroup: ${JSON.stringify(d.group)}\norder: ${d.order}\n---\n\n${d.body}\n`;
    const dest = path.join(OUT, `${d.slug}.md`);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, fm, 'utf8');
  }
  console.log(`\nwrote ${docs.length} files to ${path.relative(process.cwd(), OUT)}`);
}
