---
id: "concepts/nix-expression-builds#defining-builds"
title: "Nix expression builds"
heading: "Defining builds"
group: "Concepts"
order: 88
url: "/docs/concepts/nix-expression-builds#defining-builds"
anchor: "defining-builds"
terms: ["defining","builds","explains","expression","defined","files","environment","packages","directory","package","name","derived","path","filename","these","names","conflict","manifest","same","must","tracked","stray","cache","secrets","stay","flox","pkgs","hello","default","build","specified","corresponds","different","taken","combination","file","example","cannot","concept","result"]
hash: "da6e7ec3872cf9628f1646373df999d69afb4f2ab26ef7b58dcd6ad2bf4d6e8c"
mode: "agent-primary"
facts: [{"kind":"code","literal":".flox/pkgs/","chunkId":"concepts/nix-expression-builds#defining-builds"},{"kind":"code","literal":".flox/pkgs/hello.nix","chunkId":"concepts/nix-expression-builds#defining-builds"},{"kind":"code","literal":"hello","chunkId":"concepts/nix-expression-builds#defining-builds"},{"kind":"code","literal":".flox/pkgs/hello/default.nix","chunkId":"concepts/nix-expression-builds#defining-builds"},{"kind":"code","literal":".flox/pkgs/hello/how/do/you/do/default.nix","chunkId":"concepts/nix-expression-builds#defining-builds"},{"kind":"code","literal":"hello.how.do.you.do","chunkId":"concepts/nix-expression-builds#defining-builds"},{"kind":"code","literal":".flox/pkgs","chunkId":"concepts/nix-expression-builds#defining-builds"},{"kind":"code","literal":"git add","chunkId":"concepts/nix-expression-builds#defining-builds"}]
sources: [{"chunkId":"concepts/nix-expression-builds#defining-builds","url":"/docs/concepts/nix-expression-builds#defining-builds","anchor":"defining-builds"}]
---

Explains that Nix expression builds are defined as files in the environment's packages directory, with each package's name derived from its path and filename. These names can't conflict with manifest builds in the same environment, and all files in the packages directory must be tracked by Git so stray cache files and secrets stay out of the package.
