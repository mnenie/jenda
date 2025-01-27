<script setup lang="ts" generic="T extends Workflow">
import { computed } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import type { Workflow } from '../types'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'
import {
  UiBadge,
  UiTableRoot as UiTable,
  UiTableBody,
  UiTableCell,
  UiTableRow,
} from '@/shared/ui'

defineProps<{
  workflows: T[]
}>()

dayjs.extend(relativeTime)
// mocks -> after from store

const daysAgo = computed(() =>
  (workflow: T) => {
    return dayjs().to(dayjs(workflow.updatedAt))
  })
</script>

<template>
  <UiTable class="border-none">
    <UiTableBody>
      <UiTableRow v-for="workflow in workflows" :key="workflow._id">
        <UiTableCell class="border-r-none flex flex-col pt-2 pb-2">
          {{ workflow.name }}
          <span class="text-small text-neutral-500 whitespace-nowrap overflow-hidden text-ellipsis">{{ workflow.description }}</span>
        </UiTableCell>
        <UiTableCell class="border-r-none">
          <UserAvatar :img="workflow.creator.photoUrl" class="!h-22px !w-22px" />
        </UiTableCell>
        <UiTableCell class="border-r-none">
          <span class="text-small text-neutral-500 whitespace-nowrap">{{ workflow.runsCount }} runs</span>
        </UiTableCell>
        <UiTableCell class="border-r-none">
          <UiBadge variant="soft" class="px-1 py-px" :class="workflow.state === 'production' ? 'badge-soft-green' : 'badge-soft'">
            {{ workflow.state }}
          </UiBadge>
        </UiTableCell>
        <UiTableCell class="border-r-none">
          <span class="text-small text-neutral-500 whitespace-nowrap">{{ daysAgo(workflow) }}</span>
        </UiTableCell>
        <UiTableCell class="border-r-none">
          <span i-lucide-ellipsis-vertical class="w-4 h-4 text-neutral-400" />
        </UiTableCell>
      </UiTableRow>
    </UiTableBody>
  </UiTable>
</template>
