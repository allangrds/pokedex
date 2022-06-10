import i18n, { use, InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from '../../../public/locales/en/translation.json'

const baseConfig: InitOptions = {
  debug: false,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: false,
  nsSeparator: false,
  interpolation: {
    escapeValue: false,
  },
}

const resources = {
  en: {
    translation: translationEN,
  },
}

use(initReactI18next).init({
  ...baseConfig,
  resources,
})

export const i18next = i18n
