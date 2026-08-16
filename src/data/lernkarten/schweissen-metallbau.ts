import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-schweissen-metallbau";

export const schweissenMetallbauLernkarten: Lernkarte[] = [
  {
    id: "lk-schweissen",
    kategorieId: KATEGORIE_ID,
    begriff: "Schweißen (Grundprinzip)",
    kurzerklaerung:
      "Schweißen verbindet zwei Werkstücke, indem man ihre Oberflächen aufschmilzt, sodass sie beim Erkalten zu einem einzigen, durchgehenden Bauteil zusammenwachsen.",
    erklaerung:
      "Man kann sich Schweißen wie das Verschmelzen von zwei Eiswürfeln vorstellen: Berühren sich ihre angetauten Oberflächen und frieren dann gemeinsam wieder ein, entsteht ein einziges Stück Eis ohne Trennlinie. Beim Schweißen übernimmt Hitze (und oft ein Zusatzwerkstoff) diese Rolle, sodass aus zwei Metallteilen eine stoffschlüssige, tragfähige Verbindung wird. Anders als beim Schrauben oder Kleben gibt es danach keine lösbare Trennstelle mehr.",
    beispiel:
      "Zwei Rohrsegmente für eine Tankleitung werden an der Stoßkante zusammengeschweißt, damit später kein Medium an dieser Stelle austreten kann.",
    wannVerwendet:
      "Immer dann, wenn zwei Metallteile dauerhaft und druckdicht bzw. tragfähig miteinander verbunden werden müssen, statt sie nur zu verschrauben.",
    icon: "🔥",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-wig-schweissen", "lk-mag-schweissen", "lk-schweissnaht"],
    uebersetzungen: {
      en: {
        begriff: "Welding (Basic Principle)",
        kurzerklaerung:
          "Welding joins two workpieces by melting their surfaces so that, as they cool, they grow together into a single, continuous piece.",
        erklaerung:
          "Think of welding like fusing two ice cubes together: if their slightly thawed surfaces touch and then freeze again as one, you get a single block of ice with no dividing line. In welding, heat (often together with a filler material) plays that role, turning two metal parts into one load-bearing joint fused at the material level. Unlike bolting or gluing, there's no releasable joint left afterward.",
        beispiel:
          "Two pipe segments for a tank line are welded together at the butt joint so that no medium can leak out at that point later.",
        wannVerwendet:
          "Whenever two metal parts need to be joined permanently and pressure-tight or load-bearing, rather than just bolted together.",
      },
      es: {
        begriff: "Soldadura (principio básico)",
        kurzerklaerung:
          "La soldadura une dos piezas fundiendo sus superficies para que, al enfriarse, se conviertan en una sola pieza continua.",
        erklaerung:
          "La soldadura se puede imaginar como la fusión de dos cubitos de hielo: si sus superficies ligeramente derretidas se tocan y luego se congelan juntas, se obtiene un solo bloque de hielo sin línea de separación. En la soldadura, el calor (a menudo junto con un material de aporte) cumple ese papel, convirtiendo dos piezas metálicas en una unión resistente y fusionada a nivel del material. A diferencia de atornillar o pegar, después ya no queda ninguna junta desmontable.",
        beispiel:
          "Dos segmentos de tubería para una línea de tanque se sueldan a tope para que, más adelante, no pueda escapar ningún medio por ese punto.",
        wannVerwendet:
          "Siempre que dos piezas metálicas deban unirse de forma permanente, estanca a la presión o resistente a la carga, en lugar de simplemente atornillarlas.",
      },
    },
  },
  {
    id: "lk-wig-schweissen",
    kategorieId: KATEGORIE_ID,
    begriff: "WIG-Schweißen",
    kurzerklaerung:
      "WIG (Wolfram-Inertgasschweißen) ist ein sehr präzises Schweißverfahren, bei dem eine nicht abschmelzende Wolframelektrode den Lichtbogen erzeugt und ein Schutzgas die Schmelze vor Luft abschirmt.",
    erklaerung:
      "WIG-Schweißen ist wie das Malen mit einem sehr feinen Pinsel statt einer breiten Farbrolle: Es dauert länger, aber das Ergebnis ist sauber, kontrolliert und detailgenau. Die Wolframelektrode selbst schmilzt dabei nicht ab, sondern erzeugt nur den Lichtbogen; der Zusatzwerkstoff wird bei Bedarf separat mit der Hand zugeführt. Deshalb eignet sich WIG besonders für dünne Bleche, hochwertige Werkstoffe und optisch anspruchsvolle Nähte.",
    beispiel:
      "Die Wurzellage einer Edelstahl-Rohrleitung im Tankbau wird per WIG geschweißt, damit die Naht innen glatt und ohne Einschlüsse bleibt.",
    wannVerwendet:
      "Bei dünnen Blechen, Wurzellagen, Edelstahl oder Aluminium sowie überall dort, wo eine besonders saubere, hochwertige Naht gefordert ist.",
    icon: "🎯",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-schweissen", "lk-edelstahl", "lk-aluminium-schweissen", "lk-schweissnaht"],
    uebersetzungen: {
      en: {
        begriff: "TIG Welding",
        kurzerklaerung:
          "TIG (Tungsten Inert Gas welding) is a highly precise welding process in which a non-consumable tungsten electrode generates the arc while a shielding gas protects the weld pool from air.",
        erklaerung:
          "TIG welding is like painting with a very fine brush instead of a wide paint roller: it takes longer, but the result is clean, controlled, and detailed. The tungsten electrode itself does not melt away — it only generates the arc — while filler material, if needed, is fed in separately by hand. That's why TIG is especially well suited to thin sheet metal, high-value materials, and welds where appearance matters.",
        beispiel:
          "The root pass of a stainless steel pipeline in tank construction is welded using TIG so that the inside of the seam stays smooth and free of inclusions.",
        wannVerwendet:
          "For thin sheet metal, root passes, stainless steel, or aluminum, and anywhere a particularly clean, high-quality weld is required.",
      },
      es: {
        begriff: "Soldadura TIG",
        kurzerklaerung:
          "TIG (Tungsten Inert Gas, soldadura con gas inerte de tungsteno) es un proceso de soldadura muy preciso en el que un electrodo de tungsteno no consumible genera el arco mientras un gas de protección protege el baño de fusión del aire.",
        erklaerung:
          "La soldadura TIG es como pintar con un pincel muy fino en lugar de un rodillo ancho: tarda más, pero el resultado es limpio, controlado y detallado. El propio electrodo de tungsteno no se funde, solo genera el arco; el material de aporte, si se necesita, se añade por separado y a mano. Por eso el TIG es especialmente adecuado para chapas finas, materiales de alto valor y cordones donde el acabado visual importa.",
        beispiel:
          "La pasada de raíz de una tubería de acero inoxidable en la construcción de tanques se suelda con TIG para que el interior del cordón quede liso y sin inclusiones.",
        wannVerwendet:
          "En chapas finas, pasadas de raíz, acero inoxidable o aluminio, y en general allí donde se exige un cordón especialmente limpio y de alta calidad.",
      },
    },
  },
  {
    id: "lk-mag-schweissen",
    kategorieId: KATEGORIE_ID,
    begriff: "MAG-Schweißen",
    kurzerklaerung:
      "MAG (Metall-Aktivgasschweißen) ist ein produktives Schweißverfahren, bei dem ein Drahtvorschub kontinuierlich Zusatzwerkstoff zuführt, während ein aktives Schutzgas den Schweißbereich absichert.",
    erklaerung:
      "Wenn WIG der feine Pinsel ist, ist MAG eher die breite Farbrolle: Der Draht läuft automatisch nach, sodass man deutlich schneller und mit weniger Handunterbrechungen vorankommt. Das Schutzgas ist hier chemisch aktiv und beeinflusst den Schweißprozess selbst leicht mit, was besonders bei Stahl gut funktioniert. Dadurch ist MAG das Verfahren der Wahl, wenn viele Meter Naht in vertretbarer Zeit geschweißt werden müssen.",
    beispiel:
      "Die tragenden Stahlprofile eines Tankgestells werden per MAG geschweißt, weil hier Schweißgeschwindigkeit wichtiger ist als die letzte optische Feinheit.",
    wannVerwendet:
      "Bei Baustahl-Konstruktionen und größeren Nahtlängen, wo Produktivität im Vordergrund steht.",
    icon: "⚡",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-schweissen", "lk-baustahl", "lk-schweissnaht"],
    uebersetzungen: {
      en: {
        begriff: "MAG Welding",
        kurzerklaerung:
          "MAG (Metal Active Gas welding) is a productive welding process in which a wire feeder continuously supplies filler material while an active shielding gas protects the weld area.",
        erklaerung:
          "If TIG is the fine brush, MAG is more like the wide paint roller: the wire feeds in automatically, so you move noticeably faster and with fewer manual interruptions. Here the shielding gas is chemically active and slightly influences the welding process itself, which works especially well with steel. That makes MAG the process of choice when many meters of weld need to be completed in a reasonable amount of time.",
        beispiel:
          "The load-bearing steel profiles of a tank frame are welded with MAG because welding speed matters more here than the finest visual detail.",
        wannVerwendet:
          "For structural/mild steel constructions and longer weld lengths, where productivity is the priority.",
      },
      es: {
        begriff: "Soldadura MAG",
        kurzerklaerung:
          "MAG (Metal Active Gas, soldadura con gas activo) es un proceso de soldadura productivo en el que un alimentador de hilo suministra material de aporte de forma continua, mientras un gas de protección activo protege la zona de soldeo.",
        erklaerung:
          "Si el TIG es el pincel fino, el MAG es más bien el rodillo ancho: el hilo avanza automáticamente, por lo que se avanza notablemente más rápido y con menos interrupciones manuales. Aquí el gas de protección es químicamente activo e influye ligeramente en el propio proceso de soldadura, lo que funciona especialmente bien con el acero. Por eso el MAG es el proceso preferido cuando hay que soldar muchos metros de cordón en un tiempo razonable.",
        beispiel:
          "Los perfiles de acero estructural portantes de un bastidor para tanque se sueldan con MAG porque aquí la velocidad de soldeo importa más que el último detalle estético.",
        wannVerwendet:
          "En construcciones de acero estructural y cordones de mayor longitud, donde la productividad es la prioridad.",
      },
    },
  },
  {
    id: "lk-schweissnaht",
    kategorieId: KATEGORIE_ID,
    begriff: "Schweißnaht & Nahtprüfung",
    kurzerklaerung:
      "Die Schweißnaht ist die fertige Verbindungsstelle zweier Werkstücke; die Nahtprüfung stellt sicher, dass diese Verbindung tatsächlich fehlerfrei und belastbar ist.",
    erklaerung:
      "Man kann eine Schweißnaht mit einer frisch verheilten Narbe vergleichen: Von außen kann sie glatt aussehen, während darunter trotzdem noch ein Riss oder Hohlraum steckt. Deshalb wird eine Naht nicht nur optisch begutachtet, sondern je nach Anforderung zusätzlich mit Verfahren wie Sichtprüfung, Farbeindringprüfung oder Röntgen kontrolliert. Gerade bei druckführenden Bauteilen wie Tanks oder Rohrleitungen entscheidet die Nahtprüfung darüber, ob ein Bauteil freigegeben werden darf.",
    beispiel:
      "Nach dem Schweißen einer Tankschweißnaht prüft ein Kollege die Naht mit Farbeindringmittel, um feine Risse sichtbar zu machen, die mit bloßem Auge nicht erkennbar wären.",
    wannVerwendet:
      "Nach jedem sicherheitsrelevanten Schweißvorgang, besonders bei druck- oder mediumsführenden Bauteilen wie Tanks und Rohrleitungen.",
    icon: "🔍",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-schweissen", "lk-wig-schweissen", "lk-mag-schweissen"],
    uebersetzungen: {
      en: {
        begriff: "Weld Seam & Seam Inspection",
        kurzerklaerung:
          "The weld seam is the finished joint between two workpieces; seam inspection makes sure that joint is actually free of defects and able to bear load.",
        erklaerung:
          "A weld seam can be compared to a freshly healed scar: from the outside it can look smooth, while underneath there may still be a crack or a void. That's why a seam isn't just checked visually — depending on requirements, it's also inspected with methods such as visual testing, dye penetrant testing, or X-ray. Especially for pressure-bearing components like tanks or pipelines, seam inspection decides whether a component can be released for use.",
        beispiel:
          "After welding a tank's weld seam, a colleague checks it with dye penetrant to reveal fine cracks that would be invisible to the naked eye.",
        wannVerwendet:
          "After every safety-relevant welding operation, especially on pressure- or medium-carrying components such as tanks and pipelines.",
      },
      es: {
        begriff: "Cordón de soldadura e inspección del cordón",
        kurzerklaerung:
          "El cordón de soldadura es el punto de unión terminado entre dos piezas; la inspección del cordón garantiza que esa unión esté realmente libre de defectos y sea resistente.",
        erklaerung:
          "Un cordón de soldadura se puede comparar con una cicatriz recién curada: por fuera puede verse liso, aunque por debajo todavía haya una grieta o un hueco. Por eso un cordón no se evalúa solo visualmente, sino que, según los requisitos, también se controla con métodos como la inspección visual, los líquidos penetrantes o la radiografía. Precisamente en componentes sometidos a presión, como tanques o tuberías, la inspección del cordón determina si una pieza puede ser aprobada.",
        beispiel:
          "Después de soldar el cordón de un tanque, un compañero lo inspecciona con líquido penetrante para hacer visibles grietas finas que no se detectarían a simple vista.",
        wannVerwendet:
          "Después de cada operación de soldadura relevante para la seguridad, especialmente en componentes sometidos a presión o que transportan un medio, como tanques y tuberías.",
      },
    },
  },
  {
    id: "lk-edelstahl",
    kategorieId: KATEGORIE_ID,
    begriff: "Edelstahl",
    kurzerklaerung:
      "Edelstahl ist ein hochlegierter, besonders korrosionsbeständiger Stahl, der durch Zusätze wie Chrom seine typische, rostfreie Oberfläche erhält.",
    erklaerung:
      "Edelstahl verhält sich wie eine Regenjacke aus gutem Material: Er bildet quasi von selbst eine dünne, schützende Schicht, die Feuchtigkeit und Angriffe von außen abhält, statt durchzurosten. Diese Schutzschicht entsteht durch die Legierungselemente im Stahl und erneuert sich sogar selbst, wenn sie leicht beschädigt wird. Deshalb wird Edelstahl bevorzugt dort eingesetzt, wo Hygiene, Optik oder Beständigkeit gegen aggressive Medien wichtig sind.",
    beispiel:
      "Ein Tank für Lebensmittelflüssigkeiten wird aus Edelstahl gefertigt, damit weder Rost noch Reaktionen mit dem gelagerten Medium auftreten.",
    wannVerwendet:
      "Bei Bauteilen, die mit aggressiven Medien, Feuchtigkeit oder hohen Hygieneanforderungen in Kontakt kommen, etwa in der Lebensmittel- oder Chemieindustrie.",
    icon: "✨",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-wig-schweissen", "lk-kupfernickel", "lk-baustahl"],
    uebersetzungen: {
      en: {
        begriff: "Stainless Steel",
        kurzerklaerung:
          "Stainless steel is a highly alloyed, especially corrosion-resistant steel that gets its typical rust-free surface from additions such as chromium.",
        erklaerung:
          "Stainless steel behaves like a good-quality raincoat: it essentially forms a thin protective layer on its own that keeps out moisture and outside attack instead of rusting through. This protective layer comes from the alloying elements in the steel and even renews itself if it's slightly damaged. That's why stainless steel is preferred wherever hygiene, appearance, or resistance to aggressive media matter.",
        beispiel:
          "A tank for food-grade liquids is made of stainless steel so that neither rust nor reactions with the stored medium occur.",
        wannVerwendet:
          "For components that come into contact with aggressive media, moisture, or high hygiene requirements, such as in the food or chemical industry.",
      },
      es: {
        begriff: "Acero inoxidable",
        kurzerklaerung:
          "El acero inoxidable es un acero altamente aleado y especialmente resistente a la corrosión, que obtiene su típica superficie libre de óxido gracias a elementos como el cromo.",
        erklaerung:
          "El acero inoxidable se comporta como un buen impermeable: forma prácticamente por sí solo una fina capa protectora que impide la humedad y los ataques externos en lugar de oxidarse. Esa capa protectora surge de los elementos de aleación del acero e incluso se regenera si sufre un daño leve. Por eso el acero inoxidable se utiliza preferentemente donde importan la higiene, el aspecto o la resistencia a medios agresivos.",
        beispiel:
          "Un tanque para líquidos alimentarios se fabrica en acero inoxidable para que no aparezcan ni óxido ni reacciones con el medio almacenado.",
        wannVerwendet:
          "En componentes que entran en contacto con medios agresivos, humedad o altos requisitos de higiene, por ejemplo en la industria alimentaria o química.",
      },
    },
  },
  {
    id: "lk-kupfernickel",
    kategorieId: KATEGORIE_ID,
    begriff: "Kupfernickel (CuNi)",
    kurzerklaerung:
      "Kupfernickel (CuNi) ist eine Kupfer-Nickel-Legierung mit besonders hoher Beständigkeit gegen Meer- und Salzwasser, die häufig für Seewasserleitungen eingesetzt wird.",
    erklaerung:
      "Kupfernickel ist für salzhaltiges Wasser das, was eine Taucherausrüstung für einen Menschen ist: Material, das speziell dafür gemacht ist, dauerhaftem Kontakt mit Salzwasser standzuhalten, ohne rasch anzugreifen. Normaler Stahl würde unter diesen Bedingungen deutlich schneller korrodieren. Deshalb greift man im Rohrleitungs- und Tankbau gezielt zu CuNi, wenn Meerwasser oder ähnlich aggressive wässrige Medien transportiert werden.",
    beispiel:
      "Die Seewasserkühlleitung einer Schiffsanlage wird aus Kupfernickel-Rohren gefertigt, um Korrosion durch das Meerwasser über viele Jahre zu vermeiden.",
    wannVerwendet:
      "Bei Rohrleitungen und Tanks, die dauerhaft mit Meer- oder Salzwasser in Kontakt stehen, etwa im Schiffs- und Offshore-Bereich.",
    icon: "🌊",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-edelstahl", "lk-schweissnaht"],
    uebersetzungen: {
      en: {
        begriff: "Copper-Nickel (CuNi)",
        kurzerklaerung:
          "Copper-nickel (CuNi) is a copper-nickel alloy with especially high resistance to sea and salt water, frequently used for seawater piping.",
        erklaerung:
          "For salt water, copper-nickel is what diving gear is for a person: a material specifically made to withstand constant contact with salt water without quickly being attacked. Ordinary steel would corrode noticeably faster under these conditions. That's why CuNi is specifically chosen in pipeline and tank construction when seawater or similarly aggressive aqueous media are being transported.",
        beispiel:
          "The seawater cooling line of a ship's system is made from copper-nickel pipes to prevent corrosion from the seawater over many years.",
        wannVerwendet:
          "For pipelines and tanks that are in permanent contact with sea or salt water, for example in shipping and offshore applications.",
      },
      es: {
        begriff: "Cuproníquel (CuNi)",
        kurzerklaerung:
          "El cuproníquel (CuNi) es una aleación de cobre y níquel con una resistencia especialmente alta al agua de mar y al agua salada, utilizada con frecuencia en tuberías de agua de mar.",
        erklaerung:
          "Para el agua salada, el cuproníquel es lo que un equipo de buceo es para una persona: un material hecho específicamente para resistir el contacto constante con agua salada sin deteriorarse rápidamente. El acero normal se corroería notablemente más rápido en esas condiciones. Por eso, en la construcción de tuberías y tanques se recurre deliberadamente al CuNi cuando se transporta agua de mar u otros medios acuosos igual de agresivos.",
        beispiel:
          "La línea de refrigeración de agua de mar de una instalación naval se fabrica con tubos de cuproníquel para evitar la corrosión por el agua de mar durante muchos años.",
        wannVerwendet:
          "En tuberías y tanques que están en contacto permanente con agua de mar o agua salada, por ejemplo en el ámbito naval y offshore.",
      },
    },
  },
  {
    id: "lk-aluminium-schweissen",
    kategorieId: KATEGORIE_ID,
    begriff: "Aluminium schweißen",
    kurzerklaerung:
      "Aluminium zu schweißen ist besonders anspruchsvoll, weil sich das Material sofort mit einer zähen Oxidschicht überzieht und Wärme extrem schnell ableitet.",
    erklaerung:
      "Aluminium ist beim Schweißen wie ein Eiswürfel mit einer klebrigen Zuckerschicht: Man muss zuerst die Schicht überwinden, bevor man überhaupt an das eigentliche Material herankommt, und gleichzeitig schmilzt der Eiswürfel darunter viel schneller weg als erwartet. Die Oxidschicht auf Aluminium schmilzt bei einer deutlich höheren Temperatur als das Aluminium selbst und muss vor bzw. beim Schweißen aufgebrochen werden. Gleichzeitig leitet Aluminium Wärme so gut ab, dass ohne angepasste Technik schnell Verzug oder Durchbrand entsteht.",
    beispiel:
      "Ein Aluminiumbehälter im Fahrzeugbau wird mit angepasster WIG-Technik geschweißt, weil ein normales Vorgehen wie bei Stahl sofort zu Löchern im Blech führen würde.",
    wannVerwendet:
      "Immer dann, wenn Aluminiumbauteile verbunden werden sollen und die Besonderheiten des Werkstoffs (Oxidschicht, Wärmeleitfähigkeit) berücksichtigt werden müssen.",
    icon: "🪶",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-wig-schweissen", "lk-schweissen"],
    uebersetzungen: {
      en: {
        begriff: "Welding Aluminum",
        kurzerklaerung:
          "Welding aluminum is especially demanding because the material instantly develops a tough oxide layer and conducts heat away extremely fast.",
        erklaerung:
          "Aluminum when welding is like an ice cube coated in sticky sugar: you first have to get through that layer before you even reach the actual material, and at the same time the ice cube underneath melts away much faster than expected. The oxide layer on aluminum melts at a noticeably higher temperature than the aluminum itself and has to be broken up before or during welding. At the same time, aluminum conducts heat away so well that, without adapted technique, distortion or burn-through can occur quickly.",
        beispiel:
          "An aluminum container in vehicle construction is welded using adapted TIG technique, because a normal steel-like approach would immediately punch holes through the sheet.",
        wannVerwendet:
          "Whenever aluminum components need to be joined and the material's particular characteristics (oxide layer, thermal conductivity) must be taken into account.",
      },
      es: {
        begriff: "Soldadura de aluminio",
        kurzerklaerung:
          "Soldar aluminio es especialmente exigente porque el material se recubre al instante con una capa de óxido resistente y conduce el calor con extrema rapidez.",
        erklaerung:
          "El aluminio, al soldarlo, es como un cubito de hielo cubierto de una capa de azúcar pegajosa: primero hay que atravesar esa capa antes de llegar siquiera al material propiamente dicho, y al mismo tiempo el hielo de debajo se derrite mucho más rápido de lo esperado. La capa de óxido del aluminio se funde a una temperatura bastante más alta que el propio aluminio y debe romperse antes o durante la soldadura. Al mismo tiempo, el aluminio conduce tan bien el calor que, sin una técnica adaptada, aparecen rápidamente deformaciones o perforaciones.",
        beispiel:
          "Un depósito de aluminio en la construcción de vehículos se suelda con una técnica TIG adaptada, porque un procedimiento normal como el del acero produciría agujeros en la chapa de inmediato.",
        wannVerwendet:
          "Siempre que se deban unir componentes de aluminio y haya que tener en cuenta las particularidades del material (capa de óxido, conductividad térmica).",
      },
    },
  },
  {
    id: "lk-baustahl",
    kategorieId: KATEGORIE_ID,
    begriff: "Baustahl",
    kurzerklaerung:
      "Baustahl ist ein unlegierter oder niedriglegierter Stahl, der wegen seiner guten Festigkeit und geringen Kosten für tragende Konstruktionen verwendet wird.",
    erklaerung:
      "Baustahl ist im Metallbau das, was Standardbretter beim Möbelbau sind: solide, verlässlich und für die meisten tragenden Zwecke völlig ausreichend, ohne dass man für jedes Bauteil zu einem teuren Spezialmaterial greifen muss. Er lässt sich gut schweißen und formen, rostet aber ohne Schutzanstrich oder Beschichtung mit der Zeit. Deshalb ist er die Standardwahl für Rahmen, Gestelle und tragende Strukturen, bei denen keine besondere Korrosionsbeständigkeit gefordert ist.",
    beispiel:
      "Das tragende Traggestell für einen Lagertank wird aus Baustahlprofilen geschweißt und anschließend lackiert, um es vor Witterung zu schützen.",
    wannVerwendet:
      "Bei tragenden Konstruktionen, Gestellen und Rahmen ohne besondere Anforderungen an Korrosionsbeständigkeit.",
    icon: "🏗️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-mag-schweissen", "lk-edelstahl"],
    uebersetzungen: {
      en: {
        begriff: "Structural/Mild Steel",
        kurzerklaerung:
          "Structural (mild) steel is an unalloyed or low-alloy steel used for load-bearing constructions because of its good strength and low cost.",
        erklaerung:
          "In metal fabrication, structural steel is what standard boards are in furniture making: solid, reliable, and completely sufficient for most load-bearing purposes, without needing to reach for an expensive specialty material for every component. It welds and forms well, but rusts over time without a protective coat or coating. That's why it's the standard choice for frames, racks, and load-bearing structures where no particular corrosion resistance is required.",
        beispiel:
          "The support frame for a storage tank is welded from structural steel profiles and then painted to protect it from the weather.",
        wannVerwendet:
          "For load-bearing constructions, racks, and frames with no particular corrosion-resistance requirements.",
      },
      es: {
        begriff: "Acero estructural",
        kurzerklaerung:
          "El acero estructural es un acero sin alear o de baja aleación que se utiliza en construcciones portantes por su buena resistencia y bajo coste.",
        erklaerung:
          "En la construcción metálica, el acero estructural es lo que las tablas estándar son en la carpintería: sólido, fiable y totalmente suficiente para la mayoría de fines portantes, sin tener que recurrir a un material especial caro para cada pieza. Se suelda y se conforma bien, pero con el tiempo se oxida sin una pintura o recubrimiento de protección. Por eso es la opción estándar para bastidores, estructuras y elementos portantes que no requieren una resistencia especial a la corrosión.",
        beispiel:
          "El bastidor portante de un tanque de almacenamiento se suelda con perfiles de acero estructural y después se pinta para protegerlo de la intemperie.",
        wannVerwendet:
          "En construcciones portantes, bastidores y estructuras sin requisitos especiales de resistencia a la corrosión.",
      },
    },
  },
  {
    id: "lk-werkstattpresse",
    kategorieId: KATEGORIE_ID,
    begriff: "Werkstattpresse",
    kurzerklaerung:
      "Eine Werkstattpresse übt mit hydraulischer Kraft gezielten Druck auf ein Werkstück aus, etwa um Teile zu biegen, zu richten oder Lager ein- bzw. auszupressen.",
    erklaerung:
      "Die Werkstattpresse ist wie ein sehr starker, sehr präziser Schraubstock, der statt Klemmen richtig drückt: Wo Muskelkraft mit dem Hammer nicht mehr ausreicht, bringt die Presse kontrolliert und gleichmäßig hohe Kräfte auf. Über einen Hydraulikzylinder wird die Kraft aufgebaut, während das Werkstück sicher zwischen den Pressplatten fixiert ist. So lassen sich Bauteile richten, verformen oder Pressverbindungen wie Lager sauber lösen.",
    beispiel:
      "Ein leicht verzogenes Stahlblech wird in der Werkstattpresse zwischen zwei Auflagen wieder plan gerichtet, bevor es weiterverarbeitet wird.",
    wannVerwendet:
      "Beim Richten verzogener Bauteile, beim Ein- oder Auspressen von Lagern und Buchsen oder beim gezielten Umformen von Metallteilen.",
    icon: "🔩",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-bandsaege"],
    uebersetzungen: {
      en: {
        begriff: "Workshop Press",
        kurzerklaerung:
          "A workshop press uses hydraulic force to apply targeted pressure to a workpiece, for example to bend, straighten, or press bearings in or out.",
        erklaerung:
          "The workshop press is like a very strong, very precise vise that actually pushes instead of just clamping: where muscle power with a hammer is no longer enough, the press applies high force in a controlled, even way. A hydraulic cylinder builds up the force while the workpiece is held securely between the press plates. This makes it possible to straighten or reshape components, or to cleanly press-fit or remove press connections such as bearings.",
        beispiel:
          "A slightly warped steel sheet is flattened again in the workshop press between two supports before further processing.",
        wannVerwendet:
          "For straightening warped components, pressing bearings and bushings in or out, or deliberately reshaping metal parts.",
      },
      es: {
        begriff: "Prensa de taller",
        kurzerklaerung:
          "Una prensa de taller ejerce presión dirigida sobre una pieza mediante fuerza hidráulica, por ejemplo para doblar, enderezar o insertar y extraer rodamientos.",
        erklaerung:
          "La prensa de taller es como un tornillo de banco muy fuerte y muy preciso que, en lugar de sujetar, realmente empuja: donde la fuerza muscular con el martillo ya no basta, la prensa aplica fuerzas altas de forma controlada y uniforme. La fuerza se genera mediante un cilindro hidráulico mientras la pieza queda fijada de forma segura entre las placas de la prensa. Así se pueden enderezar o deformar piezas, o desmontar limpiamente uniones a presión como los rodamientos.",
        beispiel:
          "Una chapa de acero ligeramente deformada se vuelve a aplanar en la prensa de taller entre dos apoyos antes de continuar su procesamiento.",
        wannVerwendet:
          "Para enderezar piezas deformadas, insertar o extraer rodamientos y casquillos, o para conformar piezas metálicas de manera controlada.",
      },
    },
  },
  {
    id: "lk-bandsaege",
    kategorieId: KATEGORIE_ID,
    begriff: "Bandsäge",
    kurzerklaerung:
      "Eine Bandsäge trennt Metall mit einem endlos umlaufenden Sägeband und eignet sich besonders für saubere, gerade Zuschnitte von Profilen und Rohren.",
    erklaerung:
      "Die Bandsäge arbeitet wie eine Kettensäge, die statt hin und her nur immer in eine Richtung läuft: Das umlaufende Band schneidet gleichmäßig und ohne die ruckartigen Bewegungen einer Handsäge. Dadurch entstehen gerade, saubere Schnittkanten mit wenig Kraftaufwand für den Bediener. Im Metallbau wird sie meist genutzt, um Rohre, Profile oder Bleche vor dem Schweißen exakt auf Länge zu bringen.",
    beispiel:
      "Ein Stahlrohr wird an der Bandsäge exakt auf die benötigte Länge zugeschnitten, bevor es für die Tankleitung verschweißt wird.",
    wannVerwendet:
      "Beim Ablängen und Zuschneiden von Profilen, Rohren und Blechen vor der Weiterverarbeitung.",
    icon: "🪚",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-werkstattpresse", "lk-schweissen"],
    uebersetzungen: {
      en: {
        begriff: "Band Saw",
        kurzerklaerung:
          "A band saw cuts metal with an endless, continuously circulating saw band and is especially suited to clean, straight cuts of profiles and pipes.",
        erklaerung:
          "The band saw works like a chainsaw that always runs in one direction instead of back and forth: the circulating band cuts evenly, without the jerky motion of a hand saw. This produces straight, clean cut edges with little effort for the operator. In metal fabrication it's mostly used to cut pipes, profiles, or sheet metal to exact length before welding.",
        beispiel:
          "A steel pipe is cut to the exact required length on the band saw before it is welded into the tank line.",
        wannVerwendet:
          "For cutting profiles, pipes, and sheet metal to length before further processing.",
      },
      es: {
        begriff: "Sierra de cinta",
        kurzerklaerung:
          "Una sierra de cinta corta metal con una cinta de sierra que circula sin fin y es especialmente adecuada para cortes rectos y limpios de perfiles y tubos.",
        erklaerung:
          "La sierra de cinta funciona como una motosierra que, en lugar de moverse hacia adelante y atrás, siempre gira en una sola dirección: la cinta en movimiento corta de forma uniforme, sin los movimientos bruscos de una sierra de mano. Esto produce cantos de corte rectos y limpios con poco esfuerzo para el operario. En la construcción metálica se utiliza sobre todo para cortar tubos, perfiles o chapas a la medida exacta antes de soldarlos.",
        beispiel:
          "Un tubo de acero se corta a la longitud exacta necesaria en la sierra de cinta antes de soldarlo para la línea del tanque.",
        wannVerwendet:
          "Para cortar a medida perfiles, tubos y chapas antes de continuar su procesamiento.",
      },
    },
  },
];
