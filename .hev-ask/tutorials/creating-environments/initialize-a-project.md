---
id: "tutorials/creating-environments#initialize-a-project"
title: "Creating environments"
heading: "Initialize a project"
group: "Tutorials"
order: 702
url: "/docs/tutorials/creating-environments#initialize-a-project"
anchor: "initialize-a-project"
terms: ["initialize","project","walks","through","initializing","environment","creates","hidden","directory","holding","declarative","configuration","checked","version","control","init","example","initialized","empty","repository","users","username","flox","created","aarch64","darwin","next","search","package","install","activate","enter","called","floxinit","command","once","environmentconcept","been","notice","some"]
hash: "323ee3a6c48d0f1d0090dc7a82a89c5ae545ea6507bb471da63e7fffd0597763"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ git init example-project \u0026\u0026 cd example-project\nInitialized empty Git repository in /Users/your-username/example-project/.git/","chunkId":"tutorials/creating-environments#initialize-a-project"},{"kind":"code","literal":"$ flox init\n⚡︎ Created environment example-project (aarch64-darwin)\n\nNext:\n  $ flox search \u003cpackage\u003e    \u003c- Search for a package\n  $ flox install \u003cpackage\u003e   \u003c- Install a package into an environment\n  $ flox activate            \u003c- Enter the environment","chunkId":"tutorials/creating-environments#initialize-a-project"},{"kind":"code","literal":"example-project","chunkId":"tutorials/creating-environments#initialize-a-project"},{"kind":"code","literal":"flox init","chunkId":"tutorials/creating-environments#initialize-a-project"},{"kind":"code","literal":".flox","chunkId":"tutorials/creating-environments#initialize-a-project"}]
sources: [{"chunkId":"tutorials/creating-environments#initialize-a-project","url":"/docs/tutorials/creating-environments#initialize-a-project","anchor":"initialize-a-project"}]
---

Walks through initializing a project environment, which creates a hidden environment directory holding the environment's declarative configuration that can be checked into version control.
