import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-entwicklungswerkzeuge";

export const entwicklungswerkzeugeLernkarten: Lernkarte[] = [
  {
    id: "lk-vscode",
    kategorieId: KATEGORIE_ID,
    begriff: "VS Code (Editor)",
    kurzerklaerung:
      "VS Code ist ein kostenloses Programm zum Schreiben und Bearbeiten von Programmcode.",
    erklaerung:
      "VS Code ist wie eine gut ausgestattete Werkbank für Programmierer: Es zeigt Code übersichtlich an, hebt Fehler farblich hervor und lässt sich mit Werkzeugen für fast jede Programmiersprache erweitern. Anders als ein einfacher Texteditor „versteht“ es den Code und hilft aktiv beim Schreiben.",
    beispiel:
      "Eine angehende Entwicklerin öffnet ihren Projektordner in VS Code und sieht links die Dateiliste, in der Mitte den Code und unten ein eingebautes Terminal für Befehle.",
    wannVerwendet:
      "Praktisch bei jeder Programmiersitzung – es ist die zentrale Arbeitsumgebung, in der Code geschrieben, gelesen und ausgeführt wird.",
    icon: "🖥️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-extension", "lk-workspace"],
    uebersetzungen: {
      en: {
        begriff: "VS Code (editor)",
        kurzerklaerung:
          "VS Code is a free program for writing and editing program code.",
        erklaerung:
          "VS Code is like a well-equipped workbench for programmers: it displays code clearly, highlights errors in color, and can be extended with tools for almost any programming language. Unlike a plain text editor, it actually “understands” the code and actively helps while you write.",
        beispiel:
          "A trainee developer opens her project folder in VS Code and sees the file list on the left, the code in the middle, and a built-in terminal for commands at the bottom.",
        wannVerwendet:
          "Used in almost every coding session – it is the central work environment where code is written, read, and run.",
      },
      es: {
        begriff: "VS Code (editor)",
        kurzerklaerung:
          "VS Code es un programa gratuito para escribir y editar código.",
        erklaerung:
          "VS Code es como un banco de trabajo bien equipado para programadores: muestra el código de forma clara, resalta los errores en color y se puede ampliar con herramientas para casi cualquier lenguaje de programación. A diferencia de un editor de texto simple, realmente “entiende” el código y ayuda activamente mientras se escribe.",
        beispiel:
          "Una desarrolladora principiante abre la carpeta de su proyecto en VS Code y ve la lista de archivos a la izquierda, el código en el centro y una terminal integrada para comandos en la parte inferior.",
        wannVerwendet:
          "Se usa prácticamente en cada sesión de programación: es el entorno de trabajo central donde se escribe, se lee y se ejecuta el código.",
      },
    },
  },
  {
    id: "lk-extension",
    kategorieId: KATEGORIE_ID,
    begriff: "Extension (Editor-Erweiterung)",
    kurzerklaerung:
      "Eine Extension ist ein Zusatzmodul, das dem Editor neue Funktionen hinzufügt.",
    erklaerung:
      "Extensions sind wie Apps auf dem Smartphone: Der Editor selbst kann schon viel, aber durch das Nachinstallieren einzelner Erweiterungen bekommt er gezielt neue Fähigkeiten – etwa Unterstützung für eine bestimmte Programmiersprache oder ein neues Farbschema.",
    beispiel:
      "Ein Entwickler installiert die Extension „Prettier“, damit sein Code beim Speichern automatisch sauber formatiert wird.",
    wannVerwendet:
      "Beim Einrichten eines neuen Rechners oder wenn für ein Projekt zusätzliche Unterstützung nötig ist, etwa für eine neue Sprache oder ein neues Werkzeug.",
    icon: "🧩",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-vscode", "lk-linter", "lk-formatter"],
    uebersetzungen: {
      en: {
        begriff: "Extension (editor add-on)",
        kurzerklaerung:
          "An extension is an add-on module that gives the editor new features.",
        erklaerung:
          "Extensions are like apps on a smartphone: the editor can already do a lot on its own, but installing individual extensions gives it specific new abilities – such as support for a particular programming language or a new color theme.",
        beispiel:
          "A developer installs the “Prettier” extension so his code is automatically formatted neatly whenever he saves it.",
        wannVerwendet:
          "When setting up a new computer, or whenever a project needs extra support, for example for a new language or tool.",
      },
      es: {
        begriff: "Extensión (complemento del editor)",
        kurzerklaerung:
          "Una extensión es un módulo adicional que añade nuevas funciones al editor.",
        erklaerung:
          "Las extensiones son como las apps de un smartphone: el editor ya puede hacer mucho por sí solo, pero al instalar extensiones concretas obtiene capacidades nuevas y específicas, como soporte para un lenguaje de programación determinado o un nuevo esquema de colores.",
        beispiel:
          "Un desarrollador instala la extensión “Prettier” para que su código se formatee automáticamente de forma limpia cada vez que lo guarda.",
        wannVerwendet:
          "Al configurar un ordenador nuevo o cuando un proyecto necesita soporte adicional, por ejemplo para un nuevo lenguaje o una nueva herramienta.",
      },
    },
  },
  {
    id: "lk-linter",
    kategorieId: KATEGORIE_ID,
    begriff: "Linter",
    kurzerklaerung:
      "Ein Linter prüft Code automatisch auf Fehler, verdächtige Muster und Stilverstöße, ohne ihn auszuführen.",
    erklaerung:
      "Ein Linter ist wie ein Korrekturleser für Programmcode: Er liest den Text durch und markiert verdächtige Stellen – etwa eine unbenutzte Variable oder einen wahrscheinlichen Tippfehler –, bevor das Programm überhaupt gestartet wird. So werden viele Probleme entdeckt, bevor sie zu echten Fehlern führen.",
    beispiel:
      "Der Linter markiert eine Zeile gelb, weil eine Variable definiert, aber nie verwendet wird – ein Hinweis auf vergessenen oder überflüssigen Code.",
    wannVerwendet:
      "Läuft meist automatisch im Hintergrund beim Schreiben von Code und zusätzlich oft als Prüfschritt, bevor Änderungen eingecheckt werden.",
    befehl: "npx eslint .",
    icon: "🔍",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-formatter", "lk-debugger"],
    uebersetzungen: {
      en: {
        begriff: "Linter",
        kurzerklaerung:
          "A linter automatically checks code for errors, suspicious patterns, and style violations without running it.",
        erklaerung:
          "A linter is like a proofreader for program code: it reads through the text and flags suspicious spots – such as an unused variable or a likely typo – before the program is even started. This catches many problems before they turn into real bugs.",
        beispiel:
          "The linter highlights a line in yellow because a variable is defined but never used – a sign of forgotten or unnecessary code.",
        wannVerwendet:
          "Usually runs automatically in the background while writing code, and often also as a check before changes are committed.",
      },
      es: {
        begriff: "Linter",
        kurzerklaerung:
          "Un linter revisa el código automáticamente en busca de errores, patrones sospechosos y violaciones de estilo, sin llegar a ejecutarlo.",
        erklaerung:
          "Un linter es como un corrector de textos para el código: lee el texto y marca los puntos sospechosos, por ejemplo una variable sin usar o una probable errata, antes incluso de que el programa se ejecute. Así se detectan muchos problemas antes de que se conviertan en errores reales.",
        beispiel:
          "El linter marca una línea en amarillo porque se define una variable que nunca se utiliza, una señal de código olvidado o innecesario.",
        wannVerwendet:
          "Suele ejecutarse automáticamente en segundo plano mientras se escribe código, y a menudo también como paso de verificación antes de confirmar los cambios.",
      },
    },
  },
  {
    id: "lk-formatter",
    kategorieId: KATEGORIE_ID,
    begriff: "Formatter (Code-Formatierung)",
    kurzerklaerung:
      "Ein Formatter bringt Code automatisch in ein einheitliches, gut lesbares Erscheinungsbild.",
    erklaerung:
      "Ein Formatter ist wie eine automatische Textkorrektur, die Einrückungen, Abstände und Zeilenumbrüche vereinheitlicht, ohne den Inhalt zu verändern. Dadurch sieht der Code egal von wem er geschrieben wurde immer gleich ordentlich aus, was das Lesen im Team erheblich erleichtert.",
    beispiel:
      "Beim Speichern einer Datei richtet der Formatter automatisch alle Einrückungen aus und setzt einheitliche Anführungszeichen, ohne dass sich die Funktion des Codes ändert.",
    wannVerwendet:
      "Meist automatisch beim Speichern einer Datei oder als Prüfschritt vor dem Einchecken, damit der Code-Stil im ganzen Projekt einheitlich bleibt.",
    befehl: "npx prettier --write .",
    icon: "🧹",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-linter", "lk-extension"],
    uebersetzungen: {
      en: {
        begriff: "Formatter (code formatting)",
        kurzerklaerung:
          "A formatter automatically gives code a consistent, easy-to-read appearance.",
        erklaerung:
          "A formatter is like an automatic text cleanup that standardizes indentation, spacing, and line breaks without changing the content. This way the code always looks equally tidy no matter who wrote it, which makes it much easier to read as a team.",
        beispiel:
          "When a file is saved, the formatter automatically aligns all the indentation and applies consistent quotation marks, without changing how the code works.",
        wannVerwendet:
          "Usually runs automatically when saving a file, or as a check before committing, to keep the code style consistent across the whole project.",
      },
      es: {
        begriff: "Formateador (formato de código)",
        kurzerklaerung:
          "Un formateador da al código automáticamente un aspecto uniforme y fácil de leer.",
        erklaerung:
          "Un formateador es como una corrección automática de texto que unifica sangrías, espacios y saltos de línea sin cambiar el contenido. Así el código siempre se ve igual de ordenado, sin importar quién lo haya escrito, lo que facilita mucho su lectura en equipo.",
        beispiel:
          "Al guardar un archivo, el formateador alinea automáticamente todas las sangrías y aplica comillas uniformes, sin que cambie el funcionamiento del código.",
        wannVerwendet:
          "Normalmente se ejecuta automáticamente al guardar un archivo, o como paso de verificación antes de confirmar los cambios, para mantener un estilo de código uniforme en todo el proyecto.",
      },
    },
  },
  {
    id: "lk-debugger",
    kategorieId: KATEGORIE_ID,
    begriff: "Debugger",
    kurzerklaerung:
      "Ein Debugger ist ein Werkzeug, mit dem man ein Programm Schritt für Schritt ausführt, um Fehler zu finden.",
    erklaerung:
      "Ein Debugger ist wie eine Zeitlupenfunktion für ein laufendes Programm: Statt alles auf einmal ablaufen zu lassen, kann man an bestimmten Stellen anhalten und genau nachsehen, welche Werte gerade in den Variablen stecken. So lässt sich Schritt für Schritt herausfinden, an welcher Stelle etwas schiefläuft.",
    beispiel:
      "Ein Entwickler startet den Debugger, weil eine Berechnung ein falsches Ergebnis liefert, und beobachtet dabei live, wie sich eine Zahl bei jedem Rechenschritt verändert.",
    wannVerwendet:
      "Wenn ein Fehler nicht durch bloßes Lesen des Codes zu finden ist und man den genauen Programmablauf live nachvollziehen muss.",
    befehl: "F5",
    icon: "🐞",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-breakpoint", "lk-linter"],
    uebersetzungen: {
      en: {
        begriff: "Debugger",
        kurzerklaerung:
          "A debugger is a tool that lets you run a program step by step to find errors.",
        erklaerung:
          "A debugger is like a slow-motion function for a running program: instead of letting everything play out at once, you can pause at specific points and look closely at what values the variables currently hold. This makes it possible to track down, step by step, exactly where something goes wrong.",
        beispiel:
          "A developer starts the debugger because a calculation is producing the wrong result, and watches live how a number changes with each calculation step.",
        wannVerwendet:
          "When an error can't be found just by reading the code and you need to trace the exact program flow live.",
      },
      es: {
        begriff: "Depurador (debugger)",
        kurzerklaerung:
          "Un depurador es una herramienta que permite ejecutar un programa paso a paso para encontrar errores.",
        erklaerung:
          "Un depurador es como una función de cámara lenta para un programa en ejecución: en lugar de dejar que todo transcurra de golpe, se puede pausar en puntos concretos y observar exactamente qué valores tienen las variables en ese momento. Así se puede averiguar, paso a paso, en qué punto exacto algo falla.",
        beispiel:
          "Un desarrollador inicia el depurador porque un cálculo da un resultado incorrecto, y observa en vivo cómo cambia un número en cada paso del cálculo.",
        wannVerwendet:
          "Cuando un error no se puede encontrar solo leyendo el código y es necesario seguir en vivo el flujo exacto del programa.",
      },
    },
  },
  {
    id: "lk-breakpoint",
    kategorieId: KATEGORIE_ID,
    begriff: "Breakpoint",
    kurzerklaerung:
      "Ein Breakpoint ist eine markierte Stelle im Code, an der das Programm beim Debuggen automatisch anhält.",
    erklaerung:
      "Ein Breakpoint funktioniert wie ein Stoppschild an einer bestimmten Stelle der Straße: Sobald das Programm während des Debuggens dort ankommt, hält es an, und man kann sich in Ruhe umsehen, welche Werte gerade vorliegen, bevor man weiterfährt.",
    beispiel:
      "Ein Entwickler setzt einen Breakpoint direkt vor einer verdächtigen Berechnung, damit das Programm dort automatisch pausiert und er den Wert der beteiligten Variablen prüfen kann.",
    wannVerwendet:
      "Beim gezielten Suchen eines Fehlers, wenn man genau an einer bestimmten Stelle im Code den aktuellen Zustand des Programms sehen möchte.",
    icon: "🛑",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-debugger"],
    uebersetzungen: {
      en: {
        begriff: "Breakpoint",
        kurzerklaerung:
          "A breakpoint is a marked spot in the code where the program automatically pauses during debugging.",
        erklaerung:
          "A breakpoint works like a stop sign at a specific point on the road: as soon as the program reaches it during debugging, it stops, and you can calmly look around to see what values are currently present before continuing on.",
        beispiel:
          "A developer sets a breakpoint right before a suspicious calculation, so the program automatically pauses there and he can check the values of the variables involved.",
        wannVerwendet:
          "When hunting down a specific bug and you want to see the program's exact current state at one particular point in the code.",
      },
      es: {
        begriff: "Breakpoint (punto de interrupción)",
        kurzerklaerung:
          "Un breakpoint es un punto marcado en el código donde el programa se detiene automáticamente durante la depuración.",
        erklaerung:
          "Un breakpoint funciona como una señal de stop en un punto concreto de la carretera: en cuanto el programa llega hasta ahí durante la depuración, se detiene, y se puede observar con calma qué valores hay en ese momento antes de continuar.",
        beispiel:
          "Un desarrollador coloca un breakpoint justo antes de un cálculo sospechoso, para que el programa se detenga automáticamente ahí y pueda comprobar el valor de las variables implicadas.",
        wannVerwendet:
          "Al buscar un error de forma específica, cuando se quiere ver el estado exacto del programa en un punto concreto del código.",
      },
    },
  },
  {
    id: "lk-code-vervollstaendigung",
    kategorieId: KATEGORIE_ID,
    begriff: "Code-Vervollständigung (IntelliSense)",
    kurzerklaerung:
      "Code-Vervollständigung schlägt beim Tippen passende Fortsetzungen und Befehle automatisch vor.",
    erklaerung:
      "Code-Vervollständigung ist wie die Textvorschläge auf einem Smartphone: Während man tippt, erscheint eine Liste wahrscheinlicher nächster Wörter oder Befehle, aus der man einfach auswählen kann, statt alles von Hand einzutippen. Das spart Zeit und verhindert Tippfehler bei langen Befehlsnamen.",
    beispiel:
      "Kaum tippt ein Entwickler die ersten Buchstaben eines Funktionsnamens, erscheint eine Liste mit passenden Vorschlägen samt kurzer Erklärung, was die Funktion tut.",
    wannVerwendet:
      "Ständig während des Programmierens – sie unterstützt praktisch jede Zeile Code, die geschrieben wird.",
    icon: "💡",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-vscode", "lk-snippet"],
    uebersetzungen: {
      en: {
        begriff: "Code Completion (IntelliSense)",
        kurzerklaerung:
          "Code completion automatically suggests matching continuations and commands as you type.",
        erklaerung:
          "Code completion is like the text suggestions on a smartphone: as you type, a list of likely next words or commands appears, and you can simply pick one instead of typing everything by hand. This saves time and prevents typos in long command names.",
        beispiel:
          "As soon as a developer types the first letters of a function name, a list of matching suggestions appears, along with a short explanation of what the function does.",
        wannVerwendet:
          "Constantly while programming – it supports virtually every line of code that gets written.",
      },
      es: {
        begriff: "Autocompletado de código (IntelliSense)",
        kurzerklaerung:
          "El autocompletado sugiere automáticamente continuaciones y comandos adecuados mientras se escribe.",
        erklaerung:
          "El autocompletado de código es como las sugerencias de texto de un smartphone: mientras se escribe, aparece una lista de palabras o comandos probables entre los que se puede elegir, en lugar de teclearlo todo a mano. Esto ahorra tiempo y evita errores tipográficos en nombres de comandos largos.",
        beispiel:
          "En cuanto un desarrollador teclea las primeras letras del nombre de una función, aparece una lista de sugerencias adecuadas junto con una breve explicación de lo que hace la función.",
        wannVerwendet:
          "Constantemente mientras se programa: apoya prácticamente cada línea de código que se escribe.",
      },
    },
  },
  {
    id: "lk-workspace",
    kategorieId: KATEGORIE_ID,
    begriff: "Workspace-Einstellungen",
    kurzerklaerung:
      "Workspace-Einstellungen sind Konfigurationen, die nur für ein bestimmtes Projekt im Editor gelten.",
    erklaerung:
      "Workspace-Einstellungen sind wie individuelle Hausregeln für ein einzelnes Zimmer statt für die ganze Wohnung: Sie gelten nur innerhalb eines bestimmten Projektordners und überschreiben dort bei Bedarf die allgemeinen Editor-Einstellungen. So kann jedes Projekt eigene Vorgaben haben, etwa welcher Formatter genutzt wird.",
    beispiel:
      "Ein Team legt in den Workspace-Einstellungen fest, dass in diesem Projekt immer mit zwei Leerzeichen statt mit Tabs eingerückt wird, damit alle Teammitglieder denselben Stil verwenden.",
    wannVerwendet:
      "Beim Einrichten eines neuen Projekts oder wenn ein Team sich auf gemeinsame, projektspezifische Regeln einigen möchte.",
    icon: "⚙️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-vscode", "lk-extension"],
    uebersetzungen: {
      en: {
        begriff: "Workspace settings",
        kurzerklaerung:
          "Workspace settings are configurations that apply only to a specific project in the editor.",
        erklaerung:
          "Workspace settings are like individual house rules for a single room instead of the whole apartment: they apply only within a particular project folder and, if needed, override the general editor settings there. This way, every project can have its own rules, such as which formatter is used.",
        beispiel:
          "A team sets in the workspace settings that this project always uses two spaces instead of tabs for indentation, so that everyone on the team uses the same style.",
        wannVerwendet:
          "When setting up a new project, or when a team wants to agree on shared, project-specific rules.",
      },
      es: {
        begriff: "Configuración del espacio de trabajo (workspace)",
        kurzerklaerung:
          "La configuración del espacio de trabajo son ajustes que solo se aplican a un proyecto concreto en el editor.",
        erklaerung:
          "La configuración del espacio de trabajo es como reglas particulares para una sola habitación en lugar de para toda la vivienda: solo se aplican dentro de una carpeta de proyecto determinada y, si es necesario, allí sobrescriben la configuración general del editor. Así, cada proyecto puede tener sus propias normas, por ejemplo qué formateador se utiliza.",
        beispiel:
          "Un equipo define en la configuración del espacio de trabajo que en este proyecto siempre se usan dos espacios en lugar de tabulaciones para la sangría, de modo que todos los miembros del equipo usen el mismo estilo.",
        wannVerwendet:
          "Al configurar un proyecto nuevo o cuando un equipo quiere acordar reglas comunes específicas del proyecto.",
      },
    },
  },
  {
    id: "lk-snippet",
    kategorieId: KATEGORIE_ID,
    begriff: "Snippet",
    kurzerklaerung:
      "Ein Snippet ist ein vorgefertigter Code-Baustein, der sich mit wenigen Tastendrücken einfügen lässt.",
    erklaerung:
      "Ein Snippet ist wie ein Textbaustein in einem E-Mail-Programm: Statt eine oft wiederkehrende Formulierung jedes Mal neu zu tippen, ruft man sie über ein kurzes Kürzel ab und passt nur die Details an. Das spart Zeit bei häufig wiederkehrenden Code-Mustern.",
    beispiel:
      "Ein Entwickler tippt das Kürzel „forloop“ und der Editor fügt automatisch das komplette Grundgerüst einer Schleife ein, in dem nur noch die Details angepasst werden müssen.",
    wannVerwendet:
      "Bei wiederkehrenden, gut bekannten Code-Strukturen, die man nicht jedes Mal von Grund auf neu schreiben möchte.",
    icon: "✂️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-code-vervollstaendigung", "lk-vscode"],
    uebersetzungen: {
      en: {
        begriff: "Snippet",
        kurzerklaerung:
          "A snippet is a ready-made piece of code that can be inserted with just a few keystrokes.",
        erklaerung:
          "A snippet is like a canned reply in an email program: instead of typing a frequently recurring phrase from scratch every time, you call it up with a short shortcut and just adjust the details. This saves time on code patterns that come up again and again.",
        beispiel:
          "A developer types the shortcut “forloop” and the editor automatically inserts the complete basic structure of a loop, leaving only the details to be adjusted.",
        wannVerwendet:
          "For recurring, well-known code structures that you don't want to write from scratch every time.",
      },
      es: {
        begriff: "Snippet (fragmento de código)",
        kurzerklaerung:
          "Un snippet es un bloque de código ya preparado que se puede insertar con solo unas pocas teclas.",
        erklaerung:
          "Un snippet es como una respuesta predefinida en un programa de correo: en lugar de escribir cada vez desde cero una frase que se repite con frecuencia, se llama con un atajo corto y solo se ajustan los detalles. Esto ahorra tiempo en patrones de código que aparecen una y otra vez.",
        beispiel:
          "Un desarrollador teclea el atajo “forloop” y el editor inserta automáticamente toda la estructura básica de un bucle, quedando solo por ajustar los detalles.",
        wannVerwendet:
          "Para estructuras de código conocidas y recurrentes que no se quieren escribir desde cero cada vez.",
      },
    },
  },
];
