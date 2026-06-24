---
id: "imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration"
title: "GitLab CI"
heading: "GitLab runner configuration"
group: "Imageless Kubernetes"
order: 200
url: "/docs/imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration"
anchor: "gitlab-runner-configuration"
terms: ["gitlab","runner","configuration","explains","configuring","imageless","kubernetes","pods","adding","section","config","sets","flox","runtime","class","empty","container","image","allowed","default","annotations","notes","these","settings","start","skip","containers","init","deliver","code","script","build","toml","environment","exec","activate","mode","configure","runners","namespace"]
hash: "303fbb6e567e9ce0f24e8b1998662b9fdab50d625a2deb6ee6747ea367130c86"
mode: "agent-primary"
facts: [{"kind":"code","literal":"config.toml","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration"},{"kind":"code","literal":".gitlab-ci.yml","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration"},{"kind":"code","literal":"flox.dev/environment","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration"},{"kind":"code","literal":"flox.dev/skip-containers","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration"},{"kind":"code","literal":"flox.dev/skip-containers-exec","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration"},{"kind":"code","literal":"flox.dev/activate-mode","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration"},{"kind":"value","literal":"e.g","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration"}]
sources: [{"chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration","url":"/docs/imageless-kubernetes/examples/gitlab-ci#gitlab-runner-configuration","anchor":"gitlab-runner-configuration"}]
---

Explains configuring the GitLab runner to run Imageless Kubernetes pods by adding a Kubernetes section to the runner config that sets the Flox runtime class, an empty container image, and allowed and default Flox pod annotations. Notes these settings start all job pods on the Flox runtime with per-job annotations, and that skip-containers annotations let GitLab's init containers deliver code and the job script into the build container.
