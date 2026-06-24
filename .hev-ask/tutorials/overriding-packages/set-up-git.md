---
id: "tutorials/overriding-packages#set-up-git"
title: "Using a newer version of a package"
heading: "Set up Git"
group: "Tutorials"
order: 792
url: "/docs/tutorials/overriding-packages#set-up-git"
anchor: "set-up-git"
terms: ["notes","expression","builds","require","files","under","package","directory","tracked","initialize","repository","init","flox","pkgs"]
hash: "75badee3175b529aff17b451067ff9d07693ffa9d6cec463ee2a2d28a4a46877"
mode: "agent-primary"
facts: [{"kind":"code","literal":"git init\ngit add .","chunkId":"tutorials/overriding-packages#set-up-git"},{"kind":"code","literal":".flox/pkgs/","chunkId":"tutorials/overriding-packages#set-up-git"}]
sources: [{"chunkId":"tutorials/overriding-packages#set-up-git","url":"/docs/tutorials/overriding-packages#set-up-git","anchor":"set-up-git"}]
---

Notes that Nix expression builds require all files under the package directory to be tracked by git, so you initialize a repository and add the files.
