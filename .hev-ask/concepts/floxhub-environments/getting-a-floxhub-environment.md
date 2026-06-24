---
id: "concepts/floxhub-environments#getting-a-floxhub-environment"
title: "FloxHub environments"
heading: "Getting a FloxHub environment"
group: "Concepts"
order: 64
url: "/docs/concepts/floxhub-environments#getting-a-floxhub-environment"
anchor: "getting-a-floxhub-environment"
terms: ["getting","floxhub","environment","explains","fetching","pushed","pull","command","produce","either","cached","copy","transparently","managed","flox","materialized","user","specified","directory","current","default","notes","automatically","fetches","upstream","updates","without","applying","knows","state","fetch","manually","reference","owner","name","once","machine","exist","different","forms"]
hash: "0f3551df9e28592392b2952054c4a4637250f6a391153b354006454b13f57bb3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox pull","chunkId":"concepts/floxhub-environments#getting-a-floxhub-environment"},{"kind":"code","literal":"flox pull --reference \u003cowner\u003e/\u003cname\u003e","chunkId":"concepts/floxhub-environments#getting-a-floxhub-environment"},{"kind":"code","literal":"flox pull \u003cowner\u003e/\u003cname\u003e","chunkId":"concepts/floxhub-environments#getting-a-floxhub-environment"},{"kind":"code","literal":"-d/--directory","chunkId":"concepts/floxhub-environments#getting-a-floxhub-environment"},{"kind":"code","literal":"flox pull (-r | --reference) \u003cowner\u003e/\u003cname\u003e","chunkId":"concepts/floxhub-environments#getting-a-floxhub-environment"}]
sources: [{"chunkId":"concepts/floxhub-environments#getting-a-floxhub-environment","url":"/docs/concepts/floxhub-environments#getting-a-floxhub-environment","anchor":"getting-a-floxhub-environment"}]
---

Explains fetching a pushed environment with the pull command, which can produce either a cached copy transparently managed by Flox or a materialized copy in a user-specified directory (current directory by default). Notes the CLI automatically fetches upstream updates without applying them so the cached copy knows the upstream state, and you can fetch the upstream state manually.
