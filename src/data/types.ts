/**
 * Zentrales Datenmodell für Lernkategorien und Lernkarten.
 * Dies ist die Single Source of Truth: dieselben Daten werden später
 * für Karteikarten, Sprachausgabe und Quiz verwendet.
 */

export type Schwierigkeitsgrad = "einfach" | "mittel" | "schwer";

export interface Kategorie {
  /** Stabile, eindeutige ID. Niemals über Array-Position referenzieren. */
  id: string;
  titel: string;
  beschreibung: string;
  /** Anzeigereihenfolge innerhalb der Kategorie-Liste. */
  reihenfolge: number;
}

export interface QuizAntwort {
  /** Stabile, eindeutige ID innerhalb der Lernkarte. */
  id: string;
  text: string;
  istKorrekt: boolean;
}

export interface Lernkarte {
  /** Stabile, eindeutige ID. Niemals über Array-Position referenzieren. */
  id: string;
  /** Verweist auf Kategorie.id */
  kategorieId: string;
  begriff: string;
  kurzerklaerung: string;
  erklaerung: string;
  beispiel: string;
  wannVerwendet: string;
  /** Optionaler Git-Befehl, der zum Begriff gehört. */
  befehl?: string;
  /** IDs anderer Lernkarten, die inhaltlich verwandt sind. */
  relatedTerms?: string[];
  /** Optionales Icon/Emoji für die Kartenansicht. */
  icon?: string;
  schwierigkeit?: Schwierigkeitsgrad;
  quizAntworten?: QuizAntwort[];
}
