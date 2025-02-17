import { type ComponentPublicInstance, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MarketingCards from '../components/MarketingCards.vue'
import type { VueWrapper } from '@vue/test-utils'
import { UiCard } from '@/shared/ui'

// TODO: `ComponentPublicInstance` needs to be fixed with certain types
type MarketingCardsInstance = ComponentPublicInstance<
  {},
  {},
  {
    cards: any[]
    width: number
    getCurrentColor: (id: number) => string
    currentWidth: (width: string | undefined) => string
    currentHeight: (height: string | undefined) => string
  }
>

describe('tests for MarketingCards.vue', () => {
  const wrapper = mount(MarketingCards) as VueWrapper<MarketingCardsInstance>

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render subcomponents', () => {
    expect(wrapper.findComponent(UiCard).exists()).toBe(true)
  })

  it('should count cards correctly', async () => {
    const cards = wrapper.vm.cards
    wrapper.vm.width = 1900
    await nextTick()
    expect(cards).toHaveLength(5)
  })

  it('returns correct width and height', () => {
    expect(wrapper.vm.currentWidth('500')).toBe('500px')
    expect(wrapper.vm.currentWidth(undefined)).toBe('100%')
    expect(wrapper.vm.currentHeight('100')).toBe('100px')
    expect(wrapper.vm.currentHeight(undefined)).toBe('100%')
  })

  it('renders card titles and descriptions correctly', () => {
    const _titles = wrapper.findAll('h3')
    const _descriptions = wrapper.findAll('p')

    expect(_titles.length).toBe(5)
    expect(_descriptions.length).toBe(5)

    _titles.forEach((title, index) => {
      expect(title.text()).toBe(wrapper.vm.cards[index].title)
    })
    _descriptions.forEach((desc, index) => {
      expect(desc.text()).toBe(wrapper.vm.cards[index].description)
    })
  })
})
