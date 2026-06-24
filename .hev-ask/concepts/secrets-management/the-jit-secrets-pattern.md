---
id: "concepts/secrets-management#the-jit-secrets-pattern"
title: "Secrets management"
heading: "The JIT secrets pattern"
group: "Concepts"
order: 159
url: "/docs/concepts/secrets-management#the-jit-secrets-pattern"
anchor: "the-jit-secrets-pattern"
terms: ["secrets","pattern","presents","just","time","flow","developer","authenticates","secret","store","activation","runs","activate","hook","retrieves","exported","environment","variable","available","only","while","shell","active","disappears","exits","notes","three","phases","flowchart","flox","calls","retrieve","gone"]
hash: "7baf98b2da23e08edf50522909bc5138e11de411e5b88dd7f2db844f0d61b91e"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flowchart TD\n  A[\"Developer authenticates to secret store\"] --\u003e B[\"flox activate runs on-activate hook\"]\n  B --\u003e C[\"Hook calls store CLI to retrieve secret\"]\n  C --\u003e D[\"Secret exported as env var in Flox shell\"]\n  D --\u003e E[\"Env var available while shell is active\"]\n  E --\u003e F[\"Secret gone when shell exits\"]","chunkId":"concepts/secrets-management#the-jit-secrets-pattern"}]
sources: [{"chunkId":"concepts/secrets-management#the-jit-secrets-pattern","url":"/docs/concepts/secrets-management#the-jit-secrets-pattern","anchor":"the-jit-secrets-pattern"}]
---

Presents the just-in-time secrets pattern as a flow where a developer authenticates to a secret store, activation runs the on-activate hook that retrieves the secret, the secret is exported as an environment variable available only while the shell is active, and it disappears when the shell exits. Notes the pattern has three phases.
