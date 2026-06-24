---
id: "tutorials/ci-cd#github-actions"
title: "Running Flox in CI/CD"
heading: "Github Actions"
group: "Tutorials"
order: 683
url: "/docs/tutorials/ci-cd#github-actions"
anchor: "github-actions"
terms: ["github","actions","covers","flox","install","action","adds","commands","yourself","activate","runs","given","command","inside","local","remote","floxhub","environment","still","requires","build","netlify","deploy","provides","different","workflow","installs","would","locally","some","point","typically","allows","skip","activating","simply","provide","like","note","required"]
hash: "ee2e7b47fe5fc9f43cee30c4c045707eaf905c41dfedb88a99c738716553bfcb"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox/install-flox-action","chunkId":"tutorials/ci-cd#github-actions"},{"kind":"code","literal":"flox activate -c \"\u003cyour command\u003e\"","chunkId":"tutorials/ci-cd#github-actions"},{"kind":"code","literal":"flox/activate-action","chunkId":"tutorials/ci-cd#github-actions"},{"kind":"code","literal":"npm run build","chunkId":"tutorials/ci-cd#github-actions"},{"kind":"code","literal":"netlify deploy","chunkId":"tutorials/ci-cd#github-actions"}]
sources: [{"chunkId":"tutorials/ci-cd#github-actions","url":"/docs/tutorials/ci-cd#github-actions","anchor":"github-actions"}]
---

Covers two GitHub Actions for Flox: an install action that adds the Flox CLI so you can run Flox commands yourself, and an activate action that runs a given command inside a local or remote FloxHub environment. The activate action still requires the install action.
