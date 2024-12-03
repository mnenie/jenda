import { RouteNames } from '@/shared/config/consts'
import i18n from '@/shared/lib/i18n'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { SquareDashedKanban } from 'lucide-vue-next'
import { describe, expect, it, vi } from 'vitest'
import { h } from 'vue'
import { useRoute } from 'vue-router'
import WorkSpace from '../WorkSpace.vue'
import '@/shared/lib/vitest-utils/cookiesI18n-mock'

vi.mock('vue-router')

describe('tests for WorkSpace.vue', () => {
  // @ts-expect-error mock types
  useRoute.mockReturnValue({
    name: RouteNames.boards,
  })
  const wrapper = mount(WorkSpace, {
    global: {
      plugins: [i18n],
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'sidebar.boards': 'Boards',
            'sidebar.section': 'Workspace',
          }
          return translations[key]
        },
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      directives: {
        tooltip() {},
      },
    },
    props: {
      isExpanded: true,
      links: [
        {
          id: 0,
          name: 'boards',
          pathName: RouteNames.boards,
          icon: h(SquareDashedKanban),
        },
      ],
    },
  })

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be redirect with RouterLink correctly', () => {
    expect(wrapper.findComponent(RouterLinkStub).props('to')).toEqual({
      name: RouteNames.boards,
    })
  })
})
