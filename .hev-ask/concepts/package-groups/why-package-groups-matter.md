---
id: "concepts/package-groups#why-package-groups-matter"
title: "Package Groups"
heading: "Why Package Groups Matter"
group: "Concepts"
order: 140
url: "/docs/concepts/package-groups#why-package-groups-matter"
anchor: "why-package-groups-matter"
terms: ["package","groups","matter","argues","while","makes","coexistence","mechanically","possible","make","simple","declarative","correct","within","group","packages","share","same","revision","shared","dependencies","guaranteed","compatible","matters","interact","runtime","such","python","extensions","sharing","interpreter","libraries","agreeing","layouts","notes","also","improve","resolver","performance","shrinking"]
hash: "08582c1ca625455cec041a4f81c86ad6e49f15d4399c7c92c8eaedc2bc6a1993"
mode: "agent-primary"
facts: [{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#why-package-groups-matter"},{"kind":"code","literal":"openssl","chunkId":"concepts/package-groups#why-package-groups-matter"},{"kind":"code","literal":"RUNPATH","chunkId":"concepts/package-groups#why-package-groups-matter"},{"kind":"code","literal":"libpython","chunkId":"concepts/package-groups#why-package-groups-matter"},{"kind":"code","literal":"numpy","chunkId":"concepts/package-groups#why-package-groups-matter"},{"kind":"code","literal":"scipy","chunkId":"concepts/package-groups#why-package-groups-matter"},{"kind":"code","literal":"libcurl","chunkId":"concepts/package-groups#why-package-groups-matter"},{"kind":"value","literal":"e.g","chunkId":"concepts/package-groups#why-package-groups-matter"},{"kind":"value","literal":"i.e","chunkId":"concepts/package-groups#why-package-groups-matter"}]
sources: [{"chunkId":"concepts/package-groups#why-package-groups-matter","url":"/docs/concepts/package-groups#why-package-groups-matter","anchor":"why-package-groups-matter"}]
---

Argues that while Nix makes coexistence mechanically possible, package groups make it simple, declarative, and correct: within a group all packages share the same revision so shared dependencies are guaranteed compatible, which matters for packages that interact at runtime such as Python extensions sharing an interpreter or C/C++ libraries agreeing on layouts. Notes package groups also improve resolver performance by shrinking the constraint-solving search space.
