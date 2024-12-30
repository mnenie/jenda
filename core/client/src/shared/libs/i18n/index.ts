import { computed } from 'vue'
import { createI18n } from 'vue-i18n'
import { enZod, ruZod, zhZod } from '../vee-validate/rules'
import { enLocale, ruLocale, zhLocale } from './locales'
import { customPluralRule } from './plurals'

export type MessageSchema = typeof enLocale

const messages = {
  'en-US': {
    ...enLocale,
    errors: {
      ...enZod,
    },
  },
  'ru-RU': {
    ...ruLocale,
    errors: {
      ...ruZod,
    },
  },
  'zh-CN': {
    ...zhLocale,
    errors: {
      ...zhZod,
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
  pluralRules: {
    'ru-RU': {
      // @ts-expect-error i18n shema
      customPluralRule,
    },
  },
  messages,
})

export default i18n
