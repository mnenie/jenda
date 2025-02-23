<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useWorkflowsStore } from '../../stores/workflows'
import { usePickerStore } from '../../stores/picker'
import { useFlowStore } from '../../stores/flow'
import { UiAlert, UiButton } from '@/shared/ui'
import { useBreakpoints } from '@/shared/composables/breakpoints'

const workflowsStore = useWorkflowsStore()
const { workflow } = storeToRefs(workflowsStore)

const flowstore = useFlowStore()
const { calculateTriggers } = storeToRefs(flowstore)

const pickerStore = usePickerStore()
const { isPickerOpen, isSettingsOpen } = storeToRefs(pickerStore)

const { breakpoints } = useBreakpoints()

const isAlertFull = computed(() => isPickerOpen.value || isSettingsOpen.value)

const alertWidth = computed(() => {
  if (breakpoints.smallerOrEqual('laptop').value) {
    return isAlertFull.value ? 'w-fit' : 'w-1/2'
  }
  else {
    return 'w-1/3'
  }
})
</script>

<template>
  <UiAlert
    v-if="workflow.state === 'draft'"
    variant="info"
    class="absolute top-4 left-1/2 translate-x--1/2 !h-12 2xl:!h-unset py-1.5 px-3 border-none flex items-center justify-between"
    :class="alertWidth"
  >
    <span class="text-default text-blue-900 dark:text-blue-300 whitespace-nowrap">
      {{ $t('workflow.alert.status') }} {{ $t(`workflows.status.${workflow.state}`) }}
    </span>
    <UiButton v-if="!isAlertFull" :disabled="calculateTriggers > 1" variant="solid" @click="workflowsStore.updateStatus('production')">
      {{ $t('workflow.alert.btn') }}
    </UiButton>
  </UiAlert>
</template>
