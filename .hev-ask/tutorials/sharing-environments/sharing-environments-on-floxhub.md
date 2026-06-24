---
id: "tutorials/sharing-environments#sharing-environments-on-floxhub"
title: "Sharing environments"
heading: "Sharing environments on FloxHub"
group: "Tutorials"
order: 802
url: "/docs/tutorials/sharing-environments#sharing-environments-on-floxhub"
anchor: "sharing-environments-on-floxhub"
terms: ["sharing","environments","floxhub","describes","free","account","removing","need","clone","repository","once","pushed","environment","template","copy","pull","included","another","composition","section","shared","across","machines","files","commonly","default","materialized","tools","demonstrated","creating","populating","pushing","mkdir","flox","init","install","codex","gemini","installed","users"]
hash: "560ed60e60039eee058386b764d7a4dc34f1854bd285bfddd9751fe2d5382be1"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ mkdir llm_tools\n$ cd llm_tools\n$ flox init\n$ flox install codex gemini-cli\n✔ 'codex' installed to environment llm_tools at /Users/youruser/llm_tools\n✔ 'gemini-cli' installed to environment llm_tools at /Users/youruser/llm_tools","chunkId":"tutorials/sharing-environments#sharing-environments-on-floxhub"},{"kind":"code","literal":"$ flox push\n✔ llm_tools successfully pushed to FloxHub\n\n    Use 'flox pull youruser/llm_tools' to get this environment in any other location.","chunkId":"tutorials/sharing-environments#sharing-environments-on-floxhub"},{"kind":"code","literal":"flox pull --copy","chunkId":"tutorials/sharing-environments#sharing-environments-on-floxhub"},{"kind":"code","literal":"[include]","chunkId":"tutorials/sharing-environments#sharing-environments-on-floxhub"},{"kind":"code","literal":"flox init","chunkId":"tutorials/sharing-environments#sharing-environments-on-floxhub"}]
sources: [{"chunkId":"tutorials/sharing-environments#sharing-environments-on-floxhub","url":"/docs/tutorials/sharing-environments#sharing-environments-on-floxhub","anchor":"sharing-environments-on-floxhub"}]
---

Describes sharing environments on FloxHub with a free account, removing the need to clone a repository. Once pushed, an environment can be used as a template via a copy pull, included in another environment's composition section, shared across machines via RC files (commonly as a default environment), or materialized as an ad-hoc set of tools, demonstrated by creating, populating, and pushing an environment.
