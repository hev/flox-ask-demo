---
id: "concepts/package-groups#a-canonical-example"
title: "Package Groups"
heading: "A Canonical Example"
group: "Concepts"
order: 112
url: "/docs/concepts/package-groups#a-canonical-example"
anchor: "a-canonical-example"
terms: ["canonical","example","openssl","curl","show","flox","resolves","packages","same","group","against","catalog","revision","pinning","package","version","pulls","historically","compatible","versions","others","requiring","incompatible","historical","both","triggers","constraints","tight","error","resolved","isolating","install","path","resolution","failed","toplevel","edit","adjust","section","isolate"]
hash: "376b0398a676e4102faade13c46f684e843548106e46473a3fe5a2fab8772c69"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[install]\nopenssl.pkg-path = \"openssl\"\ncurl.pkg-path = \"curl\"","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"code","literal":"✘ ERROR: resolution failed: constraints for group 'toplevel' are too tight\n\n   Use 'flox edit' to adjust version constraints in the [install] section,\n   or isolate dependencies in a new group with '\u003cpkg\u003e.pkg-group = \"newgroup\"'","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"code","literal":"[install]\nopenssl.pkg-path = \"openssl\"\nopenssl.pkg-group = \"legacy\"\ncurl.pkg-path = \"curl\"","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"code","literal":"openssl","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"code","literal":"curl","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"code","literal":"nixpkgs","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"value","literal":"flox.dev","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"value","literal":"v3.6.1","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"value","literal":"v8.18.0","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"value","literal":"v1.1.1q","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"value","literal":"v7.84.0","chunkId":"concepts/package-groups#a-canonical-example"},{"kind":"value","literal":"v1.1","chunkId":"concepts/package-groups#a-canonical-example"}]
sources: [{"chunkId":"concepts/package-groups#a-canonical-example","url":"/docs/concepts/package-groups#a-canonical-example","anchor":"a-canonical-example"}]
---

A canonical example using openssl and curl to show how Flox resolves packages in the same group against the same catalog revision, how pinning one package's version pulls in historically compatible versions of the others, and how requiring incompatible historical versions of both triggers a constraints-too-tight error, resolved by isolating one package in its own group.
