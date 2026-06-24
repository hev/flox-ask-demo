---
id: "concepts/services#defining-services"
title: "Services"
heading: "Defining services"
group: "Concepts"
order: 162
url: "/docs/concepts/services#defining-services"
anchor: "defining-services"
terms: ["defining","services","explains","defined","manifest","section","simple","schema","command","start","service","specific","variables","whether","spawns","background","process","describes","handling","themselves","marking","daemon","providing","shutdown","cautions","custom","replaces","manager","controlled","signal","based","offers","fallback","fails","kill","database","exec","postgres","pgdata","pgport"]
hash: "ad134385448c4067a62c06b7eb7e1ce82cf42d20bc88b4fb52a03079bf771b4d"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[services.database]\ncommand = \"exec postgres -D \\\"$PGDATA\\\" -p \\\"$PGPORT\\\"\"\nvars.PGUSER = \"myuser\"\nvars.PGPASSWORD = \"super-secret\"\nvars.PGDATABASE = \"mydb\"\nvars.PGPORT = \"9001\"","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"command = \"pg_ctl start -D \\\"$PGDATA\\\" -l \\\"$PGDATA/server.log\\\" -o \\\"-p $PGPORT\\\"\"\nis-daemon = true\nshutdown.command = \"pg_ctl stop -D \\\"$PGDATA\\\" -m fast\"\nvars.PGUSER = \"myuser\"\nvars.PGPASSWORD = \"super-secret\"\nvars.PGDATABASE = \"mydb\"\nvars.PGPORT = \"9001\"","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"[services]","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"command","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"vars","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"manifest-toml(1)","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"database","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"SIGTERM","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"is-daemon = true","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"shutdown.command","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"pg_ctl","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"exec postgres","chunkId":"concepts/services#defining-services"},{"kind":"code","literal":"SIGKILL","chunkId":"concepts/services#defining-services"}]
sources: [{"chunkId":"concepts/services#defining-services","url":"/docs/concepts/services#defining-services","anchor":"defining-services"}]
---

Explains that services are defined in the manifest's services section with a simple schema: a command to start the service, any service-specific variables, and whether the service spawns a background process. Describes handling services that background themselves by marking them as a daemon and providing a shutdown command, and cautions that defining a custom shutdown command replaces the manager's controlled signal-based shutdown and offers no fallback if it fails to kill the process.
