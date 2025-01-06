import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MockComponent from './MockComponent.vue'

describe('tests for UiCommand', () => {
  const wrapper = mount(MockComponent, {
    props: {
      open: true,
      modelValue: ['value1', 'value2'],
    },
  })

  beforeEach(async () => {
    await wrapper.setProps({
      filterFunction: (list: any[], term: string) => {
        return list.filter(i => i.toLowerCase().includes(term.toLowerCase()))
      },
    })
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should filter items', async () => {
    const input = wrapper.findComponent({ name: 'UiCommandInput' })
    await input.setValue('te')

    const selection = wrapper.findAll('[data-highlighted]').filter(i => i.attributes('style') !== 'display: none;')
    expect(selection.length).toBe(1)
    expect(selection[0].element.innerHTML).contains('test item')
  })

  it('should work props/emits correctly', async () => {
    wrapper.findComponent({ name: 'UiCommandItem' }).trigger('click')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()

    const selectedItems = wrapper.props().modelValue
    expect(selectedItems).toEqual(['value1', 'value2'])
  })
})

// more tests: https://github.com/unovue/radix-vue/blob/main/packages/radix-vue/src/Combobox/Combobox.test.ts
