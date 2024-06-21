import type { Meta, StoryFn } from '@storybook/vue3';
import UiInput from './UiInput.vue';

export default {
  title: 'UiInput',
  component: UiInput,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password'],
      defaultValue: 'text'
    }
  }
} as Meta<typeof UiInput>;

export const DefaultInput: StoryFn<typeof UiInput> = (args) => ({
  components: { UiInput },
  setup() {
    return { args };
  },
  template: '<UiInput v-bind="args" />'
});
