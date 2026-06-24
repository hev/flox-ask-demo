---
id: "man/manifesttoml#hook"
title: "manifest.toml"
heading: "hook"
group: "Manual"
order: 647
url: "/docs/man/manifesttoml#hook"
anchor: "hook"
terms: ["hook","documents","section","activation","script","runs","predictable","bash","shell","perform","initialization","spawning","processes","setting","variables","dynamically","creating","files","later","profile","scripts","notes","standard","output","redirected","error","only","first","concurrent","activations","ephemeral","should","idempotent","written","defensively","older","field","deprecated","favor","activate"]
hash: "2da1dcac4efbc5ba8c8630721983ae7b3a44db489dd17cdc8a2adb6e93da2d0b"
mode: "agent-primary"
facts: [{"kind":"code","literal":"on-activate","chunkId":"man/manifesttoml#hook"},{"kind":"code","literal":"[hook]","chunkId":"man/manifesttoml#hook"},{"kind":"code","literal":"[vars]","chunkId":"man/manifesttoml#hook"},{"kind":"code","literal":"[profile]","chunkId":"man/manifesttoml#hook"},{"kind":"code","literal":"stdout","chunkId":"man/manifesttoml#hook"},{"kind":"code","literal":"stderr","chunkId":"man/manifesttoml#hook"},{"kind":"code","literal":"flox activate","chunkId":"man/manifesttoml#hook"},{"kind":"code","literal":"flox","chunkId":"man/manifesttoml#hook"},{"kind":"code","literal":"services start","chunkId":"man/manifesttoml#hook"},{"kind":"code","literal":"profile","chunkId":"man/manifesttoml#hook"}]
sources: [{"chunkId":"man/manifesttoml#hook","url":"/docs/man/manifesttoml#hook","anchor":"hook"}]
---

Documents the hook section's activation script, which runs in a predictable Bash shell to perform initialization (spawning processes, setting variables dynamically, creating files for later profile scripts), notes that its standard output is redirected to standard error, that it runs only for the first of concurrent activations and may be re-run by ephemeral activations (so it should be idempotent and written defensively), and that an older script field is deprecated in favor of the profile section.
