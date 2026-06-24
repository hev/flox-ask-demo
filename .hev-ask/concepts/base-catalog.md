---
id: "concepts/base-catalog"
title: "Base Catalog"
heading: null
group: "Concepts"
order: 14
url: "/docs/concepts/base-catalog"
anchor: null
terms: ["introduces","base","catalog","root","flox","packages","generated","fork","nixpkgs","containing","historical","metadata","about","versions","system","support","updated","automated","schedule","notes","continuous","process","records","real","build","info","considers","unfree","broken","missing","flags","cause","differences","between","shown","installs","manifest","options","override","defaults"]
hash: "a2e344e5a2f3534c3e3a90be37320125953ac6ade6e01496c823f4bb68c7bc61"
mode: "agent-primary"
facts: [{"kind":"code","literal":"nixos.cache.org","chunkId":"concepts/base-catalog"},{"kind":"code","literal":"flox show","chunkId":"concepts/base-catalog"},{"kind":"code","literal":"flox install","chunkId":"concepts/base-catalog"},{"kind":"code","literal":"allow_broken","chunkId":"concepts/base-catalog"},{"kind":"code","literal":"allow_unfree","chunkId":"concepts/base-catalog"},{"kind":"code","literal":"allow_missing_builds","chunkId":"concepts/base-catalog"}]
sources: [{"chunkId":"concepts/base-catalog","url":"/docs/concepts/base-catalog","anchor":null}]
---

Introduces the Base Catalog as the root of all Flox packages, generated from a Flox fork of nixpkgs, containing historical metadata about versions and system support, and updated on an automated schedule. Notes that a continuous process records real build info and considers unfree/broken/missing-build flags, which can cause differences between metadata shown and what installs; manifest options can override the defaults.
