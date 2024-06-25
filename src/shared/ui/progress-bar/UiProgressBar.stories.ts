import type { Meta, StoryFn } from '@storybook/vue3';
import UiProgressBar from './UiProgressBar.vue';

export default {
  title: 'UiProgressBar',
  component: UiProgressBar,
  argTypes: {
    progress: {
      control: 'number',
      defaultValue: 5
    }
  }
} as Meta<typeof UiProgressBar>;

export const DefaultProgressBar: StoryFn<typeof UiProgressBar> = (args) => ({
  components: { UiProgressBar },
  setup() {
    return { args };
  },
  template: '<UiProgressBar v-bind="args" />'
});
