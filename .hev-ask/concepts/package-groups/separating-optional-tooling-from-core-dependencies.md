---
id: "concepts/package-groups#separating-optional-tooling-from-core-dependencies"
title: "Package Groups"
heading: "Separating Optional Tooling from Core Dependencies"
group: "Concepts"
order: 131
url: "/docs/concepts/package-groups#separating-optional-tooling-from-core-dependencies"
anchor: "separating-optional-tooling-from-core-dependencies"
terms: ["separating","optional","tooling","core","dependencies","practical","example","showing","isolate","version","insensitive","developer","tools","separate","group","constrain","sensitive","stack","stays","default","install","runtime","nodejs","path","python311","need","share","devtools","ripgrep","package","nodejs20"]
hash: "c963e99710dac6068091eb3fe9782afb4a18278aa437e0c2ca77c4317f24d838"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[install]\n# Core runtime — version-sensitive\nnodejs.pkg-path = \"nodejs_20\"\npython311.pkg-path = \"python311\"\n\n# Dev tools — version-insensitive, don't need to share a rev with core\nbat.pkg-path = \"bat\"\nbat.pkg-group = \"devtools\"\n\nripgrep.pkg-path = \"ripgrep\"\nripgrep.pkg-group = \"devtools\"\n\njq.pkg-path = \"jq\"\njq.pkg-group = \"devtools\"","chunkId":"concepts/package-groups#separating-optional-tooling-from-core-dependencies"}]
sources: [{"chunkId":"concepts/package-groups#separating-optional-tooling-from-core-dependencies","url":"/docs/concepts/package-groups#separating-optional-tooling-from-core-dependencies","anchor":"separating-optional-tooling-from-core-dependencies"}]
---

A practical example showing how to isolate version-insensitive developer tools into a separate group so they don't constrain the version-sensitive core stack, which stays in the default group.
