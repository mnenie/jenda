<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePickerStore } from '../../stores/picker'
import HeadingNodeForm from '../forms/HeadingNodeForm.vue'
import { provideSelectedNodeContext } from '../../composables/settings'
import InfoSection from './InfoSection.vue'
import TriggerOrActionStepper from './TriggerOrActionStepper.vue'
import SettingsPanelFooter from './SettingsPanelFooter.vue'
import DelayField from './DelayField.vue'
import type { ShallowRef } from 'vue'
import type { SelectedPickerNode } from '../../types'
import { UiSheet, UiSheetContent } from '@/shared/ui'

const pickerStore = usePickerStore()
const { panel, isSettingsOpen, selectedNode } = storeToRefs(pickerStore)

provideSelectedNodeContext({
  selectedNode: selectedNode as ShallowRef<Partial<SelectedPickerNode>>,
})
</script>

<template>
  <div ref="panel">
    <UiSheet :open="isSettingsOpen" :modal="false">
      <UiSheetContent
        class="!max-w-340px absolute p-0 h-full flex flex-col gap-0"
        :portal="false"
      >
        <div v-if="selectedNode" class="flex items-center flex-col p-2.5 pb-1.5 overflow-y-auto scrollbar">
          <InfoSection />
          <HeadingNodeForm />
          <TriggerOrActionStepper
            v-if="selectedNode.data.tag === 'trigger' || selectedNode.data.tag === 'action'"
          />
          <DelayField v-if="selectedNode.data.tag === 'delay'" />
        </div>
        <SettingsPanelFooter />
      </UiSheetContent>
    </UiSheet>
  </div>
</template>

<style scoped>
@import '@/styles/_scrollbar.css';

.scrollbar::-webkit-scrollbar {
  height: 0.3em;
  width: 0.3em;
}
</style>
