import type {
  Kategorie,
  KategorieUebersetzung,
  Lernkarte,
  LernkarteUebersetzung,
  Sprache,
} from "./data/types";

const STORAGE_KEY = "trainer:sprache:v1";
const SPRACHEN: Sprache[] = ["de", "en", "es"];

function istSprache(wert: string | null): wert is Sprache {
  return wert !== null && (SPRACHEN as string[]).includes(wert);
}

function ladeSprache(): Sprache {
  try {
    const roh = window.localStorage.getItem(STORAGE_KEY);
    return istSprache(roh) ? roh : "de";
  } catch {
    return "de";
  }
}

let aktuelleSprache: Sprache = ladeSprache();

export function getSprache(): Sprache {
  return aktuelleSprache;
}

export function setSprache(sprache: Sprache): void {
  aktuelleSprache = sprache;
  try {
    window.localStorage.setItem(STORAGE_KEY, sprache);
  } catch {
    // z. B. privater Browser-Modus – Sprachwahl gilt dann nur für die Sitzung.
  }
}

export function kategorieText(kategorie: Kategorie, sprache: Sprache): KategorieUebersetzung {
  if (sprache === "de") return { titel: kategorie.titel, beschreibung: kategorie.beschreibung };
  return (
    kategorie.uebersetzungen?.[sprache] ?? {
      titel: kategorie.titel,
      beschreibung: kategorie.beschreibung,
    }
  );
}

export function lernkarteText(karte: Lernkarte, sprache: Sprache): LernkarteUebersetzung {
  if (sprache === "de") {
    return {
      begriff: karte.begriff,
      kurzerklaerung: karte.kurzerklaerung,
      erklaerung: karte.erklaerung,
      beispiel: karte.beispiel,
      wannVerwendet: karte.wannVerwendet,
    };
  }
  return (
    karte.uebersetzungen?.[sprache] ?? {
      begriff: karte.begriff,
      kurzerklaerung: karte.kurzerklaerung,
      erklaerung: karte.erklaerung,
      beispiel: karte.beispiel,
      wannVerwendet: karte.wannVerwendet,
    }
  );
}

export const SPRACH_LABEL: Record<Sprache, string> = {
  de: "DE",
  en: "EN",
  es: "ES",
};

export const SPRACH_NAME: Record<Sprache, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
};

export const SPRACH_BCP47: Record<Sprache, string> = {
  de: "de-DE",
  en: "en-US",
  es: "es-ES",
};

export interface UiTexte {
  appTitel: string;
  themaWaehlen: string;
  gesamtFortschritt: (gelernt: number, gesamt: number) => string;
  begriffeAnzahl: (anzahl: number) => string;
  gelerntAnzahl: (gelernt: number, gesamt: number) => string;
  themenZurueck: string;
  karteikartenStarten: string;
  quizStarten: string;
  zumUmdrehenTippen: string;
  erklaerungLabel: string;
  beispielLabel: string;
  wannLabel: string;
  nochmalUeben: string;
  kenneIch: string;
  vorherigeKarte: string;
  frage: (index: number, gesamt: number) => string;
  wasBedeutet: string;
  weiter: string;
  quizErgebnis: (score: number, gesamt: number) => string;
  nochmalVersuchen: string;
  zurueckZurListe: string;
  vorlesenLabel: string;
  zufallStarten: string;
  streakText: (tage: number) => string;
  kategorieAbgeschlossenLabel: string;
}

export const UI_TEXTE: Record<Sprache, UiTexte> = {
  de: {
    appTitel: "Trainer",
    themaWaehlen: "Wähle ein Thema, um loszulegen.",
    gesamtFortschritt: (gelernt, gesamt) => `${gelernt} von ${gesamt} Begriffen insgesamt gelernt`,
    begriffeAnzahl: (anzahl) => `${anzahl} Begriffe`,
    gelerntAnzahl: (gelernt, gesamt) => `${gelernt} / ${gesamt} gelernt`,
    themenZurueck: "← Themen",
    karteikartenStarten: "Karteikarten starten",
    quizStarten: "📝 Quiz starten",
    zumUmdrehenTippen: "Zum Umdrehen tippen",
    erklaerungLabel: "Erklärung",
    beispielLabel: "Beispiel",
    wannLabel: "Wann taucht das auf?",
    nochmalUeben: "🔁 Nochmal üben",
    kenneIch: "✅ Kenne ich",
    vorherigeKarte: "‹ Vorherige Karte",
    frage: (index, gesamt) => `Frage ${index} / ${gesamt}`,
    wasBedeutet: "Was bedeutet",
    weiter: "Weiter",
    quizErgebnis: (score, gesamt) => `Du hast ${score} von ${gesamt} richtig`,
    nochmalVersuchen: "Nochmal versuchen",
    zurueckZurListe: "Zurück zur Liste",
    vorlesenLabel: "Vorlesen",
    zufallStarten: "🔀 Zufällig starten",
    streakText: (tage) => `🔥 ${tage} ${tage === 1 ? "Tag" : "Tage"} in Folge`,
    kategorieAbgeschlossenLabel: "Kategorie abgeschlossen",
  },
  en: {
    appTitel: "Trainer",
    themaWaehlen: "Choose a topic to get started.",
    gesamtFortschritt: (gelernt, gesamt) => `${gelernt} of ${gesamt} terms learned overall`,
    begriffeAnzahl: (anzahl) => `${anzahl} terms`,
    gelerntAnzahl: (gelernt, gesamt) => `${gelernt} / ${gesamt} learned`,
    themenZurueck: "← Topics",
    karteikartenStarten: "Start flashcards",
    quizStarten: "📝 Start quiz",
    zumUmdrehenTippen: "Tap to flip",
    erklaerungLabel: "Explanation",
    beispielLabel: "Example",
    wannLabel: "When does this come up?",
    nochmalUeben: "🔁 Review again",
    kenneIch: "✅ I know this",
    vorherigeKarte: "‹ Previous card",
    frage: (index, gesamt) => `Question ${index} / ${gesamt}`,
    wasBedeutet: "What does this mean:",
    weiter: "Next",
    quizErgebnis: (score, gesamt) => `You got ${score} of ${gesamt} right`,
    nochmalVersuchen: "Try again",
    zurueckZurListe: "Back to list",
    vorlesenLabel: "Read aloud",
    zufallStarten: "🔀 Start shuffled",
    streakText: (tage) => `🔥 ${tage}-day streak`,
    kategorieAbgeschlossenLabel: "Category completed",
  },
  es: {
    appTitel: "Trainer",
    themaWaehlen: "Elige un tema para empezar.",
    gesamtFortschritt: (gelernt, gesamt) => `${gelernt} de ${gesamt} términos aprendidos en total`,
    begriffeAnzahl: (anzahl) => `${anzahl} términos`,
    gelerntAnzahl: (gelernt, gesamt) => `${gelernt} / ${gesamt} aprendidos`,
    themenZurueck: "← Temas",
    karteikartenStarten: "Empezar tarjetas",
    quizStarten: "📝 Empezar cuestionario",
    zumUmdrehenTippen: "Toca para voltear",
    erklaerungLabel: "Explicación",
    beispielLabel: "Ejemplo",
    wannLabel: "¿Cuándo aparece esto?",
    nochmalUeben: "🔁 Repasar de nuevo",
    kenneIch: "✅ Lo sé",
    vorherigeKarte: "‹ Tarjeta anterior",
    frage: (index, gesamt) => `Pregunta ${index} / ${gesamt}`,
    wasBedeutet: "Qué significa:",
    weiter: "Siguiente",
    quizErgebnis: (score, gesamt) => `Acertaste ${score} de ${gesamt}`,
    nochmalVersuchen: "Intentar de nuevo",
    zurueckZurListe: "Volver a la lista",
    vorlesenLabel: "Leer en voz alta",
    zufallStarten: "🔀 Empezar al azar",
    streakText: (tage) => `🔥 Racha de ${tage} ${tage === 1 ? "día" : "días"}`,
    kategorieAbgeschlossenLabel: "Categoría completada",
  },
};
