import type { Meta, StoryFn } from '@storybook/vue3'
import { UiButton } from '../button'
import {
  UiDialog,
  UiDialogContent,
  UiDialogTrigger,
} from './index'

export default {
  title: 'UiDialog',
  component: UiDialog,
} as Meta<typeof UiDialog>

const Template: StoryFn<typeof UiDialog> = args => ({
  components: {
    UiDialog,
    UiDialogTrigger,
    UiDialogContent,
    UiButton,
  },
  setup() {
    return { args }
  },
  template:
  `<UiDialog>
    <UiDialogTrigger as-child>
      <UiButton variant="default">Open</UiButton>
    </UiDialogTrigger>
    <UiDialogContent>
      hello from dialog
      <template v-if="${'default' in args}" v-slot>${args.default}</template>
    </UiDialogContent>
  </UiDialog>`,
})

export const DefaultDialog: StoryFn<typeof UiDialog> = Template.bind({})
