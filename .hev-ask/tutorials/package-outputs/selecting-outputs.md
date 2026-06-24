---
id: "tutorials/package-outputs#selecting-outputs"
title: "Selecting package outputs"
heading: "Selecting outputs"
group: "Tutorials"
order: 797
url: "/docs/tutorials/package-outputs#selecting-outputs"
anchor: "selecting-outputs"
terms: ["selecting","outputs","describes","available","specific","version","manifest","recent","schema","field","installs","only","defaults","omitted","special","value","just","listed","given","list","also","chosen","install","time","caret","comma","syntax","currently","installing","package","curl","path","default","unspecified","installed","would","output","flox","prior","were"]
hash: "d709cad33039fbf95f136e19bc288e86b0f3e65096afc91f4e0035148160eac4"
mode: "agent-primary"
facts: [{"kind":"code","literal":"schema-version = \"1.10.0\"\n\n[install]\ncurl.pkg-path = \"curl\"\n# Default: `outputs` is unspecified, so only the default outputs are installed\n\n# Using this would install all of curl's outputs\n# curl.outputs = \"all\"\n\n# Using this would only install the \"bin\" output\n# curl.outputs = [ \"bin\" ]","chunkId":"tutorials/package-outputs#selecting-outputs"},{"kind":"code","literal":"flox install curl^bin,man,out","chunkId":"tutorials/package-outputs#selecting-outputs"},{"kind":"code","literal":"schema-version","chunkId":"tutorials/package-outputs#selecting-outputs"},{"kind":"code","literal":"version","chunkId":"tutorials/package-outputs#selecting-outputs"},{"kind":"code","literal":"outputs","chunkId":"tutorials/package-outputs#selecting-outputs"},{"kind":"code","literal":"\"all\"","chunkId":"tutorials/package-outputs#selecting-outputs"},{"kind":"code","literal":"[\"foo\", \"bar\"]","chunkId":"tutorials/package-outputs#selecting-outputs"},{"kind":"code","literal":"flox install","chunkId":"tutorials/package-outputs#selecting-outputs"},{"kind":"value","literal":"1.10.0","chunkId":"tutorials/package-outputs#selecting-outputs"}]
sources: [{"chunkId":"tutorials/package-outputs#selecting-outputs","url":"/docs/tutorials/package-outputs#selecting-outputs","anchor":"selecting-outputs"}]
---

Describes selecting outputs, available as of a specific CLI version using a manifest with a recent schema version. The manifest outputs field installs only the defaults when omitted, all outputs when set to a special value, or just the listed outputs when given a list; outputs can also be chosen at install time via a caret-and-comma syntax, currently only when installing a new package.
