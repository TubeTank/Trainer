import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-web-grundlagen";

export const webGrundlagenLernkarten: Lernkarte[] = [
  {
    id: "lk-html",
    kategorieId: KATEGORIE_ID,
    begriff: "HTML",
    kurzerklaerung:
      "HTML ist die Sprache, mit der die Struktur und der Inhalt einer Webseite festgelegt werden – also was auf der Seite steht und wie es gegliedert ist.",
    erklaerung:
      "HTML ist wie das Rohgerüst eines Hauses: Wände, Türen und Räume stehen fest, aber Farbe und Einrichtung fehlen noch. Überschriften, Absätze, Bilder und Links werden mit sogenannten „Tags“ gekennzeichnet, damit der Browser weiß, um welche Art von Inhalt es sich handelt.",
    beispiel:
      "Mit „<h1>Willkommen</h1>“ wird eine große Überschrift definiert, mit „<p>Text</p>“ ein normaler Absatz darunter.",
    wannVerwendet:
      "Bei jeder Webseite als Ausgangspunkt – bevor Gestaltung (CSS) oder Interaktivität (JavaScript) hinzukommen.",
    icon: "🧱",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-css", "lk-javascript", "lk-dom"],
    uebersetzungen: {
      en: {
        begriff: "HTML",
        kurzerklaerung:
          "HTML is the language that defines the structure and content of a web page – in other words, what's on the page and how it's organized.",
        erklaerung:
          "HTML is like the bare shell of a house: the walls, doors, and rooms are in place, but the paint and furniture are still missing. Headings, paragraphs, images, and links are marked up with so-called \"tags\" so the browser knows what kind of content it's dealing with.",
        beispiel:
          "\"<h1>Welcome</h1>\" defines a large heading, while \"<p>Text</p>\" defines a normal paragraph below it.",
        wannVerwendet:
          "As the starting point for every web page – before styling (CSS) or interactivity (JavaScript) come into play.",
      },
      es: {
        begriff: "HTML",
        kurzerklaerung:
          "HTML es el lenguaje que define la estructura y el contenido de una página web, es decir, qué aparece en ella y cómo está organizado.",
        erklaerung:
          "HTML es como la estructura en bruto de una casa: las paredes, puertas y habitaciones ya están, pero todavía falta la pintura y los muebles. Los títulos, párrafos, imágenes y enlaces se marcan con las llamadas «etiquetas» para que el navegador sepa de qué tipo de contenido se trata.",
        beispiel:
          "Con «<h1>Bienvenido</h1>» se define un título grande, y con «<p>Texto</p>» un párrafo normal debajo.",
        wannVerwendet:
          "Como punto de partida de cualquier página web, antes de añadir el diseño (CSS) o la interactividad (JavaScript).",
      },
    },
  },
  {
    id: "lk-css",
    kategorieId: KATEGORIE_ID,
    begriff: "CSS",
    kurzerklaerung:
      "CSS legt fest, wie eine Webseite aussieht – Farben, Abstände, Schriftarten und Anordnung der Elemente auf dem Bildschirm.",
    erklaerung:
      "Wenn HTML das Rohgerüst eines Hauses ist, dann ist CSS die Inneneinrichtung: Wandfarbe, Möbelanordnung und Beleuchtung. Mit CSS-Regeln wird bestimmt, wie ein bestimmtes HTML-Element dargestellt werden soll, ohne dessen Inhalt zu verändern.",
    beispiel:
      "Die Regel „h1 { color: blue; }“ sorgt dafür, dass alle großen Überschriften auf der Seite blau dargestellt werden.",
    wannVerwendet:
      "Immer dann, wenn eine Webseite optisch gestaltet oder an verschiedene Bildschirmgrößen angepasst werden soll.",
    icon: "🎨",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-html", "lk-dom"],
    uebersetzungen: {
      en: {
        begriff: "CSS",
        kurzerklaerung:
          "CSS determines how a web page looks – colors, spacing, fonts, and the arrangement of elements on the screen.",
        erklaerung:
          "If HTML is the bare shell of a house, CSS is the interior design: wall color, furniture arrangement, and lighting. CSS rules determine how a particular HTML element should be displayed, without changing its content.",
        beispiel:
          "The rule \"h1 { color: blue; }\" makes all large headings on the page appear in blue.",
        wannVerwendet:
          "Whenever a web page needs to be styled visually or adapted to different screen sizes.",
      },
      es: {
        begriff: "CSS",
        kurzerklaerung:
          "CSS determina el aspecto de una página web: colores, espaciados, tipografías y la disposición de los elementos en pantalla.",
        erklaerung:
          "Si HTML es la estructura en bruto de una casa, CSS es la decoración interior: el color de las paredes, la disposición de los muebles y la iluminación. Las reglas CSS determinan cómo debe mostrarse un elemento HTML concreto, sin modificar su contenido.",
        beispiel:
          "La regla «h1 { color: blue; }» hace que todos los títulos grandes de la página se muestren en azul.",
        wannVerwendet:
          "Siempre que una página web deba diseñarse visualmente o adaptarse a distintos tamaños de pantalla.",
      },
    },
  },
  {
    id: "lk-javascript",
    kategorieId: KATEGORIE_ID,
    begriff: "JavaScript",
    kurzerklaerung:
      "JavaScript ist die Programmiersprache, die Webseiten interaktiv macht – sie reagiert auf Klicks, lädt Daten nach oder verändert Inhalte dynamisch.",
    erklaerung:
      "Wenn HTML das Gerüst und CSS die Einrichtung eines Hauses sind, dann ist JavaScript die Haustechnik: Lichtschalter, die tatsächlich etwas auslösen, und Rollläden, die sich automatisch bewegen. Der Code läuft direkt im Browser des Nutzers und kann auf Ereignisse wie einen Mausklick reagieren.",
    beispiel:
      "Ein Klick auf einen „Mehr anzeigen“-Button lässt JavaScript zusätzlichen Text einblenden, ohne dass die Seite neu geladen wird.",
    wannVerwendet:
      "Immer dann, wenn eine Webseite auf Nutzeraktionen reagieren, Inhalte nachladen oder sich dynamisch verändern soll.",
    icon: "⚡",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-html", "lk-dom", "lk-json"],
    uebersetzungen: {
      en: {
        begriff: "JavaScript",
        kurzerklaerung:
          "JavaScript is the programming language that makes web pages interactive – it reacts to clicks, loads data in the background, or dynamically changes content.",
        erklaerung:
          "If HTML is the frame and CSS the furnishing of a house, JavaScript is the building's technical systems: light switches that actually trigger something, and shutters that move automatically. The code runs directly in the user's browser and can react to events like a mouse click.",
        beispiel:
          "Clicking a \"Show more\" button makes JavaScript reveal additional text, without the page having to reload.",
        wannVerwendet:
          "Whenever a web page needs to respond to user actions, load content afterward, or change dynamically.",
      },
      es: {
        begriff: "JavaScript",
        kurzerklaerung:
          "JavaScript es el lenguaje de programación que hace interactivas las páginas web: reacciona a los clics, carga datos adicionales o modifica el contenido de forma dinámica.",
        erklaerung:
          "Si HTML es la estructura y CSS la decoración de una casa, JavaScript es la instalación técnica: interruptores que realmente activan algo y persianas que se mueven solas. El código se ejecuta directamente en el navegador del usuario y puede reaccionar a eventos como un clic del ratón.",
        beispiel:
          "Al hacer clic en un botón «Mostrar más», JavaScript muestra texto adicional sin que la página tenga que recargarse.",
        wannVerwendet:
          "Siempre que una página web deba reaccionar a las acciones del usuario, cargar contenido adicional o cambiar de forma dinámica.",
      },
    },
  },
  {
    id: "lk-client-server-modell",
    kategorieId: KATEGORIE_ID,
    begriff: "Client-Server-Modell",
    kurzerklaerung:
      "Das Client-Server-Modell beschreibt die Arbeitsteilung im Web: Ein Client (z. B. der Browser) fordert Informationen an, ein Server liefert sie.",
    erklaerung:
      "Man kann sich das wie ein Restaurant vorstellen: Der Gast (Client) bestellt etwas beim Kellner, die Küche (Server) bereitet es zu und schickt es zurück. Der Client stellt also eine Anfrage, der Server verarbeitet sie und schickt eine Antwort zurück – meist über das Internet.",
    beispiel:
      "Ruft jemand eine Online-Shop-Seite im Browser auf, sendet der Browser (Client) eine Anfrage an den Shop-Server, der die passenden Produktdaten zurückschickt.",
    wannVerwendet:
      "Als Grundprinzip fast jeder Webanwendung – immer dann, wenn Daten zwischen zwei Systemen über ein Netzwerk ausgetauscht werden.",
    icon: "🔄",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-http", "lk-rest-api"],
    uebersetzungen: {
      en: {
        begriff: "Client-Server Model",
        kurzerklaerung:
          "The client-server model describes the division of labor on the web: a client (such as the browser) requests information, and a server delivers it.",
        erklaerung:
          "Think of it like a restaurant: the guest (client) places an order with the waiter, and the kitchen (server) prepares it and sends it back. So the client makes a request, the server processes it, and sends back a response – usually over the internet.",
        beispiel:
          "When someone opens an online shop's page in their browser, the browser (client) sends a request to the shop's server, which sends back the matching product data.",
        wannVerwendet:
          "As the basic principle behind almost every web application – whenever data is exchanged between two systems over a network.",
      },
      es: {
        begriff: "Modelo cliente-servidor",
        kurzerklaerung:
          "El modelo cliente-servidor describe la división de tareas en la web: un cliente (por ejemplo, el navegador) solicita información y un servidor la proporciona.",
        erklaerung:
          "Se puede imaginar como un restaurante: el cliente hace un pedido al camarero, y la cocina (servidor) lo prepara y lo envía de vuelta. Es decir, el cliente hace una solicitud, el servidor la procesa y devuelve una respuesta, normalmente a través de internet.",
        beispiel:
          "Cuando alguien abre la página de una tienda online en el navegador, el navegador (cliente) envía una solicitud al servidor de la tienda, que devuelve los datos del producto correspondientes.",
        wannVerwendet:
          "Como principio básico de casi toda aplicación web, siempre que se intercambian datos entre dos sistemas a través de una red.",
      },
    },
  },
  {
    id: "lk-http",
    kategorieId: KATEGORIE_ID,
    begriff: "HTTP",
    kurzerklaerung:
      "HTTP ist das Kommunikationsprotokoll, mit dem Browser und Server Anfragen und Antworten im Web austauschen.",
    erklaerung:
      "HTTP ist wie eine vereinbarte Sprache und Etikette für Telefongespräche zwischen Gast und Restaurant: Beide Seiten wissen, wie eine Bestellung formuliert und wie eine Antwort gegeben wird. Eine HTTP-Anfrage enthält z. B. eine Adresse (URL) und eine Methode wie „GET“ oder „POST“, die Antwort enthält die angeforderten Daten und einen Statuscode.",
    beispiel:
      "Beim Aufrufen einer Webseite schickt der Browser eine HTTP-GET-Anfrage an den Server, der daraufhin die HTML-Seite als Antwort zurücksendet.",
    wannVerwendet:
      "Bei praktisch jeder Kommunikation zwischen Browser und Webserver sowie beim Aufruf von Programmierschnittstellen im Web.",
    icon: "📡",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-client-server-modell", "lk-http-statuscode", "lk-rest-api"],
    uebersetzungen: {
      en: {
        begriff: "HTTP",
        kurzerklaerung:
          "HTTP is the communication protocol that browsers and servers use to exchange requests and responses on the web.",
        erklaerung:
          "HTTP is like an agreed-upon language and etiquette for phone calls between a guest and a restaurant: both sides know how to phrase an order and how to give a reply. An HTTP request includes, for example, an address (URL) and a method like \"GET\" or \"POST\"; the response contains the requested data and a status code.",
        beispiel:
          "When a web page is opened, the browser sends an HTTP GET request to the server, which then sends back the HTML page as the response.",
        wannVerwendet:
          "In practically every exchange between browser and web server, as well as when calling web APIs.",
      },
      es: {
        begriff: "HTTP",
        kurzerklaerung:
          "HTTP es el protocolo de comunicación con el que el navegador y el servidor intercambian solicitudes y respuestas en la web.",
        erklaerung:
          "HTTP es como un idioma y una etiqueta acordados para las llamadas telefónicas entre el cliente y el restaurante: ambas partes saben cómo formular un pedido y cómo dar una respuesta. Una solicitud HTTP incluye, por ejemplo, una dirección (URL) y un método como «GET» o «POST»; la respuesta contiene los datos solicitados y un código de estado.",
        beispiel:
          "Al abrir una página web, el navegador envía una solicitud HTTP GET al servidor, que responde enviando la página HTML.",
        wannVerwendet:
          "En prácticamente toda comunicación entre el navegador y el servidor web, así como al llamar a interfaces de programación (API) en la web.",
      },
    },
  },
  {
    id: "lk-http-statuscode",
    kategorieId: KATEGORIE_ID,
    begriff: "HTTP-Statuscode",
    kurzerklaerung:
      "Ein HTTP-Statuscode ist eine dreistellige Zahl, mit der ein Server kurz mitteilt, ob eine Anfrage erfolgreich war oder was schiefgelaufen ist.",
    erklaerung:
      "Ein Statuscode ist wie eine kurze Rückmeldung des Kellners: „Alles klar, kommt sofort“ oder „Tut mir leid, das gibt es nicht mehr“. Codes ab 200 bedeuten Erfolg, ab 400 einen Fehler beim Client (z. B. falsche Anfrage) und ab 500 einen Fehler beim Server selbst.",
    beispiel:
      "Ruft jemand eine nicht existierende Seite auf, antwortet der Server mit dem bekannten Statuscode 404 („Nicht gefunden“).",
    wannVerwendet:
      "Beim Testen von Webseiten oder Programmierschnittstellen, um schnell zu erkennen, ob eine Anfrage erfolgreich war oder woran sie gescheitert ist.",
    icon: "🚦",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-http", "lk-rest-api"],
    uebersetzungen: {
      en: {
        begriff: "HTTP Status Code",
        kurzerklaerung:
          "An HTTP status code is a three-digit number that a server uses to briefly indicate whether a request succeeded or what went wrong.",
        erklaerung:
          "A status code is like a quick reply from the waiter: \"All good, coming right up\" or \"Sorry, we don't have that anymore.\" Codes starting with 200 mean success, codes starting with 400 indicate an error on the client's side (e.g., a malformed request), and codes starting with 500 indicate an error on the server itself.",
        beispiel:
          "If someone requests a page that doesn't exist, the server responds with the well-known status code 404 (\"Not Found\").",
        wannVerwendet:
          "When testing web pages or APIs, to quickly see whether a request succeeded or why it failed.",
      },
      es: {
        begriff: "Código de estado HTTP",
        kurzerklaerung:
          "Un código de estado HTTP es un número de tres cifras con el que un servidor indica brevemente si una solicitud tuvo éxito o qué salió mal.",
        erklaerung:
          "Un código de estado es como una respuesta rápida del camarero: «Todo bien, enseguida llega» o «Lo siento, eso ya no está disponible». Los códigos que empiezan por 200 indican éxito, los que empiezan por 400 indican un error del cliente (por ejemplo, una solicitud incorrecta) y los que empiezan por 500 indican un error del propio servidor.",
        beispiel:
          "Si alguien intenta acceder a una página que no existe, el servidor responde con el conocido código de estado 404 («No encontrado»).",
        wannVerwendet:
          "Al probar páginas web o interfaces de programación (API), para saber rápidamente si una solicitud tuvo éxito o por qué falló.",
      },
    },
  },
  {
    id: "lk-rest-api",
    kategorieId: KATEGORIE_ID,
    begriff: "REST-API",
    kurzerklaerung:
      "Eine REST-API ist eine über HTTP erreichbare Programmierschnittstelle, über die Anwendungen nach festen Regeln Daten abrufen oder verändern können.",
    erklaerung:
      "Eine REST-API ist wie eine Speisekarte mit klaren Bestellregeln: Für jedes Gericht (jede Ressource, z. B. „Kunde“ oder „Bestellung“) gibt es eine feste Adresse, und die Art der Bestellung (Anzeigen, Hinzufügen, Ändern, Löschen) folgt immer demselben Schema. So können unterschiedlichste Programme dieselbe Schnittstelle verstehen und nutzen.",
    beispiel:
      "Eine Wetter-App ruft über eine REST-API die Adresse „/wetter/berlin“ auf und erhält die aktuellen Wetterdaten als Antwort zurück.",
    wannVerwendet:
      "Wenn zwei Anwendungen strukturiert Daten austauschen sollen, etwa eine App und ihr Server, oder zwei Systeme unterschiedlicher Anbieter.",
    icon: "🔌",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-http", "lk-http-statuscode", "lk-json", "lk-client-server-modell"],
    uebersetzungen: {
      en: {
        begriff: "REST API",
        kurzerklaerung:
          "A REST API is a programming interface accessible over HTTP that lets applications retrieve or modify data according to fixed rules.",
        erklaerung:
          "A REST API is like a menu with clear ordering rules: every dish (every resource, e.g., \"customer\" or \"order\") has a fixed address, and the type of order (view, add, change, delete) always follows the same pattern. This way, all kinds of different programs can understand and use the same interface.",
        beispiel:
          "A weather app calls the address \"/weather/berlin\" through a REST API and gets the current weather data back as the response.",
        wannVerwendet:
          "When two applications need to exchange data in a structured way, such as an app and its server, or two systems from different providers.",
      },
      es: {
        begriff: "API REST",
        kurzerklaerung:
          "Una API REST es una interfaz de programación accesible a través de HTTP con la que las aplicaciones pueden consultar o modificar datos siguiendo reglas fijas.",
        erklaerung:
          "Una API REST es como una carta de restaurante con reglas de pedido claras: cada plato (cada recurso, por ejemplo «cliente» o «pedido») tiene una dirección fija, y el tipo de pedido (consultar, añadir, modificar, eliminar) sigue siempre el mismo esquema. Así, programas muy distintos pueden entender y usar la misma interfaz.",
        beispiel:
          "Una aplicación del tiempo llama a la dirección «/tiempo/berlin» a través de una API REST y recibe como respuesta los datos meteorológicos actuales.",
        wannVerwendet:
          "Cuando dos aplicaciones necesitan intercambiar datos de forma estructurada, por ejemplo una app y su servidor, o dos sistemas de proveedores distintos.",
      },
    },
  },
  {
    id: "lk-json",
    kategorieId: KATEGORIE_ID,
    begriff: "JSON",
    kurzerklaerung:
      "JSON ist ein leichtgewichtiges Textformat, mit dem strukturierte Daten zwischen Programmen ausgetauscht werden – gut lesbar für Menschen und Maschinen.",
    erklaerung:
      "JSON ist wie ein übersichtlich ausgefülltes Formular: Jede Information steht unter einer klaren Bezeichnung, z. B. „name“ oder „alter“, und mehrere solcher Angaben lassen sich zu Gruppen und Listen zusammenfassen. Weil das Format so einfach aufgebaut ist, verstehen es fast alle Programmiersprachen.",
    beispiel:
      "Eine REST-API liefert die Antwort „{ \"name\": \"Anna\", \"alter\": 34 }“, die eine App direkt einlesen und weiterverarbeiten kann.",
    wannVerwendet:
      "Beim Austausch von Daten zwischen Server und Anwendung, besonders häufig als Antwortformat von REST-APIs.",
    icon: "🗂️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-rest-api", "lk-javascript"],
    uebersetzungen: {
      en: {
        begriff: "JSON",
        kurzerklaerung:
          "JSON is a lightweight text format used to exchange structured data between programs – easy to read for both humans and machines.",
        erklaerung:
          "JSON is like a neatly filled-out form: every piece of information is stored under a clear label, such as \"name\" or \"age,\" and several of these entries can be grouped into lists and collections. Because the format is so simple, almost every programming language understands it.",
        beispiel:
          "A REST API returns the response \"{ \\\"name\\\": \\\"Anna\\\", \\\"age\\\": 34 }\", which an app can read and process directly.",
        wannVerwendet:
          "When exchanging data between a server and an application, most commonly as the response format of REST APIs.",
      },
      es: {
        begriff: "JSON",
        kurzerklaerung:
          "JSON es un formato de texto ligero utilizado para intercambiar datos estructurados entre programas, fácil de leer tanto para personas como para máquinas.",
        erklaerung:
          "JSON es como un formulario rellenado de forma clara: cada dato aparece bajo una etiqueta clara, como «name» o «age», y varios de estos datos pueden agruparse en listas y colecciones. Como el formato es tan sencillo, prácticamente todos los lenguajes de programación lo entienden.",
        beispiel:
          "Una API REST devuelve la respuesta «{ \\\"name\\\": \\\"Anna\\\", \\\"age\\\": 34 }», que una app puede leer y procesar directamente.",
        wannVerwendet:
          "Al intercambiar datos entre un servidor y una aplicación, muy a menudo como formato de respuesta de las API REST.",
      },
    },
  },
  {
    id: "lk-dom",
    kategorieId: KATEGORIE_ID,
    begriff: "DOM (Document Object Model)",
    kurzerklaerung:
      "Das DOM ist die interne Darstellung einer Webseite im Browser, mit der JavaScript Inhalte und Struktur der Seite lesen und verändern kann.",
    erklaerung:
      "Man kann sich das DOM wie ein Inhaltsverzeichnis mit Verweisen auf jeden einzelnen Raum eines Hauses vorstellen, über das man gezielt einen Raum umgestalten kann, ohne das ganze Haus neu zu bauen. Der Browser wandelt das geladene HTML in diese Struktur um, damit JavaScript gezielt einzelne Elemente ansprechen und ändern kann.",
    beispiel:
      "Mit dem Befehl „document.getElementById('titel').innerText = 'Neuer Titel'“ ändert JavaScript über das DOM den Text einer bestimmten Überschrift.",
    wannVerwendet:
      "Immer dann, wenn JavaScript Inhalte einer bereits geladenen Webseite lesen, ändern oder neu erzeugen soll.",
    icon: "🌳",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-html", "lk-javascript", "lk-css"],
    uebersetzungen: {
      en: {
        begriff: "DOM (Document Object Model)",
        kurzerklaerung:
          "The DOM is the internal representation of a web page in the browser, which JavaScript uses to read and change the page's content and structure.",
        erklaerung:
          "You can think of the DOM as a table of contents with references to every single room in a house, which lets you redesign one specific room without rebuilding the whole house. The browser converts the loaded HTML into this structure so that JavaScript can target and change individual elements.",
        beispiel:
          "With the command \"document.getElementById('titel').innerText = 'New Title'\", JavaScript uses the DOM to change the text of a specific heading.",
        wannVerwendet:
          "Whenever JavaScript needs to read, change, or create content on an already loaded web page.",
      },
      es: {
        begriff: "DOM (Document Object Model)",
        kurzerklaerung:
          "El DOM es la representación interna de una página web en el navegador, que JavaScript utiliza para leer y modificar el contenido y la estructura de la página.",
        erklaerung:
          "Se puede imaginar el DOM como un índice con referencias a cada habitación de una casa, que permite redecorar una habitación concreta sin tener que reconstruir toda la casa. El navegador convierte el HTML cargado en esta estructura para que JavaScript pueda acceder a elementos concretos y modificarlos.",
        beispiel:
          "Con la instrucción «document.getElementById('titel').innerText = 'Nuevo título'», JavaScript utiliza el DOM para cambiar el texto de un título concreto.",
        wannVerwendet:
          "Siempre que JavaScript necesite leer, modificar o crear contenido en una página web ya cargada.",
      },
    },
  },
];
