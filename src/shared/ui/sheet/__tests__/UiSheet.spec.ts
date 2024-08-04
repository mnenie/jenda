import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import UiSheet from '../UiSheet.vue';

describe('UiSheet', () => {
  const wrapper = mount(UiSheet, {
    global: {
      stubs: {
        teleport: true
      }
    },
    props: {
      overlay: true,
      maxWidth: 450,
      transitionDuration: 0.35,
      overlayClickClose: true
    },
    slots: {
      header: 'sheet header',
      footer: 'sheet footer',
      default: 'test'
    }
  });

  it('should render correctly', async () => {
    // @ts-expect-error
    wrapper.vm.showSheet = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render slots correctly', () => {
    expect(wrapper.find('[class*="sheet_header"]').text()).toContain('sheet header');
    expect(wrapper.find('[class*="sheet_main"]').text()).toContain('test');
    expect(wrapper.find('[class*="sheet_footer"]').text()).toContain('sheet footer');
  });

  it('should open and close the sheet', async () => {
    wrapper.vm.open();
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[class*="sheet"]').attributes('aria-hidden')).toBe('false');

    wrapper.vm.close();
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[class*="sheet"]').attributes('aria-hidden')).toBe('true');
  });
});
