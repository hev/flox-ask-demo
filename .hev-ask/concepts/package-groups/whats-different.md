---
id: "concepts/package-groups#whats-different"
title: "Package Groups"
heading: "What's Different"
group: "Concepts"
order: 138
url: "/docs/concepts/package-groups#whats-different"
anchor: "whats-different"
terms: ["different","explains","package","groups","automate","manual","resolver","searches","compatible","revisions","automatically","versus","manually","discovering","maintaining","pins","resolves","group","against","declared","target","systems","system","modeling","upgrades","atomically","keeping","members","revision","advancing","pinned","inputs","whose","compatibility","determined","builds","checks","nixpkgs","flox","upgrade"]
hash: "13c2c909d16744dafd433c9352dddbb980b9ebd62a527ca195df10a55b0c7035"
mode: "agent-primary"
facts: [{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#whats-different"},{"kind":"code","literal":"flox upgrade","chunkId":"concepts/package-groups#whats-different"},{"kind":"code","literal":"nix flake update","chunkId":"concepts/package-groups#whats-different"},{"kind":"code","literal":"flake.lock","chunkId":"concepts/package-groups#whats-different"}]
sources: [{"chunkId":"concepts/package-groups#whats-different","url":"/docs/concepts/package-groups#whats-different","anchor":"whats-different"}]
---

Explains how package groups automate what is manual in Nix: the resolver searches for compatible revisions automatically (versus manually discovering and maintaining pins), resolves a group against all declared target systems (versus per-system modeling), and upgrades a group atomically keeping all members on one revision (versus advancing pinned inputs whose compatibility is determined by builds and checks).
