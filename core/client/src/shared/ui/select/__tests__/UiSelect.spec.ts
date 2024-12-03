import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import UiSelect from '../UiSelect.vue'

describe('uiSelect', () => {
  const wrapper = mount(UiSelect, {
    props: {
      modelValue: 'test',
      options: [],
    },
  })

  it('should render correctly', async () => {
    // @ts-expect-error instance
    wrapper.vm.open = true
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('toggles select on button(trigger)', async () => {
    const trigger = wrapper.find('.selected')
    expect(trigger.exists()).toBe(true)
    // @ts-expect-error instance
    wrapper.vm.open = false

    trigger.trigger('click')
    await nextTick()
    expect(wrapper.find('.items').exists()).toBe(true)
  })

  it('should close select when we clicking outside', () => {
    const _w = mount(UiSelect, {
      attachTo: document.body,
    })
    // @ts-expect-error instance
    _w.vm.open = false

    document.body.click()
    expect(_w.find('.items').exists()).toBe(false)
  })
})
