---
title: "Atajos de teclado predeterminados"
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

Los atajos de teclado están disponibles en la tercera pestaña del panel de configuración de la aplicación. Le ayudan a comprobar y manipular las acciones controladas por el teclado dentro de la aplicación. Busque el menú de tres puntos situado junto al título del panel con acciones adicionales (<span class="ui_button">Restablecer</span>, <span class="ui_button">Editar</span> y <span class="ui_button">Cargar</span>). La opción <span class="ui_button">Editar</span> abre la aplicación de la carpeta del sistema en la ubicación del archivo `.json` de configuración del usuario almacenado, lo que le permite editarlo fuera de la aplicación (bajo su propia responsabilidad), guardarlo para usos futuros o compartirlo dentro de sus dispositivos o con quien desee.

La siguiente lista muestra la configuración predeterminada de los atajos de teclado.

{{< alert info >}}
Información

La tecla <kbd>Shift</kbd> se representa con una flecha vacía que apunta hacia arriba en algunos teclados: <kbd>
<b>&#x21E7;</b>
</kbd>. 

La tecla <kbd>Ctrl</kbd> se sustituye por la tecla <kbd>Cmd</kbd> en los teclados Mac.


{{< /alert>}}

  <table id="shortcutsTable" aria-describedby="shortcutsHelp">
    <thead>
      <tr>
        <th>Descripción humana</th>
        <th>Combinación de teclas</th>
        <th>ID de acción</th>
        <th>Ámbito</th>
      </tr>
    </thead>
    <tbody>
      <!-- Filled by JavaScript -->
    </tbody>
  </table>

  <p id="shortcutsHelp">
    La tabla se crea fusionando los valores predeterminados del teclado con las entradas de localización.
  </p>

  <script>
    const DEFAULTS_URL =
      "https://raw.githubusercontent.com/edrlab/thorium-reader-doc/main/assets/data/defaults.json";
    const LOCALE_URL =
      "https://raw.githubusercontent.com/edrlab/thorium-reader/develop/src/resources/locales/es.json";

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
