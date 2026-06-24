---
id: "imageless-kubernetes/install/eks#installation"
title: "Amazon EKS"
heading: "Installation"
group: "Imageless Kubernetes"
order: 210
url: "/docs/imageless-kubernetes/install/eks#installation"
anchor: "installation"
terms: ["installation","walks","through","cluster","installing","tool","confirming","access","applying","config","manifest","creates","flox","node","group","bootstrap","commands","install","runtime","shim","override","configures","containerd","recognize","whitelist","annotations","label","class","workloads","schedule","only","these","nodes","eksctl","name","region","created","east","true","secret"]
hash: "6b17941a73f9fbf2dd9d4d6edef2d70f55e225a68e939df545e486213afa1e70"
mode: "agent-primary"
facts: [{"kind":"code","literal":"❯ eksctl get cluster\nNAME        REGION        EKSCTL CREATED\nflox        us-east-1    True","chunkId":"imageless-kubernetes/install/eks#installation"},{"kind":"code","literal":"eksctl","chunkId":"imageless-kubernetes/install/eks#installation"},{"kind":"code","literal":"flox install eksctl","chunkId":"imageless-kubernetes/install/eks#installation"},{"kind":"code","literal":"AWS_ACCESS_KEY_ID","chunkId":"imageless-kubernetes/install/eks#installation"},{"kind":"code","literal":"AWS_SECRET_ACCESS_KEY","chunkId":"imageless-kubernetes/install/eks#installation"},{"kind":"code","literal":"eksctl get cluster","chunkId":"imageless-kubernetes/install/eks#installation"},{"kind":"code","literal":"ClusterConfig","chunkId":"imageless-kubernetes/install/eks#installation"},{"kind":"code","literal":"eksctl create nodegroup -f nodegroup.yaml","chunkId":"imageless-kubernetes/install/eks#installation"},{"kind":"code","literal":"eksctl create --dry-run","chunkId":"imageless-kubernetes/install/eks#installation"},{"kind":"value","literal":"e.g","chunkId":"imageless-kubernetes/install/eks#installation"}]
sources: [{"chunkId":"imageless-kubernetes/install/eks#installation","url":"/docs/imageless-kubernetes/install/eks#installation","anchor":"installation"}]
---

Walks through the cluster-CLI installation: installing the tool and confirming cluster access, then applying a cluster-config manifest that creates the Flox node group with bootstrap commands to install Flox and the runtime shim, an override that configures containerd to recognize the Flox runtime and whitelist its annotations, and a node label used by the runtime class so Flox workloads schedule only on these nodes.
