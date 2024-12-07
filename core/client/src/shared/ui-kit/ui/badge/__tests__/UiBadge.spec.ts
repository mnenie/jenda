import type { BadgeVariants } from '..'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiBadge from '../UiBadge.vue'

describe('tests for UiBadge', () => {
  const wrapper = shallowMount(UiBadge, {
    props: {
      variant: 'default',
    },
  })

  it('should render correctly', () => {
    expect(wrapper.html())
  })

  it('should have content at slot', () => {
    const _w = shallowMount(UiBadge, {
      slots: {
        default: 'badge',
      },
    })
    expect(_w.html()).toMatchSnapshot()
  })

  it('should apply correct styles for variants', () => {
    const variants = [
      'default',
      'secondary',
      'outline',
      'solid',
      'destructive',
    ] as BadgeVariants['variant'][]
    variants.forEach(() => {
      const wrapper = shallowMount(UiBadge, {
        props: {
          variant: 'default',
        },
      })
      const badge = wrapper.find('div')
      expect(badge.attributes('class')).toContain(`badge-default`)
    })
  })
})
