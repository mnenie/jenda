import { describe, it, expect } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import '@/shared/lib/vitest-utils/cookiesI18n-mock';
import i18n from '@/shared/lib/i18n';
import MarketingCards from '../MarketingCards.vue';
import { nextTick, type ComponentPublicInstance } from 'vue';
import { UiCard } from '@/shared/ui';

// TODO: `ComponentPublicInstance` will need to set in other tests too
type MarketingCardsInstance = ComponentPublicInstance<
  {},
  {},
  {
    cards: any[];
    width: number;
    getCurrentColor: (id: number) => string;
    currentWidth: (width: string | undefined) => string;
    currentHeight: (height: string | undefined) => string;
  }
>;

describe('tests for MarketingCards.vue', () => {
  const wrapper = mount(MarketingCards, {
    global: {
      plugins: [i18n]
    }
  }) as VueWrapper<MarketingCardsInstance>;

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render subcomponents', () => {
    expect(wrapper.findComponent(UiCard).exists()).toBe(true);
  });

  it('should count cards correctly', async () => {
    const cards = wrapper.vm.cards;
    wrapper.vm.width = 1900;
    await nextTick();
    expect(cards).toHaveLength(5);
  });

  it('returns correct width and height', () => {
    expect(wrapper.vm.currentWidth('500')).toBe('500px');
    expect(wrapper.vm.currentWidth(undefined)).toBe('100%');
    expect(wrapper.vm.currentHeight('100')).toBe('100px');
    expect(wrapper.vm.currentHeight(undefined)).toBe('100%');
  });

  it('renders card titles and descriptions correctly', () => {
    const _titles = wrapper.findAll('h3');
    const _descriptions = wrapper.findAll('p');

    expect(_titles.length).toBe(5);
    expect(_descriptions.length).toBe(5);

    _titles.forEach((title, index) => {
      expect(title.text()).toBe(wrapper.vm.cards[index].title);
    });
    _descriptions.forEach((desc, index) => {
      expect(desc.text()).toBe(wrapper.vm.cards[index].description);
    });
  });
});
