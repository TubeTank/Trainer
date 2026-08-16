import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-lokale-llms";

export const lokaleLlmsLernkarten: Lernkarte[] = [
  {
    id: "lk-lokales-llm",
    kategorieId: KATEGORIE_ID,
    begriff: "Lokales LLM",
    kurzerklaerung:
      "Ein lokales LLM ist ein Sprachmodell, das komplett auf dem eigenen Rechner läuft, statt Anfragen an einen Server im Internet zu schicken.",
    erklaerung:
      "Statt wie bei einem Cloud-Dienst jede Anfrage an einen fremden Rechenzentrum zu schicken, läuft hier die gesamte Berechnung im eigenen Haus – vergleichbar mit einem Koch, der zu Hause selbst kocht, statt jedes Mal Essen zu bestellen. Man braucht dafür etwas Ausstattung in der eigenen Küche, ist danach aber unabhängig von Lieferzeiten und fremden Küchen. Die Daten verlassen dabei nie den eigenen Computer.",
    beispiel:
      "Eine Anwältin lässt vertrauliche Verträge von einem lokal installierten Modell zusammenfassen, weil die Dokumente aus Datenschutzgründen nicht auf fremde Server hochgeladen werden dürfen.",
    wannVerwendet:
      "Immer dann, wenn Datenschutz, Offline-Fähigkeit oder Unabhängigkeit von Cloud-Anbietern wichtiger sind als maximale Modellleistung.",
    icon: "🖥️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-ollama", "lk-lm-studio", "lk-vram"],
  },
  {
    id: "lk-ollama",
    kategorieId: KATEGORIE_ID,
    begriff: "Ollama",
    kurzerklaerung:
      "Ollama ist ein kostenloses Programm, mit dem man lokale Sprachmodelle über einfache Befehle in der Kommandozeile herunterladen und starten kann.",
    erklaerung:
      "Ollama ist wie ein Getränkeautomat für Sprachmodelle: Man tippt den Namen eines Modells ein, der Automat lädt es automatisch herunter und wirft es fertig einsatzbereit aus – ohne dass man selbst wissen muss, wie die Technik im Inneren funktioniert. Im Hintergrund kümmert sich Ollama um Download, Einrichtung und Verwaltung mehrerer Modelle gleichzeitig.",
    beispiel:
      "Ein Hobby-Bastler installiert Ollama, tippt „ollama run llama3“ ein und chattet wenige Minuten später bereits mit dem Modell in seinem Terminal.",
    wannVerwendet:
      "Wenn man ohne grafische Oberfläche, sondern schnell und unkompliziert über die Kommandozeile mit lokalen Modellen arbeiten möchte.",
    befehl: "ollama run llama3",
    icon: "🦙",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-lokales-llm", "lk-lm-studio", "lk-modellformat-gguf"],
  },
  {
    id: "lk-lm-studio",
    kategorieId: KATEGORIE_ID,
    begriff: "LM Studio",
    kurzerklaerung:
      "LM Studio ist eine kostenlose Desktop-Anwendung mit grafischer Oberfläche zum Herunterladen, Verwalten und Ausprobieren lokaler Sprachmodelle.",
    erklaerung:
      "Während man bei manchen Werkzeugen alles über Textbefehle steuern muss, ist LM Studio eher wie ein Musik-Player mit Bibliothek und Wiedergabe-Knöpfen: Man klickt sich durch eine Liste verfügbarer Modelle, lädt sie per Mausklick herunter und chattet direkt in einem übersichtlichen Fenster damit. Das macht den Einstieg besonders leicht für alle, die keine Kommandozeile mögen.",
    beispiel:
      "Eine Lehrerin ohne Programmiererfahrung öffnet LM Studio, sucht in der eingebauten Modell-Bibliothek nach einem kleinen Modell und beginnt direkt im Chat-Fenster, Unterrichtsideen zu entwickeln.",
    wannVerwendet:
      "Wenn man lokale Modelle bequem über eine grafische Oberfläche ausprobieren möchte, ohne Befehle in einem Terminal einzugeben.",
    icon: "🖼️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-lokales-llm", "lk-ollama", "lk-modellformat-gguf"],
  },
  {
    id: "lk-quantisierung",
    kategorieId: KATEGORIE_ID,
    begriff: "Quantisierung",
    kurzerklaerung:
      "Quantisierung ist ein Verfahren, das ein Sprachmodell verkleinert und beschleunigt, indem die gespeicherten Zahlenwerte weniger genau, aber platzsparender abgelegt werden.",
    erklaerung:
      "Man kann sich das wie das Komprimieren eines hochauflösenden Fotos zu einer kleineren Dateigröße vorstellen: Ein paar feine Details gehen verloren, aber das Bild bleibt für das menschliche Auge weiterhin gut erkennbar, während es viel weniger Speicherplatz braucht. Genauso werden bei der Quantisierung die internen Zahlen eines Modells gröber gerundet, wodurch es deutlich kleiner wird und auch auf schwächerer Hardware läuft.",
    beispiel:
      "Ein Modell, das in voller Genauigkeit 16 GB Speicher benötigt, passt nach einer Quantisierung auf 4-Bit-Genauigkeit auf etwa 4-5 GB und läuft dadurch auch auf einem Laptop mit weniger Grafikspeicher.",
    wannVerwendet:
      "Wenn ein Modell eigentlich zu groß für den vorhandenen Arbeits- oder Grafikspeicher ist und trotzdem lokal genutzt werden soll.",
    icon: "🗜️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-vram", "lk-modellgroesse-parameter", "lk-modellformat-gguf"],
  },
  {
    id: "lk-vram",
    kategorieId: KATEGORIE_ID,
    begriff: "VRAM (Grafikspeicher)",
    kurzerklaerung:
      "VRAM ist der eigene Arbeitsspeicher der Grafikkarte, in den ein Sprachmodell geladen werden muss, damit es dort schnell berechnet werden kann.",
    erklaerung:
      "Man kann sich VRAM wie die Werkbank eines Handwerkers vorstellen: Nur was auf die Werkbank passt, kann gerade bearbeitet werden – der Rest muss im Regal (dem normalen Arbeitsspeicher) warten und macht die Arbeit spürbar langsamer. Ist die Werkbank zu klein für das Werkstück, also das Modell, passt es entweder gar nicht drauf oder man muss es vorher verkleinern.",
    beispiel:
      "Eine Grafikkarte mit 8 GB VRAM kann ein kleines, quantisiertes 7-Milliarden-Parameter-Modell flüssig ausführen, stößt bei einem großen unquantisierten 70-Milliarden-Modell aber schnell an ihre Grenzen.",
    wannVerwendet:
      "Bevor man ein Modell auswählt: Man prüft zuerst, wie viel VRAM die eigene Grafikkarte hat, um ein passend großes Modell zu wählen.",
    icon: "🧠",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-quantisierung", "lk-modellgroesse-parameter", "lk-inferenz"],
  },
  {
    id: "lk-modellgroesse-parameter",
    kategorieId: KATEGORIE_ID,
    begriff: "Modellgröße (Parameteranzahl)",
    kurzerklaerung:
      "Die Parameteranzahl gibt an, aus wie vielen einstellbaren Werten ein Sprachmodell besteht, und dient als grober Maßstab für seine Größe und Fähigkeiten.",
    erklaerung:
      "Parameter sind vergleichbar mit den einzelnen Reglern an einem riesigen Mischpult: Je mehr Regler ein Mischpult hat, desto feiner und komplexer lassen sich Klänge einstellen – aber desto größer und aufwendiger wird auch das ganze Gerät. Ein Modell mit 7 Milliarden Parametern hat also deutlich weniger „Regler“ als eines mit 70 Milliarden und ist entsprechend kleiner, schneller, aber meist auch weniger leistungsfähig.",
    beispiel:
      "Ein 7B-Modell (7 Milliarden Parameter) läuft flott auf einem normalen Gaming-Laptop, während ein 70B-Modell deutlich mehr Speicher und Rechenleistung benötigt, dafür aber oft klügere Antworten liefert.",
    wannVerwendet:
      "Beim Vergleichen und Auswählen von Modellen, um Leistungsfähigkeit und Hardware-Anforderungen gegeneinander abzuwägen.",
    icon: "📏",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-vram", "lk-quantisierung", "lk-open-weight-modell"],
  },
  {
    id: "lk-inferenz",
    kategorieId: KATEGORIE_ID,
    begriff: "Inferenz",
    kurzerklaerung:
      "Inferenz ist der Vorgang, bei dem ein bereits fertig trainiertes Sprachmodell auf eine Eingabe hin tatsächlich eine Antwort berechnet.",
    erklaerung:
      "Wenn das Training eines Modells wie das jahrelange Ausbilden eines Übersetzers ist, dann ist die Inferenz der Moment, in dem dieser Übersetzer tatsächlich einen Satz übersetzt, den man ihm gerade vorliest. Beim lokalen Betrieb eines LLMs trainiert man selbst nichts – man nutzt lediglich diesen Anwendungsschritt, also die Inferenz, auf dem eigenen Rechner.",
    beispiel:
      "Wenn man in Ollama eine Frage eingibt und das Modell wenige Sekunden später eine Antwort ausgibt, läuft in diesem Moment die Inferenz auf der eigenen Grafikkarte oder CPU.",
    wannVerwendet:
      "Jedes Mal, wenn man ein lokales Modell tatsächlich eine Anfrage beantworten lässt – also bei jeder normalen Nutzung.",
    icon: "⚡",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-vram", "lk-lokales-llm", "lk-ollama"],
  },
  {
    id: "lk-open-weight-modell",
    kategorieId: KATEGORIE_ID,
    begriff: "Open-Weight-Modell",
    kurzerklaerung:
      "Ein Open-Weight-Modell ist ein Sprachmodell, dessen trainierte Gewichte frei zum Herunterladen veröffentlicht wurden, sodass es jeder lokal nutzen kann.",
    erklaerung:
      "Man kann sich das wie ein Kochrezept vorstellen, das der Koch nicht nur beschreibt, sondern dessen fertig abgeschmecktes Gewürzmischung er gleich mitliefert: Man muss nicht selbst jahrelang experimentieren, sondern bekommt das fertige Ergebnis direkt zum Nachkochen in die eigene Küche. Die eigentlichen Trainingsdaten und der Trainingsprozess bleiben dabei oft trotzdem geheim – offen sind nur die fertigen „Gewichte“, also die trainierten Werte des Modells.",
    beispiel:
      "Modelle wie Llama oder Mistral werden als Open-Weight-Modelle veröffentlicht und können deshalb kostenlos über Ollama oder LM Studio heruntergeladen und lokal betrieben werden.",
    wannVerwendet:
      "Beim Auswählen eines Modells für den lokalen Betrieb, da nur Open-Weight-Modelle überhaupt heruntergeladen und selbst ausgeführt werden können.",
    icon: "🔓",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-modellgroesse-parameter", "lk-modellformat-gguf", "lk-lokales-llm"],
  },
  {
    id: "lk-modellformat-gguf",
    kategorieId: KATEGORIE_ID,
    begriff: "Modellformat (GGUF)",
    kurzerklaerung:
      "GGUF ist ein Dateiformat, in dem lokale Sprachmodelle so verpackt werden, dass sie sich leicht herunterladen und auf normaler Consumer-Hardware ausführen lassen.",
    erklaerung:
      "GGUF ist vergleichbar mit einem gut beschrifteten Umzugskarton: Alles, was das Modell zum Laufen braucht, ist ordentlich verpackt in einer einzigen Datei, sodass Programme wie Ollama oder LM Studio sie öffnen und sofort verwenden können, ohne den Inhalt erst umständlich zusammensuchen zu müssen. Häufig sind GGUF-Dateien bereits quantisiert, also verkleinert, und tragen genau das im Dateinamen.",
    beispiel:
      "Eine Datei namens „llama-3-8b-instruct.Q4_K_M.gguf“ enthält ein bereits quantisiertes 8-Milliarden-Parameter-Modell in genau diesem einheitlichen Format.",
    wannVerwendet:
      "Beim Herunterladen eines Modells von Plattformen wie Hugging Face, wenn man prüft, ob eine passende GGUF-Datei für die eigene lokale Software verfügbar ist.",
    icon: "📄",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-quantisierung", "lk-ollama", "lk-lm-studio"],
  },
];
