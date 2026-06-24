---
id: "tutorials/installing-from-repo#removing-on-debian-based-systems"
title: "Installing Flox from its repository on Debian and Red Hat"
heading: "Removing on Debian-based systems"
group: "Tutorials"
order: 748
url: "/docs/tutorials/installing-from-repo#removing-on-debian-based-systems"
anchor: "removing-on-debian-based-systems"
terms: ["removing","debian","based","systems","explains","flox","repository","locating","deleting","source","file","keyring","updating","package","list","notes","instead","newer","deb822","naming","installed","grep","sources","sudo","share","keyrings","archive","update","default","however","double","check","running","following","command","once","confirmed","existence","location","delete"]
hash: "f8ace1c9ef0c504ac9a6aab08da3d1ba05ad1ce0baa2430191c13a96e1044601"
mode: "agent-primary"
facts: [{"kind":"code","literal":"grep -r 'flox' /etc/apt/sources.list /etc/apt/sources.list.d/","chunkId":"tutorials/installing-from-repo#removing-on-debian-based-systems"},{"kind":"code","literal":"sudo rm /etc/apt/sources.list.d/flox.list\nsudo rm /usr/share/keyrings/flox-archive-keyring.gpg","chunkId":"tutorials/installing-from-repo#removing-on-debian-based-systems"},{"kind":"code","literal":"sudo apt update","chunkId":"tutorials/installing-from-repo#removing-on-debian-based-systems"},{"kind":"code","literal":"/etc/apt/sources.list.d/flox.list","chunkId":"tutorials/installing-from-repo#removing-on-debian-based-systems"},{"kind":"code","literal":".deb","chunkId":"tutorials/installing-from-repo#removing-on-debian-based-systems"},{"kind":"code","literal":"flox.sources","chunkId":"tutorials/installing-from-repo#removing-on-debian-based-systems"},{"kind":"code","literal":"flox.list","chunkId":"tutorials/installing-from-repo#removing-on-debian-based-systems"},{"kind":"code","literal":"grep","chunkId":"tutorials/installing-from-repo#removing-on-debian-based-systems"}]
sources: [{"chunkId":"tutorials/installing-from-repo#removing-on-debian-based-systems","url":"/docs/tutorials/installing-from-repo#removing-on-debian-based-systems","anchor":"removing-on-debian-based-systems"}]
---

Explains removing Flox's repository on Debian-based systems by locating and deleting the repository source file and the GPG keyring, then updating the package list; notes the source file may instead use the newer DEB822 naming if Flox was installed via its package.
