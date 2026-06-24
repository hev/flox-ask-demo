# flox-ask-demo

**Live: [flox.hevask.com](https://flox.hevask.com)** — press `⌘K`.

A live demo of [`@hevmind/ask`](https://www.npmjs.com/package/@hevmind/ask) —
a `⌘K` agentic search overlay for docs sites — running over **Flox's published
documentation**.

It answers questions the way a reader actually asks them ("how do I share an
environment with my team?", "how do I pin a specific version of a package?",
"how do I use Flox in CI?", "what's the difference between Flox and containers?")
by reasoning across the docs and returning a grounded answer with inline deep
links to the exact sections — alongside instant keyword search over every page.

> **This is an unaffiliated demo.** It is not produced or endorsed by Flox. The
> documentation content is Flox's, redistributed here from
> [`flox/floxdocs`](https://github.com/flox/floxdocs) and
> [`flox/flox`](https://github.com/flox/flox) (see **Attribution**). The search
> experience is `@hevmind/ask`.

## How it works

- **Corpus** — Flox's docs, vendored into an Astro content collection from two
  pinned sources: the curated guides and concepts from
  [`flox/floxdocs`](https://github.com/flox/floxdocs), and the CLI **Manual**
  (man pages for every `flox` subcommand) generated from
  [`flox/flox`](https://github.com/flox/flox)'s `cli/flox/doc/`, exactly as the
  official site assembles them. 96 pages in all.
- **MkDocs → CommonMark** — Flox's docs are MkDocs Material.
  `scripts/ingest.mjs` shows precisely how they were pulled and normalized:
  group/order come from `mkdocs.yml`'s nav; admonitions, content tabs, snippets,
  `include-markdown`, pandoc `{.include}` blocks, macros (`{{ FLOX_VERSION }}`),
  attr-list code fences (`` ```{ .bash .copy } ``), icon shortcodes, and
  definition lists are all converted to clean Markdown. Page slugs preserve
  flox.dev/docs's URL structure and headings are slugged with github-slugger so
  deep links line up.
- **Digest** — a committed, offline-built Markdown tree at `.hev-ask/` gives the
  agentic loop section summaries, grounded facts, source anchors, and a
  glossary. It is reviewable on purpose. `ask digest verify` confirms every
  digest anchor resolves to a real heading on the rendered site (711 anchors).
- **Two search paths** — instant keyword search (keyless, covers every page),
  and an agentic answer loop (on Enter) that streams a grounded response over
  SSE. The loop needs a provider API key, supplied as a server secret at runtime.
- **Hosting** — Astro on Cloudflare Pages. Doc pages prerender to static HTML;
  the `/api/ask` endpoint runs as a Pages Function.

## Run locally

```sh
npm install
ANTHROPIC_API_KEY=sk-ant-... npm run dev    # http://localhost:4321
```

Without a key, keyword search still works; the agentic path degrades gracefully.

To re-pull the docs and rebuild the content collection:

```sh
# curated docs (pinned commit)
git clone --filter=blob:none --no-checkout https://github.com/flox/floxdocs /tmp/floxdocs
git -C /tmp/floxdocs sparse-checkout set docs mkdocs.yml
git -C /tmp/floxdocs checkout ed5868432ebadf830228325e961b33b9bc302769

# CLI manual sources (pinned)
git clone --filter=blob:none --no-checkout https://github.com/flox/flox /tmp/flox-cli
git -C /tmp/flox-cli sparse-checkout set cli/flox/doc
git -C /tmp/flox-cli checkout bc43fa6f70cc6d91a46d086586fb8bc3b1d44981

FLOXDOCS_SRC=/tmp/floxdocs/docs FLOX_MAN_SRC=/tmp/flox-cli/cli/flox/doc npm run ingest
```

Rebuilding the digest (`ask digest build`) needs a provider API key; the
committed `.hev-ask/` tree is used as-is otherwise.

## Attribution

Flox documentation © Flox, Inc., sourced from
[`flox/floxdocs`](https://github.com/flox/floxdocs) (pinned commit
`ed58684`) and [`flox/flox`](https://github.com/flox/flox) (the `cli/flox/doc`
CLI manual, pinned commit `bc43fa6`). Images load directly from GitHub at the
pinned commit. The Flox
name and logo are marks of Flox, Inc., used here only to identify the source
docs in this demo. The search experience is
[`@hevmind/ask`](https://hevask.com).
