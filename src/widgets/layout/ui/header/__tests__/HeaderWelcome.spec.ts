import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { nextTick } from 'vue';
import '@/shared/lib/vitest-utils/cookiesI18n-mock';
import HeaderWelcome from '../HeaderWelcome.vue';
import i18n from '@/shared/lib/i18n';
import { Moon, Sun } from 'lucide-vue-next';
import { UiButton, UiSelect } from '@/shared/ui';

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn()
};

describe('tests for HeaderWelcome.vue', () => {
  const wrapper = mount(HeaderWelcome, {
    global: {
      plugins: [i18n],

      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'welcome.header.login': 'Log In',
            'welcome.header.reg': 'Registration'
          };
          return translations[key];
        },
        tm: (key: string) => {
          const translationsArr: Record<string, string[]> = {
            'welcome.header.links': []
          };
          return translationsArr[key];
        },
        $router: mockRouter
      }
    }
  });

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render subcomponents', () => {
    expect(wrapper.findComponent(UiButton).exists()).toBe(true);
    expect(wrapper.findComponent(UiSelect).exists()).toBe(true);
  });

  it('should handle mode + icon changing', async () => {
    const darkModeButton = wrapper.find('.btn');
    //@ts-expect-error instance
    wrapper.vm.isDark = false;

    expect(wrapper.findComponent(Moon).exists()).toBe(true);
    expect(wrapper.findComponent(Sun).exists()).toBe(false);

    darkModeButton.trigger('click');
    //@ts-expect-error instance
    wrapper.vm.isDark = true;
    await nextTick();
    expect(wrapper.findComponent(Moon).exists()).toBe(false);
    expect(wrapper.findComponent(Sun).exists()).toBe(true);
  });

  it('should redirect correctly to login', async () => {
    const loginButton = wrapper.find('.btns').findAllComponents(UiButton).at(0);

    await loginButton.trigger('click');
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'login' });
  });

  it('should redirect correctly to registration', async () => {
    const registrationButton = wrapper.find('.btns').findAllComponents(UiButton).at(1);

    await registrationButton.trigger('click');
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'registration' });
  });
});
