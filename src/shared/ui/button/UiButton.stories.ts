import type { Meta, StoryFn } from '@storybook/vue3';
import UiButton from './UiButton.vue';

export default {
  title: 'test button',
  component: UiButton
} as Meta<typeof UiButton>;

export const DefaultButton: StoryFn<typeof UiButton> = (args) => ({
  components: { UiButton },
  setup() {
    return { args };
  },
  template: `
    <UiButton v-bind="args">Button</UiButton>
  `
});
