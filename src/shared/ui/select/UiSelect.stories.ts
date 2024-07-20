import type { Meta, StoryFn } from '@storybook/vue3';
import UiSelect from './UiSelect.vue';
import type { Options } from './types';

export default {
  title: 'UiSelect',
  component: UiSelect,
  args: {
    options: [
      { name: 'Option 1', value: '1' },
      { name: 'Option 2', value: '2' }
    ] as Options[]
  }
} as Meta<typeof UiSelect>;

export const DefaultTagInput: StoryFn<typeof UiSelect> = (args) => ({
  components: { UiSelect },
  setup() {
    return { args };
  },
  template: `<UiSelect v-bind="args" />`
});
