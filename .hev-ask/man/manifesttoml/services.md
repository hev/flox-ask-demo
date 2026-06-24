---
id: "man/manifesttoml#services"
title: "manifest.toml"
heading: "services"
group: "Manual"
order: 656
url: "/docs/man/manifesttoml#services"
anchor: "services"
terms: ["services","documents","section","describing","part","environment","such","server","database","packages","variables","table","named","service","descriptors","level","auto","start","option","options","command","specific","whether","spawns","daemon","shutdown","required","custom","systems","postgres","vars","pguser","myuser","pgpassword","super","secret","pgdatabase","mydb","pgport","9001"]
hash: "6e15325dad77a149c96447d9db10d4e41b8177691f039ee38737093e23f2f511"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[services.database]\ncommand = \"postgres start\"\nvars.PGUSER = \"myuser\"\nvars.PGPASSWORD = \"super-secret\"\nvars.PGDATABASE = \"mydb\"\nvars.PGPORT = \"9001\"","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"ServiceDescriptor ::= {\n  command    = STRING\n, vars       = null | Map[STRING, STRING]\n, is-daemon  = null | BOOL\n, shutdown   = null | Shutdown\n, systems    = null | [\u003cSTRING\u003e, ...]\n}\n\nShutdown ::= {\n  command = STRING\n}","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"[services]","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"[install]","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"[vars]","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"hook.on-activate","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"database","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"auto-start","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"flox activate","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"--no-start-services","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"command","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"vars","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"is-daemon","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"true","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"flox services status","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"shutdown.command","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"flox services stop","chunkId":"man/manifesttoml#services"},{"kind":"code","literal":"systems","chunkId":"man/manifesttoml#services"},{"kind":"value","literal":"e.g","chunkId":"man/manifesttoml#services"}]
sources: [{"chunkId":"man/manifesttoml#services","url":"/docs/man/manifesttoml#services","anchor":"services"}]
---

Documents the services section describing services to run as part of an environment (such as a web server or database) using packages and variables from the environment: a table of named service descriptors, the top-level auto-start option, and per-service options for the start command, service-specific variables, whether the service spawns a daemon (and why a shutdown command is then required), a custom shutdown command, and the systems to run on.
