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
    uebersetzungen: {
      en: {
        begriff: "Remote",
        kurzerklaerung:
          "A remote is the link to a remote copy of a repository, usually hosted on a server like GitHub.",
        erklaerung:
          "Think of a remote as the address of a central archive that your own folder stays in sync with. The default name for this central archive is usually \"origin\". Git uses the remote to know where push and pull should connect to.",
        beispiel:
          "After cloning a project from GitHub, a remote called \"origin\" is automatically set up, pointing to the GitHub repository.",
        wannVerwendet:
          "Whenever changes are exchanged with a central server – when cloning, pushing, or pulling.",
      },
      es: {
        begriff: "Remote",
        kurzerklaerung:
          "Un remote es el enlace a una copia remota de un repositorio, normalmente alojada en un servidor como GitHub.",
        erklaerung:
          "Puedes imaginar un remote como la dirección de un archivo central con el que se sincroniza tu propia carpeta. El nombre por defecto de ese archivo central suele ser \"origin\". Gracias al remote, Git sabe hacia dónde deben conectarse el push y el pull.",
        beispiel:
          "Al clonar un proyecto desde GitHub, se configura automáticamente un remote llamado \"origin\" que apunta al repositorio de GitHub.",
        wannVerwendet:
          "Siempre que se intercambian cambios con un servidor central: al clonar, hacer push o hacer pull.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Fork",
        kurzerklaerung:
          "A fork is your own copy of someone else's repository in your GitHub account, independent of the original.",
        erklaerung:
          "A fork is like copying someone else's cookbook into your own kitchen: you can experiment with it however you like without changing the original. Later, you can propose your changes back to the original project via a pull request.",
        beispiel:
          "A developer forks an open-source project on GitHub to implement their own improvement before offering it to the original team.",
        wannVerwendet:
          "When you want to contribute to a project you don't have direct write access to.",
      },
      es: {
        begriff: "Fork",
        kurzerklaerung:
          "Un fork es tu propia copia del repositorio de otra persona en tu cuenta de GitHub, independiente del original.",
        erklaerung:
          "Un fork es como copiar el recetario de otra persona a tu propia cocina: puedes experimentar con él a tu antojo sin modificar el original. Más tarde puedes proponer tus cambios al proyecto original mediante un Pull Request.",
        beispiel:
          "Un desarrollador hace un fork de un proyecto de código abierto en GitHub para implementar su propia mejora antes de ofrecérsela al equipo original.",
        wannVerwendet:
          "Cuando quieres colaborar en un proyecto sobre el que no tienes permisos de escritura directos.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Pull Request",
        kurzerklaerung:
          "A pull request (PR) is a formal proposal to merge changes from one branch into another – usually accompanied by a discussion.",
        erklaerung:
          "A pull request works like a change request submitted for review before it's officially accepted. Others can comment on the proposed changes, request improvements, or approve them before they land in the main branch.",
        beispiel:
          "Once a new feature in the \"feature/dark-mode\" branch is finished, the developer opens a pull request so the team can review the change before it's merged.",
        wannVerwendet:
          "As soon as a feature or bugfix branch is finished and ready to be merged into the main branch.",
      },
      es: {
        begriff: "Pull Request",
        kurzerklaerung:
          "Un Pull Request (PR) es una propuesta formal para incorporar los cambios de una rama a otra, normalmente acompañada de una discusión.",
        erklaerung:
          "Un Pull Request funciona como una solicitud de cambio que se presenta para revisión antes de aceptarla oficialmente. Otras personas pueden comentar los cambios propuestos, pedir mejoras o aprobarlos antes de que lleguen a la rama principal.",
        beispiel:
          "Cuando termina una nueva función en la rama \"feature/modo-oscuro\", la desarrolladora crea un Pull Request para que el equipo revise el cambio antes de incorporarlo.",
        wannVerwendet:
          "En cuanto una rama de función o corrección está lista para pasar a la rama principal.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Code Review",
        kurzerklaerung:
          "In a code review, other team members check the proposed changes of a pull request before they get merged.",
        erklaerung:
          "A code review works like the four-eyes principle when proofreading an important document: a second person checks for mistakes, clarity, and side effects before something gets the final green light. Reviewers can leave comments, request changes, or approve the pull request.",
        beispiel:
          "A colleague reads through the pull request, spots unclear error handling, and asks for an adjustment before approving the change.",
        wannVerwendet:
          "Before a pull request is merged into the main branch – as quality assurance within the team.",
      },
      es: {
        begriff: "Code Review",
        kurzerklaerung:
          "En un Code Review, otros miembros del equipo revisan los cambios propuestos en un Pull Request antes de incorporarlos.",
        erklaerung:
          "Un Code Review funciona como el principio de las cuatro ojos al releer un documento importante: una segunda persona revisa errores, claridad y posibles efectos secundarios antes de dar el visto bueno definitivo. Quienes revisan pueden dejar comentarios, pedir cambios o aprobar el Pull Request.",
        beispiel:
          "Un compañero lee el Pull Request, detecta un manejo de errores poco claro y pide un ajuste antes de aprobar el cambio.",
        wannVerwendet:
          "Antes de incorporar un Pull Request a la rama principal, como control de calidad dentro del equipo.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Issue",
        kurzerklaerung:
          "An issue is a documented task, bug, or discussion entry for a repository on GitHub.",
        erklaerung:
          "An issue is like an entry in a shared task book: anyone can report a problem, suggest an idea, or note an open question there, which is then discussed and eventually resolved. Issues can be linked to labels, assignees, and pull requests.",
        beispiel:
          "A user reports via an issue that the login screen displays incorrectly on smartphones. The team then schedules a fix.",
        wannVerwendet:
          "When a bug needs to be reported, a new feature suggested, or work planned in a traceable way.",
      },
      es: {
        begriff: "Issue",
        kurzerklaerung:
          "Un issue es una entrada documentada de tarea, error o discusión relacionada con un repositorio en GitHub.",
        erklaerung:
          "Un issue es como una anotación en un cuaderno de tareas compartido: cualquiera puede reportar un problema, proponer una idea o dejar constancia de una pregunta abierta, que luego se discute y en algún momento se resuelve. Los issues pueden vincularse con etiquetas, personas responsables y Pull Requests.",
        beispiel:
          "Un usuario reporta mediante un issue que la pantalla de inicio de sesión se ve mal en el móvil. El equipo programa entonces la corrección.",
        wannVerwendet:
          "Cuando hay que reportar un error, proponer una nueva función o planificar el trabajo de forma rastreable.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Merge",
        kurzerklaerung:
          "Merge combines the changes of two branches so that a single, unified version is created.",
        erklaerung:
          "A merge is like combining two edited copies of the same document into one complete version. Git tries to automatically combine all the changes in a sensible way – if that doesn't work, a merge conflict occurs.",
        beispiel:
          "After a pull request is approved, a team member clicks \"Merge,\" which brings the changes from \"feature/dark-mode\" into the main branch.",
        wannVerwendet:
          "At the end of a pull request process, when a feature branch is officially merged into the main branch.",
      },
      es: {
        begriff: "Merge",
        kurzerklaerung:
          "Un merge combina los cambios de dos ramas para crear una versión única y unificada.",
        erklaerung:
          "Un merge es como combinar dos copias editadas del mismo documento en una sola versión completa. Git intenta combinar automáticamente todos los cambios de forma coherente; si no lo consigue, se produce un conflicto de fusión.",
        beispiel:
          "Tras aprobar un Pull Request, alguien del equipo hace clic en \"Merge\", con lo que los cambios de \"feature/modo-oscuro\" se incorporan a la rama principal.",
        wannVerwendet:
          "Al final de un proceso de Pull Request, cuando una rama de función se incorpora oficialmente a la rama principal.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Merge Conflict",
        kurzerklaerung:
          "A merge conflict occurs when two branches have changed the same part of a file differently and Git can't automatically decide which version to keep.",
        erklaerung:
          "A merge conflict is like two people rephrasing the same sentence in a shared document differently – someone has to decide by hand which version stays or how to combine both. Git clearly marks the affected spots in the file so they can be resolved manually.",
        beispiel:
          "Two developers change the same function name on the same line in different ways. During the merge, one of them has to manually clean up the conflicting spot.",
        wannVerwendet:
          "When two conflicting changes to the same piece of code collide during a merge or pull.",
      },
      es: {
        begriff: "Conflicto de fusión",
        kurzerklaerung:
          "Un conflicto de fusión surge cuando dos ramas han modificado de forma distinta la misma parte de un archivo y Git no puede decidir automáticamente qué versión conservar.",
        erklaerung:
          "Un conflicto de fusión es como dos personas que reformulan de manera distinta la misma frase en un documento compartido: alguien tiene que decidir a mano qué versión se queda o cómo combinar ambas. Git marca claramente los puntos afectados en el archivo para que se puedan resolver manualmente.",
        beispiel:
          "Dos desarrolladores cambian el nombre de la misma función en la misma línea de forma diferente. Al fusionar, uno de los dos tiene que resolver manualmente el punto de conflicto.",
        wannVerwendet:
          "Cuando, al fusionar o hacer pull, chocan dos cambios contradictorios en el mismo punto del código.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "GitHub Actions (CI/CD)",
        kurzerklaerung:
          "GitHub Actions automatically runs defined workflows on certain events (e.g., a push), such as tests or builds.",
        erklaerung:
          "You can think of GitHub Actions as automatic quality control on an assembly line: as soon as a new part (commit) arrives, automated stations check on their own whether everything works before it moves on. This automation is often called \"CI/CD\" (Continuous Integration / Continuous Delivery).",
        beispiel:
          "With every pull request, a project automatically runs all tests and reports right in the interface whether they passed.",
        wannVerwendet:
          "To automatically run recurring checks like tests, linting, or builds on every change, instead of triggering them manually.",
      },
      es: {
        begriff: "GitHub Actions (CI/CD)",
        kurzerklaerung:
          "GitHub Actions ejecuta automáticamente flujos de trabajo definidos ante ciertos eventos (por ejemplo, un push), como pruebas o builds.",
        erklaerung:
          "Puedes imaginar GitHub Actions como un control de calidad automático en una cadena de montaje: en cuanto llega una nueva pieza (commit), unas estaciones automatizadas comprueban por su cuenta si todo funciona antes de que siga adelante. Esta automatización se conoce a menudo como \"CI/CD\" (integración continua / entrega continua).",
        beispiel:
          "En cada Pull Request, un proyecto ejecuta automáticamente todas las pruebas e informa directamente en la interfaz si se han superado.",
        wannVerwendet:
          "Para ejecutar automáticamente comprobaciones recurrentes, como pruebas, linting o builds, en cada cambio, en lugar de activarlas manualmente.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Protected Branch",
        kurzerklaerung:
          "A protected branch (branch protection) prevents changes from landing directly and unchecked in an important branch like \"main\".",
        erklaerung:
          "A protected branch is like a safe with fixed rules: before anything can be put inside, certain conditions must be met – such as approval from colleagues or successfully passed automated checks. This way, the most important branch always stays in a working state.",
        beispiel:
          "In a project, \"main\" is protected so that no one can push directly to it – every change first has to go through an approved pull request.",
        wannVerwendet:
          "For central branches that should always remain stable and functional, especially in teams.",
      },
      es: {
        begriff: "Rama protegida",
        kurzerklaerung:
          "Una rama protegida (branch protection) impide que los cambios lleguen de forma directa y sin revisar a una rama importante como \"main\".",
        erklaerung:
          "Una rama protegida es como una caja fuerte con reglas fijas: antes de poder guardar algo dentro, se deben cumplir ciertas condiciones, como la aprobación de compañeros o haber superado comprobaciones automáticas. Así, la rama más importante se mantiene siempre en un estado funcional.",
        beispiel:
          "En un proyecto, \"main\" está protegida de modo que nadie puede hacer push directamente: cada cambio debe pasar antes por un Pull Request aprobado.",
        wannVerwendet:
          "En ramas centrales que deben permanecer siempre estables y funcionales, especialmente en equipos de trabajo.",
      },
    },
  },
  {
    id: "lk-github-plattform",
    kategorieId: KATEGORIE_ID,
    begriff: "GitHub (die Plattform)",
    kurzerklaerung:
      "GitHub ist eine Online-Plattform, die Git-Repositories hostet und um Werkzeuge für Zusammenarbeit wie Pull Requests, Issues und Automatisierung ergänzt.",
    erklaerung:
      "Man kann sich den Unterschied wie zwischen einer Sprache und einem sozialen Netzwerk vorstellen: Git ist das Werkzeug, mit dem Änderungen versioniert werden – GitHub ist ein Ort im Internet, an dem Menschen ihre Git-Repositories speichern, teilen und gemeinsam daran arbeiten. Es gibt auch andere Anbieter wie GitLab, die auf demselben Prinzip beruhen.",
    beispiel:
      "Ein Team nutzt lokal Git, um Änderungen zu verfolgen, und lädt das Repository zusätzlich auf GitHub hoch, damit alle Teammitglieder darauf zugreifen und Pull Requests stellen können.",
    wannVerwendet:
      "Sobald ein Projekt mit anderen geteilt, gemeinsam bearbeitet oder öffentlich sichtbar gemacht werden soll.",
    icon: "🐙",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-remote", "lk-pull-request"],
    uebersetzungen: {
      en: {
        begriff: "GitHub (the Platform)",
        kurzerklaerung:
          "GitHub is an online platform that hosts Git repositories and adds collaboration tools like pull requests, issues, and automation.",
        erklaerung:
          "Think of the difference like a language versus a social network: Git is the tool used to version changes – GitHub is a place on the internet where people store, share, and collaborate on their Git repositories. Other providers like GitLab exist on the same principle.",
        beispiel:
          "A team uses Git locally to track changes and also uploads the repository to GitHub so every team member can access it and open pull requests.",
        wannVerwendet:
          "As soon as a project needs to be shared with others, worked on collaboratively, or made publicly visible.",
      },
      es: {
        begriff: "GitHub (la plataforma)",
        kurzerklaerung:
          "GitHub es una plataforma en línea que aloja repositorios de Git y añade herramientas de colaboración como pull requests, issues y automatización.",
        erklaerung:
          "Puedes imaginar la diferencia como entre un idioma y una red social: Git es la herramienta con la que se versionan los cambios; GitHub es un lugar en internet donde la gente guarda, comparte y colabora en sus repositorios de Git. Existen otros proveedores como GitLab basados en el mismo principio.",
        beispiel:
          "Un equipo usa Git localmente para registrar cambios y además sube el repositorio a GitHub para que todo el equipo pueda acceder a él y abrir pull requests.",
        wannVerwendet:
          "En cuanto un proyecto debe compartirse con otras personas, trabajarse en colaboración o hacerse visible públicamente.",
      },
    },
  },
  {
    id: "lk-github-cli",
    kategorieId: KATEGORIE_ID,
    begriff: "GitHub CLI (gh)",
    kurzerklaerung:
      "Die GitHub CLI (Befehl „gh“) bringt GitHub-Funktionen wie Pull Requests und Issues direkt ins Terminal, statt sie im Browser zu bedienen.",
    erklaerung:
      "Man kann sich die GitHub CLI wie eine Fernbedienung vorstellen, mit der man einen Fernseher steuert, ohne aufzustehen und ans Gerät zu gehen: Statt für jede Kleinigkeit den Browser zu öffnen, lassen sich Pull Requests erstellen, Issues ansehen oder Repositories klonen direkt aus der Kommandozeile heraus.",
    beispiel:
      "Statt im Browser auf „New Pull Request“ zu klicken, erstellt ein Entwickler den Pull Request direkt im Terminal mit einem einzigen Befehl.",
    wannVerwendet:
      "Wenn GitHub-Aufgaben ohne Browser-Wechsel direkt aus dem gewohnten Terminal-Arbeitsablauf heraus erledigt werden sollen.",
    befehl: "gh pr create",
    icon: "⌨️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-pull-request"],
    uebersetzungen: {
      en: {
        begriff: "GitHub CLI (gh)",
        kurzerklaerung:
          "The GitHub CLI (the \"gh\" command) brings GitHub features like pull requests and issues straight into the terminal instead of the browser.",
        erklaerung:
          "Think of the GitHub CLI as a remote control for a TV that lets you avoid getting up to walk to the device: instead of opening the browser for every little thing, you can create pull requests, view issues, or clone repositories directly from the command line.",
        beispiel:
          "Instead of clicking \"New Pull Request\" in the browser, a developer creates the pull request directly in the terminal with a single command.",
        wannVerwendet:
          "When GitHub tasks should be handled without switching to the browser, directly from your usual terminal workflow.",
      },
      es: {
        begriff: "GitHub CLI (gh)",
        kurzerklaerung:
          "GitHub CLI (el comando «gh») lleva funciones de GitHub como pull requests e issues directamente a la terminal en lugar del navegador.",
        erklaerung:
          "Puedes imaginar GitHub CLI como un mando a distancia con el que controlas un televisor sin levantarte a ir hasta el aparato: en lugar de abrir el navegador para cada pequeña tarea, puedes crear pull requests, ver issues o clonar repositorios directamente desde la línea de comandos.",
        beispiel:
          "En lugar de hacer clic en «New Pull Request» en el navegador, un desarrollador crea el pull request directamente en la terminal con un solo comando.",
        wannVerwendet:
          "Cuando las tareas de GitHub deben resolverse sin cambiar al navegador, directamente desde el flujo de trabajo habitual en la terminal.",
      },
    },
  },
  {
    id: "lk-release",
    kategorieId: KATEGORIE_ID,
    begriff: "Release",
    kurzerklaerung:
      "Ein Release verpackt einen bestimmten Projektstand (meist markiert durch einen Tag) als herunterladbare, veröffentlichte Version.",
    erklaerung:
      "Ein Release ist wie eine fertig verpackte Warensendung mit Lieferschein: Es bündelt einen bestimmten Entwicklungsstand mit einer Beschreibung der Änderungen und stellt ihn zum Download bereit, statt dass Nutzer:innen sich den Code selbst zusammensuchen müssen.",
    beispiel:
      "Nach Fertigstellung einer neuen Version veröffentlicht ein Team auf GitHub ein Release „v2.1.0“ mit Änderungsprotokoll und fertigen Programmdateien zum Download.",
    wannVerwendet:
      "Wenn ein bestimmter, stabiler Entwicklungsstand offiziell veröffentlicht und zum Download bereitgestellt werden soll.",
    icon: "📦",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-tag", "lk-milestone"],
    uebersetzungen: {
      en: {
        begriff: "Release",
        kurzerklaerung:
          "A release packages a specific project state (usually marked by a tag) as a downloadable, published version.",
        erklaerung:
          "A release is like a fully packaged shipment with a delivery note: it bundles a specific development state with a description of the changes and makes it available for download, instead of users having to piece the code together themselves.",
        beispiel:
          "After finishing a new version, a team publishes a release \"v2.1.0\" on GitHub with a changelog and finished program files ready for download.",
        wannVerwendet:
          "When a specific, stable development state should be officially published and made available for download.",
      },
      es: {
        begriff: "Release",
        kurzerklaerung:
          "Un release empaqueta un estado concreto del proyecto (normalmente marcado con un tag) como una versión publicada y descargable.",
        erklaerung:
          "Un release es como un envío ya empaquetado con su albarán: agrupa un estado de desarrollo concreto junto con una descripción de los cambios y lo pone a disposición para descargar, en lugar de que cada usuario tenga que reunir el código por su cuenta.",
        beispiel:
          "Tras terminar una nueva versión, un equipo publica en GitHub un release «v2.1.0» con el registro de cambios y los archivos del programa listos para descargar.",
        wannVerwendet:
          "Cuando un estado de desarrollo concreto y estable debe publicarse oficialmente y ponerse a disposición para su descarga.",
      },
    },
  },
  {
    id: "lk-draft-pull-request",
    kategorieId: KATEGORIE_ID,
    begriff: "Draft Pull Request",
    kurzerklaerung:
      "Ein Draft Pull Request zeigt Arbeit im Entstehen, ohne bereits eine formelle Prüfung durch Reviewer:innen auszulösen.",
    erklaerung:
      "Ein Draft Pull Request ist wie eine Tür, die nur angelehnt statt weit geöffnet ist: Andere können bereits hineinschauen und Rückmeldung geben, aber niemand wird offiziell zur vollständigen Begutachtung gerufen, solange die Arbeit noch nicht fertig ist. Erst wenn er als „Ready for Review“ markiert wird, startet der reguläre Review-Prozess.",
    beispiel:
      "Eine Entwicklerin öffnet früh einen Draft Pull Request, um erste Rückmeldungen zu ihrem Ansatz zu bekommen, bevor die Umsetzung vollständig fertig ist.",
    wannVerwendet:
      "Wenn frühes Feedback zu einer noch unfertigen Änderung gewünscht ist, ohne schon einen formellen Review-Prozess auszulösen.",
    icon: "📝",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-pull-request", "lk-code-review"],
    uebersetzungen: {
      en: {
        begriff: "Draft Pull Request",
        kurzerklaerung:
          "A draft pull request shows work in progress without yet triggering a formal review by reviewers.",
        erklaerung:
          "A draft pull request is like a door left ajar instead of wide open: others can already peek in and give feedback, but nobody is officially called in for a full review while the work isn't finished yet. Only once it's marked \"ready for review\" does the regular review process start.",
        beispiel:
          "A developer opens a draft pull request early to get initial feedback on her approach before the implementation is fully finished.",
        wannVerwendet:
          "When early feedback on a still-unfinished change is wanted, without triggering a formal review process yet.",
      },
      es: {
        begriff: "Draft Pull Request",
        kurzerklaerung:
          "Un draft pull request muestra un trabajo en curso sin activar todavía una revisión formal por parte de los revisores.",
        erklaerung:
          "Un draft pull request es como una puerta entreabierta en lugar de completamente abierta: otras personas ya pueden echar un vistazo y dar su opinión, pero nadie es convocado oficialmente a una revisión completa mientras el trabajo no esté terminado. Solo al marcarlo como «Ready for review» comienza el proceso de revisión habitual.",
        beispiel:
          "Una desarrolladora abre pronto un draft pull request para recibir primeras opiniones sobre su enfoque antes de que la implementación esté completamente terminada.",
        wannVerwendet:
          "Cuando se desea recibir comentarios tempranos sobre un cambio aún sin terminar, sin activar todavía un proceso de revisión formal.",
      },
    },
  },
  {
    id: "lk-gist",
    kategorieId: KATEGORIE_ID,
    begriff: "Gist",
    kurzerklaerung:
      "Ein Gist ist ein einzelnes, leicht teilbares Code- oder Textschnipsel auf GitHub, technisch selbst ein kleines Git-Repository.",
    erklaerung:
      "Ein Gist ist wie eine Notiz auf einem digitalen schwarzen Brett: Statt ein ganzes Projekt-Repository anzulegen, teilt man schnell einen kurzen Ausschnitt Code oder Text, öffentlich oder nur über einen geheimen Link. Da jeder Gist ein eigenes kleines Repository ist, hat auch er eine eigene Versionsgeschichte.",
    beispiel:
      "Um schnell ein kurzes Konfigurationsbeispiel mit einem Kollegen zu teilen, erstellt ein Entwickler dafür einen Gist, statt extra ein neues Repository anzulegen.",
    wannVerwendet:
      "Beim schnellen Teilen kleiner Code- oder Textausschnitte, ohne den Aufwand eines vollständigen Repositories.",
    icon: "✂️",
    schwierigkeit: "mittel",
    relatedTerms: [],
    uebersetzungen: {
      en: {
        begriff: "Gist",
        kurzerklaerung:
          "A gist is a single, easily shareable code or text snippet on GitHub, technically a small Git repository itself.",
        erklaerung:
          "A gist is like a note on a digital pinboard: instead of creating a whole project repository, you quickly share a short snippet of code or text, either publicly or only via a secret link. Since every gist is its own small repository, it has its own version history too.",
        beispiel:
          "To quickly share a short configuration example with a colleague, a developer creates a gist for it instead of setting up a whole new repository.",
        wannVerwendet:
          "When quickly sharing small code or text snippets, without the overhead of a full repository.",
      },
      es: {
        begriff: "Gist",
        kurzerklaerung:
          "Un gist es un único fragmento de código o texto fácil de compartir en GitHub, que técnicamente es en sí mismo un pequeño repositorio de Git.",
        erklaerung:
          "Un gist es como una nota en un tablón de anuncios digital: en lugar de crear todo un repositorio de proyecto, se comparte rápidamente un fragmento corto de código o texto, ya sea públicamente o solo mediante un enlace secreto. Como cada gist es su propio pequeño repositorio, también tiene su propio historial de versiones.",
        beispiel:
          "Para compartir rápidamente un breve ejemplo de configuración con un compañero, un desarrollador crea un gist en lugar de montar un repositorio nuevo.",
        wannVerwendet:
          "Al compartir rápidamente fragmentos pequeños de código o texto, sin la sobrecarga de un repositorio completo.",
      },
    },
  },
  {
    id: "lk-github-organisation",
    kategorieId: KATEGORIE_ID,
    begriff: "GitHub-Organisation",
    kurzerklaerung:
      "Eine GitHub-Organisation ist ein gemeinsames Konto für Teams, unter dem mehrere Personen strukturiert an geteilten Repositories arbeiten.",
    erklaerung:
      "Man kann sich eine Organisation wie den Firmennamen auf einem gemeinsamen Briefkasten vorstellen, im Gegensatz zum privaten Briefkasten einer einzelnen Person: Mehrere Mitglieder greifen über klar geregelte Rollen und Rechte auf dieselben Projekte zu, statt dass alles an einer einzelnen Person hängt.",
    beispiel:
      "Ein Unternehmen legt seine Projekte unter einer gemeinsamen GitHub-Organisation ab, statt sie im privaten Konto einer einzelnen Mitarbeiterin zu verwalten.",
    wannVerwendet:
      "Wenn mehrere Personen dauerhaft und mit unterschiedlichen Rechten gemeinsam an Repositories arbeiten sollen, typischerweise in Unternehmen oder Open-Source-Projekten.",
    icon: "🏢",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-geschuetzter-branch"],
    uebersetzungen: {
      en: {
        begriff: "GitHub Organization",
        kurzerklaerung:
          "A GitHub organization is a shared account for teams, under which multiple people work on shared repositories in a structured way.",
        erklaerung:
          "Think of an organization like the company name on a shared mailbox, as opposed to one person's private mailbox: multiple members access the same projects through clearly defined roles and permissions, instead of everything depending on a single person.",
        beispiel:
          "A company keeps its projects under a shared GitHub organization instead of managing them in a single employee's personal account.",
        wannVerwendet:
          "When multiple people need to work on repositories together long-term with different permissions, typically in companies or open-source projects.",
      },
      es: {
        begriff: "Organización de GitHub",
        kurzerklaerung:
          "Una organización de GitHub es una cuenta compartida para equipos, bajo la cual varias personas trabajan de forma estructurada en repositorios compartidos.",
        erklaerung:
          "Puedes imaginar una organización como el nombre de la empresa en un buzón compartido, a diferencia del buzón privado de una sola persona: varios miembros acceden a los mismos proyectos mediante roles y permisos claramente definidos, en lugar de que todo dependa de una sola persona.",
        beispiel:
          "Una empresa guarda sus proyectos bajo una organización de GitHub compartida en lugar de gestionarlos en la cuenta personal de una sola empleada.",
        wannVerwendet:
          "Cuando varias personas deben trabajar juntas de forma duradera en repositorios con distintos permisos, típicamente en empresas o proyectos de código abierto.",
      },
    },
  },
  {
    id: "lk-label",
    kategorieId: KATEGORIE_ID,
    begriff: "Label",
    kurzerklaerung:
      "Ein Label ist eine farbige Markierung, mit der Issues und Pull Requests thematisch eingeordnet und gefiltert werden können.",
    erklaerung:
      "Labels funktionieren wie farbige Klebepunkte auf Aktenordnern in einem Archiv: Auf einen Blick lässt sich erkennen, worum es geht (z. B. „Bug“, „Dokumentation“, „Dringend“), ohne jeden Eintrag einzeln lesen zu müssen.",
    beispiel:
      "Ein gemeldeter Fehler wird mit dem Label „bug“ versehen, eine Funktionsidee dagegen mit „enhancement“, damit das Team beide Listen getrennt filtern kann.",
    wannVerwendet:
      "Beim Organisieren größerer Mengen an Issues und Pull Requests, um sie nach Art, Priorität oder Thema zu filtern.",
    icon: "🏷️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-issue", "lk-pull-request"],
    uebersetzungen: {
      en: {
        begriff: "Label",
        kurzerklaerung:
          "A label is a colored marker used to categorize and filter issues and pull requests by topic.",
        erklaerung:
          "Labels work like colored sticky dots on folders in an archive: at a glance you can tell what something is about (e.g. \"bug\", \"documentation\", \"urgent\") without having to read every single entry.",
        beispiel:
          "A reported bug gets the label \"bug\", while a feature idea gets \"enhancement\" instead, so the team can filter both lists separately.",
        wannVerwendet:
          "When organizing large numbers of issues and pull requests, to filter them by type, priority, or topic.",
      },
      es: {
        begriff: "Label (etiqueta)",
        kurzerklaerung:
          "Un label es una marca de color que sirve para clasificar y filtrar issues y pull requests por tema.",
        erklaerung:
          "Los labels funcionan como pegatinas de colores en las carpetas de un archivo: de un vistazo se ve de qué trata cada cosa (por ejemplo, «bug», «documentación», «urgente») sin tener que leer cada entrada una por una.",
        beispiel:
          "Un error reportado recibe el label «bug», mientras que una idea de función recibe «enhancement», para que el equipo pueda filtrar ambas listas por separado.",
        wannVerwendet:
          "Al organizar grandes cantidades de issues y pull requests, para filtrarlos por tipo, prioridad o tema.",
      },
    },
  },
  {
    id: "lk-star",
    kategorieId: KATEGORIE_ID,
    begriff: "Star (Repository markieren)",
    kurzerklaerung:
      "Mit einem Star markiert man ein Repository als interessant oder nützlich – vergleichbar mit einem Lesezeichen oder Like.",
    erklaerung:
      "Ein Star ist wie das Merken eines Rezepts in einem Kochbuch: Man zeigt damit Interesse oder Anerkennung und findet das Projekt später über die eigene Liste der markierten Repositories leicht wieder.",
    beispiel:
      "Ein Entwickler stößt auf eine nützliche Bibliothek und vergibt einen Star, um sie später wiederzufinden und gleichzeitig den Autor:innen Anerkennung zu zeigen.",
    wannVerwendet:
      "Um interessante Projekte zum späteren Wiederfinden zu markieren oder Entwickler:innen öffentlich Wertschätzung zu zeigen.",
    icon: "⭐",
    schwierigkeit: "einfach",
    relatedTerms: [],
    uebersetzungen: {
      en: {
        begriff: "Star (Bookmarking a Repository)",
        kurzerklaerung:
          "Starring marks a repository as interesting or useful – comparable to a bookmark or a like.",
        erklaerung:
          "A star is like dog-earing a recipe in a cookbook: it signals interest or appreciation, and lets you easily find the project again later through your own list of starred repositories.",
        beispiel:
          "A developer comes across a useful library and stars it to find it again later while also showing appreciation to its authors.",
        wannVerwendet:
          "To mark interesting projects for later, or to publicly show appreciation to developers.",
      },
      es: {
        begriff: "Star (marcar un repositorio)",
        kurzerklaerung:
          "Un star marca un repositorio como interesante o útil, algo comparable a un marcador o un «me gusta».",
        erklaerung:
          "Un star es como doblar la esquina de una receta en un libro de cocina: con él muestras interés o reconocimiento, y luego puedes volver a encontrar el proyecto fácilmente en tu propia lista de repositorios marcados.",
        beispiel:
          "Un desarrollador encuentra una librería útil y le pone un star para encontrarla más tarde y, de paso, mostrar reconocimiento a quienes la crearon.",
        wannVerwendet:
          "Para marcar proyectos interesantes y encontrarlos más tarde, o para mostrar públicamente aprecio a otros desarrolladores.",
      },
    },
  },
  {
    id: "lk-milestone",
    kategorieId: KATEGORIE_ID,
    begriff: "Milestone",
    kurzerklaerung:
      "Ein Milestone bündelt mehrere Issues und Pull Requests zu einem gemeinsamen Zwischenziel mit Fortschrittsanzeige.",
    erklaerung:
      "Ein Milestone ist wie eine Etappe auf einer Wanderkarte: Er fasst mehrere einzelne Wegpunkte (Issues und Pull Requests) zu einem größeren Zwischenziel zusammen und zeigt auf einen Blick, wie viel davon schon erledigt ist.",
    beispiel:
      "Alle Issues, die für die nächste Version nötig sind, werden dem Milestone „Version 2.0“ zugeordnet, damit der Fortschritt in Richtung Release sichtbar wird.",
    wannVerwendet:
      "Beim Planen größerer Etappen wie Versionen oder Sprints, für die mehrere Issues gemeinsam abgeschlossen werden müssen.",
    icon: "🚩",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-issue", "lk-release"],
    uebersetzungen: {
      en: {
        begriff: "Milestone",
        kurzerklaerung:
          "A milestone bundles multiple issues and pull requests into a shared intermediate goal with a progress indicator.",
        erklaerung:
          "A milestone is like a stage on a hiking map: it groups several individual waypoints (issues and pull requests) into one larger intermediate goal and shows at a glance how much of it is already done.",
        beispiel:
          "All issues needed for the next version are assigned to the \"Version 2.0\" milestone, so progress toward the release is visible.",
        wannVerwendet:
          "When planning larger stages like versions or sprints, for which multiple issues need to be completed together.",
      },
      es: {
        begriff: "Milestone (hito)",
        kurzerklaerung:
          "Un milestone agrupa varios issues y pull requests en un objetivo intermedio común con un indicador de progreso.",
        erklaerung:
          "Un milestone es como una etapa en un mapa de senderismo: agrupa varios puntos individuales del camino (issues y pull requests) en un objetivo intermedio mayor y muestra de un vistazo cuánto se ha completado ya.",
        beispiel:
          "Todos los issues necesarios para la próxima versión se asignan al milestone «Versión 2.0», para que el progreso hacia la publicación sea visible.",
        wannVerwendet:
          "Al planificar etapas mayores, como versiones o sprints, para las que hay que completar varios issues de forma conjunta.",
      },
    },
  },
];
