---
id: "install-flox/troubleshooting#macos"
title: "Troubleshooting"
heading: "macOS"
group: "Install Flox"
order: 265
url: "/docs/install-flox/troubleshooting#macos"
anchor: "macos"
terms: ["macos","installer","logs","provided","script","extract","just","flox","relevant","lines","shared","system","install","floxdev","first","last","print","contains","installations","other","installed","packages"]
hash: "bddb418084fe744551ba8fa11875f2888036712b01219b02c689cb10657ab56a"
mode: "agent-primary"
facts: [{"kind":"code","literal":"awk '\n/com\\.floxdev\\.flox/ {\n  if (first == 0) first = NR\n  last = NR\n}\n{ lines[NR] = $0 }\nEND {\n  if (first \u0026\u0026 last \u0026\u0026 first \u003c= last) {\n    for (i = first; i \u003c= last; i++) print lines[i]\n  }\n}' /var/log/install.log","chunkId":"install-flox/troubleshooting#macos"},{"kind":"code","literal":"/var/log/install.log","chunkId":"install-flox/troubleshooting#macos"}]
sources: [{"chunkId":"install-flox/troubleshooting#macos","url":"/docs/install-flox/troubleshooting#macos","anchor":"macos"}]
---

Where the macOS installer logs go and a provided script to extract just the Flox-relevant lines from the shared system install log.
