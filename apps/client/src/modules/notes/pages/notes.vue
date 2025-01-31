<script setup lang="ts" generic="TData">
import { useHead } from '@unhead/vue'
import { storeToRefs } from 'pinia'
import { useNotesStore } from '../stores/notes'
import EmptyNotes from '../components/EmptyNotes.vue'
import NotesViewManager from '../components/NotesViewManager.vue'

// to data loaders
const notesStore = useNotesStore()
const { notes } = storeToRefs(notesStore)

// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'notes',
        icon: 'hugeicons:checkmark-square-03',
        name: 'notes',
        to: { name: 'notes' },
      },
    ],
  },
  name: 'notes',
})

useHead({
  title: 'Jenda | Notes',
})
</script>

<template>
  <div class="h-full w-full">
    <NotesViewManager />
    <EmptyNotes v-if="!notes.length" />
  </div>
  <RouterView />
</template>
