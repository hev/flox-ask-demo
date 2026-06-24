---
id: "tutorials/composition#installing-project-specific-dependencies"
title: "Reusing and combining developer environments"
heading: "Installing project specific dependencies"
group: "Tutorials"
order: 695
url: "/docs/tutorials/composition#installing-project-specific-dependencies"
anchor: "installing-project-specific-dependencies"
terms: ["installing","project","specific","dependencies","clarifies","package","composing","environment","adds","only","manifest","merged","included","behaving","would","expect","flox","install","composed","python","python312packages","pytest","installed","edit","some","command","packages","itself","environments","short","does","composedpythonproject","note","message","says","contained","section"]
hash: "d83a873c799ad41fd942e59276c226bd84d0e6e47ffca1217acbf7e9a41f0cc6"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox install -d composed_python_project python312Packages.pytest\n✔ 'pytest' installed to environment 'composed_python_project'","chunkId":"tutorials/composition#installing-project-specific-dependencies"},{"kind":"code","literal":"flox install","chunkId":"tutorials/composition#installing-project-specific-dependencies"},{"kind":"code","literal":"pytest","chunkId":"tutorials/composition#installing-project-specific-dependencies"},{"kind":"code","literal":"composed_python_project","chunkId":"tutorials/composition#installing-project-specific-dependencies"},{"kind":"code","literal":"flox edit -d composed_python_project","chunkId":"tutorials/composition#installing-project-specific-dependencies"},{"kind":"code","literal":"[install]","chunkId":"tutorials/composition#installing-project-specific-dependencies"}]
sources: [{"chunkId":"tutorials/composition#installing-project-specific-dependencies","url":"/docs/tutorials/composition#installing-project-specific-dependencies","anchor":"installing-project-specific-dependencies"}]
---

Clarifies that installing a package into a composing environment adds it only to that composing environment's own manifest, not to the merged manifest or any included environment, behaving as you would expect.
