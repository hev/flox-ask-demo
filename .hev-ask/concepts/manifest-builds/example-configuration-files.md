---
id: "concepts/manifest-builds#example-configuration-files"
title: "Manifest builds"
heading: "Example: configuration files"
group: "Concepts"
order: 79
url: "/docs/concepts/manifest-builds#example-configuration-files"
anchor: "example-configuration-files"
terms: ["example","configuration","files","gives","build","package","shared","file","such","server","config","published","consumed","across","organization","since","environments","bundle","arbitrary","copies","output","directory","consuming","reference","environment","variable","nginx","command","mkdir","conf","flox","throughout","there","some","common","want","every","instance","include","always"]
hash: "63bfa62ca7fe3b8e06530d94cb931489fb19a120e9da77b55d799d71198feaee"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.nginx_config]\ncommand = '''\n  mkdir -p $out/etc\n  cp nginx.conf $out/etc/nginx.conf\n'''","chunkId":"concepts/manifest-builds#example-configuration-files"},{"kind":"code","literal":"$FLOX_ENV/etc/nginx.conf","chunkId":"concepts/manifest-builds#example-configuration-files"},{"kind":"value","literal":"e.g","chunkId":"concepts/manifest-builds#example-configuration-files"}]
sources: [{"chunkId":"concepts/manifest-builds#example-configuration-files","url":"/docs/concepts/manifest-builds#example-configuration-files","anchor":"example-configuration-files"}]
---

Gives an example of using a build to package a shared configuration file (such as a web server config) so it can be published and consumed across an organization, since environments can't bundle arbitrary files. The build copies the config into the output directory, and consuming environments reference it via an environment variable.
