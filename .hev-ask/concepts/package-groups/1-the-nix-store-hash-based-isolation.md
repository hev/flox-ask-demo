---
id: "concepts/package-groups#1-the-nix-store-hash-based-isolation"
title: "Package Groups"
heading: "1. The Nix Store: Hash-Based Isolation"
group: "Concepts"
order: 107
url: "/docs/concepts/package-groups#1-the-nix-store-hash-based-isolation"
anchor: "1-the-nix-store-hash-based-isolation"
terms: ["store","hash","based","isolation","explains","first","property","underlying","coexistence","every","package","lives","path","derived","build","inputs","versions","same","library","coexist","independent","directories","without","overwriting","other","global","directory","forcing","single","version","name","openssl","hashed","built","declared","source","code","compiler","flags","dependency"]
hash: "4bc9cc4d7c942185e72b26ebcebb07395ad944888c9f12a860682fa3d0f6b197"
mode: "agent-primary"
facts: [{"kind":"code","literal":"/nix/store/\u003chash\u003e-\u003cname\u003e-\u003cversion\u003e/","chunkId":"concepts/package-groups#1-the-nix-store-hash-based-isolation"},{"kind":"code","literal":"\u003chash\u003e","chunkId":"concepts/package-groups#1-the-nix-store-hash-based-isolation"},{"kind":"code","literal":"openssl-1.1.1","chunkId":"concepts/package-groups#1-the-nix-store-hash-based-isolation"},{"kind":"code","literal":"openssl-3.1.7","chunkId":"concepts/package-groups#1-the-nix-store-hash-based-isolation"},{"kind":"code","literal":"/nix/store","chunkId":"concepts/package-groups#1-the-nix-store-hash-based-isolation"},{"kind":"code","literal":"/usr/lib","chunkId":"concepts/package-groups#1-the-nix-store-hash-based-isolation"},{"kind":"value","literal":"SHA-256-hashed","chunkId":"concepts/package-groups#1-the-nix-store-hash-based-isolation"}]
sources: [{"chunkId":"concepts/package-groups#1-the-nix-store-hash-based-isolation","url":"/docs/concepts/package-groups#1-the-nix-store-hash-based-isolation","anchor":"1-the-nix-store-hash-based-isolation"}]
---

Explains the first Nix property underlying coexistence: every package lives at its own hash-based path in the Nix store, derived from all of its build inputs, so two versions of the same library can coexist as independent directories without overwriting each other and without a global library directory forcing a single version.
