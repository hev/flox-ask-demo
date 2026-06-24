---
id: "concepts/flox-vs-containers#tear-down-the-development-environment"
title: "Flox vs. container workflows"
heading: "Tear down the development environment"
group: "Concepts"
order: 46
url: "/docs/concepts/flox-vs-containers#tear-down-the-development-environment"
anchor: "tear-down-the-development-environment"
terms: ["tear","down","development","environment","compares","teardown","flox","simply","exit","activated","shell","while","containers","container","stop","myproject","leave","docker","pretty","straightforward","myprojectcontainer"]
hash: "f962b3f540832e02ad243b244573131cb61ee9769a6ac84806f150d8ec3afd10"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox [myproject] $ exit","chunkId":"concepts/flox-vs-containers#tear-down-the-development-environment"},{"kind":"code","literal":"$ exit # leave the container shell\n$ docker stop myproject_container","chunkId":"concepts/flox-vs-containers#tear-down-the-development-environment"}]
sources: [{"chunkId":"concepts/flox-vs-containers#tear-down-the-development-environment","url":"/docs/concepts/flox-vs-containers#tear-down-the-development-environment","anchor":"tear-down-the-development-environment"}]
---

Compares teardown: with Flox you simply exit the activated shell, while with containers you exit the container shell and then stop the container.
