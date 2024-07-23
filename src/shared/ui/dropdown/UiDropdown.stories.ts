import type { Meta, StoryFn } from '@storybook/vue3';
import { UiDropdown, UiDropdownItem, UiDropdownShortcut } from '@/shared/ui';

export default {
  title: 'UiDropdown',
  component: UiDropdown
} as Meta<typeof UiDropdown>;

export const Dropdown: StoryFn<typeof UiDropdown> = (args) => ({
  components: { UiDropdown, UiDropdownItem, UiDropdownShortcut },
  setup() {
    return { args };
  },
  template: `<UiDropdown>
    <template #trigger>
      dropdown
    </template>
    <template #header>
      dropdown header
    </template>
    <template #content>
      <UiDropdownItem>
        item 1
        <UiDropdownShortcut>⇧1</UiDropdownShortcut>
      </UiDropdownItem>
      <UiDropdownItem>
        item 2
        <UiDropdownShortcut>⇧2</UiDropdownShortcut>
      </UiDropdownItem>
    </template>
  </UiDropdown>`
});
