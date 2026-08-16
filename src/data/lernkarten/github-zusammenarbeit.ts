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
];
