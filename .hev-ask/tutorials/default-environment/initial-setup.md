---
id: "tutorials/default-environment#initial-setup"
title: "The default environment"
heading: "Initial setup"
group: "Tutorials"
order: 724
url: "/docs/tutorials/default-environment#initial-setup"
anchor: "initial-setup"
terms: ["initial","setup","walks","through","creating","default","environment","named","typically","shared","floxhub","tied","user","account","logging","initializing","configuring","shell","files","activate","every","instructions","bash","fish","tcsh","alternatively","explicitly","needed","flox","auth","status","login","authentication","complete","logged","youruser","init","eval","username","source"]
hash: "907b963d45ec12bbff42f79652426dc9654d289eec7894b52ae13b7a148db5b3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox auth status || flox auth login\n✔ Authentication complete\n✔ Logged in as \u003cyouruser\u003e\n\nflox init -r \u003cyouruser\u003e/default","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":"eval \"$(flox activate -r \u003cyour username\u003e/default -m run)\"","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":"flox activate -r \u003cyour username\u003e/default -m run | source","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":"eval \"`flox activate -r \u003cyour username\u003e/default -m run`\"","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":"flox activate -r \u003cyour username\u003e/default","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":"default","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":".bashrc","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":".profile","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":".zprofile","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":".zshrc","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":"config.fish","chunkId":"tutorials/default-environment#initial-setup"},{"kind":"code","literal":".tcshrc","chunkId":"tutorials/default-environment#initial-setup"}]
sources: [{"chunkId":"tutorials/default-environment#initial-setup","url":"/docs/tutorials/default-environment#initial-setup","anchor":"initial-setup"}]
---

Walks through creating the default environment (an environment named default, typically shared via FloxHub and tied to your user account) by logging into FloxHub and initializing it, then configuring your shell's RC files to activate it on every new shell, with per-shell instructions for Bash, Zsh, Fish, and Tcsh; alternatively you can activate it explicitly when needed.
