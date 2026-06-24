---
id: "imageless-kubernetes/examples/kind-demo#running-the-example"
title: "Web server with Redis"
heading: "Running the example"
group: "Imageless Kubernetes"
order: 205
url: "/docs/imageless-kubernetes/examples/kind-demo#running-the-example"
anchor: "running-the-example"
terms: ["running","example","explains","entire","demo","locally","cloning","repo","activating","flox","environment","bringing","starts","local","kubernetes","cluster","deploys","server","backed","data","store","shows","fetch","something","clone","https","github","kind","activate","just","curl","localhost","3000","quotes","entirety","following","commands","redis"]
hash: "1ce1b3dd68efa8804dcc3629aec29c7e2e9ab3afbd0c0c031e329f5e5b955493"
mode: "agent-primary"
facts: [{"kind":"code","literal":"git clone https://github.com/flox/flox-kind-demo.git\ncd flox-kind-demo\nflox activate\njust up","chunkId":"imageless-kubernetes/examples/kind-demo#running-the-example"},{"kind":"code","literal":"curl localhost:3000/quotes/0","chunkId":"imageless-kubernetes/examples/kind-demo#running-the-example"},{"kind":"code","literal":"kind","chunkId":"imageless-kubernetes/examples/kind-demo#running-the-example"}]
sources: [{"chunkId":"imageless-kubernetes/examples/kind-demo#running-the-example","url":"/docs/imageless-kubernetes/examples/kind-demo#running-the-example","anchor":"running-the-example"}]
---

Explains running the entire demo locally by cloning the repo, activating its Flox environment, and bringing it up, which starts a local Kubernetes cluster and deploys the web server backed by the data store, then shows how to fetch something from the web server.
