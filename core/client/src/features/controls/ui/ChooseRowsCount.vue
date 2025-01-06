<script setup lang="ts" generic="TData, U extends string | undefined">
import type { Table } from '@tanstack/vue-table'
import { UiButton, UiSelect, UiSelectContent, UiSelectItem, UiSelectTrigger } from '@/shared/ui'

const props = defineProps<{
  table?: Table<TData>
  modelValue: U
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: U): void
}>()
</script>

<template>
  <UiSelect
    :model-value="props.modelValue"
    @update:model-value="emit('update:modelValue', $event as U)"
  >
    <UiSelectTrigger class="h-8 w-60px dark:border-neutral-700/60" as-child>
      <UiButton variant="ghost" class="h-8 px-2 justify-between focus:ring-0 mr-10">
        {{ table?.getState().pagination.pageSize }}
        <span i-lucide-chevrons-up-down class="w-4 h-4 opacity-50" />
      </UiButton>
    </UiSelectTrigger>
    <UiSelectContent side="top">
      <UiSelectItem v-for="pageSize in [15, 20, 30, 40, 50]" :key="pageSize" :value="`${pageSize}`">
        {{ pageSize }}
      </UiSelectItem>
    </UiSelectContent>
  </UiSelect>
</template>
