import { en } from "./en";
import { es } from "./es";
import type { Locale, PortfolioContent } from "./types";

export const contentByLocale: Record<Locale, PortfolioContent> = {
  en,
  es
};

export function getLocale(): Locale {
  return document.documentElement.lang.toLowerCase().startsWith("es") ? "es" : "en";
}
