---
id: "concepts/activation#subshell"
title: "Activating environments"
heading: "Subshell"
group: "Concepts"
order: 11
url: "/docs/concepts/activation#subshell"
anchor: "subshell"
terms: ["subshell","describes","most","common","activation","method","pauses","existing","shell","places","configured","flox","exiting","resumes","original","shape","sequence","diagram","user","activate","work","exit","ctrl","already","mentioned","first","paused","once","exits","example","resumed","back","sequencediagram","usershell"]
hash: "e54aaf62e8ce996a2cf844ebbe16dc497b943a8143e456c2220a838187020e2d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"shape: sequence_diagram\nuser_shell: User shell\nsubshell: Subshell\n\nuser_shell -\u003e subshell: flox activate\nsubshell -\u003e subshell: do work in the subshell\nsubshell -\u003e user_shell: exit","chunkId":"concepts/activation#subshell"},{"kind":"code","literal":"exit","chunkId":"concepts/activation#subshell"},{"kind":"code","literal":"Ctrl-D","chunkId":"concepts/activation#subshell"}]
sources: [{"chunkId":"concepts/activation#subshell","url":"/docs/concepts/activation#subshell","anchor":"subshell"}]
---

Describes the most common activation method, which pauses your existing shell and places you in a new subshell configured by Flox; exiting the subshell resumes your original shell.
