<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWorkflowsStore } from '../../stores/workflows'
import { UiAlert, UiButton } from '@/shared/ui'

const workflowsStore = useWorkflowsStore()
const { workflow } = storeToRefs(workflowsStore)
</script>

<template>
  <UiAlert
    v-if="workflow.state === 'draft'"
    variant="info"
    class="w-1/2 absolute top-4 left-1/2 translate-x--1/2 p-1.5 px-3 border-none flex items-center justify-between"
  >
    <span class="text-default text-blue-900 dark:text-blue-300 whitespace-nowrap">
      {{ $t('workflow.alert.status') }} {{ $t(`workflows.status.${workflow.state}`) }}
    </span>
    <UiButton variant="solid" @click="workflowsStore.updateStatus('production')">
      {{ $t('workflow.alert.btn') }}
    </UiButton>
  </UiAlert>
</template>
