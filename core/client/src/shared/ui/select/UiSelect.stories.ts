import type { Meta, StoryFn } from '@storybook/vue3'
import { UiButton } from '../button'
import {
  UiSelect,
  UiSelectContent,
  UiSelectGroup,
  UiSelectItem,
  UiSelectLabel,
  UiSelectTrigger,
  UiSelectValue,
} from './index'

export default {
  title: 'UiSelect',
  component: UiSelect,
} as Meta<typeof UiSelect>

const Template: StoryFn<typeof UiSelect> = args => ({
  components: {
    UiSelect,
    UiSelectContent,
    UiSelectGroup,
    UiSelectItem,
    UiSelectLabel,
    UiSelectTrigger,
    UiSelectValue,
    UiButton,
  },
  setup() {
    return { args }
  },
  template: `<div style="padding: 60px">
  <UiSelect>
    <UiSelectTrigger>
      <UiSelectValue placeholder="Select a fruit" />
    </UiSelectTrigger>
    <UiSelectContent>
      <UiSelectGroup>
        <UiSelectLabel>Fruits</UiSelectLabel>
        <UiSelectItem value="apple" withIndicator>
          Apple
        </UiSelectItem>
      </UiSelectGroup>
    </UiSelectContent>
  </UiSelect>
  </div>`,
})

export const DefaultSelect: StoryFn<typeof UiSelect> = Template.bind({})
