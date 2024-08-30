import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import NotFound from '../NotFoundPage.vue';
import { useHead } from '@unhead/vue';

vi.mock('@unhead/vue', () => ({
  useHead: vi.fn()
}));

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn()
};

describe('tests for NotFoundPage.vue', () => {
  const wrapper = shallowMount(NotFound, {
    global: {
      mocks: {
        $router: mockRouter
      }
    }
  });

  it('should be render correctly', () => {
    expect(wrapper.html());
  });

  it('should has correct head', () => {
    expect(useHead).toHaveBeenCalledWith({
      title: '404 | Not Found :/'
    });
  });

  it('should redirect correctly', async () => {
    await wrapper.findComponent({ name: 'UiButton' }).trigger('click');
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'boards' });
  });
});
