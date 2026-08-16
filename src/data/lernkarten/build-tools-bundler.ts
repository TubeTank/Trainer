import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-build-tools-bundler";

export const buildToolsBundlerLernkarten: Lernkarte[] = [
  {
    id: "lk-bundler",
    kategorieId: KATEGORIE_ID,
    begriff: "Bundler",
    kurzerklaerung:
      "Ein Bundler fasst viele einzelne Code- und Ressourcendateien eines Projekts zu wenigen, für den Browser optimierten Dateien zusammen.",
    erklaerung:
      "Man kann sich einen Bundler wie eine Packstation vorstellen: Ein Projekt besteht oft aus hunderten einzelnen Zutaten – JavaScript-Dateien, Bilder, Stylesheets –, die alle einzeln nachzuliefern viel zu langsam wäre. Der Bundler packt alles sinnvoll zu wenigen, kompakten Paketen zusammen, die der Browser effizient laden kann.",
    beispiel:
      "Ein Projekt mit 80 einzelnen TypeScript-Dateien wird vom Bundler zu zwei oder drei JavaScript-Dateien zusammengefasst, die die Website tatsächlich an den Browser ausliefert.",
    wannVerwendet:
      "Immer wenn ein Webprojekt für die Auslieferung vorbereitet wird – meist unsichtbar im Hintergrund, ausgelöst durch einen Build- oder Start-Befehl.",
    icon: "📦",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-vite", "lk-dist-ordner", "lk-minifizierung"],
  },
  {
    id: "lk-vite",
    kategorieId: KATEGORIE_ID,
    begriff: "Vite",
    kurzerklaerung:
      "Vite ist ein modernes Build-Werkzeug, das einen schnellen Entwicklungsserver und einen Bundler für die fertige Anwendung in einem Paket vereint.",
    erklaerung:
      "Vite ist wie eine gut sortierte Werkstatt, die zwei Werkzeuge in einem Griff vereint: eines zum schnellen Ausprobieren während der Arbeit, eines zum sauberen Verpacken des fertigen Ergebnisses. Während der Entwicklung liefert Vite Änderungen fast augenblicklich an den Browser, für die Auslieferung baut es daraus ein optimiertes Paket.",
    beispiel:
      "Dieses Trainer-Projekt selbst nutzt Vite: Während der Entwicklung startet man den Server mit npm run dev, für die fertige Anwendung erzeugt npm run build ein optimiertes Paket im dist-Ordner.",
    wannVerwendet:
      "Beim Start eines neuen Webprojekts als Grundgerüst sowie täglich beim lokalen Entwickeln und beim finalen Erstellen der Anwendung.",
    befehl: "npm run dev",
    icon: "⚡",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-bundler", "lk-dev-server", "lk-hot-module-replacement"],
  },
  {
    id: "lk-transpilation",
    kategorieId: KATEGORIE_ID,
    begriff: "Transpilation",
    kurzerklaerung:
      "Transpilation ist die automatische Übersetzung von Code aus einer modernen oder erweiterten Sprachvariante in eine Form, die möglichst viele Umgebungen verstehen.",
    erklaerung:
      "Transpilation funktioniert wie eine Übersetzung zwischen zwei eng verwandten Sprachen: Der Code wird nicht in etwas völlig anderes verwandelt, sondern nur in eine gleichwertige Form gebracht, die auch ältere oder andere Umgebungen verstehen. So schreibt man TypeScript mit modernen Sprachfeatures, während am Ende ganz gewöhnliches JavaScript herauskommt, das jeder Browser ausführen kann.",
    beispiel:
      "Der TypeScript-Code einer Lernkarten-Komponente mit Typangaben wird beim Build zu reinem JavaScript ohne Typen transpiliert, das der Browser direkt ausführen kann.",
    wannVerwendet:
      "Automatisch bei jedem Build- oder Entwicklungsvorgang, sobald Code in TypeScript oder einer anderen Sprache geschrieben wird, die der Browser nicht direkt versteht.",
    icon: "🔄",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-typescript", "lk-bundler"],
  },
  {
    id: "lk-hot-module-replacement",
    kategorieId: KATEGORIE_ID,
    begriff: "Hot Module Replacement",
    kurzerklaerung:
      "Hot Module Replacement (HMR) ersetzt geänderte Code-Teile direkt im laufenden Browser, ohne die ganze Seite neu zu laden.",
    erklaerung:
      "Man kann sich HMR wie den Austausch einer einzelnen Glühbirne in einem beleuchteten Raum vorstellen, statt den Raum komplett abzudunkeln und neu zu beleuchten: Nur das geänderte Teil wird ersetzt, der restliche Zustand der Anwendung – etwa ausgefüllte Formularfelder – bleibt erhalten. Das macht das Entwickeln spürbar flüssiger und schneller.",
    beispiel:
      "Während der Trainer-Entwicklung wird der Text einer Lernkarten-Komponente geändert und gespeichert – die Ansicht im Browser aktualisiert sich sofort, ohne dass die Seite neu lädt oder der aktuell geöffnete Karteikartenstapel verloren geht.",
    wannVerwendet:
      "Ständig während der lokalen Entwicklung mit laufendem Entwicklungsserver, bei jedem Speichern einer Datei.",
    icon: "🔥",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-dev-server", "lk-vite"],
  },
  {
    id: "lk-minifizierung",
    kategorieId: KATEGORIE_ID,
    begriff: "Minifizierung",
    kurzerklaerung:
      "Minifizierung entfernt aus fertigem Code alles, was nur für Menschen wichtig ist, um die Dateigröße für die Auslieferung zu verkleinern.",
    erklaerung:
      "Minifizierung ist wie das Kürzen eines ausführlichen Briefs auf ein Telegramm: Leerzeichen, Zeilenumbrüche, Kommentare und lange, sprechende Variablennamen werden entfernt oder durch kürzere ersetzt, weil der Computer sie nicht braucht – nur Menschen beim Lesen. Das Ergebnis ist funktional identisch, aber deutlich kleiner und schneller zu laden.",
    beispiel:
      "Eine JavaScript-Datei mit 500 Kilobyte gut lesbarem, kommentiertem Code wird beim Build auf 120 Kilobyte minifizierten, für Menschen kaum noch lesbaren Code reduziert.",
    wannVerwendet:
      "Automatisch beim Erstellen der finalen, für die Veröffentlichung bestimmten Version einer Anwendung, nicht während der lokalen Entwicklung.",
    icon: "🗜️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-bundler", "lk-dist-ordner"],
  },
  {
    id: "lk-source-map",
    kategorieId: KATEGORIE_ID,
    begriff: "Source Map",
    kurzerklaerung:
      "Eine Source Map ist eine Übersetzungstabelle, die minifizierten oder transpilierten Code wieder dem ursprünglichen Quellcode zuordnet.",
    erklaerung:
      "Eine Source Map ist wie ein Lageplan, der von der fertig gedruckten Landkarte zurück zu den ursprünglichen Bauplänen führt: Ohne sie sähe man im Browser nur unleserlichen, minifizierten Code, mit ihr zeigt die Fehlermeldung genau die passende Zeile im lesbaren Original-Quellcode. Das macht das Aufspüren von Fehlern in der fertigen Anwendung erst praktikabel.",
    beispiel:
      "Ein Fehler tritt in der live geschalteten Anwendung auf. Dank der zugehörigen Source Map zeigt der Browser trotz minifiziertem Code die exakte Zeile in der ursprünglichen TypeScript-Datei an.",
    wannVerwendet:
      "Beim Debuggen einer gebauten Anwendung im Browser sowie automatisch, wenn der Bundler beim Erstellen des Builds Source Maps mit erzeugt.",
    icon: "🗺️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-minifizierung", "lk-transpilation", "lk-dist-ordner"],
  },
  {
    id: "lk-dist-ordner",
    kategorieId: KATEGORIE_ID,
    begriff: "Dist-Ordner (Build-Artefakt)",
    kurzerklaerung:
      "Der Dist-Ordner enthält die fertig gebaute, auslieferbare Version einer Anwendung – das Ergebnis des Build-Vorgangs.",
    erklaerung:
      "Der Dist-Ordner ist wie das fertig verpackte Produkt am Ende eines Fließbands, während der übrige Quellcode eher den Werkstattbereich mit Rohmaterial und Werkzeugen darstellt. Er wird nicht von Hand geschrieben, sondern bei jedem Build automatisch neu erzeugt, und genau diesen Ordner lädt man später auf einen Webserver hoch.",
    beispiel:
      "Nach npm run build entsteht im Trainer-Projekt ein Ordner namens dist mit optimierten HTML-, CSS- und JavaScript-Dateien, die direkt auf einen Webserver hochgeladen werden können.",
    wannVerwendet:
      "Nach jedem Build-Vorgang, insbesondere kurz vor der Veröffentlichung einer neuen Version der Anwendung.",
    befehl: "npm run build",
    icon: "🏗️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-bundler", "lk-minifizierung", "lk-vite"],
  },
  {
    id: "lk-dev-server",
    kategorieId: KATEGORIE_ID,
    begriff: "Entwicklungsserver (Dev Server)",
    kurzerklaerung:
      "Der Entwicklungsserver liefert die Anwendung während der Entwicklung lokal im Browser aus und aktualisiert sie bei Änderungen automatisch.",
    erklaerung:
      "Der Entwicklungsserver ist wie eine private Testbühne im eigenen Wohnzimmer: Man kann dort ein Stück proben und sofort sehen, wie es wirkt, ohne es schon vor echtem Publikum aufzuführen. Er läuft nur auf dem eigenen Rechner, meist unter einer Adresse wie localhost, und ist nicht für andere Nutzer im Internet gedacht.",
    beispiel:
      "Mit npm run dev startet der Trainer lokal auf http://localhost:5173 – dort kann man die Lernkarten-App im Browser testen, während man am Code arbeitet.",
    wannVerwendet:
      "Bei jeder lokalen Entwicklungssitzung, meist direkt nach dem Öffnen des Projekts als einer der ersten Schritte.",
    befehl: "npm run dev",
    icon: "🖥️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-vite", "lk-hot-module-replacement"],
  },
  {
    id: "lk-typescript",
    kategorieId: KATEGORIE_ID,
    begriff: "TypeScript",
    kurzerklaerung:
      "TypeScript ist eine Erweiterung von JavaScript um ein Typsystem, das Fehler schon beim Schreiben des Codes statt erst beim Ausführen aufdeckt.",
    erklaerung:
      "TypeScript ist wie ein Formular mit klar beschrifteten Feldern statt eines leeren Blattes Papier: Man legt vorab fest, welche Art von Wert – etwa Zahl, Text oder eine bestimmte Struktur – an welcher Stelle erwartet wird, und bekommt sofort eine Warnung, wenn etwas nicht dazu passt. JavaScript selbst kennt solche Vorgaben nicht und würde den Fehler oft erst beim Ausführen zeigen.",
    beispiel:
      "Im Trainer-Projekt legt das Interface Lernkarte fest, dass begriff immer ein Text sein muss – versucht jemand versehentlich eine Zahl einzutragen, meldet TypeScript den Fehler schon beim Programmieren, nicht erst beim Testen im Browser.",
    wannVerwendet:
      "Beim Schreiben von Code in jedem TypeScript-Projekt, unterstützt durch den Editor bereits während des Tippens, zusätzlich abgesichert beim Build.",
    icon: "🔷",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-transpilation", "lk-vite"],
  },
];
