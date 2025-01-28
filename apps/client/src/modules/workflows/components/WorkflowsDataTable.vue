<script setup lang="ts" generic="T extends Workflow">
import { computed, useTemplateRef } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useI18n } from 'vue-i18n'
import { columns as _columns } from '../utils/constants/table'
import type { Table } from '@tanstack/vue-table'
import type { Workflow } from '../types'
import { DataTable, UiBadge } from '@/shared/ui'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'

defineProps<{
  data: Set<T> | T[]
}>()

const table = useTemplateRef<Table<any>>('table')

const select = defineModel <Record<string, boolean>>('select')

const search = defineModel<string>('search', {
  required: true,
})

dayjs.extend(relativeTime)

const timesAgo = computed(() =>
  (workflow: T) => {
    return dayjs().to(dayjs(workflow.updatedAt))
  })

const { tm } = useI18n()

const localizedArr = tm('workflows.columns') as any

const columns = computed(() => {
  return _columns.map((column, idx) => ({
    ...column,
    header: localizedArr[idx],
  }))
})

defineExpose({
  getTable: () => table.value,
})
</script>

<template>
  <DataTable
    ref="table"
    v-model="select"
    :columns
    :data
    :global-filter="search"
    enable-row-selection
    @row-click="$router.push(
      {
        name: 'workflows-id',
        params: { id: $event.original._id },
      },
    )"
  >
    <template #description-cell="{ cell }">
      <span class="text-default text-neutral-500 dark:text-neutral-400 whitespace-nowrap overflow-hidden text-ellipsis">
        {{ cell.row.original.description }}
      </span>
    </template>
    <template #creator-cell="{ cell }">
      <div class="flex items-center gap-2">
        <UserAvatar :img="cell.row.original.creator.photoUrl" class="!h-22px !w-22px" />
        <span class="text-default text-neutral-700 dark:text-neutral-200 whitespace-nowrap">
          {{ cell.row.original.creator.email }}
        </span>
      </div>
    </template>
    <template #runs-cell="{ cell }">
      <span class="text-default text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
        {{ $t('workflows.runs', { n: cell.row.original.runsCount }) }}
      </span>
    </template>
    <template #date-cell="{ cell }">
      <span class="text-default text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
        {{ timesAgo(cell.row.original) }}
      </span>
    </template>
    <template #status-cell="{ cell }">
      <UiBadge
        variant="soft"
        class="px-1 py-px"
        :class="cell.row.original.state === 'production' ? 'badge-soft-green' : 'badge-soft'"
      >
        {{ $t(`workflows.status.${cell.row.original.state}`) }}
      </UiBadge>
    </template>
  </DataTable>
</template>
