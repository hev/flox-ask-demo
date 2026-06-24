---
id: "man/flox-services-logs#examples"
title: "flox services logs"
heading: "EXAMPLES"
group: "Manual"
order: 574
url: "/docs/man/flox-services-logs#examples"
anchor: "examples"
terms: ["examples","following","logs","services","subset","displaying","available","single","service","flox","follow","service1","hello","service2","service3","myservice","starting","running","stopping","completed","display"]
hash: "d4d886af6193acc0c76be8fef8eabd9a86447f1205ab29fed38fdf334cdf70d6"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox services logs --follow\nservice1: hello\nservice2: hello\n...","chunkId":"man/flox-services-logs#examples"},{"kind":"code","literal":"$ flox services logs --follow service1 service3\nservice1: hello\nservice3: hello\n...","chunkId":"man/flox-services-logs#examples"},{"kind":"code","literal":"$ flox services logs myservice\nstarting...\nrunning...\nstopping...\ncompleted","chunkId":"man/flox-services-logs#examples"}]
sources: [{"chunkId":"man/flox-services-logs#examples","url":"/docs/man/flox-services-logs#examples","anchor":"examples"}]
---

Examples of following logs for all services, following logs for a subset of services, and displaying all available logs for a single service.
