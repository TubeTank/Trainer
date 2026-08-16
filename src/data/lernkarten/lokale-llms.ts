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
    uebersetzungen: {
      en: {
        begriff: "Local LLM",
        kurzerklaerung:
          "A local LLM is a language model that runs entirely on your own computer, instead of sending requests to a server on the internet.",
        erklaerung:
          "Instead of sending every request to a remote data center like you would with a cloud service, all the computing happens right at home – like a cook who cooks at home instead of ordering food every time. You need some equipment in your own kitchen, but afterwards you're independent of delivery times and other people's kitchens. The data never leaves your own computer.",
        beispiel:
          "A lawyer has confidential contracts summarized by a locally installed model, because the documents may not be uploaded to external servers for data protection reasons.",
        wannVerwendet:
          "Whenever privacy, offline capability, or independence from cloud providers matter more than maximum model performance.",
      },
      es: {
        begriff: "LLM local",
        kurzerklaerung:
          "Un LLM local es un modelo de lenguaje que se ejecuta completamente en tu propio ordenador, en lugar de enviar solicitudes a un servidor en internet.",
        erklaerung:
          "En lugar de enviar cada solicitud a un centro de datos ajeno, como ocurre con un servicio en la nube, todo el cálculo se realiza en casa, como un cocinero que cocina en su propia cocina en vez de pedir comida cada vez. Para ello se necesita algo de equipamiento en la propia cocina, pero a cambio se gana independencia de los tiempos de entrega y de cocinas ajenas. Los datos nunca salen del propio ordenador.",
        beispiel:
          "Una abogada hace que un modelo instalado localmente resuma contratos confidenciales, porque por motivos de protección de datos los documentos no pueden subirse a servidores externos.",
        wannVerwendet:
          "Siempre que la privacidad, la capacidad de funcionar sin conexión o la independencia de proveedores en la nube sean más importantes que el máximo rendimiento del modelo.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Ollama",
        kurzerklaerung:
          "Ollama is a free program that lets you download and run local language models using simple commands in the command line.",
        erklaerung:
          'Ollama is like a vending machine for language models: you type in the name of a model, the machine automatically downloads it and dispenses it ready to use – without you needing to know how the technology works on the inside. In the background, Ollama takes care of downloading, setting up, and managing multiple models at once.',
        beispiel:
          'A hobbyist installs Ollama, types "ollama run llama3", and is already chatting with the model in their terminal a few minutes later.',
        wannVerwendet:
          "When you want to work with local models quickly and easily via the command line, without a graphical interface.",
      },
      es: {
        begriff: "Ollama",
        kurzerklaerung:
          "Ollama es un programa gratuito que permite descargar y ejecutar modelos de lenguaje locales mediante comandos sencillos en la línea de comandos.",
        erklaerung:
          "Ollama es como una máquina expendedora de modelos de lenguaje: escribes el nombre de un modelo, la máquina lo descarga automáticamente y lo entrega listo para usar, sin que necesites saber cómo funciona la tecnología por dentro. Entre bastidores, Ollama se encarga de descargar, configurar y gestionar varios modelos a la vez.",
        beispiel:
          "Un aficionado instala Ollama, escribe «ollama run llama3» y pocos minutos después ya está chateando con el modelo en su terminal.",
        wannVerwendet:
          "Cuando se quiere trabajar con modelos locales de forma rápida y sencilla a través de la línea de comandos, sin una interfaz gráfica.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "LM Studio",
        kurzerklaerung:
          "LM Studio is a free desktop application with a graphical interface for downloading, managing, and trying out local language models.",
        erklaerung:
          "While some tools require you to control everything with text commands, LM Studio is more like a music player with a library and playback buttons: you click through a list of available models, download them with a mouse click, and chat with them directly in a clear window. This makes getting started especially easy for anyone who doesn't like the command line.",
        beispiel:
          "A teacher with no programming experience opens LM Studio, searches the built-in model library for a small model, and starts developing lesson ideas directly in the chat window.",
        wannVerwendet:
          "When you want to try out local models comfortably through a graphical interface, without typing commands into a terminal.",
      },
      es: {
        begriff: "LM Studio",
        kurzerklaerung:
          "LM Studio es una aplicación de escritorio gratuita con interfaz gráfica para descargar, gestionar y probar modelos de lenguaje locales.",
        erklaerung:
          "Mientras que con otras herramientas hay que controlarlo todo mediante comandos de texto, LM Studio se parece más a un reproductor de música con una biblioteca y botones de reproducción: se navega por una lista de modelos disponibles, se descargan con un clic y se chatea directamente con ellos en una ventana clara y sencilla. Esto facilita especialmente el comienzo para quienes no se sienten cómodos con la línea de comandos.",
        beispiel:
          "Una profesora sin experiencia en programación abre LM Studio, busca un modelo pequeño en la biblioteca integrada y empieza a desarrollar ideas para sus clases directamente en la ventana de chat.",
        wannVerwendet:
          "Cuando se quiere probar modelos locales cómodamente mediante una interfaz gráfica, sin escribir comandos en una terminal.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Quantization",
        kurzerklaerung:
          "Quantization is a technique that shrinks and speeds up a language model by storing its numeric values less precisely but more compactly.",
        erklaerung:
          "You can think of it like compressing a high-resolution photo into a smaller file size: a few fine details get lost, but the image still looks good to the human eye while taking up far less storage space. In the same way, quantization rounds a model's internal numbers more coarsely, making it significantly smaller and able to run on weaker hardware.",
        beispiel:
          "A model that needs 16 GB of memory at full precision fits into roughly 4-5 GB after quantization to 4-bit precision, and can then run even on a laptop with less graphics memory.",
        wannVerwendet:
          "When a model is actually too large for the available RAM or VRAM but you still want to run it locally.",
      },
      es: {
        begriff: "Cuantización",
        kurzerklaerung:
          "La cuantización es una técnica que reduce el tamaño de un modelo de lenguaje y lo acelera, almacenando sus valores numéricos con menor precisión pero de forma más compacta.",
        erklaerung:
          "Se puede imaginar como comprimir una foto de alta resolución a un tamaño de archivo menor: se pierden algunos detalles finos, pero la imagen sigue viéndose bien a simple vista mientras ocupa mucho menos espacio de almacenamiento. De la misma manera, la cuantización redondea de forma más tosca los números internos de un modelo, lo que lo hace considerablemente más pequeño y capaz de funcionar en hardware más modesto.",
        beispiel:
          "Un modelo que necesita 16 GB de memoria con precisión completa ocupa alrededor de 4-5 GB tras cuantizarlo a una precisión de 4 bits, y así puede ejecutarse incluso en un portátil con menos memoria gráfica.",
        wannVerwendet:
          "Cuando un modelo resulta demasiado grande para la memoria RAM o VRAM disponible, pero aun así se quiere usar de forma local.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "VRAM (Graphics Memory)",
        kurzerklaerung:
          "VRAM is the graphics card's own memory, into which a language model must be loaded so it can be computed there quickly.",
        erklaerung:
          "You can think of VRAM like a craftsman's workbench: only what fits on the workbench can be worked on right now – everything else has to wait on the shelf (regular RAM), which noticeably slows the work down. If the workbench is too small for the workpiece, meaning the model, it either doesn't fit at all or has to be made smaller first.",
        beispiel:
          "A graphics card with 8 GB of VRAM can smoothly run a small, quantized 7-billion-parameter model, but quickly hits its limits with a large, unquantized 70-billion-parameter model.",
        wannVerwendet:
          "Before choosing a model: first check how much VRAM your own graphics card has, in order to pick a suitably sized model.",
      },
      es: {
        begriff: "VRAM (memoria gráfica)",
        kurzerklaerung:
          "La VRAM es la memoria propia de la tarjeta gráfica, en la que hay que cargar un modelo de lenguaje para que pueda calcularse ahí de forma rápida.",
        erklaerung:
          "La VRAM se puede imaginar como el banco de trabajo de un artesano: solo lo que cabe en el banco se puede trabajar en ese momento; el resto tiene que esperar en la estantería (la memoria RAM normal), lo que ralentiza notablemente el trabajo. Si el banco es demasiado pequeño para la pieza, es decir, para el modelo, o bien no cabe en absoluto o hay que reducirlo antes.",
        beispiel:
          "Una tarjeta gráfica con 8 GB de VRAM puede ejecutar sin problemas un modelo pequeño y cuantizado de 7 mil millones de parámetros, pero rápidamente alcanza sus límites con un modelo grande sin cuantizar de 70 mil millones.",
        wannVerwendet:
          "Antes de elegir un modelo: primero se comprueba cuánta VRAM tiene la propia tarjeta gráfica, para elegir un modelo de tamaño adecuado.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Model Size (Parameter Count)",
        kurzerklaerung:
          "The parameter count indicates how many adjustable values a language model consists of, and serves as a rough measure of its size and capabilities.",
        erklaerung:
          'Parameters are comparable to the individual knobs on a huge mixing console: the more knobs a mixing console has, the more finely and precisely sounds can be adjusted – but the bigger and more complex the whole device becomes. A model with 7 billion parameters therefore has far fewer "knobs" than one with 70 billion, and is correspondingly smaller and faster, but usually also less capable.',
        beispiel:
          "A 7B model (7 billion parameters) runs smoothly on a regular gaming laptop, while a 70B model needs significantly more memory and computing power, but often delivers smarter answers.",
        wannVerwendet:
          "When comparing and choosing models, to weigh capability against hardware requirements.",
      },
      es: {
        begriff: "Tamaño del modelo (número de parámetros)",
        kurzerklaerung:
          "El número de parámetros indica de cuántos valores ajustables se compone un modelo de lenguaje, y sirve como medida aproximada de su tamaño y sus capacidades.",
        erklaerung:
          "Los parámetros son comparables a los mandos individuales de una enorme mesa de mezclas: cuantos más mandos tiene una mesa de mezclas, con más precisión y detalle se pueden ajustar los sonidos, pero más grande y complejo se vuelve también todo el aparato. Un modelo con 7 mil millones de parámetros tiene, por tanto, muchos menos «mandos» que uno con 70 mil millones, y es en consecuencia más pequeño y rápido, aunque normalmente también menos potente.",
        beispiel:
          "Un modelo de 7B (7 mil millones de parámetros) funciona con fluidez en un portátil de gaming normal, mientras que uno de 70B necesita mucha más memoria y potencia de cálculo, pero a menudo ofrece respuestas más inteligentes.",
        wannVerwendet:
          "Al comparar y elegir modelos, para sopesar la capacidad frente a los requisitos de hardware.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Inference",
        kurzerklaerung:
          "Inference is the process in which an already-trained language model actually computes a response to an input.",
        erklaerung:
          "If training a model is like years spent educating a translator, then inference is the moment that translator actually translates a sentence being read to them right now. When running an LLM locally, you don't train anything yourself – you only use this application step, the inference, on your own computer.",
        beispiel:
          "When you type a question into Ollama and the model outputs an answer a few seconds later, inference is running on your own graphics card or CPU at that moment.",
        wannVerwendet:
          "Every time you have a local model actually answer a request – in other words, during every normal use.",
      },
      es: {
        begriff: "Inferencia",
        kurzerklaerung:
          "La inferencia es el proceso mediante el cual un modelo de lenguaje ya entrenado calcula realmente una respuesta a una entrada.",
        erklaerung:
          "Si entrenar un modelo es como formar durante años a un traductor, la inferencia es el momento en que ese traductor traduce de verdad una frase que se le acaba de leer. Al ejecutar un LLM de forma local no se entrena nada uno mismo: solo se utiliza ese paso de aplicación, la inferencia, en el propio ordenador.",
        beispiel:
          "Cuando se escribe una pregunta en Ollama y el modelo entrega una respuesta pocos segundos después, en ese momento se está ejecutando la inferencia en la propia tarjeta gráfica o CPU.",
        wannVerwendet:
          "Cada vez que se hace que un modelo local responda realmente a una solicitud, es decir, en cada uso normal.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Open-Weight Model",
        kurzerklaerung:
          "An open-weight model is a language model whose trained weights have been published for free download, so that anyone can run it locally.",
        erklaerung:
          'You can think of it like a recipe where the cook doesn\'t just describe it, but also hands over the already-perfected spice blend: you don\'t have to spend years experimenting yourself, you get the finished result directly to recreate in your own kitchen. The actual training data and training process often remain secret – only the finished "weights," meaning the model\'s trained values, are open.',
        beispiel:
          "Models like Llama or Mistral are released as open-weight models, which is why they can be downloaded for free via Ollama or LM Studio and run locally.",
        wannVerwendet:
          "When choosing a model for local use, since only open-weight models can be downloaded and run yourself at all.",
      },
      es: {
        begriff: "Modelo de pesos abiertos",
        kurzerklaerung:
          "Un modelo de pesos abiertos es un modelo de lenguaje cuyos pesos entrenados se han publicado para su descarga gratuita, de modo que cualquiera puede ejecutarlo localmente.",
        erklaerung:
          "Se puede imaginar como una receta de cocina en la que el cocinero no solo la describe, sino que además entrega ya lista la mezcla de especias perfectamente ajustada: no hace falta pasar años experimentando por cuenta propia, sino que se recibe el resultado final listo para reproducirlo en la propia cocina. Los datos de entrenamiento reales y el proceso de entrenamiento suelen seguir siendo secretos; lo único abierto son los «pesos» finales, es decir, los valores entrenados del modelo.",
        beispiel:
          "Modelos como Llama o Mistral se publican como modelos de pesos abiertos, por lo que pueden descargarse gratis a través de Ollama o LM Studio y ejecutarse localmente.",
        wannVerwendet:
          "Al elegir un modelo para uso local, ya que solo los modelos de pesos abiertos pueden descargarse y ejecutarse por cuenta propia.",
      },
    },
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
    uebersetzungen: {
      en: {
        begriff: "Model Format (GGUF)",
        kurzerklaerung:
          "GGUF is a file format used to package local language models so they can be easily downloaded and run on normal consumer hardware.",
        erklaerung:
          'GGUF is comparable to a well-labeled moving box: everything the model needs to run is neatly packed into a single file, so programs like Ollama or LM Studio can open it and use it right away, without having to laboriously gather the contents together first. GGUF files are often already quantized, meaning shrunk down, and this is usually reflected right in the file name.',
        beispiel:
          'A file named "llama-3-8b-instruct.Q4_K_M.gguf" contains an already-quantized 8-billion-parameter model in exactly this uniform format.',
        wannVerwendet:
          "When downloading a model from platforms like Hugging Face, to check whether a suitable GGUF file is available for your own local software.",
      },
      es: {
        begriff: "Formato de modelo (GGUF)",
        kurzerklaerung:
          "GGUF es un formato de archivo en el que se empaquetan los modelos de lenguaje locales para que puedan descargarse fácilmente y ejecutarse en hardware de consumo normal.",
        erklaerung:
          "GGUF es comparable a una caja de mudanza bien etiquetada: todo lo que el modelo necesita para funcionar está empaquetado de forma ordenada en un único archivo, de modo que programas como Ollama o LM Studio pueden abrirlo y usarlo de inmediato, sin tener que reunir el contenido de forma laboriosa. Los archivos GGUF suelen estar ya cuantizados, es decir, reducidos de tamaño, y esto normalmente se refleja en el propio nombre del archivo.",
        beispiel:
          "Un archivo llamado «llama-3-8b-instruct.Q4_K_M.gguf» contiene un modelo de 8 mil millones de parámetros ya cuantizado, exactamente en este formato uniforme.",
        wannVerwendet:
          "Al descargar un modelo desde plataformas como Hugging Face, para comprobar si existe un archivo GGUF adecuado para el propio software local.",
      },
    },
  },
];
