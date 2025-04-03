import UiInput from './UiInput.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiInput',
  component: UiInput,
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number', 'email'],
      defaultValue: 'text',
    },
    placeholder: {
      control: { type: 'text' },
    },
    leading: {
      control: { type: 'text' },
    },
    trailing: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled'],
      defaultValue: 'default',
    },
  },
} as Meta<typeof UiInput>

const Template: StoryFn<typeof UiInput> = (args) => {
  return {
    components: { UiInput },
    setup() {
      return { args }
    },
    template: '<UiInput v-bind="args" />',
  }
}

export const DefaultInput: StoryFn<typeof UiInput> = Template.bind({})

export const FilledInput: StoryFn<typeof UiInput> = Template.bind({})

FilledInput.args = {
  variant: 'filled',
}

export const SlottedInput: StoryFn<typeof UiInput> = Template.bind({})

SlottedInput.args = {
  variant: 'default',
  leading: 'lucide:search',
}
