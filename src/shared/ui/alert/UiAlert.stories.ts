import type { Meta, StoryFn } from '@storybook/vue3';
import UiAlert from './UiAlert.vue';

export default {
  title: 'UiAlert',
  component: UiAlert,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'warning', 'success', 'important'],
      defaultValue: 'default'
    },
    closable: {
      defaultValue: true
    }
  }
} as Meta<typeof UiAlert>;

export const TestAlert: StoryFn<typeof UiAlert> = (args) => ({
  components: { UiAlert },
  setup() {
    return { args };
  },
  template: `
    <UiAlert v-bind="args" />
  `
});

export const TestAlertWithSlots: StoryFn<typeof UiAlert> = (args) => ({
  components: { UiAlert },
  setup() {
    return { args };
  },
  template: `
      <UiAlert v-bind="args">
        hello from alert
      </UiAlert>
    `
});
