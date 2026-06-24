---
id: "tutorials/sharing-environments#pulling-a-floxhub-environment-into-a-directory-and-pushing-updates"
title: "Sharing environments"
heading: "Pulling a FloxHub environment into a directory and pushing updates"
group: "Tutorials"
order: 801
url: "/docs/tutorials/sharing-environments#pulling-a-floxhub-environment-into-a-directory-and-pushing-updates"
anchor: "pulling-a-floxhub-environment-into-a-directory-and-pushing-updates"
terms: ["pulling","floxhub","environment","directory","pushing","updates","explains","adds","linked","folder","suits","committing","version","control","centrally","managing","dependencies","across","projects","after","install","changes","locally","push","back","permission","currently","only","owners","edits","similar","example","project","flox","pull","youruser","pulled","https","activate","yarn"]
hash: "404de260bf10a9a77a3b7a9703b37f488329dfb0710207b754b21096a43f6c92"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ cd similar-example-project\n$ flox pull youruser/example-project\n⚡︎  Pulled youruser/example-project from https://hub.flox.dev\n\n    You can activate this environment with 'flox activate'","chunkId":"tutorials/sharing-environments#pulling-a-floxhub-environment-into-a-directory-and-pushing-updates"},{"kind":"code","literal":"$ flox install yarn\n✔ 'yarn' installed to environment youruser/example-project at /Users/youruser/similar-example-project\n$ flox push\n✔ Updates to example-project successfully pushed to FloxHub\n\n    Use 'flox pull youruser/example-project' to get this environment in any other location.","chunkId":"tutorials/sharing-environments#pulling-a-floxhub-environment-into-a-directory-and-pushing-updates"},{"kind":"code","literal":"flox pull","chunkId":"tutorials/sharing-environments#pulling-a-floxhub-environment-into-a-directory-and-pushing-updates"},{"kind":"code","literal":".flox","chunkId":"tutorials/sharing-environments#pulling-a-floxhub-environment-into-a-directory-and-pushing-updates"},{"kind":"code","literal":"flox push","chunkId":"tutorials/sharing-environments#pulling-a-floxhub-environment-into-a-directory-and-pushing-updates"}]
sources: [{"chunkId":"tutorials/sharing-environments#pulling-a-floxhub-environment-into-a-directory-and-pushing-updates","url":"/docs/tutorials/sharing-environments#pulling-a-floxhub-environment-into-a-directory-and-pushing-updates","anchor":"pulling-a-floxhub-environment-into-a-directory-and-pushing-updates"}]
---

Explains pulling a FloxHub environment into a directory, which adds a linked environment folder and suits committing to version control and centrally managing dependencies across projects. After pulling you can install changes locally and push them back to FloxHub if you have permission; currently only environment owners can push edits.
