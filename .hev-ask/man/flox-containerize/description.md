---
id: "man/flox-containerize#description"
title: "flox containerize"
heading: "DESCRIPTION"
group: "Manual"
order: 402
url: "/docs/man/flox-containerize#description"
anchor: "description"
terms: ["description","explains","command","exports","environment","container","image","macos","supported","runtime","required","because","proxy","builds","notes","cached","volume","running","behaves","like","activating","interactively","launching","subshell","docker","podman","flox","containerize","activate","export","written","registry","file","another","process","note","exporting","requires","build","prompted"]
hash: "70c915d2f95582d6395487b84d85c0badcfa3c9067e6d18ff8ecf22201326f3f"
mode: "agent-primary"
facts: [{"kind":"code","literal":"docker","chunkId":"man/flox-containerize#description"},{"kind":"code","literal":"podman","chunkId":"man/flox-containerize#description"},{"kind":"code","literal":"flox-nix","chunkId":"man/flox-containerize#description"},{"kind":"code","literal":"flox containerize","chunkId":"man/flox-containerize#description"},{"kind":"code","literal":"docker volume rm flox-nix","chunkId":"man/flox-containerize#description"},{"kind":"code","literal":"podman volume rm flox-nix","chunkId":"man/flox-containerize#description"},{"kind":"code","literal":"flox activate","chunkId":"man/flox-containerize#description"},{"kind":"code","literal":"docker run -it \u003ccontainer id\u003e","chunkId":"man/flox-containerize#description"},{"kind":"code","literal":"docker run \u003ccontainer id\u003e","chunkId":"man/flox-containerize#description"},{"kind":"code","literal":"flox activate --","chunkId":"man/flox-containerize#description"}]
sources: [{"chunkId":"man/flox-containerize#description","url":"/docs/man/flox-containerize#description","anchor":"description"}]
---

Explains that the command exports an environment as a container image, that on macOS a supported runtime is required because a proxy container builds the image (with notes on a cached volume), and that running the container behaves like activating the environment, interactively launching a subshell or non-interactively running a command.
