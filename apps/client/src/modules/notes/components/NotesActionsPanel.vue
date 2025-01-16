<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotesStore } from '../stores/notes'
import SearchNotes from './filters/SearchNotes.vue'
import NotesSort from './filters/NotesSort.vue'
import CreateNewNote from './features/CreateNewNote.vue'
import RemoveNote from './features/handlers/RemoveNote.vue'
import { UiTabsList, UiTabsTrigger } from '@/shared/ui'

defineProps<{
  isSelected: boolean
  idxs: string[]
}>()

const notesStore = useNotesStore()
const { notes } = storeToRefs(notesStore)
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <UiTabsList>
        <UiTabsTrigger value="table">
          <span i-hugeicons-layout-table-02 />
        </UiTabsTrigger>
        <UiTabsTrigger value="cards">
          <span i-hugeicons-dashboard-square-01 />
        </UiTabsTrigger>
      </UiTabsList>
      <NotesSort />
      <RemoveNote
        v-if="isSelected && notes.length > 0"
        @remove="notesStore.removeNotes(idxs!)"
      />
    </div>
    <div class="flex items-center gap-2">
      <SearchNotes />
      <CreateNewNote
        :plural="1"
        variant="solid"
      />
    </div>
  </div>
</template>
