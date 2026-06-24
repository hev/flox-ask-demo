---
id: "languages/nodejs#nix-expression-builds"
title: "Node.js"
heading: "Nix expression builds"
group: "Languages"
order: 286
url: "/docs/languages/nodejs#nix-expression-builds"
anchor: "nix-expression-builds"
terms: ["expression","builds","shows","build","node","project","imports","existing","lockfile","fetch","dependencies","buildnpmpackage","importnpmlock","final","pname","myproject","version","npmdeps","npmroot","npmconfighook","npmbuildscript","nixos","import","dependency","file","concept","docs","concepts","pure","section","manifest"]
hash: "30159dd65493a0b015fd38441a654e30063fda87a272a61b743d51c29437bd3d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"{\n  buildNpmPackage,\n  importNpmLock,\n}:\n\nbuildNpmPackage (final: {\n  pname = \"myproject\";\n  version = \"0.1.0\";\n  src = ../../../.;\n\n  npmDeps = importNpmLock {\n    npmRoot = final.src;\n  };\n  npmConfigHook = importNpmLock.npmConfigHook;\n  npmBuildScript = \"build\";\n});","chunkId":"languages/nodejs#nix-expression-builds"},{"kind":"code","literal":"buildNpmPackage","chunkId":"languages/nodejs#nix-expression-builds"},{"kind":"value","literal":"nixos.org","chunkId":"languages/nodejs#nix-expression-builds"}]
sources: [{"chunkId":"languages/nodejs#nix-expression-builds","url":"/docs/languages/nodejs#nix-expression-builds","anchor":"nix-expression-builds"}]
---

Shows a Nix expression build for a Node.js project that imports the existing npm lockfile to fetch dependencies.
