import type { Meta, StoryFn } from '@storybook/vue3'
import UiAlert from './UiAlert.vue'

export default {
  title: 'UiAlert',
  component: UiAlert,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'warning', 'success', 'important'],
      defaultValue: 'default',
    },
    closable: {
      control: 'boolean',
    },
  },
} as Meta<typeof UiAlert>

const Template: StoryFn<typeof UiAlert> = args => ({
  components: { UiAlert },
  setup() {
    return { args }
  },
  template: `
    <UiAlert v-bind="args">
      <template v-if="${'default' in args}" v-slot>${args.default}</template>
    </UiAlert>
  `,
})

export const DefaultAlert: StoryFn<typeof UiAlert> = Template.bind({})

DefaultAlert.args = {
  variant: 'default',
  content: 'hello from alert',
}

export const AlertExampleProps: StoryFn<typeof UiAlert> = Template.bind({})

AlertExampleProps.args = {
  variant: 'warning',
  content: 'hello from alert',
  closable: true,
}

export const SlottedAlert: StoryFn<typeof UiAlert> = Template.bind({})

SlottedAlert.args = {
  variant: 'success',
  default: `
    <span class="text-sm" style="color: var(--zinc-400)">alert with slot with success variant</span>
  `,
}
