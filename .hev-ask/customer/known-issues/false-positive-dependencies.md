---
id: "customer/known-issues#false-positive-dependencies"
title: "Known issues"
heading: "False positive dependencies"
group: "Customer"
order: 175
url: "/docs/customer/known-issues#false-positive-dependencies"
anchor: "false-positive-dependencies"
terms: ["false","positive","dependencies","describes","known","issue","missing","dependency","detection","produce","positives","example","compiler","embedding","path","binary","causing","spurious","claim","notes","mitigations","vary","language","such","flag","ecosystem","cautions","apparent","actually","real","runtime","only","triggered","certain","code","paths","diligence","needed","trimpath","currently"]
hash: "03fd325e059f7fbd86f3e7986e3cbfd758190675fce516671ab9b8224c525b96"
mode: "agent-primary"
facts: [{"kind":"code","literal":"-trimpath","chunkId":"customer/known-issues#false-positive-dependencies"}]
sources: [{"chunkId":"customer/known-issues#false-positive-dependencies","url":"/docs/customer/known-issues#false-positive-dependencies","anchor":"false-positive-dependencies"}]
---

Describes a known issue where missing-dependency detection can produce false positives, for example a compiler embedding its own path into a binary causing a spurious dependency claim. Notes mitigations vary by language (such as a compiler flag for one ecosystem) and cautions that an apparent false positive may actually be a real runtime dependency only triggered on certain code paths, so due diligence is needed.
