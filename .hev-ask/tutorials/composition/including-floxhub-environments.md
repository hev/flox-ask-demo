---
id: "tutorials/composition#including-floxhub-environments"
title: "Reusing and combining developer environments"
heading: "Including FloxHub environments"
group: "Tutorials"
order: 694
url: "/docs/tutorials/composition#including-floxhub-environments"
anchor: "including-floxhub-environments"
terms: ["including","floxhub","environments","explains","included","directly","rather","local","directory","convenient","same","environment","reused","across","multiple","projects","repositories","since","need","checked","synced","locally","flox","push","python","updates","successfully","pushed","pull","myuser","other","location","include","remote","list","composed","project","hypothesis","python312packages","poetry"]
hash: "6ce42dc5e6aab1f871b4f09b7ef2d564b07bb233d55f7a2750f25d7d739e1801"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox push -d python_env\n✔ Updates to python_env successfully pushed to FloxHub\n\nUse 'flox pull myuser/python_env to get this environment in any other location.","chunkId":"tutorials/composition#including-floxhub-environments"},{"kind":"code","literal":"[include]\nenvironments = [\n  { remote = \"myuser/python_env\" }\n]","chunkId":"tutorials/composition#including-floxhub-environments"},{"kind":"code","literal":"$ flox list -d composed_python_project\nhypothesis: python312Packages.hypothesis (6.127.4)\npoetry: poetry (2.1.1)\npytest: python312Packages.pytest (8.3.5)\npython312: python312 (python3-3.12.9)","chunkId":"tutorials/composition#including-floxhub-environments"},{"kind":"code","literal":"myuser/python_env","chunkId":"tutorials/composition#including-floxhub-environments"},{"kind":"code","literal":"flox edit","chunkId":"tutorials/composition#including-floxhub-environments"},{"kind":"code","literal":"include","chunkId":"tutorials/composition#including-floxhub-environments"}]
sources: [{"chunkId":"tutorials/composition#including-floxhub-environments","url":"/docs/tutorials/composition#including-floxhub-environments","anchor":"including-floxhub-environments"}]
---

Explains that environments can be included directly from FloxHub rather than a local directory, which is convenient when the same environment is reused across multiple projects and repositories since the included environments need not be checked out and synced locally.
