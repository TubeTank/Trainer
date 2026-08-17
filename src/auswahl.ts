const STORAGE_KEY = "trainer:auswahl:v1";

function ladeAuswahl(): Set<string> {
  try {
    const roh = window.localStorage.getItem(STORAGE_KEY);
    if (!roh) return new Set();
    const geparst: unknown = JSON.parse(roh);
    return Array.isArray(geparst)
      ? new Set(geparst.filter((eintrag): eintrag is string => typeof eintrag === "string"))
      : new Set();
  } catch {
    return new Set();
  }
}

function speichereAuswahl(auswahl: Set<string>): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...auswahl]));
  } catch {
    // z. B. privater Browser-Modus – Auswahl gilt dann nur für die Sitzung.
  }
}

let ausgewaehlteKategorien: Set<string> = ladeAuswahl();

export function getAusgewaehlteKategorien(): Set<string> {
  return ausgewaehlteKategorien;
}

export function toggleKategorieAuswahl(kategorieId: string): void {
  const neu = new Set(ausgewaehlteKategorien);
  if (neu.has(kategorieId)) neu.delete(kategorieId);
  else neu.add(kategorieId);
  ausgewaehlteKategorien = neu;
  speichereAuswahl(neu);
}
