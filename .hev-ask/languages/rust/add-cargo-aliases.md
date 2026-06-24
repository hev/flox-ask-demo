---
id: "languages/rust#add-cargo-aliases"
title: "Rust"
heading: "Add cargo aliases"
group: "Languages"
order: 302
url: "/docs/languages/rust#add-cargo-aliases"
anchor: "add-cargo-aliases"
terms: ["cargo","aliases","shows","define","shell","bash","fish","manifest","profile","section","become","available","after","activating","environment","potentially","replacing","external","task","runners","alias","build","make","just","config","toml","allows","development","currently","file","provide","simple","aliaes","able","remove","those","dependencies","flox","instead"]
hash: "e84509369d357258baa596fb9b817a42b98c02a5654b23e02f63e639b8a34bc4"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[profile]\nbash = '''\n  alias build=\"cargo build\"\n'''\nzsh = '''\n  alias build=\"cargo build\"\n'''\nfish = '''\n  alias build \"cargo build\"\n'''","chunkId":"languages/rust#add-cargo-aliases"},{"kind":"code","literal":"[profile]","chunkId":"languages/rust#add-cargo-aliases"},{"kind":"code","literal":"make","chunkId":"languages/rust#add-cargo-aliases"},{"kind":"code","literal":"just","chunkId":"languages/rust#add-cargo-aliases"},{"kind":"code","literal":".cargo/config.toml","chunkId":"languages/rust#add-cargo-aliases"}]
sources: [{"chunkId":"languages/rust#add-cargo-aliases","url":"/docs/languages/rust#add-cargo-aliases","anchor":"add-cargo-aliases"}]
---

Shows how to define shell aliases (for bash, zsh, and fish) in the manifest's profile section so they become available after activating the environment, potentially replacing external task runners.
