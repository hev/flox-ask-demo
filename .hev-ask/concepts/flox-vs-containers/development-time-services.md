---
id: "concepts/flox-vs-containers#development-time-services"
title: "Flox vs. container workflows"
heading: "Development-time services"
group: "Concepts"
order: 41
url: "/docs/concepts/flox-vs-containers#development-time-services"
anchor: "development-time-services"
terms: ["development","time","services","compares","running","like","server","flox","install","service","package","define","manifest","section","port","mapping","needed","since","environments","aren","network","isolated","autostart","activation","containers","write","compose","file","maps","ports","start","separately","caddy","command","vars","var1","var2","version","image","latest"]
hash: "066b5bb3f2203b3d4a1e192f7747b3d00acf093d96e79c69ff28a4133b30775d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox install caddy","chunkId":"concepts/flox-vs-containers#development-time-services"},{"kind":"code","literal":"[services.server]\ncommand = \"caddy run\"\nvars.VAR1 = \"var1\"\nvars.VAR2 = \"var2\"","chunkId":"concepts/flox-vs-containers#development-time-services"},{"kind":"code","literal":"version: \"3.8\"\n\nservices:\n  caddy:\n    image: caddy:latest\n    container_name: caddy_server\n    ports:\n      - \"80:80\"\n      - \"443:443\"\n    environment:\n      - VAR1=var1\n      - VAR2=var2","chunkId":"concepts/flox-vs-containers#development-time-services"},{"kind":"code","literal":"flox services start","chunkId":"concepts/flox-vs-containers#development-time-services"},{"kind":"code","literal":"flox activate --start-services","chunkId":"concepts/flox-vs-containers#development-time-services"},{"kind":"code","literal":"docker-compose.yml","chunkId":"concepts/flox-vs-containers#development-time-services"},{"kind":"code","literal":"docker-compose up","chunkId":"concepts/flox-vs-containers#development-time-services"},{"kind":"value","literal":"e.g","chunkId":"concepts/flox-vs-containers#development-time-services"}]
sources: [{"chunkId":"concepts/flox-vs-containers#development-time-services","url":"/docs/concepts/flox-vs-containers#development-time-services","anchor":"development-time-services"}]
---

Compares running development services like a web server. In Flox you install the service package and define it in the manifest's services section, with no port mapping needed since environments aren't network-isolated, and can autostart it on activation; with containers you write a compose file that maps ports and start it separately.
