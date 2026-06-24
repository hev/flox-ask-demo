---
id: "concepts/composition#including-an-environment"
title: "Composing environments"
heading: "Including an environment"
group: "Concepts"
order: 28
url: "/docs/concepts/composition#including-an-environment"
anchor: "including-an-environment"
terms: ["including","environment","describes","included","environments","declared","manifest","include","table","descriptors","reference","local","directory","remote","floxhub","optionally","overriding","name","order","matters","because","later","override","earlier","ones","notes","composed","pushed","only","doesn","locally","specified","includedenvironments","includedescriptor","localincludedescriptor","remoteincludedescriptor","string","null","myenv","other"]
hash: "54ffbe07bebeb904ff4eecc035d46aebf394bbd31d70b1aa853cbe6f9c748639"
mode: "agent-primary"
facts: [{"kind":"code","literal":"IncludedEnvironments ::= [IncludeDescriptor]\nIncludeDescriptor ::= LocalIncludeDescriptor | RemoteIncludeDescriptor\nLocalIncludeDescriptor :: = {\n  dir  = STRING\n, name = null | STRING\n}\nRemoteIncludeDescriptor :: = {\n  remote = STRING\n, name   = null | STRING\n}","chunkId":"concepts/composition#including-an-environment"},{"kind":"code","literal":"[include]\nenvironments = [\n  # Include a local environment\n  { dir = \"../myenv\" },\n  # Override the name of an environment\n  { dir = \"../other_env\", name = \"other\" },\n  # Include a FloxHub environment\n  { remote = \"myuser/myenv\" },\n]","chunkId":"concepts/composition#including-an-environment"},{"kind":"code","literal":"include","chunkId":"concepts/composition#including-an-environment"},{"kind":"code","literal":"environments","chunkId":"concepts/composition#including-an-environment"},{"kind":"code","literal":"flox activate --dir","chunkId":"concepts/composition#including-an-environment"},{"kind":"code","literal":"dir","chunkId":"concepts/composition#including-an-environment"},{"kind":"code","literal":"name","chunkId":"concepts/composition#including-an-environment"},{"kind":"value","literal":"e.g","chunkId":"concepts/composition#including-an-environment"}]
sources: [{"chunkId":"concepts/composition#including-an-environment","url":"/docs/concepts/composition#including-an-environment","anchor":"including-an-environment"}]
---

Describes how included environments are declared in the manifest's include table as include descriptors that can reference a local directory or a remote (FloxHub) environment, optionally overriding the environment's name. Order matters because later environments override earlier ones, and notes a composed environment can be pushed to FloxHub only if it doesn't include locally-specified environments.
