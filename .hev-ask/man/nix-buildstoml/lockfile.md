---
id: "man/nix-buildstoml#lockfile"
title: "nix-builds.toml"
heading: "Lockfile"
group: "Manual"
order: 666
url: "/docs/man/nix-buildstoml#lockfile"
anchor: "lockfile"
terms: ["lockfile","explains","update","catalogs","command","produces","json","pinning","every","catalog","resolved","state","consumed","build","time","required","present","current","before","building","packages","reference","flox","builds","lock","running","file","pins","specific","must","date"]
hash: "ae3c83435ad53b9287d6e571a6233d1ab00695a6a3c81cbe98efc3b4ec7f2a48"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox build update-catalogs","chunkId":"man/nix-buildstoml#lockfile"},{"kind":"code","literal":".flox/nix-builds.lock","chunkId":"man/nix-buildstoml#lockfile"},{"kind":"code","literal":"flox build","chunkId":"man/nix-buildstoml#lockfile"}]
sources: [{"chunkId":"man/nix-buildstoml#lockfile","url":"/docs/man/nix-buildstoml#lockfile","anchor":"lockfile"}]
---

Explains that the update-catalogs command produces a JSON lockfile pinning every catalog to a resolved state, consumed at build time and required to be present and current before building packages that reference catalogs.
