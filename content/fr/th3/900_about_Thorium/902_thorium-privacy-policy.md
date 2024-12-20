---
title: Politique de confidentialité de Thorium Reader
description: ''
draft: 'false'
images:
  - logo.png
weight: '100'
toc: 'false'
---

22 novembre 2022

## Propriétaire de l'application

Laboratoire Européen de Lecture Numérique 14 rue Alexandre Parodi 75010 Paris France

## Types de données collectées

L'application ne collecte pas de données personnelles de ses utilisateurs.

L'application envoie deux types de données non personnelles aux serveurs :

1/ Données d'utilisation génériques : une notification est envoyée à un serveur de télémétrie EDRLab à chaque démarrage de l'application. Ces informations sont uniquement destinées à l'analyse et ne sont pas accessibles par des tiers. Elles permettent d'obtenir des informations sur l'évolution du nombre d'installations de l'application par système d'exploitation, l'évolution des sessions d'utilisation et les principales locales utilisées.

Les paramètres d’une telle notification sont :

- un horodatage,
- la version de Thorium Reader,
- le système d'exploitation de l'appareil et sa version,
- les paramètres régionaux de l'application au moment de son démarrage,
- s'il s'agit du premier démarrage de Thorium Reader après une nouvelle installation.

L'adresse IP de l'appareil n'est pas stockée avec les informations ci-dessus.

Il n'est pas possible de se désinscrire de cette notification.

2/ Informations DRM LCP Readium : une notification est envoyée à un serveur LCP à chaque ouverture d'une publication protégée. Ceci est requis par la spécification LCP pour vérifier si la licence d'utilisation de la publication a été mise à jour. Il n'existe pas de serveur LCP centralisé, chaque serveur est exploité par le distributeur de la publication protégée acquise par l'utilisateur.

Les paramètres d’une telle notification sont :

- un identifiant d'appareil, généré automatiquement lors de l'installation de l'application.
- un nom d'appareil, généré automatiquement lors de l'installation de l'application.

La base de code de Thorium Reader est open source et peut donc être entièrement inspectée, à l'exception d'une petite bibliothèque logicielle utilisée comme noyau pour le Readium LCP DRM, qui ne stocke ni n'envoie aucune donnée.

## Mises à jour

Nous sommes susceptibles de modifier la présente politique de confidentialité de temps à autre. Nous vous en informerons en publiant la politique de confidentialité révisée sur cette page et la date à laquelle les dernières modifications ont été apportées sera indiquée en haut de la page.
