import "./styles/base.css";
import "./styles/app.css";
import { kategorien, lernkarten, validiereLerndaten } from "./data";
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
  app.innerHTML = renderKarteView(kategorie, karten, index);
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
    case "karte-prev":
      if (kategorieId && index !== undefined) {
        navigate({ view: "karte", kategorieId, index: Number(index) - 1 });
      }
      break;
    case "karte-next":
      if (kategorieId && index !== undefined) {
        navigate({ view: "karte", kategorieId, index: Number(index) + 1 });
      }
      break;
  }
});

window.addEventListener("hashchange", render);
render();
