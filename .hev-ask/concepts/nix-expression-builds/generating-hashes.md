---
id: "concepts/nix-expression-builds#generating-hashes"
title: "Nix expression builds"
heading: "Generating hashes"
group: "Concepts"
order: 96
url: "/docs/concepts/nix-expression-builds#generating-hashes"
anchor: "generating-hashes"
terms: ["generating","hashes","explains","expressions","fetching","external","dependencies","specify","reproducibility","hash","must","change","whenever","source","changes","describes","technique","supplying","empty","running","build","copying","correct","value","resulting","mismatch","error","message","fetchurl","mirror","hello","finalattrs","version","flox","fetch","often","ensure","reproducible","trusted","speed"]
hash: "6d4bce8193c6457941b10903a2856c13c9dbbb8895d9add0661a01c3a03c644b"
mode: "agent-primary"
facts: [{"kind":"code","literal":"src = fetchurl {\n    url = \"mirror://gnu/hello/hello-${finalAttrs.version}.tar.gz\";\n    hash = \"\";\n  };","chunkId":"concepts/nix-expression-builds#generating-hashes"},{"kind":"code","literal":"src","chunkId":"concepts/nix-expression-builds#generating-hashes"},{"kind":"code","literal":"url","chunkId":"concepts/nix-expression-builds#generating-hashes"},{"kind":"code","literal":"flox build","chunkId":"concepts/nix-expression-builds#generating-hashes"}]
sources: [{"chunkId":"concepts/nix-expression-builds#generating-hashes","url":"/docs/concepts/nix-expression-builds#generating-hashes","anchor":"generating-hashes"}]
---

Explains that expressions fetching external dependencies specify hashes for reproducibility and that the hash must change whenever the source changes. Describes the technique of supplying an empty hash, running a build, and copying the correct hash value from the resulting mismatch error message.
