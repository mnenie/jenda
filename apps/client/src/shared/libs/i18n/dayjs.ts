import { watch } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/ru'
import 'dayjs/locale/zh-cn'
import type { I18n } from 'vue-i18n'

export default function useDayJsLocalize<
  T extends I18n<Record<string, string>, Record<string, string>>,
>(
  i18n: T,
) {
  const dayJsLocaleMap: Record<string, string> = {
    'en-US': 'en',
    'ru-RU': 'ru',
    'zh-CN': 'zh-cn',
  }

  watch(
    // @ts-ignore
    () => i18n.global!.locale.value,
    (newLocale) => {
      dayjs.locale(dayJsLocaleMap[newLocale as keyof typeof dayJsLocaleMap])
    },
    { immediate: true },
  )
}
