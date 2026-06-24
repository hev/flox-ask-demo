---
id: "install-flox/uninstall"
title: "Uninstall"
heading: null
group: "Install Flox"
order: 271
url: "/docs/install-flox/uninstall"
anchor: null
terms: ["completely","remove","flox","manages","system","install","method","macos","homebrew","debian","generic","reminders","back","data","first","reboot","afterward","plus","request","feedback","sudo","local","share","scripts","uninstall","brew","force","purge","profile","profiles","default","experimental","features","command","flakes","discourse","while","uninstalling","would","like"]
hash: "ce7b96bf08726f45231ba348472acbdd820565317fcd589a844521fccefade43"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo /usr/local/share/flox/scripts/uninstall","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"brew uninstall --force --zap flox","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"brew uninstall flox","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"brew uninstall --zap flox","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"sudo apt-get purge flox","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"sudo yum remove flox","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"sudo -H nix profile remove \\\n        '.*flox' \\\n        --profile /nix/var/nix/profiles/default \\\n        --experimental-features \"nix-command flakes\"","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"nix profile remove \\\n        '.*flox' \\\n        --experimental-features \"nix-command flakes\"","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"flox","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"/nix/*","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"/nix","chunkId":"install-flox/uninstall"},{"kind":"code","literal":"default","chunkId":"install-flox/uninstall"},{"kind":"value","literal":"flox.dev","chunkId":"install-flox/uninstall"},{"kind":"value","literal":"discourse.flox.dev","chunkId":"install-flox/uninstall"}]
sources: [{"chunkId":"install-flox/uninstall","url":"/docs/install-flox/uninstall","anchor":null}]
---

How to completely remove Flox (and the Nix it manages) from a system per install method (macOS pkg and Homebrew, Debian, RPM, generic Nix, WSL), with reminders to back up Nix data first and to reboot afterward, plus a request for feedback.
