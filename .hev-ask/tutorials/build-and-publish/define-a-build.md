---
id: "tutorials/build-and-publish#define-a-build"
title: "Building and publishing packages"
heading: "Define a build"
group: "Tutorials"
order: 675
url: "/docs/tutorials/build-and-publish#define-a-build"
anchor: "define-a-build"
terms: ["define","build","explains","declare","manifest","section","named","entry","becomes","package","short","script","compiles","program","copies","result","output","directory","temporary","path","follows","filesystem","hierarchy","standard","executables","belong","subdirectory","behavior","unexpected","hello","description","custom","printing","world","command","mkdir","produces","executable","file","flox"]
hash: "57764306993bd4f1fcdf9dfe6a85ef09768e8dbb39600546ffcfa3c5f913d4a7"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.hello]\ndescription = \"My custom program printing hello world in Go\"\ncommand = '''\n  mkdir -p $out/bin\n  go build # produces the ./hello executable file\n  cp hello $out/bin/hello\n'''","chunkId":"tutorials/build-and-publish#define-a-build"},{"kind":"code","literal":"[build]","chunkId":"tutorials/build-and-publish#define-a-build"},{"kind":"code","literal":"build","chunkId":"tutorials/build-and-publish#define-a-build"},{"kind":"code","literal":"$out","chunkId":"tutorials/build-and-publish#define-a-build"},{"kind":"code","literal":"hello","chunkId":"tutorials/build-and-publish#define-a-build"},{"kind":"code","literal":"/bin","chunkId":"tutorials/build-and-publish#define-a-build"},{"kind":"code","literal":"/lib","chunkId":"tutorials/build-and-publish#define-a-build"},{"kind":"code","literal":"$out/bin","chunkId":"tutorials/build-and-publish#define-a-build"},{"kind":"code","literal":"flox edit","chunkId":"tutorials/build-and-publish#define-a-build"}]
sources: [{"chunkId":"tutorials/build-and-publish#define-a-build","url":"/docs/tutorials/build-and-publish#define-a-build","anchor":"define-a-build"}]
---

Explains how to declare a build in the manifest's build section, where each named entry becomes a new package. A build is a short script that compiles the program and copies the result into the output directory, a temporary output path that follows the Filesystem Hierarchy Standard; executables belong in the bin subdirectory or behavior may be unexpected.
