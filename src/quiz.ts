import type { Lernkarte, Sprache } from "./data/types";
import { lernkarteText } from "./sprache";

export interface QuizOption {
  text: string;
  istKorrekt: boolean;
}

export interface QuizFrage {
  karteId: string;
  begriff: string;
  optionen: QuizOption[];
}

function mische<T>(liste: T[]): T[] {
  const kopie = [...liste];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

export function erzeugeQuizFragen(karten: Lernkarte[], sprache: Sprache): QuizFrage[] {
  const texte = new Map(karten.map((karte) => [karte.id, lernkarteText(karte, sprache)]));

  return mische(karten).map((karte) => {
    const eigeneKurzerklaerung = texte.get(karte.id)!.kurzerklaerung;
    const distraktoren = mische(
      karten
        .filter((andere) => andere.id !== karte.id)
        .map((andere) => texte.get(andere.id)!.kurzerklaerung),
    ).slice(0, 3);

    const optionen = mische([
      { text: eigeneKurzerklaerung, istKorrekt: true },
      ...distraktoren.map((text) => ({ text, istKorrekt: false })),
    ]);

    return { karteId: karte.id, begriff: texte.get(karte.id)!.begriff, optionen };
  });
}
