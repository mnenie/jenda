import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import UiDropdown from '../UiDropdown.vue';

describe('UiDropdown', () => {
  const wrapper = mount(UiDropdown, {
    slots: {
      trigger: '<div>trigger</div>',
      header: '<div>header</div>',
      content: '<div>content</div>'
    }
  });

  it('should render correctly', async () => {
    //@ts-expect-error instance
    wrapper.vm.isOpen = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('toggles dropdown on trigger', async () => {
    // TODO: think about changing it to $style (vitest.config.ts -> classes())
    const trigger = wrapper.find('[class*="wrapper"]');
    expect(trigger.exists()).toBe(true);
    //@ts-expect-error instance
    wrapper.vm.isOpen = false;

    trigger.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[class*="inside"]').exists()).toBe(true);

    trigger.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[class*="inside"]').exists()).toBe(false);
  });

  it('should close dropdown when we clicking outside', () => {
    const _w = mount(UiDropdown, {
      attachTo: document.body,
      slots: {
        trigger: '<div>trigger</div>',
        header: '<div>header</div>',
        content: '<div>content</div>'
      }
    });
    //@ts-expect-error instance
    _w.vm.isOpen = false;

    document.body.click();
    expect(_w.find('.inside').exists()).toBe(false);
  });
});
