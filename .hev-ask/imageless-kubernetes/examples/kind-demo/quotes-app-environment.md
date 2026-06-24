---
id: "imageless-kubernetes/examples/kind-demo#quotes-app-environment"
title: "Web server with Redis"
heading: "Quotes app environment"
group: "Imageless Kubernetes"
order: 203
url: "/docs/imageless-kubernetes/examples/kind-demo#quotes-app-environment"
anchor: "quotes-app-environment"
terms: ["quotes","environment","describes","demo","server","deployment","like","ordinary","kubernetes","differences","setting","flox","runtime","class","container","uses","containerd","shim","annotation","specifying","floxhub","bootstraps","filesystem","instead","image","startup","command","specified","usual","start","pulled","bind","mounted","activated","inside","metadata","labels","annotations","spec","runtimeclassname"]
hash: "10b21b9a6a371ae106725ede96c835c97caf1101344b00568587dbaf79ae3f94"
mode: "agent-primary"
facts: [{"kind":"code","literal":"metadata:\n  labels:\n    app: quotes\n  annotations:\n    flox.dev/environment: \"flox/quotes-app\"\nspec:\n  runtimeClassName: flox\n  containers:\n    - name: quotes\n      image: flox/empty:1.0.0\n      command: [\"quotes-app-go\", \"-r\", \"redis:6379\"]","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"},{"kind":"code","literal":"flox/quotes-app","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"},{"kind":"code","literal":"runtimeClassName: flox","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"},{"kind":"code","literal":"flox.dev/environment: \"flox/quotes-app\"","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"},{"kind":"code","literal":"[\"quotes-app-go\", \"-r\", \"redis:6379\"]","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"},{"kind":"code","literal":"flox/quotes-app-go","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"},{"kind":"code","literal":"quotes-app-go","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"},{"kind":"value","literal":"hub.flox.dev","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"},{"kind":"value","literal":"github.com","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"},{"kind":"value","literal":"quotes.yaml","chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment"}]
sources: [{"chunkId":"imageless-kubernetes/examples/kind-demo#quotes-app-environment","url":"/docs/imageless-kubernetes/examples/kind-demo#quotes-app-environment","anchor":"quotes-app-environment"}]
---

Describes the demo's web-server deployment, which is like an ordinary Kubernetes deployment but with two key differences: setting the Flox runtime class so the container uses the Flox containerd shim, and an environment annotation specifying which FloxHub environment bootstraps the container filesystem instead of an image. A startup command is specified as usual, and on start the environment is pulled from FloxHub, bind-mounted, activated, and the app run inside it.
