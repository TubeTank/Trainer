export type Urteil = "kenne" | "ueben";

interface KarteInteraktionHandlers {
  onFlip(): void;
  onAdvance(urteil: Urteil): void;
  onZurueck(): void;
}

const SWIPE_SCHWELLE = 80;
const TAP_TOLERANZ = 6;

export function attachKarteInteraktion(container: HTMLElement, handlers: KarteInteraktionHandlers): void {
  const wrapper = container.querySelector<HTMLElement>(".karte-wrapper");
  if (!wrapper) return;

  let startX = 0;
  let startY = 0;
  let deltaX = 0;
  let dragging = false;
  let pointerId: number | null = null;

  function setLabelStaerke(richtung: Urteil | null, staerke: number): void {
    wrapper!.querySelectorAll<HTMLElement>(".karte-swipe-label").forEach((label) => {
      const istAktiv = richtung !== null && label.dataset.richtung === richtung;
      label.style.opacity = istAktiv ? String(staerke) : "0";
    });
  }

  function federZurueck(): void {
    wrapper!.style.transition = "transform 0.25s ease";
    wrapper!.style.transform = "";
    setLabelStaerke(null, 0);
  }

  function fliegtWeg(urteil: Urteil, danach: () => void): void {
    const richtung = urteil === "kenne" ? 1 : -1;
    wrapper!.style.transition = "transform 0.22s ease, opacity 0.22s ease";
    wrapper!.style.transform = `translateX(${richtung * 480}px) rotate(${richtung * 14}deg)`;
    wrapper!.style.opacity = "0";
    window.setTimeout(danach, 200);
  }

  wrapper.addEventListener("pointerdown", (event) => {
    dragging = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    deltaX = 0;
    try {
      wrapper.setPointerCapture(event.pointerId);
    } catch {
      // Pointer bereits inaktiv (z. B. schneller Multi-Touch) – Drag funktioniert auch ohne Capture weiter.
    }
    wrapper.style.transition = "";
  });

  wrapper.addEventListener("pointermove", (event) => {
    if (!dragging || event.pointerId !== pointerId) return;
    const naeherungX = event.clientX - startX;
    const naeherungY = event.clientY - startY;
    if (Math.abs(naeherungX) < Math.abs(naeherungY)) return;
    deltaX = naeherungX;
    wrapper.style.transform = `translateX(${deltaX}px) rotate(${deltaX / 20}deg)`;
    const staerke = Math.min(Math.abs(deltaX) / SWIPE_SCHWELLE, 1);
    setLabelStaerke(deltaX > 0 ? "kenne" : "ueben", staerke);
  });

  function beenden(event: PointerEvent): void {
    if (!dragging || event.pointerId !== pointerId) return;
    dragging = false;
    pointerId = null;

    if (Math.abs(deltaX) > SWIPE_SCHWELLE) {
      const urteil: Urteil = deltaX > 0 ? "kenne" : "ueben";
      fliegtWeg(urteil, () => handlers.onAdvance(urteil));
    } else if (Math.abs(deltaX) < TAP_TOLERANZ) {
      federZurueck();
      handlers.onFlip();
    } else {
      federZurueck();
    }
  }

  wrapper.addEventListener("pointerup", beenden);
  wrapper.addEventListener("pointercancel", beenden);

  container.querySelectorAll<HTMLButtonElement>('[data-action="karte-swipe"]').forEach((button) => {
    button.addEventListener("click", () => {
      const urteil = button.dataset.richtung as Urteil;
      fliegtWeg(urteil, () => handlers.onAdvance(urteil));
    });
  });

  container.querySelectorAll<HTMLButtonElement>('[data-action="karte-back"]').forEach((button) => {
    button.addEventListener("click", () => handlers.onZurueck());
  });
}

export function setFlipped(container: HTMLElement, flipped: boolean): void {
  const wrapper = container.querySelector<HTMLElement>(".karte-wrapper");
  if (wrapper) wrapper.dataset.flipped = String(flipped);
}
