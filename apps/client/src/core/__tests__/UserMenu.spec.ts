import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import UserMenu from '../components/headers/UserMenu.vue'
import { UiDropdownMenuItem, UiDropdownMenuTrigger } from '@/shared/ui'

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn(),
}

describe('tests for UserMenu.vue', () => {
  const wrapper = mount(UserMenu, {
    global: {
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'header.user.welcome': 'welcome',
            'header.user.logout': 'logout',
          }
          return translations[key]
        },
        router: mockRouter,
      },
    },
  })

  it('should redirect correctly to welcome', async () => {
    await wrapper.findComponent(UiDropdownMenuTrigger).trigger('click')
    await nextTick()
    const items = wrapper.findAllComponents(UiDropdownMenuItem)
    expect(items.length).toBeGreaterThan(0)
    const welcomeTrigger = items.at(0)
    await welcomeTrigger?.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'welcome' })
  })

  it('should redirect correctly to logout', async () => {
    // needs to be fixed
  })
})
