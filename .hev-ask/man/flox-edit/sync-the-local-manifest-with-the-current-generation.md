---
id: "man/flox-edit#sync-the-local-manifest-with-the-current-generation"
title: "flox edit"
heading: "Sync the local manifest with the current generation"
group: "Manual"
order: 438
url: "/docs/man/flox-edit#sync-the-local-manifest-with-the-current-generation"
anchor: "sync-the-local-manifest-with-the-current-generation"
terms: ["sync","local","manifest","current","generation","explains","environments","pushed","pulled","changes","block","other","environment","commands","until","either","commit","discard","resetting","latest","flox","toml","install","uninstall","edit","upgrade","reset","were","floxhub","proceed"]
hash: "e179d84c6402019902061a2b1eab0da13f54f47468e71e34a42eb50b79f83742"
mode: "agent-primary"
facts: [{"kind":"code","literal":".flox/env/manifest.toml","chunkId":"man/flox-edit#sync-the-local-manifest-with-the-current-generation"},{"kind":"code","literal":"flox {install, uninstall, edit, upgrade}","chunkId":"man/flox-edit#sync-the-local-manifest-with-the-current-generation"},{"kind":"code","literal":"flox edit --sync","chunkId":"man/flox-edit#sync-the-local-manifest-with-the-current-generation"},{"kind":"code","literal":"flox edit --reset","chunkId":"man/flox-edit#sync-the-local-manifest-with-the-current-generation"}]
sources: [{"chunkId":"man/flox-edit#sync-the-local-manifest-with-the-current-generation","url":"/docs/man/flox-edit#sync-the-local-manifest-with-the-current-generation","anchor":"sync-the-local-manifest-with-the-current-generation"}]
---

Explains that for environments pushed to or pulled from the hub, local manifest changes block other environment commands until you either commit them to a new generation or discard them by resetting to the latest generation.
