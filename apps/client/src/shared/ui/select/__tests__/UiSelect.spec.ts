import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiSelect from '../UiSelect.vue'

describe('tests for UiSelect', () => {
  const wrapper = mount(UiSelect, {
    slots: { default: '<div>test select</div>' },
    props: { defaultOpen: true },
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toContain('<div>test select</div>')
  })

  it('should pass defaultOpen prop to DropdownMenuRoot', () => {
    const root = wrapper.findComponent({ name: 'SelectRoot' })
    expect(root.props('defaultOpen')).toBe(true)
  })

  it('should emit events correctly', () => {
    wrapper.vm.$emit('openChange', true)
    expect(wrapper.emitted('openChange')).toBeTruthy()
    expect(wrapper.emitted('openChange')?.[0]).toEqual([true])
  })
})

// more tests: https://github.com/unovue/radix-vue/blob/main/packages/radix-vue/src/Select/Select.test.ts
