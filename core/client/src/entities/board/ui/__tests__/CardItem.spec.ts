import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CardItem from '../CardItem.vue'

describe('tests for CardItem.vue', () => {
  const wrapper = mount(CardItem, {
    props: {
      card: {
        _id: '0',
        title: 'Test Card',
        priority: 'low',
        users: [],
        chat: true,
        chatCount: 2,
        tags: [{ _id: '0', name: 'test' }],
      },
    },
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should has correct number of tags', () => {
    const tags = wrapper.findAll('.tags > .badge')
    expect(tags.length).toBe(1)
    expect(tags[0].text()).toBe('test')
  })

  it('should has correct chat counts', () => {
    const chat = wrapper.find('.messages > span')
    expect(chat.text()).toBe('2')
  })
})
