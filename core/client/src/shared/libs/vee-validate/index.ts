import { z } from 'zod'
import i18n, { type MessageSchema } from '../i18n'

import { makeZodI18nMap } from './map'
import type { I18n } from 'vue-i18n'

z.setErrorMap(makeZodI18nMap(
  i18n as unknown as
  I18n<MessageSchema, Record<string, string>>,
))

export { z }
