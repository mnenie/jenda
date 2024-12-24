import { computed } from 'vue'
import { createI18n } from 'vue-i18n'

import en from '../vee-validate/rules/en'
import ru from '../vee-validate/rules/ru'
import zh from '../vee-validate/rules/zh'
import enLocale from './locales/en-US'
import ruLocale from './locales/ru-RU'
import zhLocale from './locales/zh-CN'

export type MessageSchema = typeof enLocale

const messages = {
  'en-US': {
    ...enLocale,
    errors: {
      ...en,
    },
  },
  'ru-RU': {
    ...ruLocale,
    errors: {
      ...ru,
    },
  },
  'zh-CN': {
    ...zhLocale,
    errors: {
      ...zh,
    },
  },
}

const getCurrentLocale = computed(() => {
  const storageLanguage = localStorage.getItem('i18n')
  if (storageLanguage) {
    return storageLanguage
  }
  if (navigator.language.split('-')[0] === 'ru') {
    return 'ru-RU'
  }
  return 'en-US'
})

const i18n = createI18n<[MessageSchema], 'en-US' | 'ru-RU' | 'zh-CN'>({
  legacy: false,
  locale: getCurrentLocale.value,
  globalInjection: true,
  messages,
})

export default i18n
