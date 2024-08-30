import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import '@/shared/lib/vitest-utils/cookiesI18n-mock';
import i18n from '@/shared/lib/i18n';
import TemplateItem from '../TemplateItem.vue';
import { templatesInfo } from '../../model';

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
      template: templatesInfo[0]
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
