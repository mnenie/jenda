<script setup lang="ts" generic="TData">
import { ref, useTemplateRef } from 'vue'
import { useHead } from '@unhead/vue'
import type { Table } from '@tanstack/vue-table'
import { BoardsActionsPanel, BoardsDataTable, EmptyBoards } from '@/widgets/boards'
import { TableControls, ViewControl } from '@/widgets/controls'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'boards',
})

useHead({
  title: 'Jenda - cloud program for project and task management',
})

const data = ref([
  {
    name: 'Управление компанией Jenda',
    status: 'active',
    labels: [
      {
        name: 'renovate',
        color: 'badge-soft-green',
      },
      {
        name: 'company',
        color: 'badge-soft-orange',
      },
      {
        name: 'update',
        color: 'badge-soft-blue',
      },
      {
        name: 'new',
        color: 'badge-soft-red',
      },
      {
        name: 'hello',
        color: 'badge-soft-orange',
      },
    ],
    users: [
      {
        _id: '0',
        email: 'alex@gmail.com',
        photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
      },
      {
        _id: '1',
        email: 'airat@gmail.com',
        photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
      },
      {
        _id: '2',
        email: 'slava@gmail.com',
        photoUrl: 'https://avatars.githubusercontent.com/u/83920644?v=4',
      },
      {
        _id: '3',
        email: 'egor@gmail.com',
        photoUrl: 'https://avatars.githubusercontent.com/u/84976745?v=4',
      },
      {
        _id: '4',
        email: 'egor@gmail.com',
        photoUrl: 'https://avatars.githubusercontent.com/u/84976745?v=4',
      },
      {
        _id: '5',
        email: 'egor@gmail.com',
        photoUrl: 'https://avatars.githubusercontent.com/u/84976745?v=4',
      },
    ],
    tasks: 1023,
    estimate: 5,
    date: '20.12.2024',
  },
])

const dataTable = useTemplateRef<InstanceType<typeof BoardsDataTable>>('table')
</script>

<template>
  <ViewControl>
    <template #table>
      <div class="relative w-full h-full flex flex-col" :class="data.length > 0 && 'justify-between'">
        <div class="flex flex-col gap-12px">
          <BoardsActionsPanel />
          <div class="flex flex-col overflow-auto">
            <BoardsDataTable ref="table" :data />
          </div>
        </div>
        <TableControls v-if="data.length > 0" :table="dataTable?.getTable() as Table<TData>" />
        <EmptyBoards v-else />
      </div>
    </template>
  </ViewControl>
</template>
