---
id: "concepts/services#checking-on-services"
title: "Services"
heading: "Checking on services"
group: "Concepts"
order: 161
url: "/docs/concepts/services#checking-on-services"
anchor: "checking-on-services"
terms: ["checking","services","explains","service","status","showing","name","process","viewing","logs","operate","either","following","tailing","single","named","notes","manager","stored","files","environment","directory","database","running","12345","server","23456","flox","follow","tail","command","display","example","shown","below","operates","modes","specified","flag","must"]
hash: "1e65bbb0c9f266ada26e927462dd38b493bb88eb2a8a19e840b98064234ecd9a"
mode: "agent-primary"
facts: [{"kind":"code","literal":"NAME       STATUS            PID\ndatabase   Running         12345\nserver     Running         23456","chunkId":"concepts/services#checking-on-services"},{"kind":"code","literal":"flox services status","chunkId":"concepts/services#checking-on-services"},{"kind":"code","literal":"flox services logs","chunkId":"concepts/services#checking-on-services"},{"kind":"code","literal":"--follow","chunkId":"concepts/services#checking-on-services"},{"kind":"code","literal":"--tail","chunkId":"concepts/services#checking-on-services"},{"kind":"code","literal":"services.*.log","chunkId":"concepts/services#checking-on-services"},{"kind":"code","literal":".flox/logs","chunkId":"concepts/services#checking-on-services"}]
sources: [{"chunkId":"concepts/services#checking-on-services","url":"/docs/concepts/services#checking-on-services","anchor":"checking-on-services"}]
---

Explains checking service status (showing name, process ID, and status) and viewing logs, which operate either by following all services or following or tailing a single named service. Notes the service manager's own logs are stored as files in the environment's logs directory.
