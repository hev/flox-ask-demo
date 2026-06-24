---
id: "man/flox-pull#synopsis"
title: "flox pull"
heading: "SYNOPSIS"
group: "Manual"
order: 547
url: "/docs/man/flox-pull#synopsis"
anchor: "synopsis"
terms: ["synopsis","shows","three","invocation","forms","flox","pull","pulling","environment","directory","updating","existing","fetching","updates","reference","mode","remote","general","options","owner","name","path","generation","update","fetch"]
hash: "301dd885578400378434a65bcfc87f4c250d44ce9cc2a2dd1f6c6dd9be131c55"
mode: "agent-primary"
facts: [{"kind":"code","literal":"# Pull a new environment into a directory\nflox [\u003cgeneral-options\u003e] pull \u003cowner\u003e/\u003cname\u003e\n     [-d=\u003cpath\u003e]\n     [-f]\n     [-c]\n     [-g=\u003cgeneration\u003e]\n\n# Update an existing environment in a directory\nflox [\u003cgeneral-options\u003e] pull\n     [-d=\u003cpath\u003e]\n     [-f]\n\n# Fetch updates for a remote environment\nflox [\u003cgeneral-options\u003e] pull -r \u003cowner\u003e/\u003cname\u003e\n     [-f]","chunkId":"man/flox-pull#synopsis"}]
sources: [{"chunkId":"man/flox-pull#synopsis","url":"/docs/man/flox-pull#synopsis","anchor":"synopsis"}]
---

Shows the three invocation forms of flox pull: pulling a new environment into a directory, updating an existing environment in a directory, and fetching updates for a reference-mode remote environment.
