import { beforeEach, describe, expect, it } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import TestCollapsible from './MockComponent.vue'

describe('tests for UiCollapsible', () => {
  let wrapper: VueWrapper<InstanceType<typeof TestCollapsible>>
  beforeEach(() => {
    wrapper = mount(TestCollapsible, {
      props: {
        defaultOpen: true,
      },
    })
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should emit events correctly', () => {
    wrapper.vm.$emit('update:open', true)
    expect(wrapper.emitted('update:open')).toBeTruthy()
    expect(wrapper.emitted('update:open')?.[0]).toEqual([true])
  })
})
