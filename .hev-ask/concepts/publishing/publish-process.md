---
id: "concepts/publishing#publish-process"
title: "Publishing"
heading: "Publish process"
group: "Concepts"
order: 146
url: "/docs/concepts/publishing#publish-process"
anchor: "publish-process"
terms: ["publish","process","describes","constraints","flox","imposes","reproducible","publishing","building","environment","must","repository","clean","tracked","files","defined","remote","current","revision","pushed","least","installed","package","during","clones","temporary","directory","runs","build","success","uploads","closure","metadata","catalog","locking","point","base","upstream","source","order"]
hash: "43d6f7733af095e6d48a6781f0dff9fd3519f50bd87d340340b02a2320bf422d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox publish","chunkId":"concepts/publishing#publish-process"},{"kind":"code","literal":"flox build","chunkId":"concepts/publishing#publish-process"}]
sources: [{"chunkId":"concepts/publishing#publish-process","url":"/docs/concepts/publishing#publish-process","anchor":"publish-process"}]
---

Describes the constraints Flox imposes for reproducible publishing: the building environment must be in a Git repository with clean tracked files, a defined remote with the current revision pushed, and at least one installed package. During publish the CLI clones the repository to a temporary directory, runs a clean build, and on success uploads the package, its closure, and its metadata to your Catalog, locking it to a point in the Base Catalog and an upstream source revision.
