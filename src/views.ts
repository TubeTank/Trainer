import type { Kategorie, Lernkarte } from "./data/types";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderKategorienView(kategorien: Kategorie[], lernkarten: Lernkarte[]): string {
  const sortiert = [...kategorien].sort((a, b) => a.reihenfolge - b.reihenfolge);

  const items = sortiert
    .map((kategorie) => {
      const anzahl = lernkarten.filter((karte) => karte.kategorieId === kategorie.id).length;
      return `
        <button class="kategorie-card" type="button" data-action="open-kategorie" data-kategorie-id="${escapeHtml(kategorie.id)}">
          <span class="kategorie-card__icon">${escapeHtml(kategorie.icon ?? "📘")}</span>
          <span class="kategorie-card__titel">${escapeHtml(kategorie.titel)}</span>
          <span class="kategorie-card__anzahl">${anzahl} Begriffe</span>
        </button>
      `;
    })
    .join("");

  return `
    <header class="app-header">
      <h1>Trainer</h1>
      <p>Wähle ein Thema, um loszulegen.</p>
    </header>
    <main class="app-main">
      <div class="kategorie-grid">${items}</div>
    </main>
  `;
}

export function renderLernkartenListeView(kategorie: Kategorie, karten: Lernkarte[]): string {
  const items = karten
    .map(
      (karte, index) => `
        <li>
          <button class="lernkarte-listitem" type="button" data-action="open-karte" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="${index}">
            <span class="lernkarte-listitem__icon">${escapeHtml(karte.icon ?? "•")}</span>
            <span class="lernkarte-listitem__begriff">${escapeHtml(karte.begriff)}</span>
          </button>
        </li>
      `,
    )
    .join("");

  return `
    <header class="app-header app-header--sub">
      <button class="back-button" type="button" data-action="back-to-kategorien">← Themen</button>
      <h1>${escapeHtml(kategorie.titel)}</h1>
      <p>${escapeHtml(kategorie.beschreibung)}</p>
    </header>
    <main class="app-main">
      <button class="primary-button" type="button" data-action="open-karte" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="0">
        Karteikarten starten
      </button>
      <ul class="lernkarte-liste">${items}</ul>
    </main>
  `;
}

export function renderKarteView(kategorie: Kategorie, karten: Lernkarte[], index: number): string {
  const karte = karten[index];
  const zaehler = `${index + 1} / ${karten.length}`;

  return `
    <header class="app-header app-header--sub">
      <button class="back-button" type="button" data-action="back-to-lernkarten" data-kategorie-id="${escapeHtml(kategorie.id)}">← ${escapeHtml(kategorie.titel)}</button>
      <p class="karte-zaehler">${zaehler}</p>
    </header>
    <main class="app-main">
      <article class="lernkarte">
        <div class="lernkarte__icon">${escapeHtml(karte.icon ?? "📘")}</div>
        <h2 class="lernkarte__begriff">${escapeHtml(karte.begriff)}</h2>
        <p class="lernkarte__kurzerklaerung">${escapeHtml(karte.kurzerklaerung)}</p>
        <p class="lernkarte__erklaerung">${escapeHtml(karte.erklaerung)}</p>
        <p class="lernkarte__label">Beispiel</p>
        <p class="lernkarte__beispiel">${escapeHtml(karte.beispiel)}</p>
        <p class="lernkarte__label">Wann taucht das auf?</p>
        <p class="lernkarte__wann">${escapeHtml(karte.wannVerwendet)}</p>
        ${karte.befehl ? `<code class="lernkarte__befehl">${escapeHtml(karte.befehl)}</code>` : ""}
      </article>
      <div class="karte-nav">
        <button class="secondary-button" type="button" data-action="karte-prev" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="${index}">← Zurück</button>
        <button class="secondary-button" type="button" data-action="karte-next" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="${index}">Weiter →</button>
      </div>
    </main>
  `;
}
