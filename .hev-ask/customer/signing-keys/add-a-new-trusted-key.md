---
id: "customer/signing-keys#add-a-new-trusted-key"
title: "Signing keys"
heading: "Add a new trusted key"
group: "Customer"
order: 177
url: "/docs/customer/signing-keys#add-a-new-trusted-key"
anchor: "add-a-new-trusted-key"
terms: ["trusted","explains","public","installing","published","artifacts","covering","both","installed","flox","standalone","editing","configuration","keys","list","creating","files","option","absent","restarting","daemon","platform","service","manager","managed","systems","adding","system","rebuilding","extra","existing","contents","sudo","systemctl","restart","launchctl","kickstart","nixos","settings","conf"]
hash: "b2fda4078b7a04e43042c9d1504ed25570ba5f39ec99daf1c320482dd265385d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"extra-trusted-public-keys = \u003cexisting keys\u003e \u003ckey contents\u003e","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"sudo systemctl restart nix-daemon","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"sudo launchctl kickstart -k system/org.nixos.nix-daemon;\nsudo launchctl kickstart -k system/org.nixos.nix-daemon","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"nix.settings.trusted-public-keys = [\n  \"\u003ckey contents\u003e\"\n];","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"/etc/nix/nix.conf","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"extra-trusted-public-keys","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"\u003ckey contents\u003e","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"\u003cexisting keys\u003e","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"systemd","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"launchd","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"nix-darwin","chunkId":"customer/signing-keys#add-a-new-trusted-key"},{"kind":"code","literal":"home-manager","chunkId":"customer/signing-keys#add-a-new-trusted-key"}]
sources: [{"chunkId":"customer/signing-keys#add-a-new-trusted-key","url":"/docs/customer/signing-keys#add-a-new-trusted-key","anchor":"add-a-new-trusted-key"}]
---

Explains how to add a new trusted public key for installing published artifacts, covering both Nix installed via Flox or standalone (editing the Nix configuration's trusted-public-keys list, creating files or the option if absent, and restarting the Nix daemon via the platform's service manager) and Nix-managed systems (adding the key to the system configuration option and rebuilding).
