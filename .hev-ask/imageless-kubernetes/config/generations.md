---
id: "imageless-kubernetes/config#generations"
title: "Configuration"
heading: "Generations"
group: "Imageless Kubernetes"
order: 193
url: "/docs/imageless-kubernetes/config#generations"
anchor: "generations"
terms: ["generations","explains","specific","generation","floxhub","environment","pinned","part","annotation","useful","intentional","staged","upgrades","apiversion","kind","metadata","name","quotes","annotations","flox","specified","version","allow"]
hash: "2424da303e4cdf9169e558c70e103f581067106616a422d1983ff15969af03e9"
mode: "agent-primary"
facts: [{"kind":"code","literal":"apiVersion: v1\nkind: Pod\nmetadata:\n  name: quotes-app\n  annotations:\n    # Pin to generation 2 of the environment\n    flox.dev/environment: \"flox/quotes-app:2\"","chunkId":"imageless-kubernetes/config#generations"},{"kind":"code","literal":"flox.dev/environment","chunkId":"imageless-kubernetes/config#generations"}]
sources: [{"chunkId":"imageless-kubernetes/config#generations","url":"/docs/imageless-kubernetes/config#generations","anchor":"generations"}]
---

Explains that a specific generation of a FloxHub environment can be pinned as part of the environment annotation, which is useful for intentional or staged upgrades.
