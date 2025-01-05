import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { BoardRow } from './types'

export const useBoardsStore = defineStore('boards', () => {
  // TODO: type's naming
  const boards = ref<BoardRow[]>([])

  function removeBoards(idxs: string[]) {
    idxs.forEach((id) => {
      const index = boards.value.findIndex(board => board._id === id)
      if (index !== -1) {
        boards.value.splice(index, 1)
      }
    })
  }

  return {
    boards,
    removeBoards,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBoardsStore, import.meta.hot))
}
