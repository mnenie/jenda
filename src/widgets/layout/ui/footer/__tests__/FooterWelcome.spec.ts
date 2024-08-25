import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import '@/shared/lib/vitest-utils/cookiesI18n-mock';
import i18n from '@/shared/lib/i18n';
import FooterWelcome from '../AppFooter.vue';

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
