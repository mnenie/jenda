import { createI18n } from 'vue-i18n';
import { useCookies } from '@vueuse/integrations/useCookies';
import enLocale from './locales/en-US';
import ruLocale from './locales/ru-RU';
import zhLocale from './locales/zh-CN';

type MessageSchema = typeof enLocale;

const messages = {
  'en-US': {
    ...enLocale
  },
  'ru-RU': {
    ...ruLocale
  },
  'zh-CN': {
    ...zhLocale
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

const i18n = createI18n<[MessageSchema], 'en-US' | 'ru-RU' | 'zh-CN'>({
  legacy: false,
  locale: getCurrentLocale(),
  messages: messages
});

export default i18n;
