---
id: "concepts/activation#exec-command"
title: "Activating environments"
heading: "Exec Command"
group: "Concepts"
order: 6
url: "/docs/concepts/activation#exec-command"
anchor: "exec-command"
terms: ["exec","command","describes","activating","directly","without","intermediate","shell","similar","running","form","activate","skips","profile","scripts","syntax","chaining","builtins","aliases","those","features","aren","needed","faster","because","there","flox","cmd1","cmd2","final","environment","done","activates","runs","exits","unlike","supported","possible","chain","commands"]
hash: "64663c0e6ed881f48a636455d356e8f1708d4c24ec1b27e1c46a669092d0c485"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox activate -- \u003cyour command\u003e","chunkId":"concepts/activation#exec-command"},{"kind":"code","literal":"activate -c","chunkId":"concepts/activation#exec-command"},{"kind":"code","literal":"-c","chunkId":"concepts/activation#exec-command"},{"kind":"code","literal":"--","chunkId":"concepts/activation#exec-command"},{"kind":"code","literal":"[profile]","chunkId":"concepts/activation#exec-command"},{"kind":"code","literal":"cmd1 \u0026\u0026 cmd2","chunkId":"concepts/activation#exec-command"},{"kind":"value","literal":"e.g","chunkId":"concepts/activation#exec-command"}]
sources: [{"chunkId":"concepts/activation#exec-command","url":"/docs/concepts/activation#exec-command","anchor":"exec-command"}]
---

Describes activating by exec'ing a command directly without an intermediate shell. This is similar to running a command form of activate but skips profile scripts and shell syntax (no command chaining, builtins, or aliases); when those features aren't needed it is faster because there is no intermediate shell.
