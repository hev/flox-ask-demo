---
id: "man/manifesttoml#vars"
title: "manifest.toml"
heading: "vars"
group: "Manual"
order: 658
url: "/docs/man/manifesttoml#vars"
anchor: "vars"
terms: ["vars","documents","section","defines","environment","variables","during","activation","noting","cannot","reference","another","their","names","values","case","preserved","copied","verbatim","script","http","localhost","2000","server","port","3000","allows","define","specified","here","capitalization","example","dburl","serverport"]
hash: "c1e83d910c2a6de3f07c36d04ba36d707df737bc204af9c2584f58396b2504f7"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[vars]\nDB_URL = \"http://localhost:2000\"\nSERVER_PORT = \"3000\"","chunkId":"man/manifesttoml#vars"},{"kind":"code","literal":"[vars]","chunkId":"man/manifesttoml#vars"}]
sources: [{"chunkId":"man/manifesttoml#vars","url":"/docs/man/manifesttoml#vars","anchor":"vars"}]
---

Documents the vars section that defines environment variables set during activation, noting they cannot reference one another and that their names and values (case preserved) are copied verbatim into the activation script.
