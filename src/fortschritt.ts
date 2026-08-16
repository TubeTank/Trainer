export type KartenStatus = "neu" | "gelernt" | "wiederholen";

interface FortschrittEintrag {
  status: KartenStatus;
  zuletzt: number;
}

type FortschrittDaten = Record<string, FortschrittEintrag>;

const STORAGE_KEY = "trainer:fortschritt:v1";

function ladeDaten(): FortschrittDaten {
  try {
    const roh = window.localStorage.getItem(STORAGE_KEY);
    if (!roh) return {};
    const geparst: unknown = JSON.parse(roh);
    return typeof geparst === "object" && geparst !== null ? (geparst as FortschrittDaten) : {};
  } catch {
    return {};
  }
}

function speichereDaten(daten: FortschrittDaten): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(daten));
  } catch {
    // z. B. privater Browser-Modus ohne localStorage-Zugriff – Fortschritt gilt dann nur für die Sitzung.
  }
}

let daten: FortschrittDaten = ladeDaten();

export function getStatus(karteId: string): KartenStatus {
  return daten[karteId]?.status ?? "neu";
}

export function setStatus(karteId: string, status: KartenStatus): void {
  daten = { ...daten, [karteId]: { status, zuletzt: Date.now() } };
  speichereDaten(daten);
}

export interface KartenFortschritt {
  gesamt: number;
  gelernt: number;
  wiederholen: number;
  neu: number;
}

export function fortschrittFuerKarten(karteIds: string[]): KartenFortschritt {
  let gelernt = 0;
  let wiederholen = 0;

  for (const id of karteIds) {
    const status = getStatus(id);
    if (status === "gelernt") gelernt++;
    else if (status === "wiederholen") wiederholen++;
  }

  return {
    gesamt: karteIds.length,
    gelernt,
    wiederholen,
    neu: karteIds.length - gelernt - wiederholen,
  };
}
