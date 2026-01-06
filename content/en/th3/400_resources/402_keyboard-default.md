---
title: "Keyboard default shortcuts"
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

Keyboard shortcuts are available from the application settings panel third tab. It help you check and manipulate keyboard driven actions within the application. Figure out the three dots menu aside of the Panel title with extra actions (<span class="ui_button">Reset</span>, <span class="ui_button">Edit</span> and <span class="ui_button">Load</span>). The <span class="ui_button">Edit</span> one opens system folder application to the localisation of the stored user setting `.json` file, allowing you to edit it outside of the application (at your own risks), save it for future uses or share it within your devices or with who you want.

The following list is showing the default keyboard shortcut settings.

{{< alert info >}}
Information

The <kbd>Shift</kbd> key is represented by an empty arrow pointing up on some keyboards: <kbd>
<b>&#x21E7;</b>
</kbd>. 

The <kbd>Ctrl</kbd> key is replaced by <kbd>Cmd</kbd> key on Mac keyboards.


{{< /alert>}}

  <table id="shortcutsTable" aria-describedby="shortcutsHelp">
    <thead>
      <tr>
        <th>Human description</th>
        <th>Key combination</th>
        <th>Action id</th>
        <th>Scope</th>
      </tr>
    </thead>
    <tbody>
      <!-- Filled by JavaScript -->
    </tbody>
  </table>

  <p id="shortcutsHelp">
    The table is built by merging keyboard defaults with the English localization
    entries under <code>settings.keyboard.list.*</code>.
  </p>

  <script>
    const DEFAULTS_URL =
      "https://raw.githubusercontent.com/edrlab/thorium-reader-doc/main/assets/data/defaults.json";
    const LOCALE_URL =
      "https://raw.githubusercontent.com/edrlab/thorium-reader/develop/src/resources/locales/en.json";

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
