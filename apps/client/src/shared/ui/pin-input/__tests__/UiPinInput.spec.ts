import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiPinInput from './MockComponent.vue'

describe('tests for UiPinInput', () => {
  const wrapper = mount(UiPinInput, {
    props: {
      placeholder: '○',
      type: 'text',
      modelValue: ['', '', '', '', ''],
    },
  })
  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should emit the correct event on input', async () => {
    wrapper.vm.$emit('update:modelValue', ['1', '2', '3'])
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['1', '2', '3']])
  })

  it('should emit "complete" event', async () => {
    const inputs = wrapper.findAll('.pin-input-input')
    for (let i = 0; i < inputs.length; i++) {
      await inputs[i].setValue((i + 1).toString())
    }
    expect(wrapper.emitted('complete')).toBeTruthy()
    expect(wrapper.emitted('complete')?.[0]).toEqual([['1', '2', '3', '4', '5']])
  })
})
