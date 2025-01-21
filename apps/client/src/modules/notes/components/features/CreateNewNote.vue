<script setup lang="ts">
import { useRouter } from 'vue-router/auto'
import { useNotesStore } from '../../stores/notes'
import AddNote from './handlers/AddNote.vue'
import type { ButtonVariants } from '@/shared/ui'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  variant: ButtonVariants['variant']
  plural: number
}>()

const router = useRouter()

const notesStore = useNotesStore()

function addNewNote() {
  // mock
  router.push({ name: 'notes-slug', params: { slug: 'untitled', id: '0000' } })
  notesStore.addNote('untitled')
}
</script>

<template>
  <AddNote
    :variant
    :plural
    @add="addNewNote"
  />
</template>
