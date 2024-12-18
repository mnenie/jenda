import { useCookies } from '@vueuse/integrations/useCookies'
import { type Ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

interface Value {
  name: string
  value: string
}

export function useLanguage(values: Value[], language: Ref<string>) {
  const { locale } = useI18n()
  const cookies = useCookies()

  const setLanguage = (value: string) => {
    locale.value = value
    cookies.set('i18n', value)
  }

  watch(
    () => locale.value,
    (newLocale) => {
      const selectedOption = values.find(option => option.value === newLocale)
      if (selectedOption) {
        language.value = selectedOption.value
      }
    },
    { immediate: true },
  )

  return {
    setLanguage,
  }
}
