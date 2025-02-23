<script setup lang="ts">
import NoteCard from './NoteCard.vue'
import type { Note } from '../../types'

defineProps<{
  notes: Note[]
}>()
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <NoteCard v-for="note in notes" :key="note._id" :note="note" />
  </div>
</template>
