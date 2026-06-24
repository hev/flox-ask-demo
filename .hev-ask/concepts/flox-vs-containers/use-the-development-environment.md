---
id: "concepts/flox-vs-containers#use-the-development-environment"
title: "Flox vs. container workflows"
heading: "Use the development environment"
group: "Concepts"
order: 47
url: "/docs/concepts/flox-vs-containers#use-the-development-environment"
anchor: "use-the-development-environment"
terms: ["development","environment","compares","working","inside","flox","puts","subshell","separate","build","step","environments","transactionally","rebuilt","changes","keeping","local","tools","dotfiles","container","path","requires","building","image","mounting","source","entering","shell","lose","aliases","tool","configs","activate","myproject","docker","name","exec","bash","want","some"]
hash: "f85e44f7e55c09f416b14d76c5540ead67d919204ba72bacd4d1d833d7b067d2"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox activate\nflox [myproject] $ # now you're in the environment","chunkId":"concepts/flox-vs-containers#use-the-development-environment"},{"kind":"code","literal":"docker build -t myproject .","chunkId":"concepts/flox-vs-containers#use-the-development-environment"},{"kind":"code","literal":"$ docker run -v ./src:/src myproject -d --name myproject_container\n$ docker exec -it myproject_container bash\n$ # now you're inside the container","chunkId":"concepts/flox-vs-containers#use-the-development-environment"}]
sources: [{"chunkId":"concepts/flox-vs-containers#use-the-development-environment","url":"/docs/concepts/flox-vs-containers#use-the-development-environment","anchor":"use-the-development-environment"}]
---

Compares working inside the environment. Flox puts you in a subshell with no separate build step (environments are transactionally rebuilt on changes), keeping your local tools and dotfiles; the container path requires building the image, mounting source, and entering a shell where you lose your local tools, aliases, dotfiles, and tool configs.
