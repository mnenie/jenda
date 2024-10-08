import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Login from '../LoginPage.vue';
import { useHead } from '@unhead/vue';

vi.mock('@unhead/vue', () => ({
  useHead: vi.fn()
}));

describe('tests for LoginPage.vue', () => {
  const wrapper = shallowMount(Login);

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should has correct head', () => {
    expect(useHead).toHaveBeenCalledWith({
      title: 'Jenda | Login'
    });
  });
});
