import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import '@/shared/lib/vitest-utils/cookiesI18n-mock';
import i18n from '@/shared/lib/i18n';
import BoardPreviewCard from '../BoardPreviewCard.vue';

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn()
};

describe('tests for BoardPreviewCard.vue', () => {
  const wrapper = mount(BoardPreviewCard, {
    global: {
      plugins: [i18n],

      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'boards.card.date_updated': 'Date Updated (test)'
          };
          return translations[key];
        },
        $router: mockRouter
      }
    },
    props: {
      board: {
        _id: '0',
        name: 'test title',
        description: 'test description',
        users: []
      }
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should correctly works with i18n', () => {
    const date = wrapper.find('.bottom_part');
    expect(date.text()).toContain('Date Updated (test)');
  });

  it('should redirect to "/board/1" ', async () => {
    await wrapper.find('.active_board').trigger('click');
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('/board/1');
  });
});
