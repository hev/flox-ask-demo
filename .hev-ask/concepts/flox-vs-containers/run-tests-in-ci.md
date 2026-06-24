---
id: "concepts/flox-vs-containers#run-tests-in-ci"
title: "Flox vs. container workflows"
heading: "Run tests in CI"
group: "Concepts"
order: 43
url: "/docs/concepts/flox-vs-containers#run-tests-in-ci"
anchor: "run-tests-in-ci"
terms: ["tests","compares","running","system","activates","flox","environment","runs","commands","inside","because","lockfile","gets","exactly","same","software","developer","reducing","works","machine","issues","offers","plugins","several","providers","container","path","pulls","builds","image","activate","done","some","development","want","changes","through","would","repository","specified"]
hash: "3054a6286b570c8cfb91602ec69776f784397799410eb9a0270bd7e4755570a7"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox activate","chunkId":"concepts/flox-vs-containers#run-tests-in-ci"}]
sources: [{"chunkId":"concepts/flox-vs-containers#run-tests-in-ci","url":"/docs/concepts/flox-vs-containers#run-tests-in-ci","anchor":"run-tests-in-ci"}]
---

Compares running CI. A CI system activates the Flox environment and runs commands inside it, and because the environment has a lockfile it gets exactly the same software as the developer, reducing works-on-my-machine issues; Flox offers plugins for several CI providers. The container path pulls or builds the image and runs commands inside it.
