import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import AboutSection from '../components/sections/AboutSection.vue'
import { UiButton } from '@/shared/ui'

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn(),
}

describe('tests for AboutSection.vue', () => {
  const wrapper = shallowMount(AboutSection, {
    global: {
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
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'sign-up' })
  })
})
