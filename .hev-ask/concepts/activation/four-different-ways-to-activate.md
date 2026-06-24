---
id: "concepts/activation#four-different-ways-to-activate"
title: "Activating environments"
heading: "Four different ways to activate"
group: "Concepts"
order: 7
url: "/docs/concepts/activation#four-different-ways-to-activate"
anchor: "four-different-ways-to-activate"
terms: ["four","different","ways","activate","lays","environment","subshell","place","shell","command","exec","notes","hook","profile","scripts","runs","except","direct","form","flox","eval","mentioned","above","there","method","differs","whether","mode","whitecheckmark"]
hash: "115dea131938ecca74ff3f835d467177ddb5c2bb117807ccf887964d35971a83"
mode: "agent-primary"
facts: [{"kind":"code","literal":"hook.on-activate","chunkId":"concepts/activation#four-different-ways-to-activate"},{"kind":"code","literal":"profile","chunkId":"concepts/activation#four-different-ways-to-activate"},{"kind":"code","literal":"profile.*","chunkId":"concepts/activation#four-different-ways-to-activate"},{"kind":"code","literal":"flox activate","chunkId":"concepts/activation#four-different-ways-to-activate"},{"kind":"code","literal":"eval \"$(flox activate)\"","chunkId":"concepts/activation#four-different-ways-to-activate"},{"kind":"code","literal":"flox activate -c","chunkId":"concepts/activation#four-different-ways-to-activate"},{"kind":"code","literal":"flox activate --","chunkId":"concepts/activation#four-different-ways-to-activate"}]
sources: [{"chunkId":"concepts/activation#four-different-ways-to-activate","url":"/docs/concepts/activation#four-different-ways-to-activate","anchor":"four-different-ways-to-activate"}]
---

Lays out the four ways to activate an environment (subshell, in-place, shell command, and exec) and notes which of the hook on-activate and profile scripts run for each. The hook runs in all four; profile scripts run in all except the direct exec form.
