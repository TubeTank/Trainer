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
    uebersetzungen: {
      en: {
        begriff: "Large Language Model (LLM)",
        kurzerklaerung:
          "A Large Language Model is an AI model trained on huge amounts of text that specializes in understanding and generating language.",
        erklaerung:
          "Think of an LLM as an extremely well-read person who has absorbed countless books, forums, and code examples, and has developed a feel for which word or code snippet makes sense next. It doesn't \"understand\" in the human sense, but recognizes patterns and continues them very convincingly. Models like Claude or GPT are examples of such LLMs.",
        beispiel:
          "When you ask Claude Code to write a function, an LLM works in the background, drawing on its trained knowledge of programming patterns to suggest fitting code.",
        wannVerwendet:
          "Comes up as a foundational term whenever explaining what technology powers tools like Claude Code or Codex.",
      },
      es: {
        begriff: "Modelo de Lenguaje Grande (LLM)",
        kurzerklaerung:
          "Un Modelo de Lenguaje Grande es un modelo de IA entrenado con enormes cantidades de texto, especializado en entender y generar lenguaje.",
        erklaerung:
          "Puedes imaginar un LLM como una persona extremadamente leída que ha devorado incontables libros, foros y ejemplos de código, y que ha desarrollado un instinto para saber qué palabra o fragmento de código tiene sentido a continuación. No \"entiende\" en el sentido humano, sino que reconoce patrones y los continúa de forma muy convincente. Modelos como Claude o GPT son ejemplos de este tipo de LLM.",
        beispiel:
          "Cuando le pides a Claude Code que escriba una función, en segundo plano un LLM utiliza su conocimiento entrenado sobre patrones de programación para proponer código adecuado.",
        wannVerwendet:
          "Aparece como concepto base en cuanto se explica qué tecnología hay detrás de herramientas como Claude Code o Codex.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Prompt",
        kurzerklaerung:
          "A prompt is the input — usually text — that tells an AI model what to do.",
        erklaerung:
          "A prompt is like a work order you'd give a colleague: the clearer and more specific you describe what you want, the better the result. With AI coding assistants, the prompt is often the description of a problem or a desired change to the code.",
        beispiel:
          "\"Add a forgot-password feature to the login page and write a test for it\" is a typical prompt for Claude Code.",
        wannVerwendet:
          "In every single request to an AI model or coding assistant — this is the most basic interaction there is.",
      },
      es: {
        begriff: "Prompt",
        kurzerklaerung:
          "Un prompt es la entrada, normalmente un texto, con la que le indicas a un modelo de IA lo que debe hacer.",
        erklaerung:
          "Un prompt es como el encargo que le das a un compañero de trabajo: cuanto más clara y concreta sea la descripción de lo que quieres, mejor será el resultado. En los asistentes de código con IA, el prompt suele ser la descripción de un problema o de un cambio deseado en el código.",
        beispiel:
          "\"Añade una función de contraseña olvidada a la página de inicio de sesión y escribe una prueba para ello\" es un prompt típico para Claude Code.",
        wannVerwendet:
          "En cada solicitud individual a un modelo de IA o a un asistente de código: es la interacción más básica que existe.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Context Window",
        kurzerklaerung:
          "The context window is the maximum amount of text (prompt, code, previous conversation) an AI model can keep \"in view\" at the same time.",
        erklaerung:
          "You can picture the context window like a person's desk: only what's lying on it can be attended to right now — everything else sits in a cabinet, out of sight. Once the context window is full, something has to be cleared off the desk to make room for new things, and older information can get lost in the process.",
        beispiel:
          "In a very large project, Claude Code may no longer remember a file discussed right at the start of the conversation, because it has slipped out of the context window.",
        wannVerwendet:
          "Relevant when conversations with an AI assistant get very long, or when a lot of code needs to be considered at once.",
      },
      es: {
        begriff: "Ventana de contexto",
        kurzerklaerung:
          "La ventana de contexto es la cantidad máxima de texto (prompt, código, conversación previa) que un modelo de IA puede tener \"a la vista\" al mismo tiempo.",
        erklaerung:
          "Puedes imaginar la ventana de contexto como el escritorio de una persona: solo lo que está encima puede tenerse en cuenta en ese momento; todo lo demás está guardado en el armario y no es visible. Cuando la ventana de contexto se llena, hay que retirar algo del escritorio para hacer sitio a lo nuevo, y en el proceso se puede perder información anterior.",
        beispiel:
          "En un proyecto muy grande puede ocurrir que Claude Code ya no recuerde un archivo comentado al principio de la conversación, porque se ha salido de la ventana de contexto.",
        wannVerwendet:
          "Relevante cuando las conversaciones con un asistente de IA se alargan mucho o cuando hay que tener en cuenta mucho código a la vez.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Claude Code",
        kurzerklaerung:
          "Claude Code is an AI coding assistant from Anthropic that runs directly in the terminal and can independently read files, edit them, and run commands.",
        erklaerung:
          "Claude Code is like a software developer sitting next to you at your desk, allowed to look into the project folder and make changes on request, rather than just offering text suggestions. Unlike a simple chat, it can use tools — for example opening files, running tests, or executing Git commands.",
        beispiel:
          "A user asks Claude Code to find a bug in the application, and it searches through several files, locates the bug, and directly implements a fix.",
        wannVerwendet:
          "Whenever you work directly in your own project folder with an AI assistant, instead of just copying code in a chat window.",
      },
      es: {
        begriff: "Claude Code",
        kurzerklaerung:
          "Claude Code es un asistente de código con IA de Anthropic que se ejecuta directamente en la terminal y puede leer archivos, editarlos y ejecutar comandos por sí mismo.",
        erklaerung:
          "Claude Code es como un desarrollador de software sentado junto a ti en el escritorio, con permiso para mirar dentro de la carpeta del proyecto y hacer cambios cuando se le pide, en lugar de limitarse a ofrecer sugerencias de texto. A diferencia de un simple chat, puede usar herramientas, por ejemplo abrir archivos, ejecutar pruebas o lanzar comandos de Git.",
        beispiel:
          "Un usuario le pide a Claude Code que encuentre un error en la aplicación, y este recorre varios archivos, localiza el error e incorpora directamente una propuesta de corrección.",
        wannVerwendet:
          "Siempre que se trabaje directamente en la propia carpeta del proyecto con un asistente de IA, en lugar de solo copiar código en una ventana de chat.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Codex",
        kurzerklaerung:
          "Codex is an AI coding assistant from OpenAI that, similar to Claude Code, can work independently within a project and write code.",
        erklaerung:
          "Codex can be compared to a different toolbox for the same job: the underlying goal — an AI model that works independently on code — is the same as with Claude Code, it just comes from a different maker and has its own strengths and quirks. For beginners, both tools feel very similar in day-to-day use.",
        beispiel:
          "A developer uses Codex to automatically generate missing test cases for a function in an existing project.",
        wannVerwendet:
          "When comparing AI coding assistants, or when someone already has experience with one provider and wants to transfer the concepts to another.",
      },
      es: {
        begriff: "Codex",
        kurzerklaerung:
          "Codex es un asistente de código con IA de OpenAI que, de forma parecida a Claude Code, puede trabajar de forma autónoma en un proyecto y escribir código.",
        erklaerung:
          "A Codex se le puede comparar con otra caja de herramientas para la misma tarea: el objetivo de fondo (un modelo de IA que trabaja de forma autónoma en el código) es el mismo que en Claude Code, solo que viene de otro fabricante y tiene sus propias fortalezas y particularidades. Para quienes empiezan, ambas herramientas se sienten muy similares en el uso diario.",
        beispiel:
          "Un desarrollador usa Codex para generar automáticamente los casos de prueba que faltan para una función en un proyecto ya existente.",
        wannVerwendet:
          "Cuando se comparan asistentes de código con IA, o cuando alguien ya tiene experiencia con un proveedor y quiere trasladar los conceptos a otro.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "AI Agent",
        kurzerklaerung:
          "An AI agent is an AI system that doesn't just formulate a single answer, but independently plans multiple steps and carries out actions to reach a goal.",
        erklaerung:
          "An AI agent is like an intern you give a task to, rather than just asking a question: it works out the individual steps itself, tries something, looks at the result, and adjusts its approach if needed. A simple chatbot only answers once; an agent works in a loop of thinking, acting, and checking.",
        beispiel:
          "Claude Code acts as an agent when, to fix a bug, it first analyzes the error message, then searches through relevant files, makes a change, and finally runs the tests to check the result.",
        wannVerwendet:
          "When describing how modern AI coding tools go beyond simple text answers to independently work through more complex tasks.",
      },
      es: {
        begriff: "Agente de IA",
        kurzerklaerung:
          "Un agente de IA es un sistema de IA que no se limita a formular una respuesta, sino que planifica varios pasos por sí mismo y ejecuta acciones para alcanzar un objetivo.",
        erklaerung:
          "Un agente de IA es como un becario al que le encargas una tarea en lugar de solo hacerle una pregunta: piensa por sí mismo los distintos pasos, prueba algo, observa el resultado y ajusta su forma de actuar si hace falta. Un chatbot sencillo solo responde una vez; un agente trabaja en un bucle de pensar, actuar y comprobar.",
        beispiel:
          "Claude Code actúa como agente cuando, para solucionar un error, primero analiza el mensaje de error, luego busca en los archivos relevantes, hace un cambio y por último ejecuta las pruebas para comprobar el resultado.",
        wannVerwendet:
          "Cuando se explica cómo las herramientas modernas de código con IA van más allá de simples respuestas de texto y resuelven tareas más complejas de forma autónoma.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Tool Use / Function Calling",
        kurzerklaerung:
          "Tool use refers to an AI model's ability to call on external tools during a conversation, such as file access, terminal commands, or web search, in a targeted way.",
        erklaerung:
          "Think of a craftsman who doesn't just talk, but reaches for the right tool as needed — sometimes a screwdriver, sometimes a measuring device — instead of only describing things. The AI model itself decides which tool is needed at the moment, calls it, and uses the result for its next answer.",
        beispiel:
          "When Claude Code runs the command to execute the tests in order to check whether a code change works, that's a classic example of tool use.",
        wannVerwendet:
          "Whenever explaining how an AI assistant actually affects the real environment, beyond just generating text.",
      },
      es: {
        begriff: "Tool Use / Function Calling",
        kurzerklaerung:
          "Tool Use designa la capacidad de un modelo de IA de recurrir de forma específica a herramientas externas durante una conversación, como el acceso a archivos, comandos de terminal o búsquedas en la web.",
        erklaerung:
          "Se puede imaginar como un artesano que no solo habla, sino que además recurre a la herramienta adecuada en cada momento (a veces un destornillador, a veces un aparato de medición) en lugar de limitarse a describir las cosas. El modelo de IA decide por sí mismo qué herramienta necesita en ese momento, la utiliza y aprovecha el resultado para su siguiente respuesta.",
        beispiel:
          "Cuando Claude Code ejecuta el comando para lanzar las pruebas y así comprobar si un cambio en el código funciona, es un ejemplo clásico de Tool Use.",
        wannVerwendet:
          "Siempre que se explica cómo un asistente de IA llega a producir efectos reales en el entorno, más allá de generar simplemente texto.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Hallucination (in AI models)",
        kurzerklaerung:
          "A hallucination is a statement generated by an AI model that sounds convincing but is factually wrong or entirely made up.",
        erklaerung:
          "Picture someone who speaks very confidently and fluently, yet is simply mistaken or makes something up without realizing it. An LLM generates text based on probabilities rather than verified knowledge, which is why it occasionally names functions, libraries, or facts that don't actually exist.",
        beispiel:
          "An AI assistant suggests the name of a library function that sounds plausible, but doesn't actually exist in the library actually being used.",
        wannVerwendet:
          "Relevant as soon as you explain why code or facts suggested by AI assistants should still always be checked yourself.",
      },
      es: {
        begriff: "Alucinación (en modelos de IA)",
        kurzerklaerung:
          "Una alucinación es una afirmación generada por un modelo de IA que suena convincente, pero que es objetivamente falsa o directamente inventada.",
        erklaerung:
          "Imagina a alguien que se expresa con mucha seguridad y fluidez, pero que simplemente se equivoca o se inventa algo sin darse cuenta. Un LLM genera texto basándose en probabilidades y no en conocimiento verificado, por lo que en ocasiones menciona funciones, bibliotecas o datos que en realidad no existen.",
        beispiel:
          "Un asistente de IA propone el nombre de una función de una biblioteca que suena plausible, pero que en realidad no existe en la biblioteca que se está usando.",
        wannVerwendet:
          "Relevante en cuanto se explica por qué el código o los datos que sugieren los asistentes de IA siempre se deben seguir comprobando uno mismo.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "System Prompt",
        kurzerklaerung:
          "The system prompt is a predefined instruction that gives the AI model its basic rules and role before the actual user prompt is added.",
        erklaerung:
          "The system prompt is like the job description and house rules a new employee receives on their first day, before the first concrete task even arrives: it establishes how the model should behave in general. In coding assistants, it covers things like how cautiously the model should handle changes or how it should ask clarifying questions.",
        beispiel:
          "In Claude Code, a system prompt sets, among other things, that changes to files should be shown transparently before they are applied.",
        wannVerwendet:
          "Comes up when explaining why the same AI assistant behaves slightly differently across different tools or contexts.",
      },
      es: {
        begriff: "Prompt de sistema",
        kurzerklaerung:
          "El prompt de sistema es una instrucción predefinida que establece las reglas básicas y el papel del modelo de IA antes de que llegue el prompt propiamente dicho del usuario.",
        erklaerung:
          "El prompt de sistema es como la descripción del puesto y el reglamento interno que recibe un nuevo empleado el primer día de trabajo, antes incluso de la primera tarea concreta: define cómo debe comportarse el modelo en general. En los asistentes de código, esto incluye, por ejemplo, con qué cautela debe manejar los cambios el modelo o cómo debe hacer preguntas de aclaración.",
        beispiel:
          "En Claude Code, un prompt de sistema establece, entre otras cosas, que los cambios en los archivos deben mostrarse de forma transparente antes de aplicarse.",
        wannVerwendet:
          "Sale a relucir cuando se explica por qué el mismo asistente de IA se comporta de forma ligeramente distinta en diferentes herramientas o contextos.",
      },
    },
  },
  {
    id: "lk-cursor",
    kategorieId: KATEGORIE_ID,
    begriff: "Cursor",
    kurzerklaerung:
      "Cursor ist ein eigenständiger Code-Editor auf Basis von VS Code, bei dem KI-Unterstützung von Grund auf integriert ist statt nachträglich als Erweiterung ergänzt zu werden.",
    erklaerung:
      "Man kann sich Cursor wie ein Auto vorstellen, bei dem der Autopilot fest verbaut ist, statt nachträglich als Zubehör eingebaut zu werden: Autovervollständigung, Chat und automatisierte Mehrdateien-Bearbeitung sind direkt Teil des Editors, nicht bloß eine Erweiterung. Cursor lässt sich dabei mit verschiedenen zugrunde liegenden Sprachmodellen betreiben, etwa von Anthropic oder OpenAI.",
    beispiel:
      "Ein Entwickler wechselt von einem klassischen Editor zu Cursor, weil dort Autovervollständigung, Chat und automatisierte Codeänderungen direkt zusammenarbeiten, statt über mehrere separate Werkzeuge verteilt zu sein.",
    wannVerwendet:
      "Wenn KI-Unterstützung nicht nur gelegentlich als Zusatzwerkzeug, sondern durchgehend im gesamten Editier-Arbeitsablauf genutzt werden soll.",
    icon: "🖱️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-claude-code", "lk-codex", "lk-llm"],
    uebersetzungen: {
      en: {
        begriff: "Cursor",
        kurzerklaerung:
          "Cursor is a standalone code editor built on VS Code, with AI support built in from the ground up instead of bolted on as an extension.",
        erklaerung:
          "Think of Cursor like a car with the autopilot built in at the factory instead of added later as an accessory: autocomplete, chat, and automated multi-file editing are all part of the editor itself, not just an add-on. Cursor can run on different underlying language models, for example from Anthropic or OpenAI.",
        beispiel:
          "A developer switches from a classic editor to Cursor because autocomplete, chat, and automated code changes work together directly there, instead of being spread across several separate tools.",
        wannVerwendet:
          "When AI support should be woven through the entire editing workflow, not just used occasionally as a side tool.",
      },
      es: {
        begriff: "Cursor",
        kurzerklaerung:
          "Cursor es un editor de código independiente basado en VS Code, en el que el soporte de IA está integrado desde el principio en lugar de añadirse después como una extensión.",
        erklaerung:
          "Puedes imaginar Cursor como un coche con el piloto automático instalado de fábrica en lugar de añadido después como accesorio: el autocompletado, el chat y la edición automatizada de varios archivos forman parte del propio editor, no son un simple complemento. Cursor puede funcionar con distintos modelos de lenguaje subyacentes, por ejemplo de Anthropic u OpenAI.",
        beispiel:
          "Un desarrollador cambia de un editor clásico a Cursor porque allí el autocompletado, el chat y los cambios de código automatizados trabajan juntos directamente, en lugar de estar repartidos en varias herramientas separadas.",
        wannVerwendet:
          "Cuando el soporte de IA debe estar presente en todo el flujo de trabajo de edición, y no usarse solo ocasionalmente como herramienta adicional.",
      },
    },
  },
  {
    id: "lk-cursor-tab",
    kategorieId: KATEGORIE_ID,
    begriff: "Tab (Cursor-Autovervollständigung)",
    kurzerklaerung:
      "Tab ist Cursors Autovervollständigungsfunktion, die oft mehrere Zeilen oder ganze Änderungen vorschlägt, statt nur einzelne Wörter zu ergänzen.",
    erklaerung:
      "Man kann sich Tab wie einen aufmerksamen Assistenten vorstellen, der nicht nur das aktuelle Wort zu Ende schreibt, sondern schon erahnt, was als Nächstes im gesamten Absatz folgen soll – inklusive naheliegender Änderungen an anderen Stellen der Datei. Mit der Tab-Taste wird der Vorschlag einfach übernommen.",
    beispiel:
      "Nachdem eine Funktion umbenannt wurde, schlägt Tab automatisch vor, auch alle zugehörigen Aufrufe an anderer Stelle in derselben Datei entsprechend anzupassen.",
    wannVerwendet:
      "Beim laufenden Schreiben von Code, wenn sich wiederholende oder naheliegende Änderungen schnell übernehmen lassen sollen.",
    befehl: "Tab",
    icon: "⇥",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-cursor"],
    uebersetzungen: {
      en: {
        begriff: "Tab (Cursor Autocomplete)",
        kurzerklaerung:
          "Tab is Cursor's autocomplete feature, which often suggests multiple lines or whole changes instead of just completing single words.",
        erklaerung:
          "Think of Tab as an attentive assistant who doesn't just finish the current word, but already anticipates what should come next in the whole paragraph — including related changes elsewhere in the file. Pressing Tab simply accepts the suggestion.",
        beispiel:
          "After a function is renamed, Tab automatically suggests updating all related calls elsewhere in the same file accordingly.",
        wannVerwendet:
          "While actively writing code, when repetitive or closely related changes should be accepted quickly.",
      },
      es: {
        begriff: "Tab (autocompletado de Cursor)",
        kurzerklaerung:
          "Tab es la función de autocompletado de Cursor, que a menudo sugiere varias líneas o cambios completos en lugar de solo terminar palabras sueltas.",
        erklaerung:
          "Puedes imaginar Tab como un asistente atento que no solo termina la palabra actual, sino que ya intuye lo que vendrá después en todo el párrafo, incluidos cambios relacionados en otras partes del archivo. Con la tecla Tab simplemente se acepta la sugerencia.",
        beispiel:
          "Después de renombrar una función, Tab sugiere automáticamente actualizar también todas las llamadas relacionadas en otras partes del mismo archivo.",
        wannVerwendet:
          "Mientras se escribe código, cuando se quieren aceptar rápidamente cambios repetitivos o muy relacionados entre sí.",
      },
    },
  },
  {
    id: "lk-cursor-cmd-k",
    kategorieId: KATEGORIE_ID,
    begriff: "Cmd+K (Inline Edit)",
    kurzerklaerung:
      "Cmd+K öffnet in Cursor ein Eingabefeld, mit dem sich markierter Code per Textanweisung gezielt umschreiben lässt, ohne den Chat zu verlassen.",
    erklaerung:
      "Man kann sich Cmd+K wie einen kurzen Zuruf an einen Kollegen vorstellen, der genau die markierte Stelle überarbeitet, statt gleich das ganze Dokument neu zu schreiben. Statt manuell zu tippen, beschreibt man die gewünschte Änderung in Worten und bekommt einen konkreten Änderungsvorschlag (Diff) zum Bestätigen.",
    beispiel:
      "Ein Entwickler markiert eine Funktion, drückt Cmd+K und schreibt „Fehlerbehandlung ergänzen“ – Cursor schlägt daraufhin die passende Änderung direkt an dieser Stelle vor.",
    wannVerwendet:
      "Bei gezielten, lokal begrenzten Änderungen an einer bestimmten Code-Stelle, ohne eine längere Chat-Unterhaltung zu beginnen.",
    befehl: "Cmd+K / Ctrl+K",
    icon: "⌨️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-cursor", "lk-prompt"],
    uebersetzungen: {
      en: {
        begriff: "Cmd+K (Inline Edit)",
        kurzerklaerung:
          "Cmd+K opens an input field in Cursor that lets you rewrite selected code with a text instruction, without leaving for the chat.",
        erklaerung:
          "Think of Cmd+K as a quick word to a colleague who reworks exactly the highlighted spot instead of rewriting the whole document. Instead of typing manually, you describe the desired change in words and get a concrete diff to confirm.",
        beispiel:
          'A developer selects a function, presses Cmd+K, and types "add error handling" – Cursor then suggests the matching change right at that spot.',
        wannVerwendet:
          "For targeted, locally scoped changes to a specific piece of code, without starting a longer chat conversation.",
      },
      es: {
        begriff: "Cmd+K (edición en línea)",
        kurzerklaerung:
          "Cmd+K abre en Cursor un campo de entrada con el que se puede reescribir el código seleccionado mediante una instrucción de texto, sin salir al chat.",
        erklaerung:
          "Puedes imaginar Cmd+K como pedirle algo rápido a un compañero, que retoca exactamente la parte marcada en lugar de reescribir todo el documento. En vez de escribir manualmente, describes el cambio deseado con palabras y obtienes una propuesta de cambio (diff) concreta para confirmar.",
        beispiel:
          "Un desarrollador selecciona una función, pulsa Cmd+K y escribe «añadir manejo de errores»; Cursor propone entonces el cambio correspondiente justo en ese punto.",
        wannVerwendet:
          "Para cambios puntuales y localizados en un punto concreto del código, sin iniciar una conversación de chat más larga.",
      },
    },
  },
  {
    id: "lk-cursor-agent-modus",
    kategorieId: KATEGORIE_ID,
    begriff: "Composer / Agent-Modus",
    kurzerklaerung:
      "Composer bzw. der Agent-Modus lässt Cursor selbstständig zusammenhängende Änderungen über mehrere Dateien hinweg planen und umsetzen.",
    erklaerung:
      "Man kann sich das wie die Beauftragung eines erfahrenen Kollegen vorstellen, der eine ganze Aufgabe eigenständig übernimmt: Statt jede einzelne Datei selbst zu bearbeiten, beschreibt man das gewünschte Ergebnis, und der Agent plant die nötigen Schritte, ändert mehrere Dateien und kann Zwischenergebnisse sogar selbst testen.",
    beispiel:
      "Eine Entwicklerin beschreibt „Füge eine Suchfunktion mit passendem Test hinzu“, und der Agent-Modus erstellt daraufhin selbstständig die nötigen Änderungen in mehreren Dateien des Projekts.",
    wannVerwendet:
      "Bei größeren, zusammenhängenden Aufgaben, die mehrere Dateien betreffen und nicht mit einer einzelnen, punktuellen Änderung erledigt sind.",
    icon: "🤖",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-cursor", "lk-ki-agent", "lk-tool-use"],
    uebersetzungen: {
      en: {
        begriff: "Composer / Agent Mode",
        kurzerklaerung:
          "Composer, or agent mode, lets Cursor independently plan and carry out related changes across multiple files.",
        erklaerung:
          "Think of it like handing a whole task to an experienced colleague: instead of editing every file yourself, you describe the desired outcome, and the agent plans the necessary steps, changes multiple files, and can even test intermediate results itself.",
        beispiel:
          'A developer describes "add a search feature with a matching test," and agent mode then independently makes the necessary changes across several files in the project.',
        wannVerwendet:
          "For larger, interconnected tasks spanning multiple files that go beyond a single, targeted change.",
      },
      es: {
        begriff: "Composer / Modo agente",
        kurzerklaerung:
          "Composer, o el modo agente, permite que Cursor planifique y lleve a cabo por su cuenta cambios relacionados en varios archivos.",
        erklaerung:
          "Puedes imaginarlo como encargarle toda una tarea a un compañero con experiencia: en lugar de editar tú mismo cada archivo, describes el resultado deseado, y el agente planifica los pasos necesarios, modifica varios archivos e incluso puede probar por sí mismo los resultados intermedios.",
        beispiel:
          "Una desarrolladora describe «añade una función de búsqueda con su prueba correspondiente», y el modo agente realiza entonces por sí solo los cambios necesarios en varios archivos del proyecto.",
        wannVerwendet:
          "Para tareas más grandes y relacionadas entre sí que afectan a varios archivos y van más allá de un cambio puntual.",
      },
    },
  },
  {
    id: "lk-cursor-chat",
    kategorieId: KATEGORIE_ID,
    begriff: "Chat (in Cursor)",
    kurzerklaerung:
      "Der Chat in Cursor ist ein Gesprächsfenster im Editor, über das Fragen zum Code gestellt oder Erklärungen angefordert werden können, ohne den Editor zu verlassen.",
    erklaerung:
      "Man kann sich den Chat wie einen erfahrenen Kollegen im Nebenraum vorstellen, den man jederzeit kurz etwas fragen kann, ohne den eigenen Schreibtisch zu verlassen. Der Chat kennt dabei automatisch den Kontext des geöffneten Projekts und kann gezielt auf einzelne Dateien oder Codestellen verweisen.",
    beispiel:
      "Ein Entwickler fragt im Chat „Warum schlägt dieser Test fehl?“ und bekommt eine Erklärung, die sich direkt auf den betroffenen Code im Projekt bezieht.",
    wannVerwendet:
      "Bei Verständnisfragen zum bestehenden Code oder wenn ein Vorgehen erst besprochen werden soll, bevor eine Änderung vorgenommen wird.",
    icon: "💬",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-cursor", "lk-prompt"],
    uebersetzungen: {
      en: {
        begriff: "Chat (in Cursor)",
        kurzerklaerung:
          "Chat in Cursor is a conversation panel in the editor for asking questions about the code or requesting explanations, without leaving the editor.",
        erklaerung:
          "Think of chat as an experienced colleague in the next room you can quickly ask something without leaving your own desk. The chat automatically knows the context of the open project and can point to specific files or code locations.",
        beispiel:
          'A developer asks in chat, "Why is this test failing?" and gets an explanation that refers directly to the affected code in the project.',
        wannVerwendet:
          "For questions about existing code, or when an approach needs discussing before making a change.",
      },
      es: {
        begriff: "Chat (en Cursor)",
        kurzerklaerung:
          "El chat de Cursor es una ventana de conversación en el editor con la que se pueden hacer preguntas sobre el código o pedir explicaciones sin salir del editor.",
        erklaerung:
          "Puedes imaginar el chat como un compañero con experiencia en la sala de al lado, al que puedes preguntarle algo rápido sin levantarte de tu escritorio. El chat conoce automáticamente el contexto del proyecto abierto y puede referirse a archivos o partes concretas del código.",
        beispiel:
          "Un desarrollador pregunta en el chat «¿Por qué falla esta prueba?» y recibe una explicación que hace referencia directa al código afectado en el proyecto.",
        wannVerwendet:
          "Para dudas sobre el código existente, o cuando conviene comentar un enfoque antes de hacer un cambio.",
      },
    },
  },
  {
    id: "lk-cursor-rules",
    kategorieId: KATEGORIE_ID,
    begriff: "Cursor Rules",
    kurzerklaerung:
      "Cursor Rules sind projektspezifische Anweisungen, die festlegen, wie sich die KI-Funktionen von Cursor in einem bestimmten Projekt verhalten sollen.",
    erklaerung:
      "Man kann sich Cursor Rules wie ein Einarbeitungsdokument für neue Mitarbeitende vorstellen: Statt bei jeder Anfrage erneut zu erklären, welche Konventionen gelten, werden diese Regeln einmal hinterlegt und danach automatisch bei jeder KI-Anfrage im Projekt berücksichtigt.",
    beispiel:
      "Ein Team hinterlegt in seinen Cursor Rules, dass alle Funktionen auf Englisch benannt und mit Tests versehen werden sollen, damit sich der Agent-Modus automatisch daran hält.",
    wannVerwendet:
      "Wenn wiederkehrende projektspezifische Vorgaben (Codestil, Architektur, verbotene Muster) nicht bei jeder einzelnen Anfrage erneut erklärt werden sollen.",
    icon: "📋",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-cursor", "lk-system-prompt"],
    uebersetzungen: {
      en: {
        begriff: "Cursor Rules",
        kurzerklaerung:
          "Cursor Rules are project-specific instructions that define how Cursor's AI features should behave within a given project.",
        erklaerung:
          "Think of Cursor Rules as an onboarding document for new hires: instead of re-explaining the conventions with every request, these rules are stored once and then automatically applied to every AI request in the project.",
        beispiel:
          "A team stores in its Cursor Rules that all functions should be named in English and come with tests, so agent mode automatically follows this.",
        wannVerwendet:
          "When recurring project-specific requirements (code style, architecture, forbidden patterns) shouldn't need to be re-explained with every single request.",
      },
      es: {
        begriff: "Cursor Rules",
        kurzerklaerung:
          "Cursor Rules son instrucciones específicas del proyecto que definen cómo deben comportarse las funciones de IA de Cursor dentro de un proyecto concreto.",
        erklaerung:
          "Puedes imaginar las Cursor Rules como un documento de incorporación para nuevos empleados: en lugar de volver a explicar las convenciones en cada solicitud, estas reglas se guardan una vez y luego se aplican automáticamente a cada solicitud de IA en el proyecto.",
        beispiel:
          "Un equipo guarda en sus Cursor Rules que todas las funciones deben nombrarse en inglés e incluir pruebas, para que el modo agente lo cumpla automáticamente.",
        wannVerwendet:
          "Cuando los requisitos específicos recurrentes de un proyecto (estilo de código, arquitectura, patrones prohibidos) no deben explicarse de nuevo en cada solicitud.",
      },
    },
  },
];
