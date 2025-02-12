<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { useWorkflowsStore } from '../../stores/workflows'
import { usePickerStore } from '../../stores/picker'
import { UiBadge, UiButton, UiSwitch } from '@/shared/ui'

const workflowsStore = useWorkflowsStore()
const { workflow } = storeToRefs(workflowsStore)

const pickerStore = usePickerStore()
const { isPickerOpen } = storeToRefs(pickerStore)

const panelTitle = computed(() => isPickerOpen.value ? 'close' : 'open')
const panelIcon = computed(() => isPickerOpen.value ? 'lucide:x' : 'lucide:menu')

function updateCheckedStatus() {
  isPickerOpen.value = false
  workflowsStore.updateStatus(workflow.value.state === 'production' ? 'draft' : 'production')
}
</script>

<template>
  <div class="w-full flex items-center justify-between pl-10px px-12px py-8px min-h-42px max-h-42px border-b border-b-solid border-layout">
    <div class="flex items-center gap-2">
      <UiButton variant="secondary" class="shadow-none" @click="isPickerOpen = !isPickerOpen">
        <Icon :icon="panelIcon" class="text-neutral-800 dark:text-neutral-300" />
        {{ $t(`workflow.panel.${panelTitle}`) }}
      </UiButton>
      <UiButton variant="dashed" class="shadow-none border border-dashed border-neutral-200 dark:border-neutral-700">
        <Icon icon="mingcute:play-fill" />
        {{ $t('workflow.actions', 2) }}
      </UiButton>
    </div>
    <div class="flex items-center gap-2">
      <UiBadge
        variant="soft"
        class="px-1 py-px"
        :class="workflow.state === 'production' ? 'badge-soft-green' : 'badge-soft'"
      >
        <span class="text-default fw400 whitespace-nowrap">
          {{ $t(`workflows.status.${workflow.state}`) }}
        </span>
      </UiBadge>
      <UiSwitch
        :checked="workflow.state === 'production'"
        variant="solid"
        thumb="solid"
        class="h-6 w-9 data-[state=checked]:bg-green-600"
        thumb-class="w-4 h-4"
        @update:checked="updateCheckedStatus"
      />
    </div>
  </div>
</template>
