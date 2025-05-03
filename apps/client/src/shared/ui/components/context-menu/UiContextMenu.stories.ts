import { UiButton } from '../button'
import {
  UiContextMenu,
  UiContextMenuContent,
  UiContextMenuItem,
  UiContextMenuTrigger,
} from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiContextMenu',
  component: UiContextMenu,
  tags: ['autodocs'],
} as Meta<typeof UiContextMenu>

const Template: StoryFn<typeof UiContextMenu> = args => ({
  components: {
    UiContextMenu,
    UiContextMenuItem,
    UiContextMenuTrigger,
    UiContextMenuContent,
    UiButton,
  },
  setup() {
    return { args }
  },
  template: `<div style="padding: 60px">
  <UiContextMenu>
    <UiContextMenuTrigger>
      right click
    </UiContextMenuTrigger>
    <UiContextMenuContent>
      <UiContextMenuItem>Profile</UiContextMenuItem>
      <UiContextMenuItem>Team</UiContextMenuItem>
    </UiContextMenuContent>
  </UiContextMenu>
  </div>`,
})

export const DefaultContext: StoryFn<typeof UiContextMenu> = Template.bind({})
