import type { Meta, StoryFn } from '@storybook/vue3';
import { UiDropdown, UiDropdownItem, UiDropdownShortcut } from '.';
import { UiButton } from '../button';

export default {
  title: 'UiDropdown',
  component: UiDropdown,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['left', 'center', 'right']
    }
  }
} as Meta<typeof UiDropdown>;

const Template: StoryFn<typeof UiDropdown> = (args) => ({
  components: { UiDropdown, UiDropdownItem, UiDropdownShortcut, UiButton },
  setup() {
    return { args };
  },
  template: `<div style="padding: 60px">
  <UiDropdown v-bind="args">
    <template v-slot:trigger>
      ${args.trigger}
    </template>
    <template #header>
      dropdown header
    </template>
    <template #content>
      <UiDropdownItem>
        item 1
        <UiDropdownShortcut>⇧1</UiDropdownShortcut>
      </UiDropdownItem>
    </template>
  </UiDropdown>
  </div>`
});

export const DefaultDropdown: StoryFn<typeof UiDropdown> = Template.bind({});

DefaultDropdown.args = {
  direction: 'center',
  trigger: `<UiButton>Open</UiButton>`
};

export const DropdownExampleProps: StoryFn<typeof UiDropdown> = Template.bind({});

DropdownExampleProps.args = {
  direction: 'right',
  trigger: `<UiButton>Open</UiButton>`
};

export const SlottedDropdown: StoryFn<typeof UiDropdown> = Template.bind({});

SlottedDropdown.args = {
  direction: 'center',
  trigger: `<p>👋</p>`
};
