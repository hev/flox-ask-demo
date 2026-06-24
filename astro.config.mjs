import { defineConfig } from 'astro/config';
import hevAsk from '@hevmind/ask';
import cloudflare from '@astrojs/cloudflare';

// Demo: Flox's published docs (flox/floxdocs, plus the CLI manual generated from
// flox/flox's cli/flox/doc) vendored into an Astro content collection so
// @hevmind/ask can search them. Flox's docs are MkDocs Material; scripts/ingest.mjs
// normalizes the Material extensions (admonitions, content tabs, snippets, macros,
// attr-list code fences) into clean CommonMark. Slugs preserve flox.dev/docs's
// paths (/docs/concepts/environments, /docs/man/flox-install) and headings are
// slugged with github-slugger so deep links line up. Doc pages prerender to
// static HTML; the /api/ask search endpoint renders on demand as a Cloudflare
// Pages Function.
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  // smartypants rewrites `--` -> en/em dash and straight quotes -> curly in
  // rendered text, which mangles CLI flags (`--dir`) in headings and drifts the
  // github-slugger anchors away from the digest. Keep typography literal so the
  // rendered ids match the committed digest (and `ask digest verify` stays green).
  markdown: { smartypants: false },
  integrations: [
    hevAsk({
      collections: ['docs'],
      basePath: '/docs/',
      // Chunk at ## so each doc section (and each man-page section: NAME,
      // SYNOPSIS, OPTIONS, ...) becomes a node. The digest build (corpus/assemble)
      // uses the same depth so node ids line up with the runtime keyword index.
      chunkHeadingDepth: 2,
    }),
  ],
});
