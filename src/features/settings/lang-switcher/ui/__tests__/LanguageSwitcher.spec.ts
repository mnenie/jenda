import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { nextTick, ref, shallowReactive } from 'vue';
import '@/shared/lib/vitest-utils/cookiesI18n-mock';
import i18n from '@/shared/lib/i18n';
import LanguageSwitcher from '../LanguageSwitcher.vue';
import { useLanguage } from '@/shared/lib/composables';
import { useI18n } from 'vue-i18n';

vi.mock('vue-i18n', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as unknown as object),
    useI18n: () => ({
      locale: ref('en-US')
    })
  };
});

describe('tests for LanguageSwitcher.vue', () => {
  const wrapper = mount(LanguageSwitcher, {
    global: {
      plugins: [i18n]
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should render subcomponents', () => {
    expect(wrapper.findComponent({ name: 'UiSelect' }).exists()).toBe(true);
  });
});

describe('useLanguage composable tests', () => {
  // mocks
  const options = shallowReactive([
    { name: 'English', value: 'en-US' },
    { name: 'Русский', value: 'ru-RU' },
    { name: '简体中文', value: 'zh-CN' }
  ]);

  it('should correctly sync language with `locale`', async () => {
    const { locale } = useI18n();
    const language = ref('');

    useLanguage(options, language);

    expect(language.value).toBe('English');

    locale.value = 'ru-RU';
    await nextTick();
    expect(locale.value).toBe('ru-RU');
  });
});
