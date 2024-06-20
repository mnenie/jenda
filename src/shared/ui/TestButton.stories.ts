import type { Meta, StoryFn } from '@storybook/vue3';
import TestButton from './TestButton.vue';

export default {
  title: 'test button',
  component: TestButton
} as Meta<typeof TestButton>;

export const DefaultButton: StoryFn<typeof TestButton> = (args) => ({
  components: { TestButton },
  setup() {
    return { args };
  },
  template: `
    <TestButton v-bind="args">Button</TestButton>
  `
});
