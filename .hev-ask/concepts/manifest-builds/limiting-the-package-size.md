---
id: "concepts/manifest-builds#limiting-the-package-size"
title: "Manifest builds"
heading: "Limiting the package size"
group: "Concepts"
order: 82
url: "/docs/concepts/manifest-builds#limiting-the-package-size"
anchor: "limiting-the-package-size"
terms: ["limiting","package","size","explains","transitive","closure","notes","large","costs","disk","bandwidth","though","runtime","performance","default","packages","toplevel","group","become","dependencies","option","lets","trim","only","install","actually","needed","excluding","build","version","hello","path","ripgrep","command","mkdir","echo","chmod","list","options","systems"]
hash: "bde2e08d69b47f397c0056144fef6ec5eb5b445c14ec568420813e69abbf3a9e"
mode: "agent-primary"
facts: [{"kind":"code","literal":"version = 1\n\n[install]\nhello.pkg-path = \"hello-go\"\nripgrep.pkg-path = \"ripgrep\"\n\n[build.hello-pkg]\ncommand = '''\n  mkdir -p $out/bin\n  echo \"hello-go\" \u003e $out/bin/hello-pkg\n  chmod +x $out/bin/hello-pkg\n'''\nruntime-packages = [ \"hello\" ] # List of `install-id`s\n\n[options]\nsystems = [\"aarch64-darwin\", \"x86_64-darwin\", \"aarch64-linux\", \"x86_64-linux\"]","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"libc","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"toplevel","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"pkg-group","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"runtime-packages","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"install-id","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"pkg-path","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"myhello","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"myhello.pkg-path = \"hello\"","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"hello-go","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"ripgrep","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"code","literal":"\"hello\"","chunkId":"concepts/manifest-builds#limiting-the-package-size"},{"kind":"value","literal":"e.g","chunkId":"concepts/manifest-builds#limiting-the-package-size"}]
sources: [{"chunkId":"concepts/manifest-builds#limiting-the-package-size","url":"/docs/concepts/manifest-builds#limiting-the-package-size","anchor":"limiting-the-package-size"}]
---

Explains the transitive closure of a package and notes that a large closure costs disk and bandwidth though not runtime performance. By default all packages in the default toplevel package group become runtime dependencies, but the runtime-packages option lets you trim that set to only the install-ids actually needed at runtime, excluding build- or dev-only packages.
