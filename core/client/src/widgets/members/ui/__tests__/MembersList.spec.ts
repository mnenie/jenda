import { UserAvatar } from '@/entities/user'
import { UiBadge } from '@/shared/ui'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import MembersList from '../MembersList.vue'

describe('tests for MembersList.vue', () => {
  const wrapper = shallowMount(MembersList, {
    props: {
      members: [
        {
          _id: '1',
          email: 'test@gmail.com',
        },
      ],
    },
  })

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render subcomponents', () => {
    expect(wrapper.findComponent(UiBadge).exists()).toBe(true)
    expect(wrapper.findComponent(UserAvatar).exists()).toBe(true)
  })
})
