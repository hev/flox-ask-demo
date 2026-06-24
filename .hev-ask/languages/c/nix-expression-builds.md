---
id: "languages/c#nix-expression-builds"
title: "C/C++"
heading: "Nix expression builds"
group: "Languages"
order: 275
url: "/docs/languages/c#nix-expression-builds"
anchor: "nix-expression-builds"
terms: ["expression","builds","shows","build","project","compiled","clang","setting","install","prefix","output","directory","clangstdenv","mkderivation","pname","myproject","version","installflags","concept","docs","concepts"]
hash: "14474e081598e876bac358018c36eea3f3e0c84079be25c9571a5a9b5dcfd10c"
mode: "agent-primary"
facts: [{"kind":"code","literal":"{ clangStdenv }:\n\nclangStdenv.mkDerivation {\n  pname = \"myproject\";\n  version = \"0.0.1\";\n  src = ../../.;\n\n  installFlags = [ \"PREFIX=$(out)\" ];\n}","chunkId":"languages/c#nix-expression-builds"},{"kind":"code","literal":"clang","chunkId":"languages/c#nix-expression-builds"}]
sources: [{"chunkId":"languages/c#nix-expression-builds","url":"/docs/languages/c#nix-expression-builds","anchor":"nix-expression-builds"}]
---

Shows a Nix expression build for a C/C++ project compiled with clang, setting the install prefix to the output directory.
