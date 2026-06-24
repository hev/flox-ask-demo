---
id: "tutorials/flox-and-systemd#user-unit-cleanup"
title: "Flox and systemd"
heading: "User unit cleanup"
group: "Tutorials"
order: 740
url: "/docs/tutorials/flox-and-systemd#user-unit-cleanup"
anchor: "user-unit-cleanup"
terms: ["user","unit","cleanup","describes","stopping","disabling","removing","file","reloading","systemd","daemon","fully","remove","redis","systemctl","stop","service","disable","config","reload"]
hash: "7d7770405e1d075c94dd65bf3e09a89d5838563a47521292fe7e5c183947a1d9"
mode: "agent-primary"
facts: [{"kind":"code","literal":"systemctl --user stop redis.service\nsystemctl --user disable redis.service\nrm ~/.config/systemd/user/redis.service\nsystemctl --user daemon-reload","chunkId":"tutorials/flox-and-systemd#user-unit-cleanup"}]
sources: [{"chunkId":"tutorials/flox-and-systemd#user-unit-cleanup","url":"/docs/tutorials/flox-and-systemd#user-unit-cleanup","anchor":"user-unit-cleanup"}]
---

Describes stopping, disabling, removing the user unit file, and reloading the systemd user daemon to fully remove the Redis user unit.
