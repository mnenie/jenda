import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiCheckbox from '../UiCheckbox.vue'
import type { CheckboxVariants } from '..'

describe('test for UiCheckbox', () => {
  // with <primitive-stub />
  it('should render correctly', () => {
    const wrapper = shallowMount(UiCheckbox, {
      props: {
        checked: true,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should apply correct styles for checkbox variants', () => {
    const variants = [
      'default',
      'solid',
    ] as CheckboxVariants['variant'][]

    variants.forEach(() => {
      const wrapper = mount(UiCheckbox, {
        props: {
          variant: 'solid',
          checked: true,
        },
      })
      const checkbox = wrapper.find('.checkbox')
      expect(checkbox.exists()).toBe(true)
      expect(checkbox.attributes('class')).toContain('checkbox-solid')
    })
  })
})
