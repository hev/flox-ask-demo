---
id: "imageless-kubernetes/install/eks#terraform-node-group-creation"
title: "Amazon EKS"
heading: "Terraform node group creation"
group: "Imageless Kubernetes"
order: 214
url: "/docs/imageless-kubernetes/install/eks#terraform-node-group-creation"
anchor: "terraform-node-group-creation"
terms: ["terraform","node","group","creation","walks","through","provisioning","flox","infrastructure","code","module","explaining","input","bootstrapping","installs","package","runs","installer","detects","containerd","version","matching","runtime","shim","uses","config","manifest","make","aware","whitelist","annotations","label","identifies","enabled","nodes","class","cloudinit","nodeadm","activate","local"]
hash: "30efd7999a3df3666ef8d20533e88f20d87441fad9272454041279c34ef048ae"
mode: "agent-primary"
facts: [{"kind":"code","literal":"cloudinit_pre_nodeadm","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"code","literal":"nodeadm","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"code","literal":"rpm","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"code","literal":"flox activate","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"code","literal":"containerd","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"code","literal":"/usr/local/bin","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"code","literal":"NodeConfig","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"code","literal":"labels","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"code","literal":"label","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"code","literal":"RuntimeClass","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"},{"kind":"value","literal":"e.g","chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation"}]
sources: [{"chunkId":"imageless-kubernetes/install/eks#terraform-node-group-creation","url":"/docs/imageless-kubernetes/install/eks#terraform-node-group-creation","anchor":"terraform-node-group-creation"}]
---

Walks through provisioning the Flox node group with an infrastructure-as-code module, explaining each input and the bootstrapping: it installs Flox via the package, runs an installer that detects the node's containerd version and installs the matching runtime shim, then uses a node-config manifest to make containerd aware of the Flox runtime and whitelist its annotations. A node label identifies Flox-enabled nodes for use with the runtime class.
