---
id: "imageless-kubernetes/intro#workflow"
title: "Introduction"
heading: "Workflow"
group: "Imageless Kubernetes"
order: 239
url: "/docs/imageless-kubernetes/intro#workflow"
anchor: "workflow"
terms: ["workflow","describes","deployed","starts","currently","live","generation","environment","adding","package","requires","only","installing","redeploying","image","rebuild","under","hood","operator","installs","creating","local","pushes","floxhub","next","deploy","pulls","latest","flox","install","myorg","myenv","somepackage","push","once","create","specification","start","generations","concept"]
hash: "4c9e4148661910ebbadac1a671d6a929ed750dd51714a8e56a1c00d61f7fc5e2"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox install -r myorg/myenv somepackage","chunkId":"imageless-kubernetes/intro#workflow"},{"kind":"code","literal":"flox push -r myorg/myenv","chunkId":"imageless-kubernetes/intro#workflow"},{"kind":"code","literal":"somepackage","chunkId":"imageless-kubernetes/intro#workflow"}]
sources: [{"chunkId":"imageless-kubernetes/intro#workflow","url":"/docs/imageless-kubernetes/intro#workflow","anchor":"workflow"}]
---

Describes the workflow: a deployed pod starts with the currently live generation of its environment, and adding a package requires only installing it to the environment and redeploying, with no image rebuild. Under the hood an operator installs the package (creating a new local generation), pushes to FloxHub, and the next deploy pulls the latest generation.
