export type Route =
  | { view: "kategorien" }
  | { view: "lernkarten"; kategorieId: string }
  | { view: "karte"; kategorieId: string; index: number };

export function parseRoute(hash: string): Route {
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [segment, kategorieId, sub, indexRaw] = parts;

  if (segment === "kategorie" && kategorieId) {
    if (sub === "karte" && indexRaw !== undefined) {
      const index = Number.parseInt(indexRaw, 10);
      return { view: "karte", kategorieId, index: Number.isFinite(index) ? index : 0 };
    }
    return { view: "lernkarten", kategorieId };
  }

  return { view: "kategorien" };
}

export function routeToHash(route: Route): string {
  if (route.view === "kategorien") return "#/";
  if (route.view === "lernkarten") return `#/kategorie/${route.kategorieId}`;
  return `#/kategorie/${route.kategorieId}/karte/${route.index}`;
}

export function getCurrentRoute(): Route {
  return parseRoute(window.location.hash);
}

export function navigate(route: Route): void {
  window.location.hash = routeToHash(route);
}
