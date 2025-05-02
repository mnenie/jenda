import { UiButton } from '../button'
import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuItem,
  UiDropdownMenuTrigger,
} from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiDropdownMenu',
  component: UiDropdownMenu,
  tags: ['autodocs'],
} as Meta<typeof UiDropdownMenu>

const Template: StoryFn<typeof UiDropdownMenu> = args => ({
  components: {
    UiDropdownMenu,
    UiDropdownMenuItem,
    UiDropdownMenuTrigger,
    UiDropdownMenuContent,
    UiButton,
  },
  setup() {
    return { args }
  },
  template: `<div style="padding: 60px">
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="dashed">Open</UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent>
      <UiDropdownMenuItem>Profile</UiDropdownMenuItem>
      <UiDropdownMenuItem>Billing</UiDropdownMenuItem>
      <UiDropdownMenuItem>Team</UiDropdownMenuItem>
      <UiDropdownMenuItem>Subscription</UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
  </div>`,
})

export const DefaultDropdown: StoryFn<typeof UiDropdownMenu> = Template.bind({})
