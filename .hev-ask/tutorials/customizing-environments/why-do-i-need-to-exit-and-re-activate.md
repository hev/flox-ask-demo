---
id: "tutorials/customizing-environments#why-do-i-need-to-exit-and-re-activate"
title: "Customizing the shell environment"
heading: "Why do I need to exit and re-activate"
group: "Tutorials"
order: 718
url: "/docs/tutorials/customizing-environments#why-do-i-need-to-exit-and-re-activate"
anchor: "why-do-i-need-to-exit-and-re-activate"
terms: ["need","exit","activate","explains","changes","cannot","apply","automatically","require","exiting","activating","installing","package","takes","effect","immediately","editing","activation","hook","profile","vars","section","does","affect","current","session","because","those","scripts","only","during","depend","other","values","flox","install","time","detects","changed","manifest"]
hash: "c0a7e92242c52962c87bd6b0e84e9eb9bca4a6beb6f5f956035c16eafad2c2d4"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox install","chunkId":"tutorials/customizing-environments#why-do-i-need-to-exit-and-re-activate"},{"kind":"code","literal":"hook.on-activate","chunkId":"tutorials/customizing-environments#why-do-i-need-to-exit-and-re-activate"},{"kind":"code","literal":"[profile]","chunkId":"tutorials/customizing-environments#why-do-i-need-to-exit-and-re-activate"},{"kind":"code","literal":"[vars]","chunkId":"tutorials/customizing-environments#why-do-i-need-to-exit-and-re-activate"}]
sources: [{"chunkId":"tutorials/customizing-environments#why-do-i-need-to-exit-and-re-activate","url":"/docs/tutorials/customizing-environments#why-do-i-need-to-exit-and-re-activate","anchor":"why-do-i-need-to-exit-and-re-activate"}]
---

Explains that changes the CLI cannot apply automatically require exiting and re-activating: installing a package takes effect immediately, but editing the activation hook, the profile, or the vars section does not affect the current session because those scripts run only during activation and may depend on each other's values.
