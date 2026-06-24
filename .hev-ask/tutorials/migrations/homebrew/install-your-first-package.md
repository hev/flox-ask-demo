---
id: "tutorials/migrations/homebrew#install-your-first-package"
title: "Homebrew"
heading: "Install your first package"
group: "Tutorials"
order: 761
url: "/docs/tutorials/migrations/homebrew#install-your-first-package"
anchor: "install-your-first-package"
terms: ["install","first","package","walks","through","installing","flox","prompts","create","default","environment","syncs","across","machines","floxhub","optionally","configures","shell","files","auto","activate","configured","behaves","much","like","homebrew","assuming","directory","without","creating","optional","manually","later","packages","must","installed","sync","would","pull","move"]
hash: "1f2f23f23e226982ec2249fbb3f30b793562f830340bae7a7e3bdddb2c5dd610"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox install jq","chunkId":"tutorials/migrations/homebrew#install-your-first-package"},{"kind":"code","literal":"% flox install jq\nPackages must be installed into a Flox environment.\nA default environment on FloxHub will sync across all your machines.\n\n! Would you like to pull or create your 'default' environment and install 'jq' to it?\n\u003e Yes\n  No\n[↑↓ to move, enter to select, type to filter]","chunkId":"tutorials/migrations/homebrew#install-your-first-package"},{"kind":"code","literal":"flox install","chunkId":"tutorials/migrations/homebrew#install-your-first-package"}]
sources: [{"chunkId":"tutorials/migrations/homebrew#install-your-first-package","url":"/docs/tutorials/migrations/homebrew#install-your-first-package","anchor":"install-your-first-package"}]
---

Walks through installing a first package, where Flox prompts to create a default environment (which syncs across machines via FloxHub) and optionally configures your shell RC files to auto-activate it. With a default environment configured, Flox behaves much like Homebrew, assuming the default environment when you install in a directory without its own environment; creating the default environment is optional and can be set up manually later.
