---
id: "concepts/environments#environment-uses"
title: "Environments"
heading: "Environment uses"
group: "Concepts"
order: 32
url: "/docs/concepts/environments#environment-uses"
anchor: "environment-uses"
terms: ["environment","uses","distinguishes","main","kinds","environments","path","stored","local","directory","self","contained","shareable","version","control","projects","monorepo","subprojects","centrally","managed","floxhub","created","pushing","consumed","pulling","activating","remotely","versioned","generations","shared","base","quick","sharing","notes","copy","option","converts","back","flox","init"]
hash: "771236fecae8ac6cddebd99f44d79a873b4cd09f639d0c824c879485bcece2a3"
mode: "agent-primary"
facts: [{"kind":"code","literal":".flox","chunkId":"concepts/environments#environment-uses"},{"kind":"code","literal":"flox init","chunkId":"concepts/environments#environment-uses"},{"kind":"code","literal":"--dir/-d","chunkId":"concepts/environments#environment-uses"},{"kind":"code","literal":"flox push","chunkId":"concepts/environments#environment-uses"},{"kind":"code","literal":"flox pull ...","chunkId":"concepts/environments#environment-uses"},{"kind":"code","literal":"flox activate -r ...","chunkId":"concepts/environments#environment-uses"},{"kind":"code","literal":"flox pull --copy","chunkId":"concepts/environments#environment-uses"},{"kind":"code","literal":"flox pull","chunkId":"concepts/environments#environment-uses"}]
sources: [{"chunkId":"concepts/environments#environment-uses","url":"/docs/concepts/environments#environment-uses","anchor":"environment-uses"}]
---

Distinguishes the two main kinds of environments: path environments stored in a local directory (self-contained, shareable via version control, used for projects or monorepo subprojects) and centrally managed environments stored on FloxHub (created by pushing, consumed by pulling or activating remotely, versioned with generations, used for shared base environments and quick sharing). Notes pulling with a copy option converts a centrally managed environment back into a path environment.
