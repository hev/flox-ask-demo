---
id: "man/flox-containerize#examples"
title: "flox containerize"
heading: "EXAMPLES"
group: "Manual"
order: 404
url: "/docs/man/flox-containerize#examples"
anchor: "examples"
terms: ["examples","containerizing","environment","file","loading","runtime","piping","image","standard","output","running","container","interactively","single","command","tagging","flox","containerize","mycontainer","docker","load","through","stdout","path","init","install","hello","floxenv","world","name","create","specific","within","launch","subshell"]
hash: "040b542c1960bdae1949aa075c73cc8f910d56e3cebf81cfba7518be3df8d4c9"
mode: "agent-primary"
facts: [{"kind":"code","literal":"flox containerize -f ./mycontainer.tar \u0026\u0026 docker load -i ./mycontainer.tar","chunkId":"man/flox-containerize#examples"},{"kind":"code","literal":"$ flox containerize --runtime docker\n\n# or through stdout e.g. if `docker` is not in `PATH`:\n\n$ flox containerize -f - | /path/to/docker","chunkId":"man/flox-containerize#examples"},{"kind":"code","literal":"$ flox init\n$ flox install hello\n$ flox containerize -f - | docker load\n$ docker run --rm -it \u003ccontainer id\u003e\n[floxenv] $ hello\nHello, world!","chunkId":"man/flox-containerize#examples"},{"kind":"code","literal":"$ flox init\n$ flox install hello\n$ flox containerize -f - | docker load\n$ docker run \u003ccontainer id\u003e hello\nHello, world","chunkId":"man/flox-containerize#examples"},{"kind":"code","literal":"$ flox init\n$ flox install hello\n$ flox containerize --tag 'v1' -f - | docker load\n$ docker run --rm -it \u003ccontainer name\u003e:v1\n[floxenv] $ hello\nHello, world!","chunkId":"man/flox-containerize#examples"}]
sources: [{"chunkId":"man/flox-containerize#examples","url":"/docs/man/flox-containerize#examples","anchor":"examples"}]
---

Examples of containerizing an environment to a file and loading it into a runtime, piping the image to a runtime over standard output, running the container interactively or with a single command, and tagging the image.
