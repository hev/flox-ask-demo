---
id: "concepts/base-catalog#which-packages-does-flox-evaluate"
title: "Base Catalog"
heading: "Which packages does Flox evaluate"
group: "Concepts"
order: 19
url: "/docs/concepts/base-catalog#which-packages-does-flox-evaluate"
anchor: "which-packages-does-flox-evaluate"
terms: ["packages","does","flox","evaluate","explains","package","sets","evaluates","generally","following","standard","nixpkgs","evaluation","conventions","plus","some","explicit","additional","paths","extra","macos","systems","notes","current","likely","change","time","legacypackages","system","recurseforderivations","nodepackages","rustplatform","rustlibsrc","latest","darwin","swiftpackages","follows","attribute","addition","evaluated"]
hash: "c8d1d72c814d151e69471ea13cce58fc3842b2abc37a6b05484d1f82bca052b0"
mode: "agent-primary"
facts: [{"kind":"code","literal":"legacyPackages.\u003csystem\u003e.*","chunkId":"concepts/base-catalog#which-packages-does-flox-evaluate"},{"kind":"code","literal":"recurseForDerivations","chunkId":"concepts/base-catalog#which-packages-does-flox-evaluate"},{"kind":"code","literal":"nodePackages","chunkId":"concepts/base-catalog#which-packages-does-flox-evaluate"},{"kind":"code","literal":"rustPlatform.rustLibSrc","chunkId":"concepts/base-catalog#which-packages-does-flox-evaluate"},{"kind":"code","literal":"nodePackages_latest","chunkId":"concepts/base-catalog#which-packages-does-flox-evaluate"},{"kind":"code","literal":"darwin","chunkId":"concepts/base-catalog#which-packages-does-flox-evaluate"},{"kind":"code","literal":"swiftPackages","chunkId":"concepts/base-catalog#which-packages-does-flox-evaluate"},{"kind":"code","literal":"swiftPackages.darwin","chunkId":"concepts/base-catalog#which-packages-does-flox-evaluate"}]
sources: [{"chunkId":"concepts/base-catalog#which-packages-does-flox-evaluate","url":"/docs/concepts/base-catalog#which-packages-does-flox-evaluate","anchor":"which-packages-does-flox-evaluate"}]
---

Explains which package sets Flox evaluates, generally following standard nixpkgs evaluation conventions plus some explicit additional paths, with extra paths for macOS systems. Notes the set is current but likely to change over time.
