---
id: "man/flox-activate#description"
title: "flox activate"
heading: "DESCRIPTION"
group: "Manual"
order: 325
url: "/docs/man/flox-activate#description"
anchor: "description"
terms: ["description","explains","activation","does","adds","package","binaries","path","sets","variables","aliases","runs","hooks","optionally","starts","services","four","modes","interactive","subshell","shell","command","direct","exec","place","sourcing","chosen","prompt","reflects","active","environments","layered","environment","context","deactivation","reverses","flox","env1","env2","env3"]
hash: "7dc2fd8584fb546c8911c33a34e271169a354803a959bec4bea6ead496737d3f"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox [env1 env2 env3] \u003cnormal prompt\u003e","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"bin","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"$PATH","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"--start-services","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"flox activate","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"$FLOX_SHELL","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"$SHELL","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"flox activate -c CMD","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"CMD","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"\u0026\u0026","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"flox activate -- CMD","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"[profile]","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"stdout","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"eval \"$(flox activate)\"","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"bash","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"fish","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"tcsh","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"zsh","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"profile","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"hook","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"PATH","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"MANPATH","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"PKG_CONFIG_PATH","chunkId":"man/flox-activate#description"},{"kind":"code","literal":"PYTHONPATH","chunkId":"man/flox-activate#description"}]
sources: [{"chunkId":"man/flox-activate#description","url":"/docs/man/flox-activate#description","anchor":"description"}]
---

Explains what activation does (adds package binaries to PATH, sets variables and aliases, runs hooks, optionally starts services) and the four activation modes (interactive subshell, shell command, direct exec, and in-place sourcing), how the shell is chosen, how the prompt reflects active environments, and how each layered environment's hooks run in its own context; deactivation reverses activation.
