---
id: "tutorials/multi-arch-environments#handling-unsupported-packages"
title: "Designing multi-arch environments"
heading: "Handling unsupported packages"
group: "Tutorials"
order: 781
url: "/docs/tutorials/multi-arch-environments#handling-unsupported-packages"
anchor: "handling-unsupported-packages"
terms: ["handling","unsupported","packages","demonstrates","installing","package","supported","only","some","systems","flox","installs","compatible","skips","others","recording","allowed","manifest","after","pushing","pulling","incompatible","machine","simply","does","receive","environment","still","activates","both","install","systemd","installed","following","aarch64","linux","push","updates","team","tools"]
hash: "ef9ace4b4edb6c30017caec2e5722c1993d9e67b7ee88ccee3efac0089488302"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox install systemd\n! 'systemd' installed only for the following systems: aarch64-linux, x86_64-linux","chunkId":"tutorials/multi-arch-environments#handling-unsupported-packages"},{"kind":"code","literal":"$ flox push\n✔ Updates to eng-team-tools successfully pushed to FloxHub\n\n    Use 'flox pull youruser/eng-team-tools' to get this environment in any other location.","chunkId":"tutorials/multi-arch-environments#handling-unsupported-packages"},{"kind":"code","literal":"$ flox pull\n✔ Pulled youruser/eng-team-tools from https://hub.flox.dev/\n\nYou can activate this environment with 'flox activate'\n\n$ flox list\ngnupg: gnupg (2.4.5)\nvim: vim (9.1.0377)\n\n$ flox list -c\n...\n[install]\ngnupg.pkg-path = \"gnupg\"\nvim.pkg-path = \"vim\"\nsystemd.pkg-path = \"systemd\"\nsystemd.systems = [\"aarch64-linux\", \"x86_64-linux\"]\n...","chunkId":"tutorials/multi-arch-environments#handling-unsupported-packages"},{"kind":"code","literal":"systemd","chunkId":"tutorials/multi-arch-environments#handling-unsupported-packages"},{"kind":"code","literal":"systemd.systems","chunkId":"tutorials/multi-arch-environments#handling-unsupported-packages"}]
sources: [{"chunkId":"tutorials/multi-arch-environments#handling-unsupported-packages","url":"/docs/tutorials/multi-arch-environments#handling-unsupported-packages","anchor":"handling-unsupported-packages"}]
---

Demonstrates installing a package supported only on some systems: Flox installs it for the compatible systems and skips the others, recording the allowed systems in the manifest. After pushing and pulling on an incompatible machine, that machine simply does not receive the package, and the environment still activates on both.
