---
id: "concepts/package-groups#mental-model-the-same-package-group--the-same-nixpkgs-commit"
title: "Package Groups"
heading: "Mental Model: The Same Package Group = The Same nixpkgs Commit"
group: "Concepts"
order: 124
url: "/docs/concepts/package-groups#mental-model-the-same-package-group--the-same-nixpkgs-commit"
anchor: "mental-model-the-same-package-group--the-same-nixpkgs-commit"
terms: ["mental","model","same","package","group","nixpkgs","commit","presents","core","every","dependency","pinned","historical","were","built","tested","against","share","libraries","minimizing","risk","binary","interface","incompatibilities","glibc","libstdc","gets","means","packages","result","shared","such","across","minimizes"]
hash: "a09ae874f3f2d03669f5977d629606dd6b28ef7ce41043de74b850655d53826c"
mode: "agent-primary"
facts: [{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#mental-model-the-same-package-group--the-same-nixpkgs-commit"},{"kind":"code","literal":"glibc","chunkId":"concepts/package-groups#mental-model-the-same-package-group--the-same-nixpkgs-commit"},{"kind":"code","literal":"libstdc++","chunkId":"concepts/package-groups#mental-model-the-same-package-group--the-same-nixpkgs-commit"}]
sources: [{"chunkId":"concepts/package-groups#mental-model-the-same-package-group--the-same-nixpkgs-commit","url":"/docs/concepts/package-groups#mental-model-the-same-package-group--the-same-nixpkgs-commit","anchor":"mental-model-the-same-package-group--the-same-nixpkgs-commit"}]
---

Presents the core mental model that every dependency in a package group is pinned to the same historical commit, so they were built and tested against the same package set and share the same core libraries, minimizing the risk of binary-interface incompatibilities.
