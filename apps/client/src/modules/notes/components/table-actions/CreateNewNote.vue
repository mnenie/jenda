<script setup lang="ts">
import { useRouter } from 'vue-router/auto'
import { Icon } from '@iconify/vue'
import { useNotesStore } from '../../stores/notes'
import { UiButton } from '@/shared/ui'

const notesStore = useNotesStore()

const router = useRouter()

function addNewNote() {
  // mock
  router.push({ name: 'notes-slug', params: { slug: 'untitled', id: '0000' } })
  notesStore.addNote('untitled')
}
</script>

<template>
  <UiButton
    variant="solid"
    @click="addNewNote"
  >
    <Icon icon="hugeicons:file-add" class="w-4 h-4 scale-x--100" />
    <span class="text-default">{{ $t('notes.create') }}</span>
  </UiButton>
</template>
