import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-server-hosting";

export const serverHostingLernkarten: Lernkarte[] = [
  {
    id: "lk-server",
    kategorieId: KATEGORIE_ID,
    begriff: "Server",
    kurzerklaerung:
      "Ein Server ist ein Computer, der ständig läuft und anderen Geräten über das Netzwerk Daten oder Dienste zur Verfügung stellt.",
    erklaerung:
      "Ein Server ist wie ein Kellner in einem Restaurant: Er nimmt Bestellungen (Anfragen) von Gästen (Nutzern) entgegen und bringt ihnen das Gewünschte, zum Beispiel eine Webseite oder Daten. Im Gegensatz zum eigenen Laptop ist ein Server meist rund um die Uhr eingeschaltet und erreichbar, damit auch nachts jemand darauf zugreifen kann.",
    beispiel:
      "Wenn jemand eine Online-Shop-Webseite aufruft, schickt sein Browser eine Anfrage an einen Server, der die Produktseite zurückliefert.",
    wannVerwendet:
      "Immer dann, wenn eine Anwendung nicht nur lokal auf dem eigenen Rechner laufen, sondern für andere Menschen über das Internet erreichbar sein soll.",
    icon: "🖥️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-localhost", "lk-hosting-anbieter", "lk-port"],
    uebersetzungen: {
      en: {
        begriff: "Server",
        kurzerklaerung:
          "A server is a computer that runs continuously, providing data or services to other devices over a network.",
        erklaerung:
          "A server is like a waiter in a restaurant: it takes orders (requests) from guests (users) and brings them what they want, such as a webpage or some data. Unlike your own laptop, a server is usually switched on and reachable around the clock, so someone can access it even in the middle of the night.",
        beispiel:
          "When someone opens an online shop's website, their browser sends a request to a server, which sends back the product page.",
        wannVerwendet:
          "Whenever an application shouldn't just run locally on your own computer, but needs to be reachable by other people over the internet.",
      },
      es: {
        begriff: "Server",
        kurzerklaerung:
          "Un server es un ordenador que funciona todo el tiempo y pone a disposición de otros dispositivos datos o servicios a través de la red.",
        erklaerung:
          "Un server es como un camarero en un restaurante: recibe los pedidos (peticiones) de los clientes (usuarios) y les trae lo que piden, por ejemplo una página web o unos datos. A diferencia de tu propio portátil, un server suele estar encendido y disponible las veinticuatro horas, para que alguien pueda acceder a él incluso de madrugada.",
        beispiel:
          "Cuando alguien entra en la web de una tienda online, su navegador envía una petición a un server, que le devuelve la página del producto.",
        wannVerwendet:
          "Siempre que una aplicación no deba funcionar solo en tu propio ordenador, sino estar disponible para otras personas a través de internet.",
      },
    },
  },
  {
    id: "lk-localhost",
    kategorieId: KATEGORIE_ID,
    begriff: "localhost",
    kurzerklaerung:
      "localhost ist die Adresse, mit der ein Computer auf sich selbst zugreift, meist um eine Anwendung nur lokal zu testen.",
    erklaerung:
      "localhost ist wie ein Telefonat mit sich selbst: Statt eine Nummer im Ausland zu wählen, ruft man einfach die eigene Wohnung an. Wenn ein Entwickler eine Webseite auf seinem eigenen Rechner testet, läuft der Server dort lokal, und über localhost kann er im Browser darauf zugreifen, ohne dass irgendjemand sonst im Internet sie sehen kann.",
    beispiel:
      "Ein Entwickler startet seine Webseite lokal und öffnet im Browser die Adresse http://localhost:3000, um die Änderungen sofort zu sehen.",
    wannVerwendet:
      "Während der Entwicklung, um eine Anwendung schnell und ohne Internetverbindung auf dem eigenen Rechner auszuprobieren, bevor sie veröffentlicht wird.",
    befehl: "http://localhost:3000",
    icon: "🏠",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-server", "lk-port", "lk-staging-produktion"],
    uebersetzungen: {
      en: {
        begriff: "localhost",
        kurzerklaerung:
          "localhost is the address a computer uses to reach itself, usually to test an application only locally.",
        erklaerung:
          "localhost is like calling your own home instead of dialing a number abroad: instead of reaching out to somewhere else, you're simply reaching yourself. When a developer tests a website on their own computer, the server runs there locally, and localhost lets them access it in the browser without anyone else on the internet being able to see it.",
        beispiel:
          "A developer starts their website locally and opens http://localhost:3000 in the browser to see the changes right away.",
        wannVerwendet:
          "During development, to try out an application quickly and without an internet connection on your own computer, before it goes live.",
      },
      es: {
        begriff: "localhost",
        kurzerklaerung:
          "localhost es la dirección con la que un ordenador se conecta consigo mismo, normalmente para probar una aplicación solo en local.",
        erklaerung:
          "localhost es como llamarte a ti mismo por teléfono en lugar de marcar un número en el extranjero: en vez de comunicarte con otro sitio, simplemente te comunicas contigo mismo. Cuando un desarrollador prueba una página web en su propio ordenador, el server corre ahí en local, y con localhost puede acceder a ella desde el navegador sin que nadie más en internet pueda verla.",
        beispiel:
          "Un desarrollador arranca su página web en local y abre en el navegador la dirección http://localhost:3000 para ver los cambios al instante.",
        wannVerwendet:
          "Durante el desarrollo, para probar una aplicación de forma rápida y sin conexión a internet en tu propio ordenador, antes de publicarla.",
      },
    },
  },
  {
    id: "lk-port",
    kategorieId: KATEGORIE_ID,
    begriff: "Port",
    kurzerklaerung:
      "Ein Port ist eine nummerierte Tür an einem Server, über die eine bestimmte Anwendung angesprochen wird.",
    erklaerung:
      "Ein Server ist wie ein großes Bürogebäude mit einer Adresse, aber vielen Türen – jede Tür führt zu einer anderen Abteilung. Ein Port ist so eine Tür: Über Port 80 läuft meist die normale Webseite, während zum Beispiel Port 3000 oft für eine Anwendung genutzt wird, die gerade in der Entwicklung getestet wird. So können mehrere Dienste auf demselben Server gleichzeitig laufen, ohne sich in die Quere zu kommen.",
    beispiel:
      "Die Adresse http://localhost:3000 bedeutet: Gehe zum lokalen Rechner (localhost) und dort zu Tür Nummer 3000, hinter der die gerade laufende Test-Anwendung wartet.",
    wannVerwendet:
      "Wenn mehrere Anwendungen oder Dienste gleichzeitig auf einem Server laufen sollen, oder um zu verstehen, warum eine Webadresse eine Zahl nach dem Doppelpunkt enthält.",
    icon: "🚪",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-localhost", "lk-server"],
    uebersetzungen: {
      en: {
        begriff: "Port",
        kurzerklaerung:
          "A port is a numbered door on a server through which a particular application is reached.",
        erklaerung:
          "A server is like a large office building with one address but many doors — each door leads to a different department. A port is one of those doors: port 80 usually carries the normal website, while port 3000, for example, is often used for an application currently being tested during development. This lets several services run on the same server at the same time without getting in each other's way.",
        beispiel:
          "The address http://localhost:3000 means: go to the local computer (localhost) and, there, to door number 3000, behind which the application currently being tested is waiting.",
        wannVerwendet:
          "When several applications or services need to run on a server at the same time, or to understand why a web address has a number after the colon.",
      },
      es: {
        begriff: "Port",
        kurzerklaerung:
          "Un port es una puerta numerada de un server a través de la cual se accede a una aplicación concreta.",
        erklaerung:
          "Un server es como un gran edificio de oficinas con una sola dirección pero muchas puertas: cada puerta lleva a un departamento distinto. Un port es una de esas puertas: por el port 80 suele funcionar la página web normal, mientras que el port 3000, por ejemplo, se usa a menudo para una aplicación que se está probando durante el desarrollo. Así pueden funcionar varios servicios en el mismo server al mismo tiempo sin estorbarse entre sí.",
        beispiel:
          "La dirección http://localhost:3000 significa: ve al ordenador local (localhost) y allí a la puerta número 3000, detrás de la cual espera la aplicación que se está probando.",
        wannVerwendet:
          "Cuando varias aplicaciones o servicios deben funcionar a la vez en un server, o para entender por qué una dirección web lleva un número después de los dos puntos.",
      },
    },
  },
  {
    id: "lk-deployment",
    kategorieId: KATEGORIE_ID,
    begriff: "Deployment",
    kurzerklaerung:
      "Deployment bezeichnet den Vorgang, eine fertige Version einer Anwendung auf einen Server zu bringen, damit sie für andere nutzbar wird.",
    erklaerung:
      "Deployment ist wie der Umzug einer fertig eingerichteten Ausstellung vom Werkstatt-Hinterzimmer in die eigentliche Galerie, wo Besucher sie sehen können. Vorher wurde die Anwendung nur lokal auf dem eigenen Rechner getestet, danach ist sie live und für echte Nutzer im Internet erreichbar.",
    beispiel:
      "Ein Team hat eine neue Funktion fertig entwickelt und getestet und führt anschließend ein Deployment durch, wodurch die Änderung auf der echten Webseite erscheint.",
    wannVerwendet:
      "Immer dann, wenn eine getestete Version einer Anwendung für echte Nutzer freigeschaltet werden soll, oft am Ende eines Entwicklungszyklus.",
    icon: "🚀",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-hosting-anbieter", "lk-staging-produktion"],
    uebersetzungen: {
      en: {
        begriff: "Deployment",
        kurzerklaerung:
          "Deployment is the process of moving a finished version of an application onto a server so that others can use it.",
        erklaerung:
          "A deployment is like moving a fully set-up exhibition from the back room of the workshop into the actual gallery, where visitors can see it. Before, the application was only tested locally on your own computer; afterwards, it's live and reachable on the internet for real users.",
        beispiel:
          "A team finishes developing and testing a new feature, then carries out a deployment, so the change appears on the real website.",
        wannVerwendet:
          "Whenever a tested version of an application is ready to be released to real users, often at the end of a development cycle.",
      },
      es: {
        begriff: "Deployment",
        kurzerklaerung:
          "Deployment es el proceso de llevar una versión terminada de una aplicación a un server para que otros puedan usarla.",
        erklaerung:
          "Un deployment es como trasladar una exposición ya montada desde la trastienda del taller hasta la galería de verdad, donde el público puede verla. Antes, la aplicación solo se había probado en local en el propio ordenador; después, está en producción y es accesible en internet para usuarios reales.",
        beispiel:
          "Un equipo termina de desarrollar y probar una nueva función y a continuación hace un deployment, con lo que el cambio aparece en la página web real.",
        wannVerwendet:
          "Siempre que una versión probada de una aplicación esté lista para publicarse a usuarios reales, a menudo al final de un ciclo de desarrollo.",
      },
    },
  },
  {
    id: "lk-hosting-anbieter",
    kategorieId: KATEGORIE_ID,
    begriff: "Hosting-Anbieter",
    kurzerklaerung:
      "Ein Hosting-Anbieter ist ein Unternehmen, das Server bereitstellt und betreibt, auf denen andere ihre Anwendungen oder Webseiten laufen lassen können.",
    erklaerung:
      "Ein Hosting-Anbieter ist wie ein Vermieter von Lagerräumen: Statt selbst ein Gebäude zu bauen und instand zu halten, mietet man einfach Platz und Technik bei jemandem, der sich darum kümmert. So muss niemand einen eigenen Server im Keller aufstellen, kühlen und rund um die Uhr überwachen.",
    beispiel:
      "Ein kleines Unternehmen mietet bei einem Hosting-Anbieter wie Vercel oder einem Cloud-Anbieter Serverkapazität, um seine neue Webseite darauf laufen zu lassen.",
    wannVerwendet:
      "Sobald eine Anwendung öffentlich erreichbar sein soll und man dafür keinen eigenen physischen Server betreiben möchte.",
    icon: "🏢",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-server", "lk-deployment", "lk-domain"],
    uebersetzungen: {
      en: {
        begriff: "Hosting Provider",
        kurzerklaerung:
          "A hosting provider is a company that supplies and operates servers on which others can run their applications or websites.",
        erklaerung:
          "A hosting provider is like a landlord renting out storage space: instead of building and maintaining your own building, you simply rent space and technology from someone who takes care of it. That way, nobody has to set up their own server in the basement, keep it cool, and monitor it around the clock.",
        beispiel:
          "A small company rents server capacity from a hosting provider like Vercel or a cloud provider to run its new website on it.",
        wannVerwendet:
          "As soon as an application needs to be publicly reachable and you don't want to operate your own physical server for it.",
      },
      es: {
        begriff: "Proveedor de hosting",
        kurzerklaerung:
          "Un proveedor de hosting es una empresa que ofrece y gestiona servers en los que otros pueden hacer funcionar sus aplicaciones o páginas web.",
        erklaerung:
          "Un proveedor de hosting es como el propietario que alquila trasteros: en lugar de construir y mantener tu propio edificio, simplemente alquilas espacio y tecnología a alguien que se encarga de todo eso. Así nadie tiene que montar su propio server en el sótano, mantenerlo refrigerado y vigilarlo las veinticuatro horas.",
        beispiel:
          "Una pequeña empresa alquila capacidad de server a un proveedor de hosting como Vercel o a un proveedor en la nube para hacer funcionar en él su nueva página web.",
        wannVerwendet:
          "En cuanto una aplicación deba estar accesible al público y no se quiera operar un server físico propio para ello.",
      },
    },
  },
  {
    id: "lk-domain",
    kategorieId: KATEGORIE_ID,
    begriff: "Domain",
    kurzerklaerung:
      "Eine Domain ist der lesbare Name einer Webseite im Internet, wie zum Beispiel beispiel.de, statt einer schwer merkbaren Zahlenadresse.",
    erklaerung:
      "Eine Domain ist wie ein Hausname statt einer nüchternen Koordinatenangabe: Man merkt sich leichter „Café Sonnenblume“ als exakte Geokoordinaten. Technisch gesehen steckt hinter jeder Domain eine Zahlenadresse (IP-Adresse), aber Menschen tippen lieber einen Namen in den Browser ein.",
    beispiel:
      "Statt sich die Zahlenfolge einer Server-Adresse zu merken, gibt ein Nutzer einfach www.beispielshop.de in den Browser ein.",
    wannVerwendet:
      "Wenn eine Webseite oder ein Dienst unter einem eigenen, gut merkbaren Namen im Internet erreichbar sein soll.",
    icon: "🌐",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-dns", "lk-hosting-anbieter", "lk-https-zertifikat"],
    uebersetzungen: {
      en: {
        begriff: "Domain",
        kurzerklaerung:
          "A domain is the readable name of a website on the internet, such as example.com, instead of a hard-to-remember string of numbers.",
        erklaerung:
          "A domain is like the name of a house instead of a bare set of coordinates: it's easier to remember 'Café Sunflower' than exact geographic coordinates. Technically, every domain has a numeric address (an IP address) behind it, but people prefer typing a name into the browser.",
        beispiel:
          "Instead of remembering the string of numbers for a server's address, a user simply types www.exampleshop.com into the browser.",
        wannVerwendet:
          "Whenever a website or service needs to be reachable on the internet under its own, easy-to-remember name.",
      },
      es: {
        begriff: "Domain",
        kurzerklaerung:
          "Un domain es el nombre legible de una página web en internet, como ejemplo.es, en lugar de una dirección numérica difícil de recordar.",
        erklaerung:
          "Un domain es como el nombre de una casa en vez de unas frías coordenadas: es más fácil recordar «Café Girasol» que unas coordenadas geográficas exactas. Técnicamente, detrás de cada domain hay una dirección numérica (una dirección IP), pero las personas prefieren escribir un nombre en el navegador.",
        beispiel:
          "En lugar de memorizar la serie de números de la dirección de un server, un usuario simplemente escribe www.tiendaejemplo.es en el navegador.",
        wannVerwendet:
          "Cuando una página web o un servicio debe estar accesible en internet bajo un nombre propio y fácil de recordar.",
      },
    },
  },
  {
    id: "lk-dns",
    kategorieId: KATEGORIE_ID,
    begriff: "DNS",
    kurzerklaerung:
      "DNS ist der Dienst, der einen lesbaren Domainnamen in die passende Zahlenadresse (IP-Adresse) eines Servers übersetzt.",
    erklaerung:
      "DNS funktioniert wie ein Telefonbuch: Man kennt den Namen einer Person, aber nicht ihre Telefonnummer, also schlägt man im Telefonbuch nach. Genauso kennt der Browser den Domainnamen, muss aber erst beim DNS nachfragen, welche Zahlenadresse tatsächlich dahintersteckt, bevor er die Verbindung aufbauen kann.",
    beispiel:
      "Wenn jemand beispielshop.de eingibt, fragt der Browser zuerst einen DNS-Server, welche Zahlenadresse zu diesem Namen gehört, bevor die Seite geladen wird.",
    wannVerwendet:
      "Im Hintergrund bei jedem Seitenaufruf, sowie bewusst dann, wenn man eine neue Domain bei einem Hosting-Anbieter einrichtet und mit einem Server verknüpft.",
    icon: "📖",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-domain", "lk-server"],
    uebersetzungen: {
      en: {
        begriff: "DNS",
        kurzerklaerung:
          "DNS is the service that translates a readable domain name into the matching numeric address (IP address) of a server.",
        erklaerung:
          "DNS works like a phone book: you know a person's name but not their phone number, so you look it up. In the same way, the browser knows the domain name but first has to ask the DNS which numeric address is actually behind it before it can establish the connection.",
        beispiel:
          "When someone types exampleshop.com, the browser first asks a DNS server which numeric address belongs to that name before the page is loaded.",
        wannVerwendet:
          "In the background on every page visit, and deliberately whenever you set up a new domain with a hosting provider and link it to a server.",
      },
      es: {
        begriff: "DNS",
        kurzerklaerung:
          "El DNS es el servicio que traduce un nombre de domain legible a la dirección numérica (dirección IP) correspondiente de un server.",
        erklaerung:
          "El DNS funciona como una guía telefónica: conoces el nombre de una persona pero no su número, así que lo buscas. Del mismo modo, el navegador conoce el nombre del domain, pero primero tiene que preguntarle al DNS qué dirección numérica hay realmente detrás antes de poder establecer la conexión.",
        beispiel:
          "Cuando alguien escribe tiendaejemplo.es, el navegador primero le pregunta a un servidor DNS qué dirección numérica corresponde a ese nombre, antes de que se cargue la página.",
        wannVerwendet:
          "En segundo plano en cada visita a una página, y de forma deliberada cuando se configura un nuevo domain en un proveedor de hosting y se vincula a un server.",
      },
    },
  },
  {
    id: "lk-https-zertifikat",
    kategorieId: KATEGORIE_ID,
    begriff: "HTTPS/SSL-Zertifikat",
    kurzerklaerung:
      "Ein HTTPS/SSL-Zertifikat verschlüsselt die Verbindung zwischen Browser und Server und bestätigt, dass die Webseite tatsächlich die ist, für die sie sich ausgibt.",
    erklaerung:
      "Ein SSL-Zertifikat ist wie ein versiegelter, adressierter Briefumschlag statt einer offenen Postkarte: Niemand kann unterwegs mitlesen, und der Absender ist eindeutig bestätigt. Erkennbar ist eine solche gesicherte Verbindung am Schlosssymbol in der Adressleiste des Browsers und am „https“ statt „http“ vor der Webadresse.",
    beispiel:
      "Beim Eingeben von Zahlungsdaten in einem Online-Shop sorgt das HTTPS-Zertifikat dafür, dass diese Daten verschlüsselt übertragen werden und nicht von Dritten mitgelesen werden können.",
    wannVerwendet:
      "Bei jeder Webseite, die sensible Daten wie Passwörter oder Zahlungsinformationen überträgt, mittlerweile aber als Standard bei praktisch allen Webseiten.",
    icon: "🔒",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-domain", "lk-server"],
    uebersetzungen: {
      en: {
        begriff: "HTTPS/SSL Certificate",
        kurzerklaerung:
          "An HTTPS/SSL certificate encrypts the connection between browser and server and confirms that a website really is what it claims to be.",
        erklaerung:
          "An SSL certificate is like a sealed, addressed envelope instead of an open postcard: nobody can read along the way, and the sender is clearly confirmed. Such a secure connection is recognizable by the padlock icon in the browser's address bar and by 'https' instead of 'http' before the web address.",
        beispiel:
          "When entering payment details in an online shop, the HTTPS certificate ensures that this data is transmitted encrypted and can't be read by third parties.",
        wannVerwendet:
          "For any website transmitting sensitive data such as passwords or payment information, though nowadays it's the standard for practically all websites.",
      },
      es: {
        begriff: "Certificado HTTPS/SSL",
        kurzerklaerung:
          "Un certificado HTTPS/SSL cifra la conexión entre el navegador y el server y confirma que una página web es realmente quien dice ser.",
        erklaerung:
          "Un certificado SSL es como un sobre cerrado y con destinatario en vez de una postal abierta: nadie puede leerlo por el camino, y el remitente queda claramente confirmado. Esa conexión segura se reconoce por el icono del candado en la barra de direcciones del navegador y por el «https» en lugar de «http» delante de la dirección web.",
        beispiel:
          "Al introducir datos de pago en una tienda online, el certificado HTTPS garantiza que esos datos se transmiten cifrados y que terceros no pueden leerlos.",
        wannVerwendet:
          "En cualquier página web que transmita datos sensibles como contraseñas o información de pago, aunque hoy en día es el estándar en prácticamente todas las páginas web.",
      },
    },
  },
  {
    id: "lk-staging-produktion",
    kategorieId: KATEGORIE_ID,
    begriff: "Staging vs. Produktion",
    kurzerklaerung:
      "Staging ist eine Testumgebung, die der echten Anwendung möglichst genau gleicht, während Produktion die tatsächlich von Nutzern verwendete, live geschaltete Version ist.",
    erklaerung:
      "Der Unterschied ist wie zwischen einer Generalprobe und der echten Theateraufführung: Bei der Generalprobe (Staging) darf noch etwas schiefgehen, ohne dass es Zuschauer merken, bei der echten Aufführung (Produktion) sitzt bereits Publikum im Saal. Deshalb testet man neue Änderungen zuerst in einer separaten Staging-Umgebung, bevor man sie in die Produktion überträgt, wo echte Nutzer sie sehen.",
    beispiel:
      "Ein Team spielt eine neue Funktion zuerst auf den Staging-Server, prüft dort, ob alles funktioniert, und überträgt sie erst danach in die Produktionsumgebung.",
    wannVerwendet:
      "Vor jedem größeren Deployment, um Fehler zu entdecken, bevor sie echte Nutzer betreffen.",
    icon: "🎭",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-deployment", "lk-localhost"],
    uebersetzungen: {
      en: {
        begriff: "Staging vs. Production",
        kurzerklaerung:
          "Staging is a test environment that mirrors the real application as closely as possible, while production is the live version actually used by users.",
        erklaerung:
          "The difference is like a dress rehearsal versus the actual theater performance: during the dress rehearsal (staging), something can still go wrong without the audience noticing, but during the real performance (production), the audience is already in their seats. That's why new changes are tested first in a separate staging environment before being pushed to production, where real users see them.",
        beispiel:
          "A team first deploys a new feature to the staging server, checks there that everything works, and only then moves it into the production environment.",
        wannVerwendet:
          "Before every major deployment, to catch mistakes before they affect real users.",
      },
      es: {
        begriff: "Staging vs. Producción",
        kurzerklaerung:
          "Staging es un entorno de pruebas que se parece lo más posible a la aplicación real, mientras que producción es la versión en vivo que realmente usan los usuarios.",
        erklaerung:
          "La diferencia es como entre un ensayo general y la representación real de una obra de teatro: en el ensayo general (staging) todavía puede salir algo mal sin que el público se entere, pero en la función real (producción) el público ya está sentado en la sala. Por eso los cambios nuevos se prueban primero en un entorno de staging aparte antes de pasarlos a producción, donde los verán usuarios reales.",
        beispiel:
          "Un equipo primero despliega una nueva función en el server de staging, comprueba allí que todo funciona, y solo después la traslada al entorno de producción.",
        wannVerwendet:
          "Antes de cada deployment importante, para detectar errores antes de que afecten a usuarios reales.",
      },
    },
  },
];
