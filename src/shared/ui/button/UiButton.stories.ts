import type { Meta, StoryFn } from '@storybook/vue3';
import UiButton from './UiButton.vue';
import { CircleHelp } from 'lucide-vue-next';

export default {
  title: 'UiButton',
  component: UiButton,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'ghost', 'secondary', 'destructive', 'outline'],
      defaultValue: 'default'
    }
  }
} as Meta<typeof UiButton>;

export const DefaultButton: StoryFn<typeof UiButton> = (args) => ({
  components: { UiButton },
  setup() {
    return { args };
  },
  template: `
    <UiButton v-bind="args">Get Started</UiButton>
  `
});

export const ButtonWithIcon: StoryFn<typeof UiButton> = (args) => ({
  components: { UiButton, CircleHelp },
  setup() {
    return { args };
  },
  template: `
    <UiButton v-bind="args">
      <CircleHelp :size="18" />
      Download
    </UiButton>
  `
});
