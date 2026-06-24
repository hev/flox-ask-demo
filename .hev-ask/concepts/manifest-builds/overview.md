---
id: "concepts/manifest-builds#overview"
title: "Manifest builds"
heading: "Overview"
group: "Concepts"
order: 83
url: "/docs/concepts/manifest-builds#overview"
anchor: "overview"
terms: ["overview","explains","manifest","builds","context","environment","behaving","like","activating","running","build","commands","manually","giving","reproducibility","while","keeping","familiar","tools","done","varying","purity","flox","checks","results","missing","dependencies","catch","software","fine","would","fail","runtime","cargo","defined","section","take","place","means","behaves"]
hash: "487fbef3c102e6a627047b514d340cf32047b7213127ae49df3bb272a42b18df"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build]","chunkId":"concepts/manifest-builds#overview"},{"kind":"code","literal":"cargo build","chunkId":"concepts/manifest-builds#overview"},{"kind":"code","literal":"go build","chunkId":"concepts/manifest-builds#overview"}]
sources: [{"chunkId":"concepts/manifest-builds#overview","url":"/docs/concepts/manifest-builds#overview","anchor":"overview"}]
---

Explains that manifest builds run in the context of an environment, behaving like activating it and running build commands manually, giving reproducibility while keeping familiar build tools. Builds can be done with varying purity, and Flox checks build results for missing dependencies to catch software that builds fine but would fail at runtime.
