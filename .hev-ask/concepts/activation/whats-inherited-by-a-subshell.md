---
id: "concepts/activation#whats-inherited-by-a-subshell"
title: "Activating environments"
heading: "What's inherited by a subshell"
group: "Concepts"
order: 13
url: "/docs/concepts/activation#whats-inherited-by-a-subshell"
anchor: "whats-inherited-by-a-subshell"
terms: ["inherited","subshell","explains","process","inherits","parent","environment","variables","shell","functions","aliases","because","user","defined","available","activated","flox","must","make","source","their","definitions","export","create","happens","default","meaning","passed","down","unless","special","options","like","bash","func","means","want","able","define"]
hash: "12958166c20eacc6923b0f51ba1e2e6e2fc8f5004c5136749353cd3370daf937"
mode: "agent-primary"
facts: [{"kind":"code","literal":"export -f","chunkId":"concepts/activation#whats-inherited-by-a-subshell"}]
sources: [{"chunkId":"concepts/activation#whats-inherited-by-a-subshell","url":"/docs/concepts/activation#whats-inherited-by-a-subshell","anchor":"whats-inherited-by-a-subshell"}]
---

Explains that a subshell is a new process that inherits its parent's environment variables but not the parent shell's functions and aliases. Because of this, for user-defined functions and aliases to be available in the activated environment, Flox must make your shell source their definitions.
