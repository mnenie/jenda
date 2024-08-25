import { vi } from 'vitest';

vi.mock('@vueuse/integrations/useCookies', () => {
  return {
    useCookies: () => ({
      get(key: string) {
        return key === 'i18n' ? 'en-US' : undefined;
      }
    })
  };
});
