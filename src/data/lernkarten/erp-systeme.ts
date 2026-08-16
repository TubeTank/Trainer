import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-erp-systeme";

export const erpSystemeLernkarten: Lernkarte[] = [
  {
    id: "lk-erp-system",
    kategorieId: KATEGORIE_ID,
    begriff: "ERP-System",
    kurzerklaerung:
      "Ein ERP-System ist eine zentrale Unternehmenssoftware, die verschiedene Geschäftsbereiche wie Einkauf, Lager, Produktion und Buchhaltung in einer gemeinsamen Datenbasis abbildet.",
    erklaerung:
      "Man kann sich ein ERP-System wie das zentrale Nervensystem eines Unternehmens vorstellen: Statt dass jede Abteilung ihre eigenen Zettel und Excel-Listen führt, laufen alle Informationen an einer Stelle zusammen und stehen allen anderen Bereichen sofort zur Verfügung. Bestellt der Einkauf Material, weiß das Lager automatisch, dass es ankommt, und die Buchhaltung sieht die entstehenden Kosten. Dadurch entsteht ein durchgängiges Bild des gesamten Unternehmens statt vieler isolierter Insellösungen.",
    beispiel:
      "Ein Fertigungsbetrieb nutzt ein ERP-System, in dem Bestellungen, Lagerbestände, Produktionsaufträge und Rechnungen alle in derselben Software erfasst und miteinander verknüpft sind.",
    wannVerwendet:
      "Sobald ein Unternehmen mehrere Abteilungen koordinieren muss und einzelne Excel-Listen oder getrennte Programme nicht mehr ausreichen, um den Überblick zu behalten.",
    icon: "🏢",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-erp-modul", "lk-stammdaten", "lk-bewegungsdaten"],
    uebersetzungen: {
      en: {
        begriff: "ERP System",
        kurzerklaerung:
          "An ERP system is central business software that brings together different areas of a company — such as purchasing, warehousing, production, and accounting — in one shared database.",
        erklaerung:
          "Think of an ERP system as the central nervous system of a company: instead of every department keeping its own notes and spreadsheets, all information flows together in one place and is instantly available to everyone else. If purchasing orders material, the warehouse automatically knows it's on the way, and accounting sees the resulting costs. This creates one consistent picture of the whole company instead of many isolated, disconnected solutions.",
        beispiel:
          "A manufacturing company uses an ERP system in which orders, stock levels, production orders, and invoices are all recorded in the same software and linked to one another.",
        wannVerwendet:
          "As soon as a company needs to coordinate multiple departments and separate spreadsheets or standalone programs are no longer enough to keep track of everything.",
      },
      es: {
        begriff: "Sistema ERP",
        kurzerklaerung:
          "Un sistema ERP es un software empresarial central que integra diferentes áreas de la empresa, como compras, almacén, producción y contabilidad, en una base de datos común.",
        erklaerung:
          "Un sistema ERP puede imaginarse como el sistema nervioso central de una empresa: en lugar de que cada departamento lleve sus propias notas y hojas de Excel, toda la información converge en un solo lugar y está disponible de inmediato para el resto de las áreas. Si compras hace un pedido de material, el almacén sabe automáticamente que va a llegar, y contabilidad ve los costes que se generan. Así se obtiene una imagen coherente de toda la empresa en lugar de muchas soluciones aisladas.",
        beispiel:
          "Una empresa de fabricación utiliza un sistema ERP en el que los pedidos, las existencias, las órdenes de producción y las facturas se registran en el mismo software y están conectados entre sí.",
        wannVerwendet:
          "En cuanto una empresa necesita coordinar varios departamentos y las hojas de Excel individuales o los programas independientes ya no bastan para mantener una visión general.",
      },
    },
  },
  {
    id: "lk-erp-modul",
    kategorieId: KATEGORIE_ID,
    begriff: "Modul (ERP)",
    kurzerklaerung:
      "Ein Modul ist ein in sich geschlossener Funktionsbereich innerhalb eines ERP-Systems, der einen bestimmten Geschäftsprozess abdeckt, etwa Einkauf oder Personalwesen.",
    erklaerung:
      "Module sind wie einzelne Zimmer in einem großen Haus: Jedes Zimmer hat seine eigene Funktion – Küche, Werkstatt, Büro – aber alle gehören zum selben Gebäude und sind über Türen miteinander verbunden. Genauso deckt ein ERP-Modul einen klar abgegrenzten Bereich wie Einkauf, Verkauf oder Buchhaltung ab, teilt sich aber dieselbe Datenbasis mit allen anderen Modulen. Unternehmen aktivieren meist nur die Module, die sie tatsächlich brauchen.",
    beispiel:
      "Ein Handelsunternehmen nutzt die Module „Einkauf“ und „Lager“ intensiv, verzichtet aber auf das Modul „Produktion“, da es selbst nichts herstellt.",
    wannVerwendet:
      "Wenn festgelegt wird, welche Funktionsbereiche ein Unternehmen in seinem ERP-System überhaupt benötigt und einrichten lassen möchte.",
    icon: "🧩",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-erp-system", "lk-customizing"],
    uebersetzungen: {
      en: {
        begriff: "Module (ERP)",
        kurzerklaerung:
          "A module is a self-contained functional area within an ERP system that covers a specific business process, such as purchasing or human resources.",
        erklaerung:
          "Modules are like individual rooms in a large house: each room has its own purpose — kitchen, workshop, office — but they all belong to the same building and are connected by doors. In the same way, an ERP module covers a clearly defined area such as purchasing, sales, or accounting, but shares the same underlying database with all the other modules. Companies usually only activate the modules they actually need.",
        beispiel:
          'A trading company makes heavy use of the "Purchasing" and "Warehouse" modules but does without the "Production" module, since it doesn\'t manufacture anything itself.',
        wannVerwendet:
          "When deciding which functional areas a company actually needs in its ERP system and wants to have set up.",
      },
      es: {
        begriff: "Módulo (ERP)",
        kurzerklaerung:
          "Un módulo es un área funcional autónoma dentro de un sistema ERP que cubre un proceso empresarial concreto, como compras o recursos humanos.",
        erklaerung:
          "Los módulos son como habitaciones individuales de una gran casa: cada una tiene su propia función —cocina, taller, oficina—, pero todas pertenecen al mismo edificio y están conectadas por puertas. De igual modo, un módulo ERP cubre un área claramente delimitada, como compras, ventas o contabilidad, pero comparte la misma base de datos con todos los demás módulos. Las empresas suelen activar solo los módulos que realmente necesitan.",
        beispiel:
          "Una empresa comercial utiliza intensamente los módulos de «Compras» y «Almacén», pero prescinde del módulo de «Producción», ya que no fabrica nada por sí misma.",
        wannVerwendet:
          "Cuando se determina qué áreas funcionales necesita realmente una empresa en su sistema ERP y desea que se configuren.",
      },
    },
  },
  {
    id: "lk-stammdaten",
    kategorieId: KATEGORIE_ID,
    begriff: "Stammdaten",
    kurzerklaerung:
      "Stammdaten sind grundlegende, langfristig gültige Informationen wie Kunden-, Lieferanten- oder Artikeldaten, die sich nur selten ändern.",
    erklaerung:
      "Stammdaten sind wie das Telefonbuch eines Unternehmens: Name, Adresse und Kontodaten eines Kunden stehen einmal fest und werden danach immer wieder verwendet, statt bei jedem Vorgang neu abgefragt zu werden. Genauso hinterlegt ein ERP-System einmal die grundlegenden Eigenschaften von Artikeln, Kunden oder Lieferanten, damit darauf in unzähligen täglichen Vorgängen zurückgegriffen werden kann.",
    beispiel:
      "Die Adresse und Zahlungsbedingungen eines Lieferanten werden einmal als Stammdaten angelegt und danach bei jeder neuen Bestellung automatisch übernommen.",
    wannVerwendet:
      "Bei der Ersteinrichtung eines Geschäftspartners, Artikels oder Kontos sowie immer dann, wenn sich grundlegende Angaben dauerhaft ändern, etwa ein Firmenumzug.",
    icon: "🗂️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-bewegungsdaten", "lk-erp-system"],
    uebersetzungen: {
      en: {
        begriff: "Master Data",
        kurzerklaerung:
          "Master data is basic, long-lasting information — such as customer, supplier, or item data — that rarely changes.",
        erklaerung:
          "Master data is like a company's phone book: a customer's name, address, and account details are recorded once and then used again and again, instead of being looked up from scratch every time. In the same way, an ERP system records the basic properties of items, customers, or suppliers once, so they can be reused in countless daily transactions.",
        beispiel:
          "A supplier's address and payment terms are entered once as master data and are then automatically applied to every new order.",
        wannVerwendet:
          "When first setting up a business partner, item, or account, and whenever basic details change permanently, such as a company relocating.",
      },
      es: {
        begriff: "Datos maestros",
        kurzerklaerung:
          "Los datos maestros son información básica y de validez duradera, como los datos de clientes, proveedores o artículos, que rara vez cambia.",
        erklaerung:
          "Los datos maestros son como la agenda telefónica de una empresa: el nombre, la dirección y los datos bancarios de un cliente se registran una vez y luego se reutilizan una y otra vez, en lugar de volver a consultarlos en cada operación. De igual manera, un sistema ERP guarda una sola vez las características básicas de artículos, clientes o proveedores, para poder recurrir a ellas en innumerables operaciones diarias.",
        beispiel:
          "La dirección y las condiciones de pago de un proveedor se registran una vez como datos maestros y luego se aplican automáticamente a cada nuevo pedido.",
        wannVerwendet:
          "Al dar de alta por primera vez a un socio comercial, un artículo o una cuenta, y siempre que los datos básicos cambien de forma permanente, por ejemplo, al trasladarse una empresa de sede.",
      },
    },
  },
  {
    id: "lk-bewegungsdaten",
    kategorieId: KATEGORIE_ID,
    begriff: "Bewegungsdaten",
    kurzerklaerung:
      "Bewegungsdaten sind Informationen zu konkreten Geschäftsvorgängen, die laufend neu entstehen, etwa Bestellungen, Lieferungen oder Rechnungen.",
    erklaerung:
      "Wenn Stammdaten das Telefonbuch sind, dann sind Bewegungsdaten die einzelnen Telefongespräche: Jeder Anruf ist neu, einmalig und wird protokolliert, während die Kontaktdaten dahinter gleich bleiben. Im ERP-System entstehen Bewegungsdaten also bei jedem tatsächlichen Vorgang – einer Bestellung, einer Wareneingangsbuchung, einer Rechnung – und greifen dabei auf die bereits vorhandenen Stammdaten zurück.",
    beispiel:
      "Jede einzelne Kundenbestellung mit Menge, Datum und Preis ist ein Bewegungsdatensatz, der auf die hinterlegten Stammdaten des jeweiligen Kunden und Artikels zugreift.",
    wannVerwendet:
      "Bei jedem laufenden Geschäftsvorgang im Tagesgeschäft, etwa beim Erfassen einer Bestellung, einer Lieferung oder einer Rechnung.",
    icon: "🔄",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-stammdaten", "lk-reporting"],
    uebersetzungen: {
      en: {
        begriff: "Transactional Data",
        kurzerklaerung:
          "Transactional data is information about specific business events that arise continuously, such as orders, deliveries, or invoices.",
        erklaerung:
          "If master data is the phone book, then transactional data is the individual phone calls: each call is new, one-off, and logged, while the contact details behind it stay the same. In an ERP system, transactional data is created with every actual event — an order, a goods-receipt posting, an invoice — and draws on the master data that already exists.",
        beispiel:
          "Every individual customer order — with quantity, date, and price — is a piece of transactional data that draws on the stored master data of the customer and item involved.",
        wannVerwendet:
          "With every ongoing business transaction in day-to-day operations, such as recording an order, a delivery, or an invoice.",
      },
      es: {
        begriff: "Datos transaccionales",
        kurzerklaerung:
          "Los datos transaccionales son información sobre operaciones comerciales concretas que se generan continuamente, como pedidos, entregas o facturas.",
        erklaerung:
          "Si los datos maestros son la agenda telefónica, los datos transaccionales son las llamadas individuales: cada llamada es nueva, única y queda registrada, mientras que los datos de contacto detrás de ella permanecen iguales. En el sistema ERP, los datos transaccionales se generan con cada operación real —un pedido, una entrada de mercancía, una factura— y se apoyan en los datos maestros ya existentes.",
        beispiel:
          "Cada pedido de cliente individual, con su cantidad, fecha y precio, es un registro de datos transaccionales que recurre a los datos maestros almacenados del cliente y del artículo correspondientes.",
        wannVerwendet:
          "En cada operación comercial del día a día, por ejemplo, al registrar un pedido, una entrega o una factura.",
      },
    },
  },
  {
    id: "lk-erp-schnittstelle",
    kategorieId: KATEGORIE_ID,
    begriff: "Schnittstelle (ERP)",
    kurzerklaerung:
      "Eine Schnittstelle ermöglicht den automatischen Datenaustausch zwischen dem ERP-System und anderer Software, ohne dass Informationen manuell übertragen werden müssen.",
    erklaerung:
      "Eine Schnittstelle funktioniert wie eine Steckdose mit genormtem Stecker: Zwei unterschiedliche Systeme können sich verbinden und Daten austauschen, solange beide dasselbe „Steckersystem“ verstehen. So kann ein ERP-System zum Beispiel automatisch Bestelldaten an einen Online-Shop übermitteln oder Zahlungsinformationen von einer Bank-Software empfangen, ohne dass jemand die Zahlen von Hand abtippt.",
    beispiel:
      "Über eine Schnittstelle werden im Online-Shop eingehende Bestellungen automatisch in das ERP-System übernommen, ohne dass ein Mitarbeiter sie erneut eintippen muss.",
    wannVerwendet:
      "Wenn zwei verschiedene Softwaresysteme regelmäßig Daten austauschen müssen und eine manuelle Übertragung zu langsam oder fehleranfällig wäre.",
    icon: "🔌",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-erp-system", "lk-workflow-automatisierung"],
    uebersetzungen: {
      en: {
        begriff: "Interface (ERP)",
        kurzerklaerung:
          "An interface enables automatic data exchange between the ERP system and other software, without information having to be transferred manually.",
        erklaerung:
          'An interface works like a power socket with a standardized plug: two different systems can connect and exchange data as long as both understand the same "plug system." For example, an ERP system can automatically send order data to an online shop or receive payment information from banking software, without anyone having to type the numbers in by hand.',
        beispiel:
          "Through an interface, orders coming in through the online shop are automatically transferred into the ERP system, without an employee having to type them in again.",
        wannVerwendet:
          "When two different software systems need to exchange data regularly and manual transfer would be too slow or too error-prone.",
      },
      es: {
        begriff: "Interfaz (ERP)",
        kurzerklaerung:
          "Una interfaz permite el intercambio automático de datos entre el sistema ERP y otro software, sin necesidad de transferir la información manualmente.",
        erklaerung:
          "Una interfaz funciona como un enchufe con una clavija estandarizada: dos sistemas distintos pueden conectarse e intercambiar datos siempre que ambos entiendan el mismo «sistema de conexión». Así, un sistema ERP puede, por ejemplo, enviar automáticamente datos de pedidos a una tienda online o recibir información de pagos de un software bancario, sin que nadie tenga que teclear las cifras a mano.",
        beispiel:
          "A través de una interfaz, los pedidos recibidos en la tienda online se transfieren automáticamente al sistema ERP, sin que un empleado tenga que volver a introducirlos manualmente.",
        wannVerwendet:
          "Cuando dos sistemas de software diferentes necesitan intercambiar datos con regularidad y una transferencia manual resultaría demasiado lenta o propensa a errores.",
      },
    },
  },
  {
    id: "lk-workflow-automatisierung",
    kategorieId: KATEGORIE_ID,
    begriff: "Workflow-Automatisierung",
    kurzerklaerung:
      "Workflow-Automatisierung bedeutet, dass wiederkehrende Arbeitsschritte im ERP-System automatisch angestoßen und weitergeleitet werden, ohne dass jeder Schritt manuell ausgelöst werden muss.",
    erklaerung:
      "Man kann sich das wie eine Fließbandanlage vorstellen: Sobald ein Werkstück eine Station durchlaufen hat, wird es automatisch zur nächsten weitergereicht, ohne dass jemand es von Hand tragen muss. Genauso sorgt Workflow-Automatisierung im ERP-System dafür, dass zum Beispiel eine genehmigte Bestellung automatisch an den nächsten zuständigen Mitarbeiter oder die nächste Abteilung weitergeleitet wird.",
    beispiel:
      "Überschreitet eine Bestellung einen bestimmten Betrag, leitet das System sie automatisch zur Freigabe an die zuständige Führungskraft weiter, statt dass jemand daran erinnern muss.",
    wannVerwendet:
      "Bei wiederkehrenden, klar strukturierten Abläufen wie Freigabeprozessen, Genehmigungen oder Benachrichtigungen, die sonst manuell nachverfolgt werden müssten.",
    icon: "⚙️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-erp-schnittstelle", "lk-berechtigungskonzept"],
    uebersetzungen: {
      en: {
        begriff: "Workflow Automation",
        kurzerklaerung:
          "Workflow automation means that recurring work steps in the ERP system are triggered and passed on automatically, without every step having to be started manually.",
        erklaerung:
          "Picture an assembly line: as soon as a workpiece has passed through one station, it is automatically passed on to the next, without anyone having to carry it by hand. In the same way, workflow automation in an ERP system ensures that, for example, an approved order is automatically forwarded to the next responsible employee or department.",
        beispiel:
          "If an order exceeds a certain amount, the system automatically forwards it to the responsible manager for approval, instead of someone having to remember to do so.",
        wannVerwendet:
          "For recurring, clearly structured processes such as approval workflows, sign-offs, or notifications that would otherwise have to be tracked manually.",
      },
      es: {
        begriff: "Automatización de flujos de trabajo",
        kurzerklaerung:
          "La automatización de flujos de trabajo significa que los pasos de trabajo recurrentes en el sistema ERP se inician y se transfieren automáticamente, sin que cada paso deba activarse manualmente.",
        erklaerung:
          "Puede imaginarse como una cadena de montaje: en cuanto una pieza pasa por una estación, se traslada automáticamente a la siguiente sin que nadie tenga que llevarla a mano. De igual modo, la automatización de flujos de trabajo en el sistema ERP hace que, por ejemplo, un pedido aprobado se reenvíe automáticamente al siguiente empleado o departamento responsable.",
        beispiel:
          "Si un pedido supera un determinado importe, el sistema lo reenvía automáticamente al responsable correspondiente para su aprobación, sin que nadie tenga que acordarse de hacerlo.",
        wannVerwendet:
          "En procesos recurrentes y claramente estructurados, como flujos de aprobación, autorizaciones o notificaciones, que de otro modo habría que seguir manualmente.",
      },
    },
  },
  {
    id: "lk-berechtigungskonzept",
    kategorieId: KATEGORIE_ID,
    begriff: "Berechtigungskonzept",
    kurzerklaerung:
      "Ein Berechtigungskonzept legt fest, welche Person welche Daten und Funktionen im ERP-System sehen, bearbeiten oder freigeben darf.",
    erklaerung:
      "Ein Berechtigungskonzept funktioniert wie ein Schlüsselbund mit unterschiedlichen Schlüsseln für unterschiedliche Türen: Nicht jeder Mitarbeiter braucht Zugang zu jedem Raum, und manche Türen dürfen nur mit einem zusätzlichen Sicherheitsschlüssel geöffnet werden. Im ERP-System sorgt das Berechtigungskonzept dafür, dass etwa nur die Buchhaltung Gehaltsdaten einsehen kann und nur bestimmte Vorgesetzte hohe Bestellsummen freigeben dürfen.",
    beispiel:
      "Ein Mitarbeiter im Lager kann Lieferungen erfassen, hat aber keinen Zugriff auf die Gehaltsabrechnungen, da sein Benutzerkonto dafür keine Berechtigung besitzt.",
    wannVerwendet:
      "Beim Einrichten neuer Benutzerkonten sowie immer dann, wenn geregelt werden muss, wer sensible Daten oder wichtige Freigaben im System sehen bzw. auslösen darf.",
    icon: "🔐",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-workflow-automatisierung", "lk-erp-system"],
    uebersetzungen: {
      en: {
        begriff: "Permission Concept",
        kurzerklaerung:
          "A permission concept defines which person is allowed to view, edit, or approve which data and functions in the ERP system.",
        erklaerung:
          "A permission concept works like a keyring with different keys for different doors: not every employee needs access to every room, and some doors can only be opened with an extra security key. In the ERP system, the permission concept ensures, for example, that only accounting can view salary data and that only certain managers are allowed to approve large order amounts.",
        beispiel:
          "A warehouse employee can record deliveries but has no access to payroll data, because their user account has no permission for it.",
        wannVerwendet:
          "When setting up new user accounts, and whenever it needs to be defined who may view sensitive data or trigger important approvals in the system.",
      },
      es: {
        begriff: "Concepto de permisos",
        kurzerklaerung:
          "Un concepto de permisos establece qué persona puede ver, editar o aprobar qué datos y funciones dentro del sistema ERP.",
        erklaerung:
          "Un concepto de permisos funciona como un llavero con distintas llaves para distintas puertas: no todos los empleados necesitan acceso a todas las salas, y algunas puertas solo pueden abrirse con una llave de seguridad adicional. En el sistema ERP, el concepto de permisos garantiza, por ejemplo, que solo contabilidad pueda consultar los datos salariales y que solo determinados responsables puedan aprobar pedidos de importes elevados.",
        beispiel:
          "Un empleado del almacén puede registrar entregas, pero no tiene acceso a las nóminas, ya que su cuenta de usuario no cuenta con permiso para ello.",
        wannVerwendet:
          "Al configurar nuevas cuentas de usuario y siempre que sea necesario definir quién puede ver datos sensibles o activar aprobaciones importantes en el sistema.",
      },
    },
  },
  {
    id: "lk-reporting",
    kategorieId: KATEGORIE_ID,
    begriff: "Reporting / Auswertung",
    kurzerklaerung:
      "Reporting bezeichnet das Zusammenfassen und Auswerten der im ERP-System gesammelten Daten zu übersichtlichen Berichten und Kennzahlen.",
    erklaerung:
      "Reporting ist wie ein Armaturenbrett im Auto: Statt selbst jeden einzelnen Vorgang im Motor zu beobachten, zeigt das Armaturenbrett auf einen Blick Geschwindigkeit, Tankstand und Warnleuchten an. Genauso fasst ein ERP-Report tausende einzelner Bewegungsdaten – etwa alle Verkäufe eines Monats – zu verständlichen Kennzahlen und Diagrammen zusammen, damit Entscheidungen auf einer verlässlichen Datengrundlage getroffen werden können.",
    beispiel:
      "Am Monatsende erstellt die Geschäftsführung einen Bericht, der alle Verkaufszahlen der letzten vier Wochen nach Region zusammenfasst.",
    wannVerwendet:
      "Bei regelmäßigen Auswertungen wie Monats- oder Quartalsberichten sowie immer dann, wenn eine Entscheidung eine verlässliche Datengrundlage braucht.",
    icon: "📊",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-bewegungsdaten", "lk-stammdaten"],
    uebersetzungen: {
      en: {
        begriff: "Reporting",
        kurzerklaerung:
          "Reporting refers to summarizing and analyzing the data collected in the ERP system to produce clear reports and key figures.",
        erklaerung:
          "Reporting is like a car's dashboard: instead of watching every single process in the engine yourself, the dashboard shows speed, fuel level, and warning lights at a glance. In the same way, an ERP report condenses thousands of individual pieces of transactional data — such as all of a month's sales — into clear figures and charts, so decisions can be made on a reliable data basis.",
        beispiel:
          "At the end of the month, management creates a report that summarizes all sales figures from the past four weeks by region.",
        wannVerwendet:
          "For regular evaluations such as monthly or quarterly reports, and whenever a decision needs a reliable data basis.",
      },
      es: {
        begriff: "Informes",
        kurzerklaerung:
          "Los informes consisten en resumir y analizar los datos recopilados en el sistema ERP para obtener informes claros e indicadores clave.",
        erklaerung:
          "Los informes son como el salpicadero de un coche: en lugar de observar uno mismo cada proceso del motor, el salpicadero muestra de un vistazo la velocidad, el nivel de combustible y las luces de aviso. De igual modo, un informe ERP condensa miles de datos transaccionales individuales —por ejemplo, todas las ventas de un mes— en cifras y gráficos comprensibles, de manera que las decisiones puedan tomarse sobre una base de datos fiable.",
        beispiel:
          "A final de mes, la dirección elabora un informe que resume todas las cifras de ventas de las últimas cuatro semanas por región.",
        wannVerwendet:
          "En análisis periódicos como los informes mensuales o trimestrales, y siempre que una decisión necesite basarse en datos fiables.",
      },
    },
  },
  {
    id: "lk-customizing",
    kategorieId: KATEGORIE_ID,
    begriff: "Customizing",
    kurzerklaerung:
      "Customizing bedeutet, ein ERP-System über vorgesehene Einstellungsmöglichkeiten an die individuellen Abläufe eines Unternehmens anzupassen, ohne den Programmcode selbst zu verändern.",
    erklaerung:
      "Man kann sich Customizing wie das Einstellen eines Autositzes vorstellen: Der Sitz selbst bleibt unverändert, aber über Hebel und Regler lässt er sich an Größe und Vorlieben des Fahrers anpassen. Genauso bietet ein ERP-System zahlreiche Einstellungen – etwa für Nummernkreise, Freigabegrenzen oder Belegformulare – mit denen es an die Arbeitsweise eines bestimmten Unternehmens angepasst wird, ohne die Grundsoftware selbst umzuprogrammieren.",
    beispiel:
      "Ein Unternehmen legt im Customizing fest, ab welchem Bestellwert eine zusätzliche Freigabe durch die Geschäftsleitung erforderlich ist.",
    wannVerwendet:
      "Bei der Einführung eines ERP-Systems sowie danach, wenn sich Unternehmensabläufe ändern und die Software entsprechend nachjustiert werden muss.",
    icon: "🛠️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-erp-modul", "lk-berechtigungskonzept"],
    uebersetzungen: {
      en: {
        begriff: "Customizing",
        kurzerklaerung:
          "Customizing means adapting an ERP system to a company's individual processes using its built-in configuration options, without changing the program code itself.",
        erklaerung:
          "Customizing can be thought of like adjusting a car seat: the seat itself stays the same, but levers and dials let you adapt it to the driver's size and preferences. In the same way, an ERP system offers numerous settings — for example for numbering ranges, approval limits, or document layouts — that adapt it to the way a particular company works, without reprogramming the underlying software itself.",
        beispiel:
          "A company uses customizing to define the order value above which additional approval from management is required.",
        wannVerwendet:
          "When introducing an ERP system, and afterward whenever company processes change and the software needs to be adjusted accordingly.",
      },
      es: {
        begriff: "Personalización",
        kurzerklaerung:
          "La personalización consiste en adaptar un sistema ERP a los procesos individuales de una empresa mediante las opciones de configuración previstas, sin modificar el propio código del programa.",
        erklaerung:
          "La personalización puede imaginarse como ajustar el asiento de un coche: el asiento en sí no cambia, pero con palancas y mandos se adapta al tamaño y las preferencias del conductor. De igual manera, un sistema ERP ofrece numerosos ajustes —por ejemplo, para rangos de numeración, límites de aprobación o formularios de documentos— con los que se adapta a la forma de trabajar de una empresa concreta, sin necesidad de reprogramar el software base.",
        beispiel:
          "Una empresa define en la personalización a partir de qué importe de pedido se requiere una aprobación adicional por parte de la dirección.",
        wannVerwendet:
          "Durante la implantación de un sistema ERP, y posteriormente siempre que cambien los procesos de la empresa y sea necesario reajustar el software en consecuencia.",
      },
    },
  },
];
