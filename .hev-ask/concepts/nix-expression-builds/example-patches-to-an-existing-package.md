---
id: "concepts/nix-expression-builds#example-patches-to-an-existing-package"
title: "Nix expression builds"
heading: "Example: Patches to an existing package"
group: "Concepts"
order: 94
url: "/docs/concepts/nix-expression-builds#example-patches-to-an-existing-package"
anchor: "example-patches-to-an-existing-package"
terms: ["example","patches","existing","package","gives","expression","applies","patch","such","unreleased","appending","list","saving","subdirectory","file","version","controlled","noting","tests","also","need","modified","hello","overrideattrs","oldattrs","shouty","meta","description","patched","shouts","default","greeting","want","apply","note","saved","directory","control","separate","build"]
hash: "0cc71a2cc4d927ffdd8b704a0dd0dbedc615f29c21a1b5d1012b4ca83c57f563"
mode: "agent-primary"
facts: [{"kind":"code","literal":"{ hello }:\n\nhello.overrideAttrs (oldAttrs: {\n  patches = (oldAttrs.patches or []) ++ [\n    ./shouty.patch\n  ];\n  meta = oldAttrs.meta // {\n    description = \"A patched version of hello that shouts the default greeting.\";\n  };\n})","chunkId":"concepts/nix-expression-builds#example-patches-to-an-existing-package"},{"kind":"code","literal":"default.nix","chunkId":"concepts/nix-expression-builds#example-patches-to-an-existing-package"}]
sources: [{"chunkId":"concepts/nix-expression-builds#example-patches-to-an-existing-package","url":"/docs/concepts/nix-expression-builds#example-patches-to-an-existing-package","anchor":"example-patches-to-an-existing-package"}]
---

Gives an example Nix expression that applies a patch (such as an unreleased bug fix) to an existing package by appending to its patch list, saving the expression in its own subdirectory so the patch file can be version-controlled, and noting that the package's tests may also need to be modified.
