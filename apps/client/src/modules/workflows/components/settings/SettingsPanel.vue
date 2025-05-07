<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePickerStore } from '../../stores/picker'
import HeadingNodeForm from '../forms/HeadingNodeForm.vue'
import InfoSection from './InfoSection.vue'
import TriggerOrActionChooser from './TriggerOrActionChooser.vue'
import { UiSheet, UiSheetContent } from '@/shared/ui'

const pickerStore = usePickerStore()
const { panel, isSettingsOpen, selectedNode } = storeToRefs(pickerStore)
</script>

<template>
  <!-- // dev mode -->
  <div id="panel" ref="panel">
    <UiSheet :open="isSettingsOpen" :modal="false">
      <UiSheetContent
        class="!max-w-340px absolute p-2.5 pb-1.5"
        :portal="false"
      >
        <div v-if="selectedNode" class="flex items-center flex-col">
          <InfoSection :node="selectedNode" />
          <HeadingNodeForm :node="selectedNode" />
          <TriggerOrActionChooser />
        </div>
        <!-- dev -->
      </UiSheetContent>
    </UiSheet>
  </div>
</template>
