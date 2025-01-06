import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Board, BoardRow } from './types'

export const useBoardsStore = defineStore('boards', () => {
  const boards = ref<BoardRow[]>([])
  const board = ref<Board>()

  function removeBoards(idxs: string[]) {
    idxs.forEach((id) => {
      const index = boards.value.findIndex(board => board._id === id)
      if (index !== -1) {
        boards.value.splice(index, 1)
      }
    })
  }

  function addBoard(board: Board) {
    boards.value.push(board)
  }

  return {
    boards,
    board,
    addBoard,
    removeBoards,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBoardsStore, import.meta.hot))
}
