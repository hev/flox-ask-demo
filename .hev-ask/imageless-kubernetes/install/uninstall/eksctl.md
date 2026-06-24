---
id: "imageless-kubernetes/install/uninstall#eksctl"
title: "Uninstall"
heading: "eksctl"
group: "Imageless Kubernetes"
order: 229
url: "/docs/imageless-kubernetes/install/uninstall#eksctl"
anchor: "eksctl"
terms: ["eksctl","explains","uninstalling","cluster","deleting","node","group","same","config","file","create","alternatively","removing","directly","cloud","management","console","delete","nodegroup","yaml","remove"]
hash: "a2b397526af0d246a40956d89eabc6b89d10f5cd763d1243555d7e58691af71f"
mode: "agent-primary"
facts: [{"kind":"code","literal":"eksctl delete nodegroup -f nodegroup.yaml","chunkId":"imageless-kubernetes/install/uninstall#eksctl"},{"kind":"code","literal":"eksctl","chunkId":"imageless-kubernetes/install/uninstall#eksctl"},{"kind":"code","literal":"nodegroup.yaml","chunkId":"imageless-kubernetes/install/uninstall#eksctl"}]
sources: [{"chunkId":"imageless-kubernetes/install/uninstall#eksctl","url":"/docs/imageless-kubernetes/install/uninstall#eksctl","anchor":"eksctl"}]
---

Explains uninstalling when the cluster CLI was used by deleting the node group with the same config file used to create it, or alternatively removing the node group directly from the cloud management console.
