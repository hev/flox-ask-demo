---
id: "imageless-kubernetes/tech#containerd-shim"
title: "Tech"
heading: "containerd-shim"
group: "Imageless Kubernetes"
order: 241
url: "/docs/imageless-kubernetes/tech#containerd-shim"
anchor: "containerd-shim"
terms: ["containerd","shim","explains","imageless","kubernetes","works","wrapping","standard","make","flox","specific","modifications","container","config","filesystem","normally","hands","calls","level","runtime","create","intercepts","configuration","prepare","pulls","specified","environment","node","mounts","modifies","command","context","runc","json","githubusercontent","under","hood","diagram","below","shows"]
hash: "54432df7a6cce553e08ebe61e1e61457b7a4b2ecf6e78205291ae26892e43910"
mode: "agent-primary"
facts: [{"kind":"code","literal":"containerd-shim-runc-v2","chunkId":"imageless-kubernetes/tech#containerd-shim"},{"kind":"code","literal":"containerd","chunkId":"imageless-kubernetes/tech#containerd-shim"},{"kind":"code","literal":"config.json","chunkId":"imageless-kubernetes/tech#containerd-shim"},{"kind":"code","literal":"containerd-shim","chunkId":"imageless-kubernetes/tech#containerd-shim"},{"kind":"code","literal":"runc","chunkId":"imageless-kubernetes/tech#containerd-shim"},{"kind":"code","literal":"containerd-shim-flox-v2","chunkId":"imageless-kubernetes/tech#containerd-shim"},{"kind":"value","literal":"raw.githubusercontent.com","chunkId":"imageless-kubernetes/tech#containerd-shim"},{"kind":"value","literal":"containerd.png","chunkId":"imageless-kubernetes/tech#containerd-shim"}]
sources: [{"chunkId":"imageless-kubernetes/tech#containerd-shim","url":"/docs/imageless-kubernetes/tech#containerd-shim","anchor":"containerd-shim"}]
---

Explains that Imageless Kubernetes works by wrapping the standard containerd shim to make Flox-specific modifications to the container config and filesystem. Where containerd normally hands a config to a shim that calls the low-level runtime to create the container, the Flox shim intercepts the configuration to prepare the container, pulls the specified Flox environment to the node and mounts it into the container, and modifies the command to run it in the context of the Flox environment.
