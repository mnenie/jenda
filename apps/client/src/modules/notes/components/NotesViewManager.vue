<script setup lang="ts" generic="TData">
import { type ComponentPublicInstance, computed, ref, useTemplateRef } from 'vue'
import { storeToRefs } from 'pinia'
import NotesActionsPanel from '../components/NotesActionsPanel.vue'
import { provideFilteredNotesContext, useFilteredNotes } from '../composables/filtered'
import NotesDataTable from '../components/NotesDataTable.vue'
import { useNotesStore } from '../stores/notes'
import AllNotesCards from './cards/AllNotesCards.vue'
import type { Table } from '@tanstack/vue-table'
import ViewControl from '@/modules/common/components/controls/ViewControl.vue'
import TableControls from '@/modules/common/components/controls/TableControls.vue'

interface NotesDataTableExpose {
  getTable: () => Table<TData>
}

const sortModel = ref('default')
const selectedNotes = ref<Record<string, boolean>>({})

const notesStore = useNotesStore()
const { notes } = storeToRefs(notesStore)

const { filteredNotes } = useFilteredNotes(notes, sortModel)

const isSelected = computed(() => {
  return Object.values(selectedNotes.value).some(value => value)
})

const idxs = computed(() => Object.keys(selectedNotes.value))

const dataTable = useTemplateRef<
  ComponentPublicInstance<typeof NotesDataTable, NotesDataTableExpose>
>('table')

provideFilteredNotesContext({
  sortModel,
})
</script>

<template>
  <ViewControl>
    <NotesActionsPanel :is-selected="isSelected" :idxs="idxs" />
    <template #table>
      <div
        class="relative w-full h-full flex flex-col"
        :class="notes.length > 0 && 'justify-between'"
      >
        <div class="flex flex-col overflow-auto">
          <NotesDataTable ref="table" v-model:select="selectedNotes" :data="filteredNotes" />
        </div>
        <TableControls v-if="notes.length > 0" :table="(dataTable?.getTable()! as Table<TData>)" />
      </div>
    </template>
    <template #cards>
      <AllNotesCards :notes="filteredNotes" />
    </template>
  </ViewControl>
</template>
