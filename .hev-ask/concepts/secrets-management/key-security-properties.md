---
id: "concepts/secrets-management#key-security-properties"
title: "Secrets management"
heading: "Key security properties"
group: "Concepts"
order: 156
url: "/docs/concepts/secrets-management#key-security-properties"
anchor: "key-security-properties"
terms: ["security","properties","lists","just","time","pattern","secret","values","never","manifest","committed","dotenv","files","shell","history","access","auditable","store","logs","secrets","rotatable","updating","without","changes","credentials","scoped","environment","rather","global","toml","activate","written","safe","commit","contains","only","retrieval","instructions","file","accidentally"]
hash: "61dbd50a9fd44d3a40725086537d1c711c90b105d45be9166d52ca5bb6968974"
mode: "agent-primary"
facts: [{"kind":"code","literal":"manifest.toml","chunkId":"concepts/secrets-management#key-security-properties"},{"kind":"code","literal":".env","chunkId":"concepts/secrets-management#key-security-properties"},{"kind":"code","literal":"on-activate","chunkId":"concepts/secrets-management#key-security-properties"}]
sources: [{"chunkId":"concepts/secrets-management#key-security-properties","url":"/docs/concepts/secrets-management#key-security-properties","anchor":"key-security-properties"}]
---

Lists the security properties of the just-in-time pattern: secret values are never in the manifest, not committed to Git, not in dotenv files, and not in shell history; access is auditable via the store's logs; secrets are rotatable by updating the store without manifest changes; and credentials are scoped per-environment rather than global.
