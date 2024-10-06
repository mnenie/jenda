import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import UiAlert from '../UiAlert.vue';
import { nextTick } from 'vue';

describe('UiAlert', () => {
  const wrapper = shallowMount(UiAlert, {
    props: {
      variant: 'default'
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html());
  });

  it('should have content at slot and render x icon', async () => {
    const _w = shallowMount(UiAlert, {
      slots: {
        default: 'hello from alert'
      },
      props: {
        closable: true
      }
    });
    await nextTick();
    expect(_w.html()).toMatchSnapshot();
  });
});
