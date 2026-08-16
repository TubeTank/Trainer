import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-cloud-devops-grundlagen";

export const cloudDevopsGrundlagenLernkarten: Lernkarte[] = [
  {
    id: "lk-cloud-computing",
    kategorieId: KATEGORIE_ID,
    begriff: "Cloud Computing",
    kurzerklaerung:
      "Cloud Computing bedeutet, Rechenleistung, Speicher und Software über das Internet zu mieten, statt eigene Server zu betreiben.",
    erklaerung:
      "Cloud Computing ist wie das Mieten einer möblierten Wohnung statt des Baus eines eigenen Hauses: Man zahlt nur für das, was man gerade braucht, und muss sich nicht um Wartung, Strom oder Reparaturen kümmern. Ein Anbieter stellt die Rechenzentren bereit, man selbst greift einfach über das Internet darauf zu.",
    beispiel:
      "Ein Start-up mietet bei einem Cloud-Anbieter einen virtuellen Server, auf dem die eigene Web-App läuft, statt selbst Hardware zu kaufen und im Büro aufzustellen.",
    wannVerwendet:
      "Immer dann, wenn eine Anwendung online betrieben, gehostet oder mit wechselnder Auslastung skaliert werden soll, ohne eigene Server zu unterhalten.",
    icon: "☁️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-skalierung", "lk-umgebungskonfiguration"],
    uebersetzungen: {
      en: {
        begriff: "Cloud Computing",
        kurzerklaerung:
          "Cloud computing means renting computing power, storage, and software over the internet instead of running your own servers.",
        erklaerung:
          "Cloud computing is like renting a furnished apartment instead of building your own house: you only pay for what you actually use, and you don't have to worry about maintenance, electricity, or repairs. A provider supplies the data centers, and you simply access them over the internet.",
        beispiel:
          "A start-up rents a virtual server from a cloud provider to run its own web app, instead of buying hardware and setting it up in the office.",
        wannVerwendet:
          "Whenever an application needs to run online, be hosted, or scale with changing demand without maintaining your own servers.",
      },
      es: {
        begriff: "Cloud Computing",
        kurzerklaerung:
          "Cloud Computing significa alquilar capacidad de cómputo, almacenamiento y software a través de internet en lugar de operar servidores propios.",
        erklaerung:
          "El Cloud Computing es como alquilar un piso amueblado en lugar de construir tu propia casa: solo pagas por lo que realmente usas y no tienes que preocuparte por el mantenimiento, la electricidad ni las reparaciones. Un proveedor pone a disposición los centros de datos, y tú simplemente accedes a ellos a través de internet.",
        beispiel:
          "Una startup alquila un servidor virtual con un proveedor de nube para ejecutar su propia aplicación web, en lugar de comprar hardware e instalarlo en la oficina.",
        wannVerwendet:
          "Siempre que una aplicación deba funcionar online, alojarse o escalar según una carga variable, sin mantener servidores propios.",
      },
    },
  },
  {
    id: "lk-container",
    kategorieId: KATEGORIE_ID,
    begriff: "Container",
    kurzerklaerung:
      "Ein Container verpackt eine Anwendung zusammen mit allem, was sie zum Laufen braucht, in eine transportable, abgeschlossene Einheit.",
    erklaerung:
      "Ein Container ist wie eine fertig gepackte Transportbox für einen Umzug: Alles, was für die Anwendung nötig ist – Programm, Bibliotheken, Einstellungen – steckt zusammen in einer Box und funktioniert überall gleich, egal auf welchem Rechner die Box abgestellt wird. Das verhindert das bekannte Problem „Bei mir läuft es doch!“.",
    beispiel:
      "Ein Entwickler packt seine Web-Anwendung in einen Container, damit sie auf seinem Laptop, auf dem Testserver und in der Cloud garantiert identisch läuft.",
    wannVerwendet:
      "Beim Ausliefern und Betreiben von Anwendungen, wenn sichergestellt werden soll, dass sie auf jeder Umgebung gleich funktionieren.",
    icon: "📦",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-docker", "lk-skalierung"],
    uebersetzungen: {
      en: {
        begriff: "Container",
        kurzerklaerung:
          "A container packages an application together with everything it needs to run into a single, self-contained, portable unit.",
        erklaerung:
          "A container is like a fully packed moving box: everything the application needs — the program, libraries, and settings — is bundled together in one box, and it works the same everywhere, no matter which machine the box ends up on. This gets rid of the classic problem of 'but it works on my machine!'.",
        beispiel:
          "A developer packages his web application into a container so it runs identically on his laptop, on the test server, and in the cloud.",
        wannVerwendet:
          "When deploying and running applications, whenever you need to guarantee they behave the same way in every environment.",
      },
      es: {
        begriff: "Container",
        kurzerklaerung:
          "Un contenedor empaqueta una aplicación junto con todo lo que necesita para funcionar en una unidad autónoma y transportable.",
        erklaerung:
          "Un contenedor es como una caja de mudanza ya preparada: todo lo que la aplicación necesita —el programa, las bibliotecas, la configuración— va junto dentro de una caja y funciona igual en cualquier lugar, sin importar en qué ordenador se coloque. Así se evita el típico problema de '¡pero en mi máquina funciona!'.",
        beispiel:
          "Un desarrollador empaqueta su aplicación web en un contenedor para que funcione de forma idéntica en su portátil, en el servidor de pruebas y en la nube.",
        wannVerwendet:
          "Al distribuir y operar aplicaciones, cuando se quiere garantizar que funcionen igual en cualquier entorno.",
      },
    },
  },
  {
    id: "lk-docker",
    kategorieId: KATEGORIE_ID,
    begriff: "Docker",
    kurzerklaerung:
      "Docker ist das bekannteste Werkzeug, um Container zu erstellen, zu verteilen und auszuführen.",
    erklaerung:
      "Docker ist wie die Packstation und der Lieferdienst für Container gleichzeitig: Es liefert die Baupläne, mit denen man eine Anwendung in eine Container-Box verpackt, und die Werkzeuge, um diese Box auf einem beliebigen Rechner wieder zu öffnen und laufen zu lassen. Es ist damit der de-facto Standard rund um das Container-Konzept.",
    beispiel:
      "Ein Entwickler schreibt eine Datei namens „Dockerfile“, in der genau steht, welche Software installiert werden muss, und baut daraus mit einem einzigen Befehl ein lauffähiges Docker-Image.",
    wannVerwendet:
      "Wenn Anwendungen containerisiert, lokal getestet oder in einer Produktionsumgebung bereitgestellt werden sollen.",
    befehl: "docker run -p 3000:3000 meine-app",
    icon: "🐳",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-container", "lk-ci-cd-pipeline"],
    uebersetzungen: {
      en: {
        begriff: "Docker",
        kurzerklaerung:
          "Docker is the best-known tool for creating, distributing, and running containers.",
        erklaerung:
          "Docker is like the packing station and the delivery service for containers, all in one: it provides the blueprints for packing an application into a container box, and the tools to open that box and run it on any machine. That's what made it the de facto standard around the container concept.",
        beispiel:
          "A developer writes a file called a 'Dockerfile' that specifies exactly which software needs to be installed, and builds a ready-to-run Docker image from it with a single command.",
        wannVerwendet:
          "When applications need to be containerized, tested locally, or deployed to a production environment.",
      },
      es: {
        begriff: "Docker",
        kurzerklaerung:
          "Docker es la herramienta más conocida para crear, distribuir y ejecutar contenedores.",
        erklaerung:
          "Docker es como la estación de embalaje y el servicio de entrega de contenedores, todo en uno: aporta los planos para empaquetar una aplicación dentro de una caja contenedor, y las herramientas para abrir esa caja y ponerla en marcha en cualquier máquina. Por eso se ha convertido en el estándar de facto en torno al concepto de contenedores.",
        beispiel:
          "Un desarrollador escribe un archivo llamado 'Dockerfile' que especifica exactamente qué software hay que instalar, y con un solo comando construye a partir de él una imagen Docker lista para ejecutarse.",
        wannVerwendet:
          "Cuando se necesita containerizar aplicaciones, probarlas localmente o desplegarlas en un entorno de producción.",
      },
    },
  },
  {
    id: "lk-ci-cd-pipeline",
    kategorieId: KATEGORIE_ID,
    begriff: "CI/CD-Pipeline",
    kurzerklaerung:
      "Eine CI/CD-Pipeline automatisiert das Testen, Bauen und Ausliefern von Software bei jeder Code-Änderung.",
    erklaerung:
      "Eine CI/CD-Pipeline ist wie ein automatisches Fließband in einer Fabrik: Sobald ein neues Teil – also eine Code-Änderung – eingelegt wird, durchläuft es automatisch alle Prüf- und Verarbeitungsschritte, bis am Ende ein fertiges, ausgeliefertes Produkt steht, ohne dass jemand von Hand eingreifen muss.",
    beispiel:
      "Sobald eine Entwicklerin ihren Code hochlädt, startet die Pipeline automatisch alle Tests, baut die Anwendung und veröffentlicht sie bei Erfolg direkt auf dem Testserver.",
    wannVerwendet:
      "Bei jeder Code-Änderung in einem Projekt, das regelmäßig getestet und ausgeliefert werden soll, oft mehrmals täglich.",
    icon: "🔁",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-docker", "lk-monitoring-logging"],
    uebersetzungen: {
      en: {
        begriff: "CI/CD Pipeline",
        kurzerklaerung:
          "A CI/CD pipeline automates testing, building, and delivering software every time the code changes.",
        erklaerung:
          "A CI/CD pipeline is like an automatic assembly line in a factory: as soon as a new part — a code change — is fed in, it automatically runs through every check and processing step until a finished, delivered product comes out the other end, without anyone having to step in by hand.",
        beispiel:
          "As soon as a developer pushes her code, the pipeline automatically runs all the tests, builds the application, and — if everything passes — publishes it straight to the test server.",
        wannVerwendet:
          "With every code change in a project that needs to be tested and delivered regularly, often several times a day.",
      },
      es: {
        begriff: "Pipeline de CI/CD",
        kurzerklaerung:
          "Un pipeline de CI/CD automatiza las pruebas, la compilación y la entrega del software cada vez que cambia el código.",
        erklaerung:
          "Un pipeline de CI/CD es como una cadena de montaje automática en una fábrica: en cuanto se introduce una pieza nueva —un cambio de código—, esta pasa automáticamente por todos los pasos de comprobación y procesamiento hasta obtener, al final, un producto terminado y entregado, sin que nadie tenga que intervenir a mano.",
        beispiel:
          "En cuanto una desarrolladora sube su código, el pipeline ejecuta automáticamente todas las pruebas, compila la aplicación y, si todo sale bien, la publica directamente en el servidor de pruebas.",
        wannVerwendet:
          "Con cada cambio de código en un proyecto que debe probarse y entregarse con regularidad, a menudo varias veces al día.",
      },
    },
  },
  {
    id: "lk-secrets-management",
    kategorieId: KATEGORIE_ID,
    begriff: "Secrets-Management",
    kurzerklaerung:
      "Secrets-Management ist der sichere Umgang mit vertraulichen Zugangsdaten wie Passwörtern oder API-Schlüsseln in Software-Projekten.",
    erklaerung:
      "Secrets-Management funktioniert wie ein Bankschließfach für Haustürschlüssel: Statt den Schlüssel offen unter der Fußmatte liegen zu lassen – also direkt im Code –, wird er sicher verwahrt und nur bei Bedarf kontrolliert herausgegeben. So bleiben Passwörter und Schlüssel auch dann geschützt, wenn der Code selbst öffentlich einsehbar ist.",
    beispiel:
      "Statt den Zugangsschlüssel zur Datenbank direkt in den Quellcode zu schreiben, hinterlegt ein Team ihn in einem speziellen Secrets-Speicher, aus dem ihn die Anwendung erst zur Laufzeit sicher abruft.",
    wannVerwendet:
      "Immer, wenn eine Anwendung mit Passwörtern, API-Schlüsseln oder Zertifikaten arbeitet, besonders vor dem Hochladen von Code in ein gemeinsames Repository.",
    icon: "🔐",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-umgebungskonfiguration", "lk-infrastructure-as-code"],
    uebersetzungen: {
      en: {
        begriff: "Secrets Management",
        kurzerklaerung:
          "Secrets management is the secure handling of confidential access data such as passwords or API keys in software projects.",
        erklaerung:
          "Secrets management works like a bank safe-deposit box for your house key: instead of leaving the key out in the open under the doormat — i.e. directly in the code — it's kept safely locked away and only handed out under controlled conditions when it's actually needed. That way, passwords and keys stay protected even if the code itself is publicly visible.",
        beispiel:
          "Instead of writing the database access key directly into the source code, a team stores it in a dedicated secrets vault, from which the application securely retrieves it only at runtime.",
        wannVerwendet:
          "Whenever an application works with passwords, API keys, or certificates — especially before pushing code to a shared repository.",
      },
      es: {
        begriff: "Secrets Management",
        kurzerklaerung:
          "La gestión de secretos es el manejo seguro de datos de acceso confidenciales, como contraseñas o claves de API, en proyectos de software.",
        erklaerung:
          "La gestión de secretos funciona como una caja fuerte de un banco para la llave de casa: en lugar de dejar la llave a la vista debajo del felpudo —es decir, directamente en el código—, se guarda de forma segura y solo se entrega de manera controlada cuando realmente se necesita. Así, las contraseñas y las claves permanecen protegidas incluso si el propio código es de acceso público.",
        beispiel:
          "En lugar de escribir la clave de acceso a la base de datos directamente en el código fuente, un equipo la guarda en un almacén de secretos especial, del que la aplicación la recupera de forma segura solo en tiempo de ejecución.",
        wannVerwendet:
          "Siempre que una aplicación trabaje con contraseñas, claves de API o certificados, especialmente antes de subir el código a un repositorio compartido.",
      },
    },
  },
  {
    id: "lk-infrastructure-as-code",
    kategorieId: KATEGORIE_ID,
    begriff: "Infrastructure as Code",
    kurzerklaerung:
      "Infrastructure as Code bedeutet, Server, Netzwerke und andere technische Infrastruktur in Textdateien zu beschreiben, statt sie manuell einzurichten.",
    erklaerung:
      "Infrastructure as Code ist wie ein detaillierter Bauplan statt eines mündlich erklärten Umbaus: Anstatt Server und Einstellungen jedes Mal von Hand zusammenzuklicken, schreibt man genau auf, wie die Infrastruktur aussehen soll, und ein Werkzeug baut sie danach automatisch und immer gleich auf.",
    beispiel:
      "Ein Team beschreibt in einer Konfigurationsdatei, dass drei virtuelle Server mit bestimmten Eigenschaften benötigt werden, und lässt diese Umgebung per Knopfdruck automatisch erstellen.",
    wannVerwendet:
      "Beim Aufbau oder der Änderung von Cloud-Infrastruktur, besonders wenn Umgebungen wiederholbar und nachvollziehbar eingerichtet werden sollen.",
    icon: "🏗️",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-cloud-computing", "lk-umgebungskonfiguration"],
    uebersetzungen: {
      en: {
        begriff: "Infrastructure as Code",
        kurzerklaerung:
          "Infrastructure as Code means describing servers, networks, and other technical infrastructure in text files instead of setting them up manually.",
        erklaerung:
          "Infrastructure as Code is like a detailed blueprint instead of a verbally explained renovation: instead of clicking servers and settings together by hand every single time, you write down exactly what the infrastructure should look like, and a tool builds it automatically — the same way every time.",
        beispiel:
          "A team describes in a configuration file that three virtual servers with specific properties are needed, and has this environment created automatically at the push of a button.",
        wannVerwendet:
          "When building or changing cloud infrastructure, especially when environments need to be set up in a repeatable and traceable way.",
      },
      es: {
        begriff: "Infraestructura como código",
        kurzerklaerung:
          "Infraestructura como código significa describir servidores, redes y otra infraestructura técnica en archivos de texto en lugar de configurarlos manualmente.",
        erklaerung:
          "La infraestructura como código es como un plano detallado en lugar de una reforma explicada de palabra: en vez de configurar servidores y ajustes a mano cada vez, se anota exactamente cómo debe ser la infraestructura, y una herramienta la construye automáticamente, siempre de la misma manera.",
        beispiel:
          "Un equipo describe en un archivo de configuración que se necesitan tres servidores virtuales con determinadas características, y hace que ese entorno se cree automáticamente con solo pulsar un botón.",
        wannVerwendet:
          "Al crear o modificar infraestructura en la nube, especialmente cuando los entornos deben configurarse de forma repetible y trazable.",
      },
    },
  },
  {
    id: "lk-skalierung",
    kategorieId: KATEGORIE_ID,
    begriff: "Skalierung",
    kurzerklaerung:
      "Skalierung bedeutet, die Rechenkapazität einer Anwendung an die aktuelle Nutzung anzupassen, indem Ressourcen hinzugefügt oder entfernt werden.",
    erklaerung:
      "Skalierung ist wie das Öffnen zusätzlicher Kassen im Supermarkt, wenn plötzlich viele Kunden gleichzeitig kommen: Bei mehr Andrang werden mehr Ressourcen bereitgestellt, bei ruhigeren Zeiten wieder abgebaut, damit weder lange Wartezeiten noch unnötige Kosten entstehen.",
    beispiel:
      "Eine Online-Shop-Anwendung startet während eines Sonderangebots automatisch zusätzliche Server, weil deutlich mehr Besucher als sonst gleichzeitig einkaufen.",
    wannVerwendet:
      "Wenn die Auslastung einer Anwendung stark schwankt, etwa bei saisonalen Spitzen oder wachsender Nutzerzahl, und die Kapazität automatisch mitwachsen soll.",
    icon: "📈",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-cloud-computing", "lk-container"],
    uebersetzungen: {
      en: {
        begriff: "Scaling",
        kurzerklaerung:
          "Scaling means adjusting an application's computing capacity to match current demand by adding or removing resources.",
        erklaerung:
          "Scaling is like opening extra checkout lanes at the supermarket when a lot of customers suddenly show up at once: more resources are added when things get busy, and scaled back down when it's quiet, so you avoid both long wait times and unnecessary costs.",
        beispiel:
          "An online shop automatically starts extra servers during a special sale because far more visitors than usual are shopping at the same time.",
        wannVerwendet:
          "When an application's load fluctuates a lot — for example during seasonal peaks or growing user numbers — and capacity needs to grow and shrink automatically.",
      },
      es: {
        begriff: "Escalado",
        kurzerklaerung:
          "El escalado consiste en ajustar la capacidad de cómputo de una aplicación a la demanda actual, añadiendo o retirando recursos.",
        erklaerung:
          "El escalado es como abrir cajas adicionales en el supermercado cuando de repente llegan muchos clientes a la vez: cuando hay más afluencia se añaden más recursos, y cuando baja la demanda se retiran de nuevo, para evitar tanto tiempos de espera largos como costes innecesarios.",
        beispiel:
          "Una tienda online pone en marcha automáticamente servidores adicionales durante una oferta especial porque hay muchos más visitantes comprando al mismo tiempo de lo habitual.",
        wannVerwendet:
          "Cuando la carga de una aplicación varía mucho, por ejemplo en picos estacionales o por el crecimiento de usuarios, y la capacidad debe adaptarse automáticamente.",
      },
    },
  },
  {
    id: "lk-monitoring-logging",
    kategorieId: KATEGORIE_ID,
    begriff: "Monitoring & Logging",
    kurzerklaerung:
      "Monitoring und Logging beobachten laufende Systeme und zeichnen deren Ereignisse auf, um Probleme frühzeitig zu erkennen und nachzuvollziehen.",
    erklaerung:
      "Monitoring und Logging sind wie das Armaturenbrett und das Fahrtenbuch eines Autos: Das Armaturenbrett zeigt in Echtzeit an, ob alles normal läuft oder eine Warnlampe leuchtet, während das Fahrtenbuch jede Fahrt protokolliert, damit man im Nachhinein genau nachvollziehen kann, was wann passiert ist.",
    beispiel:
      "Ein Monitoring-System schlägt Alarm, weil die Antwortzeit einer Webseite plötzlich stark ansteigt, und die zugehörigen Logs zeigen, dass eine Datenbankabfrage ungewöhnlich lange dauert.",
    wannVerwendet:
      "Im laufenden Betrieb jeder produktiven Anwendung, um Ausfälle frühzeitig zu bemerken und die Ursache von Fehlern nachträglich zu untersuchen.",
    icon: "📊",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-ci-cd-pipeline", "lk-skalierung"],
    uebersetzungen: {
      en: {
        begriff: "Monitoring & Logging",
        kurzerklaerung:
          "Monitoring and logging observe running systems and record their events, to catch problems early and trace them afterward.",
        erklaerung:
          "Monitoring and logging are like a car's dashboard and logbook: the dashboard shows in real time whether everything is running normally or a warning light is on, while the logbook records every trip so you can later reconstruct exactly what happened and when.",
        beispiel:
          "A monitoring system raises an alert because a website's response time suddenly spikes, and the corresponding logs show that a database query is taking unusually long.",
        wannVerwendet:
          "During the ongoing operation of any production application, to catch outages early and investigate the root cause of errors after the fact.",
      },
      es: {
        begriff: "Monitorización y registro",
        kurzerklaerung:
          "La monitorización y el registro observan los sistemas en funcionamiento y documentan sus eventos, para detectar problemas a tiempo y poder reconstruirlos después.",
        erklaerung:
          "La monitorización y el registro son como el salpicadero y el diario de a bordo de un coche: el salpicadero muestra en tiempo real si todo funciona con normalidad o si se enciende una luz de aviso, mientras que el diario de a bordo registra cada trayecto para poder reconstruir después exactamente qué pasó y cuándo.",
        beispiel:
          "Un sistema de monitorización lanza una alerta porque el tiempo de respuesta de una página web aumenta bruscamente, y los registros correspondientes muestran que una consulta a la base de datos está tardando de forma inusual.",
        wannVerwendet:
          "Durante el funcionamiento continuo de cualquier aplicación en producción, para detectar interrupciones a tiempo e investigar después la causa de los errores.",
      },
    },
  },
  {
    id: "lk-umgebungskonfiguration",
    kategorieId: KATEGORIE_ID,
    begriff: "Umgebungskonfiguration (Environments)",
    kurzerklaerung:
      "Umgebungskonfiguration bedeutet, dieselbe Anwendung mit unterschiedlichen Einstellungen für Entwicklung, Test und Produktion zu betreiben.",
    erklaerung:
      "Umgebungskonfiguration ist wie das Proben eines Theaterstücks: Erst wird auf einer kleinen Bühne mit einfachen Kulissen geübt, dann auf einer Testbühne mit realistischerem Aufbau, und erst danach folgt die echte Aufführung vor Publikum. Jede dieser Umgebungen nutzt dieselbe Anwendung, aber mit passenden Einstellungen und Daten.",
    beispiel:
      "Ein Team testet eine neue Funktion zunächst in der Entwicklungsumgebung mit Testdaten, prüft sie danach in einer Staging-Umgebung und schaltet sie erst zum Schluss in der Produktionsumgebung für echte Nutzer frei.",
    wannVerwendet:
      "Bei jedem Software-Projekt, das kontrolliert und risikoarm ausgeliefert werden soll, bevor Änderungen echte Nutzer erreichen.",
    icon: "🗂️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-secrets-management", "lk-infrastructure-as-code"],
    uebersetzungen: {
      en: {
        begriff: "Environment Configuration (Environments)",
        kurzerklaerung:
          "Environment configuration means running the same application with different settings for development, testing, and production.",
        erklaerung:
          "Environment configuration is like rehearsing a play: first you practice on a small stage with simple props, then on a test stage with a more realistic setup, and only afterward comes the real performance in front of an audience. Each of these environments uses the same application, but with matching settings and data.",
        beispiel:
          "A team first tests a new feature in the development environment with test data, then checks it in a staging environment, and only at the end enables it in the production environment for real users.",
        wannVerwendet:
          "In every software project that needs to be delivered in a controlled, low-risk way before changes reach real users.",
      },
      es: {
        begriff: "Configuración de entornos (Environments)",
        kurzerklaerung:
          "La configuración de entornos consiste en ejecutar la misma aplicación con distintos ajustes para desarrollo, pruebas y producción.",
        erklaerung:
          "La configuración de entornos es como ensayar una obra de teatro: primero se practica en un escenario pequeño con una decoración sencilla, después en un escenario de pruebas con un montaje más realista, y solo al final llega la representación real ante el público. Cada uno de estos entornos usa la misma aplicación, pero con los ajustes y datos adecuados.",
        beispiel:
          "Un equipo prueba primero una nueva función en el entorno de desarrollo con datos de prueba, luego la revisa en un entorno de staging, y solo al final la activa en el entorno de producción para los usuarios reales.",
        wannVerwendet:
          "En cualquier proyecto de software que deba entregarse de forma controlada y con bajo riesgo antes de que los cambios lleguen a los usuarios reales.",
      },
    },
  },
];
