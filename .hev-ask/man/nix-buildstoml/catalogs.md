---
id: "man/nix-buildstoml#catalogs"
title: "nix-builds.toml"
heading: "catalogs"
group: "Manual"
order: 660
url: "/docs/man/nix-buildstoml#catalogs"
anchor: "catalogs"
terms: ["catalogs","documents","section","entry","declares","single","catalog","keyed","name","reference","expressions","available","three","forms","structured","source","type","specific","fields","shorthand","syntax","pulls","published","matching","registered","identifier","mycatalog","https","github","repo","main","floxhub","branch","commit","builtins","html","under","becomes","package","accessed"]
hash: "59402225b4df5f8ed1ffe2393b7e7e00f9ce46bbc08f699562280721ad446302"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[catalogs.mycatalog]\ntype = \"git\"\nurl = \"https://github.com/org/repo\"\nref = \"main\"","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"[catalogs.mycatalog]\nurl = \"git+https://github.com/org/repo\"","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"[catalogs.mycatalog]\ntype = \"floxhub\"","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"catalogs","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"\u003cname\u003e","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"foo","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"mycatalog","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"catalogs.mycatalog.foo","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"type","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"url","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"?ref=\u003cbranch\u003e","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"?rev=\u003ccommit\u003e","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"code","literal":"\"floxhub\"","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"value","literal":"nix.dev","chunkId":"man/nix-buildstoml#catalogs"},{"kind":"value","literal":"builtins.html","chunkId":"man/nix-buildstoml#catalogs"}]
sources: [{"chunkId":"man/nix-buildstoml#catalogs","url":"/docs/man/nix-buildstoml#catalogs","anchor":"catalogs"}]
---

Documents the catalogs section where each entry declares a single catalog keyed by a name used to reference it in Nix expressions, available in three forms: a structured Nix source type with type-specific fields, a shorthand single URL using Nix source-reference syntax, and a hub catalog type that pulls from a published hub catalog matching a registered identifier.
