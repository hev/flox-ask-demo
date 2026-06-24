---
id: "tutorials/customizing-environments#adding-a-directory-to-path"
title: "Customizing the shell environment"
heading: "Adding a directory to PATH"
group: "Tutorials"
order: 712
url: "/docs/tutorials/customizing-environments#adding-a-directory-to-path"
anchor: "adding-a-directory-to-path"
terms: ["adding","directory","path","shows","build","output","activation","hook","freshly","compiled","program","name","without","typing","full","more","convenient","rebuilding","invoking","time","mycli","flox","cargo","toml","lock","main","target","debug","activate","export","hello","world","quickly","commands","against","development","working","instance","command","line"]
hash: "73f464cf49b7f79b106371e354e4447b7567ffa47c6c77942193e1920aeb7779"
mode: "agent-primary"
facts: [{"kind":"code","literal":"mycli/\n    .flox\n    Cargo.toml\n    Cargo.lock\n    src/\n        main.rs\n    target/\n        debug/\n            mycli","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"code","literal":"[hook]\non-activate = '''\n    export PATH=\"$PWD/target/debug:$PATH\"\n'''","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"code","literal":"$ flox activate\n...\n$ cargo build\n...\n$ mycli\nHello, World!","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"code","literal":"mycli -h","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"code","literal":"cargo","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"code","literal":"target/debug","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"code","literal":"mycli","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"code","literal":"PATH","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"code","literal":"hook.on-activate","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"code","literal":"target/debug/mycli","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"},{"kind":"value","literal":"e.g","chunkId":"tutorials/customizing-environments#adding-a-directory-to-path"}]
sources: [{"chunkId":"tutorials/customizing-environments#adding-a-directory-to-path","url":"/docs/tutorials/customizing-environments#adding-a-directory-to-path","anchor":"adding-a-directory-to-path"}]
---

Shows adding a build-output directory to the path via the activation hook so a freshly compiled program can be run by name without typing its full path, which is more convenient than rebuilding and invoking it each time.
