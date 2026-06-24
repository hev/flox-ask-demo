---
id: "tutorials/composition#create-a-reusable-toolchain"
title: "Reusing and combining developer environments"
heading: "Create a reusable toolchain"
group: "Tutorials"
order: 690
url: "/docs/tutorials/composition#create-a-reusable-toolchain"
anchor: "create-a-reusable-toolchain"
terms: ["create","reusable","toolchain","walks","through","creating","environment","example","python","containing","specific","version","poetry","pushing","floxhub","shared","reused","template","projects","mkdir","myproject","flox","init","created","aarch64","darwin","next","search","package","install","activate","enter","edit","variables","shell","hooks","python312","installed","push","successfully"]
hash: "ce243c51fa7b581fbc6387d493eed003c0c49cbc18bda1f0223ce22f182b9f49"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ mkdir myproject \u0026\u0026 cd myproject\n$ flox init -d python_env\n⚡︎ Created environment 'python_env' (aarch64-darwin)\n\nNext:\n  $ flox search \u003cpackage\u003e    \u003c- Search for a package\n  $ flox install \u003cpackage\u003e   \u003c- Install a package into an environment\n  $ flox activate            \u003c- Enter the environment\n  $ flox edit                \u003c- Add environment variables and shell hooks","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"myproject/\n  python_env/\n    .flox","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"$ flox install -d python_env python312 poetry\n✔ 'python312', 'poetry' installed to environment 'python_env'","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"$ flox push -d python_env\n✔ python_env successfully pushed to FloxHub\n\nUse 'flox pull myuser/python_env' to get this environment in any other location.\n\nThis environment is public.\nYou can view and edit the environment at https://hub.flox.dev/myuser/python_env","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"python312","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"poetry","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"myproject","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"cd","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"python_env","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"flox init","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"flox install","chunkId":"tutorials/composition#create-a-reusable-toolchain"},{"kind":"code","literal":"myuser","chunkId":"tutorials/composition#create-a-reusable-toolchain"}]
sources: [{"chunkId":"tutorials/composition#create-a-reusable-toolchain","url":"/docs/tutorials/composition#create-a-reusable-toolchain","anchor":"create-a-reusable-toolchain"}]
---

Walks through creating a reusable toolchain environment, for example a Python environment containing a specific Python version and Poetry, then pushing it to FloxHub so it can be shared and reused as a template for new projects.
