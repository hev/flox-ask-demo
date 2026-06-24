---
id: "imageless-kubernetes/config#authentication"
title: "Configuration"
heading: "Authentication"
group: "Imageless Kubernetes"
order: 191
url: "/docs/imageless-kubernetes/config#authentication"
anchor: "authentication"
terms: ["authentication","explains","imageless","kubernetes","runs","floxhub","environments","managed","flox","while","public","need","private","require","authenticating","credentials","describes","logging","generating","auth","token","creating","secret","mounting","known","path","notes","such","tokens","expire","after","month","machine","access","more","robust","alternative","minimum","version","kubectl"]
hash: "9b77b6697d7b29c93a4a646fdbfd3c5f6f58046ba3d0c3313819213958c0adcc"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox auth token \\\n  | kubectl create secret generic floxhub-token \\\n    --from-file=floxhub-token=/dev/stdin","chunkId":"imageless-kubernetes/config#authentication"},{"kind":"code","literal":"flox auth login","chunkId":"imageless-kubernetes/config#authentication"},{"kind":"code","literal":"flox auth token","chunkId":"imageless-kubernetes/config#authentication"},{"kind":"code","literal":"/var/run/secrets/flox.dev","chunkId":"imageless-kubernetes/config#authentication"},{"kind":"value","literal":"1.7.6","chunkId":"imageless-kubernetes/config#authentication"}]
sources: [{"chunkId":"imageless-kubernetes/config#authentication","url":"/docs/imageless-kubernetes/config#authentication","anchor":"authentication"}]
---

Explains that Imageless Kubernetes runs FloxHub environments managed by the Flox CLI, and that while public environments need no authentication, private environments require authenticating with your FloxHub credentials. Describes logging in via the CLI, generating an auth token, creating a Kubernetes secret from it, and mounting that secret into the pod at a known path, and notes such tokens expire after a month (with machine access tokens as a more robust alternative) and require a minimum CLI version.
