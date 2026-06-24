---
id: "man/flox-publish#options"
title: "flox publish"
heading: "OPTIONS"
group: "Manual"
order: 532
url: "/docs/man/flox-publish#options"
anchor: "options"
terms: ["options","documents","publish","package","target","organization","signing","private","needed","only","flox","catalog","stores","stability","flag","expression","builds","selects","curated","incompatible","manifest","build","toml","path","stable","toplevel","possible","values","keys","under","attribute","environment","specify","artifact","should","published","takes","precedence","default","value"]
hash: "36a6db93cb288278911ca30a33c4be5fc6d8d7ba4aa3af56ea4a84e553431a27"
mode: "agent-primary"
facts: [{"kind":"code","literal":"\u003cpackage\u003e","chunkId":"man/flox-publish#options"},{"kind":"code","literal":"build","chunkId":"man/flox-publish#options"},{"kind":"code","literal":"manifest.toml","chunkId":"man/flox-publish#options"},{"kind":"code","literal":"-o, --org \u003corg\u003e","chunkId":"man/flox-publish#options"},{"kind":"code","literal":"--signing-private-key \u003cpath\u003e","chunkId":"man/flox-publish#options"},{"kind":"code","literal":"publish.signing_private_key","chunkId":"man/flox-publish#options"},{"kind":"code","literal":"--stability \u003cstability\u003e","chunkId":"man/flox-publish#options"},{"kind":"code","literal":"\"stable\"","chunkId":"man/flox-publish#options"},{"kind":"code","literal":"toplevel","chunkId":"man/flox-publish#options"},{"kind":"code","literal":"--stability","chunkId":"man/flox-publish#options"},{"kind":"value","literal":"e.g","chunkId":"man/flox-publish#options"}]
sources: [{"chunkId":"man/flox-publish#options","url":"/docs/man/flox-publish#options","anchor":"options"}]
---

Documents the publish options for which package to publish, the target organization, a signing private key (needed only for non-Flox catalog stores), and a stability flag for Nix-expression builds that selects a curated package set (incompatible with manifest builds).
