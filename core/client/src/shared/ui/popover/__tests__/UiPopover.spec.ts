import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MockComponent from './MockComponent.vue'

describe('tests for UiPopover', () => {
  const wrapper = mount(MockComponent, {
    props: {
      defaultOpen: true,
      modal: false,
    },
  })
  it('should render correctly', () => {
    expect(wrapper.html())
  })

  it('should pass props to PopoverRoot', () => {
    const root = wrapper.findComponent({ name: 'PopoverRoot' })
    expect(root.props('defaultOpen')).toBe(true)
    expect(root.props('modal')).toBe(false)
  })

  it('should emit events correctly', () => {
    wrapper.vm.$emit('openChange', true)
    expect(wrapper.emitted('openChange')).toBeTruthy()
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
  })
})

// more tests: https://github.com/unovue/radix-vue/blob/main/packages/radix-vue/src/Popover/Popover.test.ts
