<script setup lang="ts">
import { inject } from 'vue'
import {
  UiButton,
  UiSelect,
  UiSelectContent,
  UiSelectItem,
  UiSelectTrigger,
} from '@/shared/ui'
import { filteredKey } from '@/shared/constants'

const values = ['name', 'tasks', 'date', 'default'] as const

const { sortModel } = inject(filteredKey)!
</script>

<template>
  <UiSelect v-model:model-value="sortModel">
    <UiSelectTrigger as-child>
      <UiButton size="sm" variant="dashed" class="gap-0 px-2 focus:ring-0 bg-neutral-50 shadow-sm border">
        <span i-hugeicons-sort-by-down-01 class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
        <span class="text-neutral-600 dark:text-neutral-400 mr-1 text-sm">
          {{ $t('boards.filters.sort.title') }}
        </span>
        <span class="text-sm">{{ $t(`boards.filters.sort.${sortModel}`) }}</span>
      </UiButton>
    </UiSelectTrigger>
    <UiSelectContent align="start" class="w-fit">
      <UiSelectItem v-for="value, idx in values" :key="idx" :value="value" with-indicator>
        {{ $t(`boards.filters.sort.${value}`) }}
      </UiSelectItem>
    </UiSelectContent>
  </UiSelect>
</template>
