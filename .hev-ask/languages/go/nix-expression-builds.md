---
id: "languages/go#nix-expression-builds"
title: "Go"
heading: "Nix expression builds"
group: "Languages"
order: 279
url: "/docs/languages/go#nix-expression-builds"
anchor: "nix-expression-builds"
terms: ["expression","builds","shows","build","project","imports","existing","dependency","file","noting","must","update","generated","vendor","hash","buildgomodule","pname","myproject","version","vendorhash","nixos","import","need","hashes","concept","docs","concepts","pure","section","manifest","generating"]
hash: "842492f0361b97f72348b250ba722be625e8d76feceac3f36a078a107334dde3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"{ buildGoModule }:\n\nbuildGoModule {\n  pname = \"myproject\";\n  version = \"0.1.0\";\n  src = ../../../.;\n\n  vendorHash = \"\u003cYOUR_HASH\u003e\";\n}","chunkId":"languages/go#nix-expression-builds"},{"kind":"code","literal":"buildGoModule","chunkId":"languages/go#nix-expression-builds"},{"kind":"value","literal":"nixos.org","chunkId":"languages/go#nix-expression-builds"}]
sources: [{"chunkId":"languages/go#nix-expression-builds","url":"/docs/languages/go#nix-expression-builds","anchor":"nix-expression-builds"}]
---

Shows a Nix expression build for a Go project that imports the existing dependency file, noting you must update the generated vendor hash.
