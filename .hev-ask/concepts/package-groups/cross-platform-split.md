---
id: "concepts/package-groups#cross-platform-split"
title: "Package Groups"
heading: "Cross-Platform Split"
group: "Concepts"
order: 119
url: "/docs/concepts/package-groups#cross-platform-split"
anchor: "cross-platform-split"
terms: ["cross","platform","split","practical","example","showing","specific","packages","such","cuda","available","only","linux","should","placed","their","group","systems","filter","prevent","resolution","failures","unsupported","platforms","like","macos","install","python3","path","python313full","torch","flox","python3packages","aarch64","python311packages","darwin","placing","prevents","x8664"]
hash: "05756c71eec11980419251eebe5e5022a9fb938aebdab734aeb34f6f195c3b3e"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[install]\npython3.pkg-path = \"python313Full\"\n\ntorch-cuda.pkg-path = \"flox-cuda/python3Packages.torch\"\ntorch-cuda.pkg-group = \"cuda\"\ntorch-cuda.systems = [\"x86_64-linux\", \"aarch64-linux\"]\n\ntorch-cpu.pkg-path = \"python311Packages.torch-bin\"\ntorch-cpu.pkg-group = \"cpu-ml\"\ntorch-cpu.systems = [\"aarch64-darwin\", \"x86_64-darwin\"]","chunkId":"concepts/package-groups#cross-platform-split"},{"kind":"code","literal":"systems","chunkId":"concepts/package-groups#cross-platform-split"}]
sources: [{"chunkId":"concepts/package-groups#cross-platform-split","url":"/docs/concepts/package-groups#cross-platform-split","anchor":"cross-platform-split"}]
---

A practical example showing that platform-specific packages (such as CUDA packages available only on Linux) should be placed in their own group with a systems filter to prevent resolution failures on unsupported platforms like macOS.
