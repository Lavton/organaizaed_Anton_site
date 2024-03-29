import { Translation } from "./locales/definition"
import en from "./locales/en-US"
import fr from "./locales/fr-FR"
import de from "./locales/de-DE"
import ru from "./locales/ru-RU"

export const TRANSLATIONS = {
  "en-US": en,
  "fr-FR": fr,
  "de-DE": de,
  "ru-RU": ru
} as const

export const i18n = (locale: ValidLocale): Translation => TRANSLATIONS[locale]
export type ValidLocale = keyof typeof TRANSLATIONS
