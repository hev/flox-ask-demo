---
id: "concepts/manifest-builds#build-outputs"
title: "Manifest builds"
heading: "Build outputs"
group: "Concepts"
order: 77
url: "/docs/concepts/manifest-builds#build-outputs"
anchor: "build-outputs"
terms: ["build","outputs","explains","given","dedicated","initially","empty","output","directory","only","files","placed","there","count","should","follow","filesystem","hierarchy","standard","executables","pages","libraries","configuration","their","conventional","locations","scripts","marked","executable","manifest","builds","produce","single","mkdir","target","release","myproject","sbin","libexec","chmod"]
hash: "b4290fc270aee2eb784feee87b8bf97865777fc2970f0d8f3babe1efb2f762e5"
mode: "agent-primary"
facts: [{"kind":"code","literal":"mkdir -p $out/bin\ncp target/release/myproject $out/bin/myproject","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"out","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"myproject","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"$out","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"bin","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"lib","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"$out/bin","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"$out/sbin","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"$out/libexec","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"chmod +x","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"$out/share/man","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"$out/lib","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"$out/etc","chunkId":"concepts/manifest-builds#build-outputs"},{"kind":"code","literal":"man","chunkId":"concepts/manifest-builds#build-outputs"}]
sources: [{"chunkId":"concepts/manifest-builds#build-outputs","url":"/docs/concepts/manifest-builds#build-outputs","anchor":"build-outputs"}]
---

Explains that each build is given a dedicated, initially empty output directory, and only files placed there count as the build's output. The output should follow the Filesystem Hierarchy Standard, with executables, man pages, libraries, and configuration in their conventional locations and scripts marked executable; manifest builds produce a single output.
