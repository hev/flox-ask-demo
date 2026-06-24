---
id: "concepts/secrets-management"
title: "Secrets management"
heading: null
group: "Concepts"
order: 150
url: "/docs/concepts/secrets-management"
anchor: null
terms: ["introduces","secrets","management","common","need","authenticating","environment","external","services","without","hardcoding","manifest","risks","committing","exposing","shell","history","making","rotation","hard","dotenv","files","recommended","secure","pattern","keeps","secret","store","retrieves","just","time","during","activation","exporting","variables","live","only","while","active","toml"]
hash: "bf1a3d0df2acc8569aed79464398b66e4d620fca7ad7a8a6297822f2194b5653"
mode: "agent-primary"
facts: [{"kind":"code","literal":"manifest.toml","chunkId":"concepts/secrets-management"},{"kind":"code","literal":"flox activate","chunkId":"concepts/secrets-management"}]
sources: [{"chunkId":"concepts/secrets-management","url":"/docs/concepts/secrets-management","anchor":null}]
---

Introduces secrets management: a common need is authenticating an environment to external services without hardcoding secrets in the manifest (which risks committing them to Git, exposing them in shell history, and making rotation hard) or in dotenv files. The recommended secure pattern keeps secrets in a secret store and retrieves them just-in-time during activation, exporting them as environment variables that live only while the environment is active.
