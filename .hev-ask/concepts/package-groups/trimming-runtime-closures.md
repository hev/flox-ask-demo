---
id: "concepts/package-groups#trimming-runtime-closures"
title: "Package Groups"
heading: "Trimming Runtime Closures"
group: "Concepts"
order: 133
url: "/docs/concepts/package-groups#trimming-runtime-closures"
anchor: "trimming-runtime-closures"
terms: ["trimming","runtime","closures","practical","example","showing","default","every","toplevel","package","becomes","dependency","build","packages","option","accepts","install","only","trims","dependencies","final","closure","clang","path","bash","pytest","myapp","command","make","kept","excluded","exclude","list","values","before","section","toml","definition","group"]
hash: "863f2219c576ad9dffea99db4b923a0dba97ddefc42ea608495a532061f09a7d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[install]\nclang.pkg-path = \"clang\"\nbash.pkg-path = \"bash\"\npytest.pkg-path = \"pytest\"\n\n[build.myapp]\ncommand = '''\n  make\n  mv build/myapp $out/bin/\n'''\nruntime-packages = [\"clang\", \"bash\"]  # only clang and bash are kept at runtime; pytest is excluded","chunkId":"concepts/package-groups#trimming-runtime-closures"},{"kind":"code","literal":"toplevel","chunkId":"concepts/package-groups#trimming-runtime-closures"},{"kind":"code","literal":"runtime-packages","chunkId":"concepts/package-groups#trimming-runtime-closures"},{"kind":"code","literal":"install-id","chunkId":"concepts/package-groups#trimming-runtime-closures"},{"kind":"code","literal":".pkg-path","chunkId":"concepts/package-groups#trimming-runtime-closures"},{"kind":"code","literal":"[install]","chunkId":"concepts/package-groups#trimming-runtime-closures"},{"kind":"value","literal":"i.e","chunkId":"concepts/package-groups#trimming-runtime-closures"}]
sources: [{"chunkId":"concepts/package-groups#trimming-runtime-closures","url":"/docs/concepts/package-groups#trimming-runtime-closures","anchor":"trimming-runtime-closures"}]
---

A practical example showing that by default every toplevel package becomes a runtime dependency of a build, and how the runtime-packages option (which accepts toplevel install-ids only) trims build-only dependencies out of the final closure.
