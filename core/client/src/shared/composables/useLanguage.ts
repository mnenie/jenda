import { useLocalStorage } from '@vueuse/core'
import { type Ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

interface Value {
  name: string
  value: string
}

export function useLanguage(values: Value[], language: Ref<string>) {
  const { locale } = useI18n()
  const storage = useLocalStorage<string | null>('i18n', null)

  const setLanguage = (value: string) => {
    locale.value = value
    storage.value = value
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
