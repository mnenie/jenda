import type { Meta, StoryFn } from '@storybook/vue3'
import UiInput from './UiInput.vue'

export default {
  title: 'UiInput',
  component: UiInput,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number', 'email'],
      defaultValue: 'text',
    },
    placeholder: {
      control: { type: 'text' },
    },
    modelValue: {
      control: { type: 'text' },
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

DefaultInput.args = {
  placeholder: 'Type here',
  type: 'text',
}

export const PaswordInput: StoryFn<typeof UiInput> = Template.bind({})

PaswordInput.args = {
  placeholder: 'Enter your password',
  type: 'password',
}
