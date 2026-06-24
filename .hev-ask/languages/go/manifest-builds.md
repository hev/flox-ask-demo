---
id: "languages/go#manifest-builds"
title: "Go"
heading: "Manifest builds"
group: "Languages"
order: 278
url: "/docs/languages/go#manifest-builds"
anchor: "manifest-builds"
terms: ["manifest","builds","build","projects","flox","including","copying","compiled","binary","output","directory","must","trim","embedded","paths","reproducibility","runtime","data","dependencies","http","vendor","modules","pure","network","isolated","multi","stage","myproject","command","gobin","install","trimpath","mkdir","iana","path","mailcap","tzdata","packages","deps","export"]
hash: "450d9bb055689296817b25e48dc0facc0f4503f66662c412003ebb40580cb0c5"
mode: "agent-primary"
facts: [{"kind":"code","literal":"[build.myproject]\ncommand = '''\n  GOBIN=$out/bin go install -trimpath\n'''","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"[build.myproject]\ncommand = '''\n  mkdir -p $out/bin\n  go build -trimpath\n  cp ./myproject $out/bin/myproject\n'''","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"[install]\niana-etc.pkg-path = \"iana-etc\"\nmailcap.pkg-path = \"mailcap\"\ntzdata.pkg-path = \"tzdata\"","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"runtime-packages = [\n  \"iana-etc\",\n  \"mailcap\",\n  \"tzdata\",\n]","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"[build.myproject-deps]\ncommand = '''\n  export GOMODCACHE=$out\n  go mod download -modcacherw\n'''\n\n[build.myproject]\ncommand = \"\"\"\n  export GOMODCACHE=${myproject-deps}\n  mkdir -p \"$out/bin\"\n  go build -trimpath -o $out/bin/myproject\n  chmod +x $out/bin/myproject\n\"\"\"\nsandbox = \"pure\"","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"$out","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"go build","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"-trimpath","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"net/http","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"iana-etc","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"mailcap","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"tzdata","chunkId":"languages/go#manifest-builds"},{"kind":"code","literal":"runtime-packages","chunkId":"languages/go#manifest-builds"},{"kind":"value","literal":"i.e","chunkId":"languages/go#manifest-builds"}]
sources: [{"chunkId":"languages/go#manifest-builds","url":"/docs/languages/go#manifest-builds","anchor":"manifest-builds"}]
---

How to build Go projects with Flox manifest builds, including copying the compiled binary into the output directory, why builds must trim embedded paths for reproducibility, the runtime data dependencies of net/http, and how to vendor modules in a pure (network-isolated) multi-stage build.
