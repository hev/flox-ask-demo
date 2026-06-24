---
id: "languages/rust#nix-expression-builds"
title: "Rust"
heading: "Nix expression builds"
group: "Languages"
order: 307
url: "/docs/languages/rust#nix-expression-builds"
anchor: "nix-expression-builds"
terms: ["expression","builds","shows","build","rust","project","imports","existing","cargo","lockfile","rustplatform","buildrustpackage","pname","myproject","version","cargolock","lock","nixos","github","espressif","wikipedia","import","dependency","file","exampleenv","https","flox","floxenvs","tree","main","custom","toolchains","zmitchell","esp32","products","socs","risc","wiki","concept","docs"]
hash: "82f4d8ea2b50022296ac2e6c49b0aec63d4e88060da4fc81850813fca8e97718"
mode: "agent-primary"
facts: [{"kind":"code","literal":"{ rustPlatform }:\n\nrustPlatform.buildRustPackage {\n  pname = \"myproject\";\n  version = \"0.0.1\";\n  src = ../../../.;\n\n  cargoLock = {\n    lockFile = src + \"/Cargo.lock\";\n  };\n}","chunkId":"languages/rust#nix-expression-builds"},{"kind":"code","literal":"buildRustPackage","chunkId":"languages/rust#nix-expression-builds"},{"kind":"value","literal":"nixos.org","chunkId":"languages/rust#nix-expression-builds"},{"kind":"value","literal":"github.com","chunkId":"languages/rust#nix-expression-builds"},{"kind":"value","literal":"www.espressif.com","chunkId":"languages/rust#nix-expression-builds"},{"kind":"value","literal":"en.wikipedia.org","chunkId":"languages/rust#nix-expression-builds"}]
sources: [{"chunkId":"languages/rust#nix-expression-builds","url":"/docs/languages/rust#nix-expression-builds","anchor":"nix-expression-builds"}]
---

Shows a Nix expression build for a Rust project that imports the existing Cargo lockfile.
