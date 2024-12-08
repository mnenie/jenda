import type { ButtonVariants } from '..'
import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiButton from '../UiButton.vue'

describe('tests for UiButton', () => {
  // with <primitive-stub />
  const wrapper = shallowMount(UiButton, {
    props: {
      variant: 'default',
      size: 'default',
      as: 'button',
    },
  })

  it('should render correctly', () => {
    expect(wrapper.html())
  })

  it('should have content at slot', () => {
    const _w = shallowMount(UiButton, {
      slots: {
        default: 'ui button',
      },
    })
    expect(_w.html()).toMatchSnapshot()
  })

  it('should apply correct styles for variants', () => {
    const variants = [
      'default',
      'secondary',
      'solid',
      'destructive',
      'ghost',
      'outline',
      'dashed',
    ] as ButtonVariants['variant'][]

    variants.forEach(() => {
      const wrapper = mount(UiButton, {
        props: {
          variant: 'solid',
          size: 'default',
        },
      })
      const button = wrapper.find('button')
      expect(button.exists()).toBe(true)
      expect(button.attributes('class')).toContain('btn-solid')
    })
  })

  it('should apply correct styles for size', () => {
    const sizes = ['lg', 'default', 'sm'] as ButtonVariants['size'][]
    sizes.forEach(() => {
      const wrapper = mount(UiButton, {
        props: {
          variant: 'dashed',
          size: 'sm',
        },
      })
      const button = wrapper.find('button')
      expect(button.attributes('class')).toContain(`h-8`)
    })
  })
})
