---
id: "concepts/floxhub-environments#operations-on-floxhub-environments"
title: "FloxHub environments"
heading: "Operations on FloxHub environments"
group: "Concepts"
order: 66
url: "/docs/concepts/floxhub-environments#operations-on-floxhub-environments"
anchor: "operations-on-floxhub-environments"
terms: ["operations","floxhub","environments","explains","commands","mostly","operate","local","cached","copy","environment","enabling","offline","indicating","creating","generations","upstream","copies","fall","sync","notifies","instructions","pushing","syncs","changes","back","flox","install","myuser","myenv","ripgrep","installed","push","pull","fetch","updates","update","successfully","pushed","view"]
hash: "c554d5e5a8d98cde5fd480da885b16cd5eddbccd8e6d80b57205221cbda13fe6"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox install -r myuser/myenv ripgrep\n✔ 'ripgrep' installed to environment 'myuser/myenv' (local)","chunkId":"concepts/floxhub-environments#operations-on-floxhub-environments"},{"kind":"code","literal":"Use 'flox push|pull -r myuser/myenv' to fetch updates or update the environment on FloxHub.","chunkId":"concepts/floxhub-environments#operations-on-floxhub-environments"},{"kind":"code","literal":"$ flox push -r myuser/myenv\n✔ Updates to myenv successfully pushed to FloxHub\n\nView the environment at: https://hub.flox.dev/myuser/myenv\nUse this environment from another machine: 'flox activate -r myuser/myenv'\nMake a copy of this environment: 'flox pull myuser/myenv'","chunkId":"concepts/floxhub-environments#operations-on-floxhub-environments"},{"kind":"code","literal":"flox install -r","chunkId":"concepts/floxhub-environments#operations-on-floxhub-environments"},{"kind":"code","literal":"(local)","chunkId":"concepts/floxhub-environments#operations-on-floxhub-environments"},{"kind":"code","literal":"flox activate","chunkId":"concepts/floxhub-environments#operations-on-floxhub-environments"},{"kind":"code","literal":"flox pull","chunkId":"concepts/floxhub-environments#operations-on-floxhub-environments"},{"kind":"code","literal":"flox push","chunkId":"concepts/floxhub-environments#operations-on-floxhub-environments"}]
sources: [{"chunkId":"concepts/floxhub-environments#operations-on-floxhub-environments","url":"/docs/concepts/floxhub-environments#operations-on-floxhub-environments","anchor":"operations-on-floxhub-environments"}]
---

Explains that CLI commands mostly operate on the local cached copy of a FloxHub environment (enabling offline use), with the CLI indicating local operations and creating new local generations. When local and upstream copies fall out of sync the CLI notifies you with instructions, and pushing syncs local changes back to FloxHub.
