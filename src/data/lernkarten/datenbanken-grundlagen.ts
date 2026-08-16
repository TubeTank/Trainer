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
    uebersetzungen: {
      en: {
        begriff: "Database",
        kurzerklaerung:
          "A database is a system for storing, managing, and retrieving data in a structured way.",
        erklaerung:
          "Think of a database like a huge, perfectly organized filing archive: instead of loose notes piled in a drawer, every piece of information sits in a clearly labeled spot, so you can find it in seconds. Unlike a simple text file, a database is built to be searched and changed quickly and reliably by many users at once, even with millions of entries.",
        beispiel:
          "An online shop stores all customers, orders, and products in a database so the website can always show the current stock levels.",
        wannVerwendet:
          "As soon as an application needs to store data permanently, beyond a single program restart – which is the case for almost every serious piece of software.",
      },
      es: {
        begriff: "Base de datos",
        kurzerklaerung:
          "Una base de datos es un sistema para almacenar, gestionar y recuperar datos de forma estructurada.",
        erklaerung:
          "Puedes imaginar una base de datos como un enorme archivo perfectamente organizado: en lugar de amontonar papeles sueltos en un cajón, cada información tiene un lugar claramente definido y etiquetado, de modo que puedas encontrarla en segundos. A diferencia de un simple archivo de texto, una base de datos está diseñada para poder consultarse y modificarse de forma rápida y fiable por muchos usuarios a la vez, incluso con millones de registros.",
        beispiel:
          "Una tienda online guarda todos los clientes, pedidos y productos en una base de datos para que el sitio web pueda mostrar en todo momento el stock actual.",
        wannVerwendet:
          "En cuanto una aplicación necesita almacenar datos de forma permanente, que se conserven más allá de un reinicio del programa; algo habitual en prácticamente cualquier software serio.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Relational Database",
        kurzerklaerung:
          "A relational database stores data in clearly structured tables that can be linked to one another through shared values.",
        erklaerung:
          "You can picture a relational database as a set of several spreadsheets that are neatly connected to each other: one table holds customers, another holds orders, and a shared column tells you exactly which order belongs to which customer. This fixed structure with predefined columns keeps things orderly and prevents contradictory data.",
        beispiel:
          "A bank manages customers and accounts in two separate tables of a relational database and links them via the customer number, so that every account is clearly assigned to one person.",
        wannVerwendet:
          "When data has clear, recurring structures and the relationships between them matter, for example in customer, order, or accounting systems.",
      },
      es: {
        begriff: "Base de datos relacional",
        kurzerklaerung:
          "Una base de datos relacional almacena los datos en tablas claramente estructuradas que se pueden vincular entre sí mediante valores comunes.",
        erklaerung:
          "Puedes imaginar una base de datos relacional como un conjunto de varias hojas de cálculo perfectamente conectadas entre sí: una tabla contiene los clientes, otra los pedidos, y una columna común indica exactamente qué pedido pertenece a qué cliente. Esta estructura fija, con columnas predefinidas, aporta orden y evita datos contradictorios.",
        beispiel:
          "Un banco gestiona clientes y cuentas en dos tablas separadas de una base de datos relacional y las vincula mediante el número de cliente, de modo que cada cuenta queda asignada claramente a una persona.",
        wannVerwendet:
          "Cuando los datos tienen estructuras claras y repetitivas, y las relaciones entre ellos son importantes, por ejemplo en sistemas de clientes, pedidos o contabilidad.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "NoSQL Database",
        kurzerklaerung:
          "A NoSQL database stores data flexibly, often without a fixed table structure, instead of forcing it into rigid rows and columns.",
        erklaerung:
          "While a relational database works like a strictly organized filing cabinet with drawers of identical size, a NoSQL database is more like a shelf with boxes of different sizes that you fill however things happen to come in. That makes it especially well suited for data whose shape changes frequently or that is structured very differently from one entry to the next.",
        beispiel:
          "A social network stores user profiles with very different fields – some with lots of details, some with only a few – in a NoSQL database like MongoDB, without having to adapt a rigid table schema for it.",
        wannVerwendet:
          "When data structures change often, huge amounts of data pile up, or very high speed for simple queries matters more than strict consistency.",
      },
      es: {
        begriff: "Base de datos NoSQL",
        kurzerklaerung:
          "Una base de datos NoSQL almacena los datos de forma flexible, a menudo sin una estructura de tablas fija, en lugar de forzarlos en filas y columnas rígidas.",
        erklaerung:
          "Mientras que una base de datos relacional funciona como un archivador estrictamente ordenado con cajones del mismo tamaño, una base de datos NoSQL se parece más a una estantería con cajas de tamaños distintos en las que se va guardando lo que va surgiendo. Esto la hace especialmente adecuada para datos cuya forma cambia con frecuencia o que están estructurados de manera muy diferente entre sí.",
        beispiel:
          "Una red social almacena perfiles de usuario con campos muy distintos entre sí -algunos con muchos datos, otros con pocos- en una base de datos NoSQL como MongoDB, sin tener que adaptar un esquema de tabla rígido para ello.",
        wannVerwendet:
          "Cuando las estructuras de datos cambian con frecuencia, se acumulan enormes cantidades de datos, o la velocidad en consultas sencillas importa más que una consistencia estricta.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "SQL",
        kurzerklaerung:
          "SQL (Structured Query Language) is the standard language used to query, insert, change, or delete data in relational databases.",
        erklaerung:
          "SQL works like a very precise ordering language for data: you phrase what you want in clear, almost plain-English sentences – for example \"all customers from Berlin\" – and the database delivers exactly that. This language is understood by most relational database systems, whether MySQL, PostgreSQL, or SQL Server.",
        beispiel:
          "A developer wants to know which orders were canceled in the last 7 days and writes an SQL query for it instead of searching through the data by hand.",
        wannVerwendet:
          "Whenever data needs to be read from or changed in a relational database – a daily tool for pretty much any backend development.",
      },
      es: {
        begriff: "SQL",
        kurzerklaerung:
          "SQL (Structured Query Language) es el lenguaje estándar para consultar, insertar, modificar o eliminar datos en bases de datos relacionales.",
        erklaerung:
          "SQL funciona como un lenguaje de pedido muy preciso para los datos: formulas en frases claras, casi como en español cotidiano, lo que quieres obtener -por ejemplo, \"todos los clientes de Berlín\"- y la base de datos entrega exactamente eso. Este lenguaje lo entienden la mayoría de los sistemas de bases de datos relacionales, ya sea MySQL, PostgreSQL o SQL Server.",
        beispiel:
          "Un desarrollador quiere saber qué pedidos se cancelaron en los últimos 7 días y para ello escribe una consulta SQL en lugar de revisar los datos manualmente.",
        wannVerwendet:
          "Siempre que haya que leer o modificar datos de una base de datos relacional; una herramienta diaria en prácticamente cualquier desarrollo backend.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Primary Key",
        kurzerklaerung:
          "A primary key is a column (or combination of columns) that uniquely identifies every record in a table.",
        erklaerung:
          "A primary key is like a person's ID card number: two people can share the same name, but never the same ID number. In the same way, a primary key guarantees that every entry in a table – every customer, for instance – stays uniquely distinguishable, even if all the other details are identical.",
        beispiel:
          "In a customer table, you don't use the name but a sequential customer number as the primary key, because even two customers both named \"Max Müller\" must remain uniquely distinguishable.",
        wannVerwendet:
          "When designing any table in a relational database, right at the start, so that later links between tables are possible at all.",
      },
      es: {
        begriff: "Clave primaria",
        kurzerklaerung:
          "Una clave primaria es una columna (o combinación de columnas) que identifica de forma única cada registro de una tabla.",
        erklaerung:
          "Una clave primaria es como el número del documento de identidad de una persona: dos personas pueden tener el mismo nombre, pero nunca el mismo número de identidad. Del mismo modo, la clave primaria garantiza que cada registro de una tabla -por ejemplo, cada cliente- siga siendo distinguible de forma única, incluso si el resto de los datos son idénticos.",
        beispiel:
          "En una tabla de clientes no se usa el nombre, sino un número de cliente consecutivo como clave primaria, porque incluso dos clientes llamados \"Max Müller\" deben poder distinguirse de forma inequívoca.",
        wannVerwendet:
          "Al diseñar cualquier tabla en una base de datos relacional, desde el principio, para que luego sea posible establecer vínculos entre tablas.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Foreign Key",
        kurzerklaerung:
          "A foreign key is a column in one table that points to the primary key of another table, creating a relationship between them.",
        erklaerung:
          "A foreign key works like a note on a file that says \"see file number 42 in the other folder\": instead of repeating all the customer details in every single order, you just note the customer number there and look up the details in the customer table whenever you need them. That way, data is maintained in one place while still staying linked together.",
        beispiel:
          "In an orders table, the column customer_id acts as a foreign key pointing to the matching row in the customer table, so that every order is clearly assigned to one customer.",
        wannVerwendet:
          "When modeling relationships between tables, for example between customers and orders, or between products and categories.",
      },
      es: {
        begriff: "Clave foránea",
        kurzerklaerung:
          "Una clave foránea es una columna de una tabla que apunta a la clave primaria de otra tabla, creando así una relación entre ambas.",
        erklaerung:
          "Una clave foránea funciona como una anotación en un expediente que dice \"ver expediente número 42 en la otra carpeta\": en lugar de repetir todos los datos del cliente en cada pedido, ahí solo se anota el número de cliente y, si hace falta, se consultan los detalles en la tabla de clientes. Así, los datos se mantienen en un único lugar y, aun así, quedan vinculados entre sí.",
        beispiel:
          "En una tabla de pedidos, la columna cliente_id actúa como clave foránea que apunta a la fila correspondiente en la tabla de clientes, de modo que cada pedido queda asignado claramente a un cliente.",
        wannVerwendet:
          "Al modelar relaciones entre tablas, por ejemplo entre clientes y pedidos, o entre artículos y categorías.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "ORM (Object-Relational Mapping)",
        kurzerklaerung:
          "An ORM translates between the objects of a programming language and the tables of a relational database, so you don't have to write SQL yourself.",
        erklaerung:
          "An ORM is like an interpreter between two languages that can't actually talk to each other directly: the code thinks in objects with properties, while the database thinks in tables with rows and columns. The ORM automatically translates in both directions, so developers can work with familiar code while matching SQL is generated behind the scenes.",
        beispiel:
          "A developer calls Customer.find(id: 5) in their code, and an ORM like Prisma or Sequelize automatically translates that into the matching SQL query behind the scenes.",
        wannVerwendet:
          "When building applications that communicate frequently with a relational database, to avoid repetitive SQL code and speed up the work.",
      },
      es: {
        begriff: "ORM (mapeo objeto-relacional)",
        kurzerklaerung:
          "Un ORM traduce entre los objetos de un lenguaje de programación y las tablas de una base de datos relacional, sin que tengas que escribir SQL tú mismo.",
        erklaerung:
          "Un ORM es como un intérprete entre dos idiomas que en realidad no pueden comunicarse directamente entre sí: el código piensa en objetos con propiedades, mientras que la base de datos piensa en tablas con filas y columnas. El ORM traduce automáticamente en ambas direcciones, de modo que los desarrolladores pueden trabajar con código familiar mientras, en segundo plano, se genera el SQL correspondiente.",
        beispiel:
          "Un desarrollador llama en su código a Cliente.buscar(id: 5), y un ORM como Prisma o Sequelize lo traduce automáticamente, en segundo plano, a la consulta SQL correspondiente.",
        wannVerwendet:
          "Al construir aplicaciones que se comunican con frecuencia con una base de datos relacional, para evitar código SQL repetitivo y agilizar el trabajo.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Database Migration",
        kurzerklaerung:
          "A database migration is a versioned, traceable change to the structure of a database, such as adding a new column.",
        erklaerung:
          "You can think of migrations like a construction logbook for the database: instead of secretly and haphazardly moving walls in a building, every structural change is recorded as a numbered entry that everyone can follow and, if needed, undo again. This keeps the database structure consistent across every machine on the team and on the server.",
        beispiel:
          "A developer adds a new field for the phone number to the customer table and creates a migration for it, which sets up this field the same way for every team member and on the production server.",
        wannVerwendet:
          "Whenever the structure of a database needs to change, for example when adding, renaming, or removing tables and columns during development.",
      },
      es: {
        begriff: "Migración de base de datos",
        kurzerklaerung:
          "Una migración de base de datos es un cambio versionado y rastreable en la estructura de una base de datos, como añadir una nueva columna.",
        erklaerung:
          "Puedes imaginar las migraciones como un diario de obra para la base de datos: en lugar de mover paredes del edificio a escondidas y sin control, cada cambio estructural queda registrado como una entrada numerada que cualquiera puede seguir y, si hace falta, deshacer. Así, la estructura de la base de datos se mantiene coherente en todos los equipos del proyecto y en el servidor.",
        beispiel:
          "Un desarrollador añade a la tabla de clientes un nuevo campo para el número de teléfono y crea una migración que aplica ese campo por igual a todos los miembros del equipo y al servidor de producción.",
        wannVerwendet:
          "Siempre que la estructura de una base de datos deba cambiar, por ejemplo al añadir, renombrar o eliminar tablas y columnas durante el desarrollo.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Index (Database)",
        kurzerklaerung:
          "An index is an additional, optimized data structure that dramatically speeds up searching within a database table.",
        erklaerung:
          "A database index works like the index at the back of a reference book: instead of flipping page by page looking for a term, you check the index and jump straight to the right spot. In the same way, thanks to an index, the database doesn't need to scan every single row but finds matching entries much faster – though that comes at the cost of extra storage space and a bit more effort when writing new data.",
        beispiel:
          "Because a large orders table is very often searched by the customer's email address, a developer creates an index on exactly that column to noticeably speed up the search.",
        wannVerwendet:
          "When queries on a particular column occur frequently and get noticeably slower as the amount of data grows.",
      },
      es: {
        begriff: "Índice (base de datos)",
        kurzerklaerung:
          "Un índice es una estructura de datos adicional y optimizada que acelera considerablemente la búsqueda en una tabla de una base de datos.",
        erklaerung:
          "Un índice de base de datos funciona como el índice alfabético al final de un libro técnico: en lugar de hojear página por página buscando un término, consultas el índice y saltas directamente al lugar correcto. Del mismo modo, gracias a un índice, la base de datos no necesita recorrer cada fila una por una, sino que encuentra los registros correspondientes mucho más rápido; eso sí, a costa de espacio de almacenamiento adicional y algo más de esfuerzo al escribir datos nuevos.",
        beispiel:
          "Como en una tabla de pedidos muy grande se busca muy a menudo por la dirección de correo electrónico del cliente, un desarrollador crea un índice justo en esa columna para acelerar notablemente la búsqueda.",
        wannVerwendet:
          "Cuando las consultas sobre una determinada columna son frecuentes y se vuelven notablemente más lentas a medida que crece la cantidad de datos.",
      },
    },
  },
];
