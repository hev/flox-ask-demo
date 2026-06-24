---
id: "tutorials/cuda#official-cuda-examples"
title: "Flox + CUDA"
heading: "Official CUDA examples"
group: "Tutorials"
order: 709
url: "/docs/tutorials/cuda#official-cuda-examples"
anchor: "official-cuda-examples"
terms: ["official","cuda","examples","points","flox","fork","nvidia","samples","repository","branch","carrying","environment","dependencies","download","large","because","full","toolkit","catalog","split","components","applications","install","only","minimal","subset","need","project","different","version","clone","https","github","checkout","activate","nvcc","cudapackages","contains","variety","small"]
hash: "936955e6f3758c9da6906025b49c40ec6393dbaa8cdce1c8b08acf6aacd15b83"
mode: "agent-primary"
facts: [{"kind":"code","literal":"git clone https://github.com/flox/cuda-samples.git\ncd cuda-samples\ngit checkout flox-env\nflox activate","chunkId":"tutorials/cuda#official-cuda-examples"},{"kind":"code","literal":"NVIDIA/cuda-samples","chunkId":"tutorials/cuda#official-cuda-examples"},{"kind":"code","literal":"flox-env","chunkId":"tutorials/cuda#official-cuda-examples"},{"kind":"code","literal":"nvcc","chunkId":"tutorials/cuda#official-cuda-examples"},{"kind":"code","literal":"flox install flox-cuda/cudaPackages.cuda_nvcc","chunkId":"tutorials/cuda#official-cuda-examples"},{"kind":"value","literal":"github.com","chunkId":"tutorials/cuda#official-cuda-examples"}]
sources: [{"chunkId":"tutorials/cuda#official-cuda-examples","url":"/docs/tutorials/cuda#official-cuda-examples","anchor":"official-cuda-examples"}]
---

Points to the Flox fork of the NVIDIA CUDA samples repository, which has a branch carrying a Flox environment with dependencies for all examples. The download is large because the full CUDA Toolkit is large, but the toolkit in the catalog is split into components so applications can install only the minimal subset they need, and each project can use a different CUDA version.
