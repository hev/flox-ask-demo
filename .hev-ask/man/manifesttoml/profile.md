---
id: "man/manifesttoml#profile"
title: "manifest.toml"
heading: "profile"
group: "Manual"
order: 653
url: "/docs/man/manifesttoml#profile"
anchor: "profile"
terms: ["profile","documents","section","whose","scripts","sourced","shell","inherit","variables","vars","hook","sections","common","script","every","must","cross","compatible","followed","exactly","specific","aliases","prompt","configuration","already","active","environment","activated","place","command","propagate","subshells","echo","gettin","flox","here","bash","source","venv","activate"]
hash: "e034aeb0857463615e89020593104f00eed0fde320f05c1504be4547f62ec82e"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[profile]\ncommon = \"\"\"\n    echo \"it's gettin' flox in here\"\n\"\"\"\nbash = \"\"\"\n    source $venv_dir/bin/activate\n    alias foo=\"echo bar\"\n    set -o vi\n\"\"\"\nzsh = \"\"\"\n    source $venv_dir/bin/activate\n    alias foo=\"echo bar\"\n    bindkey -v\n\"\"\"\nfish = \"\"\"\n    source $venv_dir/bin/activate.fish\n    alias foo=\"echo bar\"\n    fish_vi_key_bindings\n\"\"\"","chunkId":"man/manifesttoml#profile"},{"kind":"code","literal":"[profile]","chunkId":"man/manifesttoml#profile"},{"kind":"code","literal":"[vars]","chunkId":"man/manifesttoml#profile"},{"kind":"code","literal":"[hook]","chunkId":"man/manifesttoml#profile"},{"kind":"code","literal":"profile.common","chunkId":"man/manifesttoml#profile"},{"kind":"code","literal":"profile.{bash,fish,tcsh,zsh}","chunkId":"man/manifesttoml#profile"},{"kind":"code","literal":"eval \"$(flox activate)\"","chunkId":"man/manifesttoml#profile"},{"kind":"code","literal":"flox activate -c CMD","chunkId":"man/manifesttoml#profile"}]
sources: [{"chunkId":"man/manifesttoml#profile","url":"/docs/man/manifesttoml#profile","anchor":"profile"}]
---

Documents the profile section whose scripts are sourced by your shell and inherit variables from the vars and hook sections: a common script sourced for every shell (which must be cross-shell compatible) followed by exactly one shell-specific script, used for aliases and prompt configuration, and re-run when an already-active environment is activated in-place or with a command so aliases propagate to subshells.
