---
id: "concepts/secrets-management#rotating-a-secret"
title: "Secrets management"
heading: "Rotating a secret"
group: "Concepts"
order: 157
url: "/docs/concepts/secrets-management#rotating-a-secret"
anchor: "rotating-a-secret"
terms: ["rotating","secret","explains","because","value","lives","store","rather","manifest","rotation","needs","changes","generate","issuer","update","next","activation","uses","warns","already","active","shell","keeps","until","reactivation","kill","shells","compromise","revoke","token","once","environments","still","flox","activate","requires","automatically","teammate","notification","dotenv"]
hash: "8a985ce16b9c869d8a15f5f7338fd2bca216985f71dd479ffa577101caf12b32"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox activate","chunkId":"concepts/secrets-management#rotating-a-secret"}]
sources: [{"chunkId":"concepts/secrets-management#rotating-a-secret","url":"/docs/concepts/secrets-management#rotating-a-secret","anchor":"rotating-a-secret"}]
---

Explains that because the secret value lives in the store rather than the manifest, rotation needs no manifest changes: generate a new secret at the issuer, update the store, and the next activation uses it. Warns that an already-active shell keeps the old value until reactivation, so kill active shells if rotating due to compromise, and revoke the old token once no environments still use it.
