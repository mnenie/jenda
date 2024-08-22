import { describe, it, expect, vi } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import WorkSpace from '../WorkSpace.vue';
import i18n from '@/shared/lib/i18n';
import { RouteNames } from '@/shared/config/consts';
import { h } from 'vue';
import { SquareDashedKanban } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

vi.mock('vue-router');

vi.mock('@vueuse/integrations/useCookies', () => {
  return {
    useCookies: () => ({
      get(key: string) {
        return key === 'i18n' ? 'en-US' : undefined;
      }
    })
  };
});

describe('tests for WorkSpace.vue', () => {
  //@ts-expect-error mock types
  useRoute.mockReturnValue({
    name: RouteNames.boards
  });
  const wrapper = mount(WorkSpace, {
    global: {
      plugins: [i18n],
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'sidebar.boards': 'boards',
            'sidebar.section': 'workspace'
          };
          return translations[key];
        }
      },
      stubs: {
        RouterLink: RouterLinkStub
      },
      directives: {
        tooltip() {}
      }
    },
    props: {
      isExpanded: true,
      links: [{ id: 0, title: 'boards', pathName: RouteNames.boards, icon: h(SquareDashedKanban) }]
    }
  });

  it('should be render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be redirect with RouterLink correctly', () => {
    expect(wrapper.findComponent(RouterLinkStub).props('to')).toEqual({
      name: RouteNames.boards
    });
  });
});
