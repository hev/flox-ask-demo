---
id: "concepts/flox-vs-containers#send-artifacts-to-production"
title: "Flox vs. container workflows"
heading: "Send artifacts to production"
group: "Concepts"
order: 44
url: "/docs/concepts/flox-vs-containers#send-artifacts-to-production"
anchor: "send-artifacts-to-production"
terms: ["send","artifacts","production","compares","producing","flox","turn","environment","container","image","containing","same","software","produce","build","directly","whereas","workflow","typically","uses","multi","stage","dockerfiles","built","uploads","registry","containerize","dockerfile","builder","docker","working","development","need","deployed","create","command","contain","exact","again","down"]
hash: "ff83caba5acf9b3fb0896c53d56258dd92b4f7158168c691c9cb10e489bdc0b6"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox containerize","chunkId":"concepts/flox-vs-containers#send-artifacts-to-production"},{"kind":"code","literal":"git","chunkId":"concepts/flox-vs-containers#send-artifacts-to-production"},{"kind":"code","literal":"Dockerfile","chunkId":"concepts/flox-vs-containers#send-artifacts-to-production"},{"kind":"code","literal":"builder","chunkId":"concepts/flox-vs-containers#send-artifacts-to-production"},{"kind":"code","literal":"docker build","chunkId":"concepts/flox-vs-containers#send-artifacts-to-production"}]
sources: [{"chunkId":"concepts/flox-vs-containers#send-artifacts-to-production","url":"/docs/concepts/flox-vs-containers#send-artifacts-to-production","anchor":"send-artifacts-to-production"}]
---

Compares producing production artifacts. Flox can turn an environment into a container image containing the same software used in dev and CI, or produce build artifacts directly, whereas the container workflow typically uses multi-stage Dockerfiles built in CI and uploads the production image to a registry.
