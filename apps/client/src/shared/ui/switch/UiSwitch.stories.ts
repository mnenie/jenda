import UiSwitch from './UiSwitch.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiSwitch',
  component: UiSwitch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof UiSwitch>

const Template: StoryFn<typeof UiSwitch> = (args) => {
  return {
    components: { UiSwitch },
    setup() {
      return { args }
    },
    template: '<UiSwitch v-bind="args" />',
  }
}

export const DefaultSwitch: StoryFn<typeof UiSwitch> = Template.bind({})

DefaultSwitch.args = {
  variant: 'default',
  thumb: 'default',
}

export const SolidSwitch: StoryFn<typeof UiSwitch> = Template.bind({})

SolidSwitch.args = {
  variant: 'solid',
  thumb: 'solid',
}
