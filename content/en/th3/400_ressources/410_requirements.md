---
title: "Minimum system requirements"
description: ""
draft: false
weight: 410
toc: false
---

Platform support is provided by Electron as defined in [Electron github repo Readme](https://github.com/electron/electron/blob/main/README.md#platform-support)

Each Electron release provides binaries for macOS, Windows, and Linux.

* macOS (Big Sur and up): Electron provides 64-bit Intel and Apple Silicon / ARM binaries for macOS.
* Windows (Windows 10 and up): Electron provides ia32 (x86), x64 (amd64), and arm64 binaries for Windows. Windows on ARM support was added in Electron 5.0.8. Support for Windows 7, 8 and 8.1 was removed in Electron 23, in line with Chromium's Windows deprecation policy.
* Linux: The prebuilt binaries of Electron are built on Ubuntu 20.04. They have also been verified to work on:
  * Ubuntu 18.04 and newer
  * Fedora 32 and newer
  * Debian 10 and newer

Thorium 3.0 has memories issues under Linux, as documented in Issue [2519](https://github.com/edrlab/thorium-reader/issues/2519) 