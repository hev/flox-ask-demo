---
id: "tutorials/overriding-packages#publish-the-package"
title: "Using a newer version of a package"
heading: "Publish the package"
group: "Tutorials"
order: 790
url: "/docs/tutorials/overriding-packages#publish-the-package"
anchor: "publish-the-package"
terms: ["publish","package","describes","publishing","overridden","requires","configured","remote","tracked","files","committed","pushed","example","uses","current","directory","simplicity","recommends","real","others","reproduce","build","performs","clean","temporary","checkout","reproducibility","origin","commit","hello","override","push","main","flox","building","expression","mode","completed","published","successfully"]
hash: "bc6bfcedfa754611a7823d044cfe4ea09660c8e6f647d81d05e46b57281df4be"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ git remote add origin \"$PWD\"\n$ git add .\n$ git commit -m \"Add hello override\"\n$ git push origin main\n$ flox publish hello\nBuilding hello-2.12.2 in Nix expression mode\nCompleted build of hello-2.12.2 in Nix expression mode\n\n✔ Package published successfully.\n\nUse 'flox install myuser/hello' to install it.","chunkId":"tutorials/overriding-packages#publish-the-package"},{"kind":"code","literal":"flox publish","chunkId":"tutorials/overriding-packages#publish-the-package"},{"kind":"code","literal":"$PWD","chunkId":"tutorials/overriding-packages#publish-the-package"}]
sources: [{"chunkId":"tutorials/overriding-packages#publish-the-package","url":"/docs/tutorials/overriding-packages#publish-the-package","anchor":"publish-the-package"}]
---

Describes publishing the overridden package, which requires a configured git remote with all tracked files committed and pushed. The example uses the current directory as a remote for simplicity but recommends a real remote so others can reproduce the build; publishing performs a clean build from a temporary checkout for reproducibility.
