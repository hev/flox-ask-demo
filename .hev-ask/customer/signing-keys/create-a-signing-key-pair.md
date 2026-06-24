---
id: "customer/signing-keys#create-a-signing-key-pair"
title: "Signing keys"
heading: "Create a signing key pair"
group: "Customer"
order: 178
url: "/docs/customer/signing-keys#create-a-signing-key-pair"
anchor: "create-a-signing-key-pair"
terms: ["create","signing","pair","explains","generating","first","private","deriving","public","generate","secret","name","convert"]
hash: "2b013f52856bb810110e1ae3ccc58a7f6f8606a62a01b60cdcbde8bee7a31cd6"
mode: "agent-primary"
facts: [{"kind":"code","literal":"nix key generate-secret --key-name signing-key \u003e signing-key.key","chunkId":"customer/signing-keys#create-a-signing-key-pair"},{"kind":"code","literal":"nix key convert-secret-to-public \u003c signing-key.key \u003e signing-key-pub.key","chunkId":"customer/signing-keys#create-a-signing-key-pair"},{"kind":"code","literal":"nix","chunkId":"customer/signing-keys#create-a-signing-key-pair"}]
sources: [{"chunkId":"customer/signing-keys#create-a-signing-key-pair","url":"/docs/customer/signing-keys#create-a-signing-key-pair","anchor":"create-a-signing-key-pair"}]
---

Explains generating a signing key pair using the Nix CLI: first generating a private key, then deriving the public key from it.
