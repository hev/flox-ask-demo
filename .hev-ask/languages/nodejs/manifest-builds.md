---
id: "languages/nodejs#manifest-builds"
title: "Node.js"
heading: "Manifest builds"
group: "Languages"
order: 285
url: "/docs/languages/nodejs#manifest-builds"
anchor: "manifest-builds"
terms: ["manifest","builds","build","node","projects","flox","install","copy","result","runtime","dependencies","output","directory","create","launcher","script","notes","namespacing","multiple","apps","vendoring","pure","multi","stage","myproject","deps","command","mkdir","modules","built","previous","step","preserve","mode","rest","same","sandbox","dist","libexec","based"]
hash: "04740a72dbc5a0ecef3f4d76d2410b9eb54d80a25de7c5a8fe04e5ff8db26c3d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.myproject-deps]\ncommand = '''\n  mkdir -p $out\n  npm ci\n  cp -r node_modules $out\n'''\n\n[build.myproject]\ncommand = '''\n  # Copy node modules built in the previous step\n  cp --no-preserve=mode -r ${myproject-deps}/node_modules ./\n  ...\n  # The rest of the build is the same\n'''\nsandbox = \"pure\"","chunkId":"languages/nodejs#manifest-builds"},{"kind":"code","literal":"npm","chunkId":"languages/nodejs#manifest-builds"},{"kind":"code","literal":"dist","chunkId":"languages/nodejs#manifest-builds"},{"kind":"code","literal":"node_modules","chunkId":"languages/nodejs#manifest-builds"},{"kind":"code","literal":"/libexec/myproject/dist","chunkId":"languages/nodejs#manifest-builds"},{"kind":"code","literal":"npm build","chunkId":"languages/nodejs#manifest-builds"},{"kind":"code","literal":"$out/bin","chunkId":"languages/nodejs#manifest-builds"},{"kind":"value","literal":"Node.js","chunkId":"languages/nodejs#manifest-builds"},{"kind":"value","literal":"Node.js-based","chunkId":"languages/nodejs#manifest-builds"},{"kind":"value","literal":"e.g","chunkId":"languages/nodejs#manifest-builds"}]
sources: [{"chunkId":"languages/nodejs#manifest-builds","url":"/docs/languages/nodejs#manifest-builds","anchor":"manifest-builds"}]
---

How to build Node.js projects with Flox manifest builds using npm: install and build, copy the result and any runtime dependencies into the output directory, create a launcher script, with notes on namespacing multiple apps and vendoring dependencies in a pure multi-stage build.
