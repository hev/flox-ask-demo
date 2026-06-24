---
id: "man/nix-buildstoml#declare-a-catalog-with-a-pinned-branch"
title: "nix-builds.toml"
heading: "Declare a catalog with a pinned branch"
group: "Manual"
order: 661
url: "/docs/man/nix-buildstoml#declare-a-catalog-with-a-pinned-branch"
anchor: "declare-a-catalog-with-a-pinned-branch"
terms: ["declare","catalog","pinned","branch","example","declaring","specific","version","catalogs","mylib","type","https","github","release"]
hash: "03eef1795b337cbb59ac1182c311d0b69ba5182691e6bb720ea7317237682766"
mode: "agent-primary"
facts: [{"kind":"code","literal":"version = 1\n\n[catalogs.mylib]\ntype = \"git\"\nurl = \"https://github.com/org/mylib\"\nref = \"release-2.0\"","chunkId":"man/nix-buildstoml#declare-a-catalog-with-a-pinned-branch"}]
sources: [{"chunkId":"man/nix-buildstoml#declare-a-catalog-with-a-pinned-branch","url":"/docs/man/nix-buildstoml#declare-a-catalog-with-a-pinned-branch","anchor":"declare-a-catalog-with-a-pinned-branch"}]
---

Example declaring a Git catalog pinned to a specific branch.
