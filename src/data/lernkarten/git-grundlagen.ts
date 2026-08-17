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
  {
    id: "lk-head",
    kategorieId: KATEGORIE_ID,
    begriff: "HEAD",
    kurzerklaerung:
      "HEAD ist der Zeiger auf den Commit, an dem man sich in seinem Repository gerade befindet – meist die Spitze des aktuell ausgecheckten Branches.",
    erklaerung:
      "Man kann sich HEAD wie ein Lesezeichen in einem Buch vorstellen, das genau markiert, an welcher Stelle man gerade liest. Normalerweise zeigt HEAD auf den neuesten Commit eines Branches; wechselt man den Branch, wandert das Lesezeichen automatisch mit.",
    beispiel:
      "Nach einem Wechsel auf den Branch „feature/login“ zeigt HEAD auf dessen letzten Commit, und alle neuen Commits landen dort.",
    wannVerwendet:
      "Immer im Hintergrund vorhanden – viele Git-Befehle wie Commit, Merge oder Reset beziehen sich implizit auf die aktuelle Position von HEAD.",
    befehl: "git rev-parse HEAD",
    icon: "📍",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-branch", "lk-detached-head", "lk-commit-hash"],
    uebersetzungen: {
      en: {
        begriff: "HEAD",
        kurzerklaerung:
          "HEAD is the pointer to the commit you're currently on in your repository – usually the tip of the branch you have checked out.",
        erklaerung:
          "Think of HEAD as a bookmark in a book that marks exactly where you're currently reading. Normally HEAD points to the latest commit of a branch; when you switch branches, the bookmark automatically moves along.",
        beispiel:
          "After switching to the \"feature/login\" branch, HEAD points to its latest commit, and any new commits land there.",
        wannVerwendet:
          "Always present in the background – many Git commands like commit, merge, or reset implicitly refer to HEAD's current position.",
      },
      es: {
        begriff: "HEAD",
        kurzerklaerung:
          "HEAD es el puntero al commit en el que te encuentras actualmente en tu repositorio, normalmente la punta de la rama que tienes activa.",
        erklaerung:
          "Puedes imaginar HEAD como un marcapáginas en un libro que indica exactamente por dónde vas leyendo. Normalmente HEAD apunta al commit más reciente de una rama; al cambiar de rama, el marcapáginas se mueve automáticamente con ella.",
        beispiel:
          "Después de cambiar a la rama «feature/login», HEAD apunta a su último commit, y cualquier commit nuevo se añade ahí.",
        wannVerwendet:
          "Siempre presente en segundo plano: muchos comandos de Git, como commit, merge o reset, se refieren implícitamente a la posición actual de HEAD.",
      },
    },
  },
  {
    id: "lk-tag",
    kategorieId: KATEGORIE_ID,
    begriff: "Tag",
    kurzerklaerung:
      "Ein Tag markiert einen bestimmten Commit dauerhaft mit einem festen Namen, meist um einen Veröffentlichungsstand zu kennzeichnen.",
    erklaerung:
      "Ein Tag ist wie ein Etikett, das man an einen bestimmten Aktenordner klebt, um ihn später sofort wiederzufinden – anders als ein Branch bewegt sich ein Tag nicht automatisch weiter, wenn neue Commits dazukommen.",
    beispiel:
      "Nach dem Release einer Software wird der aktuelle Commit mit dem Tag „v1.0.0“ versehen, damit man diesen genauen Stand jederzeit wiederfinden kann.",
    wannVerwendet:
      "Beim Markieren von Versionsständen, insbesondere Releases, die dauerhaft nachvollziehbar bleiben sollen.",
    befehl: "git tag v1.0.0",
    icon: "🏷️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-commit"],
    uebersetzungen: {
      en: {
        begriff: "Tag",
        kurzerklaerung:
          "A tag permanently marks a specific commit with a fixed name, usually to label a release.",
        erklaerung:
          "A tag is like a label stuck on a specific folder so you can find it again instantly later – unlike a branch, a tag doesn't automatically move forward as new commits are added.",
        beispiel:
          "After releasing a piece of software, the current commit is marked with the tag \"v1.0.0\" so that exact state can always be found again.",
        wannVerwendet:
          "When marking version states, especially releases that should stay permanently traceable.",
      },
      es: {
        begriff: "Tag",
        kurzerklaerung:
          "Un tag marca de forma permanente un commit concreto con un nombre fijo, normalmente para señalar una versión publicada.",
        erklaerung:
          "Un tag es como una etiqueta que se pega a una carpeta concreta para encontrarla al instante más tarde: a diferencia de una rama, un tag no avanza automáticamente cuando se añaden nuevos commits.",
        beispiel:
          "Tras publicar una versión del software, el commit actual se marca con el tag «v1.0.0» para poder encontrar ese estado exacto en cualquier momento.",
        wannVerwendet:
          "Al marcar estados de versión, especialmente publicaciones que deben quedar rastreables de forma permanente.",
      },
    },
  },
  {
    id: "lk-rebase",
    kategorieId: KATEGORIE_ID,
    begriff: "Rebase",
    kurzerklaerung:
      "Rebase überträgt die Commits eines Branches auf eine neue Basis, sodass eine geradlinige Historie ohne zusätzliche Merge-Commits entsteht.",
    erklaerung:
      "Man kann sich Rebase wie das Umsetzen eines Baugerüsts vorstellen: Statt es an der alten Stelle stehen zu lassen und drumherum zu bauen, wird es komplett neu auf dem aktuellen Fundament aufgebaut. Die eigenen Änderungen werden dabei Commit für Commit auf den neuen Stand aufgesetzt.",
    beispiel:
      "Ein Entwickler bringt seinen Feature-Branch per Rebase auf den neuesten Stand von „main“, statt die Änderungen per Merge zusammenzuführen – die Historie bleibt dadurch linear und übersichtlich.",
    wannVerwendet:
      "Wenn ein Branch vor dem Zusammenführen aufgeräumt oder auf den neuesten Stand der Hauptlinie gebracht werden soll, meist bevor er öffentlich geteilt wird.",
    befehl: "git rebase main",
    icon: "🧱",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-branch", "lk-merge", "lk-merge-konflikt"],
    uebersetzungen: {
      en: {
        begriff: "Rebase",
        kurzerklaerung:
          "Rebase reapplies a branch's commits onto a new base, producing a straight-line history without extra merge commits.",
        erklaerung:
          "Think of rebase as relocating a construction scaffold: instead of leaving it in the old spot and building around it, it's rebuilt entirely on the current foundation. Your own changes get reapplied commit by commit on top of the new state.",
        beispiel:
          "A developer rebases their feature branch onto the latest \"main\" instead of merging it in – the history stays linear and easy to follow.",
        wannVerwendet:
          "When a branch should be cleaned up or brought up to date with the main line before merging, usually before it's shared publicly.",
      },
      es: {
        begriff: "Rebase",
        kurzerklaerung:
          "Rebase vuelve a aplicar los commits de una rama sobre una nueva base, generando un historial lineal sin commits de fusión adicionales.",
        erklaerung:
          "Puedes imaginar el rebase como trasladar un andamio de construcción: en lugar de dejarlo en el sitio antiguo y construir alrededor, se reconstruye por completo sobre los cimientos actuales. Tus propios cambios se vuelven a aplicar, commit a commit, sobre el nuevo estado.",
        beispiel:
          "Un desarrollador hace un rebase de su rama de función sobre la última versión de «main» en lugar de fusionarla: el historial se mantiene lineal y fácil de seguir.",
        wannVerwendet:
          "Cuando una rama debe limpiarse o actualizarse respecto a la línea principal antes de fusionarla, normalmente antes de compartirla públicamente.",
      },
    },
  },
  {
    id: "lk-stash",
    kategorieId: KATEGORIE_ID,
    begriff: "Stash",
    kurzerklaerung:
      "Stash legt nicht committete Änderungen vorübergehend beiseite, sodass der Working Tree wieder sauber ist, ohne die Änderungen zu verlieren.",
    erklaerung:
      "Stash funktioniert wie eine Schublade auf dem Schreibtisch, in die man mitten in der Arbeit schnell alles hineinlegt, um Platz für etwas Dringendes zu schaffen. Später holt man alles wieder heraus und macht genau dort weiter, wo man aufgehört hat.",
    beispiel:
      "Mitten in der Arbeit an einem Feature muss ein Entwickler kurz den Branch wechseln, um einen dringenden Bug zu fixen – er stasht seine unfertigen Änderungen, wechselt den Branch, und holt sie später wieder hervor.",
    wannVerwendet:
      "Wenn man kurzfristig zwischen Aufgaben wechseln muss, aber die aktuellen, unfertigen Änderungen noch nicht committen möchte.",
    befehl: "git stash",
    icon: "🗄️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-working-tree", "lk-commit"],
    uebersetzungen: {
      en: {
        begriff: "Stash",
        kurzerklaerung:
          "Stash temporarily sets uncommitted changes aside so the working tree is clean again, without losing the changes.",
        erklaerung:
          "Stash works like a desk drawer you quickly sweep everything into mid-task to make room for something urgent. Later you pull it all back out and continue exactly where you left off.",
        beispiel:
          "In the middle of working on a feature, a developer needs to switch branches to fix an urgent bug – they stash their unfinished changes, switch branches, and bring them back later.",
        wannVerwendet:
          "When you need to switch tasks briefly but don't want to commit the current, unfinished changes yet.",
      },
      es: {
        begriff: "Stash",
        kurzerklaerung:
          "Stash guarda temporalmente los cambios sin confirmar para dejar el árbol de trabajo limpio de nuevo, sin perder esos cambios.",
        erklaerung:
          "Stash funciona como un cajón del escritorio en el que metes todo rápidamente a mitad de una tarea para hacer sitio a algo urgente. Más tarde lo sacas todo de nuevo y continúas exactamente donde lo dejaste.",
        beispiel:
          "En medio del trabajo en una función, un desarrollador necesita cambiar de rama para arreglar un error urgente: guarda sus cambios sin terminar con stash, cambia de rama y los recupera más tarde.",
        wannVerwendet:
          "Cuando necesitas cambiar de tarea brevemente pero todavía no quieres confirmar los cambios actuales sin terminar.",
      },
    },
  },
  {
    id: "lk-commit-hash",
    kategorieId: KATEGORIE_ID,
    begriff: "Commit-Hash (SHA)",
    kurzerklaerung:
      "Der Commit-Hash ist eine eindeutige, 40-stellige Prüfsumme, die jeden Commit unverwechselbar identifiziert.",
    erklaerung:
      "Man kann sich den Commit-Hash wie eine Seriennummer vorstellen, die aus dem exakten Inhalt eines Commits berechnet wird – ändert sich auch nur ein einziges Zeichen im Projekt, entsteht ein komplett anderer Hash. So lässt sich jeder Commit eindeutig referenzieren und auf Veränderungen prüfen.",
    beispiel:
      "Ein Entwickler verweist in einem Issue auf den genauen Commit „a3f9c1e“, in dem ein Fehler eingeführt wurde, damit alle sofort wissen, welche Änderung gemeint ist.",
    wannVerwendet:
      "Um einen ganz bestimmten Commit eindeutig zu referenzieren, etwa beim Vergleichen, Zurückspringen oder Verlinken auf GitHub.",
    befehl: "git log --oneline",
    icon: "🔑",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-commit", "lk-head"],
    uebersetzungen: {
      en: {
        begriff: "Commit Hash (SHA)",
        kurzerklaerung:
          "The commit hash is a unique, 40-character checksum that identifies every commit unmistakably.",
        erklaerung:
          "Think of the commit hash as a serial number calculated from the exact contents of a commit – change even a single character in the project and a completely different hash results. This lets every commit be referenced unambiguously and checked for changes.",
        beispiel:
          "A developer references the exact commit \"a3f9c1e\" in an issue, where a bug was introduced, so everyone immediately knows which change is meant.",
        wannVerwendet:
          "To unambiguously reference one specific commit, for example when comparing, jumping back, or linking to it on GitHub.",
      },
      es: {
        begriff: "Hash del commit (SHA)",
        kurzerklaerung:
          "El hash del commit es una suma de comprobación única de 40 caracteres que identifica cada commit de forma inconfundible.",
        erklaerung:
          "Puedes imaginar el hash del commit como un número de serie calculado a partir del contenido exacto de un commit: si cambia un solo carácter en el proyecto, se genera un hash completamente distinto. Así se puede referenciar cada commit de forma inequívoca y comprobar cambios.",
        beispiel:
          "Un desarrollador referencia en un issue el commit exacto «a3f9c1e» en el que se introdujo un error, para que todos sepan de inmediato a qué cambio se refiere.",
        wannVerwendet:
          "Para referenciar de forma inequívoca un commit concreto, por ejemplo al comparar, volver atrás o enlazarlo en GitHub.",
      },
    },
  },
  {
    id: "lk-fast-forward-merge",
    kategorieId: KATEGORIE_ID,
    begriff: "Fast-Forward-Merge",
    kurzerklaerung:
      "Ein Fast-Forward-Merge verschiebt einen Branch-Zeiger einfach nach vorne, wenn keine parallelen Änderungen vorliegen – ganz ohne eigenen Merge-Commit.",
    erklaerung:
      "Man kann sich das wie das Vorspulen eines Lesezeichens vorstellen: Wenn zwischen zwei Ständen nur geradeaus weitergearbeitet wurde, ohne Abzweigung, reicht es, das Lesezeichen einfach an die neue Stelle zu schieben, statt die Wege umständlich zusammenzuführen.",
    beispiel:
      "Da niemand sonst am Hauptbranch weitergearbeitet hat, lässt sich ein fertiger Feature-Branch per Fast-Forward in „main“ übernehmen, ohne dass ein zusätzlicher Merge-Commit entsteht.",
    wannVerwendet:
      "Wenn der Zielbranch seit der Branch-Erstellung unverändert geblieben ist und Git die Änderungen deshalb geradlinig übernehmen kann.",
    icon: "⏩",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-merge", "lk-branch", "lk-rebase"],
    uebersetzungen: {
      en: {
        begriff: "Fast-Forward Merge",
        kurzerklaerung:
          "A fast-forward merge simply moves a branch pointer forward when there are no parallel changes – with no separate merge commit at all.",
        erklaerung:
          "Think of it as fast-forwarding a bookmark: if work only continued straight ahead between two states, with no branching off, it's enough to just slide the bookmark to the new spot instead of laboriously merging the paths together.",
        beispiel:
          "Since nobody else has kept working on the main branch, a finished feature branch can be fast-forwarded into \"main\" without creating an extra merge commit.",
        wannVerwendet:
          "When the target branch hasn't changed since the branch was created, so Git can apply the changes in a straight line.",
      },
      es: {
        begriff: "Fusión fast-forward",
        kurzerklaerung:
          "Una fusión fast-forward simplemente adelanta el puntero de una rama cuando no hay cambios paralelos, sin crear ningún commit de fusión propio.",
        erklaerung:
          "Puedes imaginarlo como adelantar un marcapáginas: si entre dos estados solo se siguió trabajando en línea recta, sin bifurcaciones, basta con deslizar el marcapáginas hasta el nuevo punto en lugar de fusionar laboriosamente los caminos.",
        beispiel:
          "Como nadie más ha seguido trabajando en la rama principal, una rama de función terminada puede fusionarse mediante fast-forward en «main» sin crear un commit de fusión adicional.",
        wannVerwendet:
          "Cuando la rama de destino no ha cambiado desde que se creó la rama, por lo que Git puede aplicar los cambios en línea recta.",
      },
    },
  },
  {
    id: "lk-detached-head",
    kategorieId: KATEGORIE_ID,
    begriff: "Detached HEAD",
    kurzerklaerung:
      "Im Zustand „Detached HEAD“ zeigt HEAD direkt auf einen einzelnen Commit statt auf einen Branch – neue Commits gehören dann zunächst zu keinem Branch.",
    erklaerung:
      "Man kann sich das wie einen losen Zettel vorstellen, der nicht in einem Ordner abgeheftet ist: Man kann trotzdem darauf schreiben, aber ohne ihn abzuheften, geht die Notiz beim nächsten Aufräumen leicht verloren. Genauso können Commits im Detached-HEAD-Zustand verloren gehen, wenn man nicht rechtzeitig einen Branch daraus erstellt.",
    beispiel:
      "Ein Entwickler checkt versehentlich einen alten Commit direkt aus, statt einen Branch – Git warnt daraufhin über den „Detached HEAD“-Zustand.",
    wannVerwendet:
      "Meist unbeabsichtigt, wenn man einen bestimmten alten Commit statt eines Branches auscheckt – dann sollte man bei eigenen Änderungen sofort einen neuen Branch anlegen.",
    icon: "✂️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-head", "lk-commit-hash", "lk-branch"],
    uebersetzungen: {
      en: {
        begriff: "Detached HEAD",
        kurzerklaerung:
          "In a \"detached HEAD\" state, HEAD points directly to a single commit instead of a branch – new commits initially belong to no branch at all.",
        erklaerung:
          "Think of it as a loose slip of paper that isn't filed in any folder: you can still write on it, but without filing it away, the note is easily lost the next time things get tidied up. Likewise, commits made in a detached HEAD state can get lost if you don't create a branch from them in time.",
        beispiel:
          "A developer accidentally checks out an old commit directly instead of a branch – Git then warns about the \"detached HEAD\" state.",
        wannVerwendet:
          "Usually unintentional, when you check out a specific old commit instead of a branch – if you make changes there, create a new branch right away.",
      },
      es: {
        begriff: "HEAD desacoplado (Detached HEAD)",
        kurzerklaerung:
          "En el estado «HEAD desacoplado», HEAD apunta directamente a un único commit en lugar de a una rama; los commits nuevos, de entrada, no pertenecen a ninguna rama.",
        erklaerung:
          "Puedes imaginarlo como una hoja suelta que no está archivada en ninguna carpeta: aún puedes escribir en ella, pero al no archivarla, la nota se pierde fácilmente la próxima vez que se ordene todo. De igual modo, los commits hechos en estado de HEAD desacoplado pueden perderse si no se crea a tiempo una rama a partir de ellos.",
        beispiel:
          "Un desarrollador hace checkout por error de un commit antiguo directamente en lugar de una rama; Git avisa entonces del estado de «HEAD desacoplado».",
        wannVerwendet:
          "Normalmente sin querer, al hacer checkout de un commit antiguo concreto en lugar de una rama; si haces cambios ahí, crea una rama nueva de inmediato.",
      },
    },
  },
  {
    id: "lk-git-scm",
    kategorieId: KATEGORIE_ID,
    begriff: "git-scm.com",
    kurzerklaerung:
      "git-scm.com ist die offizielle Webseite des Git-Projekts mit Dokumentation, Downloads und dem kostenlosen Pro-Git-Buch.",
    erklaerung:
      "Man kann sich git-scm.com wie das offizielle Handbuch samt Werkzeugausgabe eines Herstellers vorstellen: Dort gibt es die Software selbst zum Download, die vollständige Referenzdokumentation zu jedem Befehl sowie ein ausführliches, kostenloses Lehrbuch für Einsteiger und Fortgeschrittene.",
    beispiel:
      "Bei Unsicherheit über die genaue Funktionsweise von „git rebase“ schaut ein Entwickler in der offiziellen Dokumentation auf git-scm.com nach, statt sich auf eine zufällige Quelle zu verlassen.",
    wannVerwendet:
      "Als verlässliche erste Anlaufstelle, um Git herunterzuladen oder die genaue, offizielle Bedeutung eines Befehls nachzuschlagen.",
    icon: "📖",
    schwierigkeit: "einfach",
    uebersetzungen: {
      en: {
        begriff: "git-scm.com",
        kurzerklaerung:
          "git-scm.com is the official website of the Git project, with documentation, downloads, and the free Pro Git book.",
        erklaerung:
          "Think of git-scm.com as a manufacturer's official manual bundled with the tool itself: it offers the software for download, the complete reference documentation for every command, and an extensive, free textbook for beginners and advanced users alike.",
        beispiel:
          "Unsure exactly how \"git rebase\" works, a developer checks the official documentation on git-scm.com instead of relying on a random source.",
        wannVerwendet:
          "As a reliable first stop for downloading Git or looking up the precise, official meaning of a command.",
      },
      es: {
        begriff: "git-scm.com",
        kurzerklaerung:
          "git-scm.com es el sitio web oficial del proyecto Git, con documentación, descargas y el libro gratuito Pro Git.",
        erklaerung:
          "Puedes imaginar git-scm.com como el manual oficial de un fabricante junto con la propia herramienta: allí está el software para descargar, la documentación de referencia completa de cada comando y un extenso libro de texto gratuito para principiantes y usuarios avanzados.",
        beispiel:
          "Si no está seguro de cómo funciona exactamente «git rebase», un desarrollador consulta la documentación oficial en git-scm.com en lugar de fiarse de una fuente cualquiera.",
        wannVerwendet:
          "Como primer punto de referencia fiable para descargar Git o consultar el significado preciso y oficial de un comando.",
      },
    },
  },
  {
    id: "lk-git-konfiguration",
    kategorieId: KATEGORIE_ID,
    begriff: "Git-Konfiguration",
    kurzerklaerung:
      "Die Git-Konfiguration legt grundlegende Einstellungen wie Name und E-Mail-Adresse fest, die Git jedem Commit als Autor:in-Angabe mitgibt.",
    erklaerung:
      "Man kann sich die Git-Konfiguration wie das Namensschild vorstellen, das man vor der ersten Nutzung eines gemeinsamen Werkzeugs einmal ausfüllt: Erst danach weiß jeder, wer welche Änderung vorgenommen hat. Ohne diese Angabe verweigert Git meist das Erstellen von Commits.",
    beispiel:
      "Vor dem allerersten Commit auf einem neuen Rechner trägt ein Entwickler einmalig seinen Namen und seine E-Mail-Adresse in die Git-Konfiguration ein.",
    wannVerwendet:
      "Einmalig bei der Ersteinrichtung von Git auf einem neuen Rechner, oder wenn sich die Identität pro Projekt unterscheiden soll.",
    befehl: "git config --global user.name \"Name\"",
    icon: "⚙️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-commit"],
    uebersetzungen: {
      en: {
        begriff: "Git Configuration",
        kurzerklaerung:
          "Git configuration sets basic settings like name and email address, which Git attaches to every commit as author information.",
        erklaerung:
          "Think of Git configuration as the name tag you fill out once before first using a shared tool: only after that does everyone know who made which change. Without this information, Git usually refuses to create commits.",
        beispiel:
          "Before their very first commit on a new machine, a developer enters their name and email address into the Git configuration once.",
        wannVerwendet:
          "Once, when setting up Git on a new machine, or when the identity should differ per project.",
      },
      es: {
        begriff: "Configuración de Git",
        kurzerklaerung:
          "La configuración de Git establece ajustes básicos como el nombre y el correo electrónico, que Git añade a cada commit como datos de autoría.",
        erklaerung:
          "Puedes imaginar la configuración de Git como la etiqueta con el nombre que se rellena una vez antes de usar por primera vez una herramienta compartida: solo después todos saben quién hizo cada cambio. Sin este dato, Git normalmente se niega a crear commits.",
        beispiel:
          "Antes de su primer commit en un ordenador nuevo, un desarrollador introduce una vez su nombre y correo electrónico en la configuración de Git.",
        wannVerwendet:
          "Una sola vez, al configurar Git por primera vez en un ordenador nuevo, o cuando la identidad deba ser distinta según el proyecto.",
      },
    },
  },
];
