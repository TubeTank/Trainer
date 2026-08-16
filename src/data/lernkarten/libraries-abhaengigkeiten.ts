import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-libraries-abhaengigkeiten";

export const librariesAbhaengigkeitenLernkarten: Lernkarte[] = [
  {
    id: "lk-bibliothek",
    kategorieId: KATEGORIE_ID,
    begriff: "Bibliothek (Library)",
    kurzerklaerung:
      "Eine Bibliothek ist fertiger, wiederverwendbarer Code, den man in ein eigenes Projekt einbindet, statt ihn selbst zu schreiben.",
    erklaerung:
      "Eine Bibliothek ist wie ein Fertigteil aus dem Baumarkt statt eines selbst gesägten Bauteils: Jemand anderes hat das Problem bereits gelöst, getestet und zur Wiederverwendung bereitgestellt. So muss man nicht jedes Rad neu erfinden, etwa für Datumsberechnungen oder Diagramme.",
    beispiel:
      "Statt eine eigene Funktion zum Formatieren von Datumsangaben zu schreiben, bindet ein Entwickler eine bewährte Datums-Bibliothek in sein Projekt ein.",
    wannVerwendet:
      "Immer dann, wenn eine Funktionalität benötigt wird, für die bereits eine bewährte, fertige Lösung existiert.",
    icon: "📚",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-package-json", "lk-abhaengigkeit"],
    uebersetzungen: {
      en: {
        begriff: "Library",
        kurzerklaerung:
          "A library is ready-made, reusable code that you plug into your own project instead of writing it yourself.",
        erklaerung:
          "A library is like a prefabricated part from the hardware store instead of a piece you cut yourself: someone else has already solved the problem, tested it, and made it available for reuse. That way you don't have to reinvent the wheel every time, for example for date calculations or charts.",
        beispiel:
          "Instead of writing his own function to format dates, a developer plugs a proven date library into his project.",
        wannVerwendet:
          "Whenever you need functionality for which a proven, ready-made solution already exists.",
      },
      es: {
        begriff: "Librería",
        kurzerklaerung:
          "Una librería es código ya hecho y reutilizable que se incorpora a un proyecto propio en lugar de escribirlo uno mismo.",
        erklaerung:
          "Una librería es como una pieza prefabricada de la ferretería en lugar de una tabla cortada a mano: otra persona ya resolvió el problema, lo probó y lo puso a disposición para reutilizarlo. Así no hay que reinventar la rueda cada vez, por ejemplo para cálculos de fechas o gráficos.",
        beispiel:
          "En lugar de escribir su propia función para formatear fechas, un desarrollador incorpora a su proyecto una librería de fechas ya probada.",
        wannVerwendet:
          "Siempre que se necesite una funcionalidad para la que ya existe una solución probada y lista para usar.",
      },
    },
  },
  {
    id: "lk-package-json",
    kategorieId: KATEGORIE_ID,
    begriff: "package.json",
    kurzerklaerung:
      "package.json ist die zentrale Konfigurationsdatei eines JavaScript/TypeScript-Projekts, die u. a. alle benötigten Bibliotheken auflistet.",
    erklaerung:
      "Man kann sich package.json wie das Inhaltsverzeichnis und die Zutatenliste eines Rezepts vorstellen: Sie beschreibt, wie das Projekt heißt, welche Befehle es gibt (z. B. „build“ oder „dev“) und welche Bibliotheken in welcher Version benötigt werden. Jeder, der das Projekt öffnet, weiß dadurch sofort, was installiert werden muss.",
    beispiel:
      "In diesem Trainer-Projekt legt package.json fest, dass Vite und TypeScript als Werkzeuge benötigt werden, sowie die Befehle „npm run dev“ und „npm run build“.",
    wannVerwendet:
      "Bei jedem JavaScript/TypeScript-Projekt vorhanden – man schaut hinein, um zu verstehen, welche Bibliotheken und Befehle ein Projekt nutzt.",
    icon: "📋",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-bibliothek", "lk-lockfile", "lk-abhaengigkeit"],
    uebersetzungen: {
      en: {
        begriff: "package.json",
        kurzerklaerung:
          "package.json is the central configuration file of a JavaScript/TypeScript project, listing among other things all the libraries it needs.",
        erklaerung:
          'Think of package.json as the table of contents and ingredient list of a recipe combined: it describes the project\'s name, which commands are available (e.g. "build" or "dev"), and which libraries are needed in which version. Anyone who opens the project can immediately see what needs to be installed.',
        beispiel:
          'In this trainer project, package.json specifies that Vite and TypeScript are needed as tools, along with the commands "npm run dev" and "npm run build".',
        wannVerwendet:
          "Present in every JavaScript/TypeScript project – you look inside it to understand which libraries and commands a project uses.",
      },
      es: {
        begriff: "package.json",
        kurzerklaerung:
          "package.json es el archivo de configuración central de un proyecto de JavaScript/TypeScript, que entre otras cosas enumera todas las librerías necesarias.",
        erklaerung:
          "package.json se puede imaginar como el índice y la lista de ingredientes de una receta a la vez: describe cómo se llama el proyecto, qué comandos existen (por ejemplo, «build» o «dev») y qué librerías se necesitan y en qué versión. Así, cualquiera que abra el proyecto sabe de inmediato qué hay que instalar.",
        beispiel:
          "En este proyecto de entrenamiento, package.json establece que Vite y TypeScript son necesarios como herramientas, junto con los comandos «npm run dev» y «npm run build».",
        wannVerwendet:
          "Está presente en todo proyecto de JavaScript/TypeScript; se consulta para entender qué librerías y comandos utiliza un proyecto.",
      },
    },
  },
  {
    id: "lk-lockfile",
    kategorieId: KATEGORIE_ID,
    begriff: "Lockfile (package-lock.json)",
    kurzerklaerung:
      "Ein Lockfile hält exakt fest, welche Version jeder einzelnen Bibliothek (inklusive aller Unterabhängigkeiten) installiert wurde.",
    erklaerung:
      "Ein Lockfile ist wie ein detailliertes Einkaufsprotokoll statt einer groben Einkaufsliste: Während package.json oft nur eine ungefähre Versionsspanne nennt, hält das Lockfile die exakt installierte Version jedes einzelnen Bausteins fest. So installiert jede Person im Team garantiert dieselben Versionen.",
    beispiel:
      "Zwei Entwickler führen „npm install“ auf unterschiedlichen Rechnern aus – dank package-lock.json erhalten beide exakt dieselben Bibliotheksversionen.",
    wannVerwendet:
      "Wird automatisch von npm erzeugt und aktualisiert; sollte immer mit ins Repository eingecheckt werden, damit Installationen reproduzierbar bleiben.",
    icon: "🔒",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-package-json", "lk-semver"],
    uebersetzungen: {
      en: {
        begriff: "Lockfile (package-lock.json)",
        kurzerklaerung:
          "A lockfile records exactly which version of every single library (including all sub-dependencies) was installed.",
        erklaerung:
          "A lockfile is like a detailed shopping receipt instead of a rough shopping list: while package.json often only states an approximate version range, the lockfile records the exact version of every single building block that was installed. That way, everyone on the team is guaranteed to install exactly the same versions.",
        beispiel:
          'Two developers run "npm install" on different computers – thanks to package-lock.json, both end up with exactly the same library versions.',
        wannVerwendet:
          "Automatically created and updated by npm; should always be checked into the repository so that installations remain reproducible.",
      },
      es: {
        begriff: "Lockfile (package-lock.json)",
        kurzerklaerung:
          "Un lockfile registra con exactitud qué versión de cada librería (incluidas todas las dependencias secundarias) se instaló.",
        erklaerung:
          "Un lockfile es como un recibo de compra detallado en lugar de una lista de la compra a grandes rasgos: mientras que package.json suele indicar solo un rango de versiones aproximado, el lockfile registra la versión exacta de cada componente instalado. Así, todas las personas del equipo instalan garantizadamente las mismas versiones.",
        beispiel:
          "Dos desarrolladores ejecutan «npm install» en ordenadores distintos; gracias a package-lock.json, ambos obtienen exactamente las mismas versiones de las librerías.",
        wannVerwendet:
          "npm lo genera y actualiza automáticamente; siempre debe incluirse en el repositorio para que las instalaciones sigan siendo reproducibles.",
      },
    },
  },
  {
    id: "lk-abhaengigkeit",
    kategorieId: KATEGORIE_ID,
    begriff: "Abhängigkeit (Dependency)",
    kurzerklaerung:
      "Eine Abhängigkeit ist eine externe Bibliothek, die ein Projekt benötigt, um zu funktionieren – direkt oder indirekt über andere Bibliotheken.",
    erklaerung:
      "Abhängigkeiten sind wie Zutaten in einem Rezept, die selbst wieder aus weiteren Zutaten bestehen: Eine eingebundene Bibliothek bringt oft weitere Bibliotheken mit, die sie selbst benötigt (transitive Abhängigkeiten). So kann aus einer einzigen Installation schnell ein ganzer Abhängigkeitsbaum entstehen.",
    beispiel:
      "Ein Projekt bindet eine Test-Bibliothek ein, die intern selbst wieder mehrere kleinere Hilfsbibliotheken als eigene Abhängigkeiten mitbringt.",
    wannVerwendet:
      "Immer dann, wenn ein Projekt fremden Code einbindet – jede eingebundene Bibliothek wird zu einer Abhängigkeit des eigenen Projekts.",
    icon: "🕸️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-bibliothek", "lk-dependency-konflikt", "lk-node-modules"],
    uebersetzungen: {
      en: {
        begriff: "Dependency",
        kurzerklaerung:
          "A dependency is an external library that a project needs in order to work – either directly or indirectly through other libraries.",
        erklaerung:
          "Dependencies are like ingredients in a recipe that are themselves made up of further ingredients: a library you include often brings along other libraries that it needs itself (transitive dependencies). That way, a single installation can quickly turn into an entire dependency tree.",
        beispiel:
          "A project includes a testing library that internally brings along several smaller helper libraries as its own dependencies.",
        wannVerwendet:
          "Whenever a project includes someone else's code – every library included becomes a dependency of your own project.",
      },
      es: {
        begriff: "Dependencia",
        kurzerklaerung:
          "Una dependencia es una librería externa que un proyecto necesita para funcionar, ya sea directamente o indirectamente a través de otras librerías.",
        erklaerung:
          "Las dependencias son como los ingredientes de una receta que a su vez están compuestos por otros ingredientes: una librería incluida suele traer consigo otras librerías que ella misma necesita (dependencias transitivas). Así, de una sola instalación puede surgir rápidamente todo un árbol de dependencias.",
        beispiel:
          "Un proyecto incorpora una librería de pruebas que, internamente, trae consigo varias librerías auxiliares más pequeñas como dependencias propias.",
        wannVerwendet:
          "Siempre que un proyecto incorpora código de terceros: cada librería incluida se convierte en una dependencia del propio proyecto.",
      },
    },
  },
  {
    id: "lk-semver",
    kategorieId: KATEGORIE_ID,
    begriff: "SemVer (Semantic Versioning)",
    kurzerklaerung:
      "SemVer ist ein Versionierungsschema (z. B. 2.4.1), bei dem jede Zahl eine bestimmte Bedeutung hat: große, kleine oder fehlerbehebende Änderung.",
    erklaerung:
      "Man kann sich eine SemVer-Nummer wie eine Ampel mit drei Stufen vorstellen: Die erste Zahl signalisiert große, möglicherweise inkompatible Änderungen; die zweite neue Funktionen, die weiterhin kompatibel sind; die dritte reine Fehlerbehebungen. So lässt sich am Versionssprung ablesen, wie riskant eine Aktualisierung vermutlich ist.",
    beispiel:
      "Ein Update von Version 2.4.1 auf 2.4.2 gilt als sicherer Bugfix, während ein Sprung auf 3.0.0 auf mögliche Breaking Changes hindeutet.",
    wannVerwendet:
      "Beim Lesen von Versionsnummern in package.json oder beim Entscheiden, ob ein Update riskant sein könnte.",
    icon: "🔢",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-lockfile", "lk-package-json"],
    uebersetzungen: {
      en: {
        begriff: "SemVer (Semantic Versioning)",
        kurzerklaerung:
          "SemVer is a versioning scheme (e.g. 2.4.1) in which each number has a specific meaning: a major, minor, or bug-fix change.",
        erklaerung:
          "You can think of a SemVer number as a traffic light with three levels: the first number signals major, potentially incompatible changes; the second signals new features that remain compatible; the third signals pure bug fixes. That way, the jump in version numbers tells you how risky an update is likely to be.",
        beispiel:
          "An update from version 2.4.1 to 2.4.2 is considered a safe bug fix, whereas a jump to 3.0.0 indicates possible breaking changes.",
        wannVerwendet:
          "When reading version numbers in package.json, or when deciding whether an update might be risky.",
      },
      es: {
        begriff: "SemVer (Semantic Versioning)",
        kurzerklaerung:
          "SemVer es un esquema de versionado (por ejemplo, 2.4.1) en el que cada número tiene un significado concreto: cambio mayor, menor o de corrección de errores.",
        erklaerung:
          "Un número de SemVer se puede imaginar como un semáforo de tres niveles: el primer número indica cambios grandes y posiblemente incompatibles; el segundo, nuevas funciones que siguen siendo compatibles; el tercero, simples correcciones de errores. Así, el salto de versión permite saber de antemano cuán arriesgada es probablemente una actualización.",
        beispiel:
          "Una actualización de la versión 2.4.1 a 2.4.2 se considera una corrección segura, mientras que un salto a 3.0.0 indica posibles cambios incompatibles (breaking changes).",
        wannVerwendet:
          "Al leer números de versión en package.json o al decidir si una actualización podría ser arriesgada.",
      },
    },
  },
  {
    id: "lk-dev-dependencies",
    kategorieId: KATEGORIE_ID,
    begriff: "devDependencies vs. dependencies",
    kurzerklaerung:
      "dependencies werden für den Betrieb der fertigen Anwendung benötigt, devDependencies nur während der Entwicklung, z. B. für Build-Werkzeuge.",
    erklaerung:
      "Man kann sich devDependencies wie Werkzeuge in der Werkstatt vorstellen, die beim Bau eines Möbelstücks gebraucht werden, aber nicht mit ausgeliefert werden – anders als die eigentlichen Materialien (dependencies), die Teil des fertigen Produkts sind. So bleibt die fertige Anwendung schlank.",
    beispiel:
      "In diesem Trainer-Projekt stehen Vite und TypeScript als devDependencies in package.json, weil sie nur für Entwicklung und Build gebraucht werden, nicht im fertigen Ergebnis.",
    wannVerwendet:
      "Beim Einrichten eines Projekts entscheidet man pro Bibliothek, ob sie nur zur Entwicklungszeit oder auch im Betrieb gebraucht wird.",
    befehl: "npm install --save-dev vite",
    icon: "🛠️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-package-json", "lk-bibliothek"],
    uebersetzungen: {
      en: {
        begriff: "devDependencies vs. dependencies",
        kurzerklaerung:
          "dependencies are needed to run the finished application, while devDependencies are only needed during development, e.g. for build tools.",
        erklaerung:
          "Think of devDependencies as the tools in a workshop that are needed to build a piece of furniture but aren't shipped along with it – unlike the actual materials (dependencies), which become part of the finished product. That keeps the finished application lean.",
        beispiel:
          "In this trainer project, Vite and TypeScript are listed as devDependencies in package.json because they're only needed for development and building, not in the finished result.",
        wannVerwendet:
          "When setting up a project, you decide for each library whether it's needed only during development or also at runtime.",
      },
      es: {
        begriff: "devDependencies vs. dependencies",
        kurzerklaerung:
          "Las dependencies se necesitan para el funcionamiento de la aplicación terminada, mientras que las devDependencies solo se necesitan durante el desarrollo, por ejemplo para herramientas de compilación (build).",
        erklaerung:
          "Las devDependencies se pueden imaginar como las herramientas del taller que se necesitan para construir un mueble, pero que no se entregan junto con él, a diferencia de los materiales reales (dependencies), que sí forman parte del producto terminado. Así, la aplicación final se mantiene ligera.",
        beispiel:
          "En este proyecto de entrenamiento, Vite y TypeScript figuran como devDependencies en package.json porque solo se necesitan para el desarrollo y la compilación, no en el resultado final.",
        wannVerwendet:
          "Al configurar un proyecto, se decide para cada librería si se necesita solo durante el desarrollo o también en producción.",
      },
    },
  },
  {
    id: "lk-dependency-konflikt",
    kategorieId: KATEGORIE_ID,
    begriff: "Dependency-Konflikt",
    kurzerklaerung:
      "Ein Dependency-Konflikt entsteht, wenn zwei benötigte Bibliotheken widersprüchliche Anforderungen an dieselbe Unterabhängigkeit stellen.",
    erklaerung:
      "Ein Dependency-Konflikt ist wie zwei Rezepte, die dieselbe Zutat in unterschiedlicher Sorte verlangen, aber nur eine Sorte im Haus sein soll. Package Manager versuchen solche Konflikte automatisch aufzulösen, was aber nicht immer reibungslos gelingt.",
    beispiel:
      "Zwei eingebundene Bibliotheken benötigen jeweils eine andere, nicht kompatible Version derselben dritten Bibliothek – die Installation schlägt fehl oder verhält sich unerwartet.",
    wannVerwendet:
      "Wenn eine Installation mit Versionsfehlern abbricht oder sich eine Anwendung nach einem Update unerwartet verhält.",
    icon: "⚠️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-abhaengigkeit", "lk-semver", "lk-lockfile"],
    uebersetzungen: {
      en: {
        begriff: "Dependency Conflict",
        kurzerklaerung:
          "A dependency conflict arises when two required libraries place contradictory requirements on the same sub-dependency.",
        erklaerung:
          "A dependency conflict is like two recipes that call for the same ingredient in different varieties, even though only one variety is supposed to be in the house. Package managers try to resolve such conflicts automatically, but that doesn't always go smoothly.",
        beispiel:
          "Two included libraries each require a different, incompatible version of the same third library – the installation fails or behaves unexpectedly.",
        wannVerwendet:
          "When an installation aborts with version errors, or an application behaves unexpectedly after an update.",
      },
      es: {
        begriff: "Conflicto de dependencias",
        kurzerklaerung:
          "Un conflicto de dependencias surge cuando dos librerías necesarias exigen requisitos contradictorios sobre la misma dependencia secundaria.",
        erklaerung:
          "Un conflicto de dependencias es como dos recetas que requieren el mismo ingrediente pero en variedades distintas, cuando solo debería haber una variedad en casa. Los gestores de paquetes intentan resolver estos conflictos automáticamente, aunque no siempre lo consiguen sin problemas.",
        beispiel:
          "Dos librerías incluidas necesitan cada una una versión distinta e incompatible de una misma tercera librería: la instalación falla o se comporta de forma inesperada.",
        wannVerwendet:
          "Cuando una instalación se interrumpe por errores de versión o una aplicación se comporta de forma inesperada tras una actualización.",
      },
    },
  },
  {
    id: "lk-node-modules",
    kategorieId: KATEGORIE_ID,
    begriff: "node_modules",
    kurzerklaerung:
      "node_modules ist der Ordner, in dem alle installierten Bibliotheken eines Projekts tatsächlich abgelegt werden.",
    erklaerung:
      "node_modules ist wie das Lager hinter der Werkstatt, in dem alle bestellten Fertigteile physisch liegen – package.json ist dagegen nur die Bestellliste. Der Ordner wird automatisch erzeugt und kann sehr groß werden, weshalb er nie manuell bearbeitet oder ins Repository eingecheckt wird.",
    beispiel:
      "Nach „npm install“ entsteht im Projektordner ein oft mehrere hundert Megabyte großer node_modules-Ordner mit allen Bibliotheken.",
    wannVerwendet:
      "Entsteht automatisch bei der Installation von Abhängigkeiten; wird üblicherweise über .gitignore von der Versionskontrolle ausgeschlossen.",
    icon: "🗃️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-abhaengigkeit", "lk-package-json"],
    uebersetzungen: {
      en: {
        begriff: "node_modules",
        kurzerklaerung:
          "node_modules is the folder where all of a project's installed libraries are actually stored.",
        erklaerung:
          "node_modules is like the warehouse behind the workshop where all the ordered prefabricated parts are physically stored – package.json, by contrast, is just the order list. The folder is created automatically and can grow very large, which is why it is never edited by hand or checked into the repository.",
        beispiel:
          'After running "npm install", a node_modules folder often several hundred megabytes in size appears in the project folder, containing all the libraries.',
        wannVerwendet:
          "Created automatically when dependencies are installed; usually excluded from version control via .gitignore.",
      },
      es: {
        begriff: "node_modules",
        kurzerklaerung:
          "node_modules es la carpeta donde se almacenan físicamente todas las librerías instaladas de un proyecto.",
        erklaerung:
          "node_modules es como el almacén detrás del taller donde se guardan físicamente todas las piezas prefabricadas encargadas; package.json, en cambio, es solo la lista de pedido. La carpeta se genera automáticamente y puede llegar a ser muy grande, por lo que nunca se edita a mano ni se incluye en el repositorio.",
        beispiel:
          "Tras ejecutar «npm install», aparece en la carpeta del proyecto una carpeta node_modules, a menudo de varios cientos de megabytes, con todas las librerías.",
        wannVerwendet:
          "Se genera automáticamente al instalar las dependencias; normalmente se excluye del control de versiones mediante .gitignore.",
      },
    },
  },
  {
    id: "lk-peer-dependency",
    kategorieId: KATEGORIE_ID,
    begriff: "Peer Dependency",
    kurzerklaerung:
      "Eine Peer Dependency ist eine Bibliothek, die eine andere Bibliothek zwar benötigt, aber erwartet, dass das Hauptprojekt sie selbst mitbringt.",
    erklaerung:
      "Eine Peer Dependency ist wie eine Zusatzkomponente, die zu einem bestimmten Grundgerät passen muss, das aber der Kunde selbst schon besitzen soll, statt es doppelt mitzuliefern. So wird verhindert, dass z. B. dieselbe Bibliothek versehentlich mehrfach in unterschiedlichen Versionen im Projekt landet.",
    beispiel:
      "Ein Erweiterungspaket für ein Framework verlangt als Peer Dependency, dass das Hauptprojekt bereits eine bestimmte Version des Frameworks selbst installiert hat.",
    wannVerwendet:
      "Bei Erweiterungen oder Plugins, die eng mit einer bestimmten Version einer anderen, bereits vorhandenen Bibliothek zusammenarbeiten müssen.",
    icon: "🤝",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-abhaengigkeit", "lk-dependency-konflikt"],
    uebersetzungen: {
      en: {
        begriff: "Peer Dependency",
        kurzerklaerung:
          "A peer dependency is a library that another library needs, but expects the main project itself to provide.",
        erklaerung:
          "A peer dependency is like an add-on component that must fit a particular base device, but the customer is expected to already own that base device rather than have it supplied twice. This prevents, for example, the same library from accidentally ending up in the project multiple times in different versions.",
        beispiel:
          "An extension package for a framework requires, as a peer dependency, that the main project has already installed a specific version of the framework itself.",
        wannVerwendet:
          "For extensions or plugins that need to work closely with a specific version of another library that is already present.",
      },
      es: {
        begriff: "Peer Dependency",
        kurzerklaerung:
          "Una peer dependency es una librería que otra librería necesita, pero que espera que el proyecto principal ya aporte por su cuenta.",
        erklaerung:
          "Una peer dependency es como un componente adicional que debe encajar con un dispositivo base determinado, pero se espera que el cliente ya posea ese dispositivo base en lugar de suministrarlo por duplicado. Esto evita, por ejemplo, que la misma librería termine en el proyecto varias veces y en versiones distintas por error.",
        beispiel:
          "Un paquete de extensión para un framework exige, como peer dependency, que el proyecto principal ya tenga instalada una versión concreta del propio framework.",
        wannVerwendet:
          "En extensiones o plugins que deben funcionar estrechamente con una versión concreta de otra librería ya presente en el proyecto.",
      },
    },
  },
];
