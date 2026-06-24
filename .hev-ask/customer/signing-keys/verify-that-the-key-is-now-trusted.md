---
id: "customer/signing-keys#verify-that-the-key-is-now-trusted"
title: "Signing keys"
heading: "Verify that the key is now trusted"
group: "Customer"
order: 181
url: "/docs/customer/signing-keys#verify-that-the-key-is-now-trusted"
anchor: "verify-that-the-key-is-now-trusted"
terms: ["verify","trusted","explains","verifying","daemon","restarted","picked","newly","added","printing","current","configuration","searching","config","show","grep","public","been","just"]
hash: "fd7327b6d2f2e777e5a26164b79d015f2d250888b74f07feeb5bc88b04298aee"
mode: "agent-primary"
facts: [{"kind":"code","literal":"nix config show | grep trusted-public-key","chunkId":"customer/signing-keys#verify-that-the-key-is-now-trusted"}]
sources: [{"chunkId":"customer/signing-keys#verify-that-the-key-is-now-trusted","url":"/docs/customer/signing-keys#verify-that-the-key-is-now-trusted","anchor":"verify-that-the-key-is-now-trusted"}]
---

Explains verifying that the Nix daemon has restarted and picked up a newly added key by printing the daemon's current configuration and searching for the added key.
