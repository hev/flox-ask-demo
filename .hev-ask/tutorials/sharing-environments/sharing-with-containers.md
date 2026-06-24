---
id: "tutorials/sharing-environments#sharing-with-containers"
title: "Sharing environments"
heading: "Sharing with containers"
group: "Tutorials"
order: 804
url: "/docs/tutorials/sharing-environments#sharing-with-containers"
anchor: "sharing-with-containers"
terms: ["sharing","containers","describes","rendering","environment","container","image","suitable","common","runtimes","orchestrators","containerize","command","load","directly","runtime","default","flox","places","dependency","layer","improve","iteration","speed","resulting","docker","creating","paths","loaded","example","project","latest","written","telnet","version","inetutils","render","containerd","kubernetes","nomad"]
hash: "2c8545cf5c3c0c4ad5de87e7e6efa287458e6dae00c615d3a0f77219c57d3883"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox containerize --runtime docker # (1)!\n...\nCreating layer 1 from paths: [...]\n...\nLoaded image: example-project:latest\n⚡︎ Container written to Docker runtime","chunkId":"tutorials/sharing-environments#sharing-with-containers"},{"kind":"code","literal":"$  docker run --rm -it example-project -- telnet --version\ntelnet (GNU inetutils) 2.5\n...","chunkId":"tutorials/sharing-environments#sharing-with-containers"},{"kind":"code","literal":"example-environment","chunkId":"tutorials/sharing-environments#sharing-with-containers"},{"kind":"code","literal":"flox containerize","chunkId":"tutorials/sharing-environments#sharing-with-containers"}]
sources: [{"chunkId":"tutorials/sharing-environments#sharing-with-containers","url":"/docs/tutorials/sharing-environments#sharing-with-containers","anchor":"sharing-with-containers"}]
---

Describes rendering an environment as an OCI container image suitable for common container runtimes and orchestrators. The containerize command can load the image directly into a container runtime, and by default Flox places each dependency in its own layer to improve dependency sharing and iteration speed; the resulting image can then be run.
