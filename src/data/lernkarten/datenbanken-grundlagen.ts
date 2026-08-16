import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-datenbanken-grundlagen";

export const datenbankenGrundlagenLernkarten: Lernkarte[] = [
  {
    id: "lk-datenbank",
    kategorieId: KATEGORIE_ID,
    begriff: "Datenbank",
    kurzerklaerung:
      "Eine Datenbank ist ein System zum strukturierten Speichern, Verwalten und Wiederfinden von Daten.",
    erklaerung:
      "Man kann sich eine Datenbank wie ein riesiges, perfekt organisiertes Aktenarchiv vorstellen: Statt Zettel lose in einer Schublade zu stapeln, liegt jede Information an einem klar definierten Platz mit Beschriftung, sodass man sie in Sekunden wiederfindet. Anders als eine einfache Textdatei ist eine Datenbank darauf ausgelegt, auch bei Millionen von Einträgen schnell, zuverlässig und gleichzeitig von vielen Nutzern durchsucht und verändert zu werden.",
    beispiel:
      "Ein Online-Shop speichert alle Kunden, Bestellungen und Produkte in einer Datenbank, damit die Website jederzeit den aktuellen Lagerbestand anzeigen kann.",
    wannVerwendet:
      "Sobald eine Anwendung Daten dauerhaft speichern muss, die über einen Programmneustart hinaus erhalten bleiben sollen – praktisch bei fast jeder ernsthaften Software.",
    icon: "🗄️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-relationale-datenbank", "lk-nosql-datenbank"],
  },
  {
    id: "lk-relationale-datenbank",
    kategorieId: KATEGORIE_ID,
    begriff: "Relationale Datenbank",
    kurzerklaerung:
      "Eine relationale Datenbank speichert Daten in klar strukturierten Tabellen, die über gemeinsame Werte miteinander verknüpft werden können.",
    erklaerung:
      "Man kann sich eine relationale Datenbank wie ein System aus mehreren Excel-Tabellen vorstellen, die sauber miteinander verbunden sind: Eine Tabelle enthält Kunden, eine andere Bestellungen, und über eine gemeinsame Spalte weiß man genau, welche Bestellung zu welchem Kunden gehört. Diese feste Struktur mit vordefinierten Spalten sorgt für Ordnung und verhindert widersprüchliche Daten.",
    beispiel:
      "Eine Bank verwaltet Kunden und Konten in zwei getrennten Tabellen einer relationalen Datenbank und verknüpft sie über die Kundennummer, damit jedes Konto eindeutig einer Person zugeordnet ist.",
    wannVerwendet:
      "Wenn Daten klare, sich wiederholende Strukturen haben und Beziehungen zwischen ihnen wichtig sind, etwa bei Kunden-, Bestell- oder Buchhaltungssystemen.",
    icon: "🧮",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-datenbank", "lk-sql", "lk-primaerschluessel", "lk-fremdschluessel"],
  },
  {
    id: "lk-nosql-datenbank",
    kategorieId: KATEGORIE_ID,
    begriff: "NoSQL-Datenbank",
    kurzerklaerung:
      "Eine NoSQL-Datenbank speichert Daten flexibel, oft ohne feste Tabellenstruktur, statt sie in starre Zeilen und Spalten zu zwingen.",
    erklaerung:
      "Während eine relationale Datenbank wie ein streng geordneter Aktenschrank mit gleich großen Schubladen funktioniert, ist eine NoSQL-Datenbank eher wie ein Regal mit unterschiedlich großen Kisten, in die man Dinge packen kann, wie sie gerade anfallen. Das macht sie besonders geeignet für Daten, deren Form sich häufig ändert oder die sehr unterschiedlich aufgebaut sind.",
    beispiel:
      "Ein soziales Netzwerk speichert Nutzerprofile mit stark unterschiedlichen Feldern – manche mit vielen Angaben, manche mit wenigen – in einer NoSQL-Datenbank wie MongoDB, ohne dafür ein starres Tabellenschema anpassen zu müssen.",
    wannVerwendet:
      "Wenn Datenstrukturen sich oft ändern, riesige Datenmengen anfallen oder sehr hohe Geschwindigkeit bei einfachen Abfragen wichtiger ist als strenge Konsistenz.",
    icon: "🧩",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-datenbank", "lk-relationale-datenbank"],
  },
  {
    id: "lk-sql",
    kategorieId: KATEGORIE_ID,
    begriff: "SQL",
    kurzerklaerung:
      "SQL (Structured Query Language) ist die Standardsprache, mit der man Daten in relationalen Datenbanken abfragt, einfügt, ändert oder löscht.",
    erklaerung:
      "SQL funktioniert wie eine sehr präzise Bestellsprache für Daten: Man formuliert in klaren, fast schon deutsch-ähnlichen Sätzen, was man haben möchte – etwa „alle Kunden aus Berlin“ – und die Datenbank liefert genau das. Diese Sprache wird von den meisten relationalen Datenbanksystemen verstanden, egal ob MySQL, PostgreSQL oder SQL Server.",
    beispiel:
      "Ein Entwickler möchte wissen, welche Bestellungen in den letzten 7 Tagen storniert wurden, und schreibt dafür eine SQL-Abfrage statt die Daten manuell zu durchsuchen.",
    wannVerwendet:
      "Immer dann, wenn Daten aus einer relationalen Datenbank gelesen oder verändert werden sollen – ein tägliches Werkzeug für so gut wie jede Backend-Entwicklung.",
    befehl: "SELECT * FROM kunden WHERE stadt = 'Berlin';",
    icon: "🔎",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-relationale-datenbank", "lk-primaerschluessel", "lk-fremdschluessel"],
  },
  {
    id: "lk-primaerschluessel",
    kategorieId: KATEGORIE_ID,
    begriff: "Primärschlüssel",
    kurzerklaerung:
      "Ein Primärschlüssel ist eine Spalte (oder Kombination von Spalten), die jeden Datensatz in einer Tabelle eindeutig identifiziert.",
    erklaerung:
      "Ein Primärschlüssel ist wie die Personalausweisnummer eines Menschen: Es können zwei Personen denselben Namen haben, aber niemals dieselbe Ausweisnummer. Genauso stellt der Primärschlüssel sicher, dass jeder Eintrag in einer Tabelle – etwa jeder Kunde – eindeutig unterscheidbar bleibt, selbst wenn andere Angaben identisch sind.",
    beispiel:
      "In einer Kundentabelle nutzt man nicht den Namen, sondern eine fortlaufende Kundennummer als Primärschlüssel, weil auch zwei Kunden namens „Max Müller“ eindeutig unterscheidbar bleiben müssen.",
    wannVerwendet:
      "Beim Entwurf jeder Tabelle in einer relationalen Datenbank, ganz am Anfang, damit spätere Verknüpfungen zwischen Tabellen überhaupt möglich sind.",
    icon: "🔑",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-relationale-datenbank", "lk-fremdschluessel"],
  },
  {
    id: "lk-fremdschluessel",
    kategorieId: KATEGORIE_ID,
    begriff: "Fremdschlüssel",
    kurzerklaerung:
      "Ein Fremdschlüssel ist eine Spalte in einer Tabelle, die auf den Primärschlüssel einer anderen Tabelle verweist und so eine Beziehung herstellt.",
    erklaerung:
      "Ein Fremdschlüssel funktioniert wie ein Verweis auf einer Akte, der sagt „siehe Akte Nummer 42 im anderen Ordner“: Statt alle Kundendaten in jeder Bestellung zu wiederholen, notiert man dort nur die Kundennummer und schlägt die Details bei Bedarf in der Kundentabelle nach. So bleiben Daten an einer Stelle gepflegt und trotzdem miteinander verknüpft.",
    beispiel:
      "In einer Bestelltabelle verweist die Spalte kunde_id als Fremdschlüssel auf die passende Zeile in der Kundentabelle, sodass jede Bestellung eindeutig einem Kunden zugeordnet ist.",
    wannVerwendet:
      "Beim Modellieren von Beziehungen zwischen Tabellen, etwa zwischen Kunden und Bestellungen oder zwischen Artikeln und Kategorien.",
    icon: "🔗",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-primaerschluessel", "lk-relationale-datenbank"],
  },
  {
    id: "lk-orm",
    kategorieId: KATEGORIE_ID,
    begriff: "ORM (Object-Relational Mapping)",
    kurzerklaerung:
      "Ein ORM übersetzt zwischen den Objekten einer Programmiersprache und den Tabellen einer relationalen Datenbank, ohne dass man selbst SQL schreiben muss.",
    erklaerung:
      "Ein ORM ist wie ein Dolmetscher zwischen zwei Sprachen, die eigentlich nicht direkt miteinander reden können: Der Programmcode denkt in Objekten mit Eigenschaften, die Datenbank denkt in Tabellen mit Zeilen und Spalten. Das ORM übersetzt automatisch in beide Richtungen, sodass Entwickler mit vertrautem Programmcode arbeiten können, während im Hintergrund passendes SQL erzeugt wird.",
    beispiel:
      "Ein Entwickler ruft in seinem Code Kunde.finden(id: 5) auf, und ein ORM wie Prisma oder Sequelize übersetzt das im Hintergrund automatisch in die passende SQL-Abfrage.",
    wannVerwendet:
      "Beim Aufbau von Anwendungen, die häufig mit einer relationalen Datenbank kommunizieren, um wiederkehrenden SQL-Code zu vermeiden und die Arbeit zu beschleunigen.",
    icon: "🌉",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-relationale-datenbank", "lk-sql", "lk-datenbank-migration"],
  },
  {
    id: "lk-datenbank-migration",
    kategorieId: KATEGORIE_ID,
    begriff: "Datenbank-Migration",
    kurzerklaerung:
      "Eine Datenbank-Migration ist eine versionierte, nachvollziehbare Änderung an der Struktur einer Datenbank, etwa das Hinzufügen einer neuen Spalte.",
    erklaerung:
      "Man kann sich Migrationen wie ein Bautagebuch für die Datenbank vorstellen: Statt heimlich und unkontrolliert Wände im Gebäude zu versetzen, wird jede bauliche Änderung als nummerierter Eintrag festgehalten, den jeder nachvollziehen und im Notfall auch wieder rückgängig machen kann. So bleiben die Datenbankstrukturen auf allen Rechnern im Team und auf dem Server konsistent.",
    beispiel:
      "Ein Entwickler fügt der Kundentabelle ein neues Feld für die Telefonnummer hinzu und erstellt dafür eine Migration, die dieses Feld bei allen Teammitgliedern und auf dem Produktivserver gleichermaßen anlegt.",
    wannVerwendet:
      "Immer dann, wenn sich die Struktur einer Datenbank ändern soll, etwa beim Hinzufügen, Umbenennen oder Entfernen von Tabellen und Spalten während der Entwicklung.",
    befehl: "npx prisma migrate dev --name add-telefonnummer",
    icon: "🧱",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-orm", "lk-relationale-datenbank"],
  },
  {
    id: "lk-datenbank-index",
    kategorieId: KATEGORIE_ID,
    begriff: "Index (Datenbank)",
    kurzerklaerung:
      "Ein Index ist eine zusätzliche, optimierte Datenstruktur, die das Suchen in einer Datenbanktabelle erheblich beschleunigt.",
    erklaerung:
      "Ein Datenbank-Index funktioniert wie das Stichwortverzeichnis am Ende eines Fachbuchs: Statt Seite für Seite nach einem Begriff zu blättern, schaut man im Register nach und springt direkt zur richtigen Stelle. Genauso muss die Datenbank dank eines Index nicht jede einzelne Zeile durchsuchen, sondern findet passende Einträge viel schneller – allerdings kostet das zusätzlichen Speicherplatz und etwas mehr Aufwand beim Schreiben neuer Daten.",
    beispiel:
      "Weil in einer großen Bestelltabelle sehr oft nach der E-Mail-Adresse des Kunden gesucht wird, legt ein Entwickler auf genau dieser Spalte einen Index an, um die Suche spürbar zu beschleunigen.",
    wannVerwendet:
      "Wenn Abfragen auf einer bestimmten Spalte häufig vorkommen und mit wachsender Datenmenge spürbar langsamer werden.",
    befehl: "CREATE INDEX idx_kunden_email ON kunden (email);",
    icon: "⚡",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-relationale-datenbank", "lk-sql"],
  },
];
