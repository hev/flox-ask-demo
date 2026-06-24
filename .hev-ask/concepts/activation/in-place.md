---
id: "concepts/activation#in-place"
title: "Activating environments"
heading: "In-place"
group: "Concepts"
order: 9
url: "/docs/concepts/activation#in-place"
anchor: "in-place"
terms: ["place","describes","activation","configures","current","interactive","shell","rather","starting","subshell","including","direnv","integration","both","hook","profile","scripts","explains","default","environment","activates","every","file","flox","offer","configure","source","activate","eval","shape","sequence","diagram","user","back","envrc","common","bashrc","zshrc","tcshrc","config"]
hash: "a69c0f09cb51496e853d290cab1564673860b623ad66520e5f1e67e76cac28c5"
mode: "agent-primary"
facts: [{"kind":"code","literal":"source \u003c(flox activate)","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":"eval \"$(flox activate)\"","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":"shape: sequence_diagram\nuser_shell: User shell\nuser_shell -\u003e user_shell: source \u003c(flox activate)\nuser_shell.\"Back to you\"","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":"use flox","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":".envrc","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":"hook.on-activate","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":"[profile]","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":"profile.common","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":"default","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":".bashrc","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":".zshrc","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":".tcshrc","chunkId":"concepts/activation#in-place"},{"kind":"code","literal":"config.fish","chunkId":"concepts/activation#in-place"},{"kind":"value","literal":"direnv.net","chunkId":"concepts/activation#in-place"}]
sources: [{"chunkId":"concepts/activation#in-place","url":"/docs/concepts/activation#in-place","anchor":"in-place"}]
---

Describes in-place activation, which configures your current interactive shell rather than starting a subshell, including the direnv integration where activation is in-place and both hook and profile scripts run. Explains how to set up a default environment that activates for every new shell via your shell rc file, which Flox can offer to configure for you.
