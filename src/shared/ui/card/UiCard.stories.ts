import type { Meta, StoryFn } from '@storybook/vue3';
import UiCard from './UiCard.vue';

export default {
  title: 'UiCard',
  component: UiCard
} as Meta<typeof UiCard>;

const Template: StoryFn<typeof UiCard> = (args) => ({
  components: { UiCard },
  setup() {
    return { args };
  },
  template: `<UiCard v-bind="args">
    <template v-if="${'user' in args}" v-slot:user>${args.user}</template> 
    <template v-if="${'default' in args}" v-slot>${args.default}</template>
  </UiCard>`
});

export const DefaultCard: StoryFn<typeof UiCard> = Template.bind({});

DefaultCard.args = {
  default: `
  <p class="text-xl">Card Example</p>
  <p class="text-sm">use to display content in a flexible container component.</p>`
};
