---
id: "concepts/package-groups#1-splitting-dev-tools-from-runtime"
title: "Package Groups"
heading: "1. Splitting Dev Tools from Runtime"
group: "Concepts"
order: 106
url: "/docs/concepts/package-groups#1-splitting-dev-tools-from-runtime"
anchor: "1-splitting-dev-tools-from-runtime"
terms: ["splitting","tools","runtime","practical","example","showing","application","whose","packages","must","stay","version","coherent","default","group","while","linters","formatters","live","separate","development","resolve","independently","float","install","same","nodejs","path","nodejs20","python311","postgresql","postgresql16","redis","independent","resolution","prettier","nodepackages","devtools","shellcheck","nixfmt"]
hash: "c3559a9acb6e2be10d38441dca7695563e29118684adab3c2e9b86cd5d09a77c"
mode: "agent-primary"
facts: []
sources: [{"chunkId":"concepts/package-groups#1-splitting-dev-tools-from-runtime","url":"/docs/concepts/package-groups#1-splitting-dev-tools-from-runtime","anchor":"1-splitting-dev-tools-from-runtime"}]
---

A practical example showing a web application whose runtime packages must stay version-coherent in the default group while linters and formatters live in a separate development-tools group so they can resolve independently.
