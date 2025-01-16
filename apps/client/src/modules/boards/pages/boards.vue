<script setup lang="ts" generic="TData">
import { computed, onBeforeMount, ref, useTemplateRef } from 'vue'
import { useHead } from '@unhead/vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router/auto'
import { useBoardsStore } from '../stores/board'
import { provideFilteredContext, useFilteredBoards } from '../composables/filtered'
import BoardsActionsPanel from '../components/BoardsActionsPanel.vue'
import EmptyBoards from '../components/EmptyBoards.vue'
import BoardsDataTable from '../components/BoardsDataTable.vue'
import type { Table } from '@tanstack/vue-table'
import TableControls from '@/modules/common/components/controls/TableControls.vue'
import ViewControl from '@/modules/common/components/controls/ViewControl.vue'

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

const router = useRouter()
const route = useRoute()

const selectedBoards = ref<Record<string, boolean>>({})

const { filteredBoards } = useFilteredBoards(boards, sortModel, advancedModel)

const isSelected = computed(() => {
  return Object.values(selectedBoards.value).some(value => value)
})

const idxs = computed(() => Object.keys(selectedBoards.value))

const dataTable = useTemplateRef<InstanceType<typeof BoardsDataTable>>('table')

provideFilteredContext({
  sortModel,
  advancedModel,
})

onBeforeMount(() => {
  if (route.name === 'boards-new') {
    router.back()
  }
})
</script>

<template>
  <div v-if="$route.name !== 'board-id'" class="w-full h-full flex flex-col">
    <ViewControl>
      <BoardsActionsPanel :is-selected :idxs />
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
    </ViewControl>
    <EmptyBoards v-if="boards.length === 0" />
  </div>
  <RouterView v-else />
</template>
