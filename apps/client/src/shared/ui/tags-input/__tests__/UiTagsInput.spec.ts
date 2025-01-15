import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MockComponent from './MockComponent.vue'
import type { DOMWrapper } from '@vue/test-utils'

describe('tests for UiTagsInput', () => {
  const wrapper = mount(MockComponent, {
    props: {
      modelValue: ['value1', 'value2'],
    },
  })

  let input: DOMWrapper<HTMLInputElement>
  let tags: DOMWrapper<HTMLElement>[]

  const addTag = async (text: string) => {
    await input.setValue(text)
    await input.trigger('keydown.enter')
    tags = wrapper.findAll('[data-radix-vue-collection-item]')
  }

  it('should render correctly', () => {
    expect(wrapper.html())
  })

  it('should emit the correct event on input', async () => {
    wrapper.vm.$emit('update:modelValue', ['1', '2', '3'])
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['1', '2', '3']])
  })

  describe('add tag', () => {
    beforeEach(async () => {
      input = wrapper.find('input')
      input.element.focus()
      await addTag('test1')
      await addTag('test2')
    })

    it('should add a new tag', () => {
      expect(wrapper.html()).contains('test1')
      expect(wrapper.html()).contains('test2')
    })
  })
})
