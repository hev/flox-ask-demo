---
id: "concepts/secrets-management#3-scoped-env-var-injection"
title: "Secrets management"
heading: "3. Scoped env var injection"
group: "Concepts"
order: 153
url: "/docs/concepts/secrets-management#3-scoped-env-var-injection"
anchor: "3-scoped-env-var-injection"
terms: ["scoped","injection","describes","third","phase","retrieved","secrets","exported","environment","variables","exist","only","active","flox","shell","process","never","touch","disk","gone","exits"]
hash: "c71985d41a1137183ea0c0b6db0c27f27d66b774efb310b1565a1a9b4aa271f7"
mode: "agent-primary"
facts: []
sources: [{"chunkId":"concepts/secrets-management#3-scoped-env-var-injection","url":"/docs/concepts/secrets-management#3-scoped-env-var-injection","anchor":"3-scoped-env-var-injection"}]
---

Describes the third phase: retrieved secrets are exported as environment variables that exist only in the active Flox shell process, never touch disk, and are gone when the shell exits.
