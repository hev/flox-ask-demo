---
id: "imageless-kubernetes/intro#syntax"
title: "Introduction"
heading: "Syntax"
group: "Imageless Kubernetes"
order: 237
url: "/docs/imageless-kubernetes/intro#syntax"
anchor: "syntax"
terms: ["syntax","describes","specification","floxhub","environment","given","required","annotation","flox","runtime","class","directs","containerd","backend","while","command","inside","supplied","tiny","dummy","container","image","since","kubernetes","specifications","require","metrics","reporting","optionally","disabled","empty","sample","shown","below","apiversion","kind","metadata","name","demo","annotations"]
hash: "7bce41a9592ef96bf9675d9536604e12a2e10647892f34775d84561d6bccf321"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox/empty:1.0.0","chunkId":"imageless-kubernetes/intro#syntax"}]
sources: [{"chunkId":"imageless-kubernetes/intro#syntax","url":"/docs/imageless-kubernetes/intro#syntax","anchor":"syntax"}]
---

Describes the pod specification syntax: the FloxHub environment is given as a required annotation and the Flox runtime class directs containerd to the Flox backend, while the command to run inside the environment is supplied to a tiny dummy container image since Kubernetes pod specifications require a container image. Metrics reporting can optionally be disabled via an annotation.
