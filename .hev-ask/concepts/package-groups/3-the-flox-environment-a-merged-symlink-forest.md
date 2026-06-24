---
id: "concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest"
title: "Package Groups"
heading: "3. The Flox Environment: A Merged Symlink Forest"
group: "Concepts"
order: 111
url: "/docs/concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest"
anchor: "3-the-flox-environment-a-merged-symlink-forest"
terms: ["flox","environment","merged","symlink","forest","explains","property","underlying","coexistence","building","materializes","single","derivation","producing","symlinks","store","merging","packages","groups","package","only","resolution","time","concept","exist","materialized","file","conflicts","occur","install","same","relative","path","resolved","priority","equal","reported","collisions","output","curl"]
hash: "0cc8418aa5a64951600aaa1d2d7dbb0074ead83663cc6ff9cb0a85743b658b3f"
mode: "agent-primary"
facts: [{"kind":"code","literal":"~/.flox/run/\u003cenv\u003e/          # the environment's output\n├── bin/\n│   ├── Git -\u003e /nix/store/...-Git-2.47.1/bin/Git\n│   ├── curl -\u003e /nix/store/...-curl-8.11.1/bin/curl\n│   └── gum -\u003e /nix/store/...-gum-0.17.0/bin/gum\n├── lib/\n│   └── ...\n└── share/\n    └── ...","chunkId":"concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest"},{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest"},{"kind":"code","literal":"bin/python","chunkId":"concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest"},{"kind":"code","literal":"priority","chunkId":"concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest"},{"kind":"value","literal":"i.e","chunkId":"concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest"},{"kind":"value","literal":"e.g","chunkId":"concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest"}]
sources: [{"chunkId":"concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest","url":"/docs/concepts/package-groups#3-the-flox-environment-a-merged-symlink-forest","anchor":"3-the-flox-environment-a-merged-symlink-forest"}]
---

Explains the Flox property underlying coexistence: building an environment materializes a single derivation producing a forest of symlinks into the Nix store, merging packages from all groups. Package groups are only a resolution-time concept and don't exist in the materialized environment; file conflicts occur only when two packages install to the same relative path and are resolved by the priority key, with equal-priority conflicts reported as collisions.
