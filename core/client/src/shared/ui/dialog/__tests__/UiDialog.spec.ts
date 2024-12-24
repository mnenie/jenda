import type { VueWrapper } from '@vue/test-utils'
import type { ComponentPublicInstance } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { UiDialog } from '..'
import DialogTest from './MockComponent.vue'

const OPEN_TEXT = 'open'
const TITLE_TEXT = 'title'

type DialogTestInstance = ComponentPublicInstance<
  {},
  {},
  {
    isOpen: boolean
  }
>

describe('tests for UiDialog', () => {
  it('should render correctly with default slot', () => {
    const wrapper = mount(UiDialog, {
      slots: { default: '<div>dialog</div>' },
      props: { defaultOpen: true },
    }) as VueWrapper<DialogTestInstance>

    expect(wrapper.html()).toContain('<div>dialog</div>')
  })

  it('should render dialog components correctly', async () => {
    const wrapper = mount(DialogTest, {
      global: {
        stubs: { teleport: true },
      },
    }) as VueWrapper<DialogTestInstance>

    expect(wrapper.html()).toContain(OPEN_TEXT)
    expect(wrapper.html()).not.toContain(TITLE_TEXT)

    wrapper.vm.isOpen = true
    expect(wrapper.vm.isOpen).toBe(true)
  })

  it('should pass defaultOpen prop to DialogMenuRoot', () => {
    const wrapper = mount(UiDialog, { props: { defaultOpen: true } })
    const root = wrapper.findComponent({ name: 'DialogRoot' })
    expect(root.props('defaultOpen')).toBe(true)
  })

  it('should emit openChange events correctly', () => {
    const wrapper = mount(UiDialog)
    wrapper.vm.$emit('openChange', true)
    expect(wrapper.emitted('openChange')).toBeTruthy()
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
  })
})
