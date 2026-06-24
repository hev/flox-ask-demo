---
id: "man/nix-buildstoml#using-catalogs-in-nix-expressions"
title: "nix-builds.toml"
heading: "Using catalogs in Nix expressions"
group: "Manual"
order: 671
url: "/docs/man/nix-buildstoml#using-catalogs-in-nix-expressions"
anchor: "using-catalogs-in-nix-expressions"
terms: ["catalogs","expressions","explains","under","environment","package","directory","receive","argument","exposing","declared","catalog","attribute","keyed","name","example","flox","pkgs","hello","mycatalog","some","builds","toml","appears"]
hash: "3f0d91ef680013147775beb2e7d1bff1aead8fe81bc795c7f97ce107c6a4af06"
mode: "agent-primary"
facts: [{"kind":"code","literal":"# .flox/pkgs/hello.nix\n{ catalogs }:\ncatalogs.mycatalog.some-package","chunkId":"man/nix-buildstoml#using-catalogs-in-nix-expressions"},{"kind":"code","literal":".flox/pkgs/","chunkId":"man/nix-buildstoml#using-catalogs-in-nix-expressions"},{"kind":"code","literal":"catalogs","chunkId":"man/nix-buildstoml#using-catalogs-in-nix-expressions"},{"kind":"code","literal":"nix-builds.toml","chunkId":"man/nix-buildstoml#using-catalogs-in-nix-expressions"},{"kind":"code","literal":"\u003cname\u003e","chunkId":"man/nix-buildstoml#using-catalogs-in-nix-expressions"}]
sources: [{"chunkId":"man/nix-buildstoml#using-catalogs-in-nix-expressions","url":"/docs/man/nix-buildstoml#using-catalogs-in-nix-expressions","anchor":"using-catalogs-in-nix-expressions"}]
---

Explains that Nix expressions under the environment's package directory receive a catalogs argument exposing each declared catalog as an attribute set keyed by name, with an example.
