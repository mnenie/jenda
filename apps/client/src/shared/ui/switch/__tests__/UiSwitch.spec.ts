import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiSwitch from '../UiSwitch.vue'
import type { SwitchVariants } from '..'

describe('tests for UiSwitch', () => {
  const wrapper = mount(UiSwitch, {
    props: {
      checked: false,
      disabled: false,
      variant: 'solid',
    },
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should update value with update:checked', async () => {
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.emitted('update:checked')).toBeTruthy()
  })

  it('should apply correct styles for variants', () => {
    const variants = [
      'default',
      'solid',
    ] as SwitchVariants['variant'][]

    variants.forEach(() => {
      const _switch = wrapper.find('.switch')
      expect(_switch.exists()).toBe(true)
      expect(_switch.attributes('class')).toContain('switch-solid')
    })
  })
})
