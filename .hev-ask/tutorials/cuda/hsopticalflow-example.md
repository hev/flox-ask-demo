---
id: "tutorials/cuda#hsopticalflow-example"
title: "Flox + CUDA"
heading: "HSOpticalFlow example"
group: "Tutorials"
order: 707
url: "/docs/tutorials/cuda#hsopticalflow-example"
anchor: "hsopticalflow-example"
terms: ["hsopticalflow","example","walks","through","building","running","headless","optical","flow","cuda","samples","repository","provided","flox","environment","includes","needed","dependencies","build","tools","compilers","graphics","libraries","toolkit","except","native","windows","examples","runs","only","wsl2","nvsci","cloning","activating","required","mkdir","cmake","make","starting","device"]
hash: "8842069d8710bb98304e0371719548b1e1a1be0e083b26cad679c75b80e8f58c"
mode: "agent-primary"
facts: [{"kind":"code","literal":"mkdir build \u0026\u0026 cd build \u0026\u0026 cmake .. \u0026\u0026 make -j8","chunkId":"tutorials/cuda#hsopticalflow-example"},{"kind":"code","literal":"$ ./HSOpticalFlow\nHSOpticalFlow Starting...\n\nGPU Device 0: \"Ada\" with compute capability 8.9\n\nLoading \"frame10.ppm\" ...\nLoading \"frame11.ppm\" ...\nComputing optical flow on CPU...\nComputing optical flow on GPU...\nL1 error : 0.044308","chunkId":"tutorials/cuda#hsopticalflow-example"},{"kind":"code","literal":"Samples/5_Domain_Specific/HSOpticalFlow","chunkId":"tutorials/cuda#hsopticalflow-example"},{"kind":"code","literal":"make -j8","chunkId":"tutorials/cuda#hsopticalflow-example"},{"kind":"code","literal":"git clone","chunkId":"tutorials/cuda#hsopticalflow-example"},{"kind":"code","literal":"flox activate","chunkId":"tutorials/cuda#hsopticalflow-example"},{"kind":"code","literal":"mkdir build \u0026\u0026 ...","chunkId":"tutorials/cuda#hsopticalflow-example"}]
sources: [{"chunkId":"tutorials/cuda#hsopticalflow-example","url":"/docs/tutorials/cuda#hsopticalflow-example","anchor":"hsopticalflow-example"}]
---

Walks through building and running a headless optical-flow CUDA example from the samples repository. The provided Flox environment includes all needed dependencies (build tools, compilers, graphics libraries, and the CUDA Toolkit) except native-Windows examples (Flox runs on Windows only through WSL2) and the NvSci example; cloning and activating is all that is required.
