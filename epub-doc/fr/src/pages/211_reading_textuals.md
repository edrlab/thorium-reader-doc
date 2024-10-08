---
title: Lire des contenus textuels
role: 
draft: false
---

## Lire des contenus textuels

Pour le contenu textuel, Thorium propose une lecture visuelle et une lecture audio.

### Paramètres de réglage du texte {#read_text_adjust}

Dans l'interface de lecture, utilisez le bouton `Preferences` ( <img src="../../resources/images/icons3/textarea-icon.svg) {.icons}): les options sont révélées.

{% info %}
Les paramètres de lecture peuvent être sauvegardés ou réinitialisés en utilisant les boutons <span class="ui_button">Enregistrer</span> et <span class="ui_button">Réinitialiser</span> situés dans le menu <span class="ui_button">Paramètres</span>, sous-menu <span class="ui_button">Configuration</span> de la fenêtre de lecture. 
{% enddiv %}

Les paramètres principaux sont disponibles pour les formats EPUB redistribuables, EPUB à mise en page fixe et PDF, mais ne permettent pas de personnaliser l'apparence. La plupart des EPUB à mise en page fixe permettent d'ouvrir la vue Image pour zoomer sur une page. Les PDF peuvent être agrandis à l'aide du sous-menu Zoom du panneau Préférences.

### Thème {#read_text_adjust_theme}

La couleur de l'arrière-plan et du premier plan peut être modifiée à l'aide de l'un des trois thèmes disponibles : Neutre, Sépia et Nuit.

### Texte {#read_text_adjust_font}

La taille de la police peut être augmentée ou diminuée à l'aide du curseur. La police peut également être modifiée. Les options disponibles sont les suivantes : Par défaut, Ancien style, Moderne, Sans, Humaniste, Lisible (Dyslexie), Double espace et Monospace.

En sélectionnant `...` vous pouvez saisir le nom de la police que vous souhaitez utiliser. Pour ce faire, la police doit être présente sur votre système d'exploitation et vous devez connaître son nom exact tel qu'il est défini pour le système d'exploitation.

{% info %}

#### Exemple 1 : Définition de Verdana comme police de lecture {#read_text_example_verdana}

1. Dans l'interface de lecture, allez dans le menu `Preference` puis `Text` .
2. Dans la liste déroulante, sélectionnez `...` .
3. Écrivez le mot *Verdana* dans le champ vide qui apparaît à côté de la liste déroulante.
4. Confirmez avec [Entrée]{.kbd}.

<img src="../../resources/images/local-fr/thorium-verdana.png" alt="Capture d'écran montrant le panneau Paramètres de texte avec Verdana configuré comme&lt;span translate=" /> police de lecture" {.icons}

#### Exemple 2 : Configuration de Luciole comme police de lecture {#read_text_example_luciole}

1. [Téléchargez et installez la police Luciole](https://www.luciole-vision.com/#download)
2. Dans l'interface de lecture, allez dans le menu `Preference` puis `Text` .
3. Dans la liste déroulante, sélectionnez `...` .
4. Écrivez le mot *Luciole* dans le champ vide qui apparaît à côté de la liste déroulante.
5. Confirmez avec [Entrée]{.kbd}.

<img src="../../resources/images/local-fr/thorium-luciole.png" alt="Capture d'écran montrant le panneau Paramètres de texte avec Luciole configuré comme&lt;span translate=" /> police de lecture" {.icons} {% enddiv %}

### Afficher {#read_text_display}

Vous pouvez choisir entre une mise en page avec défilement ou pagination, un alignement automatique ou justifié et automatique ou sur 1 ou 2 colonnes. Ici aussi, MathJax peut être activé, pour l'affichage d'expressions mathématiques.

### Espacement {#read_text_spaces}

Les marges, l'espacement des mots, l'espacement des lettres, l'espacement des paragraphes et l'interligne peuvent être ajustés.

### Lire à haute voix {#read_text_readaloud}

Fournit des options pour une `clean view` et épurée et la possibilité d'ignorer le contenu secondaire ( `skippability` ) qui peut inclure des notes de bas de page ou des barres latérales selon la sémantique indiquée lors de la production du livre numérique. `Split TTS` divisera le contenu par phrase pour une mise en évidence plus précise.

{% info %} Thorium utilise les voix du système d'exploitation de l'ordinateur, en combinaison avec les informations linguistiques fournies par le livre. Si vous rencontrez des problèmes, veuillez consulter l'entrée de la FAQ correspondante [Je ne peux pas sélectionner la voix adéquate pour la fonction de lecture à voix haute (TTS)](). {% enddiv %}

### Synthèse vocale (TTS) {#read_text_TTS}

La synthèse vocale est lancée à l'aide du bouton du haut-parleur au milieu de la barre d'outils, ou en utilisant le raccourci clavier [Ctrl]{.kbd} + [2]{.kbd}.

- La lecture et la pause peuvent être contrôlées avec le raccourci clavier [Ctrl]{.kbd} + [2]{.kbd}.

- La position de lecture peut être déplacée avec [Ctrl]{.kbd} + [1]{.kbd} et [Ctrl]{.kbd} + [3]{.kbd} pour respectivement précédent et suivant.

- Un contrôle de vitesse est disponible lorsque la lecture à voix haute est sélectionnée, avec une plage de x0,5 à x2.

- La phrase actuelle est surlignée en jaune clair et chaque mot prononcé est souligné en orange.

- Une vue alternative (simplifiée) de la publication est fournie via des options disponibles dans le menu `Settings / Readaloud` .

{% info %} Thorium utilise les voix du système d'exploitation de l'ordinateur, en combinaison avec les informations linguistiques fournies par le livre. Si vous rencontrez des problèmes, veuillez consulter l'entrée de la FAQ correspondante [Je ne peux pas sélectionner la voix adéquate pour la fonction de lecture à voix haute (TTS)](). {% enddiv %}
