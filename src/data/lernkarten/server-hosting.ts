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
  },
];
