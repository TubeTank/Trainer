import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-github-zusammenarbeit";

export const githubZusammenarbeitLernkarten: Lernkarte[] = [
  {
    id: "lk-remote",
    kategorieId: KATEGORIE_ID,
    begriff: "Remote",
    kurzerklaerung:
      "Ein Remote ist die Verknüpfung zu einer entfernten Kopie eines Repositories, meist auf einem Server wie GitHub.",
    erklaerung:
      "Man kann sich ein Remote wie die Adresse eines zentralen Archivs vorstellen, mit dem der eigene Aktenordner synchronisiert wird. Der Standard-Name für dieses zentrale Archiv lautet meist „origin“. Über das Remote weiß Git, wohin Push und Pull sich verbinden sollen.",
    beispiel:
      "Nach dem Klonen eines Projekts von GitHub ist automatisch ein Remote namens „origin“ eingerichtet, das auf das GitHub-Repository zeigt.",
    wannVerwendet:
      "Immer dann, wenn Änderungen mit einem zentralen Server ausgetauscht werden – beim Klonen, Pushen oder Pullen.",
    befehl: "git remote -v",
    icon: "🌐",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-clone", "lk-push", "lk-pull"],
  },
  {
    id: "lk-fork",
    kategorieId: KATEGORIE_ID,
    begriff: "Fork",
    kurzerklaerung:
      "Ein Fork ist eine eigene Kopie eines fremden Repositories im eigenen GitHub-Konto, unabhängig vom Original.",
    erklaerung:
      "Ein Fork ist wie das Kopieren eines fremden Rezeptbuchs in die eigene Küche: Man darf darin nach Belieben experimentieren, ohne das Original zu verändern. Änderungen können später per Pull Request wieder dem Original-Projekt vorgeschlagen werden.",
    beispiel:
      "Ein Entwickler forkt ein Open-Source-Projekt auf GitHub, um einen eigenen Verbesserungsvorschlag umzusetzen, bevor er ihn dem ursprünglichen Team anbietet.",
    wannVerwendet:
      "Wenn man an einem Projekt mitwirken möchte, für das man selbst keine direkten Schreibrechte besitzt.",
    icon: "🍴",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-clone", "lk-pull-request"],
  },
  {
    id: "lk-pull-request",
    kategorieId: KATEGORIE_ID,
    begriff: "Pull Request",
    kurzerklaerung:
      "Ein Pull Request (PR) ist ein formeller Vorschlag, Änderungen aus einem Branch in einen anderen zu übernehmen – meist verbunden mit einer Diskussion.",
    erklaerung:
      "Ein Pull Request funktioniert wie ein Änderungsantrag, den man zur Prüfung einreicht, bevor er offiziell übernommen wird. Andere können die vorgeschlagenen Änderungen kommentieren, Verbesserungen einfordern oder freigeben, bevor sie in den Hauptbranch gelangen.",
    beispiel:
      "Nachdem ein neues Feature im Branch „feature/dunkelmodus“ fertig ist, erstellt die Entwicklerin einen Pull Request, damit das Team die Änderung vor der Übernahme prüfen kann.",
    wannVerwendet:
      "Sobald ein Feature- oder Bugfix-Branch fertig ist und in den Hauptbranch übernommen werden soll.",
    icon: "🔀",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-branch", "lk-code-review", "lk-merge"],
  },
  {
    id: "lk-code-review",
    kategorieId: KATEGORIE_ID,
    begriff: "Code Review",
    kurzerklaerung:
      "Beim Code Review prüfen andere Teammitglieder die vorgeschlagenen Änderungen eines Pull Requests, bevor sie übernommen werden.",
    erklaerung:
      "Ein Code Review ist wie das Vier-Augen-Prinzip beim Gegenlesen eines wichtigen Dokuments: Eine zweite Person prüft auf Fehler, Verständlichkeit und Nebenwirkungen, bevor etwas final freigegeben wird. Reviewer:innen können Kommentare hinterlassen, Änderungen anfordern oder den Pull Request freigeben.",
    beispiel:
      "Ein Kollege liest den Pull Request durch, findet eine unklare Fehlerbehandlung und bittet um eine Anpassung, bevor er die Änderung freigibt.",
    wannVerwendet:
      "Bevor ein Pull Request in den Hauptbranch übernommen wird – als Qualitätssicherung im Team.",
    icon: "🔎",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-pull-request"],
  },
  {
    id: "lk-issue",
    kategorieId: KATEGORIE_ID,
    begriff: "Issue",
    kurzerklaerung:
      "Ein Issue ist ein dokumentierter Aufgaben-, Fehler- oder Diskussionseintrag zu einem Repository auf GitHub.",
    erklaerung:
      "Ein Issue ist wie ein Eintrag in einem gemeinsamen Aufgabenbuch: Jeder kann dort ein Problem melden, eine Idee vorschlagen oder eine offene Frage festhalten, die dann diskutiert und irgendwann erledigt wird. Issues lassen sich mit Labels, Zuständigkeiten und Pull Requests verknüpfen.",
    beispiel:
      "Ein Nutzer meldet über ein Issue, dass die Anmeldemaske auf dem Smartphone falsch dargestellt wird. Das Team plant daraufhin die Behebung ein.",
    wannVerwendet:
      "Wenn ein Fehler gemeldet, eine neue Funktion vorgeschlagen oder Arbeit nachvollziehbar geplant werden soll.",
    icon: "📝",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-pull-request"],
  },
  {
    id: "lk-merge",
    kategorieId: KATEGORIE_ID,
    begriff: "Merge",
    kurzerklaerung:
      "Merge führt die Änderungen zweier Branches zusammen, sodass ein gemeinsamer, kombinierter Stand entsteht.",
    erklaerung:
      "Merge ist wie das Zusammenführen zweier bearbeiteter Kopien desselben Dokuments zu einer einzigen, vollständigen Fassung. Git versucht dabei automatisch, alle Änderungen sinnvoll zu kombinieren – gelingt das nicht, entsteht ein Merge-Konflikt.",
    beispiel:
      "Nach der Freigabe eines Pull Requests klickt ein Teammitglied auf „Merge“, wodurch die Änderungen aus „feature/dunkelmodus“ in den Hauptbranch übernommen werden.",
    wannVerwendet:
      "Am Ende eines Pull-Request-Prozesses, wenn ein Feature-Branch offiziell in den Hauptbranch übernommen wird.",
    befehl: "git merge feature/dunkelmodus",
    icon: "🔗",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-branch", "lk-pull-request", "lk-merge-konflikt"],
  },
  {
    id: "lk-merge-konflikt",
    kategorieId: KATEGORIE_ID,
    begriff: "Merge-Konflikt",
    kurzerklaerung:
      "Ein Merge-Konflikt entsteht, wenn zwei Branches dieselbe Stelle einer Datei unterschiedlich verändert haben und Git nicht automatisch entscheiden kann, welche Version gilt.",
    erklaerung:
      "Ein Merge-Konflikt ist wie zwei Personen, die denselben Satz in einem gemeinsamen Dokument unterschiedlich umformuliert haben – jemand muss von Hand entscheiden, welche Version bleibt oder wie beide kombiniert werden. Git markiert die betroffenen Stellen deutlich in der Datei, damit sie manuell aufgelöst werden können.",
    beispiel:
      "Zwei Entwickler ändern denselben Funktionsnamen in derselben Zeile unterschiedlich. Beim Merge muss einer der beiden die Konfliktstelle manuell bereinigen.",
    wannVerwendet:
      "Wenn beim Merge oder Pull zwei sich widersprechende Änderungen an derselben Codestelle aufeinandertreffen.",
    icon: "⚠️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-merge", "lk-branch"],
  },
  {
    id: "lk-github-actions",
    kategorieId: KATEGORIE_ID,
    begriff: "GitHub Actions (CI/CD)",
    kurzerklaerung:
      "GitHub Actions führt bei bestimmten Ereignissen (z. B. einem Push) automatisch definierte Arbeitsabläufe aus, etwa Tests oder Builds.",
    erklaerung:
      "Man kann sich GitHub Actions wie eine automatische Qualitätskontrolle am Fließband vorstellen: Sobald ein neues Werkstück (Commit) ankommt, prüfen automatisierte Stationen selbstständig, ob alles funktioniert, bevor es weitergeht. Diese Automatisierung wird oft „CI/CD“ genannt (Continuous Integration / Continuous Delivery).",
    beispiel:
      "Bei jedem Pull Request lässt ein Projekt automatisch alle Tests laufen und meldet direkt in der Oberfläche, ob sie erfolgreich waren.",
    wannVerwendet:
      "Um wiederkehrende Prüfungen wie Tests, Linting oder Builds automatisch bei jeder Änderung ausführen zu lassen, statt sie manuell anzustoßen.",
    icon: "⚙️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-pull-request"],
  },
  {
    id: "lk-geschuetzter-branch",
    kategorieId: KATEGORIE_ID,
    begriff: "Geschützter Branch",
    kurzerklaerung:
      "Ein geschützter Branch (Branch Protection) verhindert, dass Änderungen direkt und ungeprüft in einen wichtigen Branch wie „main“ gelangen.",
    erklaerung:
      "Ein geschützter Branch ist wie ein Tresor mit festen Regeln: Bevor etwas hineingelegt werden darf, müssen bestimmte Bedingungen erfüllt sein – etwa eine Freigabe durch Kolleg:innen oder erfolgreich durchlaufene automatische Prüfungen. So bleibt der wichtigste Branch stets in einem funktionierenden Zustand.",
    beispiel:
      "In einem Projekt ist „main“ so geschützt, dass niemand direkt pushen darf – jede Änderung muss zuerst über einen freigegebenen Pull Request laufen.",
    wannVerwendet:
      "Bei zentralen Branches, die stets stabil und funktionsfähig bleiben sollen, insbesondere in Teams.",
    icon: "🛡️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-pull-request", "lk-github-actions"],
  },
];
