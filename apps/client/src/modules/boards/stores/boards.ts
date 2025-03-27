import { ref, shallowRef, triggerRef } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Board, BoardRow, Column, Label } from '../types'

export const useBoardsStore = defineStore('boards', () => {
  const boards = shallowRef<BoardRow[]>([])
  const board = ref<Board>({
    _id: '1',
    name: 'New board',
    color: '#fcba03',
    columns: [
      {
        _id: '1',
        title: 'TODO',
        color: '#ffc301',
        cards: [],
        estimate: 2,
        description: 'Tasks waiting in the queue',
      },
      {
        _id: '2',
        title: 'Ready',
        limit: 2,
        cards: [],
        description: 'This is ready to be picked up',
        estimate: 0,
      },
      {
        _id: '3',
        title: 'In review',
        color: '#5c63bd',
        cards: [],
        description: 'This is in review',
        estimate: 0,
      },
      {
        _id: '4',
        title: 'In review',
        color: '#5c63bd',
        cards: [],
        description: 'This is in review',
        estimate: 0,
      },
    ],
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
    labels: [{
      id: '1',
      name: 'feat: add i18n dsadsd dsadsad',
      color: '#fcba03',
      taskCount: 2,
      status: 'default',
    }, {
      id: '2',
      name: 'chore: renovate',
      color: '#32a852',
      taskCount: 10,
      status: 'default',
    }, {
      id: '3',
      name: 'fix: i18n',
      color: '#91a195',
      taskCount: 1,
      status: 'default',
    }, {
      id: '4',
      name: 'hello world lorem ipsum d dkjsadhjkshdkjashdaskjds dhaskjhdjk',
      color: '#af65bf',
      taskCount: 0,
      status: 'default',
    }],
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

  function selectBoardImage(img?: string) {
    board.value.image = img
  }

  function addLabel(label: Label) {
    board.value.labels.push(label)
  }

  function updateLabel(updatedLabel: Label) {
    const index = board.value.labels.findIndex(label => label.id === updatedLabel.id)
    if (index !== -1) {
      board.value.labels[index] = updatedLabel
    }
  }

  function removeLabel(label: Label) {
    const index = board.value.labels.findIndex(l => l.id === label.id)
    if (index !== -1) {
      board.value.labels.splice(index, 1)
    }
  }

  function removeColumn(column: Column) {
    const index = board.value.columns!.findIndex(c => c._id === column._id)
    if (index !== -1) {
      board.value.columns!.splice(index, 1)
    }
  }

  return {
    boards,
    board,
    addBoard,
    removeBoards,
    updateLabel,
    selectBoardImage,
    removeLabel,
    addLabel,
    removeColumn,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBoardsStore, import.meta.hot))
}
