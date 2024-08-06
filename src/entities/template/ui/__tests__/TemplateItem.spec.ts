import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import i18n from '@/shared/lib/i18n';
import TemplateItem from '../TemplateItem.vue';
import { _templates } from '../../config';

vi.mock('@vueuse/integrations/useCookies', () => {
  return {
    useCookies: () => ({
      get(key: string) {
        return key === 'i18n' ? 'en-US' : undefined;
      }
    })
  };
});

describe('tests for TemplateItem.vue ', () => {
  const wrapper = shallowMount(TemplateItem, {
    global: {
      plugins: [i18n],
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'templates.user': 'test user'
          };
          return translations[key];
        }
      }
    },
    props: {
      template: _templates[0]
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
