---
id: "tutorials/overriding-packages#build-the-package"
title: "Using a newer version of a package"
heading: "Build the package"
group: "Tutorials"
order: 785
url: "/docs/tutorials/overriding-packages#build-the-package"
anchor: "build-the-package"
terms: ["build","package","shows","running","again","after","supplying","correct","hash","succeeds","expression","mode","verifying","resulting","overridden","binary","runs","flox","building","hello","completed","successfully","output","created","result","world","verify","works"]
hash: "d15e71b67ad4ba653d4589e62db140c5186abd3317c539df69a9791c304d43e3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox build\nBuilding hello-2.12.2 in Nix expression mode\n...\nCompleted build of hello-2.12.2 in Nix expression mode\n\n✨ Build completed successfully. Output created: ./result-hello","chunkId":"tutorials/overriding-packages#build-the-package"},{"kind":"code","literal":"$ ./result-hello/bin/hello\nHello, world!","chunkId":"tutorials/overriding-packages#build-the-package"},{"kind":"code","literal":"flox build","chunkId":"tutorials/overriding-packages#build-the-package"}]
sources: [{"chunkId":"tutorials/overriding-packages#build-the-package","url":"/docs/tutorials/overriding-packages#build-the-package","anchor":"build-the-package"}]
---

Shows running the build again after supplying the correct hash, which now succeeds in Nix expression mode, and verifying the resulting overridden binary runs.
