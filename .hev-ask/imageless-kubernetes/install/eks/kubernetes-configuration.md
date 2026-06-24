---
id: "imageless-kubernetes/install/eks#kubernetes-configuration"
title: "Amazon EKS"
heading: "Kubernetes Configuration"
group: "Imageless Kubernetes"
order: 211
url: "/docs/imageless-kubernetes/install/eks#kubernetes-configuration"
anchor: "kubernetes-configuration"
terms: ["kubernetes","configuration","explains","creating","runtime","class","expose","flox","create","pods","node","selector","matching","label","given","group","ensuring","schedule","only","nodes","installed","apiversion","kind","runtimeclass","metadata","name","handler","scheduling","nodeselector","enabled","true","kubectl","apply","yaml","such","utilized","needs","applied","cluster","matches"]
hash: "a672b70499dd2f277335c4e6a855fd287374ea28890b9104e9455ac331d98475"
mode: "agent-primary"
facts: [{"kind":"code","literal":"apiVersion: node.k8s.io/v1\nkind: RuntimeClass\nmetadata:\n  name: flox\nhandler: flox\nscheduling:\n  nodeSelector:\n    flox.dev/enabled: \"true\"","chunkId":"imageless-kubernetes/install/eks#kubernetes-configuration"},{"kind":"code","literal":"RuntimeClass","chunkId":"imageless-kubernetes/install/eks#kubernetes-configuration"},{"kind":"code","literal":"nodeSelector","chunkId":"imageless-kubernetes/install/eks#kubernetes-configuration"},{"kind":"code","literal":"label","chunkId":"imageless-kubernetes/install/eks#kubernetes-configuration"},{"kind":"code","literal":"kubectl apply -f RuntimeClass.yaml","chunkId":"imageless-kubernetes/install/eks#kubernetes-configuration"},{"kind":"value","literal":"kubernetes.io","chunkId":"imageless-kubernetes/install/eks#kubernetes-configuration"}]
sources: [{"chunkId":"imageless-kubernetes/install/eks#kubernetes-configuration","url":"/docs/imageless-kubernetes/install/eks#kubernetes-configuration","anchor":"kubernetes-configuration"}]
---

Explains creating a runtime class to expose the Flox runtime to Kubernetes so it can be used to create pods, with a node selector matching the label given to the Flox node group, ensuring Flox pods schedule only on nodes that have the runtime installed.
