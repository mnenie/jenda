<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import RemoveWorkflow from '../features/RemoveWorkflow.vue'
import { useWorkflowsStore } from '../../stores/workflows'
import { UiBadge, UiButton, UiSwitch } from '@/shared/ui'

const workflowsStore = useWorkflowsStore()

const { workflow } = storeToRefs(workflowsStore)

function updateCheckedStatus() {
  workflowsStore.updateStatus(workflow.value.state === 'production' ? 'draft' : 'production')
}
</script>

<template>
  <div class="w-full flex items-center justify-between px-15px py-8px min-h-42px max-h-42px border-b border-b-solid border-layout">
    <div class="flex items-center gap-2">
      <UiSwitch
        :checked="workflow.state === 'production'"
        variant="solid"
        thumb="solid"
        class="h-5 data-[state=checked]:bg-green-600"
        @update:checked="updateCheckedStatus"
      />
      <UiBadge
        variant="soft"
        class="px-1 py-px"
        :class="workflow.state === 'production' ? 'badge-soft-green' : 'badge-soft'"
      >
        <span class="text-default text-neutral-800 dark:text-neutral-300 whitespace-nowrap">
          {{ $t(`workflows.status.${workflow.state}`) }}
        </span>
      </UiBadge>
    </div>
    <div class="flex items-center gap-2">
      <UiButton variant="dashed">
        <Icon icon="ri:history-fill" class="text-neutral-800 dark:text-neutral-300" />
        {{ $t('workflow.actions', 1) }}
      </UiButton>
      <UiButton variant="dashed">
        <Icon icon="solar:play-circle-outline" class="text-neutral-800 dark:text-neutral-300" />
        {{ $t('workflow.actions', 2) }}
      </UiButton>
      <RemoveWorkflow />
    </div>
  </div>
</template>
