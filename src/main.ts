import "./styles/base.css";
import { kategorien, lernkarten, validiereLerndaten } from "./data";

const validierung = validiereLerndaten(kategorien, lernkarten);
if (!validierung.gueltig) {
  console.error("Lerndaten sind ungültig:", validierung.fehler);
} else {
  console.info(
    `Lerndaten geladen: ${kategorien.length} Kategorie(n), ${lernkarten.length} Lernkarte(n).`,
  );
}

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <h1>Trainer</h1>
    <p>Willkommen! Diese Lern-App befindet sich im Aufbau.</p>
  `;
}
