---
id: "concepts/nix-expression-builds#example-building-a-third-party-project"
title: "Nix expression builds"
heading: "Example: Building a third-party project"
group: "Concepts"
order: 89
url: "/docs/concepts/nix-expression-builds#example-building-a-third-party-project"
anchor: "example-building-a-third-party-project"
terms: ["example","building","third","party","project","gives","expression","open","source","flox","catalog","fetching","github","vendoring","module","dependencies","running","build","packaging","resulting","binary","there","already","available","buildgomodule","fetchfromgithub","pname","quotes","version","owner","repo","manifest","examples","285aaa8334762f2006151b03208a51527ff762e9","hash","sha256","4backtyqsq0zhno1jxcta4761pv3rfhlsepvrwltsqq","sourceroot","name","vendorhash"]
hash: "8a3dccc0ad10c5ac1edd866240266caa2838947c31d8765b79e8a217ab085397"
mode: "agent-primary"
facts: [{"kind":"code","literal":"go.mod","chunkId":"concepts/nix-expression-builds#example-building-a-third-party-project"},{"kind":"code","literal":"go build","chunkId":"concepts/nix-expression-builds#example-building-a-third-party-project"}]
sources: [{"chunkId":"concepts/nix-expression-builds#example-building-a-third-party-project","url":"/docs/concepts/nix-expression-builds#example-building-a-third-party-project","anchor":"example-building-a-third-party-project"}]
---

Gives an example Nix expression for building an open-source Go project not yet in the Flox Catalog, fetching the source from GitHub, vendoring Go module dependencies, running the build, and packaging the resulting binary.
