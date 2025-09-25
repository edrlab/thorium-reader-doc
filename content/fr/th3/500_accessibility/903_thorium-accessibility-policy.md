---
title: "Politique d'accessibilité"
description: ""
draft: false
layout: single
weight: 904
toc: false
---
EDRLab est un laboratoire de développement à but non lucratif et place l'accessibilité au cœur de ses actions. Cela inclut le développement de Thorium Reader. 

Cependant, l’aspect central de l’innovation et de l’expérimentation de notre travail peut affecter l’accessibilité à certains moments. 
Les limitations de financement peuvent également affecter notre action et notre volonté d'offrir la meilleure expérience de lecture à tous les lecteurs.
Ce sont les principales raisons pour lesquelles nous ne pouvons pas, à l’heure actuelle, nous permettre un cycle complet de tests d’accessibilité à chaque version. 

Tous les bloqueurs identifiés sont informés publiquement et consultables via une étiquette dédiée [Accessibilité sur notre outil de suivi des problèmes](https://github.com/edrlab/thorium-reader/issues?q=is%3Aissue+is%3Aopen+label%3Aaccessibility) qui sont traités en priorité par l’équipe de développement. 

## comprendre tous les besoins de chaque utilisateur
Nous recueillons les commentaires sur les expériences des clients du point de vue de l'accessibilité via différents canaux : 
    *Développement [Issue tracker dédié Label Accessibility](https://github.com/edrlab/thorium-reader/issues?q=is%3Aissue+is%3Aopen+label%3Aaccessibility)
    *E-mail [formulaire de contact](https://www.edrlab.org/contact/)
*Commentaires individuels recueillis par nos [organisations membres dédiées au service des personnes handicapées](https://members.edrlab.org/categories/serving-persons-with-print-disabilities/) 

## Les fonctionnalités d'accessibilité du Thorium Reader sont informées

Lorsqu'une fonctionnalité d'accessibilité est introduite, nous rendons cette information publique via
*le journal des changements de version
*une courte mention sur la landing page du site
*répertorié pour référence sur ce site Web [section ressources, page accessibilité](../../400_resources/300_accessibility)
*toutes les explications liées à l'accessibilité sont disponibles dans la documentation, et non dans un chapitre ou un endroit séparé.

## Prise en charge des technologies d'assistance

Une attention particulière est portée aux accès non visuels via les lecteurs d'écran.
Dans la mesure du possible, nous avons l'intention de maintenir un chemin d'accès similaire entre l'accès visuel et non visuel. Chaque fois que cela est nécessaire, nous utilisons des technologies dédiées comme ARIA-Role.

Les nouvelles fonctionnalités sont testées avec des lecteurs d'écran.

## Tests d'accessibilité

    *Tests communautaires via [epubtest.org](https://epubtest.org/)