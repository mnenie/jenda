import type { Meta, StoryFn } from '@storybook/vue3';
import UiSheet from './UiSheet.vue';

export default {
  title: 'UiSheet',
  component: UiSheet,
  argTypes: {
    overlay: {
      control: 'boolean',
      defaultValue: true
    },
    maxWidth: {
      control: { type: 'number' },
      defaultValue: 640
    },
    clickToClose: {
      control: 'boolean',
      defaultValue: true
    }
  }
} as Meta<typeof UiSheet>;

export const DefaultProgressBar: StoryFn<typeof UiSheet> = (args) => ({
  components: { UiSheet },
  setup() {
    return { args };
  },
  template: '<UiSheet v-bind="args" />'
});
