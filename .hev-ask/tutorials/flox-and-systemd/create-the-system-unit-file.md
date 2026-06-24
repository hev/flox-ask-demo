---
id: "tutorials/flox-and-systemd#create-the-system-unit-file"
title: "Flox and systemd"
heading: "Create the system unit file"
group: "Tutorials"
order: 732
url: "/docs/tutorials/flox-and-systemd#create-the-system-unit-file"
anchor: "create-the-system-unit-file"
terms: ["create","system","unit","file","describes","creating","systemd","redis","required","because","dedicated","user","login","session","units","work","runs","service","under","activating","flox","environment","starting","provided","host","port","data","directory","uses","multi","target","lingering","needed","since","start","boot","automatically","sudo","description","server"]
hash: "ead04c47c27b6a3f22c7e1fe3eb05540778e181884d5d31b979474b127871f2c"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo tee /etc/systemd/system/redis.service \u003c\u003c 'EOF'\n[Unit]\nDescription=Redis Server (Flox)\n\n[Service]\nUser=redis\nExecStart=flox activate -d /home/redis/redis -c 'redis-server --bind $REDIS_HOST --port $REDIS_PORT --daemonize no --dir $REDIS_DATA'\n\n[Install]\nWantedBy=multi-user.target\nEOF","chunkId":"tutorials/flox-and-systemd#create-the-system-unit-file"},{"kind":"code","literal":"redis","chunkId":"tutorials/flox-and-systemd#create-the-system-unit-file"}]
sources: [{"chunkId":"tutorials/flox-and-systemd#create-the-system-unit-file","url":"/docs/tutorials/flox-and-systemd#create-the-system-unit-file","anchor":"create-the-system-unit-file"}]
---

Describes creating a systemd system unit for Redis, required because the dedicated Redis user has no login session so user units will not work. The unit runs the service under that user by activating the Flox environment and starting Redis with environment-provided host, port, and data directory, and uses the multi-user target; lingering is not needed since system units start at boot automatically.
