---
id: "concepts/publishing#the-published-payload"
title: "Publishing"
heading: "The published payload"
group: "Concepts"
order: 148
url: "/docs/concepts/publishing#the-published-payload"
anchor: "the-published-payload"
terms: ["published","payload","explains","package","parts","metadata","uploaded","flox","servers","availability","search","show","install","itself","catalog","store","cache","packages","provided","default","organization","supply","compatible","complete","control","never","stored","consists","available","commands","effectively","provides","choose","provide","their","form","storage","provider","case","means"]
hash: "7fa184ccc2d232e6c3fd06ae4fa103dd2af1da5183062e888f867c24209a90f3"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox search","chunkId":"concepts/publishing#the-published-payload"},{"kind":"code","literal":"flox show","chunkId":"concepts/publishing#the-published-payload"},{"kind":"code","literal":"flox install","chunkId":"concepts/publishing#the-published-payload"}]
sources: [{"chunkId":"concepts/publishing#the-published-payload","url":"/docs/concepts/publishing#the-published-payload","anchor":"the-published-payload"}]
---

Explains that a published package has two parts: metadata uploaded to Flox servers so the CLI can see availability via search, show, and install; and the package itself uploaded to a Catalog Store (a cache for published packages, one provided by Flox by default). An organization can supply its own S3-compatible Catalog Store for complete control so packages are never stored by Flox.
