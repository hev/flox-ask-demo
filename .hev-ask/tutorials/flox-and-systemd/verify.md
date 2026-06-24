---
id: "tutorials/flox-and-systemd#verify"
title: "Flox and systemd"
heading: "Verify"
group: "Tutorials"
order: 741
url: "/docs/tutorials/flox-and-systemd#verify"
anchor: "verify"
terms: ["verify","shows","verifying","running","redis","system","service","checking","status","pinging","through","activated","environment","notes","differences","user","unit","approach","lives","directory","uses","multi","target","requires","elevated","privileges","needs","lingering","sudo","systemctl","flox","activate","port","ping","should","respond","pong","systemd","redisport","note"]
hash: "f4373233fbea1e1f4a3b8b9b9bb279f8dba096d79415177e80d343618a83c05f"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo systemctl status redis.service","chunkId":"tutorials/flox-and-systemd#verify"},{"kind":"code","literal":"flox activate -d ~/redis -c 'redis-cli -p $REDIS_PORT ping'\n# should respond PONG","chunkId":"tutorials/flox-and-systemd#verify"},{"kind":"code","literal":"/etc/systemd/system/","chunkId":"tutorials/flox-and-systemd#verify"},{"kind":"code","literal":"multi-user.target","chunkId":"tutorials/flox-and-systemd#verify"},{"kind":"code","literal":"sudo","chunkId":"tutorials/flox-and-systemd#verify"}]
sources: [{"chunkId":"tutorials/flox-and-systemd#verify","url":"/docs/tutorials/flox-and-systemd#verify","anchor":"verify"}]
---

Shows verifying the running Redis system service by checking its status and pinging Redis through the activated environment, and notes the key differences from the user-unit approach: the unit lives in the system directory, uses the multi-user target, requires elevated privileges, and needs no lingering.
