import {
  UiPinInput,
  UiPinInputGroup,
  UiPinInputInput,
  UiPinInputSeparator,
} from '..'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiPinInput',
  component: UiPinInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof UiPinInput>

const Template: StoryFn<typeof UiPinInput> = (args) => {
  return {
    components: { UiPinInput, UiPinInputGroup, UiPinInputInput, UiPinInputSeparator },
    setup() {
      return { args }
    },
    template: `
    <UiPinInput
      id="pin-input"
      v-bind="args"
    >
       <template v-if="${'default' in args}" v-slot>${args.default}</template>
    </UiPinInput>
    `,
  }
}

export const DefaultPinInput: StoryFn<typeof UiPinInput> = Template.bind({})

DefaultPinInput.args = {
  default: `
    <UiPinInputGroup>
      <UiPinInputInput
        v-for="(id, index) in 5"
        :key="id"
        :index="index"
      />
    </UiPinInputGroup>
  `,
  placeholder: '○',
}

export const PinInputWithSeparator: StoryFn<typeof UiPinInput> = Template.bind({})

PinInputWithSeparator.args = {
  default: `
    <UiPinInputGroup class="gap-1">
      <template v-for="(id, index) in 5" :key="id">
        <UiPinInputInput
          class="rounded-md border"
          :index="index"
        />
        <template v-if="index !== 4">
          <UiPinInputSeparator />
        </template>
      </template>
    </UiPinInputGroup>
    `,
  placeholder: '',
}
