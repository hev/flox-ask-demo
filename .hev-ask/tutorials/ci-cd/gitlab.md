---
id: "tutorials/ci-cd#gitlab"
title: "Running Flox in CI/CD"
heading: "GitLab"
group: "Tutorials"
order: 684
url: "/docs/tutorials/ci-cd#gitlab"
anchor: "gitlab"
terms: ["gitlab","explains","running","flox","pipelines","official","container","image","ships","preinstalled","activating","environment","command","inside","works","same","does","locally","build","stage","ghcr","latest","script","activate","pipeline","provides","access","full","looks","would","here","example","uses","comes","already","installed"]
hash: "99cbabfc12bd825d594dcb9537f5a621989b9b85a8e20e893af7c755e0ca44df"
mode: "agent-primary"
facts: [{"kind":"code","literal":"build:\n  stage: build\n  image: ghcr.io/flox/flox:latest # (1)!\n  script:\n    - flox activate -c \"npm run build\" # (2)!","chunkId":"tutorials/ci-cd#gitlab"},{"kind":"code","literal":"ghcr.io/flox/flox","chunkId":"tutorials/ci-cd#gitlab"},{"kind":"code","literal":"flox activate -c \"\u003cyour command\u003e\"","chunkId":"tutorials/ci-cd#gitlab"},{"kind":"code","literal":"npm run build","chunkId":"tutorials/ci-cd#gitlab"}]
sources: [{"chunkId":"tutorials/ci-cd#gitlab","url":"/docs/tutorials/ci-cd#gitlab","anchor":"gitlab"}]
---

Explains running Flox in GitLab pipelines by using the official Flox container image, which ships with the CLI preinstalled, so activating an environment and running a command inside the container works the same as it does locally.
