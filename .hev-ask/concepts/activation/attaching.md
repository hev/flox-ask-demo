---
id: "concepts/activation#attaching"
title: "Activating environments"
heading: "Attaching"
group: "Concepts"
order: 2
url: "/docs/concepts/activation#attaching"
anchor: "attaching"
terms: ["attaching","activate","environment","second","time","flox","avoids","redoing","setup","recording","variables","first","activation","reapplying","subsequent","ones","behavior","called","makes","repeat","activations","fast","editing","manifest","activating","shell","reruns","full","later","attach","version","shape","sequence","diagram","shell1","shell2","files","somewhere","save","activated"]
hash: "39feed4664321cf850e2aeaccb0ba0ed4d53042b98812c171a3c4887a05dde45"
mode: "agent-primary"
facts: [{"kind":"code","literal":"shape: sequence_diagram\nshell1: First shell\nshell2: Second shell\nfiles: \\\"Somewhere\\\"\n\nshell1 -\u003e shell1: flox activate\nshell1 -\u003e files: save environment variables\nshell1.\"Activated\"\nshell2 -\u003e shell2: flox activate\nshell2 \u003c- files: restore environment variables\nshell2.\"Activated\"","chunkId":"concepts/activation#attaching"},{"kind":"code","literal":"hook","chunkId":"concepts/activation#attaching"},{"kind":"code","literal":"[vars]","chunkId":"concepts/activation#attaching"},{"kind":"code","literal":"[hook]","chunkId":"concepts/activation#attaching"}]
sources: [{"chunkId":"concepts/activation#attaching","url":"/docs/concepts/activation#attaching","anchor":"attaching"}]
---

When you activate an environment a second time, Flox avoids redoing setup by recording the environment variables from the first activation and reapplying them to subsequent ones, a behavior called attaching that makes repeat activations fast. Editing the manifest and activating in a new shell reruns the full activation, and later activations attach to that new version.
