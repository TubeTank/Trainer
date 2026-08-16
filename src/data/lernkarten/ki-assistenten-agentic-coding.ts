import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-ki-assistenten-agentic-coding";

export const kiAssistentenAgenticCodingLernkarten: Lernkarte[] = [
  {
    id: "lk-llm",
    kategorieId: KATEGORIE_ID,
    begriff: "Large Language Model (LLM)",
    kurzerklaerung:
      "Ein Large Language Model ist ein KI-Modell, das auf riesigen Textmengen trainiert wurde und darauf spezialisiert ist, Sprache zu verstehen und zu erzeugen.",
    erklaerung:
      "Man kann sich ein LLM wie eine extrem belesene Person vorstellen, die unzählige Bücher, Foren und Code-Beispiele gelesen hat und daraus ein Gespür dafür entwickelt hat, welches Wort oder welcher Code-Baustein als Nächstes sinnvoll ist. Es „versteht“ nicht im menschlichen Sinne, sondern erkennt Muster und setzt sie sehr überzeugend fort. Modelle wie Claude oder GPT sind Beispiele für solche LLMs.",
    beispiel:
      "Wenn man Claude Code bittet, eine Funktion zu schreiben, nutzt im Hintergrund ein LLM sein trainiertes Wissen über Programmiermuster, um passenden Code vorzuschlagen.",
    wannVerwendet:
      "Taucht als Grundbegriff auf, sobald erklärt wird, welche Technologie hinter Tools wie Claude Code oder Codex steckt.",
    icon: "🧠",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-prompt", "lk-kontextfenster", "lk-halluzination"],
  },
  {
    id: "lk-prompt",
    kategorieId: KATEGORIE_ID,
    begriff: "Prompt",
    kurzerklaerung:
      "Ein Prompt ist die Eingabe – meist ein Text –, mit der man einem KI-Modell mitteilt, was es tun soll.",
    erklaerung:
      "Ein Prompt ist wie eine Auftragsbeschreibung, die man einem Kollegen gibt: Je klarer und konkreter man beschreibt, was man möchte, desto besser das Ergebnis. Bei KI-Coding-Assistenten ist der Prompt oft die Beschreibung eines Problems oder einer gewünschten Änderung im Code.",
    beispiel:
      "„Füge der Login-Seite eine Passwort-vergessen-Funktion hinzu und schreibe dazu einen Test“ ist ein typischer Prompt an Claude Code.",
    wannVerwendet:
      "Bei jeder einzelnen Anfrage an ein KI-Modell oder einen Coding-Assistenten – das ist die grundlegendste Interaktion überhaupt.",
    icon: "💬",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-llm", "lk-system-prompt", "lk-kontextfenster"],
  },
  {
    id: "lk-kontextfenster",
    kategorieId: KATEGORIE_ID,
    begriff: "Kontextfenster",
    kurzerklaerung:
      "Das Kontextfenster ist die maximale Menge an Text (Prompt, Code, bisherige Konversation), die ein KI-Modell gleichzeitig „im Blick“ haben kann.",
    erklaerung:
      "Man kann sich das Kontextfenster wie den Schreibtisch eines Menschen vorstellen: Nur was darauf liegt, kann gerade beachtet werden – alles andere liegt im Schrank und ist gerade nicht sichtbar. Ist das Kontextfenster voll, muss etwas „vom Tisch“, damit Neues Platz findet, und ältere Informationen können dabei verloren gehen.",
    beispiel:
      "Bei einem sehr großen Projekt kann es passieren, dass Claude Code sich nicht mehr an eine Datei erinnert, die ganz am Anfang der Konversation besprochen wurde, weil sie aus dem Kontextfenster gerutscht ist.",
    wannVerwendet:
      "Relevant, wenn Gespräche mit einem KI-Assistenten sehr lang werden oder sehr viel Code gleichzeitig betrachtet werden soll.",
    icon: "🪟",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-llm", "lk-prompt"],
  },
  {
    id: "lk-claude-code",
    kategorieId: KATEGORIE_ID,
    begriff: "Claude Code",
    kurzerklaerung:
      "Claude Code ist ein KI-Coding-Assistent von Anthropic, der direkt im Terminal läuft und selbstständig Dateien lesen, bearbeiten und Befehle ausführen kann.",
    erklaerung:
      "Claude Code ist wie ein Software-Entwickler, der neben einem am Schreibtisch sitzt, in den Projektordner schauen darf und auf Zuruf Änderungen vornimmt, statt nur Textvorschläge zu liefern. Anders als ein einfacher Chat kann es Werkzeuge nutzen, also zum Beispiel Dateien öffnen, Tests laufen lassen oder Git-Befehle ausführen.",
    beispiel:
      "Ein Nutzer bittet Claude Code, einen Fehler in der Anwendung zu finden, woraufhin es mehrere Dateien durchsucht, den Fehler lokalisiert und direkt einen Korrekturvorschlag einbaut.",
    wannVerwendet:
      "Immer dann, wenn direkt im eigenen Projektordner mit einem KI-Assistenten gearbeitet wird, statt Code nur in einem Chatfenster zu kopieren.",
    icon: "🤖",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-ki-agent", "lk-tool-use", "lk-codex"],
  },
  {
    id: "lk-codex",
    kategorieId: KATEGORIE_ID,
    begriff: "Codex",
    kurzerklaerung:
      "Codex ist ein KI-Coding-Assistent von OpenAI, der ähnlich wie Claude Code eigenständig im Projekt arbeiten und Code schreiben kann.",
    erklaerung:
      "Codex lässt sich mit einem anderen Werkzeugkasten für dieselbe Aufgabe vergleichen: Das grundsätzliche Ziel – ein KI-Modell, das selbstständig im Code arbeitet – ist dasselbe wie bei Claude Code, nur stammt es von einem anderen Hersteller und hat eigene Stärken und Eigenheiten. Für Einsteiger fühlen sich beide Werkzeuge in der täglichen Nutzung sehr ähnlich an.",
    beispiel:
      "Ein Entwickler nutzt Codex, um in einem bestehenden Projekt automatisch fehlende Testfälle für eine Funktion generieren zu lassen.",
    wannVerwendet:
      "Wenn KI-Coding-Assistenten verglichen werden oder jemand bereits Erfahrung mit einem Anbieter hat und die Konzepte auf einen anderen übertragen möchte.",
    icon: "🛠️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-claude-code", "lk-ki-agent"],
  },
  {
    id: "lk-ki-agent",
    kategorieId: KATEGORIE_ID,
    begriff: "KI-Agent",
    kurzerklaerung:
      "Ein KI-Agent ist ein KI-System, das nicht nur eine Antwort formuliert, sondern selbstständig mehrere Schritte plant und Aktionen ausführt, um ein Ziel zu erreichen.",
    erklaerung:
      "Ein KI-Agent ist wie ein Praktikant, dem man eine Aufgabe gibt, statt nur eine Frage zu stellen: Er überlegt sich selbst die einzelnen Schritte, probiert etwas aus, schaut sich das Ergebnis an und passt sein Vorgehen bei Bedarf an. Ein einfacher Chatbot antwortet nur einmal, ein Agent arbeitet in einer Schleife aus Denken, Handeln und Prüfen.",
    beispiel:
      "Claude Code agiert als Agent, wenn es zur Behebung eines Bugs zunächst die Fehlermeldung analysiert, dann relevante Dateien durchsucht, eine Änderung vornimmt und anschließend die Tests laufen lässt, um das Ergebnis zu prüfen.",
    wannVerwendet:
      "Wenn beschrieben wird, wie moderne KI-Coding-Tools über einfache Textantworten hinaus eigenständig komplexere Aufgaben abarbeiten.",
    icon: "🕹️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-claude-code", "lk-tool-use", "lk-codex"],
  },
  {
    id: "lk-tool-use",
    kategorieId: KATEGORIE_ID,
    begriff: "Tool-Use / Function Calling",
    kurzerklaerung:
      "Tool-Use bezeichnet die Fähigkeit eines KI-Modells, während einer Konversation gezielt externe Werkzeuge wie Dateizugriff, Terminal-Befehle oder Websuche aufzurufen.",
    erklaerung:
      "Man kann sich das wie einen Handwerker vorstellen, der nicht nur redet, sondern auch gezielt zum passenden Werkzeug greift – mal zum Schraubenzieher, mal zum Messgerät – statt alles nur zu beschreiben. Das KI-Modell entscheidet dabei selbst, welches Werkzeug gerade gebraucht wird, ruft es auf und nutzt das Ergebnis für die nächste Antwort.",
    beispiel:
      "Wenn Claude Code den Befehl zum Ausführen der Tests aufruft, um zu prüfen, ob eine Codeänderung funktioniert, ist das ein klassisches Beispiel für Tool-Use.",
    wannVerwendet:
      "Immer dann, wenn erklärt wird, wie ein KI-Assistent über reines Texterzeugen hinaus tatsächlich etwas in der realen Umgebung bewirkt.",
    icon: "🔧",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-ki-agent", "lk-claude-code"],
  },
  {
    id: "lk-halluzination",
    kategorieId: KATEGORIE_ID,
    begriff: "Halluzination (bei KI-Modellen)",
    kurzerklaerung:
      "Eine Halluzination ist eine von einem KI-Modell erzeugte Aussage, die überzeugend klingt, aber sachlich falsch oder frei erfunden ist.",
    erklaerung:
      "Man kann sich das wie jemanden vorstellen, der sich sehr sicher und flüssig ausdrückt, sich dabei aber schlicht irrt oder etwas erfindet, ohne es zu merken. Ein LLM erzeugt Text auf Basis von Wahrscheinlichkeiten und nicht auf Basis geprüften Wissens, weshalb es gelegentlich Funktionen, Bibliotheken oder Fakten nennt, die es so gar nicht gibt.",
    beispiel:
      "Ein KI-Assistent schlägt den Namen einer Programmbibliotheks-Funktion vor, die plausibel klingt, in der tatsächlich verwendeten Bibliothek aber gar nicht existiert.",
    wannVerwendet:
      "Relevant, sobald erklärt wird, warum man von KI-Assistenten vorgeschlagenen Code oder Fakten immer noch selbst prüfen sollte.",
    icon: "🌀",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-llm"],
  },
  {
    id: "lk-system-prompt",
    kategorieId: KATEGORIE_ID,
    begriff: "System-Prompt",
    kurzerklaerung:
      "Der System-Prompt ist eine vorab festgelegte Anweisung, die dem KI-Modell grundlegende Regeln und seine Rolle vorgibt, bevor der eigentliche Nutzer-Prompt dazukommt.",
    erklaerung:
      "Der System-Prompt ist wie die Stellenbeschreibung und Hausordnung, die ein neuer Mitarbeiter am ersten Arbeitstag bekommt, bevor überhaupt die erste konkrete Aufgabe kommt: Er legt fest, wie sich das Modell grundsätzlich verhalten soll. Bei Coding-Assistenten steckt darin zum Beispiel, wie vorsichtig das Modell mit Änderungen umgehen oder wie es Rückfragen stellen soll.",
    beispiel:
      "Bei Claude Code legt ein System-Prompt im Hintergrund unter anderem fest, dass Änderungen an Dateien nachvollziehbar dargestellt werden sollen, bevor sie übernommen werden.",
    wannVerwendet:
      "Kommt zur Sprache, wenn erklärt wird, warum sich derselbe KI-Assistent in unterschiedlichen Tools oder Kontexten leicht anders verhält.",
    icon: "📋",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-prompt", "lk-llm"],
  },
];
