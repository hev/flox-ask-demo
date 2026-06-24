---
id: "tutorials/package-outputs#discovering-outputs"
title: "Selecting package outputs"
heading: "Discovering outputs"
group: "Tutorials"
order: 796
url: "/docs/tutorials/package-outputs#discovering-outputs"
anchor: "discovering-outputs"
terms: ["discovering","outputs","explains","package","show","command","whose","output","lists","available","marks","defaults","simple","single","default","while","more","complex","several","only","some","installed","flox","hello","program","produces","familiar","friendly","greeting","catalog","nixpkgs","latest","license","later","systems","aarch64","linux","darwin","other","versions"]
hash: "ebff3ab743a3a2a402879deae3c9989d449915396fc4ceb525371af77a11e433"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox show hello\nhello - Program that produces a familiar, friendly greeting\nCatalog: nixpkgs\nLatest:  hello@2.12.2\nLicense: GPL-3.0-or-later\nOutputs: out* (* installed by default)\nSystems: aarch64-linux, aarch64-darwin, x86_64-darwin, x86_64-linux\n\nOther versions:\n    hello@2.12.2\n    hello@2.12.1\n    hello@2.12\n    hello@2.10","chunkId":"tutorials/package-outputs#discovering-outputs"},{"kind":"code","literal":"flox show","chunkId":"tutorials/package-outputs#discovering-outputs"},{"kind":"code","literal":"hello","chunkId":"tutorials/package-outputs#discovering-outputs"},{"kind":"code","literal":"Outputs:","chunkId":"tutorials/package-outputs#discovering-outputs"},{"kind":"code","literal":"out","chunkId":"tutorials/package-outputs#discovering-outputs"},{"kind":"code","literal":"out*","chunkId":"tutorials/package-outputs#discovering-outputs"},{"kind":"code","literal":"curl","chunkId":"tutorials/package-outputs#discovering-outputs"},{"kind":"code","literal":"bin","chunkId":"tutorials/package-outputs#discovering-outputs"},{"kind":"code","literal":"man","chunkId":"tutorials/package-outputs#discovering-outputs"}]
sources: [{"chunkId":"tutorials/package-outputs#discovering-outputs","url":"/docs/tutorials/package-outputs#discovering-outputs","anchor":"discovering-outputs"}]
---

Explains discovering a package's outputs with the show command, whose output lists the available outputs and marks the defaults. A simple package may have a single default output, while a more complex one lists several outputs of which only some are installed by default.
