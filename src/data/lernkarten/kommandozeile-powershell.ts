import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-kommandozeile-powershell";

export const kommandozeilePowershellLernkarten: Lernkarte[] = [
  {
    id: "lk-terminal",
    kategorieId: KATEGORIE_ID,
    begriff: "Terminal / Kommandozeile",
    kurzerklaerung:
      "Das Terminal ist ein Fenster, in dem man dem Computer Befehle als Text eingibt, statt mit Maus und Icons zu klicken.",
    erklaerung:
      "Man kann sich das Terminal wie ein Gespräch mit dem Computer in einer sehr direkten, knappen Sprache vorstellen: Man tippt eine Anweisung, drückt Enter, und bekommt sofort eine Antwort als Text zurück. Viele Entwickler-Werkzeuge – auch Git – werden über genau so ein Fenster bedient.",
    beispiel:
      "Statt im Datei-Explorer zu klicken, tippt ein Entwickler „cd Projekte“ ins Terminal, um direkt in den Projektordner zu wechseln.",
    wannVerwendet:
      "Praktisch bei jeder Entwickler-Tätigkeit: Git-Befehle, Programme starten, Pakete installieren, Skripte ausführen.",
    icon: "⌨️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-shell"],
  },
  {
    id: "lk-shell",
    kategorieId: KATEGORIE_ID,
    begriff: "Shell",
    kurzerklaerung:
      "Die Shell ist das Programm, das im Terminal läuft, Befehle entgegennimmt und ausführt.",
    erklaerung:
      "Wenn das Terminal das Fenster ist, ist die Shell der Übersetzer dahinter, der die eingetippten Befehle versteht und an das Betriebssystem weiterreicht. Es gibt verschiedene Shells mit eigener Syntax – zum Beispiel PowerShell (Windows) oder Bash (Linux/macOS).",
    beispiel:
      "Auf demselben Windows-Rechner kann man wahlweise PowerShell oder eine Bash-Shell wie Git Bash öffnen – beide sind Shells, aber mit unterschiedlicher Befehlssyntax.",
    wannVerwendet:
      "Immer im Hintergrund, sobald ein Terminal-Fenster geöffnet wird – die Wahl der Shell entscheidet über die genaue Befehlssyntax.",
    icon: "🐚",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-terminal", "lk-powershell", "lk-bash"],
  },
  {
    id: "lk-powershell",
    kategorieId: KATEGORIE_ID,
    begriff: "PowerShell",
    kurzerklaerung:
      "PowerShell ist die moderne Standard-Shell von Windows, die neben Text auch mit strukturierten Objekten arbeiten kann.",
    erklaerung:
      "PowerShell ist wie ein besonders vielseitiges Werkzeug im Windows-Werkzeugkasten: Statt nur reinen Text zwischen Befehlen weiterzureichen, gibt sie oft strukturierte Datenobjekte weiter, die sich gezielt filtern und weiterverarbeiten lassen. Befehle heißen dort typischerweise „Verb-Substantiv“, z. B. „Get-ChildItem“.",
    beispiel:
      "Mit „Get-ChildItem“ zeigt PowerShell den Inhalt eines Ordners an – das Windows-Äquivalent zu „ls“ in Bash.",
    wannVerwendet:
      "Als Standard-Terminal unter Windows, etwa um Dateioperationen, Skripte oder Entwicklerwerkzeuge auszuführen.",
    befehl: "Get-ChildItem",
    icon: "🪟",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-shell", "lk-bash"],
  },
  {
    id: "lk-bash",
    kategorieId: KATEGORIE_ID,
    begriff: "Bash",
    kurzerklaerung:
      "Bash ist eine weit verbreitete Shell, die auf Linux und macOS Standard ist und unter Windows z. B. über „Git Bash“ genutzt wird.",
    erklaerung:
      "Bash ist wie ein anderer Dialekt derselben Grundidee wie PowerShell: Auch hier tippt man Befehle ein, nur mit anderer Schreibweise und anderen Werkzeugnamen. Viele Anleitungen und Server-Dokumentationen im Netz gehen von Bash aus, da sie auf Linux-Servern der Standard ist.",
    beispiel:
      "Ein Entwickler nutzt unter Windows „Git Bash“, um Befehle aus einer Online-Anleitung eins zu eins übernehmen zu können, die für Linux geschrieben wurde.",
    wannVerwendet:
      "Wenn Anleitungen oder Server-Umgebungen Bash-Syntax voraussetzen, oder um plattformübergreifend dieselben Befehle zu nutzen.",
    befehl: "ls -la",
    icon: "🐧",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-shell", "lk-powershell"],
  },
  {
    id: "lk-pfad",
    kategorieId: KATEGORIE_ID,
    begriff: "Pfad (absolut & relativ)",
    kurzerklaerung:
      "Ein Pfad beschreibt, wo genau sich eine Datei oder ein Ordner im Dateisystem befindet – entweder vollständig (absolut) oder ausgehend vom aktuellen Ort (relativ).",
    erklaerung:
      "Ein absoluter Pfad ist wie eine vollständige Postadresse, die von überall aus funktioniert. Ein relativer Pfad ist wie eine Wegbeschreibung „zwei Türen weiter“ – sie gilt nur, wenn man weiß, wo man gerade steht. Genau das ist beim Ausführen von Befehlen im Terminal wichtig: Das aktuelle Arbeitsverzeichnis bestimmt, wohin ein relativer Pfad zeigt.",
    beispiel:
      "„C:\\Projekte\\Trainer\\src“ ist ein absoluter Pfad. „src\\data“ ist relativ und funktioniert nur, wenn man sich bereits im Ordner „Trainer“ befindet.",
    wannVerwendet:
      "Bei jedem Zugriff auf Dateien oder Ordner über die Kommandozeile, in Konfigurationsdateien oder in Programmcode.",
    icon: "🧭",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-arbeitsverzeichnis"],
  },
  {
    id: "lk-umgebungsvariable",
    kategorieId: KATEGORIE_ID,
    begriff: "Umgebungsvariable",
    kurzerklaerung:
      "Eine Umgebungsvariable ist ein benannter Wert, der Programmen im Hintergrund zur Verfügung steht – etwa Einstellungen oder geheime Zugangsdaten.",
    erklaerung:
      "Umgebungsvariablen sind wie Notizzettel, die überall im System hängen und von Programmen gelesen werden können, ohne dass man sie im Code fest hinterlegen muss. Das ist besonders wichtig für Dinge wie Passwörter oder API-Schlüssel, die niemals direkt im Quellcode stehen sollten.",
    beispiel:
      "Ein Programm liest die Umgebungsvariable „API_KEY“ aus, statt den Schlüssel fest im Quellcode zu speichern – so bleibt er außerhalb des Repositories.",
    wannVerwendet:
      "Um Konfigurationswerte und Geheimnisse getrennt vom Code zu halten, insbesondere zwischen verschiedenen Rechnern oder Umgebungen (lokal, Server).",
    befehl: "$env:API_KEY",
    icon: "🔧",
    schwierigkeit: "schwer",
  },
  {
    id: "lk-parameter-flag",
    kategorieId: KATEGORIE_ID,
    begriff: "Parameter / Flag",
    kurzerklaerung:
      "Parameter (auch Flags genannt) sind zusätzliche Angaben hinter einem Befehl, die dessen Verhalten gezielt anpassen.",
    erklaerung:
      "Parameter sind wie Zusatzwünsche bei einer Bestellung: Der Grundbefehl bleibt gleich, aber durch Zusätze wird genau festgelegt, wie er ausgeführt werden soll. Sie beginnen meist mit einem Bindestrich und können einen eigenen Wert mitbringen.",
    beispiel:
      "„git log --oneline“ zeigt die Commit-Historie kompakt an – „--oneline“ ist hier der Parameter, der das Standardverhalten von „git log“ verändert.",
    wannVerwendet:
      "Immer dann, wenn ein Standardbefehl leicht angepasst werden soll, statt einen komplett anderen Befehl zu suchen.",
    befehl: "git log --oneline",
    icon: "🎛️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-terminal"],
  },
  {
    id: "lk-pipe",
    kategorieId: KATEGORIE_ID,
    begriff: "Pipe",
    kurzerklaerung:
      "Eine Pipe (Symbol „|“) leitet die Ausgabe eines Befehls direkt als Eingabe an den nächsten Befehl weiter.",
    erklaerung:
      "Eine Pipe funktioniert wie ein Fließband zwischen zwei Arbeitsstationen: Das Ergebnis der ersten Station wird direkt zur zweiten weitergereicht, ohne dass es zwischengespeichert werden muss. So lassen sich mehrere einfache Befehle zu einer leistungsfähigen Befehlskette kombinieren.",
    beispiel:
      "„git log --oneline | Select-String \"fix\"“ zeigt aus der Commit-Historie nur die Zeilen an, die das Wort „fix“ enthalten.",
    wannVerwendet:
      "Wenn die Ausgabe eines Befehls gefiltert, sortiert oder weiterverarbeitet werden soll, ohne Zwischenschritte manuell zu erledigen.",
    icon: "🚰",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-parameter-flag"],
  },
  {
    id: "lk-arbeitsverzeichnis",
    kategorieId: KATEGORIE_ID,
    begriff: "Aktuelles Arbeitsverzeichnis",
    kurzerklaerung:
      "Das aktuelle Arbeitsverzeichnis ist der Ordner, „in dem“ sich das Terminal gerade befindet und auf den sich relative Pfade beziehen.",
    erklaerung:
      "Man kann sich das Arbeitsverzeichnis wie den Raum vorstellen, in dem man gerade steht: Alle Wegbeschreibungen („zwei Türen weiter“) beziehen sich darauf, wo man sich aktuell befindet. Mit „cd“ (change directory) wechselt man in einen anderen Raum, also einen anderen Ordner.",
    beispiel:
      "Ein Entwickler wechselt mit „cd Trainer“ in den Projektordner, bevor er dort „npm run build“ ausführt – der Befehl wirkt sich nur auf das aktuelle Arbeitsverzeichnis aus.",
    wannVerwendet:
      "Vor fast jedem Terminal-Befehl, der sich auf Dateien oder ein Projekt bezieht – man muss zuerst am richtigen Ort stehen.",
    befehl: "cd Trainer",
    icon: "📍",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-pfad"],
  },
  {
    id: "lk-execution-policy",
    kategorieId: KATEGORIE_ID,
    begriff: "Execution Policy",
    kurzerklaerung:
      "Die Execution Policy ist eine Sicherheitseinstellung von PowerShell, die festlegt, ob und welche Skripte auf einem Rechner ausgeführt werden dürfen.",
    erklaerung:
      "Man kann sich die Execution Policy wie ein Türschloss vorstellen, das standardmäßig verhindert, dass unbekannte, potenziell gefährliche Skripte einfach durch Doppelklick ausgeführt werden. Das schützt davor, versehentlich schädlichen Code zu starten – kann aber auch legitime Entwickler-Skripte blockieren, wenn die Einstellung zu restriktiv ist.",
    beispiel:
      "Ein neu installiertes Entwicklertool liefert ein PowerShell-Setup-Skript mit, das beim ersten Ausführen mit einer Fehlermeldung zur Execution Policy blockiert wird, bis die Richtlinie angepasst wird.",
    wannVerwendet:
      "Wenn ein PowerShell-Skript mit einer Sicherheitsmeldung nicht startet – dann lohnt ein bewusster, informierter Blick auf die aktuelle Execution Policy, statt sie blind zu lockern.",
    befehl: "Get-ExecutionPolicy",
    icon: "🔒",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-powershell"],
  },
];
