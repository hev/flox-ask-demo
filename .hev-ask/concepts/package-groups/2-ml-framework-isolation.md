---
id: "concepts/package-groups#2-ml-framework-isolation"
title: "Package Groups"
heading: "2. ML Framework Isolation"
group: "Concepts"
order: 108
url: "/docs/concepts/package-groups#2-ml-framework-isolation"
anchor: "2-ml-framework-isolation"
terms: ["framework","isolation","practical","example","showing","machine","learning","serving","project","several","plugin","groups","pinned","catalog","revision","updating","package","doesn","force","unrelated","packages","other","change","nixpkgs","torch","numpy","transformers","pytorch","inference","commit","install","python3","path","python313","group","flox","cuda","python3packages","systems","x8664"]
hash: "3b8f184fe604b21348d62252b55ead3c28c96a30bbf3c6e5767bbf51be4cdd8d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#2-ml-framework-isolation"},{"kind":"code","literal":"torch","chunkId":"concepts/package-groups#2-ml-framework-isolation"},{"kind":"code","literal":"numpy","chunkId":"concepts/package-groups#2-ml-framework-isolation"},{"kind":"code","literal":"transformers","chunkId":"concepts/package-groups#2-ml-framework-isolation"}]
sources: [{"chunkId":"concepts/package-groups#2-ml-framework-isolation","url":"/docs/concepts/package-groups#2-ml-framework-isolation","anchor":"2-ml-framework-isolation"}]
---

A practical example showing a machine-learning serving project with several plugin groups each pinned to its own catalog revision, so updating one framework package doesn't force unrelated packages in other groups to change.
