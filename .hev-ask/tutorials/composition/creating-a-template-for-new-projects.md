---
id: "tutorials/composition#creating-a-template-for-new-projects"
title: "Reusing and combining developer environments"
heading: "Creating a template for new projects"
group: "Tutorials"
order: 692
url: "/docs/tutorials/composition#creating-a-template-for-new-projects"
anchor: "creating-a-template-for-new-projects"
terms: ["creating","template","projects","shows","bootstrapping","project","making","local","floxhub","disconnected","copy","environment","producing","directory","already","contains","development","tools","flox","pull","python","myuser","created","path","activate","myproject","bootstrap","make","connected","accomplish","command","create","called","newpythonproject","pythonenv","structure","should","look","like","point"]
hash: "6adc5c7645da7b9341ef08653c5c66d8aad7dbf980e67114049cf714ef1c6ba5"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox pull -d new_python_project --copy myuser/python_env\n⚡︎ Created path environment from myuser/python_env.\n\nYou can activate this environment with 'flox activate'","chunkId":"tutorials/composition#creating-a-template-for-new-projects"},{"kind":"code","literal":"myproject/\n  python_env/\n    .flox/\n  new_python_project/\n    .flox/","chunkId":"tutorials/composition#creating-a-template-for-new-projects"},{"kind":"code","literal":"flox pull --copy","chunkId":"tutorials/composition#creating-a-template-for-new-projects"},{"kind":"code","literal":"new_python_project","chunkId":"tutorials/composition#creating-a-template-for-new-projects"}]
sources: [{"chunkId":"tutorials/composition#creating-a-template-for-new-projects","url":"/docs/tutorials/composition#creating-a-template-for-new-projects","anchor":"creating-a-template-for-new-projects"}]
---

Shows bootstrapping a new project by making a local, FloxHub-disconnected copy of a template environment, producing a new project directory that already contains the template's development tools.
