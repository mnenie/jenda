import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
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
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render slots correctly', () => {
    expect(wrapper.find('.sheet_header').text()).toContain('sheet header');
    expect(wrapper.find('.sheet_main').text()).toContain('test');
    expect(wrapper.find('.sheet_footer').text()).toContain('sheet footer');
  });

  it('should open/close the sheet', async () => {
    wrapper.vm.open();
    await nextTick();
    expect(wrapper.find('.sheet').attributes('aria-hidden')).toBe('false');

    wrapper.vm.close();
    await nextTick();
    expect(wrapper.find('.sheet').attributes('aria-hidden')).toBe('true');
  });
});
