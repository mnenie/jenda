import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import UiCard from '../UiCard.vue';

describe('UiCard', () => {
  const wrapper = mount(UiCard, {
    slots: {
      default: 'card',
      user: `<div>users 👥</div>`
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
