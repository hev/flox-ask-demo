---
id: "tutorials/installing-from-repo#removing-on-red-hat-based-systems"
title: "Installing Flox from its repository on Debian and Red Hat"
heading: "Removing on Red Hat-based systems"
group: "Tutorials"
order: 749
url: "/docs/tutorials/installing-from-repo#removing-on-red-hat-based-systems"
anchor: "removing-on-red-hat-based-systems"
terms: ["removing","based","systems","explains","flox","repository","locating","deleting","file","cleaning","cache","sudo","repolist","grep","repos","repo","clean","default","source","list","however","double","check","running","following","command","delete","finally"]
hash: "eca14e2dc74c9e41fdaeeec8066983f6ae517e71916db0f737abb3f8bc833db8"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo dnf repolist | grep flox","chunkId":"tutorials/installing-from-repo#removing-on-red-hat-based-systems"},{"kind":"code","literal":"sudo rm /etc/yum.repos.d/flox.repo","chunkId":"tutorials/installing-from-repo#removing-on-red-hat-based-systems"},{"kind":"code","literal":"sudo dnf clean all","chunkId":"tutorials/installing-from-repo#removing-on-red-hat-based-systems"},{"kind":"code","literal":"/etc/yum.repos.d/flox.repo","chunkId":"tutorials/installing-from-repo#removing-on-red-hat-based-systems"},{"kind":"code","literal":"flox.repo","chunkId":"tutorials/installing-from-repo#removing-on-red-hat-based-systems"},{"kind":"code","literal":"/etc/yum.repos.d/","chunkId":"tutorials/installing-from-repo#removing-on-red-hat-based-systems"},{"kind":"code","literal":"dnf","chunkId":"tutorials/installing-from-repo#removing-on-red-hat-based-systems"}]
sources: [{"chunkId":"tutorials/installing-from-repo#removing-on-red-hat-based-systems","url":"/docs/tutorials/installing-from-repo#removing-on-red-hat-based-systems","anchor":"removing-on-red-hat-based-systems"}]
---

Explains removing Flox's repository on Red Hat-based systems by locating and deleting the repository file, then cleaning the dnf cache.
