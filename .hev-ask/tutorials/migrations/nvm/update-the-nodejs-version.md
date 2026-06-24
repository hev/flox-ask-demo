---
id: "tutorials/migrations/nvm#update-the-nodejs-version"
title: "Node Version Manager (nvm)"
heading: "Update the Node.js version"
group: "Tutorials"
order: 775
url: "/docs/tutorials/migrations/nvm#update-the-nodejs-version"
anchor: "update-the-nodejs-version"
terms: ["update","node","version","describes","upgrading","different","show","command","find","exact","catalog","name","editing","manifest","value","must","prefixed","because","packages","stores","omitting","specific","yields","latest","compatible","release","package","group","without","within","flox","nodejs","project","main","event","driven","framework","javascript","engine","edit"]
hash: "e3fa3663aa43a9ad14c3bb96186cec8af56f1b48b07a81d8e1f34dd502196825"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox show nodejs_22","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"},{"kind":"code","literal":"flox [node-project] ➜  node-project git:(main) ✗ flox show nodejs_22\nnodejs_22 - Event-driven I/O framework for the V8 JavaScript engine\n    nodejs_22@nodejs-22.10.0\n    nodejs_22@nodejs-22.9.0\n    nodejs_22@nodejs-22.8.0\n    nodejs_22@nodejs-22.6.0\n    nodejs_22@nodejs-22.5.1\n    nodejs_22@nodejs-22.4.1\n    nodejs_22@nodejs-22.3.0\n    nodejs_22@nodejs-22.2.0\n    nodejs_22@nodejs-22.0.0","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"},{"kind":"code","literal":"flox edit","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"},{"kind":"code","literal":"...\n[install]\nnodejs_22 = { pkg-path = \"nodejs_22\", pkg-group = \"node-toolchain\", version = \"nodejs-22.10.0\" }\n...","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"},{"kind":"code","literal":"flox show \u003cpackage\u003e","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"},{"kind":"code","literal":"nodejs-","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"},{"kind":"code","literal":"nodejs_22","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"},{"kind":"code","literal":"pkg-group","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"},{"kind":"code","literal":"version","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"},{"kind":"value","literal":"Node.js","chunkId":"tutorials/migrations/nvm#update-the-nodejs-version"}]
sources: [{"chunkId":"tutorials/migrations/nvm#update-the-nodejs-version","url":"/docs/tutorials/migrations/nvm#update-the-nodejs-version","anchor":"update-the-nodejs-version"}]
---

Describes upgrading to a different Node.js version by using the show command to find the exact catalog version name, then editing the manifest to set it. The version value must be prefixed because of how Nix Packages stores them; omitting a specific version yields the latest compatible release, and a package group without a version yields the latest compatible within that group.
