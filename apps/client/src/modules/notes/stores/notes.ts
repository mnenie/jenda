import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Note } from '../types'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([])
  const note = ref<Note>()

  function addNote(board: Note) {
    notes.value.push(board)
  }

  // for table only
  function removeNotes(idxs: string[]) {
    idxs.forEach((id) => {
      const index = notes.value.findIndex(note => note._id === id)
      if (index !== -1) {
        notes.value.splice(index, 1)
      }
    })
  }

  return {
    notes,
    note,
    addNote,
    removeNotes,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNotesStore, import.meta.hot))
}
