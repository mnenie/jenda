import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import UserAvatar from '../UserAvatar.vue';

describe('tests for UserAvatar.vue', () => {
  const wrapper = shallowMount(UserAvatar, {
    slots: {
      default: 'user'
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
