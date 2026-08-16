import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-git-grundlagen";

export const gitGrundlagenLernkarten: Lernkarte[] = [
  {
    id: "lk-repository",
    kategorieId: KATEGORIE_ID,
    begriff: "Repository",
    kurzerklaerung:
      "Ein Repository (kurz „Repo“) ist der gesamte Projektordner inklusive seiner kompletten Änderungshistorie.",
    erklaerung:
      "Stell dir ein Repository wie einen Aktenordner vor, in dem nicht nur der aktuelle Stand aller Dokumente liegt, sondern auch jede frühere Version davon – lückenlos und durchsuchbar. Technisch ist es ein Verzeichnis, das neben den eigentlichen Dateien einen versteckten .git-Unterordner enthält. Dort speichert Git alle Informationen über Commits, Branches und die Historie.",
    beispiel:
      "Ein Team entwickelt eine Website. Das komplette Projekt – HTML, CSS, Bilder und jede jemals gespeicherte Änderung daran – liegt in einem Repository, das z. B. auf GitHub gehostet wird.",
    wannVerwendet:
      "Ganz am Anfang eines Projekts: Man erstellt entweder ein neues Repository oder klont ein bestehendes, bevor überhaupt mit der Arbeit begonnen wird.",
    icon: "📦",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-clone", "lk-working-tree"],
  },
  {
    id: "lk-commit",
    kategorieId: KATEGORIE_ID,
    begriff: "Commit",
    kurzerklaerung:
      "Ein Commit ist ein gespeicherter Schnappschuss des Projekts zu einem bestimmten Zeitpunkt, versehen mit einer Beschreibung.",
    erklaerung:
      "Ein Commit ist wie ein Foto, das man vom aktuellen Zustand eines Zimmers macht, bevor man weiter aufräumt – man kann später jederzeit zu diesem Foto zurückkehren. Jeder Commit bekommt eine eindeutige Kennung und eine Nachricht, die erklärt, was sich geändert hat und warum.",
    beispiel:
      "Nachdem ein Entwickler einen Login-Fehler behoben hat, erstellt er einen Commit mit der Nachricht „Fix: Login schlägt bei leerem Passwortfeld fehl“.",
    wannVerwendet:
      "Immer dann, wenn ein sinnvoller, in sich abgeschlossener Arbeitsschritt erledigt ist – oft mehrmals täglich.",
    befehl: "git commit -m \"Kurze Beschreibung der Änderung\"",
    icon: "📸",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-staging-area", "lk-working-tree"],
  },
  {
    id: "lk-branch",
    kategorieId: KATEGORIE_ID,
    begriff: "Branch",
    kurzerklaerung:
      "Ein Branch ist eine eigenständige Entwicklungslinie innerhalb desselben Repositories.",
    erklaerung:
      "Man kann sich einen Branch wie einen Nebenpfad vorstellen, der vom Hauptweg abzweigt: Man kann dort Dinge ausprobieren oder an einem neuen Feature arbeiten, ohne den Hauptweg (meist „main“ genannt) zu verändern. Später lässt sich der Nebenpfad wieder mit dem Hauptweg zusammenführen.",
    beispiel:
      "Eine Entwicklerin erstellt den Branch „feature/dunkelmodus“, um einen Dark Mode zu bauen, während der Rest des Teams ungestört am Hauptbranch weiterarbeitet.",
    wannVerwendet:
      "Sobald an einer neuen Funktion, einem Experiment oder einer Fehlerbehebung gearbeitet wird, die den stabilen Hauptstand nicht gefährden soll.",
    befehl: "git branch feature/dunkelmodus",
    icon: "🌿",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-commit"],
  },
  {
    id: "lk-push",
    kategorieId: KATEGORIE_ID,
    begriff: "Push",
    kurzerklaerung:
      "Push überträgt lokal gespeicherte Commits auf einen entfernten Server (z. B. GitHub), damit andere sie sehen können.",
    erklaerung:
      "Push ist wie das Hochladen aktualisierter Dokumente in einen gemeinsamen Cloud-Ordner: Erst wenn hochgeladen wurde, sehen die Kolleg:innen die neue Version. Ohne Push bleiben Commits nur auf dem eigenen Rechner.",
    beispiel:
      "Nach drei lokalen Commits lädt ein Entwickler seine Änderungen mit einem Push auf GitHub hoch, damit sie in eine Pull-Request-Prüfung einfließen können.",
    wannVerwendet:
      "Nachdem lokal ein oder mehrere Commits erstellt wurden und diese mit dem Team oder dem zentralen Server geteilt werden sollen.",
    befehl: "git push",
    icon: "⬆️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-commit", "lk-pull"],
  },
  {
    id: "lk-pull",
    kategorieId: KATEGORIE_ID,
    begriff: "Pull",
    kurzerklaerung:
      "Pull holt neue Änderungen vom entfernten Server und fügt sie direkt in die eigene lokale Arbeitskopie ein.",
    erklaerung:
      "Pull ist wie das Herunterladen der neuesten Version eines gemeinsamen Dokuments und das gleichzeitige Einarbeiten der eigenen offenen Änderungen. Im Hintergrund kombiniert Git dabei zwei Schritte: Fetch (herunterladen) und Merge (zusammenführen).",
    beispiel:
      "Bevor ein Entwickler morgens weiterarbeitet, macht er einen Pull, um die über Nacht von Kolleg:innen eingespielten Änderungen zu übernehmen.",
    wannVerwendet:
      "Zu Beginn eines Arbeitstages oder bevor man mit neuen eigenen Änderungen startet, um auf dem aktuellen Stand zu sein.",
    befehl: "git pull",
    icon: "⬇️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-fetch", "lk-push"],
  },
  {
    id: "lk-fetch",
    kategorieId: KATEGORIE_ID,
    begriff: "Fetch",
    kurzerklaerung:
      "Fetch lädt neue Änderungen vom entfernten Server herunter, ohne sie in die eigene Arbeitskopie einzumischen.",
    erklaerung:
      "Fetch ist wie das Abrufen neuer Post aus dem Briefkasten, ohne die Briefe schon zu öffnen und zu bearbeiten: Man sieht, dass es Neuigkeiten gibt, entscheidet aber selbst, wann und wie man sie einarbeitet. Das unterscheidet Fetch von Pull, der die Änderungen sofort übernimmt.",
    beispiel:
      "Ein Entwickler macht einen Fetch, um zu sehen, welche neuen Commits auf dem Server liegen, bevor er entscheidet, ob er sie schon in seinen eigenen Branch übernehmen möchte.",
    wannVerwendet:
      "Wenn man vorsichtig prüfen möchte, was sich remote geändert hat, bevor man es mit der eigenen Arbeit zusammenführt.",
    befehl: "git fetch",
    icon: "📥",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-pull"],
  },
  {
    id: "lk-clone",
    kategorieId: KATEGORIE_ID,
    begriff: "Clone",
    kurzerklaerung:
      "Clone erstellt eine vollständige lokale Kopie eines bestehenden Repositories inklusive seiner gesamten Historie.",
    erklaerung:
      "Clone ist wie das komplette Kopieren eines Aktenordners aus dem Archiv in das eigene Büro – inklusive aller alten Vorgänge, nicht nur des aktuellen Standes. Danach besitzt man eine eigenständige, lokale Arbeitskopie, mit der man arbeiten kann.",
    beispiel:
      "Ein neuer Mitarbeiter klont das Projekt-Repository von GitHub auf seinen Laptop, um lokal am Code arbeiten zu können.",
    wannVerwendet:
      "Einmalig zu Beginn, wenn man an einem bereits existierenden Projekt mitarbeiten möchte.",
    befehl: "git clone https://github.com/team/projekt.git",
    icon: "🧬",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-repository"],
  },
  {
    id: "lk-working-tree",
    kategorieId: KATEGORIE_ID,
    begriff: "Working Tree",
    kurzerklaerung:
      "Der Working Tree (Arbeitsverzeichnis) ist der sichtbare Ordner mit den Dateien, an denen gerade tatsächlich gearbeitet wird.",
    erklaerung:
      "Man kann sich den Working Tree wie den Schreibtisch vorstellen, auf dem die Dokumente liegen, an denen man gerade schreibt – im Unterschied zum Aktenschrank (dem Repository), in dem bereits abgeschlossene Versionen archiviert sind. Änderungen im Working Tree sind so lange nur lokal sichtbar, bis sie über Staging Area und Commit gesichert werden.",
    beispiel:
      "Ein Entwickler öffnet eine Datei in seinem Editor und ändert eine Funktion. Diese Änderung existiert zunächst nur im Working Tree, bis sie committet wird.",
    wannVerwendet:
      "Während der eigentlichen Bearbeitung von Dateien, bevor irgendetwas gestaged oder committet wurde.",
    icon: "🗂️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-staging-area", "lk-commit"],
  },
  {
    id: "lk-staging-area",
    kategorieId: KATEGORIE_ID,
    begriff: "Staging Area",
    kurzerklaerung:
      "Die Staging Area (auch „Index“ genannt) ist eine Zwischenablage, in der man auswählt, welche Änderungen in den nächsten Commit sollen.",
    erklaerung:
      "Die Staging Area funktioniert wie ein Warenkorb beim Online-Einkauf: Man legt gezielt die Artikel hinein, die man wirklich kaufen möchte, bevor man zur Kasse geht. Ebenso wählt man aus allen Änderungen im Working Tree gezielt die aus, die in den nächsten Commit einfließen sollen.",
    beispiel:
      "Ein Entwickler hat zwei Dateien geändert, möchte aber nur eine davon committen. Er fügt nur diese eine Datei zur Staging Area hinzu, bevor er den Commit erstellt.",
    wannVerwendet:
      "Zwischen dem Bearbeiten von Dateien und dem eigentlichen Commit, um gezielt auszuwählen, was gespeichert wird.",
    befehl: "git add dateiname.txt",
    icon: "🧺",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-working-tree", "lk-commit"],
  },
  {
    id: "lk-gitignore",
    kategorieId: KATEGORIE_ID,
    begriff: ".gitignore",
    kurzerklaerung:
      "Die Datei .gitignore legt fest, welche Dateien und Ordner Git bewusst ignorieren und niemals versionieren soll.",
    erklaerung:
      "Man kann sich .gitignore wie eine Liste am Aktenschrank vorstellen, auf der steht, welche Unterlagen grundsätzlich nicht abgeheftet werden – etwa Kaffeeflecken-Notizzettel oder temporäre Kritzeleien. So bleibt das Repository frei von Dateien wie automatisch generierten Builds, persönlichen Konfigurationsdateien oder Passwörtern.",
    beispiel:
      "In einem Projekt steht in der .gitignore der Eintrag „node_modules“, damit der riesige, automatisch generierte Ordner mit Abhängigkeiten nie versehentlich mit hochgeladen wird.",
    wannVerwendet:
      "Direkt zu Projektbeginn und immer dann, wenn neue Arten von generierten oder sensiblen Dateien im Projekt auftauchen.",
    icon: "🚫",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-repository"],
  },
];
