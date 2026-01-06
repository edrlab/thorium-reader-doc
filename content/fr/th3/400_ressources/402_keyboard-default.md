---
title: "Raccourcis clavier par défaut"
description: ""
draft: false
weight: 402
toc: false
---

<!DOCTYPE html>
<html lang="en">
<head>

  <style>
    body { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; margin: 2rem; line-height: 1.5; }
    h1 { font-size: 1.8rem; margin-bottom: 0.5rem; }
    p.lead { color: #444; margin-bottom: 1.5rem; }
    table { border-collapse: collapse; width: 100%; max-width: 1000px; }
    th, td { border: 1px solid #ccc; padding: 0.4rem 0.6rem; vertical-align: top; }
    th { background: #f5f5f5; text-align: left; }
    code { font-size: 0.9em; }
    .kbd { display: inline-block; border-radius: 4px; border: 1px solid #aaa; padding: 0.1rem 0.35rem; margin: 0 0.05rem; background: #fafafa; font-size: 0.9em; }
    small { color: #555; }
  </style>
</head>
<body>

Les raccourcis clavier sont disponibles dans le troisième onglet du panneau des paramètres de l'application. Ils vous aident à vérifier et à manipuler les actions commandées par le clavier dans l'application. Repérez le menu à trois points à côté du titre du panneau avec des actions supplémentaires (<span class="ui_button">Réinitialiser</span>, <span class="ui_button">Modifier</span> et <span class="ui_button">Charger</span>). L'option <span class="ui_button">Modifier</span> ouvre le dossier système de l'application à l'emplacement du fichier de paramètres utilisateur `.json` stocké, vous permettant de le modifier en dehors de l'application (à vos propres risques), de l'enregistrer pour une utilisation future ou de le partager avec vos appareils ou avec qui vous voulez.

La liste suivante présente les paramètres par défaut des raccourcis clavier.

{{< alert info >}}
Informations

La touche <kbd>Shift</kbd> est représentée par une flèche vide pointant vers le haut sur certains claviers : <kbd>
<b>&#x21E7;</b>
</kbd>. 

La touche <kbd>Ctrl</kbd> est remplacée par la touche <kbd>Cmd</kbd> sur les claviers Mac.


{{< /alert>}}

  <table id="shortcutsTable" aria-describedby="shortcutsHelp">
    <thead>
      <tr>
        <th>Description humaine</th>
        <th>Combinaison de touches</th>
        <th>ID de l'action</th>
        <th>Portée</th>
      </tr>
    </thead>
    <tbody>
      <!-- Filled by JavaScript -->
    </tbody>
  </table>

  <p id="shortcutsHelp">
        Le tableau est créé en fusionnant les valeurs par défaut du clavier avec les entrées de localisation.
  </p>

  <script>
    const DEFAULTS_URL =
      "https://raw.githubusercontent.com/edrlab/thorium-reader-doc/main/assets/data/defaults.json";
    const LOCALE_URL =
      "https://raw.githubusercontent.com/edrlab/thorium-reader/develop/src/resources/locales/fr.json";

    function formatKeyCombo(entry) {
      const parts = [];
      if (entry.control) parts.push("Ctrl");
      if (entry.meta) parts.push("Cmd");
      if (entry.alt) parts.push("Alt");
      if (entry.shift) parts.push("Shift");

      let key = entry.key || "";
      if (key.startsWith("Key")) {
        key = key.slice(3);
      }
      parts.push(key);

      return parts
        .filter(Boolean)
        .map(k => `<span class="kbd">${k}</span>`)
        .join(" + ");
    }

    function formatScope(scopeArr) {
      if (!Array.isArray(scopeArr)) return "";
      return scopeArr.join(", ");
    }

    async function loadShortcuts() {
      const tableBody = document.querySelector("#shortcutsTable tbody");
      tableBody.innerHTML = "<tr><td colspan='4'>Loading…</td></tr>";

      try {
        const [defaultsRes, localeRes] = await Promise.all([
          fetch(DEFAULTS_URL),
          fetch(LOCALE_URL)
        ]);

        if (!defaultsRes.ok) throw new Error("defaults.json HTTP " + defaultsRes.status);
        if (!localeRes.ok) throw new Error("en.json HTTP " + localeRes.status);

        const defaults = await defaultsRes.json();
        const locale = await localeRes.json();

        // Thorium stores keyboard labels under settings.keyboard.list.{ActionId}.{name,description}
        const kbList =
          locale?.settings?.keyboard?.list || {};

        const rows = Object.entries(defaults)
          .sort(([aId], [bId]) => aId.localeCompare(bId))
          .map(([id, entry]) => {
            const loc = kbList[id] || {};
            const name = loc.name || id;
            const description = loc.description || "";
            const combo = formatKeyCombo(entry);
            const scope = formatScope(entry.scope);

            return `
              <tr>
                <td>
                  <strong>${name}</strong><br>
                  <small>${description}</small>
                </td>
                <td>${combo}</td>
                <td><code>${id}</code></td>
                <td>${scope}</td>
              </tr>`;
          });

        tableBody.innerHTML = rows.join("");
      } catch (err) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="4">
              Error loading shortcuts: ${err.message}
            </td>
          </tr>`;
      }
    }

    loadShortcuts();
  </script>
</body>
</html>
