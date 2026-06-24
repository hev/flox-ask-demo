---
id: "tutorials/multi-arch-environments#using-the-environment-from-a-different-system-type"
title: "Designing multi-arch environments"
heading: "Using the environment from a different system type"
group: "Tutorials"
order: 782
url: "/docs/tutorials/multi-arch-environments#using-the-environment-from-a-different-system-type"
anchor: "using-the-environment-from-a-different-system-type"
terms: ["environment","different","system","type","shows","many","packages","work","across","types","without","changes","pulling","shared","onto","architecture","running","tool","confirm","works","cross","platform","flox","pull","youruser","team","tools","pulled","https","activate","version","gnupg","libgcrypt","copyright","2024","code","gmbh","aarch64","darwin","issue"]
hash: "7464b12af190ff8db5620d1d8305e4a48aa6cfea688e03e7b2c8ab345a333ccb"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox pull youruser/eng-team-tools\n⚡︎  Pulled youruser/eng-team-tools from https://hub.flox.dev\n\n    You can activate this environment with 'flox activate'\n$ flox activate -- gpg --version\ngpg (GnuPG) 2.4.5\nlibgcrypt 1.10.3\nCopyright (C) 2024 g10 Code GmbH\n...","chunkId":"tutorials/multi-arch-environments#using-the-environment-from-a-different-system-type"},{"kind":"code","literal":"flox pull","chunkId":"tutorials/multi-arch-environments#using-the-environment-from-a-different-system-type"},{"kind":"code","literal":"aarch64-darwin","chunkId":"tutorials/multi-arch-environments#using-the-environment-from-a-different-system-type"},{"kind":"code","literal":"gpg --version","chunkId":"tutorials/multi-arch-environments#using-the-environment-from-a-different-system-type"}]
sources: [{"chunkId":"tutorials/multi-arch-environments#using-the-environment-from-a-different-system-type","url":"/docs/tutorials/multi-arch-environments#using-the-environment-from-a-different-system-type","anchor":"using-the-environment-from-a-different-system-type"}]
---

Shows that many packages work across system types without changes by pulling the shared environment onto a different architecture and running a tool to confirm it works cross-platform.
