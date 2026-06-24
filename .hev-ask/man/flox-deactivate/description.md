---
id: "man/flox-deactivate#description"
title: "flox deactivate"
heading: "DESCRIPTION"
group: "Manual"
order: 412
url: "/docs/man/flox-deactivate#description"
anchor: "description"
terms: ["description","explains","deactivation","undoes","innermost","active","environment","repeatable","layered","environments","running","deactivate","hook","restoring","touched","variables","shell","state","reverting","prompt","customizations","detaching","stopping","activation","started","services","last","detaches","flox","activate","profile","fpath","deactivates","current","reversing","changes","made","most","recently","activated"]
hash: "294d467372fa706edb8e2c662b45c35ead0b5350f6314af42f8f14b274106abe"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox-activate(1)","chunkId":"man/flox-deactivate#description"},{"kind":"code","literal":"flox deactivate","chunkId":"man/flox-deactivate#description"},{"kind":"code","literal":"profile.deactivate.${shell}","chunkId":"man/flox-deactivate#description"},{"kind":"code","literal":"FPATH","chunkId":"man/flox-deactivate#description"}]
sources: [{"chunkId":"man/flox-deactivate#description","url":"/docs/man/flox-deactivate#description","anchor":"description"}]
---

Explains that deactivation undoes the innermost active environment (repeatable for layered environments) by running the environment's deactivate hook, restoring touched environment variables and shell state, reverting prompt and shell customizations, and detaching the shell, stopping activation-started services when the last shell detaches.
