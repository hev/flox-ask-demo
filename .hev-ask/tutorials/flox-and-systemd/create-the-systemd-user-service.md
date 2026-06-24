---
id: "tutorials/flox-and-systemd#create-the-systemd-user-service"
title: "Flox and systemd"
heading: "Create the systemd user service"
group: "Tutorials"
order: 733
url: "/docs/tutorials/flox-and-systemd#create-the-systemd-user-service"
anchor: "create-the-systemd-user-service"
terms: ["create","systemd","user","service","walks","through","creating","unit","activates","flox","redis","environment","starts","default","units","only","while","logged","enabling","lingering","lets","start","boot","without","login","session","reloads","enables","verifies","responds","mkdir","config","description","server","execstart","activate","bind","host","port","daemonize"]
hash: "813e62fe5f67f5ad256f3c7ceec89f9403119c7d04f96d74b05905469a159321"
mode: "agent-primary"
facts: [{"kind":"code","literal":"mkdir -p ~/.config/systemd/user/\ncat \u003e ~/.config/systemd/user/redis.service \u003c\u003c 'EOF'\n[Unit]\nDescription=Redis Server (Flox)\n\n[Service]\nExecStart=flox activate -d %h/redis -c 'redis-server --bind $REDIS_HOST --port $REDIS_PORT --daemonize no --dir $REDIS_DATA'\n\n[Install]\nWantedBy=default.target\nEOF","chunkId":"tutorials/flox-and-systemd#create-the-systemd-user-service"},{"kind":"code","literal":"sudo loginctl enable-linger $USER","chunkId":"tutorials/flox-and-systemd#create-the-systemd-user-service"},{"kind":"code","literal":"systemctl --user daemon-reload\nsystemctl --user enable redis.service\nsystemctl --user start redis.service","chunkId":"tutorials/flox-and-systemd#create-the-systemd-user-service"},{"kind":"code","literal":"systemctl --user status redis.service","chunkId":"tutorials/flox-and-systemd#create-the-systemd-user-service"},{"kind":"code","literal":"flox activate -d ~/redis -c 'redis-cli -p \"$REDIS_PORT\" ping'\n# should respond PONG","chunkId":"tutorials/flox-and-systemd#create-the-systemd-user-service"}]
sources: [{"chunkId":"tutorials/flox-and-systemd#create-the-systemd-user-service","url":"/docs/tutorials/flox-and-systemd#create-the-systemd-user-service","anchor":"create-the-systemd-user-service"}]
---

Walks through creating a systemd user unit that activates the Flox Redis environment and starts Redis. By default user units run only while the user is logged in; enabling lingering lets the service start at boot without a login session. It then reloads, enables, and starts the service and verifies Redis responds.
