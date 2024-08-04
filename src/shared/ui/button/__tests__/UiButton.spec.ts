import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import UiButton from '../UiButton.vue';
import type { ButtonSize, ButtonType } from '../types';

describe('UiButton', () => {
  const wrapper = mount(UiButton, {
    props: {
      variant: 'default',
      size: 'md'
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html());
  });

  it('should have content at slot', () => {
    const _w = mount(UiButton, {
      slots: {
        default: 'ui button'
      }
    });
    expect(_w.html()).toMatchSnapshot();
  });

  it('should apply correct styles for variants', () => {
    const variants = ['default', 'secondary', 'destructive', 'ghost', 'outline', 'dashed'] as ButtonType[];

    variants.forEach((variant) => {
      const wrapper = mount(UiButton, {
        props: {
          variant,
          size: 'md'
        }
      });
      const button = wrapper.find('button');
      expect(button.attributes('class')).toContain(`${variant}`);
    });
  });

  it('should apply correct styles for size', () => {
    const sizes = ['lg', 'md', 'sm'] as ButtonSize[];
    sizes.forEach((size) => {
      const wrapper = mount(UiButton, {
        props: {
          variant: 'dashed',
          size
        }
      });
      const button = wrapper.find('button');
      expect(button.attributes('class')).toContain(`${size}`);
    });
  });
});
