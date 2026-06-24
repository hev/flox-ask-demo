---
id: "tutorials/flox-and-systemd#test-the-environment-with-flox-services"
title: "Flox and systemd"
heading: "Test the environment with Flox services"
group: "Tutorials"
order: 739
url: "/docs/tutorials/flox-and-systemd#test-the-environment-with-flox-services"
anchor: "test-the-environment-with-flox-services"
terms: ["test","environment","flox","services","recommends","verifying","works","before","creating","systemd","unit","activating","started","checking","service","status","pinging","redis","exiting","activate","port","ping","exit","verify","redisport"]
hash: "a3f6911b02b88a525bd226250a4377bdd83f79d0c5fcf370c15ec709dc5b1367"
mode: "agent-primary"
facts: [{"kind":"code","literal":"cd ~/redis\nflox activate -s\nflox services status\nredis-cli -p $REDIS_PORT ping\nexit","chunkId":"tutorials/flox-and-systemd#test-the-environment-with-flox-services"}]
sources: [{"chunkId":"tutorials/flox-and-systemd#test-the-environment-with-flox-services","url":"/docs/tutorials/flox-and-systemd#test-the-environment-with-flox-services","anchor":"test-the-environment-with-flox-services"}]
---

Recommends verifying the environment works using Flox's own services before creating a systemd unit, by activating with services started, checking service status, pinging Redis, and exiting.
