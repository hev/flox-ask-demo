---
id: "concepts/publishing#uploading-a-package"
title: "Publishing"
heading: "Uploading a package"
group: "Concepts"
order: 149
url: "/docs/concepts/publishing#uploading-a-package"
anchor: "uploading-a-package"
terms: ["uploading","package","explains","publish","command","uploads","built","build","published","target","name","listed","manifest","section","toml","mypkg","flox","allows","upload"]
hash: "56c163a2f73e2a345803f408c319994f505e862c03ea0c62c5984e498ccb1bbe"
mode: "agent-primary"
facts: [{"kind":"code","literal":"# manifest.toml\n[build.mypkg]\ncommand = '''\n  ...\n'''","chunkId":"concepts/publishing#uploading-a-package"},{"kind":"code","literal":"flox publish mypkg","chunkId":"concepts/publishing#uploading-a-package"},{"kind":"code","literal":"flox publish \u003cname\u003e","chunkId":"concepts/publishing#uploading-a-package"},{"kind":"code","literal":"flox build","chunkId":"concepts/publishing#uploading-a-package"},{"kind":"code","literal":"\u003cname\u003e","chunkId":"concepts/publishing#uploading-a-package"},{"kind":"code","literal":"build","chunkId":"concepts/publishing#uploading-a-package"}]
sources: [{"chunkId":"concepts/publishing#uploading-a-package","url":"/docs/concepts/publishing#uploading-a-package","anchor":"uploading-a-package"}]
---

Explains that the publish command uploads a package built by the build command, where the published target is the name of a build listed in the manifest's build section.
