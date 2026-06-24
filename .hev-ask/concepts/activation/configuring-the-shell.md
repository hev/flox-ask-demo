---
id: "concepts/activation#configuring-the-shell"
title: "Activating environments"
heading: "Configuring the shell"
group: "Concepts"
order: 4
url: "/docs/concepts/activation#configuring-the-shell"
anchor: "configuring-the-shell"
terms: ["configuring","shell","describes","activation","makes","manifest","packages","variables","available","carefully","setting","environment","such","path","several","less","familiar","ones","depending","invoked","flox","start","subshell","configure","current","place","exec","command","directly","most","common","form","starts","installed","take","precedence","being","prepended","activate","myenv"]
hash: "c115935f71ef0f5688cbfeaf7b313067abc007459cc89eb23f85e2ce741fc256"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ flox activate\nflox [myenv] $ # Now you can use your packages","chunkId":"concepts/activation#configuring-the-shell"},{"kind":"code","literal":"flox activate","chunkId":"concepts/activation#configuring-the-shell"},{"kind":"code","literal":"PATH","chunkId":"concepts/activation#configuring-the-shell"},{"kind":"code","literal":"ACLOCAL_PATH","chunkId":"concepts/activation#configuring-the-shell"},{"kind":"code","literal":"RUST_SRC_PATH","chunkId":"concepts/activation#configuring-the-shell"},{"kind":"code","literal":"myenv","chunkId":"concepts/activation#configuring-the-shell"},{"kind":"code","literal":"hello","chunkId":"concepts/activation#configuring-the-shell"},{"kind":"code","literal":"\u003cpath to myenv\u003e/.flox/run/\u003cyour system\u003e.myenv.dev/bin","chunkId":"concepts/activation#configuring-the-shell"}]
sources: [{"chunkId":"concepts/activation#configuring-the-shell","url":"/docs/concepts/activation#configuring-the-shell","anchor":"configuring-the-shell"}]
---

Describes how activation makes manifest packages and variables available by carefully setting environment variables such as PATH and several less-familiar ones. Depending on how activation is invoked Flox may start a subshell, configure the current shell in place, or exec a command directly; the most common form starts a new subshell, and installed packages take precedence by being prepended to PATH.
