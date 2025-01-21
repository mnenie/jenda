import { computed } from 'vue'

export const getCurrentLocale = computed(() => {
  const storageLanguage = localStorage.getItem('i18n')
  if (storageLanguage) {
    return storageLanguage
  }
  if (navigator.language.split('-')[0] === 'ru') {
    return 'ru-RU'
  }
  return 'en-US'
})
