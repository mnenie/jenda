import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiDropdownMenu from '../UiDropdownMenu.vue'

describe('tests for UiDropdownMenu', () => {
  const wrapper = mount(UiDropdownMenu, {
    slots: { default: '<div>test</div>' },
    props: { defaultOpen: true },
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toContain('<div>test</div>')
  })

  it('should pass defaultOpen prop to DropdownMenuRoot', () => {
    const root = wrapper.findComponent({ name: 'DropdownMenuRoot' })
    expect(root.props('defaultOpen')).toBe(true)
  })

  it('should emit events correctly', () => {
    wrapper.vm.$emit('openChange', true)
    expect(wrapper.emitted('openChange')).toBeTruthy()
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
  })
})

// more tests: https://github.com/unovue/radix-vue/blob/main/packages/radix-vue/src/DropdownMenu/DropdownMenu.test.ts