---
id: "man/flox-build-update-catalogs#description"
title: "flox build update catalogs"
heading: "DESCRIPTION"
group: "Manual"
order: 382
url: "/docs/man/flox-build-update-catalogs#description"
anchor: "description"
terms: ["description","explains","command","reads","builds","catalog","config","regenerates","lockfile","pins","source","type","catalogs","prefetch","reproducible","both","should","committed","works","only","local","environments","warns","exits","without","error","file","exists","flox","toml","lock","flake","read","configuration","generate","regenerate","entry","resolved","pinned","locked"]
hash: "d525a0cb22de642976d5d9ada5c3510d509667207035570eed2437d60b95739c"
mode: "agent-primary"
facts: [{"kind":"code","literal":".flox/nix-builds.toml","chunkId":"man/flox-build-update-catalogs#description"},{"kind":"code","literal":".flox/nix-builds.lock","chunkId":"man/flox-build-update-catalogs#description"},{"kind":"code","literal":"nix-builds.toml(5)","chunkId":"man/flox-build-update-catalogs#description"},{"kind":"code","literal":"nix flake prefetch","chunkId":"man/flox-build-update-catalogs#description"}]
sources: [{"chunkId":"man/flox-build-update-catalogs#description","url":"/docs/man/flox-build-update-catalogs#description","anchor":"description"}]
---

Explains that the command reads the Nix-builds catalog config and regenerates a lockfile that pins each catalog (Nix source-type catalogs via prefetch, hub catalogs via the hub API) for reproducible builds, that both config and lockfile should be committed, that it works only with local environments, and that it warns and exits without error when no config file exists.
