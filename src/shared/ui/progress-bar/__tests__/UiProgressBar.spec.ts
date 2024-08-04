import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import UiProgressBar from '../UiProgressBar.vue';

describe('UiProgressBar', () => {
  const wrapper = mount(UiProgressBar);

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
