---
id: "concepts/manifest-builds#pure-builds"
title: "Manifest builds"
heading: "Pure builds"
group: "Concepts"
order: 84
url: "/docs/concepts/manifest-builds#pure-builds"
anchor: "pure-builds"
terms: ["pure","builds","explains","build","purity","controlled","sandbox","option","default","mode","repository","root","full","network","filesystem","access","convenient","embed","machine","specific","references","hurt","reproducibility","while","clean","environment","only","tracked","files","much","stronger","notes","block","linux","platform","limits","still","allow","macos","home"]
hash: "a48fb407da7c5ed8c3b917db6411b4bb85fbbeeb4ca8cf9f9e2c9b15d47610e6"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sandbox","chunkId":"concepts/manifest-builds#pure-builds"},{"kind":"code","literal":"\"off\"","chunkId":"concepts/manifest-builds#pure-builds"},{"kind":"code","literal":"$HOME","chunkId":"concepts/manifest-builds#pure-builds"},{"kind":"code","literal":"sandbox = \"pure\"","chunkId":"concepts/manifest-builds#pure-builds"},{"kind":"code","literal":"git add","chunkId":"concepts/manifest-builds#pure-builds"},{"kind":"value","literal":"e.g","chunkId":"concepts/manifest-builds#pure-builds"}]
sources: [{"chunkId":"concepts/manifest-builds#pure-builds","url":"/docs/concepts/manifest-builds#pure-builds","anchor":"pure-builds"}]
---

Explains build purity controlled by the sandbox option: the default off mode builds in the repository root with full network and filesystem access (convenient but can embed machine-specific references and hurt reproducibility), while pure mode builds in a clean environment using only Git-tracked files for much stronger reproducibility. Notes pure builds block network access on Linux but, due to platform limits, still allow network access on macOS.
