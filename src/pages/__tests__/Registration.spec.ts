import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Registration from '../Registration.vue';
import { useHead } from '@unhead/vue';

vi.mock('@unhead/vue', () => ({
  useHead: vi.fn()
}));

describe('tests for Registration.vue', () => {
  const wrapper = shallowMount(Registration);

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should has correct head', () => {
    expect(useHead).toHaveBeenCalledWith({
      title: 'Jenda | Registration'
    });
  });
});
