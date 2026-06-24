---
id: "concepts/flox-vs-containers#perform-initialization"
title: "Flox vs. container workflows"
heading: "Perform initialization"
group: "Concepts"
order: 42
url: "/docs/concepts/flox-vs-containers#perform-initialization"
anchor: "perform-initialization"
terms: ["perform","initialization","compares","time","steps","such","creating","directory","flox","goes","activate","hook","activation","whereas","container","another","dockerfile","command","creates","additional","image","layer","mkdir","edit","need","move","some","files","around","ensure","exists","other","kind","before","doing","work","inside","development","environment","pretend"]
hash: "317297d46cb576f2f247dd289f938cc35ee0968bd4647e5eb6f1addcd0f8f6da"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[hook]\non-activate = '''\n  mkdir foo\n'''","chunkId":"concepts/flox-vs-containers#perform-initialization"},{"kind":"code","literal":"RUN mkdir foo","chunkId":"concepts/flox-vs-containers#perform-initialization"},{"kind":"code","literal":"foo","chunkId":"concepts/flox-vs-containers#perform-initialization"},{"kind":"code","literal":"hook.on-activate","chunkId":"concepts/flox-vs-containers#perform-initialization"},{"kind":"code","literal":"flox edit","chunkId":"concepts/flox-vs-containers#perform-initialization"},{"kind":"code","literal":"hook","chunkId":"concepts/flox-vs-containers#perform-initialization"},{"kind":"code","literal":"RUN","chunkId":"concepts/flox-vs-containers#perform-initialization"}]
sources: [{"chunkId":"concepts/flox-vs-containers#perform-initialization","url":"/docs/concepts/flox-vs-containers#perform-initialization","anchor":"perform-initialization"}]
---

Compares one-time initialization steps such as creating a directory. In Flox this goes in the on-activate hook run at activation, whereas in a container it is another Dockerfile command that creates an additional image layer.
