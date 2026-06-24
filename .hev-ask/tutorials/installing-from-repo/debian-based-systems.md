---
id: "tutorials/installing-from-repo#debian-based-systems"
title: "Installing Flox from its repository on Debian and Red Hat"
heading: "Debian-based systems"
group: "Tutorials"
order: 744
url: "/docs/tutorials/installing-from-repo#debian-based-systems"
anchor: "debian-based-systems"
terms: ["debian","based","systems","covers","installing","distributions","downloading","flox","keyring","adding","repository","pinned","modern","signed","method","updating","notes","legacy","approach","life","releases","lack","support","wget","https","downloads","stable","archive","sudo","share","keyrings","null","echo","sources","list","update","install","trusted","perform","these"]
hash: "ba9c5dcb47405b5bb17803cb6e1b1d3fceb7091fea14be7d27ad928b6bdfc22a"
mode: "agent-primary"
facts: [{"kind":"code","literal":"wget -qO - https://downloads.flox.dev/by-env/stable/deb/flox-archive-keyring.gpg | sudo tee /usr/share/keyrings/flox-archive-keyring.gpg \u003e/dev/null","chunkId":"tutorials/installing-from-repo#debian-based-systems"},{"kind":"code","literal":"echo \"deb [signed-by=/usr/share/keyrings/flox-archive-keyring.gpg] https://downloads.flox.dev/by-env/stable/deb/ stable/\" | sudo tee /etc/apt/sources.list.d/flox.list \u003e/dev/null","chunkId":"tutorials/installing-from-repo#debian-based-systems"},{"kind":"code","literal":"sudo apt update \u0026\u0026 sudo apt install flox -y","chunkId":"tutorials/installing-from-repo#debian-based-systems"},{"kind":"code","literal":"apt","chunkId":"tutorials/installing-from-repo#debian-based-systems"},{"kind":"code","literal":"/usr/share/keyrings/","chunkId":"tutorials/installing-from-repo#debian-based-systems"},{"kind":"code","literal":"/etc/apt/sources.list.d/flox.list","chunkId":"tutorials/installing-from-repo#debian-based-systems"},{"kind":"code","literal":"signed-by","chunkId":"tutorials/installing-from-repo#debian-based-systems"},{"kind":"code","literal":"trusted.gpg.d","chunkId":"tutorials/installing-from-repo#debian-based-systems"},{"kind":"value","literal":"18.04","chunkId":"tutorials/installing-from-repo#debian-based-systems"}]
sources: [{"chunkId":"tutorials/installing-from-repo#debian-based-systems","url":"/docs/tutorials/installing-from-repo#debian-based-systems","anchor":"debian-based-systems"}]
---

Covers installing on Debian-based distributions by downloading the Flox GPG keyring, adding the Flox repository pinned to that keyring using the modern signed-by method, then updating and installing Flox; notes the legacy approach for end-of-life releases that lack signed-by support.
