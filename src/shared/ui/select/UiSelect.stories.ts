import type { Meta, StoryFn } from '@storybook/vue3';
import UiSelect from './UiSelect.vue';
import type { Options } from './types';

export default {
  title: 'UiSelect',
  component: UiSelect,
  args: {
    modelValue: 'Evan You',
    options: [
      { name: 'Evan You', value: 'evan you' },
      { name: 'Anthony Fu', value: 'anthony fu' },
      { name: 'Daniel Roe', value: 'daniel roe' }
    ] as Options[]
  },
  argTypes: {
    modelValue: {
      control: { type: 'select', options: ['Evan You', 'Anthony Fu', 'Daniel Roe'] }
    },
    as: {
      control: { type: 'select', options: ['btn', 'select'] }
    }
  }
} as Meta<typeof UiSelect>;

export const DefaultSelect: StoryFn<typeof UiSelect> = (args) => ({
  components: { UiSelect },
  setup() {
    return { args };
  },
  template: `<div style="padding: 100px"><UiSelect v-model="args.modelValue" v-bind="args" /></div>`
});
