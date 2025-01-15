import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiForm from './MockComponent.vue'

describe('tests for UiForm', () => {
  it('should render correctly', () => {
    const wrapper = mount(UiForm)

    const label = wrapper.findComponent({ name: 'UiFormLabel' })
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('Label')

    const message = wrapper.findComponent({ name: 'UiFormMessage' })
    expect(message.exists()).toBe(true)
    expect(message.props('content')).toBe('test message')
  })
})

// more tests in stories
