---
id: "tutorials/flox-and-systemd#constraints"
title: "Flox and systemd"
heading: "Constraints"
group: "Tutorials"
order: 729
url: "/docs/tutorials/flox-and-systemd#constraints"
anchor: "constraints"
terms: ["constraints","lists","systemd","services","invoke","flox","service","cannot","root","listen","privileged","numbered","ports","running","user","should","least","1000","logs","work","misbehave","process","forks","references","upstream","fixes","fork","issues","invokes","port","value","less","1024","function","properly","2e789b5","uidfix","details","9b1e750","forkfix"]
hash: "7e7b938ba055b9629b7f7a32574ebca7daaad00991093f1dc9f5a7947ccb5032"
mode: "agent-primary"
facts: []
sources: [{"chunkId":"tutorials/flox-and-systemd#constraints","url":"/docs/tutorials/flox-and-systemd#constraints","anchor":"constraints"}]
---

Lists constraints for systemd services that invoke Flox: the service cannot run as root, it cannot listen on privileged low-numbered ports, the running user's UID should be at least 1000 for logs to work, and logs may misbehave if the process forks; references upstream fixes for the UID and fork issues.
