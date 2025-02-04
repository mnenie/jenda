<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { useWorkflowsStore } from '../../stores/workflows'
import { usePickerContext } from '../../composables/picker'
import FlowView from './FlowView.vue'
import { UiBadge, UiButton, UiSwitch } from '@/shared/ui'

const workflowsStore = useWorkflowsStore()

const { workflow } = storeToRefs(workflowsStore)

function updateCheckedStatus() {
  workflowsStore.updateStatus(workflow.value.state === 'production' ? 'draft' : 'production')
}

const { togglePicker } = usePickerContext()
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
        <span class="text-default fw400 whitespace-nowrap">
          {{ $t(`workflows.status.${workflow.state}`) }}
        </span>
      </UiBadge>
    </div>
    <div class="flex items-center gap-2">
      <FlowView />
      <UiButton variant="secondary" class="border border-dashed border-neutral-200 dark:border-neutral-700">
        <Icon icon="mingcute:play-fill" class="text-neutral-800 dark:text-neutral-300" />
        {{ $t('workflow.actions', 2) }}
      </UiButton>
      <UiButton variant="secondary" class="shadow-none" @click="togglePicker">
        <Icon icon="iconamoon:menu-burger-horizontal-duotone" class="text-neutral-800 dark:text-neutral-300" />
      </UiButton>
    </div>
  </div>
</template>
