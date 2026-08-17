export type Route =
  | { view: "kategorien" }
  | { view: "lernkarten"; kategorieId: string }
  | { view: "karte"; kategorieId: string; index: number }
  | { view: "quiz"; kategorieId: string }
  | { view: "auswahl" };

export function parseRoute(hash: string): Route {
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [segment, kategorieId, sub, indexRaw] = parts;

  if (segment === "auswahl") {
    return { view: "auswahl" };
  }

  if (segment === "kategorie" && kategorieId) {
    if (sub === "karte" && indexRaw !== undefined) {
      const index = Number.parseInt(indexRaw, 10);
      return { view: "karte", kategorieId, index: Number.isFinite(index) ? index : 0 };
    }
    if (sub === "quiz") {
      return { view: "quiz", kategorieId };
    }
    return { view: "lernkarten", kategorieId };
  }

  return { view: "kategorien" };
}

export function routeToHash(route: Route): string {
  if (route.view === "kategorien") return "#/";
  if (route.view === "auswahl") return "#/auswahl";
  if (route.view === "lernkarten") return `#/kategorie/${route.kategorieId}`;
  if (route.view === "quiz") return `#/kategorie/${route.kategorieId}/quiz`;
  return `#/kategorie/${route.kategorieId}/karte/${route.index}`;
}

export function getCurrentRoute(): Route {
  return parseRoute(window.location.hash);
}

export function navigate(route: Route): void {
  window.location.hash = routeToHash(route);
}
