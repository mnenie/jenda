<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLocalStorage } from '@vueuse/core'
import { UiButton, UiSelect, UiSelectContent, UiSelectItem, UiSelectTrigger } from '@/shared/ui'

const view = useLocalStorage('board-view', 'kanban')
const viewsOptions = ['kanban', 'timeline']
</script>

<template>
  <UiSelect v-model="view">
    <UiSelectTrigger as-child class="!h-default border-none !p-2 dark:!text-neutral-100 focus:!ring-0">
      <UiButton variant="secondary" class="shadow-none">
        {{ $t(`kanban.view.${view}`) }}
        <Icon icon="lucide:chevron-down" class="w-4 h-4 text-neutral-400" />
      </UiButton>
    </UiSelectTrigger>
    <UiSelectContent>
      <UiSelectItem v-for="option in viewsOptions" :key="option" :value="option">
        {{ $t(`kanban.view.${option}`) }}
      </UiSelectItem>
    </UiSelectContent>
  </UiSelect>
</template>
