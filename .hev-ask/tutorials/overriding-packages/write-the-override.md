---
id: "tutorials/overriding-packages#write-the-override"
title: "Using a newer version of a package"
heading: "Write the override"
group: "Tutorials"
order: 793
url: "/docs/tutorials/overriding-packages#write-the-override"
anchor: "write-the-override"
terms: ["write","override","walks","through","writing","expression","takes","existing","build","recipe","overrides","version","source","attributes","cautions","depends","package","defined","nixpkgs","hash","initially","left","empty","filled","reported","value","mkdir","flox","pkgs","hello","fetchurl","overrideattrs","finalattrs","oldattrs","mirror","create","note","need","depend","different"]
hash: "b499535437f31668f99bf4036d6d727927b4a3782686845600962d0360de455f"
mode: "agent-primary"
facts: [{"kind":"code","literal":"mkdir -p .flox/pkgs/hello","chunkId":"tutorials/overriding-packages#write-the-override"},{"kind":"code","literal":"{ hello, fetchurl }:\n\nhello.overrideAttrs (finalAttrs: _oldAttrs: {\n  version = \"2.12.2\";\n  src = fetchurl {\n    url = \"mirror://gnu/hello/hello-${finalAttrs.version}.tar.gz\";\n    hash = \"\";\n  };\n})","chunkId":"tutorials/overriding-packages#write-the-override"},{"kind":"code","literal":"hello","chunkId":"tutorials/overriding-packages#write-the-override"},{"kind":"code","literal":"version","chunkId":"tutorials/overriding-packages#write-the-override"},{"kind":"code","literal":"src","chunkId":"tutorials/overriding-packages#write-the-override"},{"kind":"code","literal":"hash","chunkId":"tutorials/overriding-packages#write-the-override"}]
sources: [{"chunkId":"tutorials/overriding-packages#write-the-override","url":"/docs/tutorials/overriding-packages#write-the-override","anchor":"write-the-override"}]
---

Walks through writing a Nix expression that takes the existing build recipe and overrides its version and source attributes. It cautions that which attributes to override depends on how the package is defined in nixpkgs, and that the hash is initially left empty to be filled in from the build's reported value.
