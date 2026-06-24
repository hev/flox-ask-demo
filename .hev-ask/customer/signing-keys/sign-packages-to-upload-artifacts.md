---
id: "customer/signing-keys#sign-packages-to-upload-artifacts"
title: "Signing keys"
heading: "Sign packages to upload artifacts"
group: "Customer"
order: 179
url: "/docs/customer/signing-keys#sign-packages-to-upload-artifacts"
anchor: "sign-packages-to-upload-artifacts"
terms: ["sign","packages","upload","artifacts","explains","configuring","flox","published","private","must","absolute","path","security","notes","different","signing","publish","option","since","required","uploading","anyone","needs","access","example","password","manager","config","once","generated","configure","configured","purposes","signingprivatekey","need","catalog","command","necessary","capability","solution"]
hash: "a645d9136b70435782e5158be7a4a65899d8afb1ec1f59ff12dbfe4c40a6c3ee"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox config --set publish.signing_private_key \"/path/to/signing-key.key\"","chunkId":"customer/signing-keys#sign-packages-to-upload-artifacts"},{"kind":"code","literal":"--signing-key","chunkId":"customer/signing-keys#sign-packages-to-upload-artifacts"},{"kind":"code","literal":"flox publish","chunkId":"customer/signing-keys#sign-packages-to-upload-artifacts"}]
sources: [{"chunkId":"customer/signing-keys#sign-packages-to-upload-artifacts","url":"/docs/customer/signing-keys#sign-packages-to-upload-artifacts","anchor":"sign-packages-to-upload-artifacts"}]
---

Explains configuring Flox to sign published packages with your private key, which must be set with an absolute path for security, and notes you can use a different signing key per publish via an option. Since the private key is required for uploading, anyone who needs to publish needs access to it, for example via a password manager.
