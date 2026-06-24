---
id: "concepts/flox-vs-containers#share-the-environment-with-your-team"
title: "Flox vs. container workflows"
heading: "Share the environment with your team"
group: "Concepts"
order: 45
url: "/docs/concepts/flox-vs-containers#share-the-environment-with-your-team"
anchor: "share-the-environment-with-your-team"
terms: ["share","environment","team","compares","sharing","flox","commit","directory","source","control","teammates","identical","software","down","upstream","revisions","clone","activate","push","floxhub","remote","activation","container","approach","commits","dockerfile","local","builds","aren","reproducible","ensuring","environments","requires","building","pulling","images","adding","complexity","infrastructure","repo"]
hash: "797a621e575e1c8eafecacada332cf764178508a59d3710af34ef2a02d792b45"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ git add .flox\n$ git commit -m \"Add Flox environment\"\n$ git push","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":"$ git clone \u003cyour repo\u003e\n$ flox activate","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":"$ # You\n$ flox push\n$ # Your coworker\n$ flox activate -r your_user/myproject","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":"flox init","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":".flox","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":"flox activate","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":"git","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":"flox push","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":"Dockerfile","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":"docker build","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"},{"kind":"code","literal":"docker pull","chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team"}]
sources: [{"chunkId":"concepts/flox-vs-containers#share-the-environment-with-your-team","url":"/docs/concepts/flox-vs-containers#share-the-environment-with-your-team","anchor":"share-the-environment-with-your-team"}]
---

Compares team sharing. With Flox you commit the environment directory to source control so teammates get identical software (down to upstream source revisions) via clone and activate, or push to FloxHub for remote activation. The container approach commits the Dockerfile, but local builds aren't reproducible, so ensuring identical environments requires building in CI and pulling images, adding complexity and infrastructure.
