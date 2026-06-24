---
id: "install-flox/troubleshooting#orphaned-nix-build-users-macos"
title: "Troubleshooting"
heading: "Orphaned Nix build users macOS"
group: "Install Flox"
order: 266
url: "/docs/install-flox/troubleshooting#orphaned-nix-build-users-macos"
anchor: "orphaned-nix-build-users-macos"
terms: ["orphaned","build","users","macos","leftover","install","make","flox","installer","post","step","fail","symptom","steps","remove","stale","volume","before","reinstalling","seems","user","nixbld8","already","exists","sudo","dscl","delete","nixbld","null","done","diskutil","apfs","deletevolume","nixbld1","nixbld32","github","previous","installation","created","system"]
hash: "c842ca18aa9815750b150829bcdedfd83ddebf1adad2a9697d8976b63c7f7144"
mode: "agent-primary"
facts: [{"kind":"code","literal":"It seems the build user _nixbld8 already exists, but with the UID '308'.","chunkId":"install-flox/troubleshooting#orphaned-nix-build-users-macos"},{"kind":"code","literal":"for i in $(seq 1 32); do sudo dscl . -delete /Users/_nixbld$i 2\u003e/dev/null; done","chunkId":"install-flox/troubleshooting#orphaned-nix-build-users-macos"},{"kind":"code","literal":"sudo diskutil apfs deleteVolume /nix","chunkId":"install-flox/troubleshooting#orphaned-nix-build-users-macos"},{"kind":"code","literal":"_nixbld1","chunkId":"install-flox/troubleshooting#orphaned-nix-build-users-macos"},{"kind":"code","literal":"_nixbld32","chunkId":"install-flox/troubleshooting#orphaned-nix-build-users-macos"},{"kind":"code","literal":"/var/log/install.log","chunkId":"install-flox/troubleshooting#orphaned-nix-build-users-macos"},{"kind":"code","literal":"/nix","chunkId":"install-flox/troubleshooting#orphaned-nix-build-users-macos"},{"kind":"value","literal":"github.com","chunkId":"install-flox/troubleshooting#orphaned-nix-build-users-macos"}]
sources: [{"chunkId":"install-flox/troubleshooting#orphaned-nix-build-users-macos","url":"/docs/install-flox/troubleshooting#orphaned-nix-build-users-macos","anchor":"orphaned-nix-build-users-macos"}]
---

How leftover Nix build users from an old Nix install can make the Flox installer's post-install step fail on macOS, the symptom in the install log, and the steps to remove the orphaned users (and stale Nix volume) before reinstalling.
