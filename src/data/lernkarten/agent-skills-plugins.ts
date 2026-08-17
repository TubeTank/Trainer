import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-agent-skills-plugins";

export const agentSkillsPluginsLernkarten: Lernkarte[] = [
  {
    id: "lk-skill",
    kategorieId: KATEGORIE_ID,
    begriff: "Skill",
    kurzerklaerung:
      "Ein Skill ist eine wiederverwendbare Arbeitsanweisung, die einem KI-Agenten genau beschreibt, wie eine bestimmte Aufgabe erledigt werden soll.",
    erklaerung:
      "Man kann sich einen Skill wie die Arbeitsanweisung für einen Facharbeiter vorstellen: Sie legt nicht nur das Ziel fest, sondern auch das bewährte Vorgehen, damit dieselbe Aufgabe jedes Mal auf die gleiche, verlässliche Art erledigt wird. Kurz gesagt: Ein Skill ist Fachwissen plus Vorgehensweise für eine bestimmte Aufgabe, verpackt in eine Anleitung, die der Agent bei Bedarf abruft.",
    beispiel:
      "Ein Skill sagt Claude Code oder Codex immer wieder auf die gleiche Weise, wie eine technische Architektur dokumentiert werden soll, statt dass diese Vorgabe bei jeder Anfrage neu im Prompt erklärt werden muss.",
    wannVerwendet:
      "Wenn eine wiederkehrende Aufgabe zuverlässig nach denselben Regeln erledigt werden soll, ohne das Vorgehen jedes Mal aufs Neue zu beschreiben.",
    icon: "📜",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-plugin", "lk-projektspezifischer-skill", "lk-system-prompt"],
    uebersetzungen: {
      en: {
        begriff: "Skill",
        kurzerklaerung:
          "A skill is a reusable set of instructions that tells an AI agent exactly how to carry out a particular task.",
        erklaerung:
          "Think of a skill like a work instruction for a skilled tradesperson: it defines not just the goal, but the proven way to get there, so the same task is handled the same reliable way every time. In short, a skill is domain knowledge plus a procedure for a specific task, packaged into a guide the agent can pull up whenever it's needed.",
        beispiel:
          "A skill tells Claude Code or Codex, over and over the same way, how a technical architecture should be documented, instead of having to explain that requirement fresh in every prompt.",
        wannVerwendet:
          "When a recurring task should reliably follow the same rules, without describing the procedure again every single time.",
      },
      es: {
        begriff: "Skill",
        kurzerklaerung:
          "Un skill es una instrucción de trabajo reutilizable que le indica a un agente de IA exactamente cómo debe realizar una tarea concreta.",
        erklaerung:
          "Puedes imaginar un skill como la instrucción de trabajo para un operario especializado: no solo fija el objetivo, sino también el procedimiento probado, para que la misma tarea se resuelva siempre de la misma forma fiable. En resumen: un skill es conocimiento especializado más un procedimiento para una tarea concreta, empaquetado en una guía que el agente consulta cuando la necesita.",
        beispiel:
          "Un skill le indica a Claude Code o a Codex, siempre de la misma manera, cómo debe documentarse una arquitectura técnica, en lugar de tener que explicar ese requisito de nuevo en cada solicitud.",
        wannVerwendet:
          "Cuando una tarea recurrente debe resolverse de forma fiable siguiendo las mismas reglas, sin describir el procedimiento de nuevo cada vez.",
      },
    },
  },
  {
    id: "lk-plugin",
    kategorieId: KATEGORIE_ID,
    begriff: "Plugin",
    kurzerklaerung:
      "Ein Plugin ist ein größeres Erweiterungspaket für einen KI-Agenten, das mehrere Skills, Befehle und weitere Funktionen gebündelt mitbringt.",
    erklaerung:
      "Während ein Skill einer einzelnen Arbeitsanweisung entspricht, ist ein Plugin eher ein kompletter Werkzeugwagen: Es kann mehrere Skills, eigene Befehle, Verbindungen zu externen Systemen und zusätzliche Agentenfunktionen in einem Paket bündeln. Kurz: Skill = einzelne Fähigkeit, Plugin = Paket aus mehreren Fähigkeiten und Werkzeugen.",
    beispiel:
      "Ein Plugin für die Arbeit mit einer bestimmten Datenbank kann gleichzeitig einen Skill zum Schreiben von Abfragen, einen eigenen Befehl zum Anzeigen des Schemas und eine Verbindung zur Datenbank selbst mitbringen.",
    wannVerwendet:
      "Wenn nicht nur eine einzelne Arbeitsanweisung, sondern ein ganzes Set an zusammengehörigen Fähigkeiten und Werkzeugen auf einmal ergänzt werden soll.",
    icon: "🧩",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-skill", "lk-mcp", "lk-extension"],
    uebersetzungen: {
      en: {
        begriff: "Plugin",
        kurzerklaerung:
          "A plugin is a larger extension package for an AI agent that bundles together several skills, commands, and other features.",
        erklaerung:
          "While a skill corresponds to a single work instruction, a plugin is more like a whole toolbox: it can bundle several skills, its own commands, connections to external systems, and additional agent features into one package. In short: skill = a single capability, plugin = a package of several capabilities and tools.",
        beispiel:
          "A plugin for working with a specific database might bring along a skill for writing queries, its own command for displaying the schema, and a connection to the database itself, all at once.",
        wannVerwendet:
          "When not just a single work instruction, but a whole set of related capabilities and tools should be added at once.",
      },
      es: {
        begriff: "Plugin",
        kurzerklaerung:
          "Un plugin es un paquete de extensión más grande para un agente de IA que agrupa varios skills, comandos y otras funciones.",
        erklaerung:
          "Mientras que un skill corresponde a una única instrucción de trabajo, un plugin es más bien una caja de herramientas completa: puede agrupar varios skills, comandos propios, conexiones a sistemas externos y funciones adicionales del agente en un solo paquete. En resumen: skill = una capacidad individual, plugin = un paquete con varias capacidades y herramientas.",
        beispiel:
          "Un plugin para trabajar con una base de datos concreta puede incluir a la vez un skill para escribir consultas, un comando propio para mostrar el esquema y una conexión a la propia base de datos.",
        wannVerwendet:
          "Cuando no basta con una sola instrucción de trabajo, sino que se quiere añadir de una vez todo un conjunto de capacidades y herramientas relacionadas.",
      },
    },
  },
  {
    id: "lk-mcp",
    kategorieId: KATEGORIE_ID,
    begriff: "MCP (Model Context Protocol)",
    kurzerklaerung:
      "MCP ist ein offener Standard, über den ein KI-Agent sich einheitlich mit externen Programmen oder Datenquellen verbindet.",
    erklaerung:
      "Man kann sich MCP wie eine genormte Steckdose zwischen der KI und einem anderen System vorstellen: Statt für jede Datenquelle eine eigene, individuelle Verbindung zu bauen, sprechen KI-Agent und externes System dieselbe genormte Sprache. Dadurch lässt sich ein einmal gebauter MCP-Server mit vielen unterschiedlichen KI-Agenten verwenden.",
    beispiel:
      "Über einen MCP-Server kann ein Agent gezielt auf GitHub, eine Datenbank oder ein Dokumentenmanagementsystem zugreifen, ohne dass für jede dieser Verbindungen eigener Sonder-Code nötig ist.",
    wannVerwendet:
      "Wenn ein KI-Agent auf Daten oder Funktionen außerhalb seines eigenen Sprachmodells zugreifen soll, etwa auf ein externes System oder eine Datenbank.",
    icon: "🔌",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-plugin", "lk-tool-use", "lk-agentic-github-integration"],
    uebersetzungen: {
      en: {
        begriff: "MCP (Model Context Protocol)",
        kurzerklaerung:
          "MCP is an open standard that lets an AI agent connect to external programs or data sources in a uniform way.",
        erklaerung:
          "Think of MCP as a standardized socket between the AI and another system: instead of building a separate, custom connection for every data source, the AI agent and the external system speak the same standardized language. That means an MCP server built once can be used with many different AI agents.",
        beispiel:
          "Through an MCP server, an agent can access GitHub, a database, or a document management system in a targeted way, without needing custom code for each of these connections.",
        wannVerwendet:
          "When an AI agent needs to access data or functionality outside its own language model, such as an external system or a database.",
      },
      es: {
        begriff: "MCP (Model Context Protocol)",
        kurzerklaerung:
          "MCP es un estándar abierto con el que un agente de IA se conecta de forma uniforme a programas o fuentes de datos externas.",
        erklaerung:
          "Puedes imaginar MCP como un enchufe normalizado entre la IA y otro sistema: en lugar de construir una conexión propia e individual para cada fuente de datos, el agente de IA y el sistema externo hablan el mismo idioma estandarizado. Así, un servidor MCP construido una vez puede usarse con muchos agentes de IA distintos.",
        beispiel:
          "A través de un servidor MCP, un agente puede acceder de forma específica a GitHub, a una base de datos o a un sistema de gestión documental, sin necesitar código especial para cada una de esas conexiones.",
        wannVerwendet:
          "Cuando un agente de IA necesita acceder a datos o funciones fuera de su propio modelo de lenguaje, como un sistema externo o una base de datos.",
      },
    },
  },
  {
    id: "lk-lsp",
    kategorieId: KATEGORIE_ID,
    begriff: "LSP (Language Server Protocol)",
    kurzerklaerung:
      "Ein Language Server hilft einem Editor oder einer KI, Quellcode präzise zu verstehen, statt ihn nur als reinen Text zu behandeln.",
    erklaerung:
      "Man kann sich einen Language Server wie einen digitalen Meister vorstellen, der genau weiß, wo jedes Kabel im Schaltschrank hinführt: Er kennt die Struktur des Codes und kann sagen, wo eine Funktion definiert ist, wo sie überall verwendet wird und welchen Typ eine Variable hat. Das Language Server Protocol ist dabei der genormte Standard, über den verschiedene Editoren und Werkzeuge diese Informationen einheitlich abfragen können.",
    beispiel:
      "Wenn ein Editor beim Klick auf eine Funktion sofort zu ihrer Definition springt oder eine Fehlermeldung anzeigt, bevor der Code überhaupt ausgeführt wurde, steckt im Hintergrund meist ein Language Server dahinter.",
    wannVerwendet:
      "Wenn erklärt wird, wie Editoren oder KI-Werkzeuge Quellcode nicht nur als Text lesen, sondern seine Struktur und Bedeutung tatsächlich nachvollziehen.",
    icon: "🧭",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-vscode", "lk-tool-use"],
    uebersetzungen: {
      en: {
        begriff: "LSP (Language Server Protocol)",
        kurzerklaerung:
          "A language server helps an editor or an AI understand source code precisely, instead of treating it as plain text.",
        erklaerung:
          "Think of a language server as a master technician who knows exactly where every wire in the switch cabinet leads: it knows the structure of the code and can tell you where a function is defined, everywhere it's used, and what type a variable has. The Language Server Protocol is the standardized way different editors and tools can query this information consistently.",
        beispiel:
          "When an editor jumps straight to a function's definition on click, or shows an error before the code has even been run, there's usually a language server working in the background.",
        wannVerwendet:
          "When explaining how editors or AI tools don't just read source code as text, but actually grasp its structure and meaning.",
      },
      es: {
        begriff: "LSP (Language Server Protocol)",
        kurzerklaerung:
          "Un language server ayuda a un editor o a una IA a entender el código fuente con precisión, en lugar de tratarlo como texto plano.",
        erklaerung:
          "Puedes imaginar un language server como un técnico experto que sabe exactamente adónde va cada cable del armario eléctrico: conoce la estructura del código y puede indicar dónde está definida una función, dónde se usa y qué tipo tiene una variable. El Language Server Protocol es el estándar normalizado con el que distintos editores y herramientas pueden consultar esta información de forma uniforme.",
        beispiel:
          "Cuando un editor salta directamente a la definición de una función al hacer clic, o muestra un error antes incluso de ejecutar el código, normalmente hay un language server trabajando en segundo plano.",
        wannVerwendet:
          "Cuando se explica cómo los editores o las herramientas de IA no solo leen el código fuente como texto, sino que realmente comprenden su estructura y su significado.",
      },
    },
  },
  {
    id: "lk-agentic-github-integration",
    kategorieId: KATEGORIE_ID,
    begriff: "GitHub-Integration (agentisch)",
    kurzerklaerung:
      "Die GitHub-Integration verbindet einen KI-Coding-Assistenten wie Codex oder Claude Code mit einem GitHub-Repository und dessen üblichem Arbeitsablauf.",
    erklaerung:
      "Der typische Ablauf folgt dabei dem gewohnten GitHub-Workflow: Issue → Branch → Änderung → Pull Request → Review → main. Die KI übernimmt einzelne Schritte davon – etwa das Erstellen eines Branches oder den ersten Entwurf einer Änderung –, ordnet sich dabei aber in den normalen Ablauf ein, statt ihn zu ersetzen. Kurz gesagt: GitHub speichert und versioniert den Code, die KI arbeitet innerhalb dieses bestehenden Systems daran.",
    beispiel:
      "Ein Agent liest ein GitHub-Issue, erstellt dafür einen eigenen Branch, nimmt die nötige Codeänderung vor und eröffnet anschließend automatisch einen Pull Request zur Prüfung durch ein Teammitglied.",
    wannVerwendet:
      "Wenn ein KI-Agent nicht isoliert an lokalem Code arbeitet, sondern seine Änderungen in ein bestehendes, team-taugliches GitHub-Repository einordnen soll.",
    icon: "🐙",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-pull-request", "lk-issue", "lk-github-plattform", "lk-claude-code"],
    uebersetzungen: {
      en: {
        begriff: "GitHub Integration (agentic)",
        kurzerklaerung:
          "GitHub integration connects an AI coding assistant like Codex or Claude Code to a GitHub repository and its usual workflow.",
        erklaerung:
          "The typical flow follows the familiar GitHub workflow: issue → branch → change → pull request → review → main. The AI takes over individual steps of this — for example creating a branch or drafting a first version of a change — but fits into the normal process rather than replacing it. In short: GitHub stores and versions the code, the AI works within that existing system.",
        beispiel:
          "An agent reads a GitHub issue, creates its own branch for it, makes the necessary code change, and then automatically opens a pull request for a team member to review.",
        wannVerwendet:
          "When an AI agent shouldn't work on local code in isolation, but should fit its changes into an existing, team-ready GitHub repository.",
      },
      es: {
        begriff: "Integración con GitHub (agéntica)",
        kurzerklaerung:
          "La integración con GitHub conecta un asistente de código con IA como Codex o Claude Code con un repositorio de GitHub y su flujo de trabajo habitual.",
        erklaerung:
          "El flujo típico sigue el conocido flujo de trabajo de GitHub: issue → rama → cambio → pull request → revisión → main. La IA se encarga de pasos concretos de ese proceso, por ejemplo crear una rama o redactar un primer borrador de un cambio, pero se integra en el flujo normal en lugar de sustituirlo. En resumen: GitHub almacena y versiona el código, y la IA trabaja dentro de ese sistema ya existente.",
        beispiel:
          "Un agente lee un issue de GitHub, crea su propia rama para ello, realiza el cambio de código necesario y después abre automáticamente un pull request para que lo revise un miembro del equipo.",
        wannVerwendet:
          "Cuando un agente de IA no debe trabajar de forma aislada sobre código local, sino integrar sus cambios en un repositorio de GitHub ya existente y apto para trabajo en equipo.",
      },
    },
  },
  {
    id: "lk-claude-code-setup",
    kategorieId: KATEGORIE_ID,
    begriff: "Claude Code Setup (Projektanalyse)",
    kurzerklaerung:
      "Ein Analysewerkzeug, das ein vorhandenes Projekt zunächst untersucht und darauf aufbauend passende Skills oder Plugins empfiehlt.",
    erklaerung:
      "Man kann sich das wie einen Werkstattberater vorstellen, der sich erst die Werkstatthalle anschaut, bevor neue Maschinen angeschafft werden: Statt wahllos Erweiterungen zu installieren, wird zunächst geprüft, welche Programmiersprachen, Frameworks und Arbeitsabläufe im Projekt tatsächlich vorkommen. Erst danach werden die dazu passenden Skills und Plugins vorgeschlagen.",
    beispiel:
      "Beim erstmaligen Einrichten von Claude Code in einem bestehenden Projekt analysiert das Setup den Code und schlägt zum Beispiel einen Test- oder Linting-Skill vor, der zum verwendeten Framework passt.",
    wannVerwendet:
      "Bevor Skills oder Plugins in einem neuen oder bereits bestehenden Projekt eingerichtet werden, um sie gezielt statt willkürlich auszuwählen.",
    icon: "🔍",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-claude-code", "lk-skill", "lk-plugin"],
    uebersetzungen: {
      en: {
        begriff: "Claude Code Setup (Project Analysis)",
        kurzerklaerung:
          "An analysis tool that first examines an existing project and then recommends matching skills or plugins based on that.",
        erklaerung:
          "Think of a workshop consultant who first looks at the actual shop floor before new machines get purchased: instead of installing extensions at random, the setup first checks which programming languages, frameworks, and workflows actually occur in the project. Only after that are matching skills and plugins suggested.",
        beispiel:
          "When first setting up Claude Code in an existing project, the setup analyzes the code and, for example, suggests a testing or linting skill that fits the framework being used.",
        wannVerwendet:
          "Before setting up skills or plugins in a new or already existing project, to choose them deliberately rather than at random.",
      },
      es: {
        begriff: "Configuración de Claude Code (análisis del proyecto)",
        kurzerklaerung:
          "Una herramienta de análisis que primero examina un proyecto existente y, a partir de ahí, recomienda los skills o plugins adecuados.",
        erklaerung:
          "Puedes imaginarlo como un asesor de taller que primero observa la nave de trabajo antes de comprar nuevas máquinas: en lugar de instalar extensiones al azar, primero se comprueba qué lenguajes de programación, frameworks y flujos de trabajo aparecen realmente en el proyecto. Solo después se proponen los skills y plugins adecuados.",
        beispiel:
          "Al configurar Claude Code por primera vez en un proyecto existente, la configuración analiza el código y, por ejemplo, sugiere un skill de pruebas o de linting que encaja con el framework utilizado.",
        wannVerwendet:
          "Antes de configurar skills o plugins en un proyecto nuevo o ya existente, para elegirlos de forma deliberada en lugar de al azar.",
      },
    },
  },
  {
    id: "lk-feature-development-skill",
    kategorieId: KATEGORIE_ID,
    begriff: "Feature-Development-Skill",
    kurzerklaerung:
      "Ein Skill, der einen KI-Agenten strukturiert durch die Entwicklung einer neuen Funktion führt, statt sofort mit dem Programmieren zu beginnen.",
    erklaerung:
      "Der typische Ablauf ist: bestehenden Code verstehen → Anforderungen klären → Architektur planen → implementieren → testen. Das entspricht dem Vorgehen in einer Werkstatt, wo erst ein Arbeitsplan und eine Zeichnung entstehen, bevor tatsächlich gefertigt wird. Kurz: Nicht sofort programmieren, sondern zuerst verstehen und planen.",
    beispiel:
      "Statt eine neue Funktion direkt umzusetzen, prüft der Agent zunächst den bestehenden Code, klärt offene Fragen zur gewünschten Funktion, entwirft eine passende Struktur und beginnt erst danach mit der eigentlichen Implementierung samt Tests.",
    wannVerwendet:
      "Bei der Entwicklung größerer, neuer Funktionen, bei denen unüberlegtes, sofortiges Programmieren später zu Nacharbeit führen würde.",
    icon: "🗺️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-skill", "lk-code-review-skill"],
    uebersetzungen: {
      en: {
        begriff: "Feature Development Skill",
        kurzerklaerung:
          "A skill that guides an AI agent through developing a new feature in a structured way, instead of jumping straight into coding.",
        erklaerung:
          "The typical flow is: understand the existing code → clarify requirements → plan the architecture → implement → test. This mirrors how a workshop first produces a work plan and a drawing before actually building anything. In short: don't code right away — understand and plan first.",
        beispiel:
          "Instead of implementing a new feature directly, the agent first examines the existing code, clarifies open questions about the desired feature, drafts a suitable structure, and only then starts the actual implementation along with tests.",
        wannVerwendet:
          "When developing larger, new features where jumping straight into unplanned coding would lead to rework later.",
      },
      es: {
        begriff: "Skill de desarrollo de funcionalidades",
        kurzerklaerung:
          "Un skill que guía a un agente de IA de forma estructurada por el desarrollo de una nueva funcionalidad, en lugar de empezar a programar directamente.",
        erklaerung:
          "El flujo típico es: entender el código existente → aclarar los requisitos → planificar la arquitectura → implementar → probar. Esto refleja cómo en un taller primero se elabora un plan de trabajo y un plano antes de fabricar realmente algo. En resumen: no programar de inmediato, sino entender y planificar primero.",
        beispiel:
          "En lugar de implementar directamente una nueva funcionalidad, el agente primero revisa el código existente, aclara las dudas sobre la funcionalidad deseada, diseña una estructura adecuada y solo entonces empieza con la implementación real junto con las pruebas.",
        wannVerwendet:
          "Al desarrollar funcionalidades nuevas y de mayor tamaño, donde programar de inmediato y sin planificación provocaría después trabajo adicional.",
      },
    },
  },
  {
    id: "lk-code-review-skill",
    kategorieId: KATEGORIE_ID,
    begriff: "Code-Review-Skill",
    kurzerklaerung:
      "Ein Skill, der Änderungen prüft, bevor sie in den Hauptstand (main) eines Projekts übernommen werden.",
    erklaerung:
      "Er prüft zum Beispiel Codequalität, Tests, mögliche Fehlersituationen und ob der Code für andere gut verständlich ist – ähnlich wie die Qualitätsprüfung einer fertigen Baugruppe, bevor sie verbaut wird. Wichtig dabei: Implementierung und Prüfung sollten getrennte Schritte sein, idealerweise sogar von unterschiedlichen Rollen oder Agenten übernommen.",
    beispiel:
      "Nachdem eine Änderung fertiggestellt wurde, prüft der Code-Review-Skill separat, ob Fehlerfälle abgedeckt sind, Tests vorhanden sind und der Code nachvollziehbar benannt ist, bevor ein Pull Request freigegeben wird.",
    wannVerwendet:
      "Vor der Übernahme einer Änderung in den Hauptstand, um Qualität und Nachvollziehbarkeit sicherzustellen, statt sich allein auf die Implementierung zu verlassen.",
    icon: "✅",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-code-review", "lk-feature-development-skill", "lk-pull-request"],
    uebersetzungen: {
      en: {
        begriff: "Code Review Skill",
        kurzerklaerung:
          "A skill that checks changes before they get merged into a project's main branch.",
        erklaerung:
          "It checks things like code quality, tests, possible error scenarios, and whether the code is easy for others to understand — similar to a quality check on a finished assembly before it gets installed. Importantly, implementation and review should be separate steps, ideally even handled by different roles or agents.",
        beispiel:
          "After a change is finished, the code review skill separately checks whether error cases are covered, tests exist, and the code is named in a way that's easy to follow, before a pull request gets approved.",
        wannVerwendet:
          "Before merging a change into the main branch, to ensure quality and clarity instead of relying solely on the implementation itself.",
      },
      es: {
        begriff: "Skill de revisión de código",
        kurzerklaerung:
          "Un skill que revisa los cambios antes de que se integren en la rama principal (main) de un proyecto.",
        erklaerung:
          "Comprueba, por ejemplo, la calidad del código, las pruebas, posibles situaciones de error y si el código resulta comprensible para otras personas, de forma parecida al control de calidad de un componente terminado antes de montarlo. Es importante que la implementación y la revisión sean pasos separados, idealmente incluso a cargo de distintos roles o agentes.",
        beispiel:
          "Una vez terminado un cambio, el skill de revisión de código comprueba por separado si están cubiertos los casos de error, si existen pruebas y si el código tiene nombres comprensibles, antes de aprobar un pull request.",
        wannVerwendet:
          "Antes de integrar un cambio en la rama principal, para garantizar calidad y claridad en lugar de confiar únicamente en la implementación.",
      },
    },
  },
  {
    id: "lk-security-guidance-skill",
    kategorieId: KATEGORIE_ID,
    begriff: "Security-Guidance-Skill",
    kurzerklaerung:
      "Ein Skill, der einem KI-Agenten hilft, typische Sicherheitsprobleme im Code zu erkennen.",
    erklaerung:
      "Er achtet zum Beispiel auf Zugangsdaten direkt im Code, fehlende Berechtigungsprüfungen oder ungeprüfte Nutzereingaben. Wichtig dabei: Es handelt sich um eine zusätzliche Kontrolle während der Entwicklung, die vollständige Sicherheitstests und -audits nicht ersetzt, sondern lediglich ergänzt.",
    beispiel:
      "Bevor eine Änderung übernommen wird, weist der Security-Guidance-Skill darauf hin, dass ein API-Schlüssel versehentlich fest im Quellcode statt in einer Umgebungsvariable hinterlegt wurde.",
    wannVerwendet:
      "Während der laufenden Entwicklung, um offensichtliche Sicherheitsprobleme früh zu erkennen – zusätzlich zu, nicht anstelle von, gründlichen Sicherheitsprüfungen.",
    icon: "🛡️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-skill", "lk-code-review-skill"],
    uebersetzungen: {
      en: {
        begriff: "Security Guidance Skill",
        kurzerklaerung:
          "A skill that helps an AI agent recognize typical security problems in code.",
        erklaerung:
          "It watches out for things like credentials hardcoded directly in the code, missing permission checks, or unvalidated user input. Importantly, this is an additional check during development that supplements, but does not replace, thorough security testing and audits.",
        beispiel:
          "Before a change is accepted, the security guidance skill points out that an API key was accidentally hardcoded into the source code instead of stored in an environment variable.",
        wannVerwendet:
          "During ongoing development, to catch obvious security issues early — in addition to, not instead of, thorough security reviews.",
      },
      es: {
        begriff: "Skill de orientación en seguridad",
        kurzerklaerung:
          "Un skill que ayuda a un agente de IA a reconocer problemas de seguridad típicos en el código.",
        erklaerung:
          "Presta atención, por ejemplo, a credenciales incrustadas directamente en el código, comprobaciones de permisos ausentes o entradas de usuario sin validar. Es importante tener en cuenta que se trata de un control adicional durante el desarrollo, que complementa, pero no sustituye, las pruebas y auditorías de seguridad exhaustivas.",
        beispiel:
          "Antes de aceptar un cambio, el skill de orientación en seguridad advierte de que una clave de API se quedó fijada por error directamente en el código fuente en lugar de en una variable de entorno.",
        wannVerwendet:
          "Durante el desarrollo en curso, para detectar pronto problemas de seguridad evidentes, como complemento y no como sustituto de revisiones de seguridad exhaustivas.",
      },
    },
  },
  {
    id: "lk-drawio-skill",
    kategorieId: KATEGORIE_ID,
    begriff: "draw.io-Skill",
    kurzerklaerung:
      "Ein Skill, der bearbeitbare technische Diagramme erzeugt, zum Beispiel im Format des Zeichenwerkzeugs draw.io.",
    erklaerung:
      "Das entspricht klassischer Visio- oder draw.io-Arbeit, nur dass die KI den ersten Entwurf vorbereitet: Architektur, Datenflüsse, Module und Schnittstellen eines Systems werden so verständlich und vor allem weiter bearbeitbar dargestellt, statt nur als starres Bild.",
    beispiel:
      "Ein Entwickler lässt sich mit dem draw.io-Skill ein Diagramm der Systemarchitektur erzeugen, das anschließend im Browser weiter angepasst werden kann.",
    wannVerwendet:
      "Wenn eine technische Struktur wie Architektur oder Datenfluss visuell und bearbeitbar dokumentiert werden soll, statt nur in Textform.",
    icon: "📊",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-skill"],
    uebersetzungen: {
      en: {
        begriff: "draw.io Skill",
        kurzerklaerung:
          "A skill that produces editable technical diagrams, for example in the format used by the draw.io diagramming tool.",
        erklaerung:
          "This is like classic Visio or draw.io work, except the AI prepares the first draft: a system's architecture, data flows, modules, and interfaces are shown in a way that's easy to understand and, importantly, still editable, rather than just a fixed image.",
        beispiel:
          "A developer has the draw.io skill generate a diagram of the system architecture, which can then be further adjusted in the browser.",
        wannVerwendet:
          "When a technical structure like architecture or data flow should be documented visually and editably, rather than only as text.",
      },
      es: {
        begriff: "Skill de draw.io",
        kurzerklaerung:
          "Un skill que genera diagramas técnicos editables, por ejemplo en el formato de la herramienta de diagramación draw.io.",
        erklaerung:
          "Es como el trabajo clásico con Visio o draw.io, solo que la IA prepara el primer borrador: la arquitectura, los flujos de datos, los módulos y las interfaces de un sistema se representan de forma comprensible y, sobre todo, siguen siendo editables, en lugar de ser solo una imagen fija.",
        beispiel:
          "Un desarrollador le pide al skill de draw.io que genere un diagrama de la arquitectura del sistema, que después puede seguir ajustando en el navegador.",
        wannVerwendet:
          "Cuando una estructura técnica, como la arquitectura o el flujo de datos, debe documentarse de forma visual y editable, en lugar de solo en formato de texto.",
      },
    },
  },
  {
    id: "lk-office-document-skills",
    kategorieId: KATEGORIE_ID,
    begriff: "Office-/Document-Skills",
    kurzerklaerung:
      "Spezialisierte Skills für die Arbeit mit gängigen Dateiformaten wie Word, Excel, PowerPoint oder PDF.",
    erklaerung:
      "Solche Skills geben der KI zusätzliches Spezialwissen darüber, wie ein bestimmtes Dateiformat aufgebaut ist und sinnvoll erzeugt oder verändert wird, statt nur allgemeinen Text auszugeben.",
    beispiel:
      "Mit einem passenden Document-Skill erzeugt die KI aus Stichpunkten eine fertig formatierte PowerPoint-Präsentation oder wertet die Zahlen einer Excel-Tabelle strukturiert aus.",
    wannVerwendet:
      "Wenn ein Ergebnis nicht als reiner Text, sondern in einem bestimmten Büro- oder Dokumentformat gebraucht wird.",
    icon: "📄",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-skill"],
    uebersetzungen: {
      en: {
        begriff: "Office / Document Skills",
        kurzerklaerung:
          "Specialized skills for working with common file formats like Word, Excel, PowerPoint, or PDF.",
        erklaerung:
          "Skills like these give the AI extra specialized knowledge about how a particular file format is structured and can be sensibly created or edited, instead of just producing plain text.",
        beispiel:
          "With a suitable document skill, the AI turns bullet points into a fully formatted PowerPoint presentation, or analyzes the numbers in an Excel spreadsheet in a structured way.",
        wannVerwendet:
          "When the result needs to be delivered not as plain text, but in a specific office or document format.",
      },
      es: {
        begriff: "Skills de ofimática / documentos",
        kurzerklaerung:
          "Skills especializados para trabajar con formatos de archivo habituales como Word, Excel, PowerPoint o PDF.",
        erklaerung:
          "Estos skills le dan a la IA conocimiento especializado adicional sobre cómo está estructurado un formato de archivo concreto y cómo generarlo o modificarlo de forma adecuada, en lugar de limitarse a producir texto genérico.",
        beispiel:
          "Con el skill de documentos adecuado, la IA convierte puntos clave en una presentación de PowerPoint ya formateada, o analiza de forma estructurada los números de una hoja de Excel.",
        wannVerwendet:
          "Cuando el resultado no se necesita como texto plano, sino en un formato de ofimática o de documento concreto.",
      },
    },
  },
  {
    id: "lk-web-app-skill",
    kategorieId: KATEGORIE_ID,
    begriff: "Web-App-Skill",
    kurzerklaerung:
      "Ein Skill, der beim Erstellen und Prüfen von Weboberflächen unterstützt.",
    erklaerung:
      "Man kann sich das wie einen spezialisierten UI- beziehungsweise Frontend-Monteur vorstellen: Er kennt sich mit typischen Bausteinen wie mobilen Oberflächen, Formularen und Dashboards aus und kann eine fertige Oberfläche auch automatisiert im Browser testen, statt sie nur zu beschreiben.",
    beispiel:
      "Ein Web-App-Skill baut für ein Dashboard passende Formularfelder und prüft anschließend per automatisiertem Browser-Test, ob ein Klick auf den Speichern-Button tatsächlich funktioniert.",
    wannVerwendet:
      "Bei der Entwicklung oder Prüfung von Benutzeroberflächen im Browser, wenn mehr als nur reiner Programmcode entstehen soll.",
    icon: "🎛️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-skill"],
    uebersetzungen: {
      en: {
        begriff: "Web App Skill",
        kurzerklaerung:
          "A skill that helps with building and testing web interfaces.",
        erklaerung:
          "Think of it as a specialized UI or frontend fitter: it's familiar with typical building blocks like mobile layouts, forms, and dashboards, and can even test a finished interface automatically in the browser instead of just describing it.",
        beispiel:
          "A web app skill builds matching form fields for a dashboard and then runs an automated browser test to check whether clicking the save button actually works.",
        wannVerwendet:
          "When building or testing user interfaces in the browser, when more than just plain code needs to be produced.",
      },
      es: {
        begriff: "Skill de aplicaciones web",
        kurzerklaerung:
          "Un skill que ayuda a crear y probar interfaces web.",
        erklaerung:
          "Puedes imaginarlo como un montador especializado en interfaces o frontend: conoce bien los elementos habituales, como interfaces móviles, formularios y paneles de control, y puede incluso probar automáticamente en el navegador una interfaz terminada en lugar de limitarse a describirla.",
        beispiel:
          "Un skill de aplicaciones web construye los campos de formulario adecuados para un panel de control y después comprueba, mediante una prueba automatizada en el navegador, si al pulsar el botón de guardar realmente funciona.",
        wannVerwendet:
          "Al desarrollar o probar interfaces de usuario en el navegador, cuando se necesita algo más que código puro.",
      },
    },
  },
  {
    id: "lk-codex-claude-zusammenarbeit",
    kategorieId: KATEGORIE_ID,
    begriff: "Codex + Claude gemeinsam",
    kurzerklaerung:
      "Zwei unterschiedliche KI-Agenten können in einem Projekt unterschiedliche Rollen übernehmen, zum Beispiel Entwicklung und Prüfung.",
    erklaerung:
      "Ein Beispiel: Claude entwickelt eine Änderung, und Codex prüft sie – oder umgekehrt, Codex entwickelt und Claude prüft. Der Nutzen dabei: Die KI bewertet nicht ausschließlich ihre eigene Arbeit selbst, sondern bekommt eine unabhängige zweite Einschätzung, ähnlich wie bei einem menschlichen Vier-Augen-Prinzip.",
    beispiel:
      "Ein Entwickler lässt Codex eine neue Funktion umsetzen und bittet anschließend Claude Code, unabhängig davon Code-Qualität und Testabdeckung dieser Änderung zu bewerten.",
    wannVerwendet:
      "Wenn eine unabhängige zweite Meinung zu einer KI-generierten Änderung gewünscht ist, statt sich allein auf die Selbsteinschätzung eines einzelnen Modells zu verlassen.",
    icon: "🤝",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-claude-code", "lk-codex", "lk-code-review-skill"],
    uebersetzungen: {
      en: {
        begriff: "Codex + Claude Together",
        kurzerklaerung:
          "Two different AI agents can take on different roles within a project, for example development and review.",
        erklaerung:
          "One example: Claude develops a change and Codex reviews it — or the other way around, Codex develops and Claude reviews. The benefit: the AI isn't solely judging its own work, but gets an independent second opinion, similar to a human four-eyes principle.",
        beispiel:
          "A developer has Codex implement a new feature, then asks Claude Code to independently assess the code quality and test coverage of that change.",
        wannVerwendet:
          "When an independent second opinion on an AI-generated change is wanted, instead of relying solely on a single model's self-assessment.",
      },
      es: {
        begriff: "Codex + Claude juntos",
        kurzerklaerung:
          "Dos agentes de IA distintos pueden asumir roles diferentes dentro de un proyecto, por ejemplo desarrollo y revisión.",
        erklaerung:
          "Un ejemplo: Claude desarrolla un cambio y Codex lo revisa, o al revés, Codex desarrolla y Claude revisa. La ventaja de esto: la IA no evalúa exclusivamente su propio trabajo, sino que recibe una segunda opinión independiente, de forma parecida al principio humano de doble verificación.",
        beispiel:
          "Un desarrollador hace que Codex implemente una nueva funcionalidad y después le pide a Claude Code que evalúe de forma independiente la calidad del código y la cobertura de pruebas de ese cambio.",
        wannVerwendet:
          "Cuando se desea una segunda opinión independiente sobre un cambio generado por IA, en lugar de confiar únicamente en la autoevaluación de un solo modelo.",
      },
    },
  },
  {
    id: "lk-projektspezifischer-skill",
    kategorieId: KATEGORIE_ID,
    begriff: "Projektspezifischer Skill",
    kurzerklaerung:
      "Ein Skill, der Regeln enthält, die nur für ein bestimmtes Projekt oder Unternehmen gelten, statt allgemeingültig zu sein.",
    erklaerung:
      "Man kann sich das wie die interne Arbeitsanweisung eines Unternehmens vorstellen: Allgemeine Skills kennen das Handwerk an sich, projektspezifische Skills kennen zusätzlich die eigene Firma – etwa wie bestimmte APIs, Datenmodelle oder Architekturänderungen im eigenen System gehandhabt werden müssen.",
    beispiel:
      "Ein projektspezifischer Skill legt fest, wie neue Schnittstellen im firmeneigenen ERP-System benannt und dokumentiert werden müssen, was ein allgemeiner Skill von außen nicht wissen kann.",
    wannVerwendet:
      "Wenn firmen- oder projekteigene Regeln zuverlässig eingehalten werden sollen, die über allgemeines Programmierwissen hinausgehen.",
    icon: "🏭",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-skill", "lk-plugin"],
    uebersetzungen: {
      en: {
        begriff: "Project-Specific Skill",
        kurzerklaerung:
          "A skill that contains rules that apply only to a particular project or company, rather than being generally valid.",
        erklaerung:
          "Think of it like a company's internal work instructions: general skills know the craft itself, while project-specific skills additionally know your own company — for example, how particular APIs, data models, or architecture changes need to be handled in your own system.",
        beispiel:
          "A project-specific skill defines how new interfaces in the company's own ERP system must be named and documented, something a general skill from outside couldn't know.",
        wannVerwendet:
          "When company- or project-specific rules that go beyond general programming knowledge need to be reliably followed.",
      },
      es: {
        begriff: "Skill específico del proyecto",
        kurzerklaerung:
          "Un skill que contiene reglas que solo aplican a un proyecto o empresa concretos, en lugar de tener validez general.",
        erklaerung:
          "Puedes imaginarlo como la instrucción de trabajo interna de una empresa: los skills generales conocen el oficio en sí, mientras que los skills específicos del proyecto conocen además la propia empresa, por ejemplo cómo deben tratarse ciertas API, modelos de datos o cambios de arquitectura en el sistema propio.",
        beispiel:
          "Un skill específico del proyecto establece cómo deben nombrarse y documentarse las nuevas interfaces en el sistema ERP propio de la empresa, algo que un skill general externo no podría saber.",
        wannVerwendet:
          "Cuando deben cumplirse de forma fiable reglas propias de la empresa o del proyecto que van más allá del conocimiento general de programación.",
      },
    },
  },
  {
    id: "lk-skill-plugin-uebersicht",
    kategorieId: KATEGORIE_ID,
    begriff: "Skill, Plugin, MCP, LSP & GitHub im Überblick",
    kurzerklaerung:
      "Eine kurze Gegenüberstellung, welche Frage die zentralen Begriffe rund um Agent-Erweiterungen jeweils beantworten.",
    erklaerung:
      "Skill beantwortet die Frage: Wie soll die KI eine Aufgabe erledigen? Plugin beantwortet: Welche zusätzlichen Fähigkeiten bekommt die KI insgesamt? MCP beantwortet: Mit welchem externen System kann die KI sprechen? LSP beantwortet: Wie versteht die KI den Quellcode genauer? Und GitHub beantwortet: Wo liegt und versioniert sich der Quellcode, an dem gearbeitet wird? Diese fünf Fragen helfen dabei, die Begriffe im Kopf sauber auseinanderzuhalten.",
    beispiel:
      "Wenn ein neues Werkzeug für einen KI-Agenten auftaucht, hilft die Frage „Beschreibt es ein Vorgehen, bringt es mehrere Fähigkeiten mit, verbindet es mit einem externen System, hilft es beim Codeverständnis oder betrifft es die Versionierung?“, um es richtig einzuordnen.",
    wannVerwendet:
      "Als schnelle Gedächtnisstütze, wenn die Begriffe Skill, Plugin, MCP, LSP und GitHub-Integration durcheinandergeraten oder neu gelernt werden.",
    icon: "🗂️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-skill", "lk-plugin", "lk-mcp", "lk-lsp", "lk-agentic-github-integration"],
    uebersetzungen: {
      en: {
        begriff: "Skill, Plugin, MCP, LSP & GitHub at a Glance",
        kurzerklaerung:
          "A short comparison of which question each of the core terms around agent extensions answers.",
        erklaerung:
          "Skill answers: how should the AI carry out a task? Plugin answers: what additional capabilities does the AI get overall? MCP answers: which external system can the AI talk to? LSP answers: how does the AI understand the source code in more detail? And GitHub answers: where does the source code being worked on live and get versioned? These five questions help keep the terms cleanly separated in your head.",
        beispiel:
          "When a new tool for an AI agent comes up, asking \"Does it describe a procedure, does it bring multiple capabilities, does it connect to an external system, does it help understand code, or is it about versioning?\" helps place it correctly.",
        wannVerwendet:
          "As a quick memory aid whenever the terms skill, plugin, MCP, LSP, and GitHub integration get mixed up or are being learned for the first time.",
      },
      es: {
        begriff: "Skill, plugin, MCP, LSP y GitHub de un vistazo",
        kurzerklaerung:
          "Una breve comparación de qué pregunta responde cada uno de los conceptos centrales sobre extensiones de agentes.",
        erklaerung:
          "Skill responde a: ¿cómo debe la IA realizar una tarea? Plugin responde a: ¿qué capacidades adicionales recibe la IA en conjunto? MCP responde a: ¿con qué sistema externo puede hablar la IA? LSP responde a: ¿cómo entiende la IA el código fuente con más detalle? Y GitHub responde a: ¿dónde se almacena y se versiona el código fuente en el que se trabaja? Estas cinco preguntas ayudan a diferenciar bien estos conceptos.",
        beispiel:
          "Cuando aparece una nueva herramienta para un agente de IA, preguntarse «¿describe un procedimiento, aporta varias capacidades, conecta con un sistema externo, ayuda a entender el código o tiene que ver con el versionado?» ayuda a clasificarla correctamente.",
        wannVerwendet:
          "Como recurso rápido de memoria cuando los conceptos skill, plugin, MCP, LSP e integración con GitHub se confunden o se están aprendiendo por primera vez.",
      },
    },
  },
];
