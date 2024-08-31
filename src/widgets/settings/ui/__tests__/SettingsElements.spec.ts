import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import '@/shared/lib/vitest-utils/cookiesI18n-mock';
import SettingsElements from '../SettingsElements.vue';
import i18n from '@/shared/lib/i18n';
import { LanguageSwitcher, ThemeSwitcher } from '@/features/settings';

describe('tests for SettingsElements.vue', () => {
  const wrapper = shallowMount(SettingsElements, {
    global: {
      plugins: [i18n]
    }
  });

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render subcomponents', () => {
    expect(wrapper.findComponent(LanguageSwitcher).exists()).toBe(true);
    expect(wrapper.findComponent(ThemeSwitcher).exists()).toBe(true);
  });

  it('should has correctly localization', () => {
    const textLang = wrapper.find('.lang p');
    expect(textLang.text()).toContain('Language');

    const textTheme = wrapper.find('.theme p');
    expect(textTheme.text()).toContain('Theme');
  });
});
