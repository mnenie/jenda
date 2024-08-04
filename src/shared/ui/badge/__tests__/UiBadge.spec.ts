import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiBadge from '../UiBadge.vue';
import type { BadgeType } from '../types';

describe('UiBadge', () => {
  const wrapper = mount(UiBadge, {
    props: {
      variant: 'default'
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html());
  });

  it('should have content at slot', () => {
    const _w = mount(UiBadge, {
      slots: {
        default: 'badge'
      }
    });
    expect(_w.html()).toMatchSnapshot();
  });

  it('should apply correct styles for variants', () => {
    const variants = ['default', 'secondary', 'outline'] as BadgeType[];
    variants.forEach((variant) => {
      const wrapper = mount(UiBadge, {
        props: {
          variant
        }
      });
      const badge = wrapper.find('div');
      expect(badge.attributes('class')).toContain(`${variant}`);
    });
  });
});
