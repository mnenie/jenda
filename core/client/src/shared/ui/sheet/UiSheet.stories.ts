import type { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import { UiButton } from '../button'
import UiSheet from './UiSheet.vue'

export default {
  title: 'UiSheet',
  component: UiSheet,
  argTypes: {
    overlay: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    maxWidth: {
      control: { type: 'number' },
      defaultValue: 640,
    },
    overlayClickClose: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
} as Meta<typeof UiSheet>

const Template: StoryFn<typeof UiSheet> = args => ({
  components: { UiSheet, UiButton },
  setup() {
    const sheet = ref<InstanceType<typeof UiSheet>>()

    async function openSheet() {
      if (sheet.value) {
        sheet.value.open()
      }
    }

    return { args, openSheet, sheet }
  },
  template: `
    <UiButton @click="openSheet">Open</UiButton>
    <UiSheet ref="sheet" v-bind="args">
        <template v-if="${'header' in args}" v-slot:header>${args.header}</template> 
        <template v-if="${'default' in args}" v-slot>${args.default}</template>
        <template v-if="${'footer' in args}" v-slot:footer>${args.footer}</template>
    </UiSheet>`,
})

export const DefaultSheet: StoryFn<typeof UiSheet> = Template.bind({})

DefaultSheet.args = {
  header: `
    <p class="text-lg" style="font-weight: 500">Sheet Example</p>
    <span class="text-sm" style="color: var(--zinc-400)">use to display content in a flexible container component.</span>
  `,
}

export const SheetExampleProps: StoryFn<typeof UiSheet> = Template.bind({})

SheetExampleProps.args = {
  header: `
    <p class="text-lg" style="font-weight: 500">Ohh</p>
  `,
  minWidth: 150,
  maxWidth: 150,
}

export const SlottedSheet: StoryFn<typeof UiSheet> = Template.bind({})

SlottedSheet.args = {
  header: `
    <p class="text-lg" style="font-weight: 500">Sheet Example</p>
    <span class="text-sm" style="color: var(--zinc-400)">use to display content in a flexible container component.</span>
  `,
  footer: 'footer',
}
