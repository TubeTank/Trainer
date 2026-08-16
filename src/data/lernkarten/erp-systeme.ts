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
  },
];
