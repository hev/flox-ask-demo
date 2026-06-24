---
id: "tutorials/cuda#pytorch"
title: "Flox + CUDA"
heading: "PyTorch"
group: "Tutorials"
order: 710
url: "/docs/tutorials/cuda#pytorch"
anchor: "pytorch"
terms: ["pytorch","demonstrates","package","depending","cuda","installed","acceleration","automatically","enabled","building","mnist","example","scratch","environment","initialization","decline","suggested","packages","instead","install","accelerated","variants","confirm","detected","digit","classification","clone","https","github","examples","flox","init","python3","python3packages","torch","torchvision","only","following","systems","linux"]
hash: "fc096ea33bf610d876fed2e411956d860942a874fcf794a088a23dbb1ebcc9d7"
mode: "agent-primary"
facts: [{"kind":"code","literal":"git clone \u003chttps://github.com/pytorch/examples.git\u003e pytorch-examples\ncd pytorch-examples/mnist\nflox init","chunkId":"tutorials/cuda#pytorch"},{"kind":"code","literal":"$ flox install python3 flox-cuda/python3Packages.torch flox-cuda/python3Packages.torchvision\n✔ 'python3' installed to environment 'mnist'\n! 'torch' installed only for the following systems: x86_64-linux, aarch64-linux\n! 'torchvision' installed only for the following systems: x86_64-linux","chunkId":"tutorials/cuda#pytorch"},{"kind":"code","literal":"$ flox activate\n$ python -c \"import torch; print(torch.cuda.is_available())\"\nTrue","chunkId":"tutorials/cuda#pytorch"},{"kind":"code","literal":"mnist","chunkId":"tutorials/cuda#pytorch"},{"kind":"value","literal":"github.com","chunkId":"tutorials/cuda#pytorch"}]
sources: [{"chunkId":"tutorials/cuda#pytorch","url":"/docs/tutorials/cuda#pytorch","anchor":"pytorch"}]
---

Demonstrates that any package depending on CUDA can be installed with CUDA acceleration automatically enabled, building a PyTorch MNIST example from scratch. On environment initialization you decline the suggested packages to instead install CUDA-accelerated variants, then confirm CUDA is detected and run the digit-classification example.
