<script lang="ts">
import type { Chooser } from '../../types'

export type ForType<T, K> = T extends infer U ? U : K
</script>

<script setup lang="ts" generic="T extends Chooser, K extends keyof T">
import { UiCombobox, UiComboboxAnchor, UiComboboxEmpty, UiComboboxGroup, UiComboboxInput, UiComboboxItem, UiComboboxItemIndicator, UiComboboxList, UiComboboxTrigger } from '@/shared/ui'

defineProps<{
  items: T[]
  for?: ForType<'entity' | 'structure', K>
}>()

const value = defineModel<T | undefined>({
  required: true,
})
</script>

<template>
  <UiCombobox v-slot="{ open }" v-model="value" by="label" class="w-full">
    <UiComboboxAnchor as-child>
      <UiComboboxTrigger as-child>
        <slot :open />
      </UiComboboxTrigger>
    </UiComboboxAnchor>
    <UiComboboxList class="w-320px shadow-none">
      <div class="relative w-full max-w-sm items-center">
        <UiComboboxInput class="input pl-9 focus-visible:ring-0 border-0 border-b rounded-none h-10 shadow-none" placeholder="Select framework..." />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
          <div i-lucide-search class="size-4" />
        </span>
      </div>
      <UiComboboxEmpty>
        test
      </UiComboboxEmpty>
      <UiComboboxGroup>
        <UiComboboxItem
          v-for="item in items"
          :key="item.value"
          :value="item"
        >
          {{ item.label }}
          <UiComboboxItemIndicator>
            <div i-lucide-check class="ml-auto h-4 w-4" />
          </UiComboboxItemIndicator>
        </UiComboboxItem>
      </UiComboboxGroup>
    </UiComboboxList>
  </UiCombobox>
</template>
