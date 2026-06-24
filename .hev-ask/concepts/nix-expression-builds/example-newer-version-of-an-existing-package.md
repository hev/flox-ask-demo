---
id: "concepts/nix-expression-builds#example-newer-version-of-an-existing-package"
title: "Nix expression builds"
heading: "Example: Newer version of an existing package"
group: "Concepts"
order: 93
url: "/docs/concepts/nix-expression-builds#example-newer-version-of-an-existing-package"
anchor: "example-newer-version-of-an-existing-package"
terms: ["example","newer","version","existing","package","gives","expression","getting","flox","catalog","overriding","source","attributes","hello","fetchurl","overrideattrs","finalattrs","oldattrs","mirror","hash","sha256","wpqzbckszctc9bho6h6s9qrlune72cabm0x6nc4igks","latest","available","often","just","override"]
hash: "319abbd8df74f2b6baf2274527ba9fd8c76de2dc155127f4cfeff50fe326ecb1"
mode: "agent-primary"
facts: [{"kind":"code","literal":"{ hello, fetchurl }:\n\nhello.overrideAttrs (finalAttrs: _oldAttrs: {\n  version = \"2.12.2\";\n  src = fetchurl {\n    url = \"mirror://gnu/hello/hello-${finalAttrs.version}.tar.gz\";\n    hash = \"sha256-WpqZbcKSzCTc9BHO6H6S9qrluNE72caBm0x6nc4IGKs=\";\n  };\n})","chunkId":"concepts/nix-expression-builds#example-newer-version-of-an-existing-package"},{"kind":"code","literal":"version","chunkId":"concepts/nix-expression-builds#example-newer-version-of-an-existing-package"},{"kind":"code","literal":"src","chunkId":"concepts/nix-expression-builds#example-newer-version-of-an-existing-package"}]
sources: [{"chunkId":"concepts/nix-expression-builds#example-newer-version-of-an-existing-package","url":"/docs/concepts/nix-expression-builds#example-newer-version-of-an-existing-package","anchor":"example-newer-version-of-an-existing-package"}]
---

Gives an example Nix expression for getting a newer version of a package not yet in the Flox Catalog by overriding the version and source attributes of the existing package.
