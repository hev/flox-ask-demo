---
id: "languages/python#manifest-builds"
title: "Python"
heading: "Manifest builds"
group: "Languages"
order: 294
url: "/docs/languages/python#manifest-builds"
anchor: "manifest-builds"
terms: ["manifest","builds","build","python","projects","flox","both","poetry","workflows","including","installing","output","directory","configuring","place","virtualenv","there","symlinking","executables","follow","filesystem","conventions","adding","interpreter","runtime","packages","myproject","command","install","target","hash","looks","like","project","note","trailing","indicate","package","current","working"]
hash: "b03227ef89583ec3b91e5b087134eb4aeccd2a2d1bf023825a0e489724102e5b"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.myproject]\ncommand = '''\n  pip install --target=$out .\n'''","chunkId":"languages/python#manifest-builds"},{"kind":"code","literal":"$out/\n  myproject-\u003chash\u003e-py3.12/\n    ...","chunkId":"languages/python#manifest-builds"},{"kind":"code","literal":"pip","chunkId":"languages/python#manifest-builds"},{"kind":"code","literal":"$out","chunkId":"languages/python#manifest-builds"},{"kind":"code","literal":"poetry install","chunkId":"languages/python#manifest-builds"},{"kind":"code","literal":"$out/bin","chunkId":"languages/python#manifest-builds"},{"kind":"code","literal":"runtime-packages","chunkId":"languages/python#manifest-builds"}]
sources: [{"chunkId":"languages/python#manifest-builds","url":"/docs/languages/python#manifest-builds","anchor":"manifest-builds"}]
---

How to build Python projects with Flox manifest builds for both pip and Poetry workflows, including installing into the output directory, configuring Poetry to place its virtualenv there, symlinking executables to follow filesystem conventions, and adding a Python interpreter to the runtime packages.
