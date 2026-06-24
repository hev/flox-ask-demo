---
id: "tutorials/migrations/homebrew#show-top-level-formulae-in-homebrew"
title: "Homebrew"
heading: "Show top-level formulae in Homebrew"
group: "Tutorials"
order: 766
url: "/docs/tutorials/migrations/homebrew#show-top-level-formulae-in-homebrew"
anchor: "show-top-level-formulae-in-homebrew"
terms: ["show","level","formulae","homebrew","recommends","identifying","explicitly","installed","opposed","dependencies","pulled","automatically","leaves","subcommand","produce","list","packages","migrate","brew","aider","awscli","ffmpeg","flake8","gnupg","graphviz","htop","isort","neovim","pkgconf","redo","ripgrep","tmux","tree","watch","wget","first","identify","recommend","easily","differentiate"]
hash: "d0b5da4ecbd988ac29ae93e9f8bf346cfbdc6febad74e4cd641f9bec5637a795"
mode: "agent-primary"
facts: [{"kind":"code","literal":"% brew leaves\naider\nawscli\nffmpeg\nflake8\ngh\ngnupg\ngo\ngraphviz\nhtop\nisort\njq\nneovim\npkgconf\nredo\nripgrep\ntmux\ntree\nwatch\nwget","chunkId":"tutorials/migrations/homebrew#show-top-level-formulae-in-homebrew"},{"kind":"code","literal":"brew leaves","chunkId":"tutorials/migrations/homebrew#show-top-level-formulae-in-homebrew"},{"kind":"code","literal":"leaves","chunkId":"tutorials/migrations/homebrew#show-top-level-formulae-in-homebrew"}]
sources: [{"chunkId":"tutorials/migrations/homebrew#show-top-level-formulae-in-homebrew","url":"/docs/tutorials/migrations/homebrew#show-top-level-formulae-in-homebrew","anchor":"show-top-level-formulae-in-homebrew"}]
---

Recommends identifying the formulae you explicitly installed in Homebrew (as opposed to dependencies pulled in automatically) using Homebrew's leaves subcommand, to produce the list of packages to migrate.
