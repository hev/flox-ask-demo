---
id: "imageless-kubernetes/config#mixed-flox-non-flox-pods"
title: "Configuration"
heading: "Mixed Flox non-Flox pods"
group: "Imageless Kubernetes"
order: 194
url: "/docs/imageless-kubernetes/config#mixed-flox-non-flox-pods"
anchor: "mixed-flox-non-flox-pods"
terms: ["mixed","flox","pods","explains","running","containers","same","annotations","lists","left","entirely","unmodified","runtime","best","sidecars","should","unchanged","whose","main","process","runs","environment","exec","commands","outside","workload","needs","debugging","auxiliary","base","container","skip","runc","vault","agent","istio","kubectl","imageless","kubernetes","allows"]
hash: "c2bd2120487f83704067731553fea8f1539dc3f4c1ceaae84f6f21f063a94152"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox.dev/skip-containers","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"},{"kind":"code","literal":"flox.dev/skip-containers-exec","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"},{"kind":"code","literal":"runc","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"},{"kind":"code","literal":"vault-agent","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"},{"kind":"code","literal":"istio","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"},{"kind":"code","literal":"flox.dev/environment","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"},{"kind":"code","literal":"skip-containers","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"},{"kind":"code","literal":"skip-containers-exec","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"},{"kind":"code","literal":"kubectl exec","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"},{"kind":"value","literal":"e.g","chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods"}]
sources: [{"chunkId":"imageless-kubernetes/config#mixed-flox-non-flox-pods","url":"/docs/imageless-kubernetes/config#mixed-flox-non-flox-pods","anchor":"mixed-flox-non-flox-pods"}]
---

Explains running Flox and non-Flox containers in the same pod using two annotations: one that lists containers left entirely unmodified by the Flox runtime (best for sidecars that should run unchanged) and one that lists containers whose main process runs in the Flox environment but whose exec commands run outside it (best when the main workload needs Flox but debugging or auxiliary exec commands should run in the base container).
