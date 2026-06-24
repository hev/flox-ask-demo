---
id: "concepts/base-catalog#retention"
title: "Base Catalog"
heading: "Retention"
group: "Concepts"
order: 17
url: "/docs/concepts/base-catalog#retention"
anchor: "retention"
terms: ["retention","explains","storage","limits","mean","flox","garbage","collects","package","metadata","stability","channels","retaining","last","tags","older","revisions","fall","time","existing","lockfiles","keep","their","working","though","future","update","pinned","version","fail","resolve","practice","settings","effectively","every","past","years","available","stabilty","date"]
hash: "929bbdd115d9277661a44e045ec21186b37a9740be0e464d870d7bdc50349e69"
mode: "agent-primary"
facts: [{"kind":"code","literal":"\u003cstabilty\u003e.\u003cdate\u003e","chunkId":"concepts/base-catalog#retention"},{"kind":"code","literal":"flox update","chunkId":"concepts/base-catalog#retention"},{"kind":"code","literal":"unstable","chunkId":"concepts/base-catalog#retention"},{"kind":"code","literal":"staging","chunkId":"concepts/base-catalog#retention"},{"kind":"code","literal":"stable","chunkId":"concepts/base-catalog#retention"},{"kind":"code","literal":"lts","chunkId":"concepts/base-catalog#retention"},{"kind":"value","literal":"github.com","chunkId":"concepts/base-catalog#retention"},{"kind":"value","literal":"nixpkgs-tracker.ocfox.me","chunkId":"concepts/base-catalog#retention"}]
sources: [{"chunkId":"concepts/base-catalog#retention","url":"/docs/concepts/base-catalog#retention","anchor":"retention"}]
---

Explains that storage limits mean Flox garbage-collects package metadata using the stability channels, retaining the last N tags per stability so older revisions may fall out over time. Existing lockfiles keep their metadata and keep working, though a future update of a pinned version may fail to resolve; in practice the retention settings keep effectively every version from the past few years available.
