---
id: "tutorials/installing-from-repo#red-hat-based-systems"
title: "Installing Flox from its repository on Debian and Red Hat"
heading: "Red Hat-based systems"
group: "Tutorials"
order: 747
url: "/docs/tutorials/installing-from-repo#red-hat-based-systems"
anchor: "red-hat-based-systems"
terms: ["based","systems","covers","installing","modern","distributions","importing","flox","keyring","adding","repository","sudo","import","https","downloads","stable","archive","config","manager","repo","install","repos","perform","these","steps","following","first","download","next","finally"]
hash: "17bea46de7bf4f5e7bd982ee508a0fcd600ed6da7a8fa974ddc74f09224e4670"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo rpm --import https://downloads.flox.dev/by-env/stable/rpm/flox-archive-keyring.asc","chunkId":"tutorials/installing-from-repo#red-hat-based-systems"},{"kind":"code","literal":"sudo dnf config-manager --add-repo https://downloads.flox.dev/by-env/stable/rpm","chunkId":"tutorials/installing-from-repo#red-hat-based-systems"},{"kind":"code","literal":"sudo dnf install flox","chunkId":"tutorials/installing-from-repo#red-hat-based-systems"},{"kind":"code","literal":"dnf","chunkId":"tutorials/installing-from-repo#red-hat-based-systems"},{"kind":"code","literal":"/etc/yum.repos.d/flox.repo","chunkId":"tutorials/installing-from-repo#red-hat-based-systems"}]
sources: [{"chunkId":"tutorials/installing-from-repo#red-hat-based-systems","url":"/docs/tutorials/installing-from-repo#red-hat-based-systems","anchor":"red-hat-based-systems"}]
---

Covers installing on modern Red Hat-based distributions that use dnf by importing the Flox GPG keyring, adding the Flox repository, and installing Flox.
