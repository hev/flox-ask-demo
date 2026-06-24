---
id: "concepts/flox-vs-containers#configuration"
title: "Flox vs. container workflows"
heading: "Configuration"
group: "Concepts"
order: 39
url: "/docs/concepts/flox-vs-containers#configuration"
anchor: "configuration"
terms: ["configuration","contrasts","flox","environment","configured","declarative","toml","manifest","defines","cross","platform","default","whereas","container","uses","imperative","dockerfile","whose","command","order","matters","commands","often","stuffed","single","layer","avoid","extra","layers","though","familiar","version","install","curl","path","yarn","python3","options","systems","aarch64"]
hash: "a68d3a2259a44f8836f9d7d85ee96217891cc65af1ad135e8c0ce8a335eef259"
mode: "agent-primary"
facts: [{"kind":"code","literal":"version = 1\n\n[install]\ncurl.pkg-path = \"curl\"\nyarn.pkg-path = \"yarn\"\nyarn.version = \"1.22\"\npython3.pkg-path = \"python3\"\npython3.version = \"3.10\"\n\n[options]\nsystems = [\"aarch64-darwin\", \"aarch64-linux\", \"x86_64-darwin\", \"x86_64-linux\"]","chunkId":"concepts/flox-vs-containers#configuration"},{"kind":"code","literal":"FROM ubuntu:noble\n\nRUN apt update \u0026\u0026 apt install curl npm\n\nRUN sudo add-apt-repository ppa:deadsnakes/ppa -y \u0026\u0026 \\\n    sudo apt update \u0026\u0026 \\\n    sudo apt install python3.10","chunkId":"concepts/flox-vs-containers#configuration"},{"kind":"code","literal":"Dockerfile","chunkId":"concepts/flox-vs-containers#configuration"},{"kind":"code","literal":"apt install","chunkId":"concepts/flox-vs-containers#configuration"},{"kind":"code","literal":"RUN","chunkId":"concepts/flox-vs-containers#configuration"},{"kind":"value","literal":"e.g","chunkId":"concepts/flox-vs-containers#configuration"}]
sources: [{"chunkId":"concepts/flox-vs-containers#configuration","url":"/docs/concepts/flox-vs-containers#configuration","anchor":"configuration"}]
---

Contrasts configuration: a Flox environment is configured by a declarative TOML manifest that defines a cross-platform environment by default, whereas a container uses an imperative Dockerfile whose command order matters and where commands are often stuffed into a single layer to avoid extra layers, though its commands are familiar.
