---
id: "concepts/activation#timeline"
title: "Activating environments"
heading: "Timeline"
group: "Concepts"
order: 12
url: "/docs/concepts/activation#timeline"
anchor: "timeline"
terms: ["timeline","walks","step","through","subshell","activation","flox","execs","bundled","bash","script","keeping","same","process","exec","runs","setup","sets","manifest","variables","sources","hook","chosen","shell","profile","scripts","sourced","before","handing","control","back","notes","interactive","aliases","generally","expand","functions","defined","inherited","activate"]
hash: "aad47d1814d6b2aea993f218944df3dfe468b3e322080de601eaadcf4445af6f"
mode: "agent-primary"
facts: [{"kind":"code","literal":"exec","chunkId":"concepts/activation#timeline"},{"kind":"code","literal":"flox activate","chunkId":"concepts/activation#timeline"},{"kind":"code","literal":"FLOX_SHELL","chunkId":"concepts/activation#timeline"},{"kind":"code","literal":"hook.on-activate","chunkId":"concepts/activation#timeline"},{"kind":"code","literal":"source","chunkId":"concepts/activation#timeline"},{"kind":"code","literal":"[profile]","chunkId":"concepts/activation#timeline"}]
sources: [{"chunkId":"concepts/activation#timeline","url":"/docs/concepts/activation#timeline","anchor":"timeline"}]
---

Walks step by step through a subshell activation: Flox execs a bundled Bash script (keeping the same process ID via exec), runs setup, sets your manifest variables, sources the hook, then execs your chosen shell where profile scripts are sourced before handing control back. Notes that the Bash subshell is non-interactive (so aliases generally don't expand) and that functions/aliases defined in the hook are not inherited by your shell.
