---
id: "concepts/nix-expression-builds#overview"
title: "Nix expression builds"
heading: "Overview"
group: "Concepts"
order: 97
url: "/docs/concepts/nix-expression-builds#overview"
anchor: "overview"
terms: ["overview","explains","expression","builds","files","environment","packages","directory","written","language","yielding","truly","reproducible","containing","needs","installed","because","defines","dependencies","though","flox","tries","produce","build","compatible","toplevel","package","group","pkgs","defined","creating","these","expressions","incredibly","powerful","results","contains","doesn","need","within"]
hash: "15011ab84a5b39aeef1c90f234fb00ecb7fef2c724be1bbd00d7f3d6fa46156c"
mode: "agent-primary"
facts: [{"kind":"code","literal":".flox/pkgs/","chunkId":"concepts/nix-expression-builds#overview"}]
sources: [{"chunkId":"concepts/nix-expression-builds#overview","url":"/docs/concepts/nix-expression-builds#overview","anchor":"overview"}]
---

Explains that Nix expression builds are files in the environment's packages directory written in the Nix language, yielding truly reproducible builds. The containing environment needs no installed packages because the expression defines all its dependencies, though if packages are installed Flox tries to produce a build compatible with the toplevel package group.
