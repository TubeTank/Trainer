import type { Lernkarte } from "./data/types";

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

export function erzeugeQuizFragen(karten: Lernkarte[]): QuizFrage[] {
  return mische(karten).map((karte) => {
    const distraktoren = mische(
      karten.filter((andere) => andere.id !== karte.id).map((andere) => andere.kurzerklaerung),
    ).slice(0, 3);

    const optionen = mische([
      { text: karte.kurzerklaerung, istKorrekt: true },
      ...distraktoren.map((text) => ({ text, istKorrekt: false })),
    ]);

    return { karteId: karte.id, begriff: karte.begriff, optionen };
  });
}
