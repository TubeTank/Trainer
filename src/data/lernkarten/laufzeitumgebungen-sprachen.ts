import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-laufzeitumgebungen-sprachen";

export const laufzeitumgebungenSprachenLernkarten: Lernkarte[] = [
  {
    id: "lk-laufzeitumgebung",
    kategorieId: KATEGORIE_ID,
    begriff: "Laufzeitumgebung (Runtime)",
    kurzerklaerung:
      "Eine Laufzeitumgebung ist das Programm, das im Hintergrund läuft und dafür sorgt, dass Quellcode auf dem Computer tatsächlich ausgeführt wird.",
    erklaerung:
      "Man kann sich eine Laufzeitumgebung wie eine Bühne mit Technik vorstellen, auf der ein geschriebenes Theaterstück (der Quellcode) erst wirklich aufgeführt wird. Ohne die passende Bühnentechnik bleibt das Stück nur Text auf Papier. Node.js ist z. B. die Laufzeitumgebung für JavaScript außerhalb des Browsers.",
    beispiel:
      "Ein JavaScript-Programm kann dank Node.js auch auf einem Server laufen, nicht nur im Browser – Node.js liefert dafür die notwendige Laufzeitumgebung.",
    wannVerwendet:
      "Immer im Hintergrund vorhanden, sobald Code ausgeführt wird – die Wahl der Laufzeitumgebung entscheidet, welche Sprache man dafür verwenden kann.",
    icon: "🏃",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-nodejs"],
  },
  {
    id: "lk-nodejs",
    kategorieId: KATEGORIE_ID,
    begriff: "Node.js",
    kurzerklaerung:
      "Node.js ist eine Laufzeitumgebung, mit der JavaScript-Code auch außerhalb eines Browsers ausgeführt werden kann, z. B. auf einem Server oder lokalen Rechner.",
    erklaerung:
      "Node.js ist wie eine zusätzliche Bühne für eine Sprache, die ursprünglich nur für den Browser gedacht war: Dank Node.js kann JavaScript auch Server betreiben, Dateien lesen oder Build-Werkzeuge wie Vite antreiben. Viele moderne Web-Projekte – auch dieses Trainer-Projekt – laufen während der Entwicklung über Node.js.",
    beispiel:
      "Der Befehl „npm run build“ in diesem Projekt wird von Node.js ausgeführt, um TypeScript zu prüfen und die Anwendung zu bauen.",
    wannVerwendet:
      "Bei der lokalen Entwicklung von Web-Projekten: zum Ausführen von Build-Tools, Skripten und Entwicklungsservern.",
    befehl: "node --version",
    icon: "🟩",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-laufzeitumgebung", "lk-npm"],
  },
  {
    id: "lk-python",
    kategorieId: KATEGORIE_ID,
    begriff: "Python",
    kurzerklaerung:
      "Python ist eine vielseitige, gut lesbare Programmiersprache, die häufig für Automatisierung, Datenanalyse und Backend-Systeme genutzt wird.",
    erklaerung:
      "Python liest sich fast wie gut strukturiertes Alltagsenglisch und gilt deshalb als besonders einsteigerfreundlich. Ähnlich wie Node.js für JavaScript braucht auch Python eine eigene Laufzeitumgebung (den „Python-Interpreter“), um Code direkt auszuführen.",
    beispiel:
      "Ein kurzes Python-Skript liest automatisch eine Excel-Liste ein und erstellt daraus eine Zusammenfassung – ganz ohne manuelles Kopieren.",
    wannVerwendet:
      "Bei Automatisierungsaufgaben, Datenauswertung oder Backend-Logik, häufig auch im Umfeld von KI- und Datenanalyse-Werkzeugen.",
    befehl: "python --version",
    icon: "🐍",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-interpreter", "lk-pip"],
  },
  {
    id: "lk-compiler",
    kategorieId: KATEGORIE_ID,
    begriff: "Compiler",
    kurzerklaerung:
      "Ein Compiler übersetzt Quellcode vollständig im Voraus in eine Form, die der Computer direkt ausführen kann.",
    erklaerung:
      "Ein Compiler ist wie ein Übersetzer, der ein ganzes Buch komplett in eine andere Sprache überträgt, bevor es überhaupt gelesen wird. Erst danach entsteht das fertige, ausführbare Ergebnis. TypeScript wird beispielsweise von einem Compiler nach JavaScript übersetzt, bevor es im Browser läuft.",
    beispiel:
      "Beim Befehl „tsc“ in diesem Projekt übersetzt der TypeScript-Compiler den Quellcode und prüft ihn gleichzeitig auf Typfehler.",
    wannVerwendet:
      "Wenn Quellcode vor der Ausführung geprüft, optimiert oder in eine andere Sprache/Form übersetzt werden muss.",
    icon: "🏗️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-interpreter"],
  },
  {
    id: "lk-interpreter",
    kategorieId: KATEGORIE_ID,
    begriff: "Interpreter",
    kurzerklaerung:
      "Ein Interpreter liest und führt Quellcode Zeile für Zeile direkt aus, ohne ihn vorher komplett zu übersetzen.",
    erklaerung:
      "Ein Interpreter ist wie ein Simultandolmetscher, der einen Vortrag Satz für Satz direkt live übersetzt, statt vorher das ganze Manuskript zu übertragen. Das macht den Start schneller, kann aber bei der Ausführung selbst etwas langsamer sein als vorkompilierter Code. Python-Code wird typischerweise so ausgeführt.",
    beispiel:
      "Startet man ein Python-Skript, liest der Python-Interpreter jede Zeile nacheinander ein und führt sie sofort aus.",
    wannVerwendet:
      "Bei Sprachen wie Python oder JavaScript, die typischerweise direkt ausgeführt werden, ohne einen separaten, vorgeschalteten Übersetzungsschritt für die gesamte Datei.",
    icon: "🗣️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-compiler", "lk-python"],
  },
  {
    id: "lk-package-manager",
    kategorieId: KATEGORIE_ID,
    begriff: "Package Manager",
    kurzerklaerung:
      "Ein Package Manager lädt fertige Code-Bausteine (Pakete/Bibliotheken) automatisch herunter, installiert sie und verwaltet ihre Versionen.",
    erklaerung:
      "Ein Package Manager ist wie ein Bestellsystem für ein Ersatzteillager: Statt jedes Bauteil selbst herzustellen, bestellt man es mit einem Befehl in der passenden Version – inklusive aller Teile, die dieses Bauteil selbst wieder benötigt. Jede Programmiersprache hat meist ihren eigenen Package Manager, z. B. npm für JavaScript oder pip für Python.",
    beispiel:
      "Statt eine Datumsbibliothek selbst zu schreiben, installiert ein Entwickler sie mit einem einzigen Befehl über den passenden Package Manager.",
    wannVerwendet:
      "Immer dann, wenn fremder, bereits fertiger Code (eine Bibliothek) in ein eigenes Projekt eingebunden werden soll.",
    icon: "📦",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-npm", "lk-pip"],
  },
  {
    id: "lk-npm",
    kategorieId: KATEGORIE_ID,
    begriff: "npm",
    kurzerklaerung:
      "npm (Node Package Manager) ist der Standard-Package-Manager für JavaScript- und TypeScript-Projekte im Node.js-Umfeld.",
    erklaerung:
      "npm ist die konkrete Bestellstelle für das riesige Lager an JavaScript-Bausteinen: Über die Datei „package.json“ merkt sich ein Projekt, welche Pakete in welcher Version benötigt werden, damit sie jederzeit erneut installiert werden können.",
    beispiel:
      "Mit „npm install“ lädt dieses Trainer-Projekt automatisch alle in „package.json“ eingetragenen Abhängigkeiten wie Vite und TypeScript herunter.",
    wannVerwendet:
      "Beim Einrichten eines JavaScript/TypeScript-Projekts sowie beim Hinzufügen, Aktualisieren oder Entfernen von Bibliotheken.",
    befehl: "npm install",
    icon: "🅝",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-package-manager", "lk-nodejs"],
  },
  {
    id: "lk-pip",
    kategorieId: KATEGORIE_ID,
    begriff: "pip",
    kurzerklaerung:
      "pip ist der Standard-Package-Manager für Python-Projekte und installiert Python-Bibliotheken aus dem Python Package Index (PyPI).",
    erklaerung:
      "pip ist für Python das, was npm für JavaScript ist: die zentrale Bestellstelle für fertige Code-Bausteine. Benötigte Pakete werden meist in einer Datei wie „requirements.txt“ festgehalten, damit ein Projekt auf einem anderen Rechner identisch eingerichtet werden kann.",
    beispiel:
      "Mit „pip install pandas“ installiert ein Entwickler die beliebte Python-Bibliothek für Datenanalyse in sein Projekt.",
    wannVerwendet:
      "Beim Einrichten eines Python-Projekts oder beim Hinzufügen einer Python-Bibliothek.",
    befehl: "pip install pandas",
    icon: "🐍",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-package-manager", "lk-python"],
  },
  {
    id: "lk-versionsmanager",
    kategorieId: KATEGORIE_ID,
    begriff: "Versionsmanager (nvm/pyenv)",
    kurzerklaerung:
      "Ein Versionsmanager erlaubt es, mehrere Versionen derselben Laufzeitumgebung (z. B. verschiedene Node.js- oder Python-Versionen) parallel zu installieren und gezielt zu wechseln.",
    erklaerung:
      "Ein Versionsmanager ist wie ein Schrank mit mehreren Werkzeugversionen desselben Werkzeugs: Je nach Projekt greift man gezielt zur passenden Version, statt immer nur die eine installierte Version zu haben. Das ist wichtig, weil unterschiedliche Projekte manchmal unterschiedliche Versionen derselben Sprache benötigen.",
    beispiel:
      "Ein Entwickler nutzt „nvm“, um für ein altes Projekt kurzzeitig auf eine ältere Node.js-Version zu wechseln, ohne die aktuelle Version für andere Projekte zu verlieren.",
    wannVerwendet:
      "Wenn mehrere Projekte auf demselben Rechner unterschiedliche Versionen von Node.js, Python & Co. benötigen.",
    icon: "🔀",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-nodejs", "lk-python"],
  },
];
