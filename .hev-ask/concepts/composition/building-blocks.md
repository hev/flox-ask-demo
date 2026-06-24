---
id: "concepts/composition#building-blocks"
title: "Composing environments"
heading: "Building blocks"
group: "Concepts"
order: 26
url: "/docs/concepts/composition#building-blocks"
anchor: "building-blocks"
terms: ["building","blocks","explains","environments","composed","environment","composing","treats","list","included","dependencies","manifests","merged","resulting","manifest","locked","built","composer","nenvironment","includes","enva","envb","envc","direction","down","overridden","created","composition","there","hierarchy","consisting"]
hash: "d2c57be3d9985fec164b52f688bba0fccbbd31aa1905ba768872ea9874981646"
mode: "agent-primary"
facts: [{"kind":"code","literal":"composer: \"Composing\\nenvironment\"\n\nincludes: Included environments {\n  envA: Env A\n  envB: Env B\n  envC: Env C\n  direction: down\n  envA -\u003e envB: Overridden by\n  envB -\u003e envC: Overridden by\n}\n\nincludes -\u003e composer: Overridden by","chunkId":"concepts/composition#building-blocks"}]
sources: [{"chunkId":"concepts/composition#building-blocks","url":"/docs/concepts/composition#building-blocks","anchor":"building-blocks"}]
---

Explains that environments are the building blocks of a composed environment, where a composing environment treats a list of included environments as dependencies. The manifests of the included and composing environments are merged, and the resulting merged manifest is locked and built.
