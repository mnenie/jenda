import { createI18n, type I18n } from 'vue-i18n'
import { enZod, ruZod, zhZod } from '../vee-validate/rules'
import { enLocale, ruLocale, zhLocale } from './locales'
import { customPluralRule } from './plurals'
import useDayJsLocalize from './dayjs'
import { getCurrentLocale } from './utils/getLocale'

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

useDayJsLocalize(i18n as I18n)

export default i18n
