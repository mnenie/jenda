import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import UiInput from '../UiInput.vue';

describe('UiInput', () => {
  const wrapper = mount(UiInput, {
    props: {
      modelValue: 'value',
      placeholder: 'jenda',
      type: 'text'
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should update value with @input', async () => {
    const input = wrapper.find('input');
    await input.setValue('new');
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new']);
  });
});