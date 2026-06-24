---
id: "man/nix-buildstoml#use-a-catalog-in-a-package-expression"
title: "nix-builds.toml"
heading: "Use a catalog in a package expression"
group: "Manual"
order: 670
url: "/docs/man/nix-buildstoml#use-a-catalog-in-a-package-expression"
anchor: "use-a-catalog-in-a-package-expression"
terms: ["catalog","package","expression","example","referencing","declared","within","flox","pkgs","catalogs","myorg","build","tool"]
hash: "a19594a00641ce4184127d74979cde1a33fbb700b465aa98e26a951348d9c0ec"
mode: "agent-primary"
facts: [{"kind":"code","literal":"# .flox/pkgs/app.nix\n{ catalogs }:\ncatalogs.myorg.build-tool","chunkId":"man/nix-buildstoml#use-a-catalog-in-a-package-expression"}]
sources: [{"chunkId":"man/nix-buildstoml#use-a-catalog-in-a-package-expression","url":"/docs/man/nix-buildstoml#use-a-catalog-in-a-package-expression","anchor":"use-a-catalog-in-a-package-expression"}]
---

Example of referencing a declared catalog's package from within a Nix package expression.
