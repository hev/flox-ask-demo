---
id: "install-flox/troubleshooting#solution-remove-the-previous-nix-installation"
title: "Troubleshooting"
heading: "Solution: remove the previous Nix installation"
group: "Install Flox"
order: 270
url: "/docs/install-flox/troubleshooting#solution-remove-the-previous-nix-installation"
anchor: "solution-remove-the-previous-nix-installation"
terms: ["solution","remove","previous","installation","most","reliable","broken","install","completely","prior","flox","platform","uninstall","steps","plus","guidance","removing","installed","determinate","other","installers","after","installer","sudo","local","share","scripts","brew","force","purge","store","github","surefire","back","clean","state","note","packages","downloaded","built"]
hash: "e891bc7c69637a873f966a281de58dd5d74f600739ee75e60489040c2f41bf69"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo /usr/local/share/flox/scripts/uninstall","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"code","literal":"brew uninstall --force --zap flox","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"code","literal":"brew uninstall flox","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"code","literal":"brew uninstall --zap flox","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"code","literal":"sudo apt-get purge flox","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"code","literal":"sudo yum remove flox","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"code","literal":"/nix/nix-installer uninstall","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"code","literal":"/nix/store","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"code","literal":"/nix/*","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"code","literal":"/nix","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"value","literal":"github.com","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"},{"kind":"value","literal":"nix.dev","chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation"}]
sources: [{"chunkId":"install-flox/troubleshooting#solution-remove-the-previous-nix-installation","url":"/docs/install-flox/troubleshooting#solution-remove-the-previous-nix-installation","anchor":"solution-remove-the-previous-nix-installation"}]
---

The most reliable fix for a broken install: completely remove the prior Nix or Flox installation, with per-platform uninstall steps plus guidance for removing Nix installed by the Determinate or other installers, after which the Flox installer can be re-run.
