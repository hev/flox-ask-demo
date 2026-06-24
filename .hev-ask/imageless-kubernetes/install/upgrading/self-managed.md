---
id: "imageless-kubernetes/install/upgrading#self-managed"
title: "Upgrading"
heading: "Self-managed"
group: "Imageless Kubernetes"
order: 234
url: "/docs/imageless-kubernetes/install/upgrading#self-managed"
anchor: "self-managed"
terms: ["self","managed","explains","clusters","flox","runtime","shim","must","upgraded","every","node","upgrade","install","page","installation","type","guidance","running","command","after","upgrading","pods","version","while","existing","only","once","restarted","activate","containerd","installer","trust","both","individually","details","perform","done","created","docs","imageless"]
hash: "cc5cb150aeb82cc15bf019f69b8e6fc3dc473038e1b3ce3839addf86a02c41c9"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox activate -r flox/containerd-shim-flox-installer --trust","chunkId":"imageless-kubernetes/install/upgrading#self-managed"}]
sources: [{"chunkId":"imageless-kubernetes/install/upgrading#self-managed","url":"/docs/imageless-kubernetes/install/upgrading#self-managed","anchor":"self-managed"}]
---

Explains that on self-managed clusters Flox and the runtime shim must each be upgraded on every node: upgrade Flox per the install page's per-installation-type guidance, and upgrade the shim by re-running its install command. After upgrading, new pods use the new shim version while existing Flox pods only do so once restarted.
