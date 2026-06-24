---
id: "tutorials/flox-and-systemd#system-unit-cleanup"
title: "Flox and systemd"
heading: "System unit cleanup"
group: "Tutorials"
order: 738
url: "/docs/tutorials/flox-and-systemd#system-unit-cleanup"
anchor: "system-unit-cleanup"
terms: ["system","unit","cleanup","describes","stopping","disabling","removing","file","reloading","systemd","daemon","fully","remove","redis","sudo","systemctl","stop","service","disable","reload"]
hash: "2ef6e3e506eeaa6dde4d9d842c4a22692438de1eb3e3ad4c06c5bb87a2afca03"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo systemctl stop redis.service\nsudo systemctl disable redis.service\nsudo rm /etc/systemd/system/redis.service\nsudo systemctl daemon-reload","chunkId":"tutorials/flox-and-systemd#system-unit-cleanup"}]
sources: [{"chunkId":"tutorials/flox-and-systemd#system-unit-cleanup","url":"/docs/tutorials/flox-and-systemd#system-unit-cleanup","anchor":"system-unit-cleanup"}]
---

Describes stopping, disabling, removing the system unit file, and reloading the systemd daemon to fully remove the Redis system unit.
