---
title: Configuration minimale requise
description: ''
draft: false
weight: '390'
toc: false
---

Le support de la plateforme est fourni par Electron comme défini dans [le fichier Readme du dépôt GitHub d'Electron](https://github.com/electron/electron/blob/main/README.md#platform-support)

Chaque version d'Electron fournit des binaires pour macOS, Windows et Linux.

- macOS (Monterey  et versions ultérieures) : Electron fournit des binaires Intel et Apple Silicon / ARM 64 bits pour macOS.
- Windows (Windows 10 et versions ultérieures) : Electron fournit les binaires ia32 (x86), x64 (amd64) et arm64 pour Windows. La prise en charge de Windows sur ARM a été ajoutée dans Electron 5.0.8. La prise en charge de Windows 7, 8 et 8.1 a été supprimée dans Electron 23, conformément à la politique d'obsolescence de Windows de Chromium.
- Linux : les binaires pré-compilés d'Electron sont basés sur Ubuntu 20.04. Ils ont également été vérifiés pour fonctionner sur :
    - Ubuntu 18.04 et versions ultérieures
    - Fedora 32 et versions ultérieures
    - Debian 10 et plus récent

Thorium 3.0 présente des problèmes de mémoire sous Linux, comme documenté dans le numéro [2519](https://github.com/edrlab/thorium-reader/issues/2519)
