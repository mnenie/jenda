import type { Meta, StoryFn } from '@storybook/vue3';
import UiTagInput from './UiTagInput.vue';

export default {
  title: 'UiTagInput',
  component: UiTagInput,
  args: {
    tags: ['so', 'dizzo']
  }
} as Meta<typeof UiTagInput>;

export const DefaultTagInput: StoryFn<typeof UiTagInput> = (args) => ({
  components: { UiTagInput },
  setup() {
    return { args };
  },
  template: `<UiTagInput v-bind="args" />`
});
