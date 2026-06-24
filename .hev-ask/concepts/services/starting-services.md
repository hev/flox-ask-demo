---
id: "concepts/services#starting-services"
title: "Services"
heading: "Starting services"
group: "Concepts"
order: 165
url: "/docs/concepts/services#starting-services"
anchor: "starting-services"
terms: ["starting","services","explains","automatically","activation","start","flag","shorthand","noting","need","only","once","across","multiple","shells","since","just","processes","visible","other","activations","activating","without","doesn","later","command","named","ones","error","nonexistent","names","warning","already","running","flox","activate","started","environment","shorter","part"]
hash: "e65cade3b5b6675b55b49010baa0a2dc8d489684b3e049b09bef43e449a71296"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox activate --start-services","chunkId":"concepts/services#starting-services"},{"kind":"code","literal":"flox activate -s","chunkId":"concepts/services#starting-services"},{"kind":"code","literal":"--start-services","chunkId":"concepts/services#starting-services"},{"kind":"code","literal":"flox services start","chunkId":"concepts/services#starting-services"}]
sources: [{"chunkId":"concepts/services#starting-services","url":"/docs/concepts/services#starting-services","anchor":"starting-services"}]
---

Explains starting services automatically on activation via a start-services flag (or its shorthand), noting services need starting only once across multiple shells since they are just processes visible to other activations. Activating without the flag doesn't start services; you can start them later with the start command, for all services or named ones, with an error for nonexistent names and a warning if already running.
