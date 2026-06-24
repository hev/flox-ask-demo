---
id: "concepts/floxhub-environments#background"
title: "FloxHub environments"
heading: "Background"
group: "Concepts"
order: 62
url: "/docs/concepts/floxhub-environments#background"
anchor: "background"
terms: ["background","contrasts","ways","working","environments","initializing","project","local","environment","directory","tracked","source","control","tied","repo","versus","pushing","floxhub","make","reusable","centrally","managed","whose","state","history","generations","shows","push","output","commands","reusing","copying","flox","init","updates","myenv","successfully","pushed","view","https"]
hash: "8b3b45bcf8f43b6cfbb523fafbe89e2978a4c1a2e7cefe319659e70ae0906fb5"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox init\ngit add .flox","chunkId":"concepts/floxhub-environments#background"},{"kind":"code","literal":"$ flox push\n✔ Updates to myenv successfully pushed to FloxHub\n\nView the environment at: https://hub.flox.dev/myuser/myenv\nUse this environment from another machine: 'flox activate -r myuser/myenv'\nMake a copy of this environment: 'flox pull myuser/myenv'","chunkId":"concepts/floxhub-environments#background"},{"kind":"code","literal":"flox init","chunkId":"concepts/floxhub-environments#background"},{"kind":"code","literal":".flox","chunkId":"concepts/floxhub-environments#background"}]
sources: [{"chunkId":"concepts/floxhub-environments#background","url":"/docs/concepts/floxhub-environments#background","anchor":"background"}]
---

Contrasts the two ways of working with environments: initializing a project-local environment directory tracked in source control (tied to that project and repo) versus pushing an environment to FloxHub to make it a reusable, centrally managed environment whose state and history are tracked as generations. Shows the push output with commands for reusing and copying the environment.
