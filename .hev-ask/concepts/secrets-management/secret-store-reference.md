---
id: "concepts/secrets-management#secret-store-reference"
title: "Secrets management"
heading: "Secret store reference"
group: "Concepts"
order: 158
url: "/docs/concepts/secrets-management#secret-store-reference"
anchor: "secret-store-reference"
terms: ["secret","store","reference","table","listing","supported","stores","alongside","their","primary","authentication","method","retrieval","command","covering","keychain","keyring","options","password","managers","secrets","vault","cloud","manager","others","security","find","generic","user","name","tool","lookup","service","account","signin","read","item","field","login","value"]
hash: "d722b947f697546e8a2f14506497d23e123c4be221e0d743ad9c702614c08107"
mode: "agent-primary"
facts: [{"kind":"code","literal":"security find-generic-password -a \"$USER\" -s \"name\" -w","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"secret-tool lookup service name account user","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"op signin","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"op read op://vault/item/field","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"vault login","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"vault kv get -field=value secret/path","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"aws sso login","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"aws secretsmanager get-secret-value --secret-id name --query SecretString --output text","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"doppler login","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"doppler secrets get NAME --plain","chunkId":"concepts/secrets-management#secret-store-reference"},{"kind":"code","literal":"pass show service/credential","chunkId":"concepts/secrets-management#secret-store-reference"}]
sources: [{"chunkId":"concepts/secrets-management#secret-store-reference","url":"/docs/concepts/secrets-management#secret-store-reference","anchor":"secret-store-reference"}]
---

A reference table listing supported secret stores alongside their primary authentication method and retrieval command, covering keychain and keyring options, password managers, a secrets vault, a cloud secrets manager, and others.
