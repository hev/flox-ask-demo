---
id: "man/flox-services-start#examples"
title: "flox services start"
heading: "EXAMPLES"
group: "Manual"
order: 592
url: "/docs/man/flox-services-start#examples"
anchor: "examples"
terms: ["examples","starting","single","named","service","services","attempting","start","nonexistent","already","running","flox","server","myservice","doesnt","exist","error","found","started","attempt","doesn","doesntexist","notrunning"]
hash: "b75dd68958f0cf04e4813e9e1a3c20f94730a1f73dc44166a94a7ce17e261a74"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox services start server","chunkId":"man/flox-services-start#examples"},{"kind":"code","literal":"flox services start","chunkId":"man/flox-services-start#examples"},{"kind":"code","literal":"$ flox services start myservice doesnt_exist\n✘ ERROR: Service 'doesnt_exist' not found.","chunkId":"man/flox-services-start#examples"},{"kind":"code","literal":"$ flox services start running not_running\n✔ Service 'not_running' started\n⚠️  Service 'running' is already running","chunkId":"man/flox-services-start#examples"}]
sources: [{"chunkId":"man/flox-services-start#examples","url":"/docs/man/flox-services-start#examples","anchor":"examples"}]
---

Examples of starting a single named service, starting all services, attempting to start a nonexistent service, and attempting to start a service that is already running.
