---
id: "tutorials/default-environment#generations"
title: "The default environment"
heading: "Generations"
group: "Tutorials"
order: 723
url: "/docs/tutorials/default-environment#generations"
anchor: "generations"
terms: ["generations","describes","pushing","environment","floxhub","creates","tracked","versions","called","accessible","editing","revert","earlier","version","rollback","push","other","hosts","receive","pull","flox","edit","vars","first","generation","undo","changes","perhaps","adding","variable","section","should","print","link","follow","click","show","most","recent","created"]
hash: "81d0d79d022fdf2f6ae48a9ef1f782352442ee0aac6a6420a7045b18571aceff"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox edit;\nflox push","chunkId":"tutorials/default-environment#generations"},{"kind":"code","literal":"flox generations rollback;\nflox push","chunkId":"tutorials/default-environment#generations"},{"kind":"code","literal":"FOO = \"bar\"","chunkId":"tutorials/default-environment#generations"},{"kind":"code","literal":"[vars]","chunkId":"tutorials/default-environment#generations"},{"kind":"code","literal":"Generations","chunkId":"tutorials/default-environment#generations"},{"kind":"code","literal":"flox edit","chunkId":"tutorials/default-environment#generations"},{"kind":"code","literal":"flox pull","chunkId":"tutorials/default-environment#generations"}]
sources: [{"chunkId":"tutorials/default-environment#generations","url":"/docs/tutorials/default-environment#generations","anchor":"generations"}]
---

Describes how pushing an environment to FloxHub creates tracked versions called generations, accessible via a Generations tab. Editing then pushing creates new generations, and you can revert to an earlier version with a rollback and push, which other hosts then receive on pull.
