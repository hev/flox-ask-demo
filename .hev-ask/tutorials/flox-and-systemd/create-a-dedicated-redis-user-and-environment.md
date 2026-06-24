---
id: "tutorials/flox-and-systemd#create-a-dedicated-redis-user-and-environment"
title: "Flox and systemd"
heading: "Create a dedicated Redis user and environment"
group: "Tutorials"
order: 730
url: "/docs/tutorials/flox-and-systemd#create-a-dedicated-redis-user-and-environment"
anchor: "create-a-dedicated-redis-user-and-environment"
terms: ["create","dedicated","redis","user","environment","shows","creating","unprivileged","system","pulling","floxhub","home","directory","preparation","running","service","unit","sudo","useradd","shell","sbin","nologin","flox","pull"]
hash: "47ea1312d24fcbab98f01d5c4e53a033e48c998d575f87250f429db1dd4d00c3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo useradd --system --create-home --shell /usr/sbin/nologin redis\nsudo -u redis flox pull flox/redis -d /home/redis/redis","chunkId":"tutorials/flox-and-systemd#create-a-dedicated-redis-user-and-environment"}]
sources: [{"chunkId":"tutorials/flox-and-systemd#create-a-dedicated-redis-user-and-environment","url":"/docs/tutorials/flox-and-systemd#create-a-dedicated-redis-user-and-environment","anchor":"create-a-dedicated-redis-user-and-environment"}]
---

Shows creating a dedicated unprivileged system user for Redis and pulling the FloxHub Redis environment into that user's home directory, in preparation for running the service as a system unit.
