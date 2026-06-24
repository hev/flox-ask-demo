---
id: "tutorials/build-and-publish#publish-the-package"
title: "Building and publishing packages"
heading: "Publish the package"
group: "Tutorials"
order: 680
url: "/docs/tutorials/build-and-publish#publish-the-package"
anchor: "publish-the-package"
terms: ["publish","package","flox","teams","paid","feature","describes","publishing","built","private","catalog","sharing","others","requires","creating","organization","reproducibility","requirements","environment","must","live","clean","repository","configured","remote","whose","current","revision","pushed","contain","least","performs","build","temporary","directory","myproject","hello","included","send","somewhere"]
hash: "faf44638ed9cd1e33369f977a3bf23be62f05195e83c64ead0b863e06b66d660"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox [myproject] $ flox publish hello","chunkId":"tutorials/build-and-publish#publish-the-package"},{"kind":"code","literal":"flox publish","chunkId":"tutorials/build-and-publish#publish-the-package"},{"kind":"code","literal":"go","chunkId":"tutorials/build-and-publish#publish-the-package"},{"kind":"code","literal":"hello","chunkId":"tutorials/build-and-publish#publish-the-package"}]
sources: [{"chunkId":"tutorials/build-and-publish#publish-the-package","url":"/docs/tutorials/build-and-publish#publish-the-package","anchor":"publish-the-package"}]
---

A Flox for Teams paid feature: describes publishing a built package to your private catalog, where sharing with others requires creating an organization. Publishing has reproducibility requirements: the environment must live in a clean git repository with a configured remote whose current revision is pushed, and the environment must contain at least one package. Publishing performs a clean build in a temporary directory.
