---
id: "concepts/services#handling-environment-edits"
title: "Services"
heading: "Handling environment edits"
group: "Concepts"
order: 163
url: "/docs/concepts/services#handling-environment-edits"
anchor: "handling-environment-edits"
terms: ["handling","environment","edits","explains","editing","service","definition","while","services","running","leaves","manifest","sync","both","current","activation","apply","only","changes","without","reactivating","restart","stop","start","cases","ephemeral","matching","fresh","step","needed","currently","flox","edit","working","discover","need","some","other","part","scenario"]
hash: "bed3b2e3b250a2bd9232cf62592486ad0886400c0f96db8431fb92dbf02468a5"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox edit","chunkId":"concepts/services#handling-environment-edits"},{"kind":"code","literal":"flox services restart","chunkId":"concepts/services#handling-environment-edits"},{"kind":"code","literal":"flox services stop","chunkId":"concepts/services#handling-environment-edits"},{"kind":"code","literal":"flox services start","chunkId":"concepts/services#handling-environment-edits"}]
sources: [{"chunkId":"concepts/services#handling-environment-edits","url":"/docs/concepts/services#handling-environment-edits","anchor":"handling-environment-edits"}]
---

Explains that editing a service definition while services are running leaves the manifest out of sync with both the current activation and the running services. To apply only service changes without reactivating, you can restart services, or stop then start them, in both cases running them in an ephemeral activation matching a fresh activation; the stop step is only needed if services are currently running.
