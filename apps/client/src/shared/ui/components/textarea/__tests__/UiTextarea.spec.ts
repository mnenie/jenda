import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiTextarea from '../UiTextarea.vue'

describe('tests for UiTextarea', () => {
  const wrapper = shallowMount(UiTextarea, {
    props: {
      modelValue: 'test',
      defaultValue: 'test value',
    },
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should update value with @input', async () => {
    const input = wrapper.find('textarea')
    await input.setValue('new')
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new'])
  })
})
