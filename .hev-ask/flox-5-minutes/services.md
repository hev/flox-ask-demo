---
id: "flox-5-minutes#services"
title: "Flox in 5 minutes"
heading: "Services"
group: "Flox in 5 minutes"
order: 187
url: "/docs/flox-5-minutes#services"
anchor: "services"
terms: ["services","walks","through","running","defined","manifest","section","sample","stopwatch","service","starting","checking","status","following","logs","stopping","notes","stop","automatically","exit","environment","auto","started","activation","flag","flox","start","head","c597a6c","unicode","rather","emoji","name","51774","follow","2025","stopped","ctrl","activate","most"]
hash: "f949d50766d5332a277c0a52649933ea5403241f69d936d57576dc61315541af"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox services start\n\u003c\u003c\u003c\u003c\u003c\u003c\u003c HEAD\n✓ Service 'stopwatch' started.\n=======\n✔ Service 'stopwatch' started.\n\u003e\u003e\u003e\u003e\u003e\u003e\u003e c597a6c (fix: use unicode rather than emoji)","chunkId":"flox-5-minutes#services"},{"kind":"code","literal":"$ flox services status\nNAME       STATUS       PID\nstopwatch  Running    51774","chunkId":"flox-5-minutes#services"},{"kind":"code","literal":"$ flox services logs --follow\nstopwatch: Fri Aug 22 19:17:30 MDT 2025\nstopwatch: Fri Aug 22 19:17:35 MDT 2025\nstopwatch: Fri Aug 22 19:17:40 MDT 2025\nstopwatch: Fri Aug 22 19:17:45 MDT 2025\nstopwatch: Fri Aug 22 19:17:50 MDT 2025\nstopwatch: Fri Aug 22 19:17:55 MDT 2025\nstopwatch: Fri Aug 22 19:18:00 MDT 2025\nstopwatch: Fri Aug 22 19:18:05 MDT 2025","chunkId":"flox-5-minutes#services"},{"kind":"code","literal":"$ flox services stop\n\u003c\u003c\u003c\u003c\u003c\u003c\u003c HEAD\n✓ Service 'stopwatch' stopped\n=======\n✔ Service 'stopwatch' stopped\n\u003e\u003e\u003e\u003e\u003e\u003e\u003e c597a6c (fix: use unicode rather than emoji)","chunkId":"flox-5-minutes#services"},{"kind":"code","literal":"[services]","chunkId":"flox-5-minutes#services"},{"kind":"code","literal":"stopwatch","chunkId":"flox-5-minutes#services"},{"kind":"code","literal":"Ctrl-C","chunkId":"flox-5-minutes#services"},{"kind":"code","literal":"flox activate -s","chunkId":"flox-5-minutes#services"}]
sources: [{"chunkId":"flox-5-minutes#services","url":"/docs/flox-5-minutes#services","anchor":"services"}]
---

Walks through running services defined in the manifest's services section, using a sample stopwatch service: starting it, checking status, following its logs, and stopping it. Notes services stop automatically when you exit the environment and can be auto-started on activation with a flag.
