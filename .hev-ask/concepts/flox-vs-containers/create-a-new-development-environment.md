---
id: "concepts/flox-vs-containers#create-a-new-development-environment"
title: "Flox vs. container workflows"
heading: "Create a new development environment"
group: "Concepts"
order: 40
url: "/docs/concepts/flox-vs-containers#create-a-new-development-environment"
anchor: "create-a-new-development-environment"
terms: ["create","development","environment","compares","starting","project","flox","initialization","creates","directory","immediately","usable","though","empty","extra","packages","while","container","path","starts","dockerfile","until","base","image","chosen","itself","introduces","variability","mkdir","myproject","init","touch","echo","ubuntu","noble","created","entered","point","enter","doesn"]
hash: "99db4002b8597fbd71c20265c059fff606fa1fdefccd0e3acd652779447d527c"
mode: "agent-primary"
facts: [{"kind":"code","literal":"mkdir myproject;\ncd myproject","chunkId":"concepts/flox-vs-containers#create-a-new-development-environment"},{"kind":"code","literal":"flox init","chunkId":"concepts/flox-vs-containers#create-a-new-development-environment"},{"kind":"code","literal":"touch Dockerfile","chunkId":"concepts/flox-vs-containers#create-a-new-development-environment"},{"kind":"code","literal":"echo \"FROM ubuntu:noble\" \u003e\u003e Dockerfile","chunkId":"concepts/flox-vs-containers#create-a-new-development-environment"},{"kind":"code","literal":"myproject","chunkId":"concepts/flox-vs-containers#create-a-new-development-environment"},{"kind":"code","literal":".flox","chunkId":"concepts/flox-vs-containers#create-a-new-development-environment"},{"kind":"code","literal":"Dockerfile","chunkId":"concepts/flox-vs-containers#create-a-new-development-environment"},{"kind":"code","literal":"FROM","chunkId":"concepts/flox-vs-containers#create-a-new-development-environment"}]
sources: [{"chunkId":"concepts/flox-vs-containers#create-a-new-development-environment","url":"/docs/concepts/flox-vs-containers#create-a-new-development-environment","anchor":"create-a-new-development-environment"}]
---

Compares starting a new project: Flox initialization creates an environment directory immediately usable (though empty of extra packages), while the container path starts with an empty Dockerfile that isn't usable until a base image is chosen, which itself introduces variability.
