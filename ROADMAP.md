# Trainer – Themen-Roadmap

Dies ist der rekonstruierte Themenplan für den Trainer (Ersatz für die verlorene
Ausgangs-/Bootstrap-Datei). Er listet alle geplanten Lernkategorien in der
Reihenfolge, in der sie umgesetzt werden sollen. Jede Kategorie wird in einem
eigenen, abgeschlossenen Implementierungsschritt angelegt – analog zu
Schritt 2 (`kat-git-grundlagen`): zuerst Kategorie + ca. 8–10 hochwertige
Lernkarten mit Metapher, Praxisbeispiel und Einsatzkontext, dann Validierung.

Die Lerninhalte bleiben Single Source of Truth für spätere Nutzung in
Karteikarten, Sprachausgabe und Quiz (siehe `src/data/`).

Das Trainer-Projekt bleibt unabhängig vom TubeTank-ERP-Code. Themen wie
"ERP-Systeme" oder "Instandhaltung" sind reine Lerninhalte, keine Integration
mit dem echten TubeTank-System.

## Status-Legende

- ✅ fertig
- ⏳ geplant, noch nicht umgesetzt

## Kategorien

| # | ID | Kategorie | Kernthemen | Status |
|---|----|-----------|------------|--------|
| 1 | `kat-git-grundlagen` | Git-Grundlagen | Repository, Commit, Branch, Push/Pull/Fetch, Clone, Working Tree, Staging Area, .gitignore | ✅ |
| 2 | `kat-github-zusammenarbeit` | GitHub & Zusammenarbeit | Remote, Pull Request, Issue, Fork, Actions/CI, Code Review | ⏳ |
| 3 | `kat-kommandozeile-powershell` | Kommandozeile & PowerShell | Terminal-Basics, PowerShell vs. Bash, Pfade, Umgebungsvariablen, häufige Befehle | ⏳ |
| 4 | `kat-laufzeitumgebungen-sprachen` | Laufzeitumgebungen & Sprachen | Node.js, Python, Compiler vs. Interpreter, Package Manager (npm/pip) | ⏳ |
| 5 | `kat-libraries-abhaengigkeiten` | Libraries & Abhängigkeiten | package.json, npm install, SemVer, Lockfiles, Dependency-Konflikte | ⏳ |
| 6 | `kat-entwicklungswerkzeuge` | Entwicklungswerkzeuge | VS Code, Extensions, Linter, Formatter, Debugger | ⏳ |
| 7 | `kat-web-grundlagen` | Web-Grundlagen | HTML/CSS/JS, Client vs. Server, HTTP, REST, JSON, APIs | ⏳ |
| 8 | `kat-build-tools-bundler` | Build-Tools & Bundler | Vite, TypeScript-Compiler, Bundling, Hot Reload | ⏳ |
| 9 | `kat-server-hosting` | Server & Hosting | Was ist ein Server, localhost, Ports, Deployment, Hosting-Anbieter | ⏳ |
| 10 | `kat-datenbanken-grundlagen` | Datenbanken-Grundlagen | Relational vs. NoSQL, SQL-Basics, ORM, Migrationen | ⏳ |
| 11 | `kat-cloud-devops-grundlagen` | Cloud & DevOps-Grundlagen | CI/CD, Container/Docker, Environments, Secrets-Management | ⏳ |
| 12 | `kat-ki-assistenten-agentic-coding` | KI-Assistenten & Agentic Coding | Claude Code, Codex, Prompting, Kontextfenster, Agenten/Tools | ⏳ |
| 13 | `kat-lokale-llms` | Lokale LLMs betreiben | Ollama/LM Studio, Modellwahl, Hardware-Anforderungen, Quantisierung | ⏳ |
| 14 | `kat-erp-systeme` | ERP-Systeme verstehen & aufbauen | Was ist ein ERP, Module, Datenmodell, Architekturentscheidungen | ⏳ |
| 15 | `kat-sicherheit-gute-praxis` | Sicherheit & gute Praxis | Secrets, Berechtigungen, Backups, sichere Defaults | ⏳ |
| 16 | `kat-instandhaltung-elektrotechnik` | Instandhaltung & Elektrotechnik-Grundlagen | Gerätprüfungen, Wartungspläne/-abläufe, Elektrotechnik-Grundbegriffe, Dokumentation & Automatisierung von Wartungsdaten im System | ⏳ |
| 17 | `kat-schweissen-metallbau` | Schweißen & Metallbau | Schweißprozesse (v. a. WIG, MAG), Werkstoffe (Edelstahl, Kupfernickel/CuNi, Aluminium, Baustahl u. a.), Werkstatttechnik (Pressen, Bandsägen) | ⏳ |

## Hinweise zu Kategorie 16 & 17

- Zielgruppe u. a.: Junior-Softwareentwickler, der parallel Instandhaltung und
  Elektrotechnik lernt, um künftig Geräteprüfungen und Wartungen zu begleiten
  und die Ergebnisse im System zu erfassen – inklusive möglichst weitgehender
  Automatisierung der Datenerfassung.
- Kategorie 17 deckt Schweißtechnik und Metallbau/Werkstatttechnik gemeinsam
  ab (eine breite Kategorie, kann bei Bedarf später aufgeteilt werden).

## Arbeitsweise

Pro Implementierungsschritt wird jeweils **eine** Kategorie aus der Liste
umgesetzt (Kategorie-Eintrag + Lernkarten + Validierungslauf), bevor die
nächste begonnen wird. Reihenfolge und Auswahl können jederzeit angepasst
werden – dieses Dokument ist die aktuelle Absprache, kein starres Gesetz.
