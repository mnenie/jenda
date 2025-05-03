import UiCheckbox from './UiCheckbox.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiCheckbox',
  component: UiCheckbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof UiCheckbox>

const Template: StoryFn<typeof UiCheckbox> = (args) => {
  return {
    components: { UiCheckbox },
    setup() {
      return { args }
    },
    template: `<div class="[&>[role=checkbox]]:flex [&>[role=checkbox]]:items-center">
                <UiCheckbox v-model:checked="checked" v-bind="args" />
              </div>`,
  }
}

export const DefaultCheckbox: StoryFn<typeof UiCheckbox> = Template.bind({})

export const CheckboxWithVariant: StoryFn<typeof UiCheckbox> = Template.bind({})

CheckboxWithVariant.args = {
  variant: 'solid',
}
