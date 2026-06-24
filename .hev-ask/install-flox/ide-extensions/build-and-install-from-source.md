---
id: "install-flox/ide-extensions#build-and-install-from-source"
title: "Extensions"
heading: "Build and install from source"
group: "Install Flox"
order: 251
url: "/docs/install-flox/ide-extensions#build-and-install-from-source"
anchor: "build-and-install-from-source"
terms: ["build","install","source","code","extension","manually","repository","inside","flox","environment","producing","installable","package","added","through","command","palette","editor","line","clone","https","github","vscode","checkout","activate","vsix","prefer","file","check","release","creates","project","directory","shift","macos","ctrl","linux","extensions","select","generated"]
hash: "d717c06ccb1ed1177329208a45204fb97b194adebc7d9982a7c1e5ab8f008a6c"
mode: "agent-primary"
facts: [{"kind":"code","literal":"git clone https://github.com/flox/flox-vscode.git\n    cd flox-vscode\n    git checkout v1.0.1","chunkId":"install-flox/ide-extensions#build-and-install-from-source"},{"kind":"code","literal":"flox activate\n    npm run package","chunkId":"install-flox/ide-extensions#build-and-install-from-source"},{"kind":"code","literal":"code --install-extension flox-*.vsix","chunkId":"install-flox/ide-extensions#build-and-install-from-source"},{"kind":"code","literal":".vsix","chunkId":"install-flox/ide-extensions#build-and-install-from-source"}]
sources: [{"chunkId":"install-flox/ide-extensions#build-and-install-from-source","url":"/docs/install-flox/ide-extensions#build-and-install-from-source","anchor":"build-and-install-from-source"}]
---

How to build the VS Code extension manually from its source repository inside a Flox environment, producing an installable extension package that can be added through the Command Palette or the editor's command line.
