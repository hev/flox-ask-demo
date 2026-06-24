---
id: "tutorials/customizing-environments#adding-shell-aliases"
title: "Customizing the shell environment"
heading: "Adding shell aliases"
group: "Tutorials"
order: 713
url: "/docs/tutorials/customizing-environments#adding-shell-aliases"
anchor: "adding-shell-aliases"
terms: ["adding","shell","aliases","explains","defining","profile","section","must","subsection","matching","since","alias","syntax","specific","example","creates","builds","program","release","mode","copies","personal","directory","fish","install","cargo","build","target","mycli","home","flox","activate","path","like","anywhere","system","also","config","file","might"]
hash: "6528b1e3e46519b46074129f29e4a914d33a2fea424ac95e77b1880b89e24124"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[profile]\nfish = '''\n    alias install-bin \"cargo build --release \u0026\u0026 cp $PWD/target/release/mycli $HOME/bin/mycli\"\n'''","chunkId":"tutorials/customizing-environments#adding-shell-aliases"},{"kind":"code","literal":"$ flox activate\n...\n$ install-bin\n...\n$ ls $HOME/bin\nmycli","chunkId":"tutorials/customizing-environments#adding-shell-aliases"},{"kind":"code","literal":"mycli","chunkId":"tutorials/customizing-environments#adding-shell-aliases"},{"kind":"code","literal":"$HOME/bin","chunkId":"tutorials/customizing-environments#adding-shell-aliases"},{"kind":"code","literal":"PATH","chunkId":"tutorials/customizing-environments#adding-shell-aliases"},{"kind":"code","literal":"[profile]","chunkId":"tutorials/customizing-environments#adding-shell-aliases"},{"kind":"code","literal":"profile.fish","chunkId":"tutorials/customizing-environments#adding-shell-aliases"},{"kind":"code","literal":"install-bin","chunkId":"tutorials/customizing-environments#adding-shell-aliases"},{"kind":"value","literal":"i.e","chunkId":"tutorials/customizing-environments#adding-shell-aliases"}]
sources: [{"chunkId":"tutorials/customizing-environments#adding-shell-aliases","url":"/docs/tutorials/customizing-environments#adding-shell-aliases","anchor":"adding-shell-aliases"}]
---

Explains defining shell aliases in the profile section, which must go in the subsection matching your shell since alias syntax is shell-specific. The example creates an alias that builds the program in release mode and copies it into a personal bin directory.
