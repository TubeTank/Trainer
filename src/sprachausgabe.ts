import type { Sprache } from "./data/types";
import { SPRACH_BCP47 } from "./sprache";

export function kannVorlesen(): boolean {
  return "speechSynthesis" in window;
}

export function vorlesen(texte: string[], sprache: Sprache): void {
  if (!kannVorlesen()) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(texte.filter(Boolean).join(". "));
  utterance.lang = SPRACH_BCP47[sprache];
  window.speechSynthesis.speak(utterance);
}

export function vorlesenStoppen(): void {
  if (kannVorlesen()) window.speechSynthesis.cancel();
}
