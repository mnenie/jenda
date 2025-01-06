<script setup lang="ts" generic="TData">
import { computed, provide, ref, useTemplateRef } from 'vue'
import { useHead } from '@unhead/vue'
import { storeToRefs } from 'pinia'
import type { Table } from '@tanstack/vue-table'
import { BoardsActionsPanel, BoardsDataTable, EmptyBoards } from '@/widgets/boards'
import { TableControls, ViewControl } from '@/widgets/controls'
import { useBoardsStore, useFilteredBoards } from '@/entities/board'
import { filteredKey } from '@/shared/constants'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'boards',
})

useHead({
  title: 'Jenda - cloud program for project and task management',
})

const boardsStore = useBoardsStore()
const { boards } = storeToRefs(boardsStore)

const sortModel = ref('default')
const advancedModel = ref([])

const selectedBoards = ref<Record<string, boolean>>({})

const { filteredBoards } = useFilteredBoards(boards, sortModel, advancedModel)

const isSelected = computed(() => {
  return Object.values(selectedBoards.value).some(value => value)
})

const idxs = computed(() => Object.keys(selectedBoards.value))

const dataTable = useTemplateRef<InstanceType<typeof BoardsDataTable>>('table')

provide(filteredKey, {
  sortModel,
  advancedModel,
})
</script>

<template>
  <ViewControl>
    <template #table>
      <div class="relative w-full h-full flex flex-col" :class="boards.length > 0 && 'justify-between'">
        <div class="flex flex-col gap-12px">
          <BoardsActionsPanel :is-selected :idxs />
          <div class="flex flex-col overflow-auto">
            <BoardsDataTable ref="table" v-model:select="selectedBoards" :data="filteredBoards" />
          </div>
        </div>
        <TableControls v-if="boards.length > 0" :table="dataTable?.getTable() as Table<TData>" />
        <EmptyBoards v-else />
      </div>
    </template>
  </ViewControl>
</template>
