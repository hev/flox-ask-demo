---
id: "imageless-kubernetes/install/uninstall#self-managed"
title: "Uninstall"
heading: "Self-managed"
group: "Imageless Kubernetes"
order: 230
url: "/docs/imageless-kubernetes/install/uninstall#self-managed"
anchor: "self-managed"
terms: ["self","managed","explains","uninstalling","clusters","node","remove","flox","runtime","containerd","configuration","restoring","backup","installer","created","restarting","shim","binary","finally","uninstall","page","config","toml","systemctl","restart","local","first","installation","instructions","makes","original","arbitrary","number","restore","following","docs","imageless","kubernetes","install"]
hash: "27529dec0c30ada075e8a676b7ea4376e92e2221bf2c947f0492af3082c02318"
mode: "agent-primary"
facts: [{"kind":"code","literal":"mv /etc/containerd/config.toml.bak.xx /etc/containerd/config.toml\nsystemctl restart containerd","chunkId":"imageless-kubernetes/install/uninstall#self-managed"},{"kind":"code","literal":"rm /usr/local/bin/containerd-shim-flox-v2","chunkId":"imageless-kubernetes/install/uninstall#self-managed"},{"kind":"code","literal":"containerd","chunkId":"imageless-kubernetes/install/uninstall#self-managed"},{"kind":"code","literal":"/etc/containerd/config.toml.bak.xx","chunkId":"imageless-kubernetes/install/uninstall#self-managed"},{"kind":"code","literal":"xx","chunkId":"imageless-kubernetes/install/uninstall#self-managed"}]
sources: [{"chunkId":"imageless-kubernetes/install/uninstall#self-managed","url":"/docs/imageless-kubernetes/install/uninstall#self-managed","anchor":"self-managed"}]
---

Explains uninstalling on self-managed clusters: on each node remove the Flox runtime from the containerd configuration by restoring the backup the installer created and restarting containerd, remove the shim binary, and finally uninstall Flox per the uninstall page.
