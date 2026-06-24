---
id: "tutorials/overriding-packages#get-the-correct-hash"
title: "Using a newer version of a package"
heading: "Get the correct hash"
group: "Tutorials"
order: 787
url: "/docs/tutorials/overriding-packages#get-the-correct-hash"
anchor: "get-the-correct-hash"
terms: ["correct","hash","explains","running","build","empty","fails","reports","expected","error","copy","output","paste","expression","replace","placeholder","flox","warning","found","assuming","sha256","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","building","hello","mode","mismatch","fixed","derivation","specified","wpqzbckszctc9bho6h6s9qrlune72cabm0x6nc4igks","fetchurl","overrideattrs","finalattrs","oldattrs","version","mirror","fail","line"]
hash: "8baa73eca0b2757db182c9d440d2abe1e00f4a493c03df462f9b13afa9504a52"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox build\nwarning: found empty hash, assuming 'sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='\nBuilding hello-2.12.2 in Nix expression mode\n...\nerror: hash mismatch in fixed-output derivation:\n         specified: sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\n            got:    sha256-WpqZbcKSzCTc9BHO6H6S9qrluNE72caBm0x6nc4IGKs=","chunkId":"tutorials/overriding-packages#get-the-correct-hash"},{"kind":"code","literal":"{ hello, fetchurl }:\n\nhello.overrideAttrs (finalAttrs: _oldAttrs: {\n  version = \"2.12.2\";\n  src = fetchurl {\n    url = \"mirror://gnu/hello/hello-${finalAttrs.version}.tar.gz\";\n    hash = \"sha256-WpqZbcKSzCTc9BHO6H6S9qrluNE72caBm0x6nc4IGKs=\";\n  };\n})","chunkId":"tutorials/overriding-packages#get-the-correct-hash"},{"kind":"code","literal":"flox build","chunkId":"tutorials/overriding-packages#get-the-correct-hash"},{"kind":"code","literal":"got:","chunkId":"tutorials/overriding-packages#get-the-correct-hash"}]
sources: [{"chunkId":"tutorials/overriding-packages#get-the-correct-hash","url":"/docs/tutorials/overriding-packages#get-the-correct-hash","anchor":"get-the-correct-hash"}]
---

Explains that running the build with an empty hash fails but reports the expected hash in its error, which you copy from the build output and paste into your Nix expression to replace the placeholder.
