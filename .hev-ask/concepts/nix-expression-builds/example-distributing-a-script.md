---
id: "concepts/nix-expression-builds#example-distributing-a-script"
title: "Nix expression builds"
heading: "Example: Distributing a script"
group: "Concepts"
order: 91
url: "/docs/concepts/nix-expression-builds#example-distributing-a-script"
anchor: "example-distributing-a-script"
terms: ["example","distributing","script","gives","expression","simple","shell","depends","existing","packages","ensuring","known","versions","dependencies","available","runtime","while","automatically","adding","error","handling","options","validating","writeshellapplication","curl","name","runtimeinputs","text","icanhazip","bash","errexit","nounset","pipefail","shellcheck","distribute","dependency","ensure","version","package","also"]
hash: "83ad9e3c2d97b08ea7bc2eede70916209e1d41d5dc60a00736b57af80e994243"
mode: "agent-primary"
facts: [{"kind":"code","literal":"{writeShellApplication, curl}:\n\nwriteShellApplication {\n  name = \"my-ip\";\n  runtimeInputs = [ curl ];\n  text = ''\n    curl icanhazip.com\n  '';\n}","chunkId":"concepts/nix-expression-builds#example-distributing-a-script"},{"kind":"code","literal":"bash","chunkId":"concepts/nix-expression-builds#example-distributing-a-script"},{"kind":"code","literal":"curl","chunkId":"concepts/nix-expression-builds#example-distributing-a-script"},{"kind":"code","literal":"errexit","chunkId":"concepts/nix-expression-builds#example-distributing-a-script"},{"kind":"code","literal":"nounset","chunkId":"concepts/nix-expression-builds#example-distributing-a-script"},{"kind":"code","literal":"pipefail","chunkId":"concepts/nix-expression-builds#example-distributing-a-script"},{"kind":"code","literal":"shellcheck","chunkId":"concepts/nix-expression-builds#example-distributing-a-script"}]
sources: [{"chunkId":"concepts/nix-expression-builds#example-distributing-a-script","url":"/docs/concepts/nix-expression-builds#example-distributing-a-script","anchor":"example-distributing-a-script"}]
---

Gives an example Nix expression for distributing a simple shell script that depends on existing packages, ensuring known versions of its dependencies are available at runtime while automatically adding error-handling options and validating the script.
