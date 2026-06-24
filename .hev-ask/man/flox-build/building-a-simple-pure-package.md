---
id: "man/flox-build#building-a-simple-pure-package"
title: "flox build"
heading: "Building a simple pure package"
group: "Manual"
order: 347
url: "/docs/man/flox-build#building-a-simple-pure-package"
anchor: "building-a-simple-pure-package"
terms: ["building","simple","pure","package","worked","example","minimal","build","produces","single","output","file","builds","inspects","resulting","directory","flox","manifest","toml","hello","command","produce","something","move","mkdir","echo","world","description","containing","version","result","instructions","verify","contents"]
hash: "5148b77826bfb286d39c7ed8dc98c3ff6cadbf8c9f45887909170c17a0527cf1"
mode: "agent-primary"
facts: [{"kind":"code","literal":"# file: .flox/env/manifest.toml\n\n...\n[build]\nhello.command = '''\n# produce something and move it to $out\nmkdir -p $out\necho \"hello world\" \u003e\u003e $out/hello.txt\n'''\ndescription = \"Produces a file containing 'hello world'\"\nversion = \"0.0.0\"","chunkId":"man/flox-build#building-a-simple-pure-package"},{"kind":"code","literal":"$ flox build hello\n$ ls ./result-hello\nhello.txt\n$ cat ./result-hello/hello.txt\nhello world","chunkId":"man/flox-build#building-a-simple-pure-package"}]
sources: [{"chunkId":"man/flox-build#building-a-simple-pure-package","url":"/docs/man/flox-build#building-a-simple-pure-package","anchor":"building-a-simple-pure-package"}]
---

Worked example of a minimal package build that produces a single output file, then builds it and inspects the resulting output directory.
