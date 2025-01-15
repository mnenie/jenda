import {
  UiCommand,
  UiCommandInput,
  UiCommandItem,
  UiCommandList,
} from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiCommand',
  component: UiCommand,
} as Meta<typeof UiCommand>

const Template: StoryFn<typeof UiCommand> = args => ({
  components: {
    UiCommand,
    UiCommandItem,
    UiCommandList,
    UiCommandInput,
  },
  setup() {
    return { args }
  },
  template:
  `<UiCommand class="rounded-lg border shadow-md max-w-[450px]">
    <UiCommandInput placeholder="Search..."/>
      <UiCommandList>
        <UiCommandItem value="Calendar">
          <span>Calendar</span>
        </UiCommandItem>
      </UiCommandList>
  </UiCommand>`,
})

export const DefaultCommand: StoryFn<typeof UiCommand> = Template.bind({})
