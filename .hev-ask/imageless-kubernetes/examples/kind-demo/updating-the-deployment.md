---
id: "imageless-kubernetes/examples/kind-demo#updating-the-deployment"
title: "Web server with Redis"
heading: "Updating the deployment"
group: "Imageless Kubernetes"
order: 206
url: "/docs/imageless-kubernetes/examples/kind-demo#updating-the-deployment"
anchor: "updating-the-deployment"
terms: ["updating","deployment","explains","because","environment","hosted","floxhub","needs","container","image","rebuild","after","changing","publish","package","upgrade","remote","restarting","pulls","latest","generation","gives","like","reproducibility","without","overhead","rebuilding","iterating","quotes","flox","there","need","update","change","would","require","running","pull","allows","deploying"]
hash: "ee3956470130a32b4f11acc0f1d94124f6e8adab4e20c018e9d50ce4efa063d4"
mode: "agent-primary"
facts: [{"kind":"code","literal":"quotes-app-go","chunkId":"imageless-kubernetes/examples/kind-demo#updating-the-deployment"},{"kind":"code","literal":"flox publish","chunkId":"imageless-kubernetes/examples/kind-demo#updating-the-deployment"},{"kind":"code","literal":"flox upgrade -r flox/quotes-app","chunkId":"imageless-kubernetes/examples/kind-demo#updating-the-deployment"}]
sources: [{"chunkId":"imageless-kubernetes/examples/kind-demo#updating-the-deployment","url":"/docs/imageless-kubernetes/examples/kind-demo#updating-the-deployment","anchor":"updating-the-deployment"}]
---

Explains that because the environment is hosted on FloxHub, updating the deployment needs no container image rebuild: after changing the app you publish the package and upgrade the remote environment, then restarting a pod pulls the latest generation. This gives container-like reproducibility without the overhead of rebuilding an image when iterating.
