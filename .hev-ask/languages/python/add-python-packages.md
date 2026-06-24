---
id: "languages/python#add-python-packages"
title: "Python"
heading: "Add Python packages"
group: "Languages"
order: 290
url: "/docs/languages/python#add-python-packages"
anchor: "add-python-packages"
terms: ["python","packages","flox","environment","searching","catalog","installing","noting","live","under","version","specific","package","prefix","must","included","install","name","search","numpy","python311packages","scientific","tools","pandas","installed","project","pythonxxxpackages","projects","often","require","collection","addition","interpreter","these","also","acquired","allow","locked","manifest","alongside"]
hash: "f3baf0707ebb6976c23512f74e2baaf8b428b6bdf51705763ad6773b288a269f"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox search numpy","chunkId":"languages/python#add-python-packages"},{"kind":"code","literal":"$ flox search numpy\n[...]\npython311Packages.numpy    Scientific tools for Python\n[...]","chunkId":"languages/python#add-python-packages"},{"kind":"code","literal":"flox install python311Packages.numpy python311Packages.pandas","chunkId":"languages/python#add-python-packages"},{"kind":"code","literal":"$ flox install python311Packages.numpy python311Packages.pandas\n✔ 'numpy' installed to environment 'new-python-project'\n✔ 'pandas' installed to environment 'new-python-project'","chunkId":"languages/python#add-python-packages"},{"kind":"code","literal":"pip","chunkId":"languages/python#add-python-packages"},{"kind":"code","literal":"flox search","chunkId":"languages/python#add-python-packages"},{"kind":"code","literal":"pythonXXXPackages.","chunkId":"languages/python#add-python-packages"},{"kind":"code","literal":"XXX","chunkId":"languages/python#add-python-packages"}]
sources: [{"chunkId":"languages/python#add-python-packages","url":"/docs/languages/python#add-python-packages","anchor":"add-python-packages"}]
---

How to add Python packages to a Flox environment by searching the Flox Catalog and installing them, noting that Python packages live under a version-specific package-set prefix that must be included in the install name.
