import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-kommandozeile-powershell";

export const kommandozeilePowershellLernkarten: Lernkarte[] = [
  {
    id: "lk-terminal",
    kategorieId: KATEGORIE_ID,
    begriff: "Terminal / Kommandozeile",
    kurzerklaerung:
      "Das Terminal ist ein Fenster, in dem man dem Computer Befehle als Text eingibt, statt mit Maus und Icons zu klicken.",
    erklaerung:
      "Man kann sich das Terminal wie ein Gespräch mit dem Computer in einer sehr direkten, knappen Sprache vorstellen: Man tippt eine Anweisung, drückt Enter, und bekommt sofort eine Antwort als Text zurück. Viele Entwickler-Werkzeuge – auch Git – werden über genau so ein Fenster bedient.",
    beispiel:
      "Statt im Datei-Explorer zu klicken, tippt ein Entwickler „cd Projekte“ ins Terminal, um direkt in den Projektordner zu wechseln.",
    wannVerwendet:
      "Praktisch bei jeder Entwickler-Tätigkeit: Git-Befehle, Programme starten, Pakete installieren, Skripte ausführen.",
    icon: "⌨️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-shell"],
    uebersetzungen: {
      en: {
        begriff: "Terminal / Command Line",
        kurzerklaerung:
          "The terminal is a window where you type commands to the computer as text instead of clicking with a mouse and icons.",
        erklaerung:
          "Think of the terminal like a conversation with the computer in a very direct, terse language: you type an instruction, press Enter, and immediately get a text reply back. Many developer tools — including Git — are operated through exactly this kind of window.",
        beispiel:
          "Instead of clicking around in File Explorer, a developer types \"cd Projekte\" into the terminal to jump straight into the project folder.",
        wannVerwendet:
          "Useful in almost every developer task: Git commands, launching programs, installing packages, running scripts.",
      },
      es: {
        begriff: "Terminal / Línea de comandos",
        kurzerklaerung:
          "La terminal es una ventana en la que se le dan órdenes al ordenador escribiendo texto, en lugar de hacer clic con el ratón sobre iconos.",
        erklaerung:
          "Puedes imaginar la terminal como una conversación con el ordenador en un lenguaje muy directo y escueto: escribes una instrucción, pulsas Enter y recibes al instante una respuesta en forma de texto. Muchas herramientas para desarrolladores, incluido Git, se manejan precisamente a través de una ventana así.",
        beispiel:
          "En lugar de hacer clic en el explorador de archivos, un desarrollador escribe «cd Projekte» en la terminal para pasar directamente a la carpeta del proyecto.",
        wannVerwendet:
          "Útil en prácticamente cualquier tarea de desarrollo: comandos de Git, iniciar programas, instalar paquetes, ejecutar scripts.",
      },
    },
  },
  {
    id: "lk-shell",
    kategorieId: KATEGORIE_ID,
    begriff: "Shell",
    kurzerklaerung:
      "Die Shell ist das Programm, das im Terminal läuft, Befehle entgegennimmt und ausführt.",
    erklaerung:
      "Wenn das Terminal das Fenster ist, ist die Shell der Übersetzer dahinter, der die eingetippten Befehle versteht und an das Betriebssystem weiterreicht. Es gibt verschiedene Shells mit eigener Syntax – zum Beispiel PowerShell (Windows) oder Bash (Linux/macOS).",
    beispiel:
      "Auf demselben Windows-Rechner kann man wahlweise PowerShell oder eine Bash-Shell wie Git Bash öffnen – beide sind Shells, aber mit unterschiedlicher Befehlssyntax.",
    wannVerwendet:
      "Immer im Hintergrund, sobald ein Terminal-Fenster geöffnet wird – die Wahl der Shell entscheidet über die genaue Befehlssyntax.",
    icon: "🐚",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-terminal", "lk-powershell", "lk-bash"],
    uebersetzungen: {
      en: {
        begriff: "Shell",
        kurzerklaerung:
          "The shell is the program running inside the terminal that receives and executes commands.",
        erklaerung:
          "If the terminal is the window, the shell is the interpreter behind it that understands the commands you type and passes them on to the operating system. There are different shells, each with its own syntax — for example PowerShell (Windows) or Bash (Linux/macOS).",
        beispiel:
          "On the very same Windows machine, you can open either PowerShell or a Bash shell like Git Bash — both are shells, but with different command syntax.",
        wannVerwendet:
          "Always running in the background as soon as a terminal window is opened — the choice of shell determines the exact command syntax.",
      },
      es: {
        begriff: "Shell",
        kurzerklaerung:
          "La shell es el programa que se ejecuta dentro de la terminal, recibe los comandos y los ejecuta.",
        erklaerung:
          "Si la terminal es la ventana, la shell es el traductor que hay detrás, que entiende los comandos escritos y se los pasa al sistema operativo. Existen distintas shells, cada una con su propia sintaxis, por ejemplo PowerShell (Windows) o Bash (Linux/macOS).",
        beispiel:
          "En el mismo ordenador con Windows se puede abrir PowerShell o una shell Bash como Git Bash: ambas son shells, pero con una sintaxis de comandos distinta.",
        wannVerwendet:
          "Siempre está funcionando de fondo en cuanto se abre una ventana de terminal; la shell elegida determina la sintaxis exacta de los comandos.",
      },
    },
  },
  {
    id: "lk-powershell",
    kategorieId: KATEGORIE_ID,
    begriff: "PowerShell",
    kurzerklaerung:
      "PowerShell ist die moderne Standard-Shell von Windows, die neben Text auch mit strukturierten Objekten arbeiten kann.",
    erklaerung:
      "PowerShell ist wie ein besonders vielseitiges Werkzeug im Windows-Werkzeugkasten: Statt nur reinen Text zwischen Befehlen weiterzureichen, gibt sie oft strukturierte Datenobjekte weiter, die sich gezielt filtern und weiterverarbeiten lassen. Befehle heißen dort typischerweise „Verb-Substantiv“, z. B. „Get-ChildItem“.",
    beispiel:
      "Mit „Get-ChildItem“ zeigt PowerShell den Inhalt eines Ordners an – das Windows-Äquivalent zu „ls“ in Bash.",
    wannVerwendet:
      "Als Standard-Terminal unter Windows, etwa um Dateioperationen, Skripte oder Entwicklerwerkzeuge auszuführen.",
    befehl: "Get-ChildItem",
    icon: "🪟",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-shell", "lk-bash"],
    uebersetzungen: {
      en: {
        begriff: "PowerShell",
        kurzerklaerung:
          "PowerShell is Windows' modern default shell, which can work with structured objects in addition to plain text.",
        erklaerung:
          "PowerShell is like an especially versatile tool in the Windows toolbox: instead of only passing plain text between commands, it often passes along structured data objects that can be filtered and processed in a targeted way. Commands there typically follow a \"Verb-Noun\" pattern, e.g. \"Get-ChildItem\".",
        beispiel:
          "\"Get-ChildItem\" shows the contents of a folder in PowerShell — the Windows equivalent of \"ls\" in Bash.",
        wannVerwendet:
          "As the default terminal on Windows, for example to perform file operations or run scripts and developer tools.",
      },
      es: {
        begriff: "PowerShell",
        kurzerklaerung:
          "PowerShell es la shell moderna y predeterminada de Windows, capaz de trabajar no solo con texto sino también con objetos estructurados.",
        erklaerung:
          "PowerShell es como una herramienta especialmente versátil dentro de la caja de herramientas de Windows: en lugar de pasar solo texto plano entre comandos, a menudo transmite objetos de datos estructurados que se pueden filtrar y procesar de forma precisa. Allí los comandos suelen seguir el patrón «Verbo-Sustantivo», por ejemplo «Get-ChildItem».",
        beispiel:
          "Con «Get-ChildItem», PowerShell muestra el contenido de una carpeta: el equivalente en Windows a «ls» en Bash.",
        wannVerwendet:
          "Como terminal predeterminada en Windows, por ejemplo para operaciones con archivos, scripts o herramientas de desarrollo.",
      },
    },
  },
  {
    id: "lk-bash",
    kategorieId: KATEGORIE_ID,
    begriff: "Bash",
    kurzerklaerung:
      "Bash ist eine weit verbreitete Shell, die auf Linux und macOS Standard ist und unter Windows z. B. über „Git Bash“ genutzt wird.",
    erklaerung:
      "Bash ist wie ein anderer Dialekt derselben Grundidee wie PowerShell: Auch hier tippt man Befehle ein, nur mit anderer Schreibweise und anderen Werkzeugnamen. Viele Anleitungen und Server-Dokumentationen im Netz gehen von Bash aus, da sie auf Linux-Servern der Standard ist.",
    beispiel:
      "Ein Entwickler nutzt unter Windows „Git Bash“, um Befehle aus einer Online-Anleitung eins zu eins übernehmen zu können, die für Linux geschrieben wurde.",
    wannVerwendet:
      "Wenn Anleitungen oder Server-Umgebungen Bash-Syntax voraussetzen, oder um plattformübergreifend dieselben Befehle zu nutzen.",
    befehl: "ls -la",
    icon: "🐧",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-shell", "lk-powershell"],
    uebersetzungen: {
      en: {
        begriff: "Bash",
        kurzerklaerung:
          "Bash is a widely used shell that is the default on Linux and macOS, and is also used on Windows via tools like \"Git Bash\".",
        erklaerung:
          "Bash is like a different dialect of the same basic idea as PowerShell: you still type commands, just with different spelling and different tool names. Many online tutorials and server documentation assume Bash, since it's the standard on Linux servers.",
        beispiel:
          "A developer uses \"Git Bash\" on Windows so they can copy commands one-to-one from an online tutorial that was written for Linux.",
        wannVerwendet:
          "When tutorials or server environments assume Bash syntax, or to use the same commands across different platforms.",
      },
      es: {
        begriff: "Bash",
        kurzerklaerung:
          "Bash es una shell muy extendida, predeterminada en Linux y macOS, y que en Windows se usa por ejemplo a través de «Git Bash».",
        erklaerung:
          "Bash es como otro dialecto de la misma idea básica que PowerShell: aquí también se escriben comandos, solo que con otra ortografía y otros nombres de herramientas. Muchos tutoriales y documentaciones de servidores en internet dan Bash por sentado, ya que es el estándar en los servidores Linux.",
        beispiel:
          "Un desarrollador usa «Git Bash» en Windows para poder copiar tal cual los comandos de un tutorial en línea escrito para Linux.",
        wannVerwendet:
          "Cuando los tutoriales o los entornos de servidor dan por hecha la sintaxis de Bash, o para usar los mismos comandos en distintas plataformas.",
      },
    },
  },
  {
    id: "lk-pfad",
    kategorieId: KATEGORIE_ID,
    begriff: "Pfad (absolut & relativ)",
    kurzerklaerung:
      "Ein Pfad beschreibt, wo genau sich eine Datei oder ein Ordner im Dateisystem befindet – entweder vollständig (absolut) oder ausgehend vom aktuellen Ort (relativ).",
    erklaerung:
      "Ein absoluter Pfad ist wie eine vollständige Postadresse, die von überall aus funktioniert. Ein relativer Pfad ist wie eine Wegbeschreibung „zwei Türen weiter“ – sie gilt nur, wenn man weiß, wo man gerade steht. Genau das ist beim Ausführen von Befehlen im Terminal wichtig: Das aktuelle Arbeitsverzeichnis bestimmt, wohin ein relativer Pfad zeigt.",
    beispiel:
      "„C:\\Projekte\\Trainer\\src“ ist ein absoluter Pfad. „src\\data“ ist relativ und funktioniert nur, wenn man sich bereits im Ordner „Trainer“ befindet.",
    wannVerwendet:
      "Bei jedem Zugriff auf Dateien oder Ordner über die Kommandozeile, in Konfigurationsdateien oder in Programmcode.",
    icon: "🧭",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-arbeitsverzeichnis"],
    uebersetzungen: {
      en: {
        begriff: "Path (absolute & relative)",
        kurzerklaerung:
          "A path describes exactly where a file or folder is located in the file system — either in full (absolute) or starting from the current location (relative).",
        erklaerung:
          "An absolute path is like a complete postal address that works from anywhere. A relative path is like directions saying \"two doors down\" — it only works if you know where you're currently standing. That's exactly what matters when running commands in the terminal: the current working directory determines where a relative path actually points.",
        beispiel:
          "\"C:\\Projekte\\Trainer\\src\" is an absolute path. \"src\\data\" is relative and only works if you're already inside the \"Trainer\" folder.",
        wannVerwendet:
          "Whenever you access files or folders from the command line, in configuration files, or in program code.",
      },
      es: {
        begriff: "Ruta (absoluta y relativa)",
        kurzerklaerung:
          "Una ruta describe exactamente dónde se encuentra un archivo o una carpeta en el sistema de archivos, ya sea de forma completa (absoluta) o partiendo del lugar actual (relativa).",
        erklaerung:
          "Una ruta absoluta es como una dirección postal completa que funciona desde cualquier lugar. Una ruta relativa es como una indicación del tipo «dos puertas más allá»: solo vale si sabes dónde te encuentras en ese momento. Precisamente eso es lo importante al ejecutar comandos en la terminal: el directorio de trabajo actual determina hacia dónde apunta realmente una ruta relativa.",
        beispiel:
          "«C:\\Projekte\\Trainer\\src» es una ruta absoluta. «src\\data» es relativa y solo funciona si ya estás dentro de la carpeta «Trainer».",
        wannVerwendet:
          "En cualquier acceso a archivos o carpetas desde la línea de comandos, en archivos de configuración o en el código de un programa.",
      },
    },
  },
  {
    id: "lk-umgebungsvariable",
    kategorieId: KATEGORIE_ID,
    begriff: "Umgebungsvariable",
    kurzerklaerung:
      "Eine Umgebungsvariable ist ein benannter Wert, der Programmen im Hintergrund zur Verfügung steht – etwa Einstellungen oder geheime Zugangsdaten.",
    erklaerung:
      "Umgebungsvariablen sind wie Notizzettel, die überall im System hängen und von Programmen gelesen werden können, ohne dass man sie im Code fest hinterlegen muss. Das ist besonders wichtig für Dinge wie Passwörter oder API-Schlüssel, die niemals direkt im Quellcode stehen sollten.",
    beispiel:
      "Ein Programm liest die Umgebungsvariable „API_KEY“ aus, statt den Schlüssel fest im Quellcode zu speichern – so bleibt er außerhalb des Repositories.",
    wannVerwendet:
      "Um Konfigurationswerte und Geheimnisse getrennt vom Code zu halten, insbesondere zwischen verschiedenen Rechnern oder Umgebungen (lokal, Server).",
    befehl: "$env:API_KEY",
    icon: "🔧",
    schwierigkeit: "schwer",
    uebersetzungen: {
      en: {
        begriff: "Environment Variable",
        kurzerklaerung:
          "An environment variable is a named value that's available to programs in the background — for example settings or secret credentials.",
        erklaerung:
          "Environment variables are like sticky notes hanging around the system that programs can read without the value being hard-coded into the program itself. That matters especially for things like passwords or API keys, which should never sit directly in the source code.",
        beispiel:
          "A program reads the environment variable \"API_KEY\" instead of storing the key directly in the source code — that way it stays out of the repository.",
        wannVerwendet:
          "To keep configuration values and secrets separate from the code, especially across different machines or environments (local, server).",
      },
      es: {
        begriff: "Variable de entorno",
        kurzerklaerung:
          "Una variable de entorno es un valor con nombre al que los programas pueden acceder en segundo plano, por ejemplo ajustes o credenciales secretas.",
        erklaerung:
          "Las variables de entorno son como notas adhesivas repartidas por todo el sistema que los programas pueden leer sin necesidad de tenerlas escritas directamente en el código. Esto es especialmente importante para cosas como contraseñas o claves de API, que nunca deberían aparecer directamente en el código fuente.",
        beispiel:
          "Un programa lee la variable de entorno «API_KEY» en lugar de guardar la clave directamente en el código fuente, de modo que queda fuera del repositorio.",
        wannVerwendet:
          "Para mantener los valores de configuración y los secretos separados del código, sobre todo entre distintos equipos o entornos (local, servidor).",
      },
    },
  },
  {
    id: "lk-parameter-flag",
    kategorieId: KATEGORIE_ID,
    begriff: "Parameter / Flag",
    kurzerklaerung:
      "Parameter (auch Flags genannt) sind zusätzliche Angaben hinter einem Befehl, die dessen Verhalten gezielt anpassen.",
    erklaerung:
      "Parameter sind wie Zusatzwünsche bei einer Bestellung: Der Grundbefehl bleibt gleich, aber durch Zusätze wird genau festgelegt, wie er ausgeführt werden soll. Sie beginnen meist mit einem Bindestrich und können einen eigenen Wert mitbringen.",
    beispiel:
      "„git log --oneline“ zeigt die Commit-Historie kompakt an – „--oneline“ ist hier der Parameter, der das Standardverhalten von „git log“ verändert.",
    wannVerwendet:
      "Immer dann, wenn ein Standardbefehl leicht angepasst werden soll, statt einen komplett anderen Befehl zu suchen.",
    befehl: "git log --oneline",
    icon: "🎛️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-terminal"],
    uebersetzungen: {
      en: {
        begriff: "Parameter / Flag",
        kurzerklaerung:
          "Parameters (also called flags) are extra pieces of information added after a command that fine-tune how it behaves.",
        erklaerung:
          "Parameters are like extra requests when placing an order: the base command stays the same, but the add-ons determine exactly how it gets carried out. They usually start with a dash and can come with their own value.",
        beispiel:
          "\"git log --oneline\" shows the commit history in a compact form — \"--oneline\" is the parameter here that changes the default behavior of \"git log\".",
        wannVerwendet:
          "Whenever a standard command needs a slight adjustment, instead of having to look for a completely different command.",
      },
      es: {
        begriff: "Parámetro / Flag",
        kurzerklaerung:
          "Los parámetros (también llamados flags) son indicaciones adicionales que se añaden después de un comando para ajustar su comportamiento.",
        erklaerung:
          "Los parámetros son como peticiones extra al hacer un pedido: el comando base sigue siendo el mismo, pero los añadidos determinan exactamente cómo se ejecuta. Normalmente empiezan con un guion y pueden llevar su propio valor.",
        beispiel:
          "«git log --oneline» muestra el historial de commits de forma compacta: aquí «--oneline» es el parámetro que modifica el comportamiento predeterminado de «git log».",
        wannVerwendet:
          "Siempre que un comando estándar necesite un pequeño ajuste, en lugar de tener que buscar un comando completamente distinto.",
      },
    },
  },
  {
    id: "lk-pipe",
    kategorieId: KATEGORIE_ID,
    begriff: "Pipe",
    kurzerklaerung:
      "Eine Pipe (Symbol „|“) leitet die Ausgabe eines Befehls direkt als Eingabe an den nächsten Befehl weiter.",
    erklaerung:
      "Eine Pipe funktioniert wie ein Fließband zwischen zwei Arbeitsstationen: Das Ergebnis der ersten Station wird direkt zur zweiten weitergereicht, ohne dass es zwischengespeichert werden muss. So lassen sich mehrere einfache Befehle zu einer leistungsfähigen Befehlskette kombinieren.",
    beispiel:
      "„git log --oneline | Select-String \"fix\"“ zeigt aus der Commit-Historie nur die Zeilen an, die das Wort „fix“ enthalten.",
    wannVerwendet:
      "Wenn die Ausgabe eines Befehls gefiltert, sortiert oder weiterverarbeitet werden soll, ohne Zwischenschritte manuell zu erledigen.",
    icon: "🚰",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-parameter-flag"],
    uebersetzungen: {
      en: {
        begriff: "Pipe",
        kurzerklaerung:
          "A pipe (the \"|\" symbol) sends the output of one command straight in as the input for the next command.",
        erklaerung:
          "A pipe works like a conveyor belt between two workstations: the result from the first station is passed straight to the second, without needing to be stored in between. This lets you chain several simple commands together into one powerful command sequence.",
        beispiel:
          "\"git log --oneline | Select-String \\\"fix\\\"\" shows only the lines from the commit history that contain the word \"fix\".",
        wannVerwendet:
          "When the output of a command needs to be filtered, sorted, or processed further, without doing the intermediate steps by hand.",
      },
      es: {
        begriff: "Pipe",
        kurzerklaerung:
          "Una pipe (el símbolo «|») envía la salida de un comando directamente como entrada del siguiente comando.",
        erklaerung:
          "Una pipe funciona como una cinta transportadora entre dos puestos de trabajo: el resultado del primero pasa directamente al segundo, sin necesidad de guardarlo entre medias. Así se pueden combinar varios comandos sencillos en una cadena de comandos mucho más potente.",
        beispiel:
          "«git log --oneline | Select-String \"fix\"» muestra del historial de commits solo las líneas que contienen la palabra «fix».",
        wannVerwendet:
          "Cuando hay que filtrar, ordenar o seguir procesando la salida de un comando sin realizar los pasos intermedios a mano.",
      },
    },
  },
  {
    id: "lk-arbeitsverzeichnis",
    kategorieId: KATEGORIE_ID,
    begriff: "Aktuelles Arbeitsverzeichnis",
    kurzerklaerung:
      "Das aktuelle Arbeitsverzeichnis ist der Ordner, „in dem“ sich das Terminal gerade befindet und auf den sich relative Pfade beziehen.",
    erklaerung:
      "Man kann sich das Arbeitsverzeichnis wie den Raum vorstellen, in dem man gerade steht: Alle Wegbeschreibungen („zwei Türen weiter“) beziehen sich darauf, wo man sich aktuell befindet. Mit „cd“ (change directory) wechselt man in einen anderen Raum, also einen anderen Ordner.",
    beispiel:
      "Ein Entwickler wechselt mit „cd Trainer“ in den Projektordner, bevor er dort „npm run build“ ausführt – der Befehl wirkt sich nur auf das aktuelle Arbeitsverzeichnis aus.",
    wannVerwendet:
      "Vor fast jedem Terminal-Befehl, der sich auf Dateien oder ein Projekt bezieht – man muss zuerst am richtigen Ort stehen.",
    befehl: "cd Trainer",
    icon: "📍",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-pfad"],
    uebersetzungen: {
      en: {
        begriff: "Current Working Directory",
        kurzerklaerung:
          "The current working directory is the folder the terminal is currently \"in\", the one relative paths are based on.",
        erklaerung:
          "You can picture the working directory as the room you're currently standing in: every set of directions (\"two doors down\") refers to wherever you currently are. With \"cd\" (change directory) you move into a different room, meaning a different folder.",
        beispiel:
          "A developer runs \"cd Trainer\" to switch into the project folder before running \"npm run build\" there — the command only affects the current working directory.",
        wannVerwendet:
          "Before almost any terminal command that deals with files or a project — you first need to be standing in the right place.",
      },
      es: {
        begriff: "Directorio de trabajo actual",
        kurzerklaerung:
          "El directorio de trabajo actual es la carpeta en la que se encuentra la terminal en ese momento, y a la que se refieren las rutas relativas.",
        erklaerung:
          "Puedes imaginar el directorio de trabajo como la habitación en la que te encuentras: cualquier indicación del tipo «dos puertas más allá» se refiere a dónde estás ahora mismo. Con «cd» (change directory, cambiar de directorio) pasas a otra habitación, es decir, a otra carpeta.",
        beispiel:
          "Un desarrollador ejecuta «cd Trainer» para pasar a la carpeta del proyecto antes de ejecutar allí «npm run build»: el comando solo afecta al directorio de trabajo actual.",
        wannVerwendet:
          "Antes de casi cualquier comando de terminal que tenga que ver con archivos o un proyecto: primero hay que estar situado en el lugar correcto.",
      },
    },
  },
  {
    id: "lk-execution-policy",
    kategorieId: KATEGORIE_ID,
    begriff: "Execution Policy",
    kurzerklaerung:
      "Die Execution Policy ist eine Sicherheitseinstellung von PowerShell, die festlegt, ob und welche Skripte auf einem Rechner ausgeführt werden dürfen.",
    erklaerung:
      "Man kann sich die Execution Policy wie ein Türschloss vorstellen, das standardmäßig verhindert, dass unbekannte, potenziell gefährliche Skripte einfach durch Doppelklick ausgeführt werden. Das schützt davor, versehentlich schädlichen Code zu starten – kann aber auch legitime Entwickler-Skripte blockieren, wenn die Einstellung zu restriktiv ist.",
    beispiel:
      "Ein neu installiertes Entwicklertool liefert ein PowerShell-Setup-Skript mit, das beim ersten Ausführen mit einer Fehlermeldung zur Execution Policy blockiert wird, bis die Richtlinie angepasst wird.",
    wannVerwendet:
      "Wenn ein PowerShell-Skript mit einer Sicherheitsmeldung nicht startet – dann lohnt ein bewusster, informierter Blick auf die aktuelle Execution Policy, statt sie blind zu lockern.",
    befehl: "Get-ExecutionPolicy",
    icon: "🔒",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-powershell"],
    uebersetzungen: {
      en: {
        begriff: "Execution Policy",
        kurzerklaerung:
          "The Execution Policy is a PowerShell security setting that determines whether, and which, scripts are allowed to run on a machine.",
        erklaerung:
          "Think of the Execution Policy as a door lock that by default prevents unknown, potentially dangerous scripts from simply running with a double-click. It protects against accidentally launching harmful code — but it can also block legitimate developer scripts if the setting is too restrictive.",
        beispiel:
          "A freshly installed developer tool comes with a PowerShell setup script that gets blocked the first time it's run, with an error message about the Execution Policy, until the policy is adjusted.",
        wannVerwendet:
          "When a PowerShell script refuses to start due to a security message — that's the moment for a deliberate, informed look at the current Execution Policy, rather than just loosening it blindly.",
      },
      es: {
        begriff: "Execution Policy",
        kurzerklaerung:
          "La Execution Policy es un ajuste de seguridad de PowerShell que determina si se pueden ejecutar scripts en un equipo y cuáles.",
        erklaerung:
          "Puedes imaginar la política de ejecución como una cerradura que, por defecto, impide que scripts desconocidos y potencialmente peligrosos se ejecuten sin más con un doble clic. Esto protege de lanzar código dañino por accidente, pero también puede bloquear scripts legítimos de desarrollo si el ajuste es demasiado restrictivo.",
        beispiel:
          "Una herramienta de desarrollo recién instalada incluye un script de configuración de PowerShell que, al ejecutarlo por primera vez, queda bloqueado con un mensaje de error sobre la política de ejecución, hasta que se ajusta dicha política.",
        wannVerwendet:
          "Cuando un script de PowerShell no se inicia por un aviso de seguridad: ahí conviene echar un vistazo consciente e informado a la política de ejecución actual, en lugar de relajarla a ciegas.",
      },
    },
  },
];
