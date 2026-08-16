import "./styles/base.css";
import "./styles/app.css";
import { kategorien, lernkarten, validiereLerndaten } from "./data";
import { setStatus } from "./fortschritt";
import { attachKarteInteraktion, setFlipped } from "./kartenInteraktion";
import { getCurrentRoute, navigate } from "./router";
import { renderKarteView, renderKategorienView, renderLernkartenListeView } from "./views";

const validierung = validiereLerndaten(kategorien, lernkarten);
if (!validierung.gueltig) {
  console.error("Lerndaten sind ungültig:", validierung.fehler);
} else {
  console.info(
    `Lerndaten geladen: ${kategorien.length} Kategorie(n), ${lernkarten.length} Lernkarte(n).`,
  );
}

const app = document.querySelector<HTMLDivElement>("#app");

let flipped = false;
let aktuelleKarteKey = "";

function render(): void {
  if (!app) return;

  const route = getCurrentRoute();

  if (route.view === "kategorien") {
    app.innerHTML = renderKategorienView(kategorien, lernkarten);
    return;
  }

  const kategorie = kategorien.find((eintrag) => eintrag.id === route.kategorieId);
  if (!kategorie) {
    navigate({ view: "kategorien" });
    return;
  }

  const karten = lernkarten.filter((karte) => karte.kategorieId === kategorie.id);

  if (route.view === "lernkarten") {
    app.innerHTML = renderLernkartenListeView(kategorie, karten);
    return;
  }

  const index = ((route.index % karten.length) + karten.length) % karten.length;
  const key = `${kategorie.id}:${index}`;
  if (key !== aktuelleKarteKey) {
    flipped = false;
    aktuelleKarteKey = key;
  }

  app.innerHTML = renderKarteView(kategorie, karten, index, flipped);
  attachKarteInteraktion(app, {
    onFlip: () => {
      flipped = !flipped;
      setFlipped(app, flipped);
    },
    onAdvance: (urteil) => {
      setStatus(karten[index].id, urteil === "kenne" ? "gelernt" : "wiederholen");
      navigate({ view: "karte", kategorieId: kategorie.id, index: index + 1 });
    },
    onZurueck: () => {
      navigate({ view: "karte", kategorieId: kategorie.id, index: index - 1 });
    },
  });
}

app?.addEventListener("click", (event) => {
  const target = (event.target as HTMLElement).closest<HTMLElement>("[data-action]");
  if (!target) return;

  const { action, kategorieId, index } = target.dataset;

  switch (action) {
    case "open-kategorie":
      if (kategorieId) navigate({ view: "lernkarten", kategorieId });
      break;
    case "open-karte":
      if (kategorieId && index !== undefined) {
        navigate({ view: "karte", kategorieId, index: Number(index) });
      }
      break;
    case "back-to-kategorien":
      navigate({ view: "kategorien" });
      break;
    case "back-to-lernkarten":
      if (kategorieId) navigate({ view: "lernkarten", kategorieId });
      break;
  }
});

window.addEventListener("keydown", (event) => {
  const route = getCurrentRoute();
  if (route.view !== "karte") return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    navigate({ view: "karte", kategorieId: route.kategorieId, index: route.index + 1 });
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    navigate({ view: "karte", kategorieId: route.kategorieId, index: route.index - 1 });
  } else if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    if (!app) return;
    flipped = !flipped;
    setFlipped(app, flipped);
  }
});

window.addEventListener("hashchange", render);
render();
