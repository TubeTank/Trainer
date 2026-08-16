import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-entwicklungswerkzeuge";

export const entwicklungswerkzeugeLernkarten: Lernkarte[] = [
  {
    id: "lk-vscode",
    kategorieId: KATEGORIE_ID,
    begriff: "VS Code (Editor)",
    kurzerklaerung:
      "VS Code ist ein kostenloses Programm zum Schreiben und Bearbeiten von Programmcode.",
    erklaerung:
      "VS Code ist wie eine gut ausgestattete Werkbank für Programmierer: Es zeigt Code übersichtlich an, hebt Fehler farblich hervor und lässt sich mit Werkzeugen für fast jede Programmiersprache erweitern. Anders als ein einfacher Texteditor „versteht“ es den Code und hilft aktiv beim Schreiben.",
    beispiel:
      "Eine angehende Entwicklerin öffnet ihren Projektordner in VS Code und sieht links die Dateiliste, in der Mitte den Code und unten ein eingebautes Terminal für Befehle.",
    wannVerwendet:
      "Praktisch bei jeder Programmiersitzung – es ist die zentrale Arbeitsumgebung, in der Code geschrieben, gelesen und ausgeführt wird.",
    icon: "🖥️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-extension", "lk-workspace"],
  },
  {
    id: "lk-extension",
    kategorieId: KATEGORIE_ID,
    begriff: "Extension (Editor-Erweiterung)",
    kurzerklaerung:
      "Eine Extension ist ein Zusatzmodul, das dem Editor neue Funktionen hinzufügt.",
    erklaerung:
      "Extensions sind wie Apps auf dem Smartphone: Der Editor selbst kann schon viel, aber durch das Nachinstallieren einzelner Erweiterungen bekommt er gezielt neue Fähigkeiten – etwa Unterstützung für eine bestimmte Programmiersprache oder ein neues Farbschema.",
    beispiel:
      "Ein Entwickler installiert die Extension „Prettier“, damit sein Code beim Speichern automatisch sauber formatiert wird.",
    wannVerwendet:
      "Beim Einrichten eines neuen Rechners oder wenn für ein Projekt zusätzliche Unterstützung nötig ist, etwa für eine neue Sprache oder ein neues Werkzeug.",
    icon: "🧩",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-vscode", "lk-linter", "lk-formatter"],
  },
  {
    id: "lk-linter",
    kategorieId: KATEGORIE_ID,
    begriff: "Linter",
    kurzerklaerung:
      "Ein Linter prüft Code automatisch auf Fehler, verdächtige Muster und Stilverstöße, ohne ihn auszuführen.",
    erklaerung:
      "Ein Linter ist wie ein Korrekturleser für Programmcode: Er liest den Text durch und markiert verdächtige Stellen – etwa eine unbenutzte Variable oder einen wahrscheinlichen Tippfehler –, bevor das Programm überhaupt gestartet wird. So werden viele Probleme entdeckt, bevor sie zu echten Fehlern führen.",
    beispiel:
      "Der Linter markiert eine Zeile gelb, weil eine Variable definiert, aber nie verwendet wird – ein Hinweis auf vergessenen oder überflüssigen Code.",
    wannVerwendet:
      "Läuft meist automatisch im Hintergrund beim Schreiben von Code und zusätzlich oft als Prüfschritt, bevor Änderungen eingecheckt werden.",
    befehl: "npx eslint .",
    icon: "🔍",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-formatter", "lk-debugger"],
  },
  {
    id: "lk-formatter",
    kategorieId: KATEGORIE_ID,
    begriff: "Formatter (Code-Formatierung)",
    kurzerklaerung:
      "Ein Formatter bringt Code automatisch in ein einheitliches, gut lesbares Erscheinungsbild.",
    erklaerung:
      "Ein Formatter ist wie eine automatische Textkorrektur, die Einrückungen, Abstände und Zeilenumbrüche vereinheitlicht, ohne den Inhalt zu verändern. Dadurch sieht der Code egal von wem er geschrieben wurde immer gleich ordentlich aus, was das Lesen im Team erheblich erleichtert.",
    beispiel:
      "Beim Speichern einer Datei richtet der Formatter automatisch alle Einrückungen aus und setzt einheitliche Anführungszeichen, ohne dass sich die Funktion des Codes ändert.",
    wannVerwendet:
      "Meist automatisch beim Speichern einer Datei oder als Prüfschritt vor dem Einchecken, damit der Code-Stil im ganzen Projekt einheitlich bleibt.",
    befehl: "npx prettier --write .",
    icon: "🧹",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-linter", "lk-extension"],
  },
  {
    id: "lk-debugger",
    kategorieId: KATEGORIE_ID,
    begriff: "Debugger",
    kurzerklaerung:
      "Ein Debugger ist ein Werkzeug, mit dem man ein Programm Schritt für Schritt ausführt, um Fehler zu finden.",
    erklaerung:
      "Ein Debugger ist wie eine Zeitlupenfunktion für ein laufendes Programm: Statt alles auf einmal ablaufen zu lassen, kann man an bestimmten Stellen anhalten und genau nachsehen, welche Werte gerade in den Variablen stecken. So lässt sich Schritt für Schritt herausfinden, an welcher Stelle etwas schiefläuft.",
    beispiel:
      "Ein Entwickler startet den Debugger, weil eine Berechnung ein falsches Ergebnis liefert, und beobachtet dabei live, wie sich eine Zahl bei jedem Rechenschritt verändert.",
    wannVerwendet:
      "Wenn ein Fehler nicht durch bloßes Lesen des Codes zu finden ist und man den genauen Programmablauf live nachvollziehen muss.",
    befehl: "F5",
    icon: "🐞",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-breakpoint", "lk-linter"],
  },
  {
    id: "lk-breakpoint",
    kategorieId: KATEGORIE_ID,
    begriff: "Breakpoint",
    kurzerklaerung:
      "Ein Breakpoint ist eine markierte Stelle im Code, an der das Programm beim Debuggen automatisch anhält.",
    erklaerung:
      "Ein Breakpoint funktioniert wie ein Stoppschild an einer bestimmten Stelle der Straße: Sobald das Programm während des Debuggens dort ankommt, hält es an, und man kann sich in Ruhe umsehen, welche Werte gerade vorliegen, bevor man weiterfährt.",
    beispiel:
      "Ein Entwickler setzt einen Breakpoint direkt vor einer verdächtigen Berechnung, damit das Programm dort automatisch pausiert und er den Wert der beteiligten Variablen prüfen kann.",
    wannVerwendet:
      "Beim gezielten Suchen eines Fehlers, wenn man genau an einer bestimmten Stelle im Code den aktuellen Zustand des Programms sehen möchte.",
    icon: "🛑",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-debugger"],
  },
  {
    id: "lk-code-vervollstaendigung",
    kategorieId: KATEGORIE_ID,
    begriff: "Code-Vervollständigung (IntelliSense)",
    kurzerklaerung:
      "Code-Vervollständigung schlägt beim Tippen passende Fortsetzungen und Befehle automatisch vor.",
    erklaerung:
      "Code-Vervollständigung ist wie die Textvorschläge auf einem Smartphone: Während man tippt, erscheint eine Liste wahrscheinlicher nächster Wörter oder Befehle, aus der man einfach auswählen kann, statt alles von Hand einzutippen. Das spart Zeit und verhindert Tippfehler bei langen Befehlsnamen.",
    beispiel:
      "Kaum tippt ein Entwickler die ersten Buchstaben eines Funktionsnamens, erscheint eine Liste mit passenden Vorschlägen samt kurzer Erklärung, was die Funktion tut.",
    wannVerwendet:
      "Ständig während des Programmierens – sie unterstützt praktisch jede Zeile Code, die geschrieben wird.",
    icon: "💡",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-vscode", "lk-snippet"],
  },
  {
    id: "lk-workspace",
    kategorieId: KATEGORIE_ID,
    begriff: "Workspace-Einstellungen",
    kurzerklaerung:
      "Workspace-Einstellungen sind Konfigurationen, die nur für ein bestimmtes Projekt im Editor gelten.",
    erklaerung:
      "Workspace-Einstellungen sind wie individuelle Hausregeln für ein einzelnes Zimmer statt für die ganze Wohnung: Sie gelten nur innerhalb eines bestimmten Projektordners und überschreiben dort bei Bedarf die allgemeinen Editor-Einstellungen. So kann jedes Projekt eigene Vorgaben haben, etwa welcher Formatter genutzt wird.",
    beispiel:
      "Ein Team legt in den Workspace-Einstellungen fest, dass in diesem Projekt immer mit zwei Leerzeichen statt mit Tabs eingerückt wird, damit alle Teammitglieder denselben Stil verwenden.",
    wannVerwendet:
      "Beim Einrichten eines neuen Projekts oder wenn ein Team sich auf gemeinsame, projektspezifische Regeln einigen möchte.",
    icon: "⚙️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-vscode", "lk-extension"],
  },
  {
    id: "lk-snippet",
    kategorieId: KATEGORIE_ID,
    begriff: "Snippet",
    kurzerklaerung:
      "Ein Snippet ist ein vorgefertigter Code-Baustein, der sich mit wenigen Tastendrücken einfügen lässt.",
    erklaerung:
      "Ein Snippet ist wie ein Textbaustein in einem E-Mail-Programm: Statt eine oft wiederkehrende Formulierung jedes Mal neu zu tippen, ruft man sie über ein kurzes Kürzel ab und passt nur die Details an. Das spart Zeit bei häufig wiederkehrenden Code-Mustern.",
    beispiel:
      "Ein Entwickler tippt das Kürzel „forloop“ und der Editor fügt automatisch das komplette Grundgerüst einer Schleife ein, in dem nur noch die Details angepasst werden müssen.",
    wannVerwendet:
      "Bei wiederkehrenden, gut bekannten Code-Strukturen, die man nicht jedes Mal von Grund auf neu schreiben möchte.",
    icon: "✂️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-code-vervollstaendigung", "lk-vscode"],
  },
];
