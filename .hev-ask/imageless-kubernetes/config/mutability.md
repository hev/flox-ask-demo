---
id: "imageless-kubernetes/config#mutability"
title: "Configuration"
heading: "Mutability"
group: "Imageless Kubernetes"
order: 195
url: "/docs/imageless-kubernetes/config#mutability"
anchor: "mutability"
terms: ["mutability","explains","imageless","kubernetes","pods","immutable","default","install","commands","disabled","store","mounted","read","only","annotation","enable","writable","example","debugging","apiversion","kind","metadata","name","quotes","annotations","flox","environment","mutable","true","such","possible"]
hash: "779dedb99d9b3f3de5ee144d10fd2823a240767a2ee47583e982926aa14d3398"
mode: "agent-primary"
facts: [{"kind":"code","literal":"apiVersion: v1\nkind: Pod\nmetadata:\n  name: quotes-app\n  annotations:\n    flox.dev/environment: \"flox/quotes-app\"\n    # Enable /nix mutability\n    flox.dev/nix-mutable: \"true\"","chunkId":"imageless-kubernetes/config#mutability"},{"kind":"code","literal":"flox install","chunkId":"imageless-kubernetes/config#mutability"},{"kind":"code","literal":"/nix","chunkId":"imageless-kubernetes/config#mutability"},{"kind":"code","literal":"flox.dev/nix-mutable","chunkId":"imageless-kubernetes/config#mutability"},{"kind":"value","literal":"e.g","chunkId":"imageless-kubernetes/config#mutability"}]
sources: [{"chunkId":"imageless-kubernetes/config#mutability","url":"/docs/imageless-kubernetes/config#mutability","anchor":"mutability"}]
---

Explains that Imageless Kubernetes pods are immutable by default (install commands disabled and the Nix store mounted read-only), and that a mutability annotation can enable a writable Nix store, for example for debugging.
