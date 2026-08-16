import "./styles/base.css";
import "./styles/app.css";
import { kategorien, lernkarten, validiereLerndaten } from "./data";
import type { Sprache } from "./data/types";
import { setStatus } from "./fortschritt";
import { attachKarteInteraktion, setFlipped } from "./kartenInteraktion";
import { erzeugeQuizFragen, type QuizFrage } from "./quiz";
import { getCurrentRoute, navigate } from "./router";
import { getSprache, setSprache } from "./sprache";
import {
  renderKarteView,
  renderKategorienView,
  renderLernkartenListeView,
  renderQuizErgebnisView,
  renderQuizView,
} from "./views";

const validierung = validiereLerndaten(kategorien, lernkarten);
if (!validierung.gueltig) {
  console.error("Lerndaten sind ungültig:", validierung.fehler);
} else {
  console.info(
    `Lerndaten geladen: ${kategorien.length} Kategorie(n), ${lernkarten.length} Lernkarte(n).`,
  );
}

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .catch((error: unknown) => console.error("Service-Worker-Registrierung fehlgeschlagen:", error));
  });
}

const app = document.querySelector<HTMLDivElement>("#app");

let flipped = false;
let aktuelleKarteKey = "";

interface QuizState {
  kategorieId: string;
  sprache: Sprache;
  fragen: QuizFrage[];
  index: number;
  score: number;
  ausgewaehlt: number | null;
}

let quizState: QuizState | null = null;

function render(): void {
  if (!app) return;

  const route = getCurrentRoute();
  const sprache = getSprache();

  if (route.view === "kategorien") {
    app.innerHTML = renderKategorienView(kategorien, lernkarten, sprache);
    return;
  }

  const kategorie = kategorien.find((eintrag) => eintrag.id === route.kategorieId);
  if (!kategorie) {
    navigate({ view: "kategorien" });
    return;
  }

  const karten = lernkarten.filter((karte) => karte.kategorieId === kategorie.id);

  if (route.view === "lernkarten") {
    app.innerHTML = renderLernkartenListeView(kategorie, karten, sprache);
    return;
  }

  if (route.view === "quiz") {
    if (!quizState || quizState.kategorieId !== kategorie.id || quizState.sprache !== sprache) {
      quizState = {
        kategorieId: kategorie.id,
        sprache,
        fragen: erzeugeQuizFragen(karten, sprache),
        index: 0,
        score: 0,
        ausgewaehlt: null,
      };
    }

    if (quizState.index >= quizState.fragen.length) {
      app.innerHTML = renderQuizErgebnisView(
        kategorie,
        quizState.score,
        quizState.fragen.length,
        sprache,
      );
    } else {
      app.innerHTML = renderQuizView(
        kategorie,
        quizState.fragen[quizState.index],
        quizState.index,
        quizState.fragen.length,
        quizState.ausgewaehlt,
        sprache,
      );
    }
    return;
  }

  const index = ((route.index % karten.length) + karten.length) % karten.length;
  const key = `${kategorie.id}:${index}`;
  if (key !== aktuelleKarteKey) {
    flipped = false;
    aktuelleKarteKey = key;
  }

  app.innerHTML = renderKarteView(kategorie, karten, index, flipped, sprache);
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

  const { action, kategorieId, index, antwortIndex, sprache } = target.dataset;

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
    case "start-quiz":
      quizState = null;
      if (kategorieId) navigate({ view: "quiz", kategorieId });
      break;
    case "quiz-antwort":
      if (quizState && quizState.ausgewaehlt === null && antwortIndex !== undefined) {
        const gewaehlterIndex = Number(antwortIndex);
        const frage = quizState.fragen[quizState.index];
        quizState.ausgewaehlt = gewaehlterIndex;
        if (frage.optionen[gewaehlterIndex]?.istKorrekt) quizState.score++;
        render();
      }
      break;
    case "quiz-weiter":
      if (quizState) {
        quizState.index++;
        quizState.ausgewaehlt = null;
        render();
      }
      break;
    case "quiz-restart":
      quizState = null;
      render();
      break;
    case "quiz-verlassen":
      quizState = null;
      if (kategorieId) navigate({ view: "lernkarten", kategorieId });
      break;
    case "set-sprache":
      if (sprache === "de" || sprache === "en" || sprache === "es") {
        setSprache(sprache);
        render();
      }
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
