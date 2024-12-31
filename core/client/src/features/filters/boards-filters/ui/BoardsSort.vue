<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  UiButton,
  UiSelect,
  UiSelectContent,
  UiSelectItem,
  UiSelectTrigger,
} from '@/shared/ui'

const { t, tm } = useI18n()

const values = tm('boards.filters.sort.arr') as Readonly<string[]>
const model = ref(values[0])
</script>

<template>
  <UiSelect v-model:model-value="model">
    <UiSelectTrigger as-child>
      <UiButton size="sm" variant="outline" class="gap-0 px-2 focus:ring-0">
        <span i-hugeicons-sort-by-down-01 class="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
        <span class="text-neutral-600 dark:text-neutral-400 mr-1">
          {{ t('boards.filters.sort.title') }}
        </span>
        {{ model }}
      </UiButton>
    </UiSelectTrigger>
    <UiSelectContent align="start" class="w-fit">
      <UiSelectItem v-for="value, idx in values" :key="idx" :value with-indicator>
        {{ value }}
      </UiSelectItem>
    </UiSelectContent>
  </UiSelect>
</template>
