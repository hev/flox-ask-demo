---
id: "tutorials/migrations/homebrew#verify-configuration"
title: "Homebrew"
heading: "Verify configuration"
group: "Tutorials"
order: 767
url: "/docs/tutorials/migrations/homebrew#verify-configuration"
anchor: "verify-configuration"
terms: ["verify","configuration","describes","verifying","migration","opening","shell","apply","dotfile","changes","first","activation","slow","while","default","environment","materializes","cached","confirming","active","environments","list","installed","package","appears","listing","flox","envs","https","user","exit","create","causing","take","effect","time","happens","experience","delay","materialized"]
hash: "791b0441716ca0bd0f9fb6d2d1c3ee0ad0913e21c869aeefa767425f6d26816e"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox [default] % flox envs\n⚡︎ Active environments:\n  default           https://hub.flox.dev/user/default","chunkId":"tutorials/migrations/homebrew#verify-configuration"},{"kind":"code","literal":"flox [default] % flox list\njq: jq (1.7.1)","chunkId":"tutorials/migrations/homebrew#verify-configuration"},{"kind":"code","literal":"flox envs","chunkId":"tutorials/migrations/homebrew#verify-configuration"},{"kind":"code","literal":"default","chunkId":"tutorials/migrations/homebrew#verify-configuration"},{"kind":"code","literal":"flox list","chunkId":"tutorials/migrations/homebrew#verify-configuration"}]
sources: [{"chunkId":"tutorials/migrations/homebrew#verify-configuration","url":"/docs/tutorials/migrations/homebrew#verify-configuration","anchor":"verify-configuration"}]
---

Describes verifying the migration by opening a new shell to apply dotfile changes (the first activation may be slow while the default environment materializes, then cached), confirming the default environment is active in the active-environments list, and confirming the installed package appears in the environment listing.
