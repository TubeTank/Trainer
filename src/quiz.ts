import type { Lernkarte, Sprache } from "./data/types";
import { lernkarteText } from "./sprache";
import { mische } from "./util";

export interface QuizOption {
  text: string;
  istKorrekt: boolean;
}

export interface QuizFrage {
  karteId: string;
  begriff: string;
  optionen: QuizOption[];
}

function kernbegriff(begriff: string): string {
  return begriff.split(/[(/&]/)[0].trim();
}

function ersetzeVorkommen(text: string, wort: string): string {
  const escaped = wort.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "giu");
  return text.replace(pattern, "___");
}

/**
 * Ersetzt den Begriff selbst durch "___", damit eine Antwortoption nicht
 * schon am eigenen Subjekt zu erkennen ist (z. B. "Ein Branch ist ..." bei
 * einer Frage zu einem anderen Begriff). Manche Kurzerklärungen nennen nur
 * das erste Wort eines mehrteiligen Begriffs (z. B. "TIG" statt "TIG
 * Welding") – dafür greift ein Fallback auf das erste Wort.
 */
function versteckeBegriff(text: string, begriff: string): string {
  const kern = kernbegriff(begriff);
  if (!kern) return text;

  const ersterVersuch = ersetzeVorkommen(text, kern);
  if (ersterVersuch !== text) return ersterVersuch;

  const erstesWort = kern.split(/\s+/)[0];
  if (erstesWort && erstesWort !== kern && erstesWort.length >= 2) {
    return ersetzeVorkommen(text, erstesWort);
  }
  return ersterVersuch;
}

export function erzeugeQuizFragen(karten: Lernkarte[], sprache: Sprache): QuizFrage[] {
  const texte = new Map(karten.map((karte) => [karte.id, lernkarteText(karte, sprache)]));

  const maskierteKurzerklaerung = (karte: Lernkarte): string => {
    const eintrag = texte.get(karte.id)!;
    return versteckeBegriff(eintrag.kurzerklaerung, eintrag.begriff);
  };

  return mische(karten).map((karte) => {
    const eigeneKurzerklaerung = maskierteKurzerklaerung(karte);
    const distraktoren = mische(karten.filter((andere) => andere.id !== karte.id))
      .slice(0, 3)
      .map((andere) => maskierteKurzerklaerung(andere));

    const optionen = mische([
      { text: eigeneKurzerklaerung, istKorrekt: true },
      ...distraktoren.map((text) => ({ text, istKorrekt: false })),
    ]);

    return { karteId: karte.id, begriff: texte.get(karte.id)!.begriff, optionen };
  });
}
