import UiTextarea from './UiTextarea.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiTextarea',
  component: UiTextarea,
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    defaultValue: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof UiTextarea>

const Template: StoryFn<typeof UiTextarea> = (args) => {
  return {
    components: { UiTextarea },
    setup() {
      return { args }
    },
    template: '<UiTextarea v-bind="args" />',
  }
}

export const DefaultTextarea: StoryFn<typeof UiTextarea> = Template.bind({})
