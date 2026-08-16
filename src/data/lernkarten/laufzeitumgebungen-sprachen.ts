import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-laufzeitumgebungen-sprachen";

export const laufzeitumgebungenSprachenLernkarten: Lernkarte[] = [
  {
    id: "lk-laufzeitumgebung",
    kategorieId: KATEGORIE_ID,
    begriff: "Laufzeitumgebung (Runtime)",
    kurzerklaerung:
      "Eine Laufzeitumgebung ist das Programm, das im Hintergrund läuft und dafür sorgt, dass Quellcode auf dem Computer tatsächlich ausgeführt wird.",
    erklaerung:
      "Man kann sich eine Laufzeitumgebung wie eine Bühne mit Technik vorstellen, auf der ein geschriebenes Theaterstück (der Quellcode) erst wirklich aufgeführt wird. Ohne die passende Bühnentechnik bleibt das Stück nur Text auf Papier. Node.js ist z. B. die Laufzeitumgebung für JavaScript außerhalb des Browsers.",
    beispiel:
      "Ein JavaScript-Programm kann dank Node.js auch auf einem Server laufen, nicht nur im Browser – Node.js liefert dafür die notwendige Laufzeitumgebung.",
    wannVerwendet:
      "Immer im Hintergrund vorhanden, sobald Code ausgeführt wird – die Wahl der Laufzeitumgebung entscheidet, welche Sprache man dafür verwenden kann.",
    icon: "🏃",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-nodejs"],
    uebersetzungen: {
      en: {
        begriff: "Runtime",
        kurzerklaerung:
          "A runtime is the program that runs in the background and actually executes source code on the computer.",
        erklaerung:
          "Think of a runtime as a stage with all the technical equipment needed to actually perform a written play (the source code). Without the right stage setup, the play stays just text on paper. Node.js, for example, is the runtime for JavaScript outside the browser.",
        beispiel:
          "Thanks to Node.js, a JavaScript program can also run on a server, not just in the browser — Node.js provides the runtime it needs.",
        wannVerwendet:
          "Always present in the background whenever code is executed — the choice of runtime determines which language can be used.",
      },
      es: {
        begriff: "Entorno de ejecución",
        kurzerklaerung:
          "Un entorno de ejecución es el programa que se ejecuta en segundo plano y hace que el código fuente realmente se ejecute en el ordenador.",
        erklaerung:
          "Puedes imaginar un entorno de ejecución como un escenario con toda la tecnología necesaria para representar una obra de teatro ya escrita (el código fuente). Sin el equipo técnico adecuado, la obra se queda solo en texto sobre el papel. Node.js, por ejemplo, es el entorno de ejecución de JavaScript fuera del navegador.",
        beispiel:
          "Gracias a Node.js, un programa en JavaScript también puede ejecutarse en un servidor y no solo en el navegador: Node.js proporciona el entorno de ejecución necesario.",
        wannVerwendet:
          "Siempre está presente en segundo plano cuando se ejecuta código; la elección del entorno de ejecución determina qué lenguaje se puede usar.",
      },
    },
  },
  {
    id: "lk-nodejs",
    kategorieId: KATEGORIE_ID,
    begriff: "Node.js",
    kurzerklaerung:
      "Node.js ist eine Laufzeitumgebung, mit der JavaScript-Code auch außerhalb eines Browsers ausgeführt werden kann, z. B. auf einem Server oder lokalen Rechner.",
    erklaerung:
      "Node.js ist wie eine zusätzliche Bühne für eine Sprache, die ursprünglich nur für den Browser gedacht war: Dank Node.js kann JavaScript auch Server betreiben, Dateien lesen oder Build-Werkzeuge wie Vite antreiben. Viele moderne Web-Projekte – auch dieses Trainer-Projekt – laufen während der Entwicklung über Node.js.",
    beispiel:
      "Der Befehl „npm run build“ in diesem Projekt wird von Node.js ausgeführt, um TypeScript zu prüfen und die Anwendung zu bauen.",
    wannVerwendet:
      "Bei der lokalen Entwicklung von Web-Projekten: zum Ausführen von Build-Tools, Skripten und Entwicklungsservern.",
    befehl: "node --version",
    icon: "🟩",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-laufzeitumgebung", "lk-npm"],
    uebersetzungen: {
      en: {
        begriff: "Node.js",
        kurzerklaerung:
          "Node.js is a runtime that lets JavaScript code run outside a browser too, for example on a server or a local machine.",
        erklaerung:
          "Node.js is like an extra stage for a language that was originally meant only for the browser: thanks to Node.js, JavaScript can also run servers, read files, or power build tools like Vite. Many modern web projects — including this trainer project — run on Node.js during development.",
        beispiel:
          'The command "npm run build" in this project is executed by Node.js to check TypeScript and build the application.',
        wannVerwendet:
          "During local development of web projects: for running build tools, scripts, and development servers.",
      },
      es: {
        begriff: "Node.js",
        kurzerklaerung:
          "Node.js es un entorno de ejecución que permite ejecutar código JavaScript también fuera de un navegador, por ejemplo en un servidor o en un ordenador local.",
        erklaerung:
          "Node.js es como un escenario adicional para un lenguaje que originalmente solo estaba pensado para el navegador: gracias a Node.js, JavaScript también puede gestionar servidores, leer archivos o impulsar herramientas de compilación como Vite. Muchos proyectos web modernos, incluido este proyecto de entrenamiento, se ejecutan sobre Node.js durante el desarrollo.",
        beispiel:
          "El comando «npm run build» en este proyecto es ejecutado por Node.js para comprobar TypeScript y compilar la aplicación.",
        wannVerwendet:
          "Durante el desarrollo local de proyectos web: para ejecutar herramientas de compilación, scripts y servidores de desarrollo.",
      },
    },
  },
  {
    id: "lk-python",
    kategorieId: KATEGORIE_ID,
    begriff: "Python",
    kurzerklaerung:
      "Python ist eine vielseitige, gut lesbare Programmiersprache, die häufig für Automatisierung, Datenanalyse und Backend-Systeme genutzt wird.",
    erklaerung:
      "Python liest sich fast wie gut strukturiertes Alltagsenglisch und gilt deshalb als besonders einsteigerfreundlich. Ähnlich wie Node.js für JavaScript braucht auch Python eine eigene Laufzeitumgebung (den „Python-Interpreter“), um Code direkt auszuführen.",
    beispiel:
      "Ein kurzes Python-Skript liest automatisch eine Excel-Liste ein und erstellt daraus eine Zusammenfassung – ganz ohne manuelles Kopieren.",
    wannVerwendet:
      "Bei Automatisierungsaufgaben, Datenauswertung oder Backend-Logik, häufig auch im Umfeld von KI- und Datenanalyse-Werkzeugen.",
    befehl: "python --version",
    icon: "🐍",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-interpreter", "lk-pip"],
    uebersetzungen: {
      en: {
        begriff: "Python",
        kurzerklaerung:
          "Python is a versatile, easy-to-read programming language often used for automation, data analysis, and backend systems.",
        erklaerung:
          'Python reads almost like well-structured everyday English, which is why it\'s considered especially beginner-friendly. Like Node.js for JavaScript, Python also needs its own runtime (the "Python interpreter") to execute code directly.',
        beispiel:
          "A short Python script automatically reads in an Excel list and creates a summary from it — without any manual copying.",
        wannVerwendet:
          "For automation tasks, data analysis, or backend logic, often also in the context of AI and data-analysis tools.",
      },
      es: {
        begriff: "Python",
        kurzerklaerung:
          "Python es un lenguaje de programación versátil y fácil de leer, muy usado para automatización, análisis de datos y sistemas backend.",
        erklaerung:
          "Python se lee casi como un inglés cotidiano bien estructurado, por eso se considera especialmente apto para principiantes. Al igual que Node.js para JavaScript, Python también necesita su propio entorno de ejecución (el «intérprete de Python») para ejecutar código directamente.",
        beispiel:
          "Un breve script de Python lee automáticamente una lista de Excel y genera un resumen a partir de ella, sin necesidad de copiar nada a mano.",
        wannVerwendet:
          "En tareas de automatización, análisis de datos o lógica de backend, a menudo también en el entorno de herramientas de IA y análisis de datos.",
      },
    },
  },
  {
    id: "lk-compiler",
    kategorieId: KATEGORIE_ID,
    begriff: "Compiler",
    kurzerklaerung:
      "Ein Compiler übersetzt Quellcode vollständig im Voraus in eine Form, die der Computer direkt ausführen kann.",
    erklaerung:
      "Ein Compiler ist wie ein Übersetzer, der ein ganzes Buch komplett in eine andere Sprache überträgt, bevor es überhaupt gelesen wird. Erst danach entsteht das fertige, ausführbare Ergebnis. TypeScript wird beispielsweise von einem Compiler nach JavaScript übersetzt, bevor es im Browser läuft.",
    beispiel:
      "Beim Befehl „tsc“ in diesem Projekt übersetzt der TypeScript-Compiler den Quellcode und prüft ihn gleichzeitig auf Typfehler.",
    wannVerwendet:
      "Wenn Quellcode vor der Ausführung geprüft, optimiert oder in eine andere Sprache/Form übersetzt werden muss.",
    icon: "🏗️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-interpreter"],
    uebersetzungen: {
      en: {
        begriff: "Compiler",
        kurzerklaerung:
          "A compiler translates source code completely in advance into a form the computer can execute directly.",
        erklaerung:
          "A compiler is like a translator who translates an entire book into another language before anyone reads it. Only afterward does the finished, executable result exist. TypeScript, for example, is translated into JavaScript by a compiler before it runs in the browser.",
        beispiel:
          'With the "tsc" command in this project, the TypeScript compiler translates the source code while simultaneously checking it for type errors.',
        wannVerwendet:
          "When source code needs to be checked, optimized, or translated into another language/form before execution.",
      },
      es: {
        begriff: "Compilador",
        kurzerklaerung:
          "Un compilador traduce el código fuente por completo de antemano a una forma que el ordenador puede ejecutar directamente.",
        erklaerung:
          "Un compilador es como un traductor que traduce un libro entero a otro idioma antes de que nadie lo lea. Solo después existe el resultado final y ejecutable. TypeScript, por ejemplo, es traducido a JavaScript por un compilador antes de ejecutarse en el navegador.",
        beispiel:
          "Con el comando «tsc» en este proyecto, el compilador de TypeScript traduce el código fuente y, al mismo tiempo, lo revisa en busca de errores de tipo.",
        wannVerwendet:
          "Cuando el código fuente debe revisarse, optimizarse o traducirse a otro lenguaje o formato antes de ejecutarse.",
      },
    },
  },
  {
    id: "lk-interpreter",
    kategorieId: KATEGORIE_ID,
    begriff: "Interpreter",
    kurzerklaerung:
      "Ein Interpreter liest und führt Quellcode Zeile für Zeile direkt aus, ohne ihn vorher komplett zu übersetzen.",
    erklaerung:
      "Ein Interpreter ist wie ein Simultandolmetscher, der einen Vortrag Satz für Satz direkt live übersetzt, statt vorher das ganze Manuskript zu übertragen. Das macht den Start schneller, kann aber bei der Ausführung selbst etwas langsamer sein als vorkompilierter Code. Python-Code wird typischerweise so ausgeführt.",
    beispiel:
      "Startet man ein Python-Skript, liest der Python-Interpreter jede Zeile nacheinander ein und führt sie sofort aus.",
    wannVerwendet:
      "Bei Sprachen wie Python oder JavaScript, die typischerweise direkt ausgeführt werden, ohne einen separaten, vorgeschalteten Übersetzungsschritt für die gesamte Datei.",
    icon: "🗣️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-compiler", "lk-python"],
    uebersetzungen: {
      en: {
        begriff: "Interpreter",
        kurzerklaerung:
          "An interpreter reads and executes source code line by line directly, without translating it completely beforehand.",
        erklaerung:
          "An interpreter is like a simultaneous interpreter who translates a speech sentence by sentence live, instead of translating the whole manuscript beforehand. This makes starting up faster, but execution itself can be somewhat slower than precompiled code. Python code is typically executed this way.",
        beispiel:
          "When a Python script is started, the Python interpreter reads each line one after another and executes it immediately.",
        wannVerwendet:
          "For languages like Python or JavaScript, which are typically executed directly, without a separate translation step for the whole file beforehand.",
      },
      es: {
        begriff: "Intérprete",
        kurzerklaerung:
          "Un intérprete lee y ejecuta el código fuente línea por línea directamente, sin traducirlo por completo de antemano.",
        erklaerung:
          "Un intérprete es como un intérprete simultáneo que traduce un discurso frase por frase en directo, en lugar de traducir antes todo el manuscrito. Esto hace que el arranque sea más rápido, aunque la ejecución en sí pueda ser algo más lenta que la de un código precompilado. El código Python normalmente se ejecuta de esta forma.",
        beispiel:
          "Al iniciar un script de Python, el intérprete de Python lee cada línea una tras otra y la ejecuta de inmediato.",
        wannVerwendet:
          "En lenguajes como Python o JavaScript, que normalmente se ejecutan directamente, sin un paso de traducción previo y separado para todo el archivo.",
      },
    },
  },
  {
    id: "lk-package-manager",
    kategorieId: KATEGORIE_ID,
    begriff: "Package Manager",
    kurzerklaerung:
      "Ein Package Manager lädt fertige Code-Bausteine (Pakete/Bibliotheken) automatisch herunter, installiert sie und verwaltet ihre Versionen.",
    erklaerung:
      "Ein Package Manager ist wie ein Bestellsystem für ein Ersatzteillager: Statt jedes Bauteil selbst herzustellen, bestellt man es mit einem Befehl in der passenden Version – inklusive aller Teile, die dieses Bauteil selbst wieder benötigt. Jede Programmiersprache hat meist ihren eigenen Package Manager, z. B. npm für JavaScript oder pip für Python.",
    beispiel:
      "Statt eine Datumsbibliothek selbst zu schreiben, installiert ein Entwickler sie mit einem einzigen Befehl über den passenden Package Manager.",
    wannVerwendet:
      "Immer dann, wenn fremder, bereits fertiger Code (eine Bibliothek) in ein eigenes Projekt eingebunden werden soll.",
    icon: "📦",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-npm", "lk-pip"],
    uebersetzungen: {
      en: {
        begriff: "Package Manager",
        kurzerklaerung:
          "A package manager automatically downloads ready-made code building blocks (packages/libraries), installs them, and manages their versions.",
        erklaerung:
          "A package manager is like an ordering system for a spare-parts warehouse: instead of manufacturing every component yourself, you order it with a single command in the right version — including all the parts that component needs in turn. Almost every programming language has its own package manager, for example npm for JavaScript or pip for Python.",
        beispiel:
          "Instead of writing a date library themselves, a developer installs it with a single command through the appropriate package manager.",
        wannVerwendet:
          "Whenever ready-made code written by someone else (a library) needs to be included in your own project.",
      },
      es: {
        begriff: "Gestor de paquetes",
        kurzerklaerung:
          "Un gestor de paquetes descarga automáticamente bloques de código ya hechos (paquetes/bibliotecas), los instala y gestiona sus versiones.",
        erklaerung:
          "Un gestor de paquetes es como un sistema de pedidos para un almacén de piezas de repuesto: en lugar de fabricar cada componente uno mismo, se pide con un solo comando en la versión adecuada, incluidas todas las piezas que ese componente necesita a su vez. Casi cada lenguaje de programación tiene su propio gestor de paquetes, por ejemplo npm para JavaScript o pip para Python.",
        beispiel:
          "En lugar de escribir una biblioteca de fechas él mismo, un desarrollador la instala con un único comando a través del gestor de paquetes correspondiente.",
        wannVerwendet:
          "Siempre que se quiera incorporar a un proyecto propio código ya hecho por otra persona (una biblioteca).",
      },
    },
  },
  {
    id: "lk-npm",
    kategorieId: KATEGORIE_ID,
    begriff: "npm",
    kurzerklaerung:
      "npm (Node Package Manager) ist der Standard-Package-Manager für JavaScript- und TypeScript-Projekte im Node.js-Umfeld.",
    erklaerung:
      "npm ist die konkrete Bestellstelle für das riesige Lager an JavaScript-Bausteinen: Über die Datei „package.json“ merkt sich ein Projekt, welche Pakete in welcher Version benötigt werden, damit sie jederzeit erneut installiert werden können.",
    beispiel:
      "Mit „npm install“ lädt dieses Trainer-Projekt automatisch alle in „package.json“ eingetragenen Abhängigkeiten wie Vite und TypeScript herunter.",
    wannVerwendet:
      "Beim Einrichten eines JavaScript/TypeScript-Projekts sowie beim Hinzufügen, Aktualisieren oder Entfernen von Bibliotheken.",
    befehl: "npm install",
    icon: "🅝",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-package-manager", "lk-nodejs"],
    uebersetzungen: {
      en: {
        begriff: "npm",
        kurzerklaerung:
          "npm (Node Package Manager) is the standard package manager for JavaScript and TypeScript projects in the Node.js world.",
        erklaerung:
          'npm is the actual ordering desk for the huge warehouse of JavaScript building blocks: through the "package.json" file, a project keeps track of which packages are needed in which version, so they can be reinstalled at any time.',
        beispiel:
          'With "npm install", this trainer project automatically downloads all dependencies listed in "package.json", such as Vite and TypeScript.',
        wannVerwendet:
          "When setting up a JavaScript/TypeScript project, as well as when adding, updating, or removing libraries.",
      },
      es: {
        begriff: "npm",
        kurzerklaerung:
          "npm (Node Package Manager) es el gestor de paquetes estándar para proyectos de JavaScript y TypeScript en el entorno de Node.js.",
        erklaerung:
          "npm es el mostrador de pedidos concreto para el enorme almacén de bloques de código de JavaScript: mediante el archivo «package.json», un proyecto registra qué paquetes necesita y en qué versión, de modo que puedan volver a instalarse en cualquier momento.",
        beispiel:
          "Con «npm install», este proyecto de entrenamiento descarga automáticamente todas las dependencias registradas en «package.json», como Vite y TypeScript.",
        wannVerwendet:
          "Al configurar un proyecto de JavaScript/TypeScript, así como al añadir, actualizar o eliminar bibliotecas.",
      },
    },
  },
  {
    id: "lk-pip",
    kategorieId: KATEGORIE_ID,
    begriff: "pip",
    kurzerklaerung:
      "pip ist der Standard-Package-Manager für Python-Projekte und installiert Python-Bibliotheken aus dem Python Package Index (PyPI).",
    erklaerung:
      "pip ist für Python das, was npm für JavaScript ist: die zentrale Bestellstelle für fertige Code-Bausteine. Benötigte Pakete werden meist in einer Datei wie „requirements.txt“ festgehalten, damit ein Projekt auf einem anderen Rechner identisch eingerichtet werden kann.",
    beispiel:
      "Mit „pip install pandas“ installiert ein Entwickler die beliebte Python-Bibliothek für Datenanalyse in sein Projekt.",
    wannVerwendet:
      "Beim Einrichten eines Python-Projekts oder beim Hinzufügen einer Python-Bibliothek.",
    befehl: "pip install pandas",
    icon: "🐍",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-package-manager", "lk-python"],
    uebersetzungen: {
      en: {
        begriff: "pip",
        kurzerklaerung:
          "pip is the standard package manager for Python projects and installs Python libraries from the Python Package Index (PyPI).",
        erklaerung:
          'pip is to Python what npm is to JavaScript: the central ordering desk for ready-made code building blocks. Needed packages are usually recorded in a file such as "requirements.txt", so a project can be set up identically on another machine.',
        beispiel:
          'With "pip install pandas", a developer installs the popular Python library for data analysis into their project.',
        wannVerwendet:
          "When setting up a Python project or adding a Python library.",
      },
      es: {
        begriff: "pip",
        kurzerklaerung:
          "pip es el gestor de paquetes estándar para proyectos de Python e instala bibliotecas de Python desde el Python Package Index (PyPI).",
        erklaerung:
          "pip es para Python lo que npm es para JavaScript: el mostrador central de pedidos para bloques de código ya hechos. Los paquetes necesarios suelen registrarse en un archivo como «requirements.txt», para que un proyecto pueda configurarse de forma idéntica en otro ordenador.",
        beispiel:
          "Con «pip install pandas», un desarrollador instala en su proyecto la popular biblioteca de Python para análisis de datos.",
        wannVerwendet:
          "Al configurar un proyecto de Python o al añadir una biblioteca de Python.",
      },
    },
  },
  {
    id: "lk-versionsmanager",
    kategorieId: KATEGORIE_ID,
    begriff: "Versionsmanager (nvm/pyenv)",
    kurzerklaerung:
      "Ein Versionsmanager erlaubt es, mehrere Versionen derselben Laufzeitumgebung (z. B. verschiedene Node.js- oder Python-Versionen) parallel zu installieren und gezielt zu wechseln.",
    erklaerung:
      "Ein Versionsmanager ist wie ein Schrank mit mehreren Werkzeugversionen desselben Werkzeugs: Je nach Projekt greift man gezielt zur passenden Version, statt immer nur die eine installierte Version zu haben. Das ist wichtig, weil unterschiedliche Projekte manchmal unterschiedliche Versionen derselben Sprache benötigen.",
    beispiel:
      "Ein Entwickler nutzt „nvm“, um für ein altes Projekt kurzzeitig auf eine ältere Node.js-Version zu wechseln, ohne die aktuelle Version für andere Projekte zu verlieren.",
    wannVerwendet:
      "Wenn mehrere Projekte auf demselben Rechner unterschiedliche Versionen von Node.js, Python & Co. benötigen.",
    icon: "🔀",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-nodejs", "lk-python"],
    uebersetzungen: {
      en: {
        begriff: "Version Manager (nvm/pyenv)",
        kurzerklaerung:
          "A version manager makes it possible to install several versions of the same runtime (e.g. different Node.js or Python versions) side by side and switch between them as needed.",
        erklaerung:
          "A version manager is like a cabinet with several versions of the same tool: depending on the project, you reach for the right version instead of only ever having the one installed version. This matters because different projects sometimes need different versions of the same language.",
        beispiel:
          'A developer uses "nvm" to briefly switch to an older Node.js version for an old project, without losing the current version needed for other projects.',
        wannVerwendet:
          "When several projects on the same machine need different versions of Node.js, Python, and similar tools.",
      },
      es: {
        begriff: "Gestor de versiones (nvm/pyenv)",
        kurzerklaerung:
          "Un gestor de versiones permite instalar varias versiones del mismo entorno de ejecución (por ejemplo, distintas versiones de Node.js o Python) en paralelo y cambiar entre ellas según sea necesario.",
        erklaerung:
          "Un gestor de versiones es como un armario con varias versiones de la misma herramienta: según el proyecto, se recurre a la versión adecuada en lugar de tener siempre solo la única versión instalada. Esto es importante porque distintos proyectos a veces necesitan distintas versiones del mismo lenguaje.",
        beispiel:
          "Un desarrollador usa «nvm» para cambiar brevemente a una versión anterior de Node.js en un proyecto antiguo, sin perder la versión actual que necesita para otros proyectos.",
        wannVerwendet:
          "Cuando varios proyectos en el mismo ordenador necesitan distintas versiones de Node.js, Python y similares.",
      },
    },
  },
];
