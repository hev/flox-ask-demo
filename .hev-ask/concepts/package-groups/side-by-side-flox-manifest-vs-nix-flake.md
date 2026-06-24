---
id: "concepts/package-groups#side-by-side-flox-manifest-vs-nix-flake"
title: "Package Groups"
heading: "Side-by-Side: Flox Manifest vs. Nix Flake"
group: "Concepts"
order: 132
url: "/docs/concepts/package-groups#side-by-side-flox-manifest-vs-nix-flake"
anchor: "side-by-side-flox-manifest-vs-nix-flake"
terms: ["side","flox","manifest","flake","comparison","showing","group","resolves","automatically","against","equivalent","requires","manually","discovering","pinning","separate","nixpkgs","inputs","wiring","outputs","illustrating","package","groups","automate","install","path","toplevel","cmake","python311","scientific","same","numpy","scipy","python311packages","resolved","discovered","pinned","analogous","github","nixos"]
hash: "fc75af467ee96a2ade2ea9e5ed98dbebd5d29b7d4cae840c9044fa9a05631c7d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"# Flox manifest\n\n[install]\ngcc.pkg-path = \"gcc\"               # toplevel\ncmake.pkg-path = \"cmake\"           # toplevel\n\npython311.pkg-path = \"python311\"\npython311.pkg-group = \"scientific\" # same group as numpy/scipy\n\nnumpy.pkg-path = \"python311Packages.numpy\"\nnumpy.pkg-group = \"scientific\"\n\nscipy.pkg-path = \"python311Packages.scipy\"\nscipy.pkg-group = \"scientific\"","chunkId":"concepts/package-groups#side-by-side-flox-manifest-vs-nix-flake"},{"kind":"code","literal":"inputs","chunkId":"concepts/package-groups#side-by-side-flox-manifest-vs-nix-flake"}]
sources: [{"chunkId":"concepts/package-groups#side-by-side-flox-manifest-vs-nix-flake","url":"/docs/concepts/package-groups#side-by-side-flox-manifest-vs-nix-flake","anchor":"side-by-side-flox-manifest-vs-nix-flake"}]
---

A side-by-side comparison showing a two-group Flox manifest that resolves automatically against the equivalent Nix flake, which requires manually discovering and pinning two separate nixpkgs inputs and wiring them into outputs, illustrating what package groups automate.
