import type { Meta, StoryFn } from '@storybook/vue3';
import UiRadioGroupItem from './UiRadioGroupItem.vue';
import UiRadioGroupContainer from './UiRadioGroupContainer.vue';

export default {
  title: 'UiRadioGroup',
  component: UiRadioGroupItem
} as Meta<typeof UiRadioGroupItem>;

export const DefaultUiRadioGroup: StoryFn<typeof UiRadioGroupItem> = (args) => ({
  components: { UiRadioGroupItem, UiRadioGroupContainer },
  setup() {
    return { args };
  },
  template: `
    <UiRadioGroupContainer>
      <UiRadioGroupItem v-model="args.modelValue" value="light"/>
      <UiRadioGroupItem v-model="args.modelValue"  value="dark" />
    </UiRadioGroupContainer>
  `
});
