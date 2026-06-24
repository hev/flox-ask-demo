---
id: "concepts/package-groups#resolving-constraints-too-tight-failures"
title: "Package Groups"
heading: "Resolving \"Constraints Too Tight\" Failures"
group: "Concepts"
order: 130
url: "/docs/concepts/package-groups#resolving-constraints-too-tight-failures"
anchor: "resolving-constraints-too-tight-failures"
terms: ["resolving","constraints","tight","failures","explains","failure","means","single","catalog","revision","satisfy","version","group","shows","splitting","conflicting","packages","separate","groups","resolves","independently","error","resolution","failed","toplevel","install","before","everything","fails","path","nodejs","after","split","node","within","nodejs20"]
hash: "e422ded6473bac352e0825416fefcb3bc27591c5dcea50da6e227007a0edc891"
mode: "agent-primary"
facts: [{"kind":"code","literal":"✘ ERROR: resolution failed: constraints for group 'toplevel' are too tight","chunkId":"concepts/package-groups#resolving-constraints-too-tight-failures"},{"kind":"code","literal":"[install]\n# Before: everything in toplevel, resolution fails\n# gcc.pkg-path = \"gcc\"\n# gcc.version = \"14.3.0\"\n# nodejs.pkg-path = \"nodejs_20\"\n# nodejs.version = \"20.11.0\"\n\n# After: split into groups, each resolves independently\ngcc.pkg-path = \"gcc\"\ngcc.version = \"14.3.0\"\n\nnodejs.pkg-path = \"nodejs_20\"\nnodejs.version = \"18.18.2\"\nnodejs.pkg-group = \"node\"","chunkId":"concepts/package-groups#resolving-constraints-too-tight-failures"}]
sources: [{"chunkId":"concepts/package-groups#resolving-constraints-too-tight-failures","url":"/docs/concepts/package-groups#resolving-constraints-too-tight-failures","anchor":"resolving-constraints-too-tight-failures"}]
---

Explains the constraints-too-tight failure, which means no single catalog revision can satisfy all version constraints in a group, and shows the fix of splitting the conflicting packages into separate groups so each resolves independently.
