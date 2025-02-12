import { UiButton } from '../button'
import {
  UiCollapsible,
  UiCollapsibleContent,
  UiCollapsibleTrigger,
} from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiCollapsible',
  component: UiCollapsible,
  args: {
    open: true,
    // ...
  },
} as Meta<typeof UiCollapsible>

const Template: StoryFn<typeof UiCollapsible> = args => ({
  components: {
    UiCollapsible,
    UiCollapsibleContent,
    UiCollapsibleTrigger,
    UiButton,
  },
  setup() {
    return { args }
  },
  template:
  `<UiCollapsible v-model:open="args.open">
    <UiCollapsibleTrigger as-child>
      <UiButton variant="solid" size="sm">
        trigger
      </UiButton>
    </UiCollapsibleTrigger>
    <UiCollapsibleContent>
      content
    </UiCollapsibleContent>
  </UiCollapsible>`,
})

export const DefaultCollapsible: StoryFn<typeof UiCollapsible> = Template.bind({})
