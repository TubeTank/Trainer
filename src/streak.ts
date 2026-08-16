const STORAGE_KEY = "trainer:streak:v1";

interface StreakDaten {
  letzterTag: string;
  streak: number;
}

function heutigesDatum(bezug: Date): string {
  const jahr = bezug.getFullYear();
  const monat = String(bezug.getMonth() + 1).padStart(2, "0");
  const tag = String(bezug.getDate()).padStart(2, "0");
  return `${jahr}-${monat}-${tag}`;
}

function vorherigerTag(datum: string): string {
  const bezug = new Date(`${datum}T00:00:00`);
  bezug.setDate(bezug.getDate() - 1);
  return heutigesDatum(bezug);
}

function ladeDaten(): StreakDaten | null {
  try {
    const roh = window.localStorage.getItem(STORAGE_KEY);
    if (!roh) return null;
    const geparst: unknown = JSON.parse(roh);
    if (
      typeof geparst === "object" &&
      geparst !== null &&
      "letzterTag" in geparst &&
      "streak" in geparst
    ) {
      return geparst as StreakDaten;
    }
    return null;
  } catch {
    return null;
  }
}

function speichereDaten(daten: StreakDaten): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(daten));
  } catch {
    // z. B. privater Browser-Modus – Streak gilt dann nur für die Sitzung.
  }
}

let aktuellerStreak = 0;

export function aktualisiereStreak(): number {
  const heute = heutigesDatum(new Date());
  const bisher = ladeDaten();

  let neu: StreakDaten;
  if (!bisher) {
    neu = { letzterTag: heute, streak: 1 };
  } else if (bisher.letzterTag === heute) {
    neu = bisher;
  } else if (bisher.letzterTag === vorherigerTag(heute)) {
    neu = { letzterTag: heute, streak: bisher.streak + 1 };
  } else {
    neu = { letzterTag: heute, streak: 1 };
  }

  speichereDaten(neu);
  aktuellerStreak = neu.streak;
  return aktuellerStreak;
}

export function getStreak(): number {
  return aktuellerStreak;
}
