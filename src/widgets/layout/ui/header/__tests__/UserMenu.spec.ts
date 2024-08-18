import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import UserMenu from '../UserMenu.vue';
import i18n from '@/shared/lib/i18n';
import { UiDropdownItem } from '@/shared/ui';

vi.mock('@vueuse/integrations/useCookies', () => {
  return {
    useCookies: () => ({
      get: (key: string) => {
        return key === 'i18n' ? 'en-US' : undefined;
      }
    })
  };
});

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn()
};

describe('tests for UserMenu.vue', () => {
  const wrapper = mount(UserMenu, {
    global: {
      plugins: [i18n],

      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'header.user.welcome': 'welcome',
            'header.user.logout': 'logout'
          };
          return translations[key];
        },
        $router: mockRouter
      }
    }
  });

  it('should be render correctly', async () => {
    await wrapper.findComponent({ name: 'UiDropdown' }).vm.handleDropdown();
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should redirect coorectly', async () => {
    const welcomeTrigger = wrapper.find('.content').findAllComponents(UiDropdownItem).at(0);

    await welcomeTrigger.trigger('click');
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'welcome' });
  });
});
