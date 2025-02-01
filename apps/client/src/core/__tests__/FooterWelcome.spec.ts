import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import FooterWelcome from '../components/footer/AppFooter.vue'

describe('tests for FooterWelcome.vue', () => {
  const wrapper = shallowMount(FooterWelcome, {
    global: {
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'welcome.footer': 'footer',
          }
          return translations[key]
        },
      },
    },
  })

  // snapshot is covered needs for i18n I think ;)
  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
