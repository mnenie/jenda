import {
  UiButton,
  UiFormField,
  UiFormLabel,
  UiFormMessage,
  UiInput,
} from '..'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiForm',
  tags: ['autodocs'],
} as Meta<typeof UiFormField>

const Template: StoryFn<typeof UiFormField> = (args) => {
  return {
    components: { UiFormField, UiFormLabel, UiFormMessage, UiButton, UiInput },
    setup() {
      return { args }
    },
    template: `
    <UiFormField v-bind="args">
      <template v-if="${'default' in args}" v-slot>${args.default}</template>
      <UiButton>Test</UiButton>
    </UiFormField>
    `,
  }
}

export const DefaultFormField: StoryFn<typeof UiFormField> = Template.bind({})

DefaultFormField.args = {
  default: `
  <div class="grid gap-3">
    <UiFormLabel for="test">
      Label
    </UiFormLabel>
    <UiInput id="test" />
    <UiFormMessage content="test message" />
  </div>
  `,
}

export const WarningFormField: StoryFn<typeof UiFormField> = Template.bind({})

WarningFormField.args = {
  default: `
    <div class="grid gap-3">
    <UiFormLabel for="test">
      Label
    </UiFormLabel>
    <UiInput id="test" />
    <UiFormMessage content="test message" type="warning" />
  </div>
  `,
}
