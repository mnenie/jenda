import {
  UiTabs,
  UiTabsContent,
  UiTabsList,
  UiTabsTrigger,
} from './index'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'UiTabs',
  component: UiTabs,
} as Meta<typeof UiTabs>

const Template: StoryFn<typeof UiTabs> = args => ({
  components: {
    UiTabs,
    UiTabsContent,
    UiTabsList,
    UiTabsTrigger,
  },
  setup() {
    return { args }
  },
  template: `
  <UiTabs default-value="account" class="w-[400px]">
    <UiTabsList>
      <UiTabsTrigger value="account">
        Account
      </UiTabsTrigger>
      <UiTabsTrigger value="password">
        Password
      </UiTabsTrigger>
    </UiTabsList>
    <UiTabsContent value="account">
      Make changes to your account here.
    </UiTabsContent>
    <UiTabsContent value="password">
      Change your password here.
    </UiTabsContent>
  </UiTabs>
  `,
})

export const DefaultTabs: StoryFn<typeof UiTabs> = Template.bind({})
