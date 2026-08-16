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
  },
];
