import { ref, shallowRef, triggerRef } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Board, BoardRow } from '../types'

export const useBoardsStore = defineStore('boards', () => {
  const boards = shallowRef<BoardRow[]>([])
  const board = ref<Board>({
    _id: '1',
    name: 'New board',
    color: '#fcba03',
    columns: [],
    users: [
      {
        _id: '1',
        email: 'alex',
        photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
      },
      {
        _id: '2',
        email: 'airat@gmail.com',
        photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
      },
      {
        _id: '3',
        email: 'slava@gmail.com',
        photoUrl: 'https://avatars.githubusercontent.com/u/83920644?v=4',
      },
    ],
    status: 'active',
    labels: [],
    updatedAt: new Date(),
    creator: {
      _id: '1',
      email: 'alex',
      photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
    },
  })

  function removeBoards(idxs: string[]) {
    idxs.forEach((id) => {
      const index = boards.value.findIndex(board => board._id === id)
      if (index !== -1) {
        boards.value.splice(index, 1)
        triggerRef(boards)
      }
    })
  }

  function addBoard(board: Board) {
    boards.value = [...boards.value, board]
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
