import type { Meta, StoryFn } from '@storybook/vue3';
import UiButton from './UiButton.vue';
import { File } from '@/shared/assets/icons';

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
      options: ['default', 'ghost', 'secondary', 'destructive', 'outline', 'dashed'],
      defaultValue: 'default'
    }
  }
} as Meta<typeof UiButton>;

const Template: StoryFn<typeof UiButton> = (args) => {
  return {
    components: { UiButton, File },
    setup() {
      return { args };
    },
    template: `
    <UiButton v-bind="args">
        <template v-if="${'leading' in args}" v-slot:leading>${args.leading}</template> 
        <template v-if="${'default' in args}" v-slot>${args.default}</template>
        <template v-if="${'trailing' in args}" v-slot:trailing>${args.trailing}</template>
    </UiButton>
  `
  };
};

export const DefaultButton: StoryFn<typeof UiButton> = Template.bind({});

DefaultButton.args = {
  size: 'md',
  variant: 'default',
  default: `Get Started`
};

export const ButtonExampleProps: StoryFn<typeof UiButton> = Template.bind({});

ButtonExampleProps.args = {
  size: 'sm',
  variant: 'destructive',
  default: `Delete`
};

export const SlottedButton: StoryFn<typeof UiButton> = Template.bind({});

SlottedButton.args = {
  size: 'md',
  variant: 'default',
  leading: `<File style="width: 16px; height: 16px;" />`,
  default: `
      Download
    `
};
