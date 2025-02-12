<script setup lang="ts">
// dev (пофиксить с бэком)

import { storeToRefs } from 'pinia'
import { usePickerStore } from '../../stores/picker'
import InfoSection from './InfoSection.vue'
import { UiSheet, UiSheetContent } from '@/shared/ui'

const pickerStore = usePickerStore()
const { panel, isSettingsOpen, selectedNode } = storeToRefs(pickerStore)
</script>

<template>
  <!-- // dev mode -->
  <div ref="panel">
    <UiSheet :open="isSettingsOpen" :modal="false">
      <UiSheetContent class="!max-w-320px absolute p-2.5 pb-1.5" :portal="false">
        <div class="flex items-center justify-between">
          <InfoSection :node="selectedNode!" />
        </div>
        <!-- dev -->
      </UiSheetContent>
    </UiSheet>
  </div>
</template>
