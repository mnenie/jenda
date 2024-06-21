import type { Meta, StoryFn } from '@storybook/vue3';
import UiBadge from './UiBadge.vue';

export default {
  title: 'UiBadge',
  component: UiBadge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline'],
      defaultValue: 'default'
    }
  }
} as Meta<typeof UiBadge>;

export const DefaultBadge: StoryFn<typeof UiBadge> = (args) => ({
  components: { UiBadge },
  setup() {
    return { args };
  },
  template: '<UiBadge v-bind="args">13</UiBadge>'
});
