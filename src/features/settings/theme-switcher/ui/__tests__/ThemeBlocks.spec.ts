import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import LightBlock from '../LightBlock.vue';
import DarkBlock from '../DarkBlock.vue';
import SystemBlock from '../SystemBlock.vue';

describe('tests for theme blocks -> radio buttons', () => {
  it('should render correctly LightBlock.vue', () => {
    const wrapper = shallowMount(LightBlock);
    expect(wrapper.html());
  });
  it('should render correctly DarkBlock.vue', () => {
    const wrapper = shallowMount(DarkBlock);
    expect(wrapper.html());
  });
  it('should render correctly SystemBlock.vue', () => {
    const wrapper = shallowMount(SystemBlock);
    expect(wrapper.html());
  });
});
