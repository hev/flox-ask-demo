---
id: "tutorials/migrations/nvm#add-nodejs-and-associated-dependencies-to-a-package-group-optional"
title: "Node Version Manager (nvm)"
heading: "Add Node.js and associated dependencies to a package group optional"
group: "Tutorials"
order: 770
url: "/docs/tutorials/migrations/nvm#add-nodejs-and-associated-dependencies-to-a-package-group-optional"
anchor: "add-nodejs-and-associated-dependencies-to-a-package-group-optional"
terms: ["node","associated","dependencies","package","group","optional","recommends","need","older","version","placing","named","manifest","still","install","latest","versions","other","software","shows","editing","environment","configuration","assign","such","flox","edit","nodejs","path","toolchain","toml","recommend","specify","ensure","more","groups","read","reference","guide","point"]
hash: "c501bf14b666d222eabbafb770d0de5e0d0bafd2bcc33fdb1753dd2ed31ae613"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox edit","chunkId":"tutorials/migrations/nvm#add-nodejs-and-associated-dependencies-to-a-package-group-optional"},{"kind":"code","literal":"...\n[install]\nnodejs_20 = { pkg-path = \"nodejs_20\", pkg-group = \"node-toolchain\" }\n...","chunkId":"tutorials/migrations/nvm#add-nodejs-and-associated-dependencies-to-a-package-group-optional"},{"kind":"code","literal":"manifest.toml","chunkId":"tutorials/migrations/nvm#add-nodejs-and-associated-dependencies-to-a-package-group-optional"},{"kind":"value","literal":"Node.js","chunkId":"tutorials/migrations/nvm#add-nodejs-and-associated-dependencies-to-a-package-group-optional"}]
sources: [{"chunkId":"tutorials/migrations/nvm#add-nodejs-and-associated-dependencies-to-a-package-group-optional","url":"/docs/tutorials/migrations/nvm#add-nodejs-and-associated-dependencies-to-a-package-group-optional","anchor":"add-nodejs-and-associated-dependencies-to-a-package-group-optional"}]
---

Recommends, when you need an older Node.js version, placing it in a named package group in your manifest so you can still install the latest versions of other software; shows editing the environment configuration to assign Node.js to such a group.
