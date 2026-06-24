---
id: "concepts/compatibility"
title: "Compatibility policy"
heading: null
group: "Concepts"
order: 24
url: "/docs/concepts/compatibility"
anchor: null
terms: ["describes","flox","compatibility","policy","specific","release","became","schema","aware","detecting","backwards","compatible","manifest","changes","automatically","migrating","projects","aren","explains","move","numeric","version","field","tied","versions","gives","example","incompatible","change","package","outputs","manifests","migrated","latest","only","introduced","mypkg","hook","activate","rapidly"]
hash: "3cef7f5868c51072cd0eba6e335980737f5075177181970f4922800166ad2718"
mode: "agent-primary"
facts: [{"kind":"code","literal":"version","chunkId":"concepts/compatibility"},{"kind":"code","literal":"schema-version","chunkId":"concepts/compatibility"},{"kind":"code","literal":"schema-version = \"1.10.0\"","chunkId":"concepts/compatibility"},{"kind":"code","literal":"schema-version = \"X.Y.Z\"","chunkId":"concepts/compatibility"},{"kind":"code","literal":"outputs","chunkId":"concepts/compatibility"},{"kind":"code","literal":"version = 1","chunkId":"concepts/compatibility"},{"kind":"code","literal":"mypkg.outputs = \"all\"","chunkId":"concepts/compatibility"},{"kind":"code","literal":"hook.on-activate","chunkId":"concepts/compatibility"},{"kind":"value","literal":"1.10.0","chunkId":"concepts/compatibility"},{"kind":"value","literal":"X.Y.Z","chunkId":"concepts/compatibility"},{"kind":"value","literal":"1.9.1","chunkId":"concepts/compatibility"}]
sources: [{"chunkId":"concepts/compatibility","url":"/docs/concepts/compatibility","anchor":null}]
---

Describes Flox's compatibility policy: from a specific release the CLI became schema-aware, detecting backwards-compatible manifest changes and automatically migrating projects when changes aren't backwards compatible. Explains the move from a numeric manifest version field to a schema-version field tied to CLI versions, gives an example of a backwards-incompatible change (a new package outputs field), and explains that manifests are migrated to the latest schema only when an incompatible change is introduced.
