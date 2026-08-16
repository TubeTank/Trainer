import type { Kategorie, Lernkarte } from "./types";

export interface ValidierungsErgebnis {
  gueltig: boolean;
  fehler: string[];
}

const PFLICHTFELDER_LERNKARTE: (keyof Lernkarte)[] = [
  "begriff",
  "kurzerklaerung",
  "erklaerung",
  "beispiel",
  "wannVerwendet",
];

const UEBERSETZBARE_LERNKARTEN_FELDER = [
  "begriff",
  "kurzerklaerung",
  "erklaerung",
  "beispiel",
  "wannVerwendet",
] as const;

function istLeer(wert: string | undefined | null): boolean {
  return !wert || wert.trim().length === 0;
}

/**
 * Prüft das Lerndatenmodell auf strukturelle Konsistenz:
 * eindeutige IDs, gültige Kategorie-Referenzen und vorhandene Pflichtfelder.
 * Dient als einfache Absicherung, da Karteikarten, Sprachausgabe und Quiz
 * später alle auf denselben Daten aufbauen.
 */
export function validiereLerndaten(
  kategorien: Kategorie[],
  lernkarten: Lernkarte[],
): ValidierungsErgebnis {
  const fehler: string[] = [];
  const kategorieIds = new Set<string>();

  for (const kategorie of kategorien) {
    if (istLeer(kategorie.id)) {
      fehler.push(`Kategorie ohne gültige ID gefunden (Titel: "${kategorie.titel ?? "?"}").`);
    } else if (kategorieIds.has(kategorie.id)) {
      fehler.push(`Doppelte Kategorie-ID: "${kategorie.id}".`);
    } else {
      kategorieIds.add(kategorie.id);
    }

    if (istLeer(kategorie.titel)) {
      fehler.push(`Kategorie "${kategorie.id}" hat keinen Titel.`);
    }
    if (istLeer(kategorie.beschreibung)) {
      fehler.push(`Kategorie "${kategorie.id}" hat keine Beschreibung.`);
    }
    if (typeof kategorie.reihenfolge !== "number" || Number.isNaN(kategorie.reihenfolge)) {
      fehler.push(`Kategorie "${kategorie.id}" hat keine gültige Reihenfolge.`);
    }

    for (const [sprache, uebersetzung] of Object.entries(kategorie.uebersetzungen ?? {})) {
      if (istLeer(uebersetzung.titel) || istLeer(uebersetzung.beschreibung)) {
        fehler.push(`Kategorie "${kategorie.id}" hat eine unvollständige Übersetzung ("${sprache}").`);
      }
    }
  }

  const lernkartenIds = new Set<string>();

  for (const karte of lernkarten) {
    if (istLeer(karte.id)) {
      fehler.push(`Lernkarte ohne gültige ID gefunden (Begriff: "${karte.begriff ?? "?"}").`);
    } else if (lernkartenIds.has(karte.id)) {
      fehler.push(`Doppelte Lernkarten-ID: "${karte.id}".`);
    } else {
      lernkartenIds.add(karte.id);
    }

    if (istLeer(karte.kategorieId) || !kategorieIds.has(karte.kategorieId)) {
      fehler.push(
        `Lernkarte "${karte.id}" verweist auf unbekannte Kategorie-ID "${karte.kategorieId}".`,
      );
    }

    for (const feld of PFLICHTFELDER_LERNKARTE) {
      const wert = karte[feld];
      if (typeof wert !== "string" || istLeer(wert)) {
        fehler.push(`Lernkarte "${karte.id}" fehlt Pflichtfeld "${feld}".`);
      }
    }

    for (const [sprache, uebersetzung] of Object.entries(karte.uebersetzungen ?? {})) {
      for (const feld of UEBERSETZBARE_LERNKARTEN_FELDER) {
        if (istLeer(uebersetzung[feld])) {
          fehler.push(
            `Lernkarte "${karte.id}" hat eine unvollständige Übersetzung ("${sprache}", Feld "${feld}").`,
          );
        }
      }
    }
  }

  for (const karte of lernkarten) {
    for (const relatedId of karte.relatedTerms ?? []) {
      if (!lernkartenIds.has(relatedId)) {
        fehler.push(
          `Lernkarte "${karte.id}" verweist über relatedTerms auf unbekannte Lernkarten-ID "${relatedId}".`,
        );
      }
    }
  }

  return { gueltig: fehler.length === 0, fehler };
}
