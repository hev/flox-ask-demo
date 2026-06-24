---
id: "tutorials/installing-from-repo#installing-from-floxs-repository-using-yum"
title: "Installing Flox from its repository on Debian and Red Hat"
heading: "Installing from Flox's repository using yum"
group: "Tutorials"
order: 746
url: "/docs/tutorials/installing-from-repo#installing-from-floxs-repository-using-yum"
anchor: "installing-from-floxs-repository-using-yum"
terms: ["installing","flox","repository","describes","alternative","install","method","older","systems","default","unavailable","importing","configuring","inline","through","notes","works","based","distribution","sudo","import","https","downloads","stable","archive","keyring","repofrompath","centos","later","fedora","rhel","rocky","linux","other","modern","package","manager","however","earlier","ship"]
hash: "2a303f78a32fe0b17476ac2f74e9aba1630627daadc5f75a28acd92c8d70747b"
mode: "agent-primary"
facts: [{"kind":"code","literal":"sudo rpm --import https://downloads.flox.dev/by-env/stable/rpm/flox-archive-keyring.asc","chunkId":"tutorials/installing-from-repo#installing-from-floxs-repository-using-yum"},{"kind":"code","literal":"sudo yum --repofrompath=flox,https://downloads.flox.dev/by-env/stable/rpm install flox","chunkId":"tutorials/installing-from-repo#installing-from-floxs-repository-using-yum"},{"kind":"code","literal":"dnf","chunkId":"tutorials/installing-from-repo#installing-from-floxs-repository-using-yum"},{"kind":"code","literal":"yum","chunkId":"tutorials/installing-from-repo#installing-from-floxs-repository-using-yum"},{"kind":"code","literal":"rpm","chunkId":"tutorials/installing-from-repo#installing-from-floxs-repository-using-yum"}]
sources: [{"chunkId":"tutorials/installing-from-repo#installing-from-floxs-repository-using-yum","url":"/docs/tutorials/installing-from-repo#installing-from-floxs-repository-using-yum","anchor":"installing-from-floxs-repository-using-yum"}]
---

Describes an alternative install method for older Red Hat systems where yum is the default and dnf is unavailable, by importing the Flox GPG key and configuring the repository inline through yum; notes it works on any Red Hat-based distribution where yum is the default.
