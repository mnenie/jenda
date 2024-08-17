import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import FooterWelcome from '../FooterWelcome.vue';
import i18n from '@/shared/lib/i18n';

vi.mock('@vueuse/integrations/useCookies', () => {
  return {
    useCookies: () => ({
      get: (key: string) => {
        return key === 'i18n' ? 'en-US' : undefined;
      }
    })
  };
});

describe('tests for FooterWelcome.vue', () => {
  const wrapper = shallowMount(FooterWelcome, {
    global: {
      plugins: [i18n],

      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'welcome.footer': 'footer'
          };
          return translations[key];
        }
      }
    }
  });

  // snapshot is covered needs for i18n I think ;)
  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
