import { z } from 'zod'
import { makeZodI18nMap } from './map'
import type { I18n } from 'vue-i18n'
import i18n from '@/plugins/i18n'

z.setErrorMap(makeZodI18nMap(i18n as unknown as I18n))

export { z }
