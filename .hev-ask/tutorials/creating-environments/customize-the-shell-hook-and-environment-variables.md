---
id: "tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"
title: "Creating environments"
heading: "Customize the shell hook and environment variables"
group: "Tutorials"
order: 699
url: "/docs/tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"
anchor: "customize-the-shell-hook-and-environment-variables"
terms: ["customize","shell","hook","environment","variables","shows","customizing","activation","editing","declarative","manifest","installed","packages","script","runs","entering","edits","built","editor","validated","immediately","whereas","made","external","tools","flox","example","project","edit","exit","activate","start","server","process","customized","manifestconcept","floxedit","useful","doing","initialization"]
hash: "853975a9766f6fa31d268d3602fdf0bccb44dc6fa2f999d810bcf64a968ae8e7"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox [example-project] $ flox edit","chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"},{"kind":"code","literal":"flox [example-project] $ exit","chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"},{"kind":"code","literal":"$ flox activate\n\nStart the server with 'npm start'\n\nflox [example-project] $","chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"},{"kind":"code","literal":"flox edit","chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"},{"kind":"code","literal":"example-project","chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"},{"kind":"code","literal":"$EDITOR","chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"},{"kind":"code","literal":"[hook]","chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"},{"kind":"code","literal":"flox activate","chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"},{"kind":"code","literal":"exit","chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables"}]
sources: [{"chunkId":"tutorials/creating-environments#customize-the-shell-hook-and-environment-variables","url":"/docs/tutorials/creating-environments#customize-the-shell-hook-and-environment-variables","anchor":"customize-the-shell-hook-and-environment-variables"}]
---

Shows customizing activation by editing the declarative manifest to add installed packages, environment variables, and an activation hook script that runs on entering the environment. Edits via the built-in editor are validated and built immediately, whereas edits made with external tools are validated on activation.
