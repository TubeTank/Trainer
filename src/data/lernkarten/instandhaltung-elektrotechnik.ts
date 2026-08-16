import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-instandhaltung-elektrotechnik";

export const instandhaltungElektrotechnikLernkarten: Lernkarte[] = [
  {
    id: "lk-instandhaltung",
    kategorieId: KATEGORIE_ID,
    begriff: "Instandhaltung",
    kurzerklaerung:
      "Instandhaltung ist der Oberbegriff für alle Maßnahmen, mit denen der funktionsfähige Zustand von Anlagen und Geräten erhalten oder wiederhergestellt wird.",
    erklaerung:
      "Instandhaltung ist wie die regelmäßige Pflege eines Autos: Ölwechsel, TÜV und die Reparatur nach einem Steinschlag gehören alle zum selben großen Thema „das Auto fahrbereit halten“. Als Oberbegriff umfasst Instandhaltung die vier Teilbereiche Wartung, Inspektion, Instandsetzung und Verbesserung. In einem Betrieb sorgt sie dafür, dass Maschinen und elektrische Geräte sicher und zuverlässig funktionieren.",
    beispiel:
      "In einem Produktionsbetrieb gehören sowohl das monatliche Nachschmieren von Lagern als auch der Austausch eines defekten Netzteils zur Instandhaltung der Anlage.",
    wannVerwendet:
      "Als übergreifender Begriff, wenn über die gesamte Strategie zum Erhalt von Anlagen und Geräten gesprochen wird, z. B. in Instandhaltungsplänen oder Berichten.",
    icon: "🛠️",
    schwierigkeit: "einfach",
    relatedTerms: [
      "lk-wartungsplan",
      "lk-inspektion-wartung-instandsetzung",
      "lk-digitale-wartungsdokumentation",
    ],
  },
  {
    id: "lk-wartungsplan",
    kategorieId: KATEGORIE_ID,
    begriff: "Wartungsplan",
    kurzerklaerung:
      "Ein Wartungsplan legt fest, welche Wartungsarbeiten an welchem Gerät in welchem Zeitabstand durchgeführt werden müssen.",
    erklaerung:
      "Ein Wartungsplan funktioniert wie ein Impfkalender beim Arzt: Für jede Maßnahme steht fest, wann sie fällig ist, damit nichts vergessen wird und rechtzeitig gehandelt werden kann. Er listet typischerweise das Gerät, die Art der Prüfung oder Wartung, das Intervall und die zuständige Person auf. So wird aus vielen Einzelaufgaben ein planbarer, wiederholbarer Ablauf.",
    beispiel:
      "Im Wartungsplan einer Werkstatt steht, dass alle ortsveränderlichen elektrischen Geräte alle zwölf Monate geprüft und die Lüftungsfilter der Klimaanlage vierteljährlich gereinigt werden.",
    wannVerwendet:
      "Bei der Planung wiederkehrender Prüf- und Wartungstermine sowie als Grundlage für Erinnerungen und Einsatzplanung des Instandhaltungspersonals.",
    icon: "📅",
    schwierigkeit: "einfach",
    relatedTerms: [
      "lk-instandhaltung",
      "lk-pruefrist",
      "lk-digitale-wartungsdokumentation",
    ],
  },
  {
    id: "lk-geraetepruefung-dguv-v3",
    kategorieId: KATEGORIE_ID,
    begriff: "Gerätprüfung nach DGUV V3",
    kurzerklaerung:
      "Die Prüfung nach DGUV V3 ist die wiederkehrende Sicherheitsprüfung elektrischer Geräte und Anlagen, um elektrische Gefahren frühzeitig zu erkennen.",
    erklaerung:
      "Man kann sich die DGUV-V3-Prüfung wie den TÜV für elektrische Geräte vorstellen: Regelmäßig wird kontrolliert, ob von einem Gerät noch eine Gefahr ausgehen könnte, bevor es zu spät ist. Die DGUV Vorschrift 3 ist die Nachfolgeregelung der früheren BGV A3 und schreibt vor, dass elektrische Betriebsmittel in festgelegten Abständen durch eine befähigte Person geprüft werden. Geprüft werden dabei unter anderem der Zustand von Kabeln, Steckern und Gehäuse sowie sicherheitsrelevante elektrische Werte.",
    beispiel:
      "Ein Prüfer kontrolliert in einem Büro alle Mehrfachsteckdosen und Ladegeräte, klebt nach bestandener Prüfung eine Prüfplakette mit Datum darauf und dokumentiert das Ergebnis.",
    wannVerwendet:
      "Bei der regelmäßigen, meist jährlichen Sicherheitsprüfung ortsveränderlicher und ortsfester elektrischer Betriebsmittel in Betrieben.",
    icon: "🔌",
    schwierigkeit: "mittel",
    relatedTerms: [
      "lk-pruefrist",
      "lk-elektrotechnisch-unterwiesene-person",
      "lk-digitale-wartungsdokumentation",
    ],
  },
  {
    id: "lk-inspektion-wartung-instandsetzung",
    kategorieId: KATEGORIE_ID,
    begriff: "Inspektion, Wartung und Instandsetzung (Unterschied)",
    kurzerklaerung:
      "Inspektion ist das Feststellen des Ist-Zustands, Wartung das vorbeugende Erhalten des Soll-Zustands und Instandsetzung die Reparatur nach einem Defekt.",
    erklaerung:
      "Der Unterschied lässt sich wie beim Fahrrad erklären: Inspektion ist das Prüfen, ob die Bremsen noch genug Belag haben, Wartung ist das Nachziehen und Ölen der Kette, bevor etwas kaputtgeht, und Instandsetzung ist das Reparieren des Schlauchs nach einer Reifenpanne. Alle drei sind Teilbereiche der Instandhaltung, unterscheiden sich aber darin, ob vorbeugend oder erst nach einem Schaden gehandelt wird. Diese Unterscheidung hilft, Tätigkeiten in Berichten und Systemen korrekt einzuordnen.",
    beispiel:
      "Bei einer Klimaanlage wird zuerst inspiziert, ob der Filter verschmutzt ist (Inspektion), dieser dann routinemäßig gereinigt (Wartung) und ein defektes Ventil nach einem Ausfall ausgetauscht (Instandsetzung).",
    wannVerwendet:
      "Beim genauen Beschreiben oder Kategorisieren einer durchgeführten Maßnahme, z. B. in einem Wartungsprotokoll oder Ticketsystem.",
    icon: "🔍",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-instandhaltung", "lk-wartungsplan"],
  },
  {
    id: "lk-pruefrist",
    kategorieId: KATEGORIE_ID,
    begriff: "Prüffrist",
    kurzerklaerung:
      "Die Prüffrist ist der maximale Zeitabstand, nach dem ein Gerät oder eine Anlage spätestens erneut geprüft werden muss.",
    erklaerung:
      "Eine Prüffrist ist vergleichbar mit dem Ablaufdatum auf einer Lebensmittelpackung: Sie sagt, bis wann etwas spätestens erneut kontrolliert werden muss, damit man sich darauf verlassen kann. Wie lang eine Prüffrist ausfällt, hängt von Gerätetyp, Einsatzbedingungen und den bisherigen Prüfergebnissen ab und wird in Regelwerken oder betrieblichen Vorgaben festgelegt. Wird die Frist überschritten, gilt das Gerät als nicht mehr sicher nachgewiesen geprüft.",
    beispiel:
      "Ein Handbohrer auf einer Baustelle hat wegen der rauen Einsatzbedingungen eine kürzere Prüffrist als ein Bürodrucker, der kaum bewegt wird.",
    wannVerwendet:
      "Bei der Planung, wann die nächste Prüfung eines Geräts fällig ist, und beim Erkennen überfälliger Prüfungen im System.",
    icon: "⏳",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-geraetepruefung-dguv-v3", "lk-wartungsplan"],
  },
  {
    id: "lk-elektrotechnisch-unterwiesene-person",
    kategorieId: KATEGORIE_ID,
    begriff: "Elektrotechnisch unterwiesene Person (EuP)",
    kurzerklaerung:
      "Eine elektrotechnisch unterwiesene Person wurde speziell geschult und über mögliche Gefahren informiert, um bestimmte einfache elektrotechnische Tätigkeiten sicher durchzuführen.",
    erklaerung:
      "Man kann sich eine EuP wie einen Beifahrer vorstellen, der zwar keinen Führerschein hat, aber genau eingewiesen wurde, wie er im Notfall sicher bremsen kann – für einfache, klar begrenzte Aufgaben reicht das, für alles Komplexere braucht es die ausgebildete Fachkraft. Eine EuP ist keine Elektrofachkraft, darf aber nach entsprechender Unterweisung und unter Anleitung bestimmte, genau festgelegte elektrotechnische Arbeiten ausführen. Die Unterweisung muss regelmäßig aufgefrischt werden, damit der Kenntnisstand aktuell bleibt.",
    beispiel:
      "Ein Junior-Entwickler wird als EuP eingewiesen, damit er im Rahmen von Geräteprüfungen einfache Sichtprüfungen an Steckern durchführen darf, ohne dafür Elektrofachkraft zu sein.",
    wannVerwendet:
      "Wenn geklärt werden muss, wer welche elektrotechnische Tätigkeit ausführen darf, z. B. bei der Zuweisung von Prüf- oder Wartungsaufgaben.",
    icon: "🎓",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-geraetepruefung-dguv-v3"],
  },
  {
    id: "lk-spannung-strom-widerstand",
    kategorieId: KATEGORIE_ID,
    begriff: "Spannung, Strom und Widerstand",
    kurzerklaerung:
      "Spannung, Strom und Widerstand sind die drei elektrischen Grundgrößen, die über das Ohmsche Gesetz miteinander verknüpft sind.",
    erklaerung:
      "Ein anschauliches Bild ist ein Wasserleitungssystem: Die Spannung entspricht dem Wasserdruck, der Strom der Menge des fließenden Wassers pro Zeit und der Widerstand der Enge des Rohrs, die den Fluss bremst. Diese drei Größen hängen über das Ohmsche Gesetz zusammen: Je höher der Druck (Spannung) oder je geringer die Enge (Widerstand), desto mehr fließt (Strom). Dieses Grundverständnis hilft, Messwerte bei Prüfungen richtig einzuordnen.",
    beispiel:
      "Bei der Prüfung eines Geräts misst der Prüfer den Isolationswiderstand, um sicherzustellen, dass kein gefährlicher Strom über das Gehäuse fließen kann.",
    wannVerwendet:
      "Beim Verstehen und Interpretieren von Messwerten während elektrischer Prüfungen sowie in Grundlagengesprächen zur Elektrotechnik.",
    icon: "⚡",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-geraetepruefung-dguv-v3", "lk-ip-schutzart"],
  },
  {
    id: "lk-ip-schutzart",
    kategorieId: KATEGORIE_ID,
    begriff: "IP-Schutzart",
    kurzerklaerung:
      "Die IP-Schutzart gibt an, wie gut ein elektrisches Gehäuse gegen das Eindringen von Fremdkörpern und Wasser geschützt ist.",
    erklaerung:
      "Die IP-Schutzart ist wie die Angabe, wie wasserdicht eine Uhr ist: Eine Zahl sagt, ob sie nur ein paar Spritzer verträgt oder auch längere Zeit unter Wasser bestehen kann. Die Kennzeichnung besteht aus den Buchstaben „IP“ gefolgt von zwei Ziffern: Die erste steht für den Schutz gegen feste Fremdkörper und Berührung, die zweite für den Schutz gegen Wasser. Je höher die Ziffern, desto besser der Schutz vor den jeweiligen Einflüssen.",
    beispiel:
      "Ein Außenbeleuchtungsgerät mit der Schutzart IP65 ist staubdicht und gegen Strahlwasser geschützt und damit für den Einsatz im Freien geeignet.",
    wannVerwendet:
      "Bei der Auswahl geeigneter Geräte für bestimmte Einsatzumgebungen und beim Prüfen, ob ein Gehäuse noch intakt und dicht ist.",
    icon: "💧",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-geraetepruefung-dguv-v3", "lk-spannung-strom-widerstand"],
  },
  {
    id: "lk-digitale-wartungsdokumentation",
    kategorieId: KATEGORIE_ID,
    begriff: "Digitale Wartungsdokumentation & Automatisierung",
    kurzerklaerung:
      "Digitale Wartungsdokumentation erfasst Prüf- und Wartungsergebnisse in einem System statt auf Papier und ermöglicht so automatisierte Auswertungen und Erinnerungen.",
    erklaerung:
      "Der Unterschied zur Papierakte ist wie der Wechsel von einem Karteikasten zu einer durchsuchbaren Datenbank: Statt Zettel zu wälzen, findet man Informationen sofort wieder und das System kann selbstständig auf Fristen hinweisen. Messgeräte können ihre Werte teils direkt digital übertragen, sodass Prüfergebnisse ohne manuelles Abtippen ins System gelangen. So sinkt die Fehleranfälligkeit und Instandhaltungspersonal gewinnt Zeit für die eigentliche technische Arbeit.",
    beispiel:
      "Ein Prüfgerät überträgt die gemessenen Werte einer DGUV-V3-Prüfung per Bluetooth direkt an eine App, die daraus automatisch einen Prüfbericht erstellt und den nächsten Prüftermin einträgt.",
    wannVerwendet:
      "Beim Erfassen, Speichern und Auswerten von Prüf- und Wartungsergebnissen sowie beim Aufbau automatisierter Erinnerungs- und Berichtssysteme.",
    icon: "💻",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-wartungsplan", "lk-geraetepruefung-dguv-v3"],
  },
];
