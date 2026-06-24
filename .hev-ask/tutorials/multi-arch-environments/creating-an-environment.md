---
id: "tutorials/multi-arch-environments#creating-an-environment"
title: "Designing multi-arch environments"
heading: "Creating an environment"
group: "Tutorials"
order: 780
url: "/docs/tutorials/multi-arch-environments#creating-an-environment"
anchor: "creating-an-environment"
terms: ["creating","environment","walks","through","architecture","sharing","floxhub","notes","search","surface","packages","immediately","work","inspect","package","supported","systems","among","four","flox","system","types","since","some","support","only","subset","show","project","debugger","aarch64","linux","darwin","init","name","team","tools","created","install","gnupg"]
hash: "b40f85918514cd3cc05506d7f3bf01500d55b269dbff0bfbeba84ba247a2d8cd"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox show gdb\ngdb - The GNU Project debugger\n    gdb@14.2 (aarch64-linux, x86_64-darwin, x86_64-linux only)\n    gdb@14.1 (aarch64-linux, x86_64-darwin, x86_64-linux only)\n    gdb@13.2 (aarch64-linux, x86_64-darwin, x86_64-linux only)\n    gdb@13.1 (aarch64-linux, x86_64-darwin, x86_64-linux only)\n...","chunkId":"tutorials/multi-arch-environments#creating-an-environment"},{"kind":"code","literal":"$ flox init --name eng-team-tools\n⚡︎ Created environment eng-team-tools (aarch64-linux)\n...\n$ flox install gnupg vim\n✔ 'gnupg' installed to environment eng-team-tools at /home/youruser\n✔ 'vim' installed to environment eng-team-tools at /home/youruser","chunkId":"tutorials/multi-arch-environments#creating-an-environment"},{"kind":"code","literal":"$ flox push\n✔ eng-team-tools successfully pushed to FloxHub\n\n    Use 'flox pull youruser/eng-team-tools' to get this environment in any other location.","chunkId":"tutorials/multi-arch-environments#creating-an-environment"},{"kind":"code","literal":"aarch64-linux","chunkId":"tutorials/multi-arch-environments#creating-an-environment"},{"kind":"code","literal":"flox search","chunkId":"tutorials/multi-arch-environments#creating-an-environment"},{"kind":"code","literal":"aarch64-darwin","chunkId":"tutorials/multi-arch-environments#creating-an-environment"},{"kind":"code","literal":"x86_64-darwin","chunkId":"tutorials/multi-arch-environments#creating-an-environment"},{"kind":"code","literal":"x86_64-linux","chunkId":"tutorials/multi-arch-environments#creating-an-environment"},{"kind":"code","literal":"flox show","chunkId":"tutorials/multi-arch-environments#creating-an-environment"},{"kind":"code","literal":"flox push","chunkId":"tutorials/multi-arch-environments#creating-an-environment"}]
sources: [{"chunkId":"tutorials/multi-arch-environments#creating-an-environment","url":"/docs/tutorials/multi-arch-environments#creating-an-environment","anchor":"creating-an-environment"}]
---

Walks through creating an environment on one architecture and sharing it via FloxHub. It notes search may surface packages that do not immediately work and that you can inspect a package to see its supported systems among the four Flox system types, since some packages support only a subset.
