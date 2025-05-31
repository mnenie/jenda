import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MockComponent from './MockComponent.vue'

describe('tests for UiCombobox', () => {
  const wrapper = mount(MockComponent, {
    props: {
      open: true,
      modelValue: ['test1', 'test2'],
    },
  })

  beforeEach(async () => {
    await wrapper.setProps({
      filterFunction: (list: any[], term: string) => {
        return list.filter(i => i.toLowerCase().includes(term.toLowerCase()))
      },
    })
  })

  it('should filter items', async () => {
    const input = wrapper.findComponent({ name: 'UiComboboxInput' })
    await input.setValue('test')

    const selection = wrapper.findAll('[data-highlighted]').filter(i => i.attributes('style') !== 'display: none;')
    expect(selection.length).toBe(1)
    expect(selection[0].element.innerHTML).contains('test')
  })

  it('should work props/emits correctly', async () => {
    wrapper.findComponent({ name: 'UiComboboxItem' }).trigger('click')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()

    const selectedItems = wrapper.props().modelValue
    expect(selectedItems).toEqual(['test1', 'test2'])
  })
})

// more tests: https://github.com/unovue/radix-vue/blob/main/packages/radix-vue/src/Combobox/Combobox.test.ts
