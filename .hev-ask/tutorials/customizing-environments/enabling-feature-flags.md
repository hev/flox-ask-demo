---
id: "tutorials/customizing-environments#enabling-feature-flags"
title: "Customizing the shell environment"
heading: "Enabling feature flags"
group: "Tutorials"
order: 714
url: "/docs/tutorials/customizing-environments#enabling-feature-flags"
anchor: "enabling-feature-flags"
terms: ["enabling","feature","flags","demonstrates","setting","flag","environment","variables","constant","values","vars","section","experimental","features","enabled","automatically","inside","activated","mycli","enable","color","turbo","mode","flox","activate","echo","worked","while","developed","some","aren","publicly","available","accessed","certain","common","disable","want","able","test"]
hash: "d70530ff65886d6e0c7c33d392bdb2ac9a6e97b6f31792e9c7603e39e368b33e"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[vars]\nMYCLI_ENABLE_COLOR=\"1\"\nMYCLI_TURBO_MODE=\"1\"","chunkId":"tutorials/customizing-environments#enabling-feature-flags"},{"kind":"code","literal":"$ flox activate\n...\n$ echo $MYCLI_TURBO_MODE\n1","chunkId":"tutorials/customizing-environments#enabling-feature-flags"},{"kind":"code","literal":"mycli","chunkId":"tutorials/customizing-environments#enabling-feature-flags"},{"kind":"code","literal":"MYCLI_ENABLE_COLOR","chunkId":"tutorials/customizing-environments#enabling-feature-flags"},{"kind":"code","literal":"MYCLI_TURBO_MODE","chunkId":"tutorials/customizing-environments#enabling-feature-flags"},{"kind":"code","literal":"\"1\"","chunkId":"tutorials/customizing-environments#enabling-feature-flags"},{"kind":"code","literal":"[vars]","chunkId":"tutorials/customizing-environments#enabling-feature-flags"}]
sources: [{"chunkId":"tutorials/customizing-environments#enabling-feature-flags","url":"/docs/tutorials/customizing-environments#enabling-feature-flags","anchor":"enabling-feature-flags"}]
---

Demonstrates setting feature-flag environment variables with constant values in the vars section so that experimental features are enabled automatically inside the activated environment.
