import type { Meta, StoryFn } from '@storybook/vue3';
import UiSelect from './UiSelect.vue';

export default {
  title: 'UiSelect',
  component: UiSelect,
  args: {
    options: ['English', 'Русский', '简体中文'],
    modelValue: 'English'
  }
} as Meta<typeof UiSelect>;

export const DefaultTagInput: StoryFn<typeof UiSelect> = (args) => ({
  components: { UiSelect },
  setup() {
    return { args };
  },
  template: `<UiSelect v-bind="args" />`
});
