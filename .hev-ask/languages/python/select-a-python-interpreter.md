---
id: "languages/python#select-a-python-interpreter"
title: "Python"
heading: "Select a Python interpreter"
group: "Languages"
order: 295
url: "/docs/languages/python#select-a-python-interpreter"
anchor: "select-a-python-interpreter"
terms: ["select","python","interpreter","choose","flox","catalog","searching","major","minor","version","inspecting","available","releases","show","command","installing","latest","pinning","specific","release","upgrades","track","matching","search","python311","high","level","dynamically","typed","programming","language","python311full","package","versions","python3","install","installed","environment","project","list"]
hash: "39087eb5fd847b964fe3cc93296df490c618c23966ebfe27a158f3491b6e7212"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox search python311","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"code","literal":"$ flox search python311\npython311      High-level dynamically-typed programming language\npython311Full  High-level dynamically-typed programming language\n\nUse 'flox show \u003cpackage\u003e' to see available versions","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"code","literal":"flox show python311Full","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"code","literal":"$ flox show python311Full\npython311Full - High-level dynamically-typed programming language\n    python311Full@python3-3.11.9\n    python311Full@python3-3.11.8\n    python311Full@python3-3.11.7\n    python311Full@python3-3.11.6\n    python311Full@python3-3.11.5\n    python311Full@python3-3.11.4\n    python311Full@python3-3.11.3\n    python311Full@python3-3.11.2\n    python311Full@python3-3.11.1","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"code","literal":"flox install python311Full","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"code","literal":"$ flox install python311Full\n✔ 'python311Full' installed to environment 'new-python-project'\n$ flox list\npython311Full: python311Full (python3-3.11.9)","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"code","literal":"flox install python311Full@python3-3.11.3","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"code","literal":"flox show","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"code","literal":"flox install","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"code","literal":"flox upgrade","chunkId":"languages/python#select-a-python-interpreter"},{"kind":"value","literal":"3.11","chunkId":"languages/python#select-a-python-interpreter"}]
sources: [{"chunkId":"languages/python#select-a-python-interpreter","url":"/docs/languages/python#select-a-python-interpreter","anchor":"select-a-python-interpreter"}]
---

How to choose a Python interpreter from the Flox Catalog by searching for a major/minor version, inspecting available releases with the show command, installing the latest or pinning a specific release, and how upgrades track the latest matching version.
