---
id: "tutorials/composition#getting-the-latest-versions-of-included-environments"
title: "Reusing and combining developer environments"
heading: "Getting the latest versions of included environments"
group: "Tutorials"
order: 693
url: "/docs/tutorials/composition#getting-the-latest-versions-of-included-environments"
anchor: "getting-the-latest-versions-of-included-environments"
terms: ["getting","latest","versions","included","environments","describes","propagating","updates","changed","template","environment","composed","fetching","newly","added","packages","appear","without","being","installed","there","directly","flox","install","python","python312packages","hypothesis","myuser","include","upgrade","project","upgraded","changes","list","poetry","pytest","python312","python3","some","point"]
hash: "1928bea48137c4eed09179b0fa5d954f1bfa437d4b6f99bb5e2322630ef02ab3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox install -d python_env python312Packages.hypothesis\n✔ 'hypothesis' installed to environment 'myuser/python_env'","chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments"},{"kind":"code","literal":"$ flox include upgrade -d composed_python_project\n✔ Upgraded 'composed_python_project' with latest changes to:\n- 'python_env'","chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments"},{"kind":"code","literal":"$ flox list -d composed_python_project\nhypothesis: python312Packages.hypothesis (6.127.4)\npoetry: poetry (2.1.1)\npytest: python312Packages.pytest (8.3.5)\npython312: python312 (python3-3.12.9)","chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments"},{"kind":"code","literal":"hypothesis","chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments"},{"kind":"code","literal":"python_env","chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments"},{"kind":"code","literal":"flox include upgrade","chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments"},{"kind":"code","literal":"flox list","chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments"},{"kind":"code","literal":"composed_python_project","chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments"},{"kind":"code","literal":"pytest","chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments"}]
sources: [{"chunkId":"tutorials/composition#getting-the-latest-versions-of-included-environments","url":"/docs/tutorials/composition#getting-the-latest-versions-of-included-environments","anchor":"getting-the-latest-versions-of-included-environments"}]
---

Describes propagating updates from a changed template environment into a composed environment, fetching the latest versions of all included environments so newly added packages appear in the composed environment without being installed there directly.
