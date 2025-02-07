<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePickerStore } from '../../stores/picker'
import { UiSheet, UiSheetContent } from '@/shared/ui'

const pickerStore = usePickerStore()
const { selectedNode, panel, isSettingsOpen } = storeToRefs(pickerStore)
</script>

<template>
  <!-- // dev mode -->
  <UiSheet :open="isSettingsOpen" :modal="false">
    <UiSheetContent class="!max-w-320px absolute p-2.5 pb-1.5" :portal="false">
      <div ref="panel" class="flex flex-col h-full w-full transition-all duration-700">
        <div class="flex flex-col gap-1 mb-4">
          <div class="flex items-center justify-between">
            <h3>mock</h3>
          </div>
          <span class="text-default text-neutral-500 dark:text-neutral-400">
            {{ selectedNode }}
          </span>
        </div>
      </div>
    </UiSheetContent>
  </UiSheet>
</template>
