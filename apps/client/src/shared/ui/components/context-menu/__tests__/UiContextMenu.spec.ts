import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import ContextMenu from './MockComponent.vue'
import type { VueWrapper } from '@vue/test-utils'

describe('tests for UiContextMenu', () => {
  let wrapper: VueWrapper<InstanceType<typeof ContextMenu>>

  beforeEach(() => {
    wrapper = mount(ContextMenu, {
      attachTo: document.body,
    })
  })

  it('should render trigger area', () => {
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.html()).toContain('Right click')
  })

  it('should right click to open context menu', async () => {
    await wrapper.find('span').trigger('click.right')
    wrapper.vm.$emit('update:open', true)
    await nextTick()
    expect(wrapper.emitted('update:open')).toBeTruthy()
    expect(wrapper.emitted('update:open')?.[0]).toEqual([true])
  })
})
