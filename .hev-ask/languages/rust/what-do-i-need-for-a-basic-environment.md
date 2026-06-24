---
id: "languages/rust#what-do-i-need-for-a-basic-environment"
title: "Rust"
heading: "What do I need for a basic environment"
group: "Languages"
order: 308
url: "/docs/languages/rust#what-do-i-need-for-a-basic-environment"
anchor: "what-do-i-need-for-a-basic-environment"
terms: ["need","basic","environment","presents","explains","complete","manifest","rust","development","describing","toolchain","component","installed","separate","package","since","flox","doesn","expose","dependencies","path","compilers","linkers","platform","libraries","needed","build","scripts","components","should","share","group","rustup","cargo","rustc","rustfmt","clippy","clang","libiconv","rustplatform"]
hash: "f98ef54f6ce198a7a0460a8933c83c69ff0149dbe50a4c123660058edb085bbe"
mode: "agent-primary"
facts: [{"kind":"code","literal":"rustup","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"cargo","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"rustc","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"rustfmt","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"clippy","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"gcc","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"clang","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"libiconv","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"rustPlatform.rustLibSrc","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"rust-analyzer","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"build.rs","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"PATH","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"openssl","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"pkg-config","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"std","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"},{"kind":"code","literal":"rust-toolchain","chunkId":"languages/rust#what-do-i-need-for-a-basic-environment"}]
sources: [{"chunkId":"languages/rust#what-do-i-need-for-a-basic-environment","url":"/docs/languages/rust#what-do-i-need-for-a-basic-environment","anchor":"what-do-i-need-for-a-basic-environment"}]
---

Presents and explains a complete manifest for a Rust development environment, describing why each toolchain component is installed as a separate package (since Flox doesn't expose package dependencies on PATH), why compilers/linkers and platform libraries are needed for build scripts, and why toolchain components should share a package group.
