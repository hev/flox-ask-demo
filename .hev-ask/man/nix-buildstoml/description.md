---
id: "man/nix-buildstoml#description"
title: "nix-builds.toml"
heading: "DESCRIPTION"
group: "Manual"
order: 664
url: "/docs/man/nix-buildstoml#description"
anchor: "description"
terms: ["description","explains","environment","uses","expression","builds","those","expressions","depend","external","catalogs","file","declares","available","come","update","command","resolves","pins","lockfile","both","files","should","committed","version","control","flox","pkgs","toml","build","lock","packages","defined","under","provided","running","every","catalog","entry","writes"]
hash: "8556bcdf6b1456a9bc433cf03bccd290118c3b875b89762718db8fb1b2c7e4a4"
mode: "agent-primary"
facts: [{"kind":"code","literal":".nix","chunkId":"man/nix-buildstoml#description"},{"kind":"code","literal":".flox/pkgs/","chunkId":"man/nix-buildstoml#description"},{"kind":"code","literal":"nix-builds.toml","chunkId":"man/nix-buildstoml#description"},{"kind":"code","literal":"flox build update-catalogs","chunkId":"man/nix-buildstoml#description"},{"kind":"code","literal":".flox/nix-builds.lock","chunkId":"man/nix-buildstoml#description"}]
sources: [{"chunkId":"man/nix-buildstoml#description","url":"/docs/man/nix-buildstoml#description","anchor":"description"}]
---

Explains that when an environment uses Nix expression builds those expressions can depend on external catalogs, that this file declares which catalogs are available and where they come from, that the update-catalogs command resolves and pins them into a lockfile, and that both files should be committed to version control.
