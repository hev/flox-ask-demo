---
id: "concepts/package-groups#non-toplevel-packages-missing-during-builds"
title: "Package Groups"
heading: "Non-toplevel Packages Missing During Builds"
group: "Concepts"
order: 125
url: "/docs/concepts/package-groups#non-toplevel-packages-missing-during-builds"
anchor: "non-toplevel-packages-missing-during-builds"
terms: ["toplevel","packages","missing","during","builds","troubleshooting","entry","explaining","package","found","build","likely","explicit","group","rather","since","only","available","move","removing","field","duplicate","install","cmake","path","extra","tools","copy","seen","flox","symptom","installed","running","cause"]
hash: "18e36892f6f3f5badb53c91cdcc027e7c03412692c3d326b43cd0a6d0d60df01"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[install]\n# Available during build (toplevel)\ncmake.pkg-path = \"cmake\"\n\n# NOT available during build\ncmake-extra.pkg-path = \"cmake\"\ncmake-extra.pkg-group = \"tools\"          # this copy won't be seen by flox build","chunkId":"concepts/package-groups#non-toplevel-packages-missing-during-builds"},{"kind":"code","literal":"flox build","chunkId":"concepts/package-groups#non-toplevel-packages-missing-during-builds"},{"kind":"code","literal":"toplevel","chunkId":"concepts/package-groups#non-toplevel-packages-missing-during-builds"},{"kind":"code","literal":"pkg-group","chunkId":"concepts/package-groups#non-toplevel-packages-missing-during-builds"}]
sources: [{"chunkId":"concepts/package-groups#non-toplevel-packages-missing-during-builds","url":"/docs/concepts/package-groups#non-toplevel-packages-missing-during-builds","anchor":"non-toplevel-packages-missing-during-builds"}]
---

A troubleshooting entry explaining that a package not found during a build is likely in an explicit group rather than toplevel, since only toplevel packages are available to builds. The fix is to move it to toplevel by removing its group field or add a duplicate toplevel entry for the build.
