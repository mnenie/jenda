import { PopoverRoot } from 'radix-vue'
import { UiButton } from '../button'
import {
  UiPopover,
  UiPopoverContent,
  UiPopoverTrigger,
} from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiPopover',
  tags: ['autodocs'],
  component: UiPopover,
} as Meta<typeof UiPopover>

const Template: StoryFn<typeof UiPopover> = args => ({
  components: {
    PopoverRoot,
    UiPopover,
    UiPopoverContent,
    UiPopoverTrigger,
    UiButton,
  },
  setup() {
    return { args }
  },
  template: `
  <div style="padding: 60px">
    <PopoverRoot>
      <UiPopoverTrigger>
        <UiButton>Open</UiButton>
      </UiPopover>
      <UiPopoverContent>
        hello
      </UiPopoverContent>
    </PopoverRoot>
  </div>`,
})

export const DefaultPopover: StoryFn<typeof UiPopover> = Template.bind({})
