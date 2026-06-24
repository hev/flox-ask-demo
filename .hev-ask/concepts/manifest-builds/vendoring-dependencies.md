---
id: "concepts/manifest-builds#vendoring-dependencies"
title: "Manifest builds"
heading: "Vendoring dependencies"
group: "Concepts"
order: 85
url: "/docs/concepts/manifest-builds#vendoring-dependencies"
anchor: "vendoring-dependencies"
terms: ["vendoring","dependencies","explains","pure","builds","must","already","present","because","disallow","access","global","caches","linux","network","common","solution","multi","stage","build","impure","vendors","output","later","consumes","reference","syntax","illustrated","example","deps","command","mkdir","vendor","myproject","sandbox","name","many","language","ecosystems","rely"]
hash: "bdbbe5aff3014c69fa3182d21b427c5d2c693f775e965b45c99418736a7c5be3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.deps]\ncommand = '''\n  mkdir -p $out/etc\n  go mod vendor -o $out/etc/vendor\n'''\n\n[build.myproject]\ncommand = '''\n  cp -r ${deps}/etc/vendor ./vendor\n  go build\n'''\nsandbox = \"pure\"","chunkId":"concepts/manifest-builds#vendoring-dependencies"},{"kind":"code","literal":"${name}","chunkId":"concepts/manifest-builds#vendoring-dependencies"}]
sources: [{"chunkId":"concepts/manifest-builds#vendoring-dependencies","url":"/docs/concepts/manifest-builds#vendoring-dependencies","anchor":"vendoring-dependencies"}]
---

Explains that pure builds must already have all dependencies present because they disallow access to global caches and (on Linux) the network. A common solution is a multi-stage build where an impure stage vendors the dependencies into an output that a later pure stage consumes via build-reference syntax, illustrated with a Go example.
