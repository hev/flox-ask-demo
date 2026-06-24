---
id: "man/flox-services-stop#examples"
title: "flox services stop"
heading: "EXAMPLES"
group: "Manual"
order: 610
url: "/docs/man/flox-services-stop#examples"
anchor: "examples"
terms: ["examples","stopping","single","named","service","running","services","attempting","stop","nonexistent","flox","server","myservice","doesnt","exist","error","found","stopped","attempt","doesn","doesntexist","notrunning"]
hash: "85525670bbcd3b734cf1b7225f4d9e4ed23573e63b0fdac871fee015ae91ede3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox services stop server","chunkId":"man/flox-services-stop#examples"},{"kind":"code","literal":"flox services stop","chunkId":"man/flox-services-stop#examples"},{"kind":"code","literal":"$ flox services stop myservice doesnt_exist\n✘ ERROR: Service 'doesnt_exist' not found.","chunkId":"man/flox-services-stop#examples"},{"kind":"code","literal":"$ flox services stop running not_running\n⚠️  Service 'not_running' is not running\n✔ Service 'running' stopped","chunkId":"man/flox-services-stop#examples"}]
sources: [{"chunkId":"man/flox-services-stop#examples","url":"/docs/man/flox-services-stop#examples","anchor":"examples"}]
---

Examples of stopping a single named service, stopping all running services, attempting to stop a nonexistent service, and attempting to stop a service that isn't running.
