---
id: "imageless-kubernetes/install/troubleshooting#configuration-conflicts"
title: "Troubleshooting"
heading: "Configuration conflicts"
group: "Imageless Kubernetes"
order: 224
url: "/docs/imageless-kubernetes/install/troubleshooting#configuration-conflicts"
anchor: "configuration-conflicts"
terms: ["configuration","conflicts","describes","troubleshooting","scenario","flox","additions","containerd","overridden","competing","imported","config","file","advises","dumping","active","verify","runtime","present","checking","imports","section","loading","other","files","confirming","relevant","sections","exist","missing","adding","restarting","noting","more","likely","container","toolkit","installed","same","node"]
hash: "836bf38a552310845d7608905fc49b58b955633d7715e93c9020bbf312ef5844"
mode: "agent-primary"
facts: [{"kind":"code","literal":"containerd config dump | grep -A 10 \"flox\"","chunkId":"imageless-kubernetes/install/troubleshooting#configuration-conflicts"},{"kind":"code","literal":"[plugins.\"io.containerd.grpc.v1.cri\".containerd.runtimes.flox]\n        runtime_path = \"/usr/local/bin/containerd-shim-flox-v2\"\n        runtime_type = \"io.containerd.runc.v2\"\n        pod_annotations = [ \"flox.dev/*\" ]\n        container_annotations = [ \"flox.dev/*\" ]\n    [plugins.\"io.containerd.grpc.v1.cri\".containerd.runtimes.flox.options]\n        SystemdCgroup = true","chunkId":"imageless-kubernetes/install/troubleshooting#configuration-conflicts"},{"kind":"code","literal":"/etc/containerd/config.toml","chunkId":"imageless-kubernetes/install/troubleshooting#configuration-conflicts"},{"kind":"code","literal":"containerd config dump","chunkId":"imageless-kubernetes/install/troubleshooting#configuration-conflicts"},{"kind":"code","literal":"imports","chunkId":"imageless-kubernetes/install/troubleshooting#configuration-conflicts"},{"kind":"code","literal":"containerd","chunkId":"imageless-kubernetes/install/troubleshooting#configuration-conflicts"}]
sources: [{"chunkId":"imageless-kubernetes/install/troubleshooting#configuration-conflicts","url":"/docs/imageless-kubernetes/install/troubleshooting#configuration-conflicts","anchor":"configuration-conflicts"}]
---

Describes a troubleshooting scenario where the Flox additions to the containerd configuration are overridden by a competing imported config file. Advises dumping the active containerd configuration to verify the Flox runtime is present, checking for an imports section loading other files, confirming the relevant runtime sections exist, and if missing, adding the Flox runtime section to the competing imported file and restarting containerd, noting this is more likely when a GPU container toolkit is installed on the same node.
