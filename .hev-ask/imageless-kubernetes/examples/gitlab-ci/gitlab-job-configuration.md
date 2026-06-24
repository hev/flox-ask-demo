---
id: "imageless-kubernetes/examples/gitlab-ci#gitlab-job-configuration"
title: "GitLab CI"
heading: "GitLab job configuration"
group: "Imageless Kubernetes"
order: 199
url: "/docs/imageless-kubernetes/examples/gitlab-ci#gitlab-job-configuration"
anchor: "gitlab-job-configuration"
terms: ["gitlab","configuration","explains","configuring","supply","required","flox","environment","annotation","through","variables","file","value","names","floxhub","warns","mandatory","pods","fail","start","without","stages","hello","stage","kubernetes","annotations","script","once","configured","runner","need","desired","done","kubernetespodannotations1","name","note","optional","supplied"]
hash: "42b5d5af94d4aec3305ce198bd5b1b25e9766497eb4d47f5ae30457de3922597"
mode: "agent-primary"
facts: [{"kind":"code","literal":"stages:\n  - hello\n\nhello-job:\n  stage: hello\n  variables:\n    KUBERNETES_POD_ANNOTATIONS_1: \"flox.dev/environment=flox/hello\"\n  script:\n    - hello","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-job-configuration"},{"kind":"code","literal":"flox.dev/environment","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-job-configuration"},{"kind":"code","literal":".gitlab-ci.yml","chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-job-configuration"}]
sources: [{"chunkId":"imageless-kubernetes/examples/gitlab-ci#gitlab-job-configuration","url":"/docs/imageless-kubernetes/examples/gitlab-ci#gitlab-job-configuration","anchor":"gitlab-job-configuration"}]
---

Explains configuring a GitLab job to supply the required Flox environment annotation through pod annotation variables in the CI configuration file, where the annotation value names a FloxHub environment. Warns that the environment annotation is mandatory and pods fail to start without it.
