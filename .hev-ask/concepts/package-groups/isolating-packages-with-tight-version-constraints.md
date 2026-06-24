---
id: "concepts/package-groups#isolating-packages-with-tight-version-constraints"
title: "Package Groups"
heading: "Isolating Packages with Tight Version Constraints"
group: "Concepts"
order: 122
url: "/docs/concepts/package-groups#isolating-packages-with-tight-version-constraints"
anchor: "isolating-packages-with-tight-version-constraints"
terms: ["isolating","packages","tight","version","constraints","practical","example","showing","isolate","package","requires","specific","conflicting","rest","environment","placing","group","resolve","against","older","revision","without","affecting","core","install","python3","path","python311full","toplevel","latest","available","torch","python311packages","isolated","need","nixpkgs","conflicts","versions","needed","other"]
hash: "4f489da1254a8d09cdd05c5acac74cc7e7e20a81f8178ad5397d1d217e5a1d38"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[install]\npython3.pkg-path = \"python311Full\"         # toplevel — latest available\n\ntorch.pkg-path = \"python311Packages.torch\"\ntorch.version = \"~2.7.0\"\ntorch.pkg-group = \"ml\"                  # isolated — may need an older nixpkgs rev","chunkId":"concepts/package-groups#isolating-packages-with-tight-version-constraints"}]
sources: [{"chunkId":"concepts/package-groups#isolating-packages-with-tight-version-constraints","url":"/docs/concepts/package-groups#isolating-packages-with-tight-version-constraints","anchor":"isolating-packages-with-tight-version-constraints"}]
---

A practical example showing how to isolate a package that requires a specific version conflicting with the rest of the environment by placing it in its own group, which may then resolve against an older revision without affecting the core packages.
