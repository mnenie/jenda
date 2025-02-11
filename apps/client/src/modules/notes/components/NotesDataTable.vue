<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { columns as _columns } from '../constants/table'
import type { Table } from '@tanstack/vue-table'
import type { Note } from '../types'
import { DataTable } from '@/shared/ui'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'

defineProps<{
  data: Set<Note> | Note[]
}>()

const select = defineModel <Record<string, boolean>>('select')

const table = useTemplateRef<Table<any>>('table')

const visibleUsers = computed(() => (cell: any) => cell.row.original.users.slice(0, 4))

const remainingUsers = computed(() => (cell: any) => Math.max(cell.row.original.users.length - 4, 0))

const { tm } = useI18n()

const localizedArr = tm('notes.columns') as any

const columns = computed(() => {
  return _columns.map((column, idx) => ({
    ...column,
    header: localizedArr[idx],
  }))
})

function userPosition(idx: number) {
  return idx * 20
}

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
    enable-row-selection
    enable-column-filters
    enable-sorting
    @row-click="$router.push(
      { name: 'notes-slug',
        params: { slug: $event.original.title, id: $event.original._id },
      },
    )"
  >
    <template #users-cell="{ cell }">
      <div v-if="visibleUsers(cell).length > 0" class="flex items-center relative h-full w-full justify-between">
        <div class="relative flex items-center relative h-full">
          <template v-for="(user, idx) in visibleUsers(cell)" :key="user">
            <UserAvatar
              :style="{
                left: `${userPosition(idx)}px`,
                zIndex: `${idx + 1}`,
              }"
              class="!h-24px !w-24px absolute"
            >
              <img :src="user.photoUrl" class="object-cover" />
            </UserAvatar>
          </template>
        </div>
        <div
          v-if="remainingUsers(cell) > 0"
          :style="{
            zIndex: `${visibleUsers(cell).length + 1}`,
          }"
          class="flex items-center justify-center text-neutral-600 dark:text-neutral-400"
        >
          +{{ remainingUsers(cell) }}
        </div>
      </div>
      <span v-else class="text-neutral-500">-</span>
    </template>
    <template #creator-cell="{ cell }">
      <div class="flex items-center space-x-1.5">
        <UserAvatar class="!h-24px !w-24px" :img="cell.row.original.creator.photoUrl" />
        <span class="text-sm">
          {{ cell.row.original.creator.email }}
        </span>
      </div>
    </template>
  </DataTable>
</template>
