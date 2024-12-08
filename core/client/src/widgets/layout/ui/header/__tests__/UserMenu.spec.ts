import { RouteNames } from '@/shared/config/consts'
import i18n from '@/shared/lib/i18n'
import { UiDropdownMenuItem, UiDropdownMenuTrigger } from '@/shared/ui'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import UserMenu from '../UserMenu.vue'
import '@/shared/lib/vitest-utils/cookiesI18n-mock'

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn(),
}

describe('tests for UserMenu.vue', () => {
  const wrapper = mount(UserMenu, {
    global: {
      plugins: [i18n],
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'header.user.welcome': 'welcome',
            'header.user.logout': 'logout',
          }
          return translations[key]
        },
        $router: mockRouter,
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
    expect(mockRouter.push).toHaveBeenCalledWith({ name: RouteNames.welcome })
  })

  it('should redirect correctly to logout', async () => {
    // needs to be fixed
  })
})
