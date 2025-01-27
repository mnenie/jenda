<script setup lang="ts">
import {
  UiButton,
  UiSelect,
  UiSelectContent,
  UiSelectItem,
  UiSelectTrigger,
} from '@/shared/ui'

const values = ['default', 'date'] as const

// const { sortModel } = useFilteredWorkflowsContext()
</script>

<template>
  <UiSelect>
    <UiSelectTrigger as-child>
      <UiButton size="sm" variant="dashed" class="gap-0 h-default px-2 focus:ring-0 shadow-sm border 2xl:fw400">
        <span i-hugeicons-sort-by-down-01 class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
        <span class="text-neutral-600 dark:text-neutral-400 mr-1">
          {{ $t('boards.filters.sort.title') }}
        </span>
        <!-- <span>{{ $t(`boards.filters.sort.${sortModel}`) }}</span> -->
      </UiButton>
    </UiSelectTrigger>
    <UiSelectContent align="start" class="w-fit">
      <UiSelectItem v-for="value, idx in values" :key="idx" :value="value" with-indicator>
        {{ $t(`boards.filters.sort.${value}`) }}
      </UiSelectItem>
    </UiSelectContent>
  </UiSelect>
</template>
