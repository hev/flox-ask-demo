---
id: "imageless-kubernetes/examples/kind-demo#redis-environment"
title: "Web server with Redis"
heading: "Redis environment"
group: "Imageless Kubernetes"
order: 204
url: "/docs/imageless-kubernetes/examples/kind-demo#redis-environment"
anchor: "redis-environment"
terms: ["redis","environment","describes","demo","second","deployment","memory","data","store","server","depends","similarly","runs","floxhub","hosted","flox","rather","container","image","relevant","runtime","class","annotation","snippet","manifest","metadata","labels","annotations","spec","runtimeclassname","containers","name","empty","command","daemonize","bind","protected","mode","volumemounts","mountpath"]
hash: "057d3d1495da6b67816725f1c908ba7517f1fedfcf1991699cfb6e1ac1ca9548"
mode: "agent-primary"
facts: [{"kind":"code","literal":"metadata:\n  labels:\n    app: redis\n  annotations:\n    flox.dev/environment: \"flox/redis\"\nspec:\n  runtimeClassName: flox\n  containers:\n    - name: redis\n      image: flox/empty:1.0.0\n      command: [\"redis-server\", \"--daemonize\", \"no\", \"--dir\", \"/data\", \"--bind\", \"0.0.0.0\", \"--protected-mode\", \"no\" ]\n      volumeMounts:\n        - name: redis-data\n          mountPath: /data","chunkId":"imageless-kubernetes/examples/kind-demo#redis-environment"},{"kind":"code","literal":"quotes-app-go","chunkId":"imageless-kubernetes/examples/kind-demo#redis-environment"},{"kind":"code","literal":"flox/redis","chunkId":"imageless-kubernetes/examples/kind-demo#redis-environment"},{"kind":"value","literal":"hub.flox.dev","chunkId":"imageless-kubernetes/examples/kind-demo#redis-environment"},{"kind":"value","literal":"github.com","chunkId":"imageless-kubernetes/examples/kind-demo#redis-environment"},{"kind":"value","literal":"redis.yaml","chunkId":"imageless-kubernetes/examples/kind-demo#redis-environment"}]
sources: [{"chunkId":"imageless-kubernetes/examples/kind-demo#redis-environment","url":"/docs/imageless-kubernetes/examples/kind-demo#redis-environment","anchor":"redis-environment"}]
---

Describes the demo's second deployment, an in-memory data store that the web server depends on, which similarly runs a FloxHub-hosted Flox environment rather than a container image, with the relevant runtime-class and environment-annotation snippet from its deployment manifest.
