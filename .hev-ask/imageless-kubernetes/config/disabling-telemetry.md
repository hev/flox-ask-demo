---
id: "imageless-kubernetes/config#disabling-telemetry"
title: "Configuration"
heading: "Disabling telemetry"
group: "Imageless Kubernetes"
order: 192
url: "/docs/imageless-kubernetes/config#disabling-telemetry"
anchor: "disabling-telemetry"
terms: ["disabling","telemetry","explains","whereas","flox","disables","metrics","environment","variable","imageless","kubernetes","uses","annotation","disable","apiversion","kind","metadata","name","containerd","demo","annotations","echoip","true","spec","runtimeclassname","containers","empty","image","command","directly","floxdisablemetrics","specification","accomplish","same","goal"]
hash: "352865d14ff0da6263258eae5eeda55181295f9a279986f8d326a0eb56ab1e60"
mode: "agent-primary"
facts: [{"kind":"code","literal":"apiVersion: v1\nkind: Pod\nmetadata:\n  name: flox-containerd-demo\n  annotations:\n    flox.dev/environment: \"flox/echoip\"\n    # Disable telemetry\n    flox.dev/disable-metrics: \"true\"\nspec:\n  runtimeClassName: flox\n  containers:\n    - name: empty\n      image: flox/empty:1.0.0\n      command: [\"echoip\"]","chunkId":"imageless-kubernetes/config#disabling-telemetry"},{"kind":"code","literal":"FLOX_DISABLE_METRICS=1","chunkId":"imageless-kubernetes/config#disabling-telemetry"}]
sources: [{"chunkId":"imageless-kubernetes/config#disabling-telemetry","url":"/docs/imageless-kubernetes/config#disabling-telemetry","anchor":"disabling-telemetry"}]
---

Explains that whereas the Flox CLI disables metrics via an environment variable, Imageless Kubernetes uses a pod annotation to disable telemetry.
