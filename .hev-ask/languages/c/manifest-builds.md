---
id: "languages/c#manifest-builds"
title: "C/C++"
heading: "Manifest builds"
group: "Languages"
order: 274
url: "/docs/languages/c#manifest-builds"
anchor: "manifest-builds"
terms: ["manifest","builds","build","projects","flox","examples","autotools","cmake","emphasizing","install","prefix","must","point","output","directory","myproject","command","configure","make","dcmake","since","specific","example","also","work","project","copied","doing","looks","much","same","dcmakeinstallprefix"]
hash: "45e48c952527b8dd1630b9ab33419fc800b2ba52b3401bea02faa15a6907cb40"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.myproject]\ncommand = '''\n  ./configure --prefix=$out\n  make\n  make install\n'''","chunkId":"languages/c#manifest-builds"},{"kind":"code","literal":"[build.myproject]\ncommand = '''\n  cmake -DCMAKE_INSTALL_PREFIX=$out\n  make\n  make install PREFIX=$out\n'''","chunkId":"languages/c#manifest-builds"},{"kind":"code","literal":"autotools","chunkId":"languages/c#manifest-builds"},{"kind":"code","literal":"$out","chunkId":"languages/c#manifest-builds"},{"kind":"code","literal":"CMake","chunkId":"languages/c#manifest-builds"}]
sources: [{"chunkId":"languages/c#manifest-builds","url":"/docs/languages/c#manifest-builds","anchor":"manifest-builds"}]
---

How to build C/C++ projects with Flox manifest builds, with examples for autotools and CMake projects, emphasizing that the install prefix must point at the build output directory.
