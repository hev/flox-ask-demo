---
id: "languages/ruby#manifest-builds"
title: "Ruby"
heading: "Manifest builds"
group: "Languages"
order: 300
url: "/docs/languages/ruby#manifest-builds"
anchor: "manifest-builds"
terms: ["manifest","builds","package","ruby","application","flox","because","interpreted","create","wrapper","script","runs","bundler","configure","vendor","gems","locally","copy","sources","launcher","output","plus","pure","network","isolated","multi","stage","build","bash","bundle","exec","myproject","command","dependencies","directories","mkdir","source","files","move","executable"]
hash: "c24463f04fbf7512b7a50ab4a41916adb98b77e2d1f61e1f18044b89ac7cfe27"
mode: "agent-primary"
facts: [{"kind":"code","literal":"#!/usr/bin/env bash\n\nbundle exec ruby app.rb","chunkId":"languages/ruby#manifest-builds"},{"kind":"code","literal":"[build.myproject]\ncommand = '''\n  # Vendor dependencies\n  bundle\n\n  # Create the output directories\n  mkdir -p $out/{lib,bin}\n\n  # Copy source files to $out/lib\n  cp -pr * $out/lib\n\n  # Move the executable script\n  mv $out/lib/myproject $out/bin/myproject\n'''","chunkId":"languages/ruby#manifest-builds"},{"kind":"code","literal":"bundle exec","chunkId":"languages/ruby#manifest-builds"},{"kind":"code","literal":"$GEM_HOME","chunkId":"languages/ruby#manifest-builds"},{"kind":"code","literal":"./vendor","chunkId":"languages/ruby#manifest-builds"},{"kind":"code","literal":"unset CPATH","chunkId":"languages/ruby#manifest-builds"},{"kind":"code","literal":"app.rb","chunkId":"languages/ruby#manifest-builds"},{"kind":"code","literal":"myproject","chunkId":"languages/ruby#manifest-builds"},{"kind":"value","literal":"hub.flox.dev","chunkId":"languages/ruby#manifest-builds"}]
sources: [{"chunkId":"languages/ruby#manifest-builds","url":"/docs/languages/ruby#manifest-builds","anchor":"manifest-builds"}]
---

How to package a Ruby application with Flox: because Ruby is interpreted, create a wrapper script that runs the app via the bundler, configure the bundler to vendor gems locally, and copy sources and the launcher into the output, plus how to vendor gems in a pure network-isolated multi-stage build.
