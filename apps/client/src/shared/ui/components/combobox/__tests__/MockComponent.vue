<script setup lang="ts">
import { useEmitAsProps } from 'radix-vue'
import { UiCombobox, UiComboboxInput, UiComboboxItem, UiComboboxList } from '../index'
import type { ComboboxRootEmits, ComboboxRootProps } from 'radix-vue'

const props = defineProps<ComboboxRootProps>()
const emits = defineEmits<ComboboxRootEmits>()
</script>

<template>
  <UiCombobox v-bind="{ ...props, ...useEmitAsProps(emits) }">
    <UiComboboxInput placeholder="empty" />
    <UiComboboxList>
      <UiComboboxItem value="test">
        <span>test item</span>
      </UiComboboxItem>
    </UiComboboxList>
  </UiCombobox>
</template>
