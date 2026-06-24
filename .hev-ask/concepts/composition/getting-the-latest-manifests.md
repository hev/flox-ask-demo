---
id: "concepts/composition#getting-the-latest-manifests"
title: "Composing environments"
heading: "Getting the latest manifests"
group: "Concepts"
order: 27
url: "/docs/concepts/composition#getting-the-latest-manifests"
anchor: "getting-the-latest-manifests"
terms: ["getting","latest","manifests","explains","included","environments","change","time","pull","include","upgrade","command","checks","environment","changes","pulled","must","lockfile","matching","manifest","lock","editing","after","merge","runs","again","composed","rebuilt","flox","project","tools","toml","edit","reasonable","assume","some","point","want","bring","versions"]
hash: "dc16e0e82bf78a461751c6428db648559657408ef45df1a92849aa5af42ada71"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox include upgrade","chunkId":"concepts/composition#getting-the-latest-manifests"},{"kind":"code","literal":"my-go-project","chunkId":"concepts/composition#getting-the-latest-manifests"},{"kind":"code","literal":"go-tools","chunkId":"concepts/composition#getting-the-latest-manifests"},{"kind":"code","literal":"manifest.toml","chunkId":"concepts/composition#getting-the-latest-manifests"},{"kind":"code","literal":"flox edit","chunkId":"concepts/composition#getting-the-latest-manifests"}]
sources: [{"chunkId":"concepts/composition#getting-the-latest-manifests","url":"/docs/concepts/composition#getting-the-latest-manifests","anchor":"getting-the-latest-manifests"}]
---

Explains that included environments' manifests change over time and you pull in the latest with an include-upgrade command, which checks each included environment for changes. For changes to be pulled in, the included environment must have a lockfile matching its latest manifest (re-lock by editing it), after which the merge runs again and the composed environment is rebuilt.
