import UiButton from './UiButton.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiButton',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'default', 'lg'],
      defaultValue: 'md',
    },
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'ghost',
        'secondary',
        'destructive',
        'outline',
        'dashed',
      ],
      defaultValue: 'default',
    },
  },
} as Meta<typeof UiButton>

const Template: StoryFn<typeof UiButton> = (args) => {
  return {
    components: { UiButton, File },
    setup() {
      return { args }
    },
    template: `
    <UiButton v-bind="args">
        <template v-if="${'leading' in args}" v-slot:leading>${args.leading}</template>
        <template v-if="${'default' in args}" v-slot>${args.default}</template>
        <template v-if="${'trailing' in args}" v-slot:trailing>${args.trailing}</template>
    </UiButton>
  `,
  }
}

export const DefaultButton: StoryFn<typeof UiButton> = Template.bind({})

DefaultButton.args = {
  size: 'default',
  variant: 'default',
  default: `Get Started`,
}

export const ButtonExampleProps: StoryFn<typeof UiButton> = Template.bind({})

ButtonExampleProps.args = {
  size: 'sm',
  variant: 'solid',
  default: `Create task`,
}

export const SlottedButton: StoryFn<typeof UiButton> = Template.bind({})

SlottedButton.args = {
  size: 'default',
  variant: 'default',
  leading: `<div i-hugeicons-cloud-download />`,
  default: `
      Download
    `,
}
