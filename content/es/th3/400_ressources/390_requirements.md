---
title: Requisitos mínimos del sistema
description: ''
draft: 'false'
weight: '390'
toc: 'false'
---

El soporte de la plataforma lo proporciona Electron, tal como se define en el [archivo Readme del repositorio de Github de Electron.](https://github.com/electron/electron/blob/main/README.md#platform-support)

Cada versión de Electron proporciona binarios para macOS, Windows y Linux.

- macOS (Big Sur y superiores): Electron proporciona binarios Intel y Apple Silicon/ARM de 64 bits para macOS.
- Windows (Windows 10 y posteriores): Electron proporciona binarios ia32 (x86), x64 (amd64) y arm64 para Windows. La compatibilidad con Windows en ARM se agregó en Electron 5.0.8. La compatibilidad con Windows 7, 8 y 8.1 se eliminó en Electron 23, de acuerdo con la política de desuso de Windows de Chromium.
- Linux: Los binarios precompilados de Electron están compilados en Ubuntu 20.04. También se ha verificado que funcionan en:
    - Ubuntu 18.04 y posteriores
    - Fedora 32 y posteriores
    - Debian 10 y posteriores

Thorium 3.0 tiene problemas de memoria en Linux, como se documenta en el número [2519](https://github.com/edrlab/thorium-reader/issues/2519)
