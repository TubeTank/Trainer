import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-build-tools-bundler";

export const buildToolsBundlerLernkarten: Lernkarte[] = [
  {
    id: "lk-bundler",
    kategorieId: KATEGORIE_ID,
    begriff: "Bundler",
    kurzerklaerung:
      "Ein Bundler fasst viele einzelne Code- und Ressourcendateien eines Projekts zu wenigen, für den Browser optimierten Dateien zusammen.",
    erklaerung:
      "Man kann sich einen Bundler wie eine Packstation vorstellen: Ein Projekt besteht oft aus hunderten einzelnen Zutaten – JavaScript-Dateien, Bilder, Stylesheets –, die alle einzeln nachzuliefern viel zu langsam wäre. Der Bundler packt alles sinnvoll zu wenigen, kompakten Paketen zusammen, die der Browser effizient laden kann.",
    beispiel:
      "Ein Projekt mit 80 einzelnen TypeScript-Dateien wird vom Bundler zu zwei oder drei JavaScript-Dateien zusammengefasst, die die Website tatsächlich an den Browser ausliefert.",
    wannVerwendet:
      "Immer wenn ein Webprojekt für die Auslieferung vorbereitet wird – meist unsichtbar im Hintergrund, ausgelöst durch einen Build- oder Start-Befehl.",
    uebersetzungen: {
      en: {
        begriff: "Bundler",
        kurzerklaerung:
          "A bundler combines many individual code and asset files of a project into a few files optimized for the browser.",
        erklaerung:
          "Think of a bundler like a packing station: a project often consists of hundreds of individual ingredients – JavaScript files, images, stylesheets – and delivering each one separately would be far too slow. The bundler sensibly packs everything into a few compact packages that the browser can load efficiently.",
        beispiel:
          "A project with 80 individual TypeScript files gets combined by the bundler into two or three JavaScript files that are actually delivered to the browser.",
        wannVerwendet:
          "Whenever a web project is being prepared for delivery – usually invisibly in the background, triggered by a build or start command.",
      },
      es: {
        begriff: "Bundler",
        kurzerklaerung:
          "Un bundler combina muchos archivos individuales de código y recursos de un proyecto en unos pocos archivos optimizados para el navegador.",
        erklaerung:
          "Puedes imaginar un bundler como una estación de empaquetado: un proyecto suele estar compuesto por cientos de ingredientes individuales -archivos JavaScript, imágenes, hojas de estilo- que sería demasiado lento entregar uno por uno. El bundler los agrupa de forma inteligente en unos pocos paquetes compactos que el navegador puede cargar de manera eficiente.",
        beispiel:
          "Un proyecto con 80 archivos TypeScript individuales es combinado por el bundler en dos o tres archivos JavaScript que son los que realmente se entregan al navegador.",
        wannVerwendet:
          "Siempre que se prepara un proyecto web para su entrega, normalmente de forma invisible en segundo plano, activado por un comando de build o de inicio.",
      },
    },
    icon: "📦",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-vite", "lk-dist-ordner", "lk-minifizierung"],
  },
  {
    id: "lk-vite",
    kategorieId: KATEGORIE_ID,
    begriff: "Vite",
    kurzerklaerung:
      "Vite ist ein modernes Build-Werkzeug, das einen schnellen Entwicklungsserver und einen Bundler für die fertige Anwendung in einem Paket vereint.",
    erklaerung:
      "Vite ist wie eine gut sortierte Werkstatt, die zwei Werkzeuge in einem Griff vereint: eines zum schnellen Ausprobieren während der Arbeit, eines zum sauberen Verpacken des fertigen Ergebnisses. Während der Entwicklung liefert Vite Änderungen fast augenblicklich an den Browser, für die Auslieferung baut es daraus ein optimiertes Paket.",
    beispiel:
      "Dieses Trainer-Projekt selbst nutzt Vite: Während der Entwicklung startet man den Server mit npm run dev, für die fertige Anwendung erzeugt npm run build ein optimiertes Paket im dist-Ordner.",
    wannVerwendet:
      "Beim Start eines neuen Webprojekts als Grundgerüst sowie täglich beim lokalen Entwickeln und beim finalen Erstellen der Anwendung.",
    uebersetzungen: {
      en: {
        begriff: "Vite",
        kurzerklaerung:
          "Vite is a modern build tool that combines a fast dev server and a bundler for the finished application in a single package.",
        erklaerung:
          "Vite is like a well-organized workshop that combines two tools in one: one for quickly trying things out while you work, one for neatly packaging the finished result. During development, Vite delivers changes to the browser almost instantly; for deployment, it builds an optimized package from your code.",
        beispiel:
          "This trainer project itself uses Vite: during development you start the server with npm run dev, and for the finished application npm run build creates an optimized package in the dist folder.",
        wannVerwendet:
          "When starting a new web project as the foundation, as well as daily during local development and when finally building the application.",
      },
      es: {
        begriff: "Vite",
        kurzerklaerung:
          "Vite es una herramienta de compilación moderna que combina un servidor de desarrollo rápido y un bundler para la aplicación terminada en un solo paquete.",
        erklaerung:
          "Vite es como un taller bien organizado que reúne dos herramientas en una: una para probar cosas rápidamente mientras trabajas, otra para empaquetar limpiamente el resultado final. Durante el desarrollo, Vite entrega los cambios al navegador casi al instante; para la entrega, construye a partir de ello un paquete optimizado.",
        beispiel:
          "Este propio proyecto Trainer utiliza Vite: durante el desarrollo se inicia el servidor con npm run dev, y para la aplicación terminada, npm run build genera un paquete optimizado en la carpeta dist.",
        wannVerwendet:
          "Al iniciar un nuevo proyecto web como base, así como a diario durante el desarrollo local y al generar la versión final de la aplicación.",
      },
    },
    befehl: "npm run dev",
    icon: "⚡",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-bundler", "lk-dev-server", "lk-hot-module-replacement"],
  },
  {
    id: "lk-transpilation",
    kategorieId: KATEGORIE_ID,
    begriff: "Transpilation",
    kurzerklaerung:
      "Transpilation ist die automatische Übersetzung von Code aus einer modernen oder erweiterten Sprachvariante in eine Form, die möglichst viele Umgebungen verstehen.",
    erklaerung:
      "Transpilation funktioniert wie eine Übersetzung zwischen zwei eng verwandten Sprachen: Der Code wird nicht in etwas völlig anderes verwandelt, sondern nur in eine gleichwertige Form gebracht, die auch ältere oder andere Umgebungen verstehen. So schreibt man TypeScript mit modernen Sprachfeatures, während am Ende ganz gewöhnliches JavaScript herauskommt, das jeder Browser ausführen kann.",
    beispiel:
      "Der TypeScript-Code einer Lernkarten-Komponente mit Typangaben wird beim Build zu reinem JavaScript ohne Typen transpiliert, das der Browser direkt ausführen kann.",
    wannVerwendet:
      "Automatisch bei jedem Build- oder Entwicklungsvorgang, sobald Code in TypeScript oder einer anderen Sprache geschrieben wird, die der Browser nicht direkt versteht.",
    uebersetzungen: {
      en: {
        begriff: "Transpilation",
        kurzerklaerung:
          "Transpilation is the automatic translation of code from a modern or extended language variant into a form that as many environments as possible can understand.",
        erklaerung:
          "Transpilation works like a translation between two closely related languages: the code isn't turned into something completely different, just brought into an equivalent form that older or other environments can also understand. This way you write TypeScript with modern language features, while what comes out in the end is plain JavaScript that every browser can run.",
        beispiel:
          "The TypeScript code of a flashcard component, including type annotations, is transpiled during the build into plain JavaScript without types, which the browser can run directly.",
        wannVerwendet:
          "Automatically during every build or development process, whenever code is written in TypeScript or another language that the browser doesn't understand directly.",
      },
      es: {
        begriff: "Transpilación",
        kurzerklaerung:
          "La transpilación es la traducción automática de código desde una variante de lenguaje moderna o ampliada a una forma que el mayor número posible de entornos pueda entender.",
        erklaerung:
          "La transpilación funciona como una traducción entre dos idiomas estrechamente emparentados: el código no se convierte en algo completamente distinto, sino que simplemente se lleva a una forma equivalente que también entienden entornos más antiguos u otros. Así se escribe TypeScript con características modernas del lenguaje, mientras que al final se obtiene JavaScript puro que cualquier navegador puede ejecutar.",
        beispiel:
          "El código TypeScript de un componente de tarjeta de aprendizaje, con sus anotaciones de tipo, se transpila durante el build a JavaScript puro sin tipos, que el navegador puede ejecutar directamente.",
        wannVerwendet:
          "Automáticamente en cada proceso de build o desarrollo, en cuanto se escribe código en TypeScript u otro lenguaje que el navegador no entiende directamente.",
      },
    },
    icon: "🔄",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-typescript", "lk-bundler"],
  },
  {
    id: "lk-hot-module-replacement",
    kategorieId: KATEGORIE_ID,
    begriff: "Hot Module Replacement",
    kurzerklaerung:
      "Hot Module Replacement (HMR) ersetzt geänderte Code-Teile direkt im laufenden Browser, ohne die ganze Seite neu zu laden.",
    erklaerung:
      "Man kann sich HMR wie den Austausch einer einzelnen Glühbirne in einem beleuchteten Raum vorstellen, statt den Raum komplett abzudunkeln und neu zu beleuchten: Nur das geänderte Teil wird ersetzt, der restliche Zustand der Anwendung – etwa ausgefüllte Formularfelder – bleibt erhalten. Das macht das Entwickeln spürbar flüssiger und schneller.",
    beispiel:
      "Während der Trainer-Entwicklung wird der Text einer Lernkarten-Komponente geändert und gespeichert – die Ansicht im Browser aktualisiert sich sofort, ohne dass die Seite neu lädt oder der aktuell geöffnete Karteikartenstapel verloren geht.",
    wannVerwendet:
      "Ständig während der lokalen Entwicklung mit laufendem Entwicklungsserver, bei jedem Speichern einer Datei.",
    uebersetzungen: {
      en: {
        begriff: "Hot Module Replacement",
        kurzerklaerung:
          "Hot Module Replacement (HMR) replaces changed pieces of code directly in the running browser, without reloading the whole page.",
        erklaerung:
          "You can think of HMR like swapping a single light bulb in a lit room instead of turning off the whole room and lighting it again from scratch: only the changed part gets replaced, while the rest of the application's state – such as filled-in form fields – is preserved. This makes development noticeably smoother and faster.",
        beispiel:
          "While developing the trainer, the text of a flashcard component is changed and saved – the view in the browser updates instantly, without the page reloading or the currently open flashcard deck being lost.",
        wannVerwendet:
          "Constantly during local development with the dev server running, every time a file is saved.",
      },
      es: {
        begriff: "Hot Module Replacement",
        kurzerklaerung:
          "Hot Module Replacement (HMR) sustituye las partes de código modificadas directamente en el navegador en ejecución, sin recargar toda la página.",
        erklaerung:
          "Puedes imaginar el HMR como cambiar una sola bombilla en una habitación iluminada, en lugar de apagar toda la habitación y volver a encenderla desde cero: solo se sustituye la parte modificada, mientras que el resto del estado de la aplicación -como campos de formulario ya rellenados- se conserva. Esto hace que el desarrollo sea notablemente más fluido y rápido.",
        beispiel:
          "Durante el desarrollo del Trainer se cambia y guarda el texto de un componente de tarjeta de aprendizaje: la vista en el navegador se actualiza al instante, sin que la página se recargue ni se pierda el mazo de tarjetas actualmente abierto.",
        wannVerwendet:
          "Constantemente durante el desarrollo local con el servidor de desarrollo en marcha, cada vez que se guarda un archivo.",
      },
    },
    icon: "🔥",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-dev-server", "lk-vite"],
  },
  {
    id: "lk-minifizierung",
    kategorieId: KATEGORIE_ID,
    begriff: "Minifizierung",
    kurzerklaerung:
      "Minifizierung entfernt aus fertigem Code alles, was nur für Menschen wichtig ist, um die Dateigröße für die Auslieferung zu verkleinern.",
    erklaerung:
      "Minifizierung ist wie das Kürzen eines ausführlichen Briefs auf ein Telegramm: Leerzeichen, Zeilenumbrüche, Kommentare und lange, sprechende Variablennamen werden entfernt oder durch kürzere ersetzt, weil der Computer sie nicht braucht – nur Menschen beim Lesen. Das Ergebnis ist funktional identisch, aber deutlich kleiner und schneller zu laden.",
    beispiel:
      "Eine JavaScript-Datei mit 500 Kilobyte gut lesbarem, kommentiertem Code wird beim Build auf 120 Kilobyte minifizierten, für Menschen kaum noch lesbaren Code reduziert.",
    wannVerwendet:
      "Automatisch beim Erstellen der finalen, für die Veröffentlichung bestimmten Version einer Anwendung, nicht während der lokalen Entwicklung.",
    uebersetzungen: {
      en: {
        begriff: "Minification",
        kurzerklaerung:
          "Minification removes everything from finished code that only matters to humans, in order to shrink the file size for delivery.",
        erklaerung:
          "Minification is like shortening a lengthy letter down to a telegram: whitespace, line breaks, comments, and long, descriptive variable names are removed or replaced with shorter ones, because the computer doesn't need them – only humans reading the code do. The result is functionally identical, but noticeably smaller and faster to load.",
        beispiel:
          "A JavaScript file of 500 kilobytes of well-readable, commented code gets reduced during the build to 120 kilobytes of minified code that's barely readable for humans anymore.",
        wannVerwendet:
          "Automatically when creating the final, publication-ready version of an application, not during local development.",
      },
      es: {
        begriff: "Minificación",
        kurzerklaerung:
          "La minificación elimina del código terminado todo lo que solo importa a las personas, para reducir el tamaño del archivo de cara a la entrega.",
        erklaerung:
          "La minificación es como reducir una carta extensa a un telegrama: los espacios en blanco, los saltos de línea, los comentarios y los nombres de variables largos y descriptivos se eliminan o se sustituyen por otros más cortos, porque el ordenador no los necesita, solo las personas al leer el código. El resultado es funcionalmente idéntico, pero considerablemente más pequeño y rápido de cargar.",
        beispiel:
          "Un archivo JavaScript de 500 kilobytes de código bien legible y comentado se reduce durante el build a 120 kilobytes de código minificado, apenas legible ya para una persona.",
        wannVerwendet:
          "Automáticamente al generar la versión final lista para publicar de una aplicación, no durante el desarrollo local.",
      },
    },
    icon: "🗜️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-bundler", "lk-dist-ordner"],
  },
  {
    id: "lk-source-map",
    kategorieId: KATEGORIE_ID,
    begriff: "Source Map",
    kurzerklaerung:
      "Eine Source Map ist eine Übersetzungstabelle, die minifizierten oder transpilierten Code wieder dem ursprünglichen Quellcode zuordnet.",
    erklaerung:
      "Eine Source Map ist wie ein Lageplan, der von der fertig gedruckten Landkarte zurück zu den ursprünglichen Bauplänen führt: Ohne sie sähe man im Browser nur unleserlichen, minifizierten Code, mit ihr zeigt die Fehlermeldung genau die passende Zeile im lesbaren Original-Quellcode. Das macht das Aufspüren von Fehlern in der fertigen Anwendung erst praktikabel.",
    beispiel:
      "Ein Fehler tritt in der live geschalteten Anwendung auf. Dank der zugehörigen Source Map zeigt der Browser trotz minifiziertem Code die exakte Zeile in der ursprünglichen TypeScript-Datei an.",
    wannVerwendet:
      "Beim Debuggen einer gebauten Anwendung im Browser sowie automatisch, wenn der Bundler beim Erstellen des Builds Source Maps mit erzeugt.",
    uebersetzungen: {
      en: {
        begriff: "Source Map",
        kurzerklaerung:
          "A source map is a translation table that maps minified or transpiled code back to the original source code.",
        erklaerung:
          "A source map is like a plan that leads from the finished printed map back to the original blueprints: without it, you'd only see unreadable, minified code in the browser; with it, an error message points to exactly the right line in the readable original source code. This is what makes tracking down bugs in the finished application actually practical.",
        beispiel:
          "An error occurs in the live application. Thanks to the corresponding source map, the browser shows the exact line in the original TypeScript file despite the minified code.",
        wannVerwendet:
          "When debugging a built application in the browser, as well as automatically whenever the bundler also generates source maps while creating the build.",
      },
      es: {
        begriff: "Source Map",
        kurzerklaerung:
          "Un source map es una tabla de traducción que vincula el código minificado o transpilado con el código fuente original.",
        erklaerung:
          "Un source map es como un plano que lleva desde el mapa impreso final de vuelta a los planos originales: sin él, en el navegador solo se vería código minificado e ilegible; con él, el mensaje de error señala exactamente la línea correspondiente en el código fuente original y legible. Esto es lo que hace realmente viable localizar errores en la aplicación terminada.",
        beispiel:
          "Se produce un error en la aplicación publicada. Gracias al source map correspondiente, el navegador muestra la línea exacta en el archivo TypeScript original a pesar del código minificado.",
        wannVerwendet:
          "Al depurar una aplicación ya compilada en el navegador, así como automáticamente cuando el bundler genera también source maps al crear el build.",
      },
    },
    icon: "🗺️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-minifizierung", "lk-transpilation", "lk-dist-ordner"],
  },
  {
    id: "lk-dist-ordner",
    kategorieId: KATEGORIE_ID,
    begriff: "Dist-Ordner (Build-Artefakt)",
    kurzerklaerung:
      "Der Dist-Ordner enthält die fertig gebaute, auslieferbare Version einer Anwendung – das Ergebnis des Build-Vorgangs.",
    erklaerung:
      "Der Dist-Ordner ist wie das fertig verpackte Produkt am Ende eines Fließbands, während der übrige Quellcode eher den Werkstattbereich mit Rohmaterial und Werkzeugen darstellt. Er wird nicht von Hand geschrieben, sondern bei jedem Build automatisch neu erzeugt, und genau diesen Ordner lädt man später auf einen Webserver hoch.",
    beispiel:
      "Nach npm run build entsteht im Trainer-Projekt ein Ordner namens dist mit optimierten HTML-, CSS- und JavaScript-Dateien, die direkt auf einen Webserver hochgeladen werden können.",
    wannVerwendet:
      "Nach jedem Build-Vorgang, insbesondere kurz vor der Veröffentlichung einer neuen Version der Anwendung.",
    uebersetzungen: {
      en: {
        begriff: "Dist Folder (Build Artifact)",
        kurzerklaerung:
          "The dist folder contains the finished, deployable version of an application – the result of the build process.",
        erklaerung:
          "The dist folder is like the finished, packaged product at the end of an assembly line, while the rest of the source code is more like the workshop area with raw materials and tools. It isn't written by hand but regenerated automatically with every build, and it's exactly this folder that you later upload to a web server.",
        beispiel:
          "After npm run build, a folder named dist is created in the trainer project containing optimized HTML, CSS, and JavaScript files that can be uploaded directly to a web server.",
        wannVerwendet:
          "After every build process, especially shortly before publishing a new version of the application.",
      },
      es: {
        begriff: "Carpeta dist (artefacto de build)",
        kurzerklaerung:
          "La carpeta dist contiene la versión terminada y lista para publicar de una aplicación: el resultado del proceso de build.",
        erklaerung:
          "La carpeta dist es como el producto ya empaquetado al final de una cadena de montaje, mientras que el resto del código fuente es más bien la zona de taller con materiales en bruto y herramientas. No se escribe a mano, sino que se regenera automáticamente en cada build, y es precisamente esta carpeta la que después se sube a un servidor web.",
        beispiel:
          "Tras ejecutar npm run build, en el proyecto Trainer se crea una carpeta llamada dist con archivos HTML, CSS y JavaScript optimizados que se pueden subir directamente a un servidor web.",
        wannVerwendet:
          "Después de cada proceso de build, especialmente poco antes de publicar una nueva versión de la aplicación.",
      },
    },
    befehl: "npm run build",
    icon: "🏗️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-bundler", "lk-minifizierung", "lk-vite"],
  },
  {
    id: "lk-dev-server",
    kategorieId: KATEGORIE_ID,
    begriff: "Entwicklungsserver (Dev Server)",
    kurzerklaerung:
      "Der Entwicklungsserver liefert die Anwendung während der Entwicklung lokal im Browser aus und aktualisiert sie bei Änderungen automatisch.",
    erklaerung:
      "Der Entwicklungsserver ist wie eine private Testbühne im eigenen Wohnzimmer: Man kann dort ein Stück proben und sofort sehen, wie es wirkt, ohne es schon vor echtem Publikum aufzuführen. Er läuft nur auf dem eigenen Rechner, meist unter einer Adresse wie localhost, und ist nicht für andere Nutzer im Internet gedacht.",
    beispiel:
      "Mit npm run dev startet der Trainer lokal auf http://localhost:5173 – dort kann man die Lernkarten-App im Browser testen, während man am Code arbeitet.",
    wannVerwendet:
      "Bei jeder lokalen Entwicklungssitzung, meist direkt nach dem Öffnen des Projekts als einer der ersten Schritte.",
    uebersetzungen: {
      en: {
        begriff: "Dev Server",
        kurzerklaerung:
          "The dev server delivers the application locally in the browser during development and automatically updates it whenever changes are made.",
        erklaerung:
          "The dev server is like a private test stage in your own living room: you can rehearse a piece there and immediately see how it works, without performing it in front of a real audience yet. It only runs on your own machine, usually under an address like localhost, and isn't meant for other users on the internet.",
        beispiel:
          "With npm run dev, the trainer starts locally at http://localhost:5173 – there you can test the flashcard app in the browser while working on the code.",
        wannVerwendet:
          "During every local development session, usually right after opening the project as one of the first steps.",
      },
      es: {
        begriff: "Servidor de desarrollo",
        kurzerklaerung:
          "El servidor de desarrollo entrega la aplicación localmente en el navegador durante el desarrollo y la actualiza automáticamente con cada cambio.",
        erklaerung:
          "El servidor de desarrollo es como un escenario de pruebas privado en el propio salón de casa: allí se puede ensayar una pieza y ver de inmediato cómo funciona, sin representarla todavía ante un público real. Solo se ejecuta en el propio ordenador, normalmente bajo una dirección como localhost, y no está pensado para otros usuarios en internet.",
        beispiel:
          "Con npm run dev, el Trainer se inicia localmente en http://localhost:5173: allí se puede probar la aplicación de tarjetas de aprendizaje en el navegador mientras se trabaja en el código.",
        wannVerwendet:
          "En cada sesión de desarrollo local, normalmente justo después de abrir el proyecto, como uno de los primeros pasos.",
      },
    },
    befehl: "npm run dev",
    icon: "🖥️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-vite", "lk-hot-module-replacement"],
  },
  {
    id: "lk-typescript",
    kategorieId: KATEGORIE_ID,
    begriff: "TypeScript",
    kurzerklaerung:
      "TypeScript ist eine Erweiterung von JavaScript um ein Typsystem, das Fehler schon beim Schreiben des Codes statt erst beim Ausführen aufdeckt.",
    erklaerung:
      "TypeScript ist wie ein Formular mit klar beschrifteten Feldern statt eines leeren Blattes Papier: Man legt vorab fest, welche Art von Wert – etwa Zahl, Text oder eine bestimmte Struktur – an welcher Stelle erwartet wird, und bekommt sofort eine Warnung, wenn etwas nicht dazu passt. JavaScript selbst kennt solche Vorgaben nicht und würde den Fehler oft erst beim Ausführen zeigen.",
    beispiel:
      "Im Trainer-Projekt legt das Interface Lernkarte fest, dass begriff immer ein Text sein muss – versucht jemand versehentlich eine Zahl einzutragen, meldet TypeScript den Fehler schon beim Programmieren, nicht erst beim Testen im Browser.",
    wannVerwendet:
      "Beim Schreiben von Code in jedem TypeScript-Projekt, unterstützt durch den Editor bereits während des Tippens, zusätzlich abgesichert beim Build.",
    uebersetzungen: {
      en: {
        begriff: "TypeScript",
        kurzerklaerung:
          "TypeScript is an extension of JavaScript with a type system that catches errors while the code is being written instead of only when it runs.",
        erklaerung:
          "TypeScript is like a form with clearly labeled fields instead of a blank sheet of paper: you specify in advance what kind of value – a number, text, or a certain structure – is expected in a given spot, and get an immediate warning if something doesn't fit. JavaScript itself has no such rules and would often only reveal the error when the code actually runs.",
        beispiel:
          "In the trainer project, the Lernkarte interface specifies that begriff must always be text – if someone accidentally tries to enter a number, TypeScript reports the error right while coding, not only later when testing in the browser.",
        wannVerwendet:
          "While writing code in any TypeScript project, supported by the editor already while typing, and additionally checked during the build.",
      },
      es: {
        begriff: "TypeScript",
        kurzerklaerung:
          "TypeScript es una extensión de JavaScript con un sistema de tipos que detecta errores ya al escribir el código, en lugar de solo al ejecutarlo.",
        erklaerung:
          "TypeScript es como un formulario con campos claramente etiquetados en lugar de una hoja de papel en blanco: se define de antemano qué tipo de valor -un número, un texto o una estructura determinada- se espera en cada lugar, y se recibe una advertencia inmediata si algo no encaja. El propio JavaScript no conoce este tipo de reglas y a menudo solo mostraría el error al ejecutar el código.",
        beispiel:
          "En el proyecto Trainer, la interfaz Lernkarte establece que begriff siempre debe ser un texto: si alguien intenta introducir por error un número, TypeScript señala el error ya mientras se programa, no solo al probarlo después en el navegador.",
        wannVerwendet:
          "Al escribir código en cualquier proyecto TypeScript, con apoyo del editor ya mientras se teclea, y comprobado adicionalmente durante el build.",
      },
    },
    icon: "🔷",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-transpilation", "lk-vite"],
  },
];
