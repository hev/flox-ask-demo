---
id: "concepts/activation#hook-vs-profile-in-a-nutshell"
title: "Activating environments"
heading: "hook vs. profile in a nutshell"
group: "Concepts"
order: 8
url: "/docs/concepts/activation#hook-vs-profile-in-a-nutshell"
anchor: "hook-vs-profile-in-a-nutshell"
terms: ["hook","profile","nutshell","practical","guidance","choosing","between","scripts","always","runs","bash","single","syntax","compute","variables","define","functions","only","aliases","while","shell","specific","source","third","party","prefer","unless","need","external","common","export","value","activate","technical","detail","make","life","easier","comes","writing"]
hash: "7ffc02aa68bb9eb946913be5943e0ae78c0da0432efedb741c1e936d838fec8f"
mode: "agent-primary"
facts: [{"kind":"code","literal":"profile.common","chunkId":"concepts/activation#hook-vs-profile-in-a-nutshell"},{"kind":"code","literal":"export VAR=value","chunkId":"concepts/activation#hook-vs-profile-in-a-nutshell"},{"kind":"code","literal":"profile.bash","chunkId":"concepts/activation#hook-vs-profile-in-a-nutshell"},{"kind":"code","literal":"profile.zsh","chunkId":"concepts/activation#hook-vs-profile-in-a-nutshell"},{"kind":"code","literal":"activate","chunkId":"concepts/activation#hook-vs-profile-in-a-nutshell"},{"kind":"code","literal":"hook.on-activate","chunkId":"concepts/activation#hook-vs-profile-in-a-nutshell"},{"kind":"value","literal":"e.g","chunkId":"concepts/activation#hook-vs-profile-in-a-nutshell"}]
sources: [{"chunkId":"concepts/activation#hook-vs-profile-in-a-nutshell","url":"/docs/concepts/activation#hook-vs-profile-in-a-nutshell","anchor":"hook-vs-profile-in-a-nutshell"}]
---

Practical guidance on choosing between the hook and profile scripts. The hook always runs in Bash (single syntax, can compute variables, can define functions only for the hook, no aliases), while profile scripts are shell-specific, can define aliases and functions, and can source third-party scripts; prefer the hook unless you need shell-specific syntax, aliases, or to source external scripts.
