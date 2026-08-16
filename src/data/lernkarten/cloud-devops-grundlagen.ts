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
  },
];
