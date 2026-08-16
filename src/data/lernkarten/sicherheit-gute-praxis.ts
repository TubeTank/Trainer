import type { Lernkarte } from "../types";

const KATEGORIE_ID = "kat-sicherheit-gute-praxis";

export const sicherheitGutePraxisLernkarten: Lernkarte[] = [
  {
    id: "lk-least-privilege",
    kategorieId: KATEGORIE_ID,
    begriff: "Prinzip der geringsten Rechte (Least Privilege)",
    kurzerklaerung:
      "Jede Person und jedes System bekommt nur genau die Rechte, die für die jeweilige Aufgabe wirklich nötig sind – nicht mehr.",
    erklaerung:
      "Man kann sich das wie einen Hotel-Zimmerschlüssel vorstellen: Er öffnet nur das eigene Zimmer und vielleicht noch den Pool, aber nicht die Zimmer aller anderen Gäste oder das Büro der Geschäftsführung. Wenn jede Person oder Anwendung nur Zugriff auf das hat, was sie tatsächlich braucht, richtet ein gestohlener Schlüssel im schlimmsten Fall nur begrenzten Schaden an.",
    beispiel:
      "Ein Praktikant, der nur Support-Tickets bearbeitet, erhält keinen Zugriff auf die Produktionsdatenbank oder die Serverkonfiguration, sondern nur auf das Ticketsystem.",
    wannVerwendet:
      "Beim Anlegen neuer Benutzerkonten, Rollen oder Zugriffsrechte für Mitarbeitende, Dienste und Anwendungen.",
    icon: "🔑",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-angriffsflaeche", "lk-audit-log"],
    uebersetzungen: {
      en: {
        begriff: "Principle of Least Privilege",
        kurzerklaerung:
          "Every person and every system is given only the exact rights truly needed for their task — nothing more.",
        erklaerung:
          "Think of it like a hotel room key: it opens only your own room, and maybe the pool, but not every other guest's room or the manager's office. When each person or application only has access to what it actually needs, a stolen key can only cause limited damage in the worst case.",
        beispiel:
          "An intern who only handles support tickets gets no access to the production database or server configuration — just to the ticketing system.",
        wannVerwendet:
          "When creating new user accounts, roles, or access rights for employees, services, and applications.",
      },
      es: {
        begriff: "Principio de mínimo privilegio",
        kurzerklaerung:
          "Cada persona y cada sistema recibe únicamente los permisos que realmente necesita para su tarea, ni uno más.",
        erklaerung:
          "Es como la llave de una habitación de hotel: solo abre tu propia habitación, y quizá la piscina, pero no las habitaciones de los demás huéspedes ni la oficina de la dirección. Si cada persona o aplicación solo tiene acceso a lo que realmente necesita, una llave robada solo puede causar daños limitados en el peor de los casos.",
        beispiel:
          "Un becario que solo atiende tickets de soporte no recibe acceso a la base de datos de producción ni a la configuración del servidor, sino únicamente al sistema de tickets.",
        wannVerwendet:
          "Al crear nuevas cuentas de usuario, roles o permisos de acceso para empleados, servicios y aplicaciones.",
      },
    },
  },
  {
    id: "lk-backup",
    kategorieId: KATEGORIE_ID,
    begriff: "Backup",
    kurzerklaerung:
      "Ein Backup ist eine separat gespeicherte Kopie von Daten, mit der man nach einem Verlust oder einer Zerstörung wiederherstellen kann.",
    erklaerung:
      "Ein Backup ist wie eine Zweitschlüssel-Kopie im Auto, für den Fall, dass man sich aussperrt: Man hofft, sie nie zu brauchen, ist aber im Notfall sehr froh darüber. Wichtig ist, dass die Kopie an einem anderen Ort liegt als das Original, damit sie nicht gleichzeitig mit dem Original zerstört wird.",
    beispiel:
      "Eine Firma sichert jede Nacht automatisch ihre gesamte Kundendatenbank auf einen separaten Server in einem anderen Rechenzentrum.",
    wannVerwendet:
      "Regelmäßig und automatisiert, vor allem bevor größere Änderungen wie Systemupdates oder Migrationen durchgeführt werden.",
    icon: "💾",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-patch-management"],
    uebersetzungen: {
      en: {
        begriff: "Backup",
        kurzerklaerung:
          "A backup is a separately stored copy of data that lets you restore it after loss or destruction.",
        erklaerung:
          "A backup is like keeping a spare car key in case you lock yourself out: you hope you'll never need it, but you're very glad to have it in an emergency. It's important that the copy is stored in a different location than the original, so it isn't destroyed along with it.",
        beispiel:
          "A company automatically backs up its entire customer database every night to a separate server in a different data center.",
        wannVerwendet:
          "Regularly and automatically, especially before major changes such as system updates or migrations.",
      },
      es: {
        begriff: "Copia de seguridad",
        kurzerklaerung:
          "Una copia de seguridad es una copia de los datos almacenada por separado que permite restaurarlos tras una pérdida o destrucción.",
        erklaerung:
          "Una copia de seguridad es como llevar una llave de repuesto del coche por si te quedas fuera: esperas no necesitarla nunca, pero te alegras mucho de tenerla en una emergencia. Es importante que la copia se guarde en un lugar distinto al original, para que no se destruya junto con él.",
        beispiel:
          "Una empresa respalda automáticamente cada noche toda su base de datos de clientes en un servidor independiente ubicado en otro centro de datos.",
        wannVerwendet:
          "De forma regular y automatizada, sobre todo antes de realizar cambios importantes como actualizaciones de sistemas o migraciones.",
      },
    },
  },
  {
    id: "lk-zwei-faktor-authentifizierung",
    kategorieId: KATEGORIE_ID,
    begriff: "Zwei-Faktor-Authentifizierung (2FA)",
    kurzerklaerung:
      "Bei 2FA muss man zusätzlich zum Passwort einen zweiten, unabhängigen Nachweis erbringen, um sich anzumelden.",
    erklaerung:
      "Das funktioniert wie ein Bankschließfach, das sowohl einen Schlüssel als auch eine PIN benötigt: Wer nur den Schlüssel hat, kommt trotzdem nicht hinein. Selbst wenn ein Passwort gestohlen wird, bleibt das Konto geschützt, solange der zweite Faktor – etwa ein Code auf dem Smartphone – fehlt.",
    beispiel:
      "Beim Login in den E-Mail-Account gibt eine Nutzerin ihr Passwort ein und muss danach zusätzlich einen sechsstelligen Code aus einer Authenticator-App eingeben.",
    wannVerwendet:
      "Bei jedem Login zu wichtigen Konten, besonders bei E-Mail, Cloud-Diensten, Bankkonten und administrativen Zugängen.",
    icon: "📱",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-passwort-manager"],
    uebersetzungen: {
      en: {
        begriff: "Two-Factor Authentication (2FA)",
        kurzerklaerung:
          "With 2FA, you must provide a second, independent proof of identity in addition to your password to log in.",
        erklaerung:
          "This works like a bank safe deposit box that needs both a key and a PIN: having only the key still won't get you in. Even if a password is stolen, the account stays protected as long as the second factor — such as a code on a smartphone — is missing.",
        beispiel:
          "When logging into her email account, a user enters her password and then also has to enter a six-digit code from an authenticator app.",
        wannVerwendet:
          "For every login to important accounts, especially email, cloud services, bank accounts, and administrative access.",
      },
      es: {
        begriff: "Autenticación de dos factores (2FA)",
        kurzerklaerung:
          "Con la 2FA hay que aportar, además de la contraseña, una segunda prueba de identidad independiente para poder iniciar sesión.",
        erklaerung:
          "Funciona como una caja fuerte bancaria que necesita tanto una llave como un PIN: quien solo tiene la llave sigue sin poder entrar. Aunque roben una contraseña, la cuenta permanece protegida mientras falte el segundo factor, por ejemplo un código en el smartphone.",
        beispiel:
          "Al iniciar sesión en su cuenta de correo, una usuaria introduce su contraseña y después debe introducir además un código de seis dígitos de una aplicación de autenticación.",
        wannVerwendet:
          "En cada inicio de sesión en cuentas importantes, especialmente correo electrónico, servicios en la nube, cuentas bancarias y accesos administrativos.",
      },
    },
  },
  {
    id: "lk-verschluesselung",
    kategorieId: KATEGORIE_ID,
    begriff: "Verschlüsselung",
    kurzerklaerung:
      "Verschlüsselung wandelt Daten so um, dass sie nur mit dem richtigen Schlüssel wieder lesbar gemacht werden können.",
    erklaerung:
      "Man kann sich das wie einen verschlossenen Briefumschlag vorstellen, den nur jemand mit dem passenden Brieföffner-Schlüssel öffnen kann – wer den Umschlag unterwegs abfängt, sieht nur unlesbaren Inhalt. So bleiben Daten auch dann geschützt, wenn sie in falsche Hände geraten, etwa bei einem Diebstahl oder auf dem Transportweg durchs Internet.",
    beispiel:
      "Eine Chat-App verschlüsselt Nachrichten so, dass selbst der Betreiber der App den Inhalt der Unterhaltung nicht mitlesen kann.",
    wannVerwendet:
      "Beim Speichern sensibler Daten und beim Übertragen von Informationen über Netzwerke, etwa beim Online-Banking oder Versand von Dokumenten.",
    icon: "🔒",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-passwort-manager"],
    uebersetzungen: {
      en: {
        begriff: "Encryption",
        kurzerklaerung:
          "Encryption transforms data so it can only be made readable again with the correct key.",
        erklaerung:
          "Think of it like a sealed envelope that only someone with the matching letter opener can open — anyone who intercepts the envelope along the way just sees unreadable content. This keeps data protected even if it falls into the wrong hands, for example through theft or while traveling across the internet.",
        beispiel:
          "A chat app encrypts messages so that not even the app's own operator can read the content of the conversation.",
        wannVerwendet:
          "When storing sensitive data and when transmitting information over networks, for example during online banking or sending documents.",
      },
      es: {
        begriff: "Cifrado",
        kurzerklaerung:
          "El cifrado transforma los datos de modo que solo puedan volver a leerse con la clave correcta.",
        erklaerung:
          "Es como un sobre sellado que solo puede abrir quien tenga el abrecartas adecuado: quien lo intercepta por el camino solo ve un contenido ilegible. Así los datos permanecen protegidos incluso si caen en manos equivocadas, por ejemplo por un robo o durante su transporte por internet.",
        beispiel:
          "Una aplicación de chat cifra los mensajes de forma que ni siquiera el propio operador de la app puede leer el contenido de la conversación.",
        wannVerwendet:
          "Al almacenar datos sensibles y al transmitir información por redes, por ejemplo en la banca en línea o al enviar documentos.",
      },
    },
  },
  {
    id: "lk-patch-management",
    kategorieId: KATEGORIE_ID,
    begriff: "Patch-Management",
    kurzerklaerung:
      "Patch-Management ist der geregelte Prozess, um Sicherheitsupdates für Software zeitnah einzuspielen.",
    erklaerung:
      "Das ist vergleichbar mit dem regelmäßigen Wechsel von Rauchmelder-Batterien: Man merkt im Alltag nichts davon, aber wer es versäumt, ist im Ernstfall ungeschützt. Software-Hersteller schließen mit Patches bekannte Sicherheitslücken, und je länger ein System ungepatcht bleibt, desto leichter kann diese Lücke ausgenutzt werden.",
    beispiel:
      "Eine IT-Abteilung spielt jeden Monat an einem festen 'Patch Day' alle verfügbaren Sicherheitsupdates auf den Firmenrechnern ein.",
    wannVerwendet:
      "Sobald Hersteller Sicherheitsupdates veröffentlichen, idealerweise nach einem festen, regelmäßigen Zeitplan.",
    befehl: "sudo apt update && sudo apt upgrade",
    icon: "🩹",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-angriffsflaeche", "lk-backup"],
    uebersetzungen: {
      en: {
        begriff: "Patch Management",
        kurzerklaerung:
          "Patch management is the structured process of promptly installing security updates for software.",
        erklaerung:
          "This is comparable to regularly changing the batteries in a smoke detector: you notice nothing about it day to day, but whoever neglects it is unprotected when it really matters. Software vendors close known security gaps with patches, and the longer a system stays unpatched, the easier that gap is to exploit.",
        beispiel:
          "An IT department installs all available security updates on company computers every month on a fixed 'patch day'.",
        wannVerwendet:
          "As soon as vendors release security updates, ideally following a fixed, regular schedule.",
      },
      es: {
        begriff: "Gestión de parches",
        kurzerklaerung:
          "La gestión de parches es el proceso organizado para instalar a tiempo las actualizaciones de seguridad del software.",
        erklaerung:
          "Es comparable a cambiar regularmente las pilas de un detector de humo: en el día a día no se nota nada, pero quien lo descuida se queda desprotegido justo cuando más importa. Los fabricantes de software cierran vulnerabilidades conocidas mediante parches, y cuanto más tiempo permanece un sistema sin parchear, más fácil resulta explotar esa vulnerabilidad.",
        beispiel:
          "Un departamento de TI instala cada mes, en un 'día de parches' fijo, todas las actualizaciones de seguridad disponibles en los ordenadores de la empresa.",
        wannVerwendet:
          "En cuanto los fabricantes publican actualizaciones de seguridad, idealmente siguiendo un calendario fijo y regular.",
      },
    },
  },
  {
    id: "lk-angriffsflaeche",
    kategorieId: KATEGORIE_ID,
    begriff: "Angriffsfläche",
    kurzerklaerung:
      "Die Angriffsfläche umfasst alle Punkte eines Systems, über die ein Angreifer potenziell eindringen könnte.",
    erklaerung:
      "Man kann sich das wie ein Haus mit vielen Türen und Fenstern vorstellen: Je mehr davon offen oder unverschlossen sind, desto mehr Möglichkeiten hat ein Einbrecher, hineinzukommen. Jeder zusätzliche offene Netzwerkport, jeder installierte Dienst und jede veraltete Software vergrößert diese Fläche und damit das Risiko.",
    beispiel:
      "Ein Server, auf dem noch ein alter, nicht mehr benötigter FTP-Dienst läuft, bietet Angreifern einen zusätzlichen möglichen Einstiegspunkt.",
    wannVerwendet:
      "Bei der Planung neuer Systeme und regelmäßig beim Überprüfen bestehender Server, um unnötige Dienste zu deaktivieren.",
    icon: "🎯",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-least-privilege", "lk-patch-management"],
    uebersetzungen: {
      en: {
        begriff: "Attack Surface",
        kurzerklaerung:
          "The attack surface covers all the points in a system through which an attacker could potentially break in.",
        erklaerung:
          "Think of it like a house with many doors and windows: the more of them are open or unlocked, the more ways a burglar has to get in. Every additional open network port, every installed service, and every piece of outdated software enlarges this surface — and with it, the risk.",
        beispiel:
          "A server that still runs an old, no-longer-needed FTP service offers attackers an extra possible point of entry.",
        wannVerwendet:
          "When planning new systems, and regularly when reviewing existing servers, in order to disable unnecessary services.",
      },
      es: {
        begriff: "Superficie de ataque",
        kurzerklaerung:
          "La superficie de ataque abarca todos los puntos de un sistema por los que un atacante podría llegar a colarse.",
        erklaerung:
          "Es como una casa con muchas puertas y ventanas: cuantas más estén abiertas o sin cerrar, más posibilidades tiene un ladrón de entrar. Cada puerto de red abierto adicional, cada servicio instalado y cada software desactualizado agranda esta superficie y, con ello, el riesgo.",
        beispiel:
          "Un servidor en el que todavía funciona un viejo servicio FTP que ya no se necesita ofrece a los atacantes un punto de entrada adicional.",
        wannVerwendet:
          "Al planificar nuevos sistemas y, de forma regular, al revisar los servidores existentes para desactivar servicios innecesarios.",
      },
    },
  },
  {
    id: "lk-passwort-manager",
    kategorieId: KATEGORIE_ID,
    begriff: "Passwort-Manager",
    kurzerklaerung:
      "Ein Passwort-Manager speichert alle Zugangsdaten verschlüsselt und generiert für jeden Dienst ein eigenes, starkes Passwort.",
    erklaerung:
      "Er funktioniert wie ein gut gesicherter Schlüsselkasten, in dem für jede Tür ein anderer, komplizierter Schlüssel hängt – man selbst muss sich nur noch den einen Code für den Kasten merken. So kann man für jeden Dienst ein einzigartiges, langes Passwort verwenden, ohne sich Dutzende Kombinationen im Kopf merken zu müssen.",
    beispiel:
      "Statt überall dasselbe Passwort zu verwenden, lässt eine Nutzerin sich für jeden neuen Online-Account vom Passwort-Manager ein zufälliges, 20 Zeichen langes Passwort generieren.",
    wannVerwendet:
      "Beim Anlegen neuer Online-Konten und im täglichen Login-Alltag, um wiederverwendete oder schwache Passwörter zu vermeiden.",
    icon: "🗝️",
    schwierigkeit: "einfach",
    relatedTerms: ["lk-zwei-faktor-authentifizierung", "lk-verschluesselung"],
    uebersetzungen: {
      en: {
        begriff: "Password Manager",
        kurzerklaerung:
          "A password manager stores all login credentials in encrypted form and generates a unique, strong password for every service.",
        erklaerung:
          "It works like a well-secured key cabinet holding a different, complicated key for every door — you only have to remember the one code for the cabinet itself. This lets you use a unique, long password for every service without having to memorize dozens of combinations.",
        beispiel:
          "Instead of using the same password everywhere, a user has the password manager generate a random, 20-character password for every new online account.",
        wannVerwendet:
          "When creating new online accounts and in everyday logins, to avoid reused or weak passwords.",
      },
      es: {
        begriff: "Gestor de contraseñas",
        kurzerklaerung:
          "Un gestor de contraseñas almacena todos los datos de acceso de forma cifrada y genera para cada servicio una contraseña propia y segura.",
        erklaerung:
          "Funciona como un armario de llaves bien protegido en el que cuelga una llave distinta y complicada para cada puerta: solo hay que recordar el código de ese armario. Así se puede usar una contraseña larga y única para cada servicio sin tener que memorizar docenas de combinaciones.",
        beispiel:
          "En lugar de usar la misma contraseña en todas partes, una usuaria deja que el gestor de contraseñas genere para cada cuenta nueva una contraseña aleatoria de 20 caracteres.",
        wannVerwendet:
          "Al crear nuevas cuentas en línea y en el uso diario de inicio de sesión, para evitar contraseñas reutilizadas o débiles.",
      },
    },
  },
  {
    id: "lk-security-by-default",
    kategorieId: KATEGORIE_ID,
    begriff: "Security by Default",
    kurzerklaerung:
      "Security by Default bedeutet, dass ein System bereits in seiner Grundeinstellung möglichst sicher ausgeliefert wird, ohne dass jemand extra etwas konfigurieren muss.",
    erklaerung:
      "Das ist wie ein Neuwagen, der ab Werk mit angezogener Handbremse und verriegelten Türen abgestellt wird, statt offen und startbereit auf dem Hof zu stehen. Nutzer müssten sich sonst aktiv um jede Absicherung kümmern, und viele vergessen das oder wissen nicht, wie – deshalb sollte die sichere Variante von Anfang an voreingestellt sein.",
    beispiel:
      "Ein neuer Router liefert ab Werk ein zufällig generiertes, individuelles WLAN-Passwort statt eines für alle Geräte gleichen Standardpassworts wie 'admin'.",
    wannVerwendet:
      "Beim Entwerfen neuer Software, Geräte oder Systeme, bevor sie an Kundinnen und Kunden ausgeliefert werden.",
    icon: "🛡️",
    schwierigkeit: "mittel",
    relatedTerms: ["lk-angriffsflaeche", "lk-least-privilege"],
    uebersetzungen: {
      en: {
        begriff: "Security by Default",
        kurzerklaerung:
          "Security by Default means a system is delivered as securely as possible right out of the box, without anyone having to configure anything extra.",
        erklaerung:
          "It's like a new car that leaves the factory parked with the handbrake on and the doors locked, instead of standing open and ready to drive off. Otherwise users would have to actively take care of every safeguard themselves, and many forget to or don't know how — so the secure option should be the default from the start.",
        beispiel:
          "A new router ships from the factory with a randomly generated, individual Wi-Fi password instead of the same default password like 'admin' on every device.",
        wannVerwendet:
          "When designing new software, devices, or systems, before they are delivered to customers.",
      },
      es: {
        begriff: "Security by Default",
        kurzerklaerung:
          "Security by Default significa que un sistema se entrega ya lo más seguro posible de fábrica, sin que nadie tenga que configurar nada adicional.",
        erklaerung:
          "Es como un coche nuevo que sale de fábrica con el freno de mano puesto y las puertas cerradas, en lugar de quedar abierto y listo para arrancar en el patio. De lo contrario, los usuarios tendrían que ocuparse ellos mismos de cada medida de protección, y muchos se olvidan o no saben cómo hacerlo; por eso la opción segura debería venir configurada desde el principio.",
        beispiel:
          "Un router nuevo viene de fábrica con una contraseña de Wi-Fi individual generada aleatoriamente, en lugar de una contraseña por defecto igual para todos los dispositivos como 'admin'.",
        wannVerwendet:
          "Al diseñar nuevo software, dispositivos o sistemas, antes de entregarlos a los clientes.",
      },
    },
  },
  {
    id: "lk-audit-log",
    kategorieId: KATEGORIE_ID,
    begriff: "Audit-Log",
    kurzerklaerung:
      "Ein Audit-Log ist ein lückenloses Protokoll darüber, wer wann welche wichtige Aktion in einem System durchgeführt hat.",
    erklaerung:
      "Man kann es sich wie das Gästebuch eines Hochsicherheitsgebäudes vorstellen, in dem jeder Ein- und Austritt mit Name und Uhrzeit vermerkt wird. Kommt es später zu einem Vorfall, lässt sich anhand dieser Aufzeichnungen genau nachvollziehen, wer wann was gemacht hat.",
    beispiel:
      "Nachdem in einem Kundenportal versehentlich Daten gelöscht wurden, kann die IT-Abteilung im Audit-Log nachverfolgen, welcher Account die Löschung wann ausgelöst hat.",
    wannVerwendet:
      "Beim Betrieb von Systemen mit sensiblen Daten, insbesondere zur Fehleranalyse nach Vorfällen und bei Sicherheitsüberprüfungen.",
    icon: "📋",
    schwierigkeit: "schwer",
    relatedTerms: ["lk-least-privilege"],
    uebersetzungen: {
      en: {
        begriff: "Audit Log",
        kurzerklaerung:
          "An audit log is a complete record of who performed which important action in a system, and when.",
        erklaerung:
          "Think of it like the guest book of a high-security building, where every entry and exit is noted with a name and time. If an incident happens later, these records make it possible to trace exactly who did what and when.",
        beispiel:
          "After data is accidentally deleted in a customer portal, the IT department can use the audit log to trace which account triggered the deletion and when.",
        wannVerwendet:
          "When operating systems with sensitive data, especially for troubleshooting after incidents and during security reviews.",
      },
      es: {
        begriff: "Registro de auditoría",
        kurzerklaerung:
          "Un registro de auditoría es un historial completo de quién realizó qué acción importante en un sistema y cuándo.",
        erklaerung:
          "Se puede imaginar como el libro de visitas de un edificio de alta seguridad, donde cada entrada y salida se anota con nombre y hora. Si más tarde ocurre un incidente, estos registros permiten reconstruir exactamente quién hizo qué y cuándo.",
        beispiel:
          "Después de que se borraran datos por accidente en un portal de clientes, el departamento de TI puede consultar el registro de auditoría para saber qué cuenta provocó el borrado y en qué momento.",
        wannVerwendet:
          "En la operación de sistemas con datos sensibles, especialmente para el análisis de errores tras incidentes y en las revisiones de seguridad.",
      },
    },
  },
];
