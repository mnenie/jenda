import type { Meta, StoryFn } from '@storybook/vue3';
import UiCard from './UiCard.vue';

export default {
  title: 'UiCard',
  component: UiCard
} as Meta<typeof UiCard>;

export const TaskCard: StoryFn<typeof UiCard> = (args) => ({
  components: { UiCard },
  setup() {
    return { args };
  },
  template: `<UiCard v-bind="args">
    <div>MyCard</div>
    <div>TaskCard</div>
    <template #user>
        user +3
    </template>
  </UiCard>`
});
