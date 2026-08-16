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
  },
];
