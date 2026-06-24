---
id: "concepts/services#stopping-services"
title: "Services"
heading: "Stopping services"
group: "Concepts"
order: 166
url: "/docs/concepts/services#stopping-services"
anchor: "stopping-services"
terms: ["stopping","services","explains","stop","automatically","last","running","activation","environment","terminates","multiple","activations","keep","alive","until","exit","also","manually","named","error","nonexistent","names","warning","service","already","stopped","flox","activate","means","single","shell","shut","down","similarly","more","shells","three","those","terminated","yourself"]
hash: "7a04d2f10fc1bc08a4a637561172eb88ce908c6ed1c5b357c99c49018168f401"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox activate -s","chunkId":"concepts/services#stopping-services"},{"kind":"code","literal":"flox activate","chunkId":"concepts/services#stopping-services"},{"kind":"code","literal":"flox services stop","chunkId":"concepts/services#stopping-services"}]
sources: [{"chunkId":"concepts/services#stopping-services","url":"/docs/concepts/services#stopping-services","anchor":"stopping-services"}]
---

Explains that services stop automatically when the last running activation of the environment terminates, so multiple activations keep services alive until all exit. You can also stop services manually for all or named services, with an error for nonexistent names and a warning if a service is already stopped.
