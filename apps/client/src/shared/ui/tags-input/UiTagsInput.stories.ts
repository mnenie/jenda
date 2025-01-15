import {
  UiTagsInput,
  UiTagsInputInput,
  UiTagsInputItem,
  UiTagsInputItemDelete,
  UiTagsInputItemText,
} from '..'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiTagsInput',
  component: UiTagsInput,
  argTypes: {
    modelValue: {
      control: 'object',
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof UiTagsInput>

const Template: StoryFn<typeof UiTagsInput> = (args) => {
  return {
    components: {
      UiTagsInput,
      UiTagsInputInput,
      UiTagsInputItem,
      UiTagsInputItemDelete,
      UiTagsInputItemText,
    },
    setup() {
      return { args }
    },
    template: `
    <UiTagsInput
      v-bind="args"
    >
      <UiTagsInputItem v-for="item in modelValue" :key="item" :value="item">
        <UiTagsInputItemText />
        <UiTagsInputItemDelete />
      </UiTagsInputItem>

      <UiTagsInputInput placeholder="Test..." />
    </UiTagsInput>
    `,
  }
}

export const DefaultTagsInput: StoryFn<typeof UiTagsInput> = Template.bind({})

DefaultTagsInput.args = {
  modelValue: ['test', 'test2'],
}

export const DisabledTagsInput: StoryFn<typeof UiTagsInput> = Template.bind({})

DisabledTagsInput.args = {
  disabled: true,
  modelValue: ['test', 'test2'],
}
