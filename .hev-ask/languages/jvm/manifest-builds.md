---
id: "languages/jvm#manifest-builds"
title: "JVM"
heading: "Manifest builds"
group: "Languages"
order: 282
url: "/docs/languages/jvm#manifest-builds"
anchor: "manifest-builds"
terms: ["manifest","builds","package","application","flox","gradle","plugin","bundle","place","under","output","library","directory","generate","launcher","script","resolves","absolute","path","runtime","since","build","variable","unset","java","gradleup","example","shadowjar","shadow","though","number","systems","exist","ecosystem","core","building","artifact","looks","like","create"]
hash: "45dceb76c82f0bdc656610e56c57252ff0bb58f70cae1e57c7da98f5e13abf2c"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$out/lib/","chunkId":"languages/jvm#manifest-builds"},{"kind":"code","literal":"java -jar \u003cpath to jar\u003e","chunkId":"languages/jvm#manifest-builds"},{"kind":"code","literal":"\u003cpath to jar\u003e","chunkId":"languages/jvm#manifest-builds"},{"kind":"code","literal":"$out/lib","chunkId":"languages/jvm#manifest-builds"},{"kind":"code","literal":"$out","chunkId":"languages/jvm#manifest-builds"},{"kind":"code","literal":"pwd","chunkId":"languages/jvm#manifest-builds"},{"kind":"code","literal":"SCRIPT_DIR","chunkId":"languages/jvm#manifest-builds"},{"kind":"code","literal":"JAR_PATH","chunkId":"languages/jvm#manifest-builds"},{"kind":"value","literal":"gradle.org","chunkId":"languages/jvm#manifest-builds"},{"kind":"value","literal":"gradleup.com","chunkId":"languages/jvm#manifest-builds"}]
sources: [{"chunkId":"languages/jvm#manifest-builds","url":"/docs/languages/jvm#manifest-builds","anchor":"manifest-builds"}]
---

How to package a JVM application with Flox using Gradle and a fat-jar plugin: bundle the app into a jar, place it under the output library directory, and generate a launcher script that resolves the jar's absolute path at runtime since the build output variable is unset then.
