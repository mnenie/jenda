import type { Options } from '@/shared/ui/select/types'
import type { VueWrapper } from '@vue/test-utils'
import i18n from '@/shared/lib/i18n'
import { UiButton, UiSelect } from '@/shared/ui'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { type ComponentPublicInstance, nextTick } from 'vue'
import HeaderWelcome from '../HeaderWelcome.vue'
import '@/shared/lib/vitest-utils/cookiesI18n-mock'

type HeaderWelcomeInstance = ComponentPublicInstance<
  {},
  {},
  {
    isDark: boolean
    width: number
    languages: Options[]
    links: () => any[]
  }
>

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn(),
}

describe('tests for HeaderWelcome.vue', () => {
  const wrapper = mount(HeaderWelcome, {
    global: {
      plugins: [i18n],

      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'welcome.header.login': 'Log In',
            'welcome.header.reg': 'Registration',
          }
          return translations[key]
        },
        tm: (key: string) => {
          const translationsArr: Record<string, string[]> = {
            'welcome.header.links': [],
          }
          return translationsArr[key]
        },
        $router: mockRouter,
      },
    },
  }) as VueWrapper<HeaderWelcomeInstance>

  it('should be render correctly', async () => {
    wrapper.vm.width = 1600
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render subcomponents', async () => {
    wrapper.vm.width = 1600
    await nextTick()
    expect(wrapper.findComponent(UiButton).exists()).toBe(true)
    expect(wrapper.findComponent(UiSelect).exists()).toBe(true)
  })

  it('should handle mode + icon changing', async () => {
    const darkModeButton = wrapper.find('.btn')
    wrapper.vm.isDark = false
    wrapper.vm.width = 1600
    await nextTick()

    const moonIcon = wrapper.find('[i-hugeicons-moon-02]')
    const sunIcon = wrapper.find('[i-lucide-sun]')

    expect(moonIcon.exists()).toBe(true)
    expect(sunIcon.exists()).toBe(false)

    darkModeButton.trigger('click')
    wrapper.vm.isDark = true
  })

  it('should redirect correctly to login', async () => {
    const loginButton = wrapper.find('.btns').findAllComponents(UiButton).at(0)

    await loginButton.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'login' })
  })

  it('should redirect correctly to registration', async () => {
    const registrationButton = wrapper
      .find('.btns')
      .findAllComponents(UiButton)
      .at(1)

    await registrationButton.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'registration' })
  })
})