---
id: "languages/rust#manifest-builds"
title: "Rust"
heading: "Manifest builds"
group: "Languages"
order: 306
url: "/docs/languages/rust#manifest-builds"
anchor: "manifest-builds"
terms: ["manifest","builds","build","rust","projects","flox","copying","compiled","binary","output","plus","platform","specific","runtime","library","requirements","unicode","macos","support","linux","vendor","crates","pure","network","isolated","multi","stage","myproject","command","cargo","release","mkdir","target","libiconv","path","systems","aarch64","darwin","packages","install"]
hash: "46b28cae30a9525ccb0355de1a41bdc928b9a24dd96a7134099066bc15e8cd0b"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.myproject]\ncommand = '''\n  cargo build --release\n  mkdir -p $out/bin\n  cp target/release/myproject $out/bin/myproject\n'''","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"libiconv.pkg-path = \"libiconv\"\nlibiconv.systems = [\"aarch64-darwin\", \"x86_64-darwin\"]","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"gcc.pkg-path = \"gcc\"\ngcc.systems = [\"aarch64-linux\", \"x86_64-linux\"]","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"[build.myproject]\n…\nruntime-packages = [… \"gcc\"]","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"$out","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"target","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"libiconv","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"[install]","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"libgcc","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"gcc","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"toplevel","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"pkg-group","chunkId":"languages/rust#manifest-builds"},{"kind":"code","literal":"runtime-packages","chunkId":"languages/rust#manifest-builds"},{"kind":"value","literal":"i.e","chunkId":"languages/rust#manifest-builds"}]
sources: [{"chunkId":"languages/rust#manifest-builds","url":"/docs/languages/rust#manifest-builds","anchor":"manifest-builds"}]
---

How to build Rust projects with Flox manifest builds, copying the compiled binary into the output, plus platform-specific runtime library requirements (a Unicode library on macOS, the GCC support library on Linux) and how to vendor crates in a pure network-isolated multi-stage build.
