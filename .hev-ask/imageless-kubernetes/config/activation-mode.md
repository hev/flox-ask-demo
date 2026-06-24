---
id: "imageless-kubernetes/config#activation-mode"
title: "Configuration"
heading: "Activation mode"
group: "Imageless Kubernetes"
order: 190
url: "/docs/imageless-kubernetes/config#activation-mode"
anchor: "activation-mode"
terms: ["activation","mode","explains","imageless","kubernetes","pods","start","default","runs","installed","packages","without","exposing","development","dependencies","activate","annotation","switch","example","running","jobs","refers","manifest","option","details","apiversion","kind","metadata","name","quotes","annotations","flox","environment","options","intended","only","provide","configure","useful","applications"]
hash: "ed37fe0fb62b1aab4fbf91a1f285bb4b0bb934c1f65c11469f4739a6afa1efb4"
mode: "agent-primary"
facts: [{"kind":"code","literal":"apiVersion: v1\nkind: Pod\nmetadata:\n  name: quotes-app\n  annotations:\n    flox.dev/environment: \"flox/quotes-app\"\n    # Activate in dev mode\n    flox.dev/activate-mode: \"dev\"","chunkId":"imageless-kubernetes/config#activation-mode"},{"kind":"code","literal":"run","chunkId":"imageless-kubernetes/config#activation-mode"},{"kind":"code","literal":"flox.dev/activate-mode","chunkId":"imageless-kubernetes/config#activation-mode"},{"kind":"code","literal":"options.activate.mode","chunkId":"imageless-kubernetes/config#activation-mode"}]
sources: [{"chunkId":"imageless-kubernetes/config#activation-mode","url":"/docs/imageless-kubernetes/config#activation-mode","anchor":"activation-mode"}]
---

Explains that Imageless Kubernetes pods start in run mode by default, which runs installed packages without exposing development dependencies, and that an activate-mode annotation can switch the mode (for example to dev mode for running CI jobs). Refers to the manifest activation-mode option for details.
