---
id: "man/flox-build#building-a-simple-multi-stage-app"
title: "flox build"
heading: "Building a simple multi-stage app"
group: "Manual"
order: 346
url: "/docs/man/flox-build#building-a-simple-multi-stage-app"
anchor: "building-a-simple-multi-stage-app"
terms: ["building","simple","multi","stage","worked","example","build","node","project","fetches","dependencies","sandbox","disabled","network","access","second","builds","application","referencing","first","output","package","lock","json","public","readme","flox","init","serve","result","nodejs","assume","initialize","environment","install","instructions","file","manifest","toml","version"]
hash: "1d38d16a1c840f01b32ea4fd6f4acdd3ef34a935ef79110c492600c8d4ed4490"
mode: "agent-primary"
facts: [{"kind":"code","literal":".\n├── .git/\n├── package-lock.json\n├── package.json\n├── public/\n├── README.md\n├── src/\n...","chunkId":"man/flox-build#building-a-simple-multi-stage-app"},{"kind":"code","literal":"flox init","chunkId":"man/flox-build#building-a-simple-multi-stage-app"},{"kind":"code","literal":"npx serve result-app","chunkId":"man/flox-build#building-a-simple-multi-stage-app"},{"kind":"code","literal":"nodejs","chunkId":"man/flox-build#building-a-simple-multi-stage-app"}]
sources: [{"chunkId":"man/flox-build#building-a-simple-multi-stage-app","url":"/docs/man/flox-build#building-a-simple-multi-stage-app","anchor":"building-a-simple-multi-stage-app"}]
---

Worked example of a multi-stage build for a Node.js project: one build stage fetches dependencies with the sandbox disabled for network access, and a second stage builds the application by referencing the first stage's output.
