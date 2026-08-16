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
  },
];
