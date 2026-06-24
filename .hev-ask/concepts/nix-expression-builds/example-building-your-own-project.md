---
id: "concepts/nix-expression-builds#example-building-your-own-project"
title: "Nix expression builds"
heading: "Example: Building your own project"
group: "Concepts"
order: 90
url: "/docs/concepts/nix-expression-builds#example-building-your-own-project"
anchor: "example-building-your-own-project"
terms: ["example","building","project","gives","expression","rust","lives","same","repository","flox","environment","vendoring","dependencies","lock","file","running","build","packaging","resulting","binary","rustplatform","buildrustpackage","pname","quotes","version","cargolock","lockfile","cargo","meta","description","written","license","licenses","vendor","package"]
hash: "79eac0b9403b7acf1159339dca32f0ab88ba3e63738e48d89969b6a3e41e8ae6"
mode: "agent-primary"
facts: [{"kind":"code","literal":"{ rustPlatform, lib }:\n\nrustPlatform.buildRustPackage rec {\n  pname = \"quotes-app-rust\";\n  version = \"0.1.0\";\n\n  src = ../../.;\n  cargoLock.lockFile = \"${src}/Cargo.lock\";\n\n  meta = with lib; {\n    description = \"Quotes App written in Rust\";\n    license = licenses.mit;\n  };\n}","chunkId":"concepts/nix-expression-builds#example-building-your-own-project"},{"kind":"code","literal":"Cargo.lock","chunkId":"concepts/nix-expression-builds#example-building-your-own-project"},{"kind":"code","literal":"cargo build","chunkId":"concepts/nix-expression-builds#example-building-your-own-project"}]
sources: [{"chunkId":"concepts/nix-expression-builds#example-building-your-own-project","url":"/docs/concepts/nix-expression-builds#example-building-your-own-project","anchor":"example-building-your-own-project"}]
---

Gives an example Nix expression for building a Rust project that lives in the same repository as the Flox environment, vendoring dependencies from the lock file, running the build, and packaging the resulting binary.
