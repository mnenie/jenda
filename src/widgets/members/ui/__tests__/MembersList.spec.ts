import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MembersList from '../MembersList.vue';
import { UiBadge } from '@/shared/ui';
import { UserAvatar } from '@/entities/user';

describe('tests for MembersList.vue', () => {
  const wrapper = shallowMount(MembersList, {
    props: {
      members: [
        {
          _id: '1',
          email: 'test@gmail.com'
        }
      ]
    }
  });

  it('it should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render subcomponents', () => {
    expect(wrapper.findComponent(UiBadge).exists()).toBe(true);
    expect(wrapper.findComponent(UserAvatar).exists()).toBe(true);
  });
});
