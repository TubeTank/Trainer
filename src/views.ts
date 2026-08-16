import type { Kategorie, Lernkarte } from "./data/types";
import { fortschrittFuerKarten, getStatus, type KartenFortschritt } from "./fortschritt";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderFortschrittsbalken(fortschritt: KartenFortschritt): string {
  const { gesamt, gelernt, wiederholen } = fortschritt;
  const gelerntProzent = gesamt ? (gelernt / gesamt) * 100 : 0;
  const wiederholenProzent = gesamt ? (wiederholen / gesamt) * 100 : 0;

  return `
    <div class="fortschritt-balken">
      <span class="fortschritt-balken__fill fortschritt-balken__fill--gelernt" style="width: ${gelerntProzent}%"></span>
      <span class="fortschritt-balken__fill fortschritt-balken__fill--wiederholen" style="width: ${wiederholenProzent}%"></span>
    </div>
  `;
}

const STATUS_BADGE: Record<string, string> = {
  gelernt: "✅",
  wiederholen: "🔁",
};

export function renderKategorienView(kategorien: Kategorie[], lernkarten: Lernkarte[]): string {
  const sortiert = [...kategorien].sort((a, b) => a.reihenfolge - b.reihenfolge);
  const gesamtFortschritt = fortschrittFuerKarten(lernkarten.map((karte) => karte.id));

  const items = sortiert
    .map((kategorie) => {
      const karteIds = lernkarten
        .filter((karte) => karte.kategorieId === kategorie.id)
        .map((karte) => karte.id);
      const fortschritt = fortschrittFuerKarten(karteIds);
      return `
        <button class="kategorie-card" type="button" data-action="open-kategorie" data-kategorie-id="${escapeHtml(kategorie.id)}">
          <span class="kategorie-card__icon">${escapeHtml(kategorie.icon ?? "📘")}</span>
          <span class="kategorie-card__titel">${escapeHtml(kategorie.titel)}</span>
          <span class="kategorie-card__anzahl">${fortschritt.gelernt} / ${fortschritt.gesamt} gelernt</span>
          ${renderFortschrittsbalken(fortschritt)}
        </button>
      `;
    })
    .join("");

  return `
    <header class="app-header">
      <h1>Trainer</h1>
      <p>Wähle ein Thema, um loszulegen.</p>
      <p class="gesamt-fortschritt">${gesamtFortschritt.gelernt} von ${gesamtFortschritt.gesamt} Begriffen insgesamt gelernt</p>
    </header>
    <main class="app-main">
      <div class="kategorie-grid">${items}</div>
    </main>
  `;
}

export function renderLernkartenListeView(kategorie: Kategorie, karten: Lernkarte[]): string {
  const fortschritt = fortschrittFuerKarten(karten.map((karte) => karte.id));

  const items = karten
    .map((karte, index) => {
      const status = getStatus(karte.id);
      const badge = STATUS_BADGE[status] ?? "";
      return `
        <li>
          <button class="lernkarte-listitem" type="button" data-action="open-karte" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="${index}">
            <span class="lernkarte-listitem__icon">${escapeHtml(karte.icon ?? "•")}</span>
            <span class="lernkarte-listitem__begriff">${escapeHtml(karte.begriff)}</span>
            ${badge ? `<span class="lernkarte-listitem__status">${badge}</span>` : ""}
          </button>
        </li>
      `;
    })
    .join("");

  return `
    <header class="app-header app-header--sub">
      <button class="back-button" type="button" data-action="back-to-kategorien">← Themen</button>
      <h1>${escapeHtml(kategorie.titel)}</h1>
      <p>${escapeHtml(kategorie.beschreibung)}</p>
      <p class="gesamt-fortschritt gesamt-fortschritt--links">${fortschritt.gelernt} / ${fortschritt.gesamt} gelernt</p>
      ${renderFortschrittsbalken(fortschritt)}
    </header>
    <main class="app-main">
      <button class="primary-button" type="button" data-action="open-karte" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="0">
        Karteikarten starten
      </button>
      <ul class="lernkarte-liste">${items}</ul>
    </main>
  `;
}

export function renderKarteView(
  kategorie: Kategorie,
  karten: Lernkarte[],
  index: number,
  flipped: boolean,
): string {
  const karte = karten[index];
  const zaehler = `${index + 1} / ${karten.length}`;
  const status = getStatus(karte.id);
  const statusBadge = STATUS_BADGE[status];

  return `
    <header class="app-header app-header--sub">
      <button class="back-button" type="button" data-action="back-to-lernkarten" data-kategorie-id="${escapeHtml(kategorie.id)}">← ${escapeHtml(kategorie.titel)}</button>
      <p class="karte-zaehler">${zaehler}</p>
    </header>
    <main class="app-main app-main--karte">
      <div class="karte-wrapper" data-flipped="${flipped}">
        <span class="karte-swipe-label karte-swipe-label--kenne" data-richtung="kenne">✅ Kenne ich</span>
        <span class="karte-swipe-label karte-swipe-label--ueben" data-richtung="ueben">🔁 Nochmal üben</span>
        <div class="karte-flip">
          <div class="karte-face karte-face--front">
            ${statusBadge ? `<span class="karte-status-pill">${statusBadge}</span>` : ""}
            <div class="lernkarte__icon">${escapeHtml(karte.icon ?? "📘")}</div>
            <h2 class="lernkarte__begriff">${escapeHtml(karte.begriff)}</h2>
            <p class="lernkarte__kurzerklaerung">${escapeHtml(karte.kurzerklaerung)}</p>
            <p class="karte-hinweis">Zum Umdrehen tippen</p>
          </div>
          <div class="karte-face karte-face--back">
            <p class="lernkarte__label">Erklärung</p>
            <p class="lernkarte__erklaerung">${escapeHtml(karte.erklaerung)}</p>
            <p class="lernkarte__label">Beispiel</p>
            <p class="lernkarte__beispiel">${escapeHtml(karte.beispiel)}</p>
            <p class="lernkarte__label">Wann taucht das auf?</p>
            <p class="lernkarte__wann">${escapeHtml(karte.wannVerwendet)}</p>
            ${karte.befehl ? `<code class="lernkarte__befehl">${escapeHtml(karte.befehl)}</code>` : ""}
          </div>
        </div>
      </div>
      <div class="karte-aktionen">
        <button class="urteil-button urteil-button--ueben" type="button" data-action="karte-swipe" data-richtung="ueben">🔁 Nochmal üben</button>
        <button class="urteil-button urteil-button--kenne" type="button" data-action="karte-swipe" data-richtung="kenne">✅ Kenne ich</button>
      </div>
      <button class="karte-zurueck-link" type="button" data-action="karte-back">‹ Vorherige Karte</button>
    </main>
  `;
}
