---
id: "concepts/nix-expression-builds#example-vendor-an-existing-package"
title: "Nix expression builds"
heading: "Example: Vendor an existing package"
group: "Concepts"
order: 95
url: "/docs/concepts/nix-expression-builds#example-vendor-an-existing-package"
anchor: "example-vendor-an-existing-package"
terms: ["example","vendor","existing","package","explains","while","usually","only","override","specific","attributes","keep","benefiting","upstream","changes","fully","expression","extracting","nixpkgs","packages","directory","make","more","fundamental","preserve","being","removed","mkdir","flox","pkgs","editor","extra","experimental","features","command","flakes","edit","hello","typically","would"]
hash: "5d5c5d04d3f71423d0a34a69869604bd0eda7a35b780594d3d9438458d572193"
mode: "agent-primary"
facts: [{"kind":"code","literal":"mkdir -p .flox/pkgs\nEDITOR=cat \\\n  nix --extra-experimental-features \"nix-command flakes\" \\\n  edit 'nixpkgs#hello' \\\n  \u003e .flox/pkgs/hello.nix","chunkId":"concepts/nix-expression-builds#example-vendor-an-existing-package"},{"kind":"code","literal":"hello","chunkId":"concepts/nix-expression-builds#example-vendor-an-existing-package"},{"kind":"code","literal":"nixpkgs","chunkId":"concepts/nix-expression-builds#example-vendor-an-existing-package"}]
sources: [{"chunkId":"concepts/nix-expression-builds#example-vendor-an-existing-package","url":"/docs/concepts/nix-expression-builds#example-vendor-an-existing-package","anchor":"example-vendor-an-existing-package"}]
---

Explains that while you usually only override specific attributes of an existing package to keep benefiting from upstream changes, you can fully vendor a package's expression by extracting it from nixpkgs into your packages directory to make more fundamental changes or preserve a package being removed upstream.
