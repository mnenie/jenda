import { type App, type InjectionKey, watch, type WritableComputedRef } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/ru'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
import calendar from 'dayjs/plugin/calendar'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import i18n from './i18n'
import type { I18n } from 'vue-i18n'

export const DayjsInjectionKey: InjectionKey<typeof dayjs> = Symbol('dayjs')

export default {
  install<T extends WritableComputedRef<string, string>>(app: App) {
    dayjs.extend(relativeTime)
    dayjs.extend(localizedFormat)
    dayjs.extend(calendar)

    const dayJsLocaleMap: Record<string, string> = {
      'en-US': 'en',
      'ru-RU': 'ru',
      'zh-CN': 'zh-cn',
    }
    watch(
      // needs to be fixed
      () => (((i18n as I18n).global!.locale as T).value),
      (newLocale) => {
        dayjs.locale(dayJsLocaleMap[newLocale as keyof typeof dayJsLocaleMap])
      },
      { immediate: true },
    )

    app.provide(DayjsInjectionKey, dayjs)
  },
}
