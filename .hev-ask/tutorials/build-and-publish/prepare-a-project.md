---
id: "tutorials/build-and-publish#prepare-a-project"
title: "Building and publishing packages"
heading: "Prepare a project"
group: "Tutorials"
order: 679
url: "/docs/tutorials/build-and-publish#prepare-a-project"
anchor: "prepare-a-project"
terms: ["prepare","project","sets","example","creating","directory","initializing","flox","environment","installing","toolchain","adding","minimal","hello","world","program","confirms","compiles","runs","before","handing","build","mkdir","myproject","init","created","aarch64","darwin","next","search","package","install","activate","enter","edit","variables","shell","hooks","installed","version"]
hash: "7d552998be5d458f186b988f94dc9431760a63629dea200922c0c15b17140256"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ mkdir myproject\n$ cd myproject\n$ flox init\n⚡︎ Created environment 'myproject' (aarch64-darwin)\n\nNext:\n  $ flox search \u003cpackage\u003e    \u003c- Search for a package\n  $ flox install \u003cpackage\u003e   \u003c- Install a package into an environment\n  $ flox activate            \u003c- Enter the environment\n  $ flox edit                \u003c- Add environment variables and shell hooks","chunkId":"tutorials/build-and-publish#prepare-a-project"},{"kind":"code","literal":"$ flox install go\n✔ 'go' installed to environment 'myproject'\n$ # let's see what version of Go we have\n$ flox list\ngo: go (1.24.1)","chunkId":"tutorials/build-and-publish#prepare-a-project"},{"kind":"code","literal":"$ flox activate\n✔ You are now using the environment 'myproject'.\nTo stop using this environment, type 'exit'\n\nflox [myproject] $ go mod init hello\ngo: creating new go.mod: module hello\nflox [myproject] $ touch main.go","chunkId":"tutorials/build-and-publish#prepare-a-project"},{"kind":"code","literal":"package main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(\"Hello World\")\n}","chunkId":"tutorials/build-and-publish#prepare-a-project"},{"kind":"code","literal":"flox [myproject] $ go build\nflox [myproject] $ # ensure that 'hello' was built\nflox [myproject] $ ls -al\n.rw-r--r--   24 zmitchell 27 Mar 14:31 go.mod\n.rwxr-xr-x 2.4M zmitchell 27 Mar 14:32 hello\n.rw-r--r--   77 zmitchell 27 Mar 14:32 main.go","chunkId":"tutorials/build-and-publish#prepare-a-project"},{"kind":"code","literal":"flox [myproject] $ # ensure that 'hello' runs\nflox [myproject] $ ./hello\nHello World","chunkId":"tutorials/build-and-publish#prepare-a-project"},{"kind":"code","literal":"myproject","chunkId":"tutorials/build-and-publish#prepare-a-project"},{"kind":"code","literal":"main.go","chunkId":"tutorials/build-and-publish#prepare-a-project"},{"kind":"code","literal":"hello","chunkId":"tutorials/build-and-publish#prepare-a-project"}]
sources: [{"chunkId":"tutorials/build-and-publish#prepare-a-project","url":"/docs/tutorials/build-and-publish#prepare-a-project","anchor":"prepare-a-project"}]
---

Sets up the example by creating a project directory, initializing a Flox environment, installing the Go toolchain, and adding a minimal hello-world program, then confirms it compiles and runs before handing the build over to Flox.
