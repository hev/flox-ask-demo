---
id: "tutorials/ci-cd#circleci"
title: "Running Flox in CI/CD"
heading: "CircleCI"
group: "Tutorials"
order: 682
url: "/docs/tutorials/ci-cd#circleci"
anchor: "circleci"
terms: ["circleci","describes","flox","offering","separate","install","activate","steps","fetches","options","pick","channel","specific","version","runs","command","inside","environment","orbs","jobs","build","machine","image","ubuntu","2204","current","checkout","github","there","helps","similar","actions","step","here","example","workflow","installs","latest","change","allow"]
hash: "2885f59e2901ca2ec785ffba80975a8087288a2614adb1672130743c8887548e"
mode: "agent-primary"
facts: [{"kind":"code","literal":"version: 2.1\n\norbs:\n  flox: flox/orb@1.0.0\n\njobs:\n  build:\n    machine:\n      image: ubuntu-2204:current\n    steps:\n      - checkout\n      - flox/install # (1)!\n      - flox/activate: # (2)!\n          command: \"npm run build\"","chunkId":"tutorials/ci-cd#circleci"},{"kind":"code","literal":"flox/install","chunkId":"tutorials/ci-cd#circleci"},{"kind":"code","literal":"flox/activate","chunkId":"tutorials/ci-cd#circleci"},{"kind":"code","literal":"npm run build","chunkId":"tutorials/ci-cd#circleci"},{"kind":"code","literal":"install","chunkId":"tutorials/ci-cd#circleci"},{"kind":"code","literal":"channel","chunkId":"tutorials/ci-cd#circleci"},{"kind":"code","literal":"version","chunkId":"tutorials/ci-cd#circleci"},{"kind":"code","literal":"activate","chunkId":"tutorials/ci-cd#circleci"},{"kind":"value","literal":"github.com","chunkId":"tutorials/ci-cd#circleci"}]
sources: [{"chunkId":"tutorials/ci-cd#circleci","url":"/docs/tutorials/ci-cd#circleci","anchor":"circleci"}]
---

Describes a Flox Orb for CircleCI offering separate install and activate steps, where install fetches Flox (with options to pick a channel or specific version) and activate runs a command inside the Flox environment.
