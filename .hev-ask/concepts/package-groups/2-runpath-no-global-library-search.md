---
id: "concepts/package-groups#2-runpath-no-global-library-search"
title: "Package Groups"
heading: "2. RUNPATH: No Global Library Search"
group: "Concepts"
order: 109
url: "/docs/concepts/package-groups#2-runpath-no-global-library-search"
anchor: "2-runpath-no-global-library-search"
terms: ["runpath","global","library","search","explains","second","property","underlying","coexistence","rather","finding","libraries","paths","injects","absolute","store","binary","link","time","every","loads","exact","versions","built","against","lets","different","packages","same","environment","simultaneously","notes","practical","difference","between","rpath","overriding","readelf","curl","grep"]
hash: "477fbe6f8a8c5a19b05b03a127a0b9f07d68baca6fa3ab4def51e0a920821f05"
mode: "agent-primary"
facts: [{"kind":"code","literal":"$ readelf -d /nix/store/...-curl-8.11.1/bin/curl | grep RUNPATH\n  RUNPATH  /nix/store/...-openssl-3.0.15/lib:/nix/store/...-zlib-1.3.1/lib:...","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"/usr/lib","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"LD_LIBRARY_PATH","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"ld-wrapper","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"RUNPATH","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"Package A","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"openssl-3.0.15","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"Package B","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"openssl-1.1.1","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"DT_RUNPATH","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"RPATH","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"DT_RPATH","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"ldd","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"},{"kind":"code","literal":"LD_DEBUG","chunkId":"concepts/package-groups#2-runpath-no-global-library-search"}]
sources: [{"chunkId":"concepts/package-groups#2-runpath-no-global-library-search","url":"/docs/concepts/package-groups#2-runpath-no-global-library-search","anchor":"2-runpath-no-global-library-search"}]
---

Explains the second Nix property underlying coexistence: rather than finding libraries via global search paths, Nix injects absolute store paths into each binary's RUNPATH at link time, so every binary loads the exact library versions it was built against. This lets different packages in the same environment use different versions of the same library simultaneously, and notes the practical difference between RUNPATH and RPATH for overriding.
