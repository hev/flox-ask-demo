---
id: "concepts/package-groups#lock-file-anatomy"
title: "Package Groups"
heading: "Lock File Anatomy"
group: "Concepts"
order: 123
url: "/docs/concepts/package-groups#lock-file-anatomy"
anchor: "lock-file-anatomy"
terms: ["lock","file","anatomy","walks","through","annotated","excerpt","showing","resolved","package","records","group","catalog","revision","packages","sharing","same","locked","separate","entries","system","priority","field","conflicts","notes","without","constraints","flox","resolves","coherent","closure","many","narrows","satisfying","commits","tends","pull","historical","versions","manifest"]
hash: "9232d536789e676e86d8c5e0525125aaf6b8a631ca86370c64b35d6127559675"
mode: "agent-primary"
facts: [{"kind":"code","literal":"manifest.lock","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"rev","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"toplevel","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"locked_url","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"x86_64-linux","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"aarch64-darwin","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"priority","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"pkg-group","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"openssl","chunkId":"concepts/package-groups#lock-file-anatomy"},{"kind":"code","literal":"curl","chunkId":"concepts/package-groups#lock-file-anatomy"}]
sources: [{"chunkId":"concepts/package-groups#lock-file-anatomy","url":"/docs/concepts/package-groups#lock-file-anatomy","anchor":"lock-file-anatomy"}]
---

Walks through an annotated lock-file excerpt showing that each resolved package records its group and the catalog revision its group resolved to, with all packages in a group sharing the same revision and locked URL, separate entries per system, and a priority field for file conflicts. Notes that without group or priority constraints Flox resolves all packages into one coherent closure, which with many packages narrows the satisfying commits and tends to pull in historical versions.
