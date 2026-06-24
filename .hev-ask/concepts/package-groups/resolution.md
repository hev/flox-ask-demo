---
id: "concepts/package-groups#resolution"
title: "Package Groups"
heading: "Resolution"
group: "Concepts"
order: 129
url: "/docs/concepts/package-groups#resolution"
anchor: "resolution"
terms: ["resolution","explains","happens","during","triggered","commands","like","install","edit","push","pull","activate","closure","materialized","group","resolver","collects","constraints","searches","catalog","revisions","newest","first","single","revision","satisfying","packages","across","target","systems","applies","package","filters","path","version","broken","unfree","locks","result","shared"]
hash: "f462c4a11fcb645a993868513658f4b79363d75606d744ededc03a403b9fbdb9"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox install","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"flox edit","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"flox push","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"flox pull","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"flox activate","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"$FLOX_ENV","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"pkg-path","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"version","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"broken","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"unfree","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"systems","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"manifest.lock","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"rev","chunkId":"concepts/package-groups#resolution"},{"kind":"code","literal":"locked_url","chunkId":"concepts/package-groups#resolution"}]
sources: [{"chunkId":"concepts/package-groups#resolution","url":"/docs/concepts/package-groups#resolution","anchor":"resolution"}]
---

Explains what happens during resolution, triggered by commands like install, edit, push, pull, or activate when the closure isn't yet materialized. For each group the resolver collects constraints, searches catalog revisions newest-first for a single revision satisfying all packages across all target systems, applies per-package filters (path, version, broken/unfree, systems), and locks the result with a shared revision and locked URL.
