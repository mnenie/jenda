import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { useRoute } from 'vue-router/auto'
import WorkSpace from '../components/sidebar/WorkSpace.vue'
import i18n from '@/shared/libs/i18n'

vi.mock('vue-router/auto')

vi.mock('@/shared/composables/expanded', () => ({
  useExpandedContext: vi.fn(() => ({
    isExpanded: {
      value: true,
    },
  })),
}))

describe('tests for WorkSpace.vue', () => {
  // @ts-expect-error mock types
  useRoute.mockReturnValue({ name: 'boards' })
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
      links: [
        {
          id: 0,
          name: 'boards',
          pathName: 'boards',
          icon: 'i-hugeicons-trello',
        },
      ],
    },
  })

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be redirect with RouterLink correctly', () => {
    expect(wrapper.findComponent(RouterLinkStub).props('to')).toEqual({
      name: 'boards',
    })
  })
})
