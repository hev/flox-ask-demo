---
id: "concepts/manifest-builds#defining-builds"
title: "Manifest builds"
heading: "Defining builds"
group: "Concepts"
order: 78
url: "/docs/concepts/manifest-builds#defining-builds"
anchor: "defining-builds"
terms: ["defining","builds","explains","build","manifest","section","corresponds","separate","package","letting","produce","multiple","packages","source","short","bash","script","usual","commands","inside","activation","environment","optionally","version","description","metadata","reference","other","name","enable","ordered","multi","stage","important","pure","myproject","command","cargo","release","mkdir"]
hash: "38c59c8fd8a88376b47605655300e05aea0215d6824b4976c7b6206e7a817c2d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.myproject]\ncommand = '''\n  cargo build --release\n  mkdir -p $out/bin\n  cp target/release/myproject $out/bin/myproject\n'''\nversion = \"0.0.1\"\ndescription = \"The coolest project ever\"","chunkId":"concepts/manifest-builds#defining-builds"},{"kind":"code","literal":"[build]","chunkId":"concepts/manifest-builds#defining-builds"},{"kind":"code","literal":"make","chunkId":"concepts/manifest-builds#defining-builds"},{"kind":"code","literal":"cargo build","chunkId":"concepts/manifest-builds#defining-builds"},{"kind":"code","literal":"version","chunkId":"concepts/manifest-builds#defining-builds"},{"kind":"code","literal":"description","chunkId":"concepts/manifest-builds#defining-builds"},{"kind":"code","literal":"myproject","chunkId":"concepts/manifest-builds#defining-builds"},{"kind":"code","literal":"${name}","chunkId":"concepts/manifest-builds#defining-builds"},{"kind":"code","literal":"name","chunkId":"concepts/manifest-builds#defining-builds"},{"kind":"value","literal":"e.g","chunkId":"concepts/manifest-builds#defining-builds"}]
sources: [{"chunkId":"concepts/manifest-builds#defining-builds","url":"/docs/concepts/manifest-builds#defining-builds","anchor":"defining-builds"}]
---

Explains that each build in the manifest's build section corresponds to a separate package, letting you produce multiple packages from one source. A build is a short Bash script of the usual build commands run inside an activation of the environment, optionally with version and description metadata, and builds can reference other builds by name to enable ordered multi-stage builds important for pure builds.
