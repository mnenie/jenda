import { createI18n } from 'vue-i18n';
import { useCookies } from '@vueuse/integrations/useCookies';
import enLocale from './locales/en-US';
import ruLocale from './locales/ru-RU';

type MessageSchema = typeof enLocale;

const messages = {
  'en-US': {
    ...enLocale
  },
  'ru-RU': {
    ...ruLocale
  }
};
const cookies = useCookies();

const getCurrentLocale = () => {
  const cookieLanguage = cookies.get('i18n');
  if (cookieLanguage) {
    return cookieLanguage;
  }

  return 'en-US';
};

const i18n = createI18n<[MessageSchema], 'en-US' | 'ru-RU'>({
  legacy: false,
  locale: getCurrentLocale(),
  messages: messages
});

export default i18n;
