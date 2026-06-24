---
id: "concepts/flox-vs-containers#add-packages"
title: "Flox vs. container workflows"
heading: "Add packages"
group: "Concepts"
order: 38
url: "/docs/concepts/flox-vs-containers#add-packages"
anchor: "add-packages"
terms: ["packages","compares","adding","differing","version","requirements","latest","pinned","lagging","behind","flox","versus","containers","install","three","single","command","more","later","just","easily","whereas","container","approach","requires","editing","dockerfile","commands","managing","third","party","package","repositories","unavailable","versions","rebuilding","layers","change","curl","yarn"]
hash: "e3299a7216854c5de426ea30bee12374d037523a9a09ae695cf1eed70622fa9d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox install curl yarn@1.22 python3@3.10","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"RUN apt update \u0026\u0026 apt install curl npm","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"RUN sudo add-apt-repository ppa:deadsnakes/ppa -y \u0026\u0026 \\\n    sudo apt update \u0026\u0026 \\\n    sudo apt install python3.10","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"curl","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"yarn 1.22","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"python3.10","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"flox install \u003cpackage\u003e","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"RUN","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"Dockerfile","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"yarn","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"code","literal":"npm","chunkId":"concepts/flox-vs-containers#add-packages"},{"kind":"value","literal":"24.04","chunkId":"concepts/flox-vs-containers#add-packages"}]
sources: [{"chunkId":"concepts/flox-vs-containers#add-packages","url":"/docs/concepts/flox-vs-containers#add-packages","anchor":"add-packages"}]
---

Compares adding packages of differing version requirements (latest, pinned, lagging behind) in Flox versus containers. With Flox you install all three in a single command and add more later just as easily, whereas the container approach requires editing Dockerfile RUN commands, managing third-party package repositories for unavailable versions, and rebuilding later layers when packages change.
