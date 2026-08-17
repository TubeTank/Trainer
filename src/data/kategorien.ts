import type { Kategorie } from "./types";

export const kategorien: Kategorie[] = [
  {
    id: "kat-git-grundlagen",
    titel: "Git-Grundlagen",
    beschreibung:
      "Die wichtigsten Begriffe rund um Git – das Versionskontrollsystem, mit dem Entwickler:innen Änderungen an Code nachvollziehbar und sicher verwalten.",
    reihenfolge: 1,
    icon: "🌱",
    uebersetzungen: {
      en: {
        titel: "Git Basics",
        beschreibung:
          "The key terms around Git – the version control system developers use to track and safely manage changes to code.",
      },
      es: {
        titel: "Fundamentos de Git",
        beschreibung:
          "Los términos clave de Git, el sistema de control de versiones que usan los desarrolladores para gestionar cambios en el código de forma segura y trazable.",
      },
    },
  },
  {
    id: "kat-github-zusammenarbeit",
    titel: "GitHub & Zusammenarbeit",
    beschreibung:
      "Wie mehrere Menschen gemeinsam an einem Git-Repository arbeiten: Remote-Server, Pull Requests, Code Review, Issues und automatisierte Prüfungen über GitHub Actions.",
    reihenfolge: 2,
    icon: "🐙",
    uebersetzungen: {
      en: {
        titel: "GitHub & Collaboration",
        beschreibung:
          "How multiple people work together on one Git repository: remotes, pull requests, code review, issues, and automated checks via GitHub Actions.",
      },
      es: {
        titel: "GitHub y colaboración",
        beschreibung:
          "Cómo varias personas trabajan juntas en un mismo repositorio de Git: remotos, pull requests, revisión de código, issues y comprobaciones automáticas con GitHub Actions.",
      },
    },
  },
  {
    id: "kat-kommandozeile-powershell",
    titel: "Kommandozeile & PowerShell",
    beschreibung:
      "Grundbegriffe rund um Terminal, Shell und PowerShell – die Text-basierte Steuerung des eigenen Rechners, die im Entwicklungsalltag ständig zum Einsatz kommt.",
    reihenfolge: 3,
    icon: "⌨️",
    uebersetzungen: {
      en: {
        titel: "Command Line & PowerShell",
        beschreibung:
          "Core terms around terminal, shell, and PowerShell – the text-based way of controlling a computer that comes up constantly in everyday development.",
      },
      es: {
        titel: "Línea de comandos y PowerShell",
        beschreibung:
          "Conceptos básicos sobre terminal, shell y PowerShell: el control del ordenador basado en texto que aparece constantemente en el día a día del desarrollo.",
      },
    },
  },
  {
    id: "kat-laufzeitumgebungen-sprachen",
    titel: "Laufzeitumgebungen & Sprachen",
    beschreibung:
      "Wie Programmiersprachen wie JavaScript/Node.js und Python tatsächlich ausgeführt werden, und wie Package Manager dabei helfen, fremden Code einzubinden.",
    reihenfolge: 4,
    icon: "⚙️",
    uebersetzungen: {
      en: {
        titel: "Runtimes & Languages",
        beschreibung:
          "How programming languages like JavaScript/Node.js and Python actually get executed, and how package managers help pull in code written by others.",
      },
      es: {
        titel: "Entornos de ejecución y lenguajes",
        beschreibung:
          "Cómo se ejecutan realmente lenguajes como JavaScript/Node.js y Python, y cómo los gestores de paquetes ayudan a incorporar código de terceros.",
      },
    },
  },
  {
    id: "kat-libraries-abhaengigkeiten",
    titel: "Libraries & Abhängigkeiten",
    beschreibung:
      "Wie fremder, fertiger Code über Bibliotheken eingebunden wird: package.json, Lockfiles, Versionierung (SemVer) und typische Abhängigkeitskonflikte.",
    reihenfolge: 5,
    icon: "📦",
    uebersetzungen: {
      en: {
        titel: "Libraries & Dependencies",
        beschreibung:
          "How ready-made code from others is pulled in via libraries: package.json, lockfiles, versioning (SemVer), and typical dependency conflicts.",
      },
      es: {
        titel: "Librerías y dependencias",
        beschreibung:
          "Cómo se incorpora código de terceros mediante librerías: package.json, lockfiles, versionado (SemVer) y los típicos conflictos de dependencias.",
      },
    },
  },
  {
    id: "kat-entwicklungswerkzeuge",
    titel: "Entwicklungswerkzeuge",
    beschreibung:
      "Editor, Erweiterungen, Linter, Formatter und Debugger – die tägliche Werkzeugausstattung beim Schreiben und Prüfen von Code.",
    reihenfolge: 6,
    icon: "🧰",
    uebersetzungen: {
      en: {
        titel: "Development Tools",
        beschreibung:
          "Editor, extensions, linters, formatters, and debuggers – the everyday toolkit for writing and checking code.",
      },
      es: {
        titel: "Herramientas de desarrollo",
        beschreibung:
          "Editor, extensiones, linters, formateadores y depuradores: el equipo diario para escribir y revisar código.",
      },
    },
  },
  {
    id: "kat-web-grundlagen",
    titel: "Web-Grundlagen",
    beschreibung:
      "Wie Webseiten und Web-Anwendungen grundsätzlich funktionieren: HTML, CSS, JavaScript, das Client-Server-Modell sowie HTTP, REST und JSON.",
    reihenfolge: 7,
    icon: "🌐",
    uebersetzungen: {
      en: {
        titel: "Web Basics",
        beschreibung:
          "How websites and web apps fundamentally work: HTML, CSS, JavaScript, the client-server model, plus HTTP, REST, and JSON.",
      },
      es: {
        titel: "Fundamentos web",
        beschreibung:
          "Cómo funcionan las páginas y aplicaciones web: HTML, CSS, JavaScript, el modelo cliente-servidor, además de HTTP, REST y JSON.",
      },
    },
  },
  {
    id: "kat-build-tools-bundler",
    titel: "Build-Tools & Bundler",
    beschreibung:
      "Wie aus Quellcode eine lauffähige, optimierte Anwendung entsteht – Bundler, Transpilation, Hot Reload und der TypeScript-Compiler.",
    reihenfolge: 8,
    icon: "🏗️",
    uebersetzungen: {
      en: {
        titel: "Build Tools & Bundlers",
        beschreibung:
          "How source code turns into a working, optimized application – bundlers, transpilation, hot reload, and the TypeScript compiler.",
      },
      es: {
        titel: "Herramientas de compilación y bundlers",
        beschreibung:
          "Cómo el código fuente se convierte en una aplicación funcional y optimizada: bundlers, transpilación, recarga en caliente y el compilador de TypeScript.",
      },
    },
  },
  {
    id: "kat-server-hosting",
    titel: "Server & Hosting",
    beschreibung:
      "Was ein Server eigentlich ist, wie Domains und Ports zusammenspielen, und wie eine Anwendung von localhost bis zum echten Hosting kommt.",
    reihenfolge: 9,
    icon: "🖥️",
    uebersetzungen: {
      en: {
        titel: "Servers & Hosting",
        beschreibung:
          "What a server actually is, how domains and ports work together, and how an app travels from localhost to real hosting.",
      },
      es: {
        titel: "Servidores y hosting",
        beschreibung:
          "Qué es realmente un servidor, cómo interactúan dominios y puertos, y cómo una aplicación pasa de localhost a un hosting real.",
      },
    },
  },
  {
    id: "kat-datenbanken-grundlagen",
    titel: "Datenbanken-Grundlagen",
    beschreibung:
      "Relationale und NoSQL-Datenbanken, SQL-Grundbegriffe sowie ORM und Migrationen als Brücke zwischen Datenbank und Programmcode.",
    reihenfolge: 10,
    icon: "🗄️",
    uebersetzungen: {
      en: {
        titel: "Database Basics",
        beschreibung:
          "Relational and NoSQL databases, core SQL concepts, plus ORMs and migrations as the bridge between the database and your code.",
      },
      es: {
        titel: "Fundamentos de bases de datos",
        beschreibung:
          "Bases de datos relacionales y NoSQL, conceptos básicos de SQL, y ORM y migraciones como puente entre la base de datos y el código.",
      },
    },
  },
  {
    id: "kat-cloud-devops-grundlagen",
    titel: "Cloud & DevOps-Grundlagen",
    beschreibung:
      "Container, CI/CD-Pipelines, Infrastructure as Code und Secrets-Management – wie moderne Software zuverlässig betrieben und ausgeliefert wird.",
    reihenfolge: 11,
    icon: "☁️",
    uebersetzungen: {
      en: {
        titel: "Cloud & DevOps Basics",
        beschreibung:
          "Containers, CI/CD pipelines, infrastructure as code, and secrets management – how modern software is reliably run and shipped.",
      },
      es: {
        titel: "Fundamentos de cloud y DevOps",
        beschreibung:
          "Contenedores, pipelines de CI/CD, infraestructura como código y gestión de secretos: cómo se opera y despliega el software moderno de forma fiable.",
      },
    },
  },
  {
    id: "kat-ki-assistenten-agentic-coding",
    titel: "KI-Assistenten & Agentic Coding",
    beschreibung:
      "Grundbegriffe zu Sprachmodellen, Prompts und KI-Coding-Assistenten wie Claude Code oder Codex, die beim Programmieren aktiv mitarbeiten.",
    reihenfolge: 12,
    icon: "🤖",
    uebersetzungen: {
      en: {
        titel: "AI Assistants & Agentic Coding",
        beschreibung:
          "Core terms around language models, prompts, and AI coding assistants like Claude Code or Codex that actively help write code.",
      },
      es: {
        titel: "Asistentes de IA y programación con agentes",
        beschreibung:
          "Conceptos básicos sobre modelos de lenguaje, prompts y asistentes de codificación con IA como Claude Code o Codex que colaboran activamente al programar.",
      },
    },
  },
  {
    id: "kat-lokale-llms",
    titel: "Lokale LLMs betreiben",
    beschreibung:
      "Wie sich Sprachmodelle lokal auf dem eigenen Rechner statt in der Cloud betreiben lassen – Werkzeuge, Hardware-Anforderungen und Modellformate.",
    reihenfolge: 13,
    icon: "🧠",
    uebersetzungen: {
      en: {
        titel: "Running Local LLMs",
        beschreibung:
          "How language models can run locally on your own machine instead of in the cloud – tools, hardware requirements, and model formats.",
      },
      es: {
        titel: "Ejecutar LLMs locales",
        beschreibung:
          "Cómo ejecutar modelos de lenguaje de forma local en tu propio equipo en lugar de en la nube: herramientas, requisitos de hardware y formatos de modelo.",
      },
    },
  },
  {
    id: "kat-erp-systeme",
    titel: "ERP-Systeme verstehen & aufbauen",
    beschreibung:
      "Grundbegriffe von Unternehmenssoftware: Module, Stamm- und Bewegungsdaten, Schnittstellen, Berechtigungen und Auswertungen.",
    reihenfolge: 14,
    icon: "🏢",
    uebersetzungen: {
      en: {
        titel: "Understanding & Building ERP Systems",
        beschreibung:
          "Core concepts of business software: modules, master and transactional data, interfaces, permissions, and reporting.",
      },
      es: {
        titel: "Entender y construir sistemas ERP",
        beschreibung:
          "Conceptos básicos del software empresarial: módulos, datos maestros y transaccionales, interfaces, permisos e informes.",
      },
    },
  },
  {
    id: "kat-sicherheit-gute-praxis",
    titel: "Sicherheit & gute Praxis",
    beschreibung:
      "Grundlegende Sicherheitsprinzipien für den Entwicklungsalltag: Rechtevergabe, Backups, Verschlüsselung und sichere Standardeinstellungen.",
    reihenfolge: 15,
    icon: "🛡️",
    uebersetzungen: {
      en: {
        titel: "Security & Best Practices",
        beschreibung:
          "Fundamental security principles for everyday development: permissions, backups, encryption, and secure defaults.",
      },
      es: {
        titel: "Seguridad y buenas prácticas",
        beschreibung:
          "Principios básicos de seguridad para el día a día del desarrollo: permisos, copias de seguridad, cifrado y configuraciones seguras por defecto.",
      },
    },
  },
  {
    id: "kat-instandhaltung-elektrotechnik",
    titel: "Instandhaltung & Elektrotechnik-Grundlagen",
    beschreibung:
      "Grundbegriffe zu Gerätprüfungen, Wartungsplänen und Elektrotechnik sowie zur digitalen Dokumentation und Automatisierung von Wartungsdaten.",
    reihenfolge: 16,
    icon: "🔧",
    uebersetzungen: {
      en: {
        titel: "Maintenance & Electrical Basics",
        beschreibung:
          "Core terms around equipment testing, maintenance plans, and electrical engineering, plus digital documentation and automating maintenance data.",
      },
      es: {
        titel: "Mantenimiento y fundamentos de electrotecnia",
        beschreibung:
          "Conceptos básicos sobre pruebas de equipos, planes de mantenimiento y electrotecnia, además de la documentación digital y automatización de datos de mantenimiento.",
      },
    },
  },
  {
    id: "kat-schweissen-metallbau",
    titel: "Schweißen & Metallbau",
    beschreibung:
      "Grundbegriffe zu Schweißverfahren wie WIG und MAG, gängigen Werkstoffen im Tank- und Rohrleitungsbau sowie zur Werkstatttechnik.",
    reihenfolge: 17,
    icon: "🔥",
    uebersetzungen: {
      en: {
        titel: "Welding & Metalworking",
        beschreibung:
          "Core terms around welding processes like TIG and MIG/MAG, common materials in tank and pipe construction, and workshop equipment.",
      },
      es: {
        titel: "Soldadura y construcción metálica",
        beschreibung:
          "Conceptos básicos sobre procesos de soldadura como TIG y MIG/MAG, materiales habituales en la construcción de tanques y tuberías, y equipamiento de taller.",
      },
    },
  },
  {
    id: "kat-agent-skills-plugins",
    titel: "Agent Skills & Plugins",
    beschreibung:
      "Wie KI-Coding-Agenten über Skills, Plugins, MCP und Language Server erweitert werden, und wie sie sich in bestehende GitHub-Workflows einordnen.",
    reihenfolge: 18,
    icon: "🧩",
    uebersetzungen: {
      en: {
        titel: "Agent Skills & Plugins",
        beschreibung:
          "How AI coding agents get extended through skills, plugins, MCP, and language servers, and how they fit into existing GitHub workflows.",
      },
      es: {
        titel: "Skills y plugins de agentes",
        beschreibung:
          "Cómo se amplían los agentes de código con IA mediante skills, plugins, MCP y servidores de lenguaje, y cómo encajan en los flujos de trabajo de GitHub.",
      },
    },
  },
];
