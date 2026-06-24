---
id: "tutorials/sharing-environments#sharing-environments-with-files"
title: "Sharing environments"
heading: "Sharing environments with files"
group: "Tutorials"
order: 803
url: "/docs/tutorials/sharing-environments#sharing-environments-with-files"
anchor: "sharing-environments-with-files"
terms: ["sharing","environments","files","explains","initializing","environment","creates","folder","sent","like","other","most","commonly","committed","repository","recipient","clones","activates","reproduce","warns","across","different","architecture","surface","system","specific","package","availability","issues","fixable","small","manifest","edit","mkdir","example","project","init","flox","install","nodejs"]
hash: "081e50464d9ad0cc361e4d102b8b6b9867fce2caf06a10ee9ac209c65e6be096"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ mkdir example-project # (1)!\n$ cd example-project\n$ git init\n...\n$ flox init\n...","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"},{"kind":"code","literal":"$ flox install nodejs mkcert\n✔ 'nodejs' installed to environment example-project at /Users/youruser/example-project\n✔ 'mkcert' installed to environment example-project at /Users/youruser/example-project","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"},{"kind":"code","literal":"git add .flox;\ngit commit -m \"sharing flox environment\"","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"},{"kind":"code","literal":"git clone ..example-project;\nflox activate","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"},{"kind":"code","literal":"flox init","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"},{"kind":"code","literal":".flox","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"},{"kind":"code","literal":"git clone","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"},{"kind":"code","literal":"flox activate","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"},{"kind":"code","literal":"example-project","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"},{"kind":"value","literal":"discourse.flox.dev","chunkId":"tutorials/sharing-environments#sharing-environments-with-files"}]
sources: [{"chunkId":"tutorials/sharing-environments#sharing-environments-with-files","url":"/docs/tutorials/sharing-environments#sharing-environments-with-files","anchor":"sharing-environments-with-files"}]
---

Explains sharing via files, where initializing an environment creates a folder that can be sent like any other files and is most commonly committed to a git repository; a recipient clones and activates to reproduce it. It warns that sharing across a different CPU architecture or OS can surface system-specific package availability issues, fixable with a small manifest edit.
