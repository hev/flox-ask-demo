---
id: "tutorials/default-environment#detached-and-directory-based-default-environments"
title: "The default environment"
heading: "Detached and directory based default environments"
group: "Tutorials"
order: 722
url: "/docs/tutorials/default-environment#detached-and-directory-based-default-environments"
anchor: "detached-and-directory-based-default-environments"
terms: ["detached","directory","based","default","environments","notes","because","ordinary","flox","environment","same","including","initializing","local","starting","floxhub","template","copy","adjusting","auto","activation","line","shell","config","accordingly","init","pull","owner","name","activate","youruser","since","normal","other","example","initialize","home","start","choose","automatically"]
hash: "90ef2ffce8f33c2504adce862afa75bad3c2dc7cc3bdc939841234daa4261ad8"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox init -d ~","chunkId":"tutorials/default-environment#detached-and-directory-based-default-environments"},{"kind":"code","literal":"flox pull --copy -d ~ owner/name","chunkId":"tutorials/default-environment#detached-and-directory-based-default-environments"},{"kind":"code","literal":"flox pull -d ~ owner/name","chunkId":"tutorials/default-environment#detached-and-directory-based-default-environments"},{"kind":"code","literal":"default","chunkId":"tutorials/default-environment#detached-and-directory-based-default-environments"},{"kind":"code","literal":"flox activate -r \u003cyouruser\u003e","chunkId":"tutorials/default-environment#detached-and-directory-based-default-environments"},{"kind":"code","literal":"flox activate -d ~","chunkId":"tutorials/default-environment#detached-and-directory-based-default-environments"},{"kind":"value","literal":"e.g","chunkId":"tutorials/default-environment#detached-and-directory-based-default-environments"}]
sources: [{"chunkId":"tutorials/default-environment#detached-and-directory-based-default-environments","url":"/docs/tutorials/default-environment#detached-and-directory-based-default-environments","anchor":"detached-and-directory-based-default-environments"}]
---

Notes that because default environments are ordinary Flox environments, you can use any environment the same way, including initializing a local one, starting from a FloxHub template copy, or using a directory-based FloxHub environment, adjusting the auto-activation line in your shell config accordingly.
