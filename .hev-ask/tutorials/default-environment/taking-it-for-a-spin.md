---
id: "tutorials/default-environment#taking-it-for-a-spin"
title: "The default environment"
heading: "Taking it for a spin"
group: "Tutorials"
order: 727
url: "/docs/tutorials/default-environment#taking-it-for-a-spin"
anchor: "taking-it-for-a-spin"
terms: ["taking","spin","demonstrates","default","environment","behaving","like","system","package","manager","moving","temporary","directory","local","installing","lands","available","everywhere","mktemp","flox","install","hello","installed","test","arbitrary","would","expect","matter","same","create","know","doesn","gets"]
hash: "4d7d313a9916fc4c7323d5b6c0df320f7301764ac01c19b5823cbfba26696021"
mode: "agent-primary"
facts: [{"kind":"code","literal":"cd $(mktemp -d)","chunkId":"tutorials/default-environment#taking-it-for-a-spin"},{"kind":"code","literal":"$ flox install hello\n✔ 'hello' installed to environment 'default'","chunkId":"tutorials/default-environment#taking-it-for-a-spin"},{"kind":"code","literal":"default","chunkId":"tutorials/default-environment#taking-it-for-a-spin"},{"kind":"code","literal":"apt install hello","chunkId":"tutorials/default-environment#taking-it-for-a-spin"}]
sources: [{"chunkId":"tutorials/default-environment#taking-it-for-a-spin","url":"/docs/tutorials/default-environment#taking-it-for-a-spin","anchor":"taking-it-for-a-spin"}]
---

Demonstrates the default environment behaving like a system package manager by moving to a temporary directory with no local environment and installing a package, which lands in the default environment and is then available everywhere.
