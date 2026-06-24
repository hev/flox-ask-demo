---
id: "tutorials/build-and-publish#define-a-second-build"
title: "Building and publishing packages"
heading: "Define a second build"
group: "Tutorials"
order: 676
url: "/docs/tutorials/build-and-publish#define-a-second-build"
anchor: "define-a-second-build"
terms: ["define","second","build","shows","environment","multiple","builds","example","fast","development","alongside","optimized","production","both","drawing","same","source","tools","running","defined","target","name","hello","command","ldflags","gcflags","mkdir","description","program","greets","very","quickly","version","flox","edit","possible","more","would","want","case"]
hash: "a0438511a90905f9ecc5676aa9e60468a88e7f2c40cc3baf766eea75d26b4aca"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.hello-opt]\ncommand = '''\n  go build -ldflags=\"-s -w\" -gcflags=\"-l=4\"\n  mkdir -p $out/bin\n  cp hello $out/bin/hello\n'''\ndescription = \"A program that greets you, very quickly\"\nversion = \"1.0.0\"","chunkId":"tutorials/build-and-publish#define-a-second-build"},{"kind":"code","literal":"hello","chunkId":"tutorials/build-and-publish#define-a-second-build"},{"kind":"code","literal":"flox edit","chunkId":"tutorials/build-and-publish#define-a-second-build"},{"kind":"code","literal":"flox build","chunkId":"tutorials/build-and-publish#define-a-second-build"},{"kind":"code","literal":"hello-opt","chunkId":"tutorials/build-and-publish#define-a-second-build"},{"kind":"code","literal":"flox build hello-opt","chunkId":"tutorials/build-and-publish#define-a-second-build"}]
sources: [{"chunkId":"tutorials/build-and-publish#define-a-second-build","url":"/docs/tutorials/build-and-publish#define-a-second-build","anchor":"define-a-second-build"}]
---

Shows that an environment can define multiple builds, for example a fast development build alongside an optimized production build, both drawing on the same source and tools. Running the build builds all defined builds, or you can target one by name.
