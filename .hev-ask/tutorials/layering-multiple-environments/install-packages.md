---
id: "tutorials/layering-multiple-environments#install-packages"
title: "Layering multiple environments"
heading: "Install packages"
group: "Tutorials"
order: 754
url: "/docs/tutorials/layering-multiple-environments#install-packages"
anchor: "install-packages"
terms: ["install","packages","shows","installing","broadly","useful","tools","default","environment","listing","activating","confirm","those","available","across","project","flox","list","curl","gitfull","gnupg","inetutils","tree","2116","activate","users","youruser","aarch64","darwin","version","lets","floxinstall","system","regardless","here","installed","inspect","contents","floxlist","test"]
hash: "672dde134c966778d4cf7f2b02fff959e4d55f0e475e3d2e125425cd06cadaa2"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox list\ncurl: curl (8.4.0)\ngitFull: gitFull (2.42.0)\ngnupg: gnupg (2.4.1)\ninetutils: inetutils (2.5)\ntree: tree (2.1.1)\nvim: vim (9.0.2116)","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"$ flox activate\nflox [default] $ which git\n/Users/youruser/.flox/run/aarch64-darwin.default/bin/git\nflox [default] $ git --version\ngit version 2.42.0","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"flox install","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"curl","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"gitFull","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"gnupg","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"inetutils","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"tree","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"vim","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"flox list","chunkId":"tutorials/layering-multiple-environments#install-packages"},{"kind":"code","literal":"flox activate","chunkId":"tutorials/layering-multiple-environments#install-packages"}]
sources: [{"chunkId":"tutorials/layering-multiple-environments#install-packages","url":"/docs/tutorials/layering-multiple-environments#install-packages","anchor":"install-packages"}]
---

Shows installing broadly useful tools into the default environment, then listing and activating it to confirm those tools are available across any project.
