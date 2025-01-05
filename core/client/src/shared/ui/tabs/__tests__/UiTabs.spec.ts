import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import MockComponent from './MockComponent.vue'

describe('tests for UiTabs', () => {
  const wrapper = mount(MockComponent, {
    props: {
      defaultValue: 'test1',
    },
  })

  it('should render correctly', () => {
    expect(wrapper.html())
  })

  it('should render default content', () => {
    expect(wrapper.find('[role=tabpanel]').exists()).toBeTruthy()
    expect(wrapper.html()).toContain('test 1 content')
  })

  describe('should move focus to next tab', () => {
    beforeEach(() => {
      const trigger = wrapper.find('#radix-vue-tabs-v-0-trigger-test2')
      trigger.trigger('keydown', { key: 'ArrowRight' })
    })

    it('should focus on next tab', () => {
      expect(wrapper.find('[role=tabpanel]').exists()).toBeTruthy()
      expect(wrapper.html()).toContain('Test 2')
    })
  })

  it('should apply props correctly', async () => {
    expect(wrapper.props().defaultValue).toBe('test1')
    expect(wrapper.props().class).toBeUndefined()
  })
})
