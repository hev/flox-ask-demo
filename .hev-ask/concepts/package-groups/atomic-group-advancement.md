---
id: "concepts/package-groups#atomic-group-advancement"
title: "Package Groups"
heading: "Atomic Group Advancement"
group: "Concepts"
order: 115
url: "/docs/concepts/package-groups#atomic-group-advancement"
anchor: "atomic-group-advancement"
terms: ["atomic","group","advancement","explains","upgrade","command","advances","groups","newer","catalog","revisions","atomically","moving","packages","together","same","revision","while","leaving","other","unchanged","individual","upgraded","install","only","sole","member","their","otherwise","must","whole","flox","cuda","toplevel","property","move","independently","advancing","doesn","change"]
hash: "6b89f13a2a34dbfd62330c6d0d7008f5ffda4df13811d4dbf84a5190a4c93337"
mode: "agent-primary"
facts: [{"kind":"code","literal":"# Upgrade all groups\nflox upgrade\n\n# Upgrade only the \"cuda\" group\nflox upgrade cuda\n\n# Upgrade only the \"toplevel\" group\nflox upgrade toplevel","chunkId":"concepts/package-groups#atomic-group-advancement"},{"kind":"code","literal":"flox upgrade","chunkId":"concepts/package-groups#atomic-group-advancement"},{"kind":"code","literal":"cuda","chunkId":"concepts/package-groups#atomic-group-advancement"},{"kind":"code","literal":"toplevel","chunkId":"concepts/package-groups#atomic-group-advancement"}]
sources: [{"chunkId":"concepts/package-groups#atomic-group-advancement","url":"/docs/concepts/package-groups#atomic-group-advancement","anchor":"atomic-group-advancement"}]
---

Explains that the upgrade command advances groups to newer catalog revisions atomically, moving all packages in a group together to the same new revision while leaving other groups unchanged. Individual packages can be upgraded by install ID only if they are the sole member of their group; otherwise you must upgrade the whole group.
