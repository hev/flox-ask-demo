---
id: "concepts/package-groups#only-toplevel-packages-are-available-during-flox-manifest-builds"
title: "Package Groups"
heading: "Only toplevel Packages Are Available During Flox Manifest Builds"
group: "Concepts"
order: 126
url: "/docs/concepts/package-groups#only-toplevel-packages-are-available-during-flox-manifest-builds"
anchor: "only-toplevel-packages-are-available-during-flox-manifest-builds"
terms: ["only","toplevel","packages","available","during","flox","manifest","builds","explains","group","build","dependencies","while","named","groups","design","nixpkgs","input","aligns","locked","revision","ensuring","time","compatible","environment","core","anything","needed","must","install","path","cmake","python311","ripgrep","tools","concept","accessible","commands","system","built"]
hash: "d28467d40393d4219c7c06ab82e3c49c5297f93253f03b00adb8f3630bbfce8a"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[install]\ngcc.pkg-path = \"gcc\"                     # ✓ available during build (toplevel)\ncmake.pkg-path = \"cmake\"                # ✓ available during build (toplevel)\npython311.pkg-path = \"python311\"         # ✓ available during build (toplevel)\n\nripgrep.pkg-path = \"ripgrep\"\nripgrep.pkg-group = \"tools\"             # ✗ NOT available during build","chunkId":"concepts/package-groups#only-toplevel-packages-are-available-during-flox-manifest-builds"},{"kind":"code","literal":"flox build","chunkId":"concepts/package-groups#only-toplevel-packages-are-available-during-flox-manifest-builds"},{"kind":"code","literal":"toplevel","chunkId":"concepts/package-groups#only-toplevel-packages-are-available-during-flox-manifest-builds"}]
sources: [{"chunkId":"concepts/package-groups#only-toplevel-packages-are-available-during-flox-manifest-builds","url":"/docs/concepts/package-groups#only-toplevel-packages-are-available-during-flox-manifest-builds","anchor":"only-toplevel-packages-are-available-during-flox-manifest-builds"}]
---

Explains that during manifest builds only packages in the toplevel group are available as build dependencies, while packages in named groups are not. This is by design so the build's nixpkgs input aligns with the toplevel group's locked revision, ensuring build-time dependencies are compatible with the environment's core packages; anything needed at build time must be in toplevel.
