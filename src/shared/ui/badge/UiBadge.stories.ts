import type { Meta, StoryFn } from '@storybook/vue3';
import UiBadge from './UiBadge.vue';

export default {
  title: 'UiBadge',
  component: UiBadge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline']
    }
  }
} as Meta<typeof UiBadge>;

const Template: StoryFn<typeof UiBadge> = (args) => {
  return {
    components: { UiBadge },
    setup() {
      return { args };
    },
    template: `
    <UiBadge v-bind="args">
        <template v-if="${'default' in args}" v-slot>${args.default}</template>
    </UiBadge>
  `
  };
};

export const DefaultBadge: StoryFn<typeof UiBadge> = Template.bind({});

DefaultBadge.args = {
  variant: 'default',
  default: `Badge`
};

export const BadgeExampleProps: StoryFn<typeof UiBadge> = Template.bind({});

BadgeExampleProps.args = {
  variant: 'outline',
  default: `new`
};
