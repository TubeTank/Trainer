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
