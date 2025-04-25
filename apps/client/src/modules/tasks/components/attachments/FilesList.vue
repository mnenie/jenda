<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { fileIconsMap } from '../../constants/files'
import FileActionsMenu from './FileActionsMenu.vue'
import type { Attachment } from '../../types/task'
import { UiTableRoot as UiTable, UiTableBody, UiTableCell, UiTableRow } from '@/shared/ui'

defineProps<{
  attachments: Attachment<File>[]
}>()
</script>

<template>
  <UiTable class="relative z-1 w-full border-none mt-2 h-full max-h-300px overflow-y-auto scrollbar">
    <UiTableBody class="h-full">
      <UiTableRow v-for="attachment in attachments" :key="attachment.name" class="border-none">
        <UiTableCell class="font-medium !pl-2 px-1">
          <div class="flex items-center gap-2 max-w-400px">
            <Icon :icon="fileIconsMap[attachment.type]" class="min-w-5 min-h-5" />
            <span class="truncate text-default text-neutral-800 dark:text-neutral-300">{{ attachment.name }}</span>
          </div>
        </UiTableCell>
        <UiTableCell class="border-none !pr-2">
          <div class="flex items-center gap-6 justify-end">
            <span class="text-neutral-400">{{ (attachment.size / 1000).toFixed(2) }} KB</span>
            <FileActionsMenu :attachment />
          </div>
        </UiTableCell>
      </UiTableRow>
    </UiTableBody>
  </UiTable>
</template>

<style scoped>
@import '@/styles/_scrollbar.css';
</style>
