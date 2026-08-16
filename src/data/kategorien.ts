import type { Kategorie } from "./types";

export const kategorien: Kategorie[] = [
  {
    id: "kat-git-grundlagen",
    titel: "Git-Grundlagen",
    beschreibung:
      "Die wichtigsten Begriffe rund um Git – das Versionskontrollsystem, mit dem Entwickler:innen Änderungen an Code nachvollziehbar und sicher verwalten.",
    reihenfolge: 1,
  },
  {
    id: "kat-github-zusammenarbeit",
    titel: "GitHub & Zusammenarbeit",
    beschreibung:
      "Wie mehrere Menschen gemeinsam an einem Git-Repository arbeiten: Remote-Server, Pull Requests, Code Review, Issues und automatisierte Prüfungen über GitHub Actions.",
    reihenfolge: 2,
  },
  {
    id: "kat-kommandozeile-powershell",
    titel: "Kommandozeile & PowerShell",
    beschreibung:
      "Grundbegriffe rund um Terminal, Shell und PowerShell – die Text-basierte Steuerung des eigenen Rechners, die im Entwicklungsalltag ständig zum Einsatz kommt.",
    reihenfolge: 3,
  },
  {
    id: "kat-laufzeitumgebungen-sprachen",
    titel: "Laufzeitumgebungen & Sprachen",
    beschreibung:
      "Wie Programmiersprachen wie JavaScript/Node.js und Python tatsächlich ausgeführt werden, und wie Package Manager dabei helfen, fremden Code einzubinden.",
    reihenfolge: 4,
  },
  {
    id: "kat-libraries-abhaengigkeiten",
    titel: "Libraries & Abhängigkeiten",
    beschreibung:
      "Wie fremder, fertiger Code über Bibliotheken eingebunden wird: package.json, Lockfiles, Versionierung (SemVer) und typische Abhängigkeitskonflikte.",
    reihenfolge: 5,
  },
  {
    id: "kat-entwicklungswerkzeuge",
    titel: "Entwicklungswerkzeuge",
    beschreibung:
      "Editor, Erweiterungen, Linter, Formatter und Debugger – die tägliche Werkzeugausstattung beim Schreiben und Prüfen von Code.",
    reihenfolge: 6,
  },
  {
    id: "kat-web-grundlagen",
    titel: "Web-Grundlagen",
    beschreibung:
      "Wie Webseiten und Web-Anwendungen grundsätzlich funktionieren: HTML, CSS, JavaScript, das Client-Server-Modell sowie HTTP, REST und JSON.",
    reihenfolge: 7,
  },
  {
    id: "kat-build-tools-bundler",
    titel: "Build-Tools & Bundler",
    beschreibung:
      "Wie aus Quellcode eine lauffähige, optimierte Anwendung entsteht – Bundler, Transpilation, Hot Reload und der TypeScript-Compiler.",
    reihenfolge: 8,
  },
  {
    id: "kat-server-hosting",
    titel: "Server & Hosting",
    beschreibung:
      "Was ein Server eigentlich ist, wie Domains und Ports zusammenspielen, und wie eine Anwendung von localhost bis zum echten Hosting kommt.",
    reihenfolge: 9,
  },
  {
    id: "kat-datenbanken-grundlagen",
    titel: "Datenbanken-Grundlagen",
    beschreibung:
      "Relationale und NoSQL-Datenbanken, SQL-Grundbegriffe sowie ORM und Migrationen als Brücke zwischen Datenbank und Programmcode.",
    reihenfolge: 10,
  },
  {
    id: "kat-cloud-devops-grundlagen",
    titel: "Cloud & DevOps-Grundlagen",
    beschreibung:
      "Container, CI/CD-Pipelines, Infrastructure as Code und Secrets-Management – wie moderne Software zuverlässig betrieben und ausgeliefert wird.",
    reihenfolge: 11,
  },
  {
    id: "kat-ki-assistenten-agentic-coding",
    titel: "KI-Assistenten & Agentic Coding",
    beschreibung:
      "Grundbegriffe zu Sprachmodellen, Prompts und KI-Coding-Assistenten wie Claude Code oder Codex, die beim Programmieren aktiv mitarbeiten.",
    reihenfolge: 12,
  },
  {
    id: "kat-lokale-llms",
    titel: "Lokale LLMs betreiben",
    beschreibung:
      "Wie sich Sprachmodelle lokal auf dem eigenen Rechner statt in der Cloud betreiben lassen – Werkzeuge, Hardware-Anforderungen und Modellformate.",
    reihenfolge: 13,
  },
  {
    id: "kat-erp-systeme",
    titel: "ERP-Systeme verstehen & aufbauen",
    beschreibung:
      "Grundbegriffe von Unternehmenssoftware: Module, Stamm- und Bewegungsdaten, Schnittstellen, Berechtigungen und Auswertungen.",
    reihenfolge: 14,
  },
  {
    id: "kat-sicherheit-gute-praxis",
    titel: "Sicherheit & gute Praxis",
    beschreibung:
      "Grundlegende Sicherheitsprinzipien für den Entwicklungsalltag: Rechtevergabe, Backups, Verschlüsselung und sichere Standardeinstellungen.",
    reihenfolge: 15,
  },
  {
    id: "kat-instandhaltung-elektrotechnik",
    titel: "Instandhaltung & Elektrotechnik-Grundlagen",
    beschreibung:
      "Grundbegriffe zu Gerätprüfungen, Wartungsplänen und Elektrotechnik sowie zur digitalen Dokumentation und Automatisierung von Wartungsdaten.",
    reihenfolge: 16,
  },
  {
    id: "kat-schweissen-metallbau",
    titel: "Schweißen & Metallbau",
    beschreibung:
      "Grundbegriffe zu Schweißverfahren wie WIG und MAG, gängigen Werkstoffen im Tank- und Rohrleitungsbau sowie zur Werkstatttechnik.",
    reihenfolge: 17,
  },
];
