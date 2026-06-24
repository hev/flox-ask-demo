---
id: "tutorials/flox-and-systemd"
title: "Flox and systemd"
heading: null
group: "Tutorials"
order: 728
url: "/docs/tutorials/flox-and-systemd"
anchor: null
terms: ["introduces","running","flox","environment","services","persistent","systemd","units","built","concept","managed","through","subcommands","want","manage","behaviors","like","auto","starting","boot","restarting","crash","tutorial","covers","manually","creating","unit","files","service","both","user","system","status","environments","servicesconcept","invoking","category","commands","such","floxservicesstatus"]
hash: "b363b232d4aa72ad94fb4b1539674328685c2f495d7eb8e1a607fef26f1ed1b7"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox services","chunkId":"tutorials/flox-and-systemd"},{"kind":"code","literal":"flox services status","chunkId":"tutorials/flox-and-systemd"}]
sources: [{"chunkId":"tutorials/flox-and-systemd","url":"/docs/tutorials/flox-and-systemd","anchor":null}]
---

Introduces running Flox environment services as persistent systemd units. Flox has a built-in services concept managed through its services subcommands, but you may want systemd to manage them for behaviors like auto-starting at boot or restarting on crash. The tutorial covers manually creating unit files to run a Flox service as both a systemd user unit and a system unit.
