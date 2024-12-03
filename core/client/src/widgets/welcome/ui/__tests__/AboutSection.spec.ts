import i18n from '@/shared/lib/i18n'
import { UiButton } from '@/shared/ui'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import AboutSection from '../sections/AboutSection.vue'
import '@/shared/lib/vitest-utils/cookiesI18n-mock'

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn(),
}

describe('tests for AboutSection.vue', () => {
  const wrapper = shallowMount(AboutSection, {
    global: {
      plugins: [i18n],
      mocks: {
        $router: mockRouter,
      },
    },
  })

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should redirect correctly', async () => {
    const btn = wrapper.find('.btns').findAllComponents(UiButton).at(0)
    await btn.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'registration' })
  })
})
