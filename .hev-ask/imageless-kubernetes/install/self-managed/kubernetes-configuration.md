---
id: "imageless-kubernetes/install/self-managed#kubernetes-configuration"
title: "Self-managed"
heading: "Kubernetes configuration"
group: "Imageless Kubernetes"
order: 220
url: "/docs/imageless-kubernetes/install/self-managed#kubernetes-configuration"
anchor: "kubernetes-configuration"
terms: ["kubernetes","configuration","explains","exposing","flox","runtime","class","recommending","labeling","nodes","shim","installed","label","node","selector","match","apply","pods","schedule","only","kubectl","name","enabled","true","apiversion","kind","runtimeclass","metadata","handler","scheduling","nodeselector","yaml","expose","such","utilized","create","recommend","ensure","scheduled","following"]
hash: "f5ded132e891c0c532b2fcd7505252c9bd8a9ef2d3afc817a7a803f5a323d509"
mode: "agent-primary"
facts: [{"kind":"code","literal":"kubectl label node \u003cnode-name\u003e \"flox.dev/enabled=true\"","chunkId":"imageless-kubernetes/install/self-managed#kubernetes-configuration"},{"kind":"code","literal":"apiVersion: node.k8s.io/v1\n    kind: RuntimeClass\n    metadata:\n      name: flox\n    handler: flox\n    scheduling:\n      nodeSelector:\n        flox.dev/enabled: \"true\"","chunkId":"imageless-kubernetes/install/self-managed#kubernetes-configuration"},{"kind":"code","literal":"kubectl apply -f RuntimeClass.yaml","chunkId":"imageless-kubernetes/install/self-managed#kubernetes-configuration"},{"kind":"code","literal":"nodeSelector","chunkId":"imageless-kubernetes/install/self-managed#kubernetes-configuration"},{"kind":"code","literal":"RuntimeClass","chunkId":"imageless-kubernetes/install/self-managed#kubernetes-configuration"},{"kind":"code","literal":"label","chunkId":"imageless-kubernetes/install/self-managed#kubernetes-configuration"}]
sources: [{"chunkId":"imageless-kubernetes/install/self-managed#kubernetes-configuration","url":"/docs/imageless-kubernetes/install/self-managed#kubernetes-configuration","anchor":"kubernetes-configuration"}]
---

Explains exposing the Flox runtime to Kubernetes with a runtime class, recommending labeling nodes that have the shim installed: label the nodes, set the runtime class's node selector to match the label, and apply it so Flox pods schedule only on nodes with the runtime installed.
