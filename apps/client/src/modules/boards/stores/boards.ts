import { ref, shallowRef, triggerRef } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Board, BoardRow } from '../types'

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
        cards: [{
          _id: '1',
          title: 'feat(kanban): add drag and drop',
          priority: 'none',
          subtasks: [
            {
              _id: '1',
              title: 'subtask 1',
            },
            {
              _id: '2',
              title: 'do this thing today dsadsadas dsadsadasdsadsd',
            },
          ],
          labels: [{
            id: '1',
            name: 'feat: add i18n dsadsd dsadsad',
            color: '#fcba03',
          }, {
            id: '1',
            name: 'feat: add i18n dsadsd dsadsad',
            color: '#32a852',
          }, {
            id: '1',
            name: 'fix: i18n',
            color: '#fcba03',
          }, {
            id: '1',
            name: 'fix: i18n',
            color: '#fcba03',
          }],
          createdAt: new Date(),
          updatedAt: new Date(),
          users: [
            {
              _id: '1',
              email: 'alex',
              photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
            },
            {
              _id: '2',
              email: 'nick',
              photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
            },
          ],
        }, {
          _id: '2',
          title: 'feat(kanban): add drag and drop',
          estimate: 8,
          priority: 'medium',
          subtasks: [],
          labels: [],
          comments: ['dsad'],
          createdAt: new Date(),
          updatedAt: new Date(),
          users: [
            {
              _id: '1',
              email: 'alex',
              photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
            },
            {
              _id: '2',
              email: 'nick',
              photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
            },
            {
              _id: '3',
              email: 'slava',
              photoUrl: 'https://avatars.githubusercontent.com/u/83920644?s=40&u=0d424933b73f12366cc94dcb7dccedf30f85bbfb&v=4',
            },
            {
              _id: '4',
              email: 'airat',
              photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=130&v=4',
            },
          ],
        }],
        estimate: 2,
        description: 'Tasks waiting in the queue',
      },
      {
        _id: '2',
        title: 'Ready',
        cards: [],
        description: 'This is ready to be picked up',
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
