---
id: "concepts/secrets-management#2-secret-retrieval-on-activate"
title: "Secrets management"
heading: "2. Secret retrieval on-activate"
group: "Concepts"
order: 152
url: "/docs/concepts/secrets-management#2-secret-retrieval-on-activate"
anchor: "2-secret-retrieval-on-activate"
terms: ["secret","retrieval","activate","describes","second","phase","hook","calls","store","retrieve","specific","secrets","activation","time","validating","active","session","before","returning","values","flox","manifest","toml","shell","validates","activating","environments","more","about","hooks"]
hash: "028d5a0a29a1927fb658280a7850164f8a8ff7ab33f31eba5591b34ba1910852"
mode: "agent-primary"
facts: [{"kind":"code","literal":"on-activate","chunkId":"concepts/secrets-management#2-secret-retrieval-on-activate"},{"kind":"code","literal":".flox/env/manifest.toml","chunkId":"concepts/secrets-management#2-secret-retrieval-on-activate"}]
sources: [{"chunkId":"concepts/secrets-management#2-secret-retrieval-on-activate","url":"/docs/concepts/secrets-management#2-secret-retrieval-on-activate","anchor":"2-secret-retrieval-on-activate"}]
---

Describes the second phase: the on-activate hook calls the secret store's CLI or API to retrieve specific secrets at activation time, with the store validating the active session before returning values.
