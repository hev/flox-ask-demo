---
id: "concepts/package-groups#3-resolving-file-conflicts-with-priority-and-groups"
title: "Package Groups"
heading: "3. Resolving File Conflicts with Priority and Groups"
group: "Concepts"
order: 110
url: "/docs/concepts/package-groups#3-resolving-file-conflicts-with-priority-and-groups"
anchor: "3-resolving-file-conflicts-with-priority-and-groups"
terms: ["resolving","file","conflicts","priority","groups","practical","example","showing","resolve","packages","install","same","path","field","lower","numbers","default","while","also","placing","separate","different","revisions","unwrapped","group","libraries","avoid","version","files","control","package","wins","defaults","here","takes","precedence","overlapping"]
hash: "bb34c4aa7924717c7f85b3f8d85862983926de4026bdf7142b15999df22fc7d3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[install]\ngcc.pkg-path = \"gcc\"\n\ngcc-unwrapped.pkg-path = \"gcc-unwrapped\"\ngcc-unwrapped.priority = 6              # lower priority than default (5)\ngcc-unwrapped.pkg-group = \"libraries\"   # separate group to avoid version conflicts","chunkId":"concepts/package-groups#3-resolving-file-conflicts-with-priority-and-groups"},{"kind":"code","literal":"priority","chunkId":"concepts/package-groups#3-resolving-file-conflicts-with-priority-and-groups"},{"kind":"code","literal":"gcc","chunkId":"concepts/package-groups#3-resolving-file-conflicts-with-priority-and-groups"},{"kind":"code","literal":"gcc-unwrapped","chunkId":"concepts/package-groups#3-resolving-file-conflicts-with-priority-and-groups"}]
sources: [{"chunkId":"concepts/package-groups#3-resolving-file-conflicts-with-priority-and-groups","url":"/docs/concepts/package-groups#3-resolving-file-conflicts-with-priority-and-groups","anchor":"3-resolving-file-conflicts-with-priority-and-groups"}]
---

A practical example showing how to resolve file conflicts when two packages install to the same path using the priority field (lower numbers win, default 5), while also placing the packages in separate groups so they resolve from different revisions.
