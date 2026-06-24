---
id: "languages/rust#add-the-target-directory-to-path"
title: "Rust"
heading: "Add the target directory to PATH"
group: "Languages"
order: 303
url: "/docs/languages/rust#add-the-target-directory-to-path"
anchor: "add-the-target-directory-to-path"
terms: ["target","directory","path","suggests","adding","cargo","build","output","activation","hook","binary","under","development","invoked","directly","stays","current","after","activate","export","debug","release","mybin","developing","instead","library","find","useful","directories","interactive","testing","very","simple","section","manifest","were","called","could","call","automatically"]
hash: "2054c509f71289cb2c949e7669ca8da28b31fbb6dad6af7f14b3d53490194189"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[hook]\non-activate = '''\n  export PATH=\"$PWD/target/debug:$PATH\"\n'''","chunkId":"languages/rust#add-the-target-directory-to-path"},{"kind":"code","literal":"target/debug","chunkId":"languages/rust#add-the-target-directory-to-path"},{"kind":"code","literal":"target/release","chunkId":"languages/rust#add-the-target-directory-to-path"},{"kind":"code","literal":"PATH","chunkId":"languages/rust#add-the-target-directory-to-path"},{"kind":"code","literal":"hook.on-activate","chunkId":"languages/rust#add-the-target-directory-to-path"},{"kind":"code","literal":"mybin","chunkId":"languages/rust#add-the-target-directory-to-path"},{"kind":"code","literal":"target/debug/mybin","chunkId":"languages/rust#add-the-target-directory-to-path"},{"kind":"code","literal":"cargo build","chunkId":"languages/rust#add-the-target-directory-to-path"}]
sources: [{"chunkId":"languages/rust#add-the-target-directory-to-path","url":"/docs/languages/rust#add-the-target-directory-to-path","anchor":"add-the-target-directory-to-path"}]
---

Suggests adding the Cargo build output directory to PATH via the activation hook so a binary under development can be invoked directly and stays current after each build.
