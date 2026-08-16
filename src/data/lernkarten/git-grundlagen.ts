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
    uebersetzungen: {
      en: {
        begriff: "Repository",
        kurzerklaerung:
          "A repository (or “repo” for short) is the entire project folder, including its complete history of changes.",
        erklaerung:
          "Think of a repository as a filing cabinet that holds not just the current version of every document, but every earlier version too – complete and searchable. Technically, it's a folder that contains a hidden .git subfolder alongside your actual files. That's where Git stores all the information about commits, branches, and history.",
        beispiel:
          "A team is building a website. The entire project – HTML, CSS, images, and every change ever saved to them – lives in a repository, hosted for example on GitHub.",
        wannVerwendet:
          "Right at the start of a project: you either create a new repository or clone an existing one before any actual work begins.",
      },
      es: {
        begriff: "Repository",
        kurzerklaerung:
          "Un repositorio (o “repo”, para abreviar) es la carpeta completa del proyecto, incluyendo todo su historial de cambios.",
        erklaerung:
          "Imagina un repositorio como un archivador que guarda no solo la versión actual de cada documento, sino también todas las versiones anteriores, de forma completa y consultable. Técnicamente es una carpeta que contiene, además de los archivos reales, una subcarpeta oculta llamada .git. Ahí es donde Git guarda toda la información sobre commits, branches y el historial.",
        beispiel:
          "Un equipo está desarrollando un sitio web. Todo el proyecto –HTML, CSS, imágenes y cada cambio guardado alguna vez– se encuentra en un repositorio alojado, por ejemplo, en GitHub.",
        wannVerwendet:
          "Justo al comienzo de un proyecto: se crea un nuevo repositorio o se clona uno existente antes de empezar a trabajar.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Commit",
        kurzerklaerung:
          "A commit is a saved snapshot of the project at a specific point in time, labeled with a description.",
        erklaerung:
          "A commit is like a photo you take of a room before you keep tidying up – you can always go back to that exact moment later. Every commit gets a unique ID and a message explaining what changed and why.",
        beispiel:
          "After fixing a login bug, a developer creates a commit with the message “Fix: login fails when the password field is empty.”",
        wannVerwendet:
          "Whenever a meaningful, self-contained piece of work is finished – often several times a day.",
      },
      es: {
        begriff: "Commit",
        kurzerklaerung:
          "Un commit es una instantánea guardada del proyecto en un momento determinado, acompañada de una descripción.",
        erklaerung:
          "Un commit es como una foto que tomas del estado de una habitación antes de seguir ordenando: siempre puedes volver a ese momento más adelante. Cada commit recibe un identificador único y un mensaje que explica qué cambió y por qué.",
        beispiel:
          "Después de corregir un error de inicio de sesión, un desarrollador crea un commit con el mensaje “Fix: el login falla si el campo de contraseña está vacío”.",
        wannVerwendet:
          "Cada vez que se completa un paso de trabajo con sentido propio y bien delimitado, a menudo varias veces al día.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Branch",
        kurzerklaerung:
          "A branch is an independent line of development within the same repository.",
        erklaerung:
          "Picture a branch as a side path that splits off from the main trail: you can try things out or build a new feature there without touching the main trail (usually called “main”). Later, the side path can be merged back into the main one.",
        beispiel:
          "A developer creates the branch “feature/dark-mode” to build a dark mode, while the rest of the team keeps working undisturbed on the main branch.",
        wannVerwendet:
          "As soon as you start working on a new feature, an experiment, or a bug fix that shouldn't put the stable main version at risk.",
      },
      es: {
        begriff: "Branch",
        kurzerklaerung:
          "Un branch es una línea de desarrollo independiente dentro del mismo repositorio.",
        erklaerung:
          "Puedes imaginar un branch como un sendero secundario que se separa del camino principal: allí puedes probar cosas o desarrollar una nueva función sin tocar el camino principal (normalmente llamado “main”). Más adelante, ese sendero secundario se puede fusionar de nuevo con el principal.",
        beispiel:
          "Una desarrolladora crea el branch “feature/modo-oscuro” para construir un modo oscuro, mientras el resto del equipo sigue trabajando sin interrupciones en el branch principal.",
        wannVerwendet:
          "En cuanto se empieza a trabajar en una nueva función, un experimento o una corrección de errores que no debe poner en riesgo la versión principal estable.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Push",
        kurzerklaerung:
          "Push uploads your locally saved commits to a remote server (e.g. GitHub) so others can see them.",
        erklaerung:
          "Push is like uploading updated documents to a shared cloud folder: only once they're uploaded can your colleagues see the new version. Without a push, commits stay on your own computer only.",
        beispiel:
          "After three local commits, a developer pushes the changes to GitHub so they can be reviewed in a pull request.",
        wannVerwendet:
          "After one or more commits have been made locally and need to be shared with the team or the central server.",
      },
      es: {
        begriff: "Push",
        kurzerklaerung:
          "Push envía los commits guardados localmente a un servidor remoto (por ejemplo, GitHub) para que otros puedan verlos.",
        erklaerung:
          "Push es como subir documentos actualizados a una carpeta compartida en la nube: solo cuando se suben, los compañeros pueden ver la nueva versión. Sin un push, los commits se quedan únicamente en tu propio ordenador.",
        beispiel:
          "Tras tres commits locales, un desarrollador sube sus cambios a GitHub mediante un push para que puedan revisarse en un pull request.",
        wannVerwendet:
          "Después de crear uno o varios commits localmente, cuando se quiere compartirlos con el equipo o con el servidor central.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Pull",
        kurzerklaerung:
          "Pull fetches new changes from the remote server and merges them directly into your local working copy.",
        erklaerung:
          "Pull is like downloading the latest version of a shared document while automatically merging in your own pending changes. Behind the scenes, Git combines two steps: fetch (download) and merge (combine).",
        beispiel:
          "Before continuing work in the morning, a developer does a pull to get the changes colleagues made overnight.",
        wannVerwendet:
          "At the start of the workday, or before starting new changes of your own, to make sure you're up to date.",
      },
      es: {
        begriff: "Pull",
        kurzerklaerung:
          "Pull descarga los cambios nuevos del servidor remoto y los incorpora directamente a tu copia de trabajo local.",
        erklaerung:
          "Pull es como descargar la última versión de un documento compartido y, al mismo tiempo, incorporar tus propios cambios pendientes. Por detrás, Git combina dos pasos: fetch (descargar) y merge (fusionar).",
        beispiel:
          "Antes de seguir trabajando por la mañana, un desarrollador hace un pull para incorporar los cambios que sus compañeros subieron durante la noche.",
        wannVerwendet:
          "Al comienzo de la jornada laboral, o antes de empezar con nuevos cambios propios, para asegurarte de estar al día.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Fetch",
        kurzerklaerung:
          "Fetch downloads new changes from the remote server without merging them into your own working copy.",
        erklaerung:
          "Fetch is like collecting the new mail from your mailbox without opening and dealing with the letters yet: you can see there's something new, but you decide yourself when and how to deal with it. That's what sets fetch apart from pull, which applies the changes right away.",
        beispiel:
          "A developer runs a fetch to see which new commits are on the server, before deciding whether to bring them into their own branch yet.",
        wannVerwendet:
          "When you want to carefully check what's changed remotely before merging it with your own work.",
      },
      es: {
        begriff: "Fetch",
        kurzerklaerung:
          "Fetch descarga los cambios nuevos del servidor remoto sin mezclarlos con tu propia copia de trabajo.",
        erklaerung:
          "Fetch es como recoger el correo nuevo del buzón sin abrir ni gestionar todavía las cartas: te enteras de que hay novedades, pero decides tú cuándo y cómo incorporarlas. Eso es lo que diferencia a fetch de pull, que aplica los cambios de inmediato.",
        beispiel:
          "Un desarrollador hace un fetch para ver qué commits nuevos hay en el servidor, antes de decidir si quiere incorporarlos ya a su propio branch.",
        wannVerwendet:
          "Cuando quieres comprobar con calma qué ha cambiado en el remoto antes de fusionarlo con tu propio trabajo.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Clone",
        kurzerklaerung:
          "Clone creates a complete local copy of an existing repository, including its entire history.",
        erklaerung:
          "Clone is like copying an entire filing folder from the archive into your own office – including every old record, not just the current state. Afterwards you have your own independent, local working copy to work with.",
        beispiel:
          "A new employee clones the project repository from GitHub onto their laptop so they can work on the code locally.",
        wannVerwendet:
          "Once, at the very start, when you want to start contributing to an already existing project.",
      },
      es: {
        begriff: "Clone",
        kurzerklaerung:
          "Clone crea una copia local completa de un repositorio existente, incluyendo todo su historial.",
        erklaerung:
          "Clone es como copiar por completo una carpeta de archivo del almacén a tu propia oficina, incluyendo todos los expedientes antiguos, no solo el estado actual. Después tienes tu propia copia de trabajo local e independiente con la que trabajar.",
        beispiel:
          "Un nuevo empleado clona el repositorio del proyecto desde GitHub a su portátil para poder trabajar en el código de forma local.",
        wannVerwendet:
          "Una sola vez al principio, cuando quieres empezar a colaborar en un proyecto ya existente.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Working Tree",
        kurzerklaerung:
          "The working tree (working directory) is the visible folder containing the files you're actually working on right now.",
        erklaerung:
          "Think of the working tree as the desk where the documents you're currently writing lie – as opposed to the filing cabinet (the repository), where completed versions are already archived. Changes in the working tree stay purely local until they're saved through the staging area and a commit.",
        beispiel:
          "A developer opens a file in their editor and changes a function. That change only exists in the working tree at first, until it's committed.",
        wannVerwendet:
          "While you're actually editing files, before anything has been staged or committed.",
      },
      es: {
        begriff: "Working Tree",
        kurzerklaerung:
          "El working tree (directorio de trabajo) es la carpeta visible con los archivos en los que realmente se está trabajando en este momento.",
        erklaerung:
          "Puedes imaginar el working tree como el escritorio donde están los documentos en los que estás escribiendo, a diferencia del archivador (el repositorio), donde ya se guardan las versiones terminadas. Los cambios en el working tree solo son visibles localmente hasta que se guardan mediante la staging area y un commit.",
        beispiel:
          "Un desarrollador abre un archivo en su editor y modifica una función. Ese cambio existe, de momento, solo en el working tree, hasta que se hace commit.",
        wannVerwendet:
          "Durante la edición real de los archivos, antes de que se haya hecho staging o commit de nada.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Staging Area",
        kurzerklaerung:
          "The staging area (also called the “index”) is a holding space where you choose which changes will go into the next commit.",
        erklaerung:
          "The staging area works like a shopping cart when you buy something online: you deliberately place the items you actually want to buy into it before checking out. In the same way, you pick out exactly which changes from the working tree should go into the next commit.",
        beispiel:
          "A developer has changed two files but only wants to commit one of them. They add just that one file to the staging area before creating the commit.",
        wannVerwendet:
          "Between editing files and the actual commit, to deliberately choose what gets saved.",
      },
      es: {
        begriff: "Staging Area",
        kurzerklaerung:
          "La staging area (también llamada “index”) es un espacio intermedio donde eliges qué cambios entrarán en el próximo commit.",
        erklaerung:
          "La staging area funciona como el carrito de la compra en una tienda online: colocas en él, de forma deliberada, los artículos que realmente quieres comprar antes de pagar. De la misma manera, eliges de entre todos los cambios del working tree cuáles pasarán al próximo commit.",
        beispiel:
          "Un desarrollador ha modificado dos archivos, pero solo quiere hacer commit de uno de ellos. Añade únicamente ese archivo a la staging area antes de crear el commit.",
        wannVerwendet:
          "Entre la edición de los archivos y el commit propiamente dicho, para elegir con precisión qué se guarda.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: ".gitignore",
        kurzerklaerung:
          "The .gitignore file defines which files and folders Git should deliberately ignore and never track.",
        erklaerung:
          "Think of .gitignore as a list taped to the filing cabinet stating which documents should never be filed at all – coffee-stained scribbles or temporary notes, say. This keeps the repository free of things like auto-generated build files, personal configuration files, or passwords.",
        beispiel:
          "A project's .gitignore contains the entry “node_modules” so the huge, auto-generated folder of dependencies never gets uploaded by accident.",
        wannVerwendet:
          "Right at the start of a project, and any time new kinds of generated or sensitive files show up in it.",
      },
      es: {
        begriff: ".gitignore",
        kurzerklaerung:
          "El archivo .gitignore define qué archivos y carpetas debe ignorar Git deliberadamente y no versionar nunca.",
        erklaerung:
          "Puedes imaginar .gitignore como una lista pegada en el archivador que indica qué documentos no deben archivarse nunca, como notas manchadas de café o apuntes provisionales. Así el repositorio se mantiene libre de cosas como archivos de compilación generados automáticamente, configuraciones personales o contraseñas.",
        beispiel:
          "En un proyecto, el .gitignore contiene la entrada “node_modules” para que esa carpeta enorme y generada automáticamente con las dependencias nunca se suba por accidente.",
        wannVerwendet:
          "Justo al comienzo del proyecto, y siempre que aparezcan nuevos tipos de archivos generados o sensibles en él.",
      },
    },
  },
];
