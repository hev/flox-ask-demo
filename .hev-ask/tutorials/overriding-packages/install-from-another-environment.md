---
id: "tutorials/overriding-packages#install-from-another-environment"
title: "Using a newer version of a package"
heading: "Install from another environment"
group: "Tutorials"
order: 788
url: "/docs/tutorials/overriding-packages#install-from-another-environment"
anchor: "install-from-another-environment"
terms: ["install","another","environment","shows","once","published","overridden","package","installed","other","flox","verifies","version","mkdir","myproject","init","myuser","hello","activate","available","create","there","verify"]
hash: "07342033eac9404f2fd4a508e56141191d343ce575807f30baadf0ddb92aaad8"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ mkdir ~/myproject \u0026\u0026 cd ~/myproject\n$ flox init\n$ flox install myuser/hello\n✔ 'myuser/hello' installed to environment 'myproject'","chunkId":"tutorials/overriding-packages#install-from-another-environment"},{"kind":"code","literal":"$ flox activate -- hello --version\nhello (GNU Hello) 2.12.2","chunkId":"tutorials/overriding-packages#install-from-another-environment"}]
sources: [{"chunkId":"tutorials/overriding-packages#install-from-another-environment","url":"/docs/tutorials/overriding-packages#install-from-another-environment","anchor":"install-from-another-environment"}]
---

Shows that once published, the overridden package can be installed into any other Flox environment, then verifies the installed version is the overridden one.
