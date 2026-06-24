---
id: "concepts/package-groups#broken-packages-causing-silent-resolution-failures"
title: "Package Groups"
heading: "Broken Packages Causing Silent Resolution Failures"
group: "Concepts"
order: 116
url: "/docs/concepts/package-groups#broken-packages-causing-silent-resolution-failures"
anchor: "broken-packages-causing-silent-resolution-failures"
terms: ["broken","packages","causing","silent","resolution","failures","explains","flagged","nixpkgs","filtered","during","package","fails","resolve","considered","commit","bypass","allow","option","only","diagnostic","step","rather","permanent","options","true","expect","find","resolving","resolver","considering","filter","solution"]
hash: "dc44b8233df65e9ef241ac461e55fa0594c319e82ea718fbb2634a58994f6e0b"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[options]\nallow.broken = true","chunkId":"concepts/package-groups#broken-packages-causing-silent-resolution-failures"},{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#broken-packages-causing-silent-resolution-failures"}]
sources: [{"chunkId":"concepts/package-groups#broken-packages-causing-silent-resolution-failures","url":"/docs/concepts/package-groups#broken-packages-causing-silent-resolution-failures","anchor":"broken-packages-causing-silent-resolution-failures"}]
---

Explains that packages flagged broken in nixpkgs are filtered out during resolution, so a package that fails to resolve may be broken at the considered commit. You can bypass this with an allow-broken option, but only as a diagnostic step rather than a permanent fix.
