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
    uebersetzungen: {
      en: {
        begriff: "Maintenance",
        kurzerklaerung:
          "Maintenance is the umbrella term for all the measures used to preserve or restore the working condition of equipment and systems.",
        erklaerung:
          'Maintenance is like the regular upkeep of a car: an oil change, the annual inspection, and repairing a crack after a stone chip all fall under the same big theme of "keeping the car roadworthy." As an umbrella term, maintenance covers four sub-areas: servicing, inspection, repair, and improvement. In a company, it ensures that machines and electrical equipment work safely and reliably.',
        beispiel:
          "In a production plant, both the monthly re-greasing of bearings and replacing a faulty power supply count as maintenance of the equipment.",
        wannVerwendet:
          "As an overarching term when talking about the overall strategy for keeping equipment and systems in good condition, e.g. in maintenance plans or reports.",
      },
      es: {
        begriff: "Mantenimiento",
        kurzerklaerung:
          "El mantenimiento es el término general para todas las medidas con las que se conserva o se restablece el estado funcional de instalaciones y equipos.",
        erklaerung:
          'El mantenimiento es como el cuidado regular de un coche: el cambio de aceite, la inspección técnica y la reparación tras el impacto de una piedra forman parte del mismo gran tema de "mantener el coche en condiciones de circular". Como término general, el mantenimiento abarca cuatro subáreas: la conservación preventiva, la inspección, la reparación y la mejora. En una empresa, garantiza que las máquinas y los equipos eléctricos funcionen de forma segura y fiable.',
        beispiel:
          "En una planta de producción, tanto el engrase mensual de los rodamientos como la sustitución de una fuente de alimentación defectuosa forman parte del mantenimiento de la instalación.",
        wannVerwendet:
          "Como término general cuando se habla de la estrategia global para la conservación de instalaciones y equipos, por ejemplo en planes de mantenimiento o informes.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Maintenance Plan",
        kurzerklaerung:
          "A maintenance plan defines which maintenance tasks must be performed on which piece of equipment and at what interval.",
        erklaerung:
          "A maintenance plan works like a vaccination schedule at the doctor's office: for every measure, it's fixed exactly when it's due, so nothing gets forgotten and action can be taken in time. It typically lists the equipment, the type of inspection or maintenance, the interval, and the person responsible. That turns many individual tasks into a plannable, repeatable routine.",
        beispiel:
          "A workshop's maintenance plan states that all portable electrical appliances are tested every twelve months and the air conditioning's ventilation filters are cleaned quarterly.",
        wannVerwendet:
          "When planning recurring inspection and maintenance dates, and as the basis for reminders and scheduling maintenance staff.",
      },
      es: {
        begriff: "Plan de mantenimiento",
        kurzerklaerung:
          "Un plan de mantenimiento establece qué tareas de mantenimiento deben realizarse en qué equipo y con qué periodicidad.",
        erklaerung:
          "Un plan de mantenimiento funciona como el calendario de vacunación en el médico: para cada medida está fijado cuándo toca, de modo que no se olvide nada y se pueda actuar a tiempo. Normalmente incluye el equipo, el tipo de inspección o mantenimiento, el intervalo y la persona responsable. Así, muchas tareas individuales se convierten en un proceso planificable y repetible.",
        beispiel:
          "En el plan de mantenimiento de un taller consta que todos los equipos eléctricos portátiles se revisan cada doce meses y que los filtros de ventilación del aire acondicionado se limpian trimestralmente.",
        wannVerwendet:
          "Al planificar fechas recurrentes de inspección y mantenimiento, y como base para recordatorios y la programación del personal de mantenimiento.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Electrical Equipment Testing (German DGUV V3 standard)",
        kurzerklaerung:
          "Testing under DGUV V3 (a German safety regulation) is the recurring safety inspection of electrical equipment and systems, used to detect electrical hazards early.",
        erklaerung:
          "You can think of the DGUV V3 test like a roadworthiness test, but for electrical equipment: it's regularly checked whether a device could still pose a danger, before it's too late. DGUV Regulation 3 is a German occupational safety rule — the successor to the older BGV A3 — and it requires that electrical equipment be inspected at defined intervals by a qualified person. Since this is a Germany-specific regulation, other countries have comparable rules under different names. Among other things, the inspection covers the condition of cables, plugs, and housings, as well as safety-relevant electrical values.",
        beispiel:
          "In an office, an inspector checks all power strips and chargers, attaches a test sticker with the date once a device passes, and documents the result.",
        wannVerwendet:
          "For the regular, usually annual, safety testing of portable and fixed electrical equipment in German workplaces.",
      },
      es: {
        begriff: "Inspección de equipos eléctricos (norma alemana DGUV V3)",
        kurzerklaerung:
          "La inspección según la norma DGUV V3 (una normativa de seguridad alemana) es la revisión de seguridad periódica de equipos e instalaciones eléctricas, destinada a detectar a tiempo posibles peligros eléctricos.",
        erklaerung:
          "La inspección DGUV V3 puede imaginarse como una ITV, pero para equipos eléctricos: se comprueba periódicamente si un aparato podría suponer un peligro, antes de que sea demasiado tarde. La 'DGUV Vorschrift 3' es una normativa alemana de prevención de riesgos laborales, sucesora de la antigua BGV A3, que exige que los equipos eléctricos se revisen a intervalos determinados por parte de una persona cualificada. Al tratarse de una norma específica de Alemania, en otros países existen normativas equivalentes con otros nombres. Entre otras cosas, se revisa el estado de cables, enchufes y carcasas, así como valores eléctricos relevantes para la seguridad.",
        beispiel:
          "Un inspector revisa en una oficina todas las regletas y cargadores, pega una etiqueta de inspección con la fecha tras superar la prueba y documenta el resultado.",
        wannVerwendet:
          "En la inspección de seguridad periódica, normalmente anual, de equipos eléctricos portátiles y fijos en empresas alemanas.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Inspection, Maintenance, and Repair (the difference)",
        kurzerklaerung:
          "Inspection means determining the actual condition, maintenance means preventively preserving the target condition, and repair means fixing something after a defect has occurred.",
        erklaerung:
          "The difference can be explained using a bicycle: inspection is checking whether the brake pads still have enough material left, maintenance is tightening and oiling the chain before something breaks, and repair is fixing the inner tube after a flat tire. All three are sub-areas of maintenance in the broad sense, but they differ in whether action is taken preventively or only after damage has occurred. This distinction helps classify activities correctly in reports and systems.",
        beispiel:
          "For an air conditioning unit, you first check whether the filter is dirty (inspection), then clean it as routine upkeep (maintenance), and replace a faulty valve after a failure (repair).",
        wannVerwendet:
          "When precisely describing or categorizing a task that was carried out, e.g. in a maintenance log or ticketing system.",
      },
      es: {
        begriff: "Inspección, mantenimiento y reparación (la diferencia)",
        kurzerklaerung:
          "La inspección consiste en constatar el estado real, el mantenimiento en conservar preventivamente el estado deseado, y la reparación en solucionar un fallo después de que se haya producido.",
        erklaerung:
          "La diferencia se puede explicar con una bicicleta: la inspección es comprobar si a los frenos aún les queda suficiente pastilla, el mantenimiento es tensar y engrasar la cadena antes de que algo se rompa, y la reparación es arreglar la cámara tras un pinchazo. Los tres son subáreas del mantenimiento en sentido amplio, pero se diferencian en si se actúa de forma preventiva o solo después de que se haya producido un daño. Esta distinción ayuda a clasificar correctamente las actividades en informes y sistemas.",
        beispiel:
          "En un aire acondicionado primero se inspecciona si el filtro está sucio (inspección), luego se limpia de forma rutinaria (mantenimiento) y se sustituye una válvula defectuosa tras una avería (reparación).",
        wannVerwendet:
          "Al describir o clasificar con precisión una medida realizada, por ejemplo en un parte de mantenimiento o en un sistema de tickets.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Inspection Interval",
        kurzerklaerung:
          "The inspection interval is the maximum period of time after which a device or system must be inspected again at the latest.",
        erklaerung:
          "An inspection interval is comparable to the expiration date on a food package: it tells you by when something must be checked again at the latest, so you can still rely on it. How long an inspection interval is depends on the type of equipment, the conditions of use, and previous test results, and it's set out in regulations or internal company rules. If the deadline is exceeded, the device is no longer considered verifiably safe.",
        beispiel:
          "A hand drill used on a construction site has a shorter inspection interval than an office printer that's hardly ever moved, because of the harsher operating conditions.",
        wannVerwendet:
          "When planning the next due date for inspecting a device, and when identifying overdue inspections in a system.",
      },
      es: {
        begriff: "Plazo de inspección",
        kurzerklaerung:
          "El plazo de inspección es el intervalo máximo de tiempo tras el cual un equipo o instalación debe volver a inspeccionarse como muy tarde.",
        erklaerung:
          "Un plazo de inspección es comparable a la fecha de caducidad de un alimento: indica hasta cuándo, como muy tarde, hay que volver a comprobar algo para poder seguir confiando en ello. La duración de un plazo de inspección depende del tipo de equipo, las condiciones de uso y los resultados de inspecciones anteriores, y se establece en normativas o directrices internas de la empresa. Si se supera el plazo, el equipo deja de considerarse verificadamente seguro.",
        beispiel:
          "Un taladro de mano usado en una obra tiene un plazo de inspección más corto que una impresora de oficina que apenas se mueve, debido a las condiciones de uso más exigentes.",
        wannVerwendet:
          "Al planificar cuándo toca la próxima inspección de un equipo, y al detectar en un sistema las inspecciones vencidas.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Electrically Instructed Person (EIP)",
        kurzerklaerung:
          "An electrically instructed person has received special training and been informed about the possible hazards, so they can safely carry out certain simple electrical tasks.",
        erklaerung:
          "You can picture an EIP like a front-seat passenger who doesn't have a driver's license but has been precisely briefed on how to brake safely in an emergency — that's enough for simple, clearly limited tasks, but anything more complex needs the trained specialist. This is a category defined under German occupational safety rules, similar in spirit to concepts used in other countries under different names. An EIP is not a qualified electrician, but after appropriate instruction and under supervision, they may carry out certain precisely defined electrical tasks. The instruction must be refreshed regularly so the person's knowledge stays up to date.",
        beispiel:
          "A junior developer is instructed as an EIP so that, as part of equipment testing, they're allowed to carry out simple visual checks on plugs without being a qualified electrician.",
        wannVerwendet:
          "When it needs to be clarified who is allowed to carry out which electrical task, e.g. when assigning testing or maintenance duties.",
      },
      es: {
        begriff: "Persona instruida en electrotecnia",
        kurzerklaerung:
          "Una persona instruida en electrotecnia ha recibido una formación específica y ha sido informada sobre los posibles peligros, de modo que puede realizar con seguridad determinadas tareas electrotécnicas sencillas.",
        erklaerung:
          "Se puede imaginar a esta persona como un acompañante en un coche que no tiene carnet de conducir, pero que ha sido instruido con precisión sobre cómo frenar con seguridad en caso de emergencia: para tareas sencillas y claramente delimitadas es suficiente, pero para todo lo más complejo se necesita a la persona especializada. Este concepto procede de la normativa alemana de prevención de riesgos laborales; en otros países existen figuras equivalentes con otros nombres. No es una persona electricista cualificada, pero tras la instrucción correspondiente y bajo supervisión puede realizar determinados trabajos electrotécnicos concretos. La instrucción debe renovarse periódicamente para que los conocimientos se mantengan actualizados.",
        beispiel:
          "Se instruye a un desarrollador junior como persona instruida en electrotecnia para que, en el marco de inspecciones de equipos, pueda realizar comprobaciones visuales sencillas de enchufes sin ser electricista cualificado.",
        wannVerwendet:
          "Cuando hay que aclarar quién puede realizar qué tarea electrotécnica, por ejemplo al asignar tareas de inspección o mantenimiento.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Voltage, Current, and Resistance",
        kurzerklaerung:
          "Voltage, current, and resistance are the three basic electrical quantities, linked to each other through Ohm's law.",
        erklaerung:
          "A helpful image is a water pipe system: voltage corresponds to water pressure, current to the amount of water flowing per unit of time, and resistance to how narrow the pipe is, which slows the flow down. These three quantities are related through Ohm's law: the higher the pressure (voltage) or the lower the narrowness (resistance), the more flows (current). This basic understanding helps you correctly interpret measured values during inspections.",
        beispiel:
          "When testing a device, the inspector measures the insulation resistance to make sure no dangerous current can flow through the housing.",
        wannVerwendet:
          "When understanding and interpreting measured values during electrical inspections, and in basic discussions about electrical engineering.",
      },
      es: {
        begriff: "Tensión, corriente y resistencia",
        kurzerklaerung:
          "La tensión, la corriente y la resistencia son las tres magnitudes eléctricas básicas, relacionadas entre sí mediante la ley de Ohm.",
        erklaerung:
          "Una imagen útil es la de un sistema de tuberías de agua: la tensión equivale a la presión del agua, la corriente a la cantidad de agua que fluye por unidad de tiempo, y la resistencia a lo estrecho que es el tubo, que frena el flujo. Estas tres magnitudes están relacionadas mediante la ley de Ohm: cuanto mayor es la presión (tensión) o menor la estrechez (resistencia), más fluye (corriente). Esta comprensión básica ayuda a interpretar correctamente los valores medidos durante las inspecciones.",
        beispiel:
          "Al inspeccionar un equipo, el inspector mide la resistencia de aislamiento para asegurarse de que no pueda circular una corriente peligrosa a través de la carcasa.",
        wannVerwendet:
          "Al comprender e interpretar valores medidos durante inspecciones eléctricas, así como en conversaciones básicas sobre electrotecnia.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "IP Rating",
        kurzerklaerung:
          "The IP rating indicates how well an electrical enclosure is protected against the ingress of foreign objects and water.",
        erklaerung:
          'The IP rating is like the water-resistance rating on a watch: a number tells you whether it can only handle a few splashes or can withstand being submerged for a longer time. The code consists of the letters "IP" followed by two digits: the first stands for protection against solid foreign objects and contact, the second for protection against water. The higher the digits, the better the protection against the respective influence.',
        beispiel:
          "An outdoor light fixture with an IP65 rating is dust-tight and protected against water jets, making it suitable for outdoor use.",
        wannVerwendet:
          "When selecting suitable equipment for particular operating environments, and when checking whether a housing is still intact and sealed.",
      },
      es: {
        begriff: "Grado de protección IP",
        kurzerklaerung:
          "El grado de protección IP indica lo bien protegida que está una carcasa eléctrica frente a la entrada de cuerpos extraños y agua.",
        erklaerung:
          'El grado de protección IP es como la indicación de resistencia al agua de un reloj: un número dice si solo aguanta unas salpicaduras o si también resiste un tiempo bajo el agua. La denominación consta de las letras "IP" seguidas de dos cifras: la primera indica la protección frente a cuerpos extraños sólidos y contacto, y la segunda la protección frente al agua. Cuanto más altas son las cifras, mejor es la protección frente a cada influencia.',
        beispiel:
          "Una luminaria de exterior con grado de protección IP65 es estanca al polvo y está protegida contra chorros de agua, por lo que es adecuada para uso al aire libre.",
        wannVerwendet:
          "Al elegir equipos adecuados para determinados entornos de uso, y al comprobar si una carcasa sigue intacta y estanca.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Digital Maintenance Documentation & Automation",
        kurzerklaerung:
          "Digital maintenance documentation records inspection and maintenance results in a system instead of on paper, enabling automated evaluations and reminders.",
        erklaerung:
          "The difference from a paper file is like switching from a card-index box to a searchable database: instead of leafing through slips of paper, you find information instantly, and the system can flag deadlines on its own. Some measuring devices can transmit their readings digitally, so test results reach the system without manual typing. This reduces the risk of errors and frees up maintenance staff's time for the actual technical work.",
        beispiel:
          "A test device transmits the measured values of a DGUV V3 inspection via Bluetooth directly to an app, which automatically generates a test report from them and schedules the next inspection date.",
        wannVerwendet:
          "When recording, storing, and evaluating inspection and maintenance results, and when building automated reminder and reporting systems.",
      },
      es: {
        begriff: "Documentación digital de mantenimiento y automatización",
        kurzerklaerung:
          "La documentación digital de mantenimiento registra los resultados de inspecciones y mantenimientos en un sistema en lugar de en papel, permitiendo así evaluaciones y recordatorios automatizados.",
        erklaerung:
          "La diferencia con el archivo en papel es como pasar de un fichero de tarjetas a una base de datos con capacidad de búsqueda: en lugar de hojear papeles, la información se encuentra al instante y el sistema puede avisar por sí solo de los plazos. Algunos equipos de medición pueden transmitir sus valores directamente de forma digital, de modo que los resultados de las inspecciones llegan al sistema sin necesidad de teclearlos manualmente. Así se reduce el riesgo de errores y el personal de mantenimiento gana tiempo para el trabajo técnico propiamente dicho.",
        beispiel:
          "Un equipo de prueba transmite por Bluetooth los valores medidos de una inspección DGUV V3 directamente a una aplicación, que genera automáticamente un informe de inspección y programa la próxima fecha de revisión.",
        wannVerwendet:
          "Al registrar, almacenar y evaluar resultados de inspecciones y mantenimientos, y al construir sistemas automatizados de recordatorio e informes.",
      },
    },
  },
];
