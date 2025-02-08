<script setup lang="ts">
import { useFilteredWorkflowsContext } from '../../../composables/filtered'
import {
  UiButton,
  UiSelect,
  UiSelectContent,
  UiSelectItem,
  UiSelectTrigger,
} from '@/shared/ui'

const values = ['default', 'date'] as const

const { sortModel } = useFilteredWorkflowsContext()
</script>

<template>
  <UiSelect v-model="sortModel">
    <UiSelectTrigger as-child>
      <UiButton size="sm" variant="dashed" class="w-fit gap-0 h-default px-2 focus:ring-0 shadow-sm border 2xl:fw400">
        <span i-hugeicons-sort-by-down-01 class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
        <span class="text-neutral-600 dark:text-neutral-400 mr-1">
          {{ $t('workflows.filters.sort.title') }}
        </span>
        <span>{{ $t(`workflows.filters.sort.${sortModel}`) }}</span>
      </UiButton>
    </UiSelectTrigger>
    <UiSelectContent align="start" class="w-fit">
      <UiSelectItem v-for="value, idx in values" :key="idx" :value="value" with-indicator>
        {{ $t(`workflows.filters.sort.${value}`) }}
      </UiSelectItem>
    </UiSelectContent>
  </UiSelect>
</template>
