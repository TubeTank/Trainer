import type { Kategorie, Lernkarte } from "./data/types";
import { fortschrittFuerKarten, getStatus, type KartenFortschritt } from "./fortschritt";
import type { QuizFrage } from "./quiz";
import { kategorieText, lernkarteText, SPRACH_LABEL, SPRACH_NAME, UI_TEXTE } from "./sprache";
import type { Sprache } from "./data/types";
import { getStreak } from "./streak";

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

function renderSprachSchalter(sprache: Sprache): string {
  const sprachen: Sprache[] = ["de", "en", "es"];
  const buttons = sprachen
    .map((eintrag) => {
      const aktiv = eintrag === sprache ? " sprach-button--aktiv" : "";
      return `<button class="sprach-button${aktiv}" type="button" data-action="set-sprache" data-sprache="${eintrag}" aria-label="${escapeHtml(SPRACH_NAME[eintrag])}" aria-pressed="${eintrag === sprache}">${SPRACH_LABEL[eintrag]}</button>`;
    })
    .join("");
  return `<div class="sprach-schalter">${buttons}</div>`;
}

const STATUS_BADGE: Record<string, string> = {
  gelernt: "✅",
  wiederholen: "🔁",
};

interface SucheTreffer {
  karte: Lernkarte;
  index: number;
  kategorie: Kategorie;
}

function sucheKarten(
  kategorien: Kategorie[],
  lernkarten: Lernkarte[],
  suchbegriff: string,
  sprache: Sprache,
): SucheTreffer[] {
  const query = suchbegriff.trim().toLowerCase();
  if (!query) return [];

  const treffer: SucheTreffer[] = [];
  for (const kategorie of kategorien) {
    const karten = lernkarten.filter((karte) => karte.kategorieId === kategorie.id);
    karten.forEach((karte, index) => {
      const begriff = lernkarteText(karte, sprache).begriff;
      if (begriff.toLowerCase().includes(query)) {
        treffer.push({ karte, index, kategorie });
      }
    });
  }
  return treffer;
}

function renderSucheBereich(suchbegriff: string, sprache: Sprache): string {
  const texte = UI_TEXTE[sprache];
  return `
    <div class="suche-bereich">
      <input
        class="suche-eingabe"
        type="search"
        inputmode="search"
        placeholder="${escapeHtml(texte.suchePlatzhalter)}"
        value="${escapeHtml(suchbegriff)}"
        aria-label="${escapeHtml(texte.suchePlatzhalter)}"
      />
    </div>
  `;
}

function renderSucheErgebnisse(treffer: SucheTreffer[], sprache: Sprache): string {
  const texte = UI_TEXTE[sprache];
  if (treffer.length === 0) {
    return `<p class="suche-keine-treffer">${escapeHtml(texte.sucheKeineTreffer)}</p>`;
  }

  const items = treffer
    .map(({ karte, index, kategorie }) => {
      const karteTexte = lernkarteText(karte, sprache);
      const kategorieTexte = kategorieText(kategorie, sprache);
      return `
        <li>
          <button class="suche-ergebnis" type="button" data-action="open-karte" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="${index}">
            <span class="suche-ergebnis__icon">${escapeHtml(karte.icon ?? "•")}</span>
            <span class="suche-ergebnis__info">
              <span class="suche-ergebnis__begriff">${escapeHtml(karteTexte.begriff)}</span>
              <span class="suche-ergebnis__kategorie">${escapeHtml(kategorieTexte.titel)}</span>
            </span>
          </button>
        </li>
      `;
    })
    .join("");

  return `<ul class="suche-ergebnisliste">${items}</ul>`;
}

export function renderKategorienView(
  kategorien: Kategorie[],
  lernkarten: Lernkarte[],
  sprache: Sprache,
  suchbegriff: string,
): string {
  const texte = UI_TEXTE[sprache];
  const sortiert = [...kategorien].sort((a, b) => a.reihenfolge - b.reihenfolge);
  const gesamtFortschritt = fortschrittFuerKarten(lernkarten.map((karte) => karte.id));
  const streak = getStreak();
  const suchTrimmt = suchbegriff.trim();

  const items = sortiert
    .map((kategorie) => {
      const kategorieTexte = kategorieText(kategorie, sprache);
      const karteIds = lernkarten
        .filter((karte) => karte.kategorieId === kategorie.id)
        .map((karte) => karte.id);
      const fortschritt = fortschrittFuerKarten(karteIds);
      const abgeschlossen = fortschritt.gesamt > 0 && fortschritt.gelernt === fortschritt.gesamt;
      return `
        <button class="kategorie-card" type="button" data-action="open-kategorie" data-kategorie-id="${escapeHtml(kategorie.id)}">
          ${abgeschlossen ? `<span class="kategorie-card__abzeichen" role="img" aria-label="${escapeHtml(texte.kategorieAbgeschlossenLabel)}">🏆</span>` : ""}
          <span class="kategorie-card__icon">${escapeHtml(kategorie.icon ?? "📘")}</span>
          <span class="kategorie-card__titel">${escapeHtml(kategorieTexte.titel)}</span>
          <span class="kategorie-card__anzahl">${texte.gelerntAnzahl(fortschritt.gelernt, fortschritt.gesamt)}</span>
          ${renderFortschrittsbalken(fortschritt)}
        </button>
      `;
    })
    .join("");

  const inhalt = suchTrimmt
    ? renderSucheErgebnisse(sucheKarten(kategorien, lernkarten, suchTrimmt, sprache), sprache)
    : `
      <button class="outline-button" type="button" data-action="open-auswahl">
        ${escapeHtml(texte.eigeneAuswahlOeffnen)}
      </button>
      <div class="kategorie-grid">${items}</div>
    `;

  return `
    <header class="app-header">
      ${renderSprachSchalter(sprache)}
      <h1>${escapeHtml(texte.appTitel)}</h1>
      <p>${escapeHtml(texte.themaWaehlen)}</p>
      <p class="gesamt-fortschritt">${escapeHtml(texte.gesamtFortschritt(gesamtFortschritt.gelernt, gesamtFortschritt.gesamt))}</p>
      ${streak > 0 ? `<p class="streak-anzeige">${escapeHtml(texte.streakText(streak))}</p>` : ""}
      ${renderSucheBereich(suchbegriff, sprache)}
    </header>
    <main class="app-main">
      ${inhalt}
    </main>
  `;
}

export function renderAuswahlView(
  kategorien: Kategorie[],
  lernkarten: Lernkarte[],
  ausgewaehlt: Set<string>,
  sprache: Sprache,
): string {
  const texte = UI_TEXTE[sprache];
  const sortiert = [...kategorien].sort((a, b) => a.reihenfolge - b.reihenfolge);
  const anzahlBegriffe = lernkarten.filter((karte) => ausgewaehlt.has(karte.kategorieId)).length;

  const items = sortiert
    .map((kategorie) => {
      const kategorieTexte = kategorieText(kategorie, sprache);
      const anzahl = lernkarten.filter((karte) => karte.kategorieId === kategorie.id).length;
      const aktiv = ausgewaehlt.has(kategorie.id);
      return `
        <li>
          <button class="auswahl-kategorie${aktiv ? " auswahl-kategorie--aktiv" : ""}" type="button" data-action="toggle-kategorie-auswahl" data-kategorie-id="${escapeHtml(kategorie.id)}" aria-pressed="${aktiv}">
            <span class="auswahl-kategorie__haken" aria-hidden="true">${aktiv ? "✅" : "⬜"}</span>
            <span class="auswahl-kategorie__icon">${escapeHtml(kategorie.icon ?? "📘")}</span>
            <span class="auswahl-kategorie__info">
              <span class="auswahl-kategorie__titel">${escapeHtml(kategorieTexte.titel)}</span>
              <span class="auswahl-kategorie__anzahl">${escapeHtml(texte.begriffeAnzahl(anzahl))}</span>
            </span>
          </button>
        </li>
      `;
    })
    .join("");

  return `
    <header class="app-header app-header--sub">
      <button class="back-button" type="button" data-action="back-to-kategorien">${escapeHtml(texte.themenZurueck)}</button>
      <h1>${escapeHtml(texte.eigeneAuswahlTitel)}</h1>
      <p>${escapeHtml(texte.eigeneAuswahlBeschreibung)}</p>
    </header>
    <main class="app-main">
      <ul class="auswahl-liste">${items}</ul>
    </main>
    <div class="karte-footer">
      <p class="auswahl-zusammenfassung">${escapeHtml(texte.auswahlZusammenfassung(ausgewaehlt.size, anzahlBegriffe))}</p>
      <button class="primary-button" type="button" data-action="start-auswahl-lernen" ${ausgewaehlt.size === 0 ? "disabled" : ""}>
        ${escapeHtml(texte.eigeneAuswahlStarten)}
      </button>
    </div>
  `;
}

export function renderLernkartenListeView(
  kategorie: Kategorie,
  karten: Lernkarte[],
  sprache: Sprache,
): string {
  const texte = UI_TEXTE[sprache];
  const kategorieTexte = kategorieText(kategorie, sprache);
  const fortschritt = fortschrittFuerKarten(karten.map((karte) => karte.id));

  const items = karten
    .map((karte, index) => {
      const karteTexte = lernkarteText(karte, sprache);
      const status = getStatus(karte.id);
      const badge = STATUS_BADGE[status] ?? "";
      return `
        <li>
          <button class="lernkarte-listitem" type="button" data-action="open-karte" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="${index}">
            <span class="lernkarte-listitem__icon">${escapeHtml(karte.icon ?? "•")}</span>
            <span class="lernkarte-listitem__begriff">${escapeHtml(karteTexte.begriff)}</span>
            ${badge ? `<span class="lernkarte-listitem__status">${badge}</span>` : ""}
          </button>
        </li>
      `;
    })
    .join("");

  return `
    <header class="app-header app-header--sub">
      <button class="back-button" type="button" data-action="back-to-kategorien">${escapeHtml(texte.themenZurueck)}</button>
      <h1>${escapeHtml(kategorieTexte.titel)}</h1>
      <p>${escapeHtml(kategorieTexte.beschreibung)}</p>
      <p class="gesamt-fortschritt gesamt-fortschritt--links">${escapeHtml(texte.gelerntAnzahl(fortschritt.gelernt, fortschritt.gesamt))}</p>
      ${renderFortschrittsbalken(fortschritt)}
    </header>
    <main class="app-main">
      <button class="primary-button" type="button" data-action="open-karte" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="0">
        ${escapeHtml(texte.karteikartenStarten)}
      </button>
      <button class="outline-button" type="button" data-action="start-zufall" data-kategorie-id="${escapeHtml(kategorie.id)}">
        ${escapeHtml(texte.zufallStarten)}
      </button>
      <button class="outline-button" type="button" data-action="start-quiz" data-kategorie-id="${escapeHtml(kategorie.id)}">
        ${escapeHtml(texte.quizStarten)}
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
  sprache: Sprache,
): string {
  const texte = UI_TEXTE[sprache];
  const karte = karten[index];
  const karteTexte = lernkarteText(karte, sprache);
  const kategorieTexte = kategorieText(kategorie, sprache);
  const zaehler = `${index + 1} / ${karten.length}`;
  const status = getStatus(karte.id);
  const statusBadge = STATUS_BADGE[status];

  return `
    <header class="app-header app-header--sub">
      <button class="back-button" type="button" data-action="back-to-lernkarten" data-kategorie-id="${escapeHtml(kategorie.id)}">← ${escapeHtml(kategorieTexte.titel)}</button>
      <div class="karte-header-zeile">
        <p class="karte-zaehler">${zaehler}</p>
        <button class="vorlesen-button" type="button" data-action="karte-vorlesen" data-kategorie-id="${escapeHtml(kategorie.id)}" data-index="${index}" aria-label="${escapeHtml(texte.vorlesenLabel)}">🔊</button>
      </div>
    </header>
    <main class="app-main app-main--karte">
      <div class="karte-wrapper" data-flipped="${flipped}">
        <span class="karte-swipe-label karte-swipe-label--kenne" data-richtung="kenne">${escapeHtml(texte.kenneIch)}</span>
        <span class="karte-swipe-label karte-swipe-label--ueben" data-richtung="ueben">${escapeHtml(texte.nochmalUeben)}</span>
        <div class="karte-flip">
          <div class="karte-face karte-face--front">
            ${statusBadge ? `<span class="karte-status-pill">${statusBadge}</span>` : ""}
            <div class="lernkarte__icon">${escapeHtml(karte.icon ?? "📘")}</div>
            <h2 class="lernkarte__begriff">${escapeHtml(karteTexte.begriff)}</h2>
            <p class="lernkarte__kurzerklaerung">${escapeHtml(karteTexte.kurzerklaerung)}</p>
            <p class="karte-hinweis">${escapeHtml(texte.zumUmdrehenTippen)}</p>
          </div>
          <div class="karte-face karte-face--back">
            <p class="lernkarte__label">${escapeHtml(texte.erklaerungLabel)}</p>
            <p class="lernkarte__erklaerung">${escapeHtml(karteTexte.erklaerung)}</p>
            <p class="lernkarte__label">${escapeHtml(texte.beispielLabel)}</p>
            <p class="lernkarte__beispiel">${escapeHtml(karteTexte.beispiel)}</p>
            <p class="lernkarte__label">${escapeHtml(texte.wannLabel)}</p>
            <p class="lernkarte__wann">${escapeHtml(karteTexte.wannVerwendet)}</p>
            ${karte.befehl ? `<code class="lernkarte__befehl">${escapeHtml(karte.befehl)}</code>` : ""}
          </div>
        </div>
      </div>
    </main>
    <div class="karte-footer">
      <div class="karte-aktionen">
        <button class="urteil-button urteil-button--ueben" type="button" data-action="karte-swipe" data-richtung="ueben">${escapeHtml(texte.nochmalUeben)}</button>
        <button class="urteil-button urteil-button--kenne" type="button" data-action="karte-swipe" data-richtung="kenne">${escapeHtml(texte.kenneIch)}</button>
      </div>
      <button class="karte-zurueck-link" type="button" data-action="karte-back">${escapeHtml(texte.vorherigeKarte)}</button>
    </div>
  `;
}

export function renderQuizView(
  kategorie: Kategorie,
  frage: QuizFrage,
  index: number,
  gesamt: number,
  ausgewaehlt: number | null,
  sprache: Sprache,
): string {
  const texte = UI_TEXTE[sprache];
  const kategorieTexte = kategorieText(kategorie, sprache);

  const optionen = frage.optionen
    .map((option, i) => {
      let klasse = "quiz-option";
      if (ausgewaehlt !== null) {
        if (option.istKorrekt) klasse += " quiz-option--richtig";
        else if (i === ausgewaehlt) klasse += " quiz-option--falsch";
      }
      return `
        <button class="${klasse}" type="button" data-action="quiz-antwort" data-antwort-index="${i}" ${ausgewaehlt !== null ? "disabled" : ""}>
          ${escapeHtml(option.text)}
        </button>
      `;
    })
    .join("");

  return `
    <header class="app-header app-header--sub">
      <button class="back-button" type="button" data-action="quiz-verlassen" data-kategorie-id="${escapeHtml(kategorie.id)}">← ${escapeHtml(kategorieTexte.titel)}</button>
      <p class="karte-zaehler">${escapeHtml(texte.frage(index + 1, gesamt))}</p>
    </header>
    <main class="app-main">
      <p class="quiz-frage-label">${escapeHtml(texte.wasBedeutet)}</p>
      <h2 class="quiz-frage-begriff">${escapeHtml(frage.begriff)}</h2>
      <div class="quiz-optionen">${optionen}</div>
      ${ausgewaehlt !== null ? `<button class="primary-button" type="button" data-action="quiz-weiter">${escapeHtml(texte.weiter)}</button>` : ""}
    </main>
  `;
}

export function renderQuizErgebnisView(
  kategorie: Kategorie,
  score: number,
  gesamt: number,
  sprache: Sprache,
): string {
  const texte = UI_TEXTE[sprache];
  const kategorieTexte = kategorieText(kategorie, sprache);

  return `
    <header class="app-header app-header--sub">
      <button class="back-button" type="button" data-action="quiz-verlassen" data-kategorie-id="${escapeHtml(kategorie.id)}">← ${escapeHtml(kategorieTexte.titel)}</button>
    </header>
    <main class="app-main quiz-ergebnis">
      <div class="quiz-ergebnis__icon">${score === gesamt ? "🏆" : "📊"}</div>
      <h2>${escapeHtml(texte.quizErgebnis(score, gesamt))}</h2>
      <button class="primary-button" type="button" data-action="quiz-restart" data-kategorie-id="${escapeHtml(kategorie.id)}">
        ${escapeHtml(texte.nochmalVersuchen)}
      </button>
      <button class="karte-zurueck-link" type="button" data-action="quiz-verlassen" data-kategorie-id="${escapeHtml(kategorie.id)}">
        ${escapeHtml(texte.zurueckZurListe)}
      </button>
    </main>
  `;
}
