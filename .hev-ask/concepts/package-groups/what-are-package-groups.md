---
id: "concepts/package-groups#what-are-package-groups"
title: "Package Groups"
heading: "What Are Package Groups"
group: "Concepts"
order: 136
url: "/docs/concepts/package-groups#what-are-package-groups"
anchor: "what-are-package-groups"
terms: ["package","groups","defines","mechanism","managing","dependency","conflicts","group","resolves","against","same","nixpkgs","commit","different","resolve","commits","guarding","runtime","binary","interface","version","notes","equals","catalog","revision","also","organizational","tool","keep","time","tools","build","context","recommends","installing","incompatible","sets","packages","unstable","github"]
hash: "cef74c4fe7fe6421b7e9ae17295e30d7f53b2e1d4757c4527b473570124565ab"
mode: "agent-primary"
facts: [{"kind":"code","literal":"pkg-group","chunkId":"concepts/package-groups#what-are-package-groups"},{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#what-are-package-groups"},{"kind":"code","literal":"unstable","chunkId":"concepts/package-groups#what-are-package-groups"},{"kind":"value","literal":"Github.com","chunkId":"concepts/package-groups#what-are-package-groups"},{"kind":"value","literal":"nixos.wiki","chunkId":"concepts/package-groups#what-are-package-groups"}]
sources: [{"chunkId":"concepts/package-groups#what-are-package-groups","url":"/docs/concepts/package-groups#what-are-package-groups","anchor":"what-are-package-groups"}]
---

Defines package groups as a mechanism for managing dependency conflicts where each package in a group resolves against the same nixpkgs commit and different groups may resolve against different commits, guarding against runtime binary-interface and version conflicts. Notes a nixpkgs commit equals a catalog revision, that groups are also an organizational tool and a way to keep dev-time tools out of build context, and recommends using them when installing incompatible sets of packages.
