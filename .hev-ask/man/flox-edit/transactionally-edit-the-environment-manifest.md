---
id: "man/flox-edit#transactionally-edit-the-environment-manifest"
title: "flox edit"
heading: "Transactionally edit the environment manifest"
group: "Manual"
order: 440
url: "/docs/man/flox-edit#transactionally-edit-the-environment-manifest"
anchor: "transactionally-edit-the-environment-manifest"
terms: ["transactionally","edit","environment","manifest","explains","editing","opens","editor","chosen","variables","common","editors","path","supports","other","directory","environments","transactional","after","rebuilt","validate","failed","build","lets","keep","discard","renaming","operation","does","rebuild","file","flag","enables","interactive","replacement","visual","toml","default","invokes","copy"]
hash: "4e980ce4f3aa936d48bafc2755cee9c8962bfd68c0464bfde649ce0497458b10"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$EDITOR","chunkId":"man/flox-edit#transactionally-edit-the-environment-manifest"},{"kind":"code","literal":"$VISUAL","chunkId":"man/flox-edit#transactionally-edit-the-environment-manifest"},{"kind":"code","literal":"$PATH","chunkId":"man/flox-edit#transactionally-edit-the-environment-manifest"},{"kind":"code","literal":"-r","chunkId":"man/flox-edit#transactionally-edit-the-environment-manifest"},{"kind":"code","literal":"-d","chunkId":"man/flox-edit#transactionally-edit-the-environment-manifest"},{"kind":"code","literal":"manifest.toml(5)","chunkId":"man/flox-edit#transactionally-edit-the-environment-manifest"},{"kind":"code","literal":"-n","chunkId":"man/flox-edit#transactionally-edit-the-environment-manifest"},{"kind":"code","literal":"-f","chunkId":"man/flox-edit#transactionally-edit-the-environment-manifest"}]
sources: [{"chunkId":"man/flox-edit#transactionally-edit-the-environment-manifest","url":"/docs/man/flox-edit#transactionally-edit-the-environment-manifest","anchor":"transactionally-edit-the-environment-manifest"}]
---

Explains that editing opens the manifest in your editor (chosen from the editor variables or common editors on PATH), supports editing hub or other-directory environments, and is transactional: after editing the environment is rebuilt to validate it, a failed build lets you keep editing or discard, and renaming is the one operation that does not rebuild; a file flag enables non-interactive replacement.
