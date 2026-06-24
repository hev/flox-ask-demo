---
id: "man/flox-config#description"
title: "flox config"
heading: "DESCRIPTION"
group: "Manual"
order: 393
url: "/docs/man/flox-config#description"
anchor: "description"
terms: ["description","explains","flags","list","flag","command","shows","options","computed","values","describes","precedence","order","configuration","sources","environment","variables","user","config","file","system","built","defaults","noting","mutating","commands","always","write","flox","screaming","snake","case","disable","metrics","true","toml","home","dirs","without","passed"]
hash: "3ebb19bc994ec434c1e9bf795cd1a2ad84ac4e049b64bf45430f9cd20a812632"
mode: "agent-primary"
facts: [{"kind":"code","literal":"-l","chunkId":"man/flox-config#description"},{"kind":"code","literal":"flox config","chunkId":"man/flox-config#description"},{"kind":"code","literal":"FLOX_","chunkId":"man/flox-config#description"},{"kind":"code","literal":"SCREAMING_SNAKE_CASE","chunkId":"man/flox-config#description"},{"kind":"code","literal":"disable_metrics","chunkId":"man/flox-config#description"},{"kind":"code","literal":"FLOX_DISABLE_METRICS=true","chunkId":"man/flox-config#description"},{"kind":"code","literal":"$FLOX_CONFIG_DIR/flox.toml","chunkId":"man/flox-config#description"},{"kind":"code","literal":"flox/flox.toml","chunkId":"man/flox-config#description"},{"kind":"code","literal":"$XDG_CONFIG_HOME","chunkId":"man/flox-config#description"},{"kind":"code","literal":"$XDG_CONFIG_DIRS","chunkId":"man/flox-config#description"},{"kind":"code","literal":"/etc/flox.toml","chunkId":"man/flox-config#description"},{"kind":"code","literal":"FLOX_SYSTEM_CONFIG_DIR/flox.toml","chunkId":"man/flox-config#description"},{"kind":"code","literal":"flox","chunkId":"man/flox-config#description"}]
sources: [{"chunkId":"man/flox-config#description","url":"/docs/man/flox-config#description","anchor":"description"}]
---

Explains that with no flags or with the list flag the command shows all options with computed values, and describes the precedence order of configuration sources (environment variables, the user config file, system config, then built-in defaults), noting that mutating commands always write to the user config file.
