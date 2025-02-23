import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Note } from '../types'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([])
  const note = ref<Note>()

  function addNote(slug: string) {
    const content = `<h1>Untitled</h1><p></p>`
    // mock
    const defaultNote = {
      content,
      title: 'Untitled',
      type: 'doc' as const,
      creator: {
        _id: '1',
        email: 'a@b.com',
        photoUrl: '',
      },
      users: [],
      updatedAt: new Date(),
    }
    // notes.value.push(defaultNote)
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
