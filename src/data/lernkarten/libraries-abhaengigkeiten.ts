import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-libraries-abhaengigkeiten";

export const librariesAbhaengigkeitenLernkarten: Lernkarte[] = [
  {
    id: "lk-bibliothek",
    kategorieId: KATEGORIE_ID,
    begriff: "Bibliothek (Library)",
    kurzerklaerung:
      "Eine Bibliothek ist fertiger, wiederverwendbarer Code, den man in ein eigenes Projekt einbindet, statt ihn selbst zu schreiben.",
    erklaerung:
      "Eine Bibliothek ist wie ein Fertigteil aus dem Baumarkt statt eines selbst gesägten Bauteils: Jemand anderes hat das Problem bereits gelöst, getestet und zur Wiederverwendung bereitgestellt. So muss man nicht jedes Rad neu erfinden, etwa für Datumsberechnungen oder Diagramme.",
    beispiel:
      "Statt eine eigene Funktion zum Formatieren von Datumsangaben zu schreiben, bindet ein Entwickler eine bewährte Datums-Bibliothek in sein Projekt ein.",
    wannVerwendet:
      "Immer dann, wenn eine Funktionalität benötigt wird, für die bereits eine bewährte, fertige Lösung existiert.",
    icon: "📚",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-package-json", "lk-abhaengigkeit"],
  },
  {
    id: "lk-package-json",
    kategorieId: KATEGORIE_ID,
    begriff: "package.json",
    kurzerklaerung:
      "package.json ist die zentrale Konfigurationsdatei eines JavaScript/TypeScript-Projekts, die u. a. alle benötigten Bibliotheken auflistet.",
    erklaerung:
      "Man kann sich package.json wie das Inhaltsverzeichnis und die Zutatenliste eines Rezepts vorstellen: Sie beschreibt, wie das Projekt heißt, welche Befehle es gibt (z. B. „build“ oder „dev“) und welche Bibliotheken in welcher Version benötigt werden. Jeder, der das Projekt öffnet, weiß dadurch sofort, was installiert werden muss.",
    beispiel:
      "In diesem Trainer-Projekt legt package.json fest, dass Vite und TypeScript als Werkzeuge benötigt werden, sowie die Befehle „npm run dev“ und „npm run build“.",
    wannVerwendet:
      "Bei jedem JavaScript/TypeScript-Projekt vorhanden – man schaut hinein, um zu verstehen, welche Bibliotheken und Befehle ein Projekt nutzt.",
    icon: "📋",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-bibliothek", "lk-lockfile", "lk-abhaengigkeit"],
  },
  {
    id: "lk-lockfile",
    kategorieId: KATEGORIE_ID,
    begriff: "Lockfile (package-lock.json)",
    kurzerklaerung:
      "Ein Lockfile hält exakt fest, welche Version jeder einzelnen Bibliothek (inklusive aller Unterabhängigkeiten) installiert wurde.",
    erklaerung:
      "Ein Lockfile ist wie ein detailliertes Einkaufsprotokoll statt einer groben Einkaufsliste: Während package.json oft nur eine ungefähre Versionsspanne nennt, hält das Lockfile die exakt installierte Version jedes einzelnen Bausteins fest. So installiert jede Person im Team garantiert dieselben Versionen.",
    beispiel:
      "Zwei Entwickler führen „npm install“ auf unterschiedlichen Rechnern aus – dank package-lock.json erhalten beide exakt dieselben Bibliotheksversionen.",
    wannVerwendet:
      "Wird automatisch von npm erzeugt und aktualisiert; sollte immer mit ins Repository eingecheckt werden, damit Installationen reproduzierbar bleiben.",
    icon: "🔒",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-package-json", "lk-semver"],
  },
  {
    id: "lk-abhaengigkeit",
    kategorieId: KATEGORIE_ID,
    begriff: "Abhängigkeit (Dependency)",
    kurzerklaerung:
      "Eine Abhängigkeit ist eine externe Bibliothek, die ein Projekt benötigt, um zu funktionieren – direkt oder indirekt über andere Bibliotheken.",
    erklaerung:
      "Abhängigkeiten sind wie Zutaten in einem Rezept, die selbst wieder aus weiteren Zutaten bestehen: Eine eingebundene Bibliothek bringt oft weitere Bibliotheken mit, die sie selbst benötigt (transitive Abhängigkeiten). So kann aus einer einzigen Installation schnell ein ganzer Abhängigkeitsbaum entstehen.",
    beispiel:
      "Ein Projekt bindet eine Test-Bibliothek ein, die intern selbst wieder mehrere kleinere Hilfsbibliotheken als eigene Abhängigkeiten mitbringt.",
    wannVerwendet:
      "Immer dann, wenn ein Projekt fremden Code einbindet – jede eingebundene Bibliothek wird zu einer Abhängigkeit des eigenen Projekts.",
    icon: "🕸️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-bibliothek", "lk-dependency-konflikt", "lk-node-modules"],
  },
  {
    id: "lk-semver",
    kategorieId: KATEGORIE_ID,
    begriff: "SemVer (Semantic Versioning)",
    kurzerklaerung:
      "SemVer ist ein Versionierungsschema (z. B. 2.4.1), bei dem jede Zahl eine bestimmte Bedeutung hat: große, kleine oder fehlerbehebende Änderung.",
    erklaerung:
      "Man kann sich eine SemVer-Nummer wie eine Ampel mit drei Stufen vorstellen: Die erste Zahl signalisiert große, möglicherweise inkompatible Änderungen; die zweite neue Funktionen, die weiterhin kompatibel sind; die dritte reine Fehlerbehebungen. So lässt sich am Versionssprung ablesen, wie riskant eine Aktualisierung vermutlich ist.",
    beispiel:
      "Ein Update von Version 2.4.1 auf 2.4.2 gilt als sicherer Bugfix, während ein Sprung auf 3.0.0 auf mögliche Breaking Changes hindeutet.",
    wannVerwendet:
      "Beim Lesen von Versionsnummern in package.json oder beim Entscheiden, ob ein Update riskant sein könnte.",
    icon: "🔢",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-lockfile", "lk-package-json"],
  },
  {
    id: "lk-dev-dependencies",
    kategorieId: KATEGORIE_ID,
    begriff: "devDependencies vs. dependencies",
    kurzerklaerung:
      "dependencies werden für den Betrieb der fertigen Anwendung benötigt, devDependencies nur während der Entwicklung, z. B. für Build-Werkzeuge.",
    erklaerung:
      "Man kann sich devDependencies wie Werkzeuge in der Werkstatt vorstellen, die beim Bau eines Möbelstücks gebraucht werden, aber nicht mit ausgeliefert werden – anders als die eigentlichen Materialien (dependencies), die Teil des fertigen Produkts sind. So bleibt die fertige Anwendung schlank.",
    beispiel:
      "In diesem Trainer-Projekt stehen Vite und TypeScript als devDependencies in package.json, weil sie nur für Entwicklung und Build gebraucht werden, nicht im fertigen Ergebnis.",
    wannVerwendet:
      "Beim Einrichten eines Projekts entscheidet man pro Bibliothek, ob sie nur zur Entwicklungszeit oder auch im Betrieb gebraucht wird.",
    befehl: "npm install --save-dev vite",
    icon: "🛠️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-package-json", "lk-bibliothek"],
  },
  {
    id: "lk-dependency-konflikt",
    kategorieId: KATEGORIE_ID,
    begriff: "Dependency-Konflikt",
    kurzerklaerung:
      "Ein Dependency-Konflikt entsteht, wenn zwei benötigte Bibliotheken widersprüchliche Anforderungen an dieselbe Unterabhängigkeit stellen.",
    erklaerung:
      "Ein Dependency-Konflikt ist wie zwei Rezepte, die dieselbe Zutat in unterschiedlicher Sorte verlangen, aber nur eine Sorte im Haus sein soll. Package Manager versuchen solche Konflikte automatisch aufzulösen, was aber nicht immer reibungslos gelingt.",
    beispiel:
      "Zwei eingebundene Bibliotheken benötigen jeweils eine andere, nicht kompatible Version derselben dritten Bibliothek – die Installation schlägt fehl oder verhält sich unerwartet.",
    wannVerwendet:
      "Wenn eine Installation mit Versionsfehlern abbricht oder sich eine Anwendung nach einem Update unerwartet verhält.",
    icon: "⚠️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-abhaengigkeit", "lk-semver", "lk-lockfile"],
  },
  {
    id: "lk-node-modules",
    kategorieId: KATEGORIE_ID,
    begriff: "node_modules",
    kurzerklaerung:
      "node_modules ist der Ordner, in dem alle installierten Bibliotheken eines Projekts tatsächlich abgelegt werden.",
    erklaerung:
      "node_modules ist wie das Lager hinter der Werkstatt, in dem alle bestellten Fertigteile physisch liegen – package.json ist dagegen nur die Bestellliste. Der Ordner wird automatisch erzeugt und kann sehr groß werden, weshalb er nie manuell bearbeitet oder ins Repository eingecheckt wird.",
    beispiel:
      "Nach „npm install“ entsteht im Projektordner ein oft mehrere hundert Megabyte großer node_modules-Ordner mit allen Bibliotheken.",
    wannVerwendet:
      "Entsteht automatisch bei der Installation von Abhängigkeiten; wird üblicherweise über .gitignore von der Versionskontrolle ausgeschlossen.",
    icon: "🗃️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-abhaengigkeit", "lk-package-json"],
  },
  {
    id: "lk-peer-dependency",
    kategorieId: KATEGORIE_ID,
    begriff: "Peer Dependency",
    kurzerklaerung:
      "Eine Peer Dependency ist eine Bibliothek, die eine andere Bibliothek zwar benötigt, aber erwartet, dass das Hauptprojekt sie selbst mitbringt.",
    erklaerung:
      "Eine Peer Dependency ist wie eine Zusatzkomponente, die zu einem bestimmten Grundgerät passen muss, das aber der Kunde selbst schon besitzen soll, statt es doppelt mitzuliefern. So wird verhindert, dass z. B. dieselbe Bibliothek versehentlich mehrfach in unterschiedlichen Versionen im Projekt landet.",
    beispiel:
      "Ein Erweiterungspaket für ein Framework verlangt als Peer Dependency, dass das Hauptprojekt bereits eine bestimmte Version des Frameworks selbst installiert hat.",
    wannVerwendet:
      "Bei Erweiterungen oder Plugins, die eng mit einer bestimmten Version einer anderen, bereits vorhandenen Bibliothek zusammenarbeiten müssen.",
    icon: "🤝",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-abhaengigkeit", "lk-dependency-konflikt"],
  },
];
