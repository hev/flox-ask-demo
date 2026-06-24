---
id: "tutorials/flox-and-systemd#load-enable-and-start"
title: "Flox and systemd"
heading: "Load, enable, and start"
group: "Tutorials"
order: 734
url: "/docs/tutorials/flox-and-systemd#load-enable-and-start"
anchor: "load-enable-and-start"
terms: ["load","enable","start","shows","reloading","systemd","daemon","enabling","starting","redis","system","service","elevated","privileges","sudo","systemctl","reload"]
hash: "7fe3766ec8c911d4b305d697606f5772bc4f3d8b28080606c94a7e9a69b52c89"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo systemctl daemon-reload\nsudo systemctl enable redis.service\nsudo systemctl start redis.service","chunkId":"tutorials/flox-and-systemd#load-enable-and-start"}]
sources: [{"chunkId":"tutorials/flox-and-systemd#load-enable-and-start","url":"/docs/tutorials/flox-and-systemd#load-enable-and-start","anchor":"load-enable-and-start"}]
---

Shows reloading the systemd daemon then enabling and starting the Redis system service with elevated privileges.
