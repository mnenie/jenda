<script setup lang="ts" generic="TData">
import { computed, ref, useTemplateRef } from 'vue'
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../stores/boards'
import { provideFilteredBoardsContext, useFilteredBoards } from '../composables/filtered'
import BoardsActionsPanel from '../components/BoardsActionsPanel.vue'
import BoardsDataTable from '../components/BoardsDataTable.vue'
import AllBoardsCards from './cards/AllBoardsCards.vue'
import type { Table } from '@tanstack/vue-table'
import TableControls from '@/modules/common/components/controls/TableControls.vue'
import ViewControl from '@/modules/common/components/controls/ViewControl.vue'

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

provideFilteredBoardsContext({
  sortModel,
  advancedModel,
})
</script>

<template>
  <ViewControl>
    <BoardsActionsPanel :boards="filteredBoards" :is-selected :idxs />
    <template #table>
      <div
        class="relative w-full h-full flex flex-col"
        :class="boards.length > 0 && 'justify-between'"
      >
        <div class="flex flex-col overflow-auto">
          <BoardsDataTable ref="table" v-model:select="selectedBoards" :data="filteredBoards" />
        </div>
        <TableControls v-if="boards.length > 0" :table="(dataTable?.getTable()! as Table<TData>)" />
      </div>
    </template>
    <template #cards>
      <AllBoardsCards :boards="filteredBoards" />
    </template>
  </ViewControl>
</template>
