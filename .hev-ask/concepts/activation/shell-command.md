---
id: "concepts/activation#shell-command"
title: "Activating environments"
heading: "Shell Command"
group: "Concepts"
order: 10
url: "/docs/concepts/activation#shell-command"
anchor: "shell-command"
terms: ["shell","command","explains","running","single","context","environment","rather","entering","exiting","subshell","leaving","place","activation","lingering","form","starts","configured","runs","exits","automatically","back","flox","activate","shape","sequence","diagram","user","automatic","exit","source","sometimes","just","want","maybe","because","some","tools","available","aren"]
hash: "a80ce5558bcf18869d30a37958047adee1f34d37c15d65ac77731addf49dc199"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox activate -c \"\u003cyour command\u003e\"","chunkId":"concepts/activation#shell-command"},{"kind":"code","literal":"shape: sequence_diagram\nuser_shell: User shell\nsubshell: Subshell\nuser_shell -\u003e subshell: \"flox activate -c cmd\"\nsubshell -\u003e subshell: run \"cmd\"\nsubshell -\u003e user_shell: automatic exit\nuser_shell.\"Back to you\"","chunkId":"concepts/activation#shell-command"},{"kind":"code","literal":"flox activate","chunkId":"concepts/activation#shell-command"},{"kind":"code","literal":"exit","chunkId":"concepts/activation#shell-command"},{"kind":"code","literal":"source \u003c(flox activate)","chunkId":"concepts/activation#shell-command"}]
sources: [{"chunkId":"concepts/activation#shell-command","url":"/docs/concepts/activation#shell-command","anchor":"shell-command"}]
---

Explains running a single command in the context of an environment. Rather than entering and exiting a subshell or leaving an in-place activation lingering, the shell-command form starts a configured subshell, runs the command, and exits automatically back to your shell.
