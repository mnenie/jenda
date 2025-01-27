import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type { Workflow } from '../types'

export const useWorkflowsStore = defineStore('workflows', () => {
  const workflows = shallowRef<Workflow[]>(
    [
      {
        _id: '1',
        name: 'Workflow 1',
        description: 'Workflow 1 description',
        state: 'draft',
        runsCount: 4,
        creator: {
          _id: '1',
          email: 'airat@gmail.com',
          photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
        },
        updatedAt: new Date(),
      },
      {
        _id: '2',
        name: 'Workflow 2',
        description: 'Workflow 2 description',
        state: 'production',
        runsCount: 4,
        creator: {
          _id: '1',
          email: 'airat@gmail.com',
          photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
        },
        updatedAt: new Date(),
      },
      {
        _id: '3',
        name: 'Workflow 3',
        description: 'dsklajdjlkasjdklasj  dasjkdhjkashdkjas ds dhjkasghdjjasgdhsagdjhasdgh hj djhsgjdhasghjdjsad sa',
        state: 'production',
        runsCount: 23,
        creator: {
          _id: '1',
          email: 'airat@gmail.com',
          photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
        },
        updatedAt: new Date(),
      },
      {
        _id: '4',
        name: 'Workflow 5',
        description: 'dsklajdjlkasjdklasj  dasjkdhjkashdkjas ds dhjkasghdjjasgdhsagdjhasdgh hj djhsgjdhasghjdjsad sa',
        state: 'production',
        runsCount: 23,
        creator: {
          _id: '1',
          email: 'airat@gmail.com',
          photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
        },
        updatedAt: new Date(),
      },
      {
        _id: '5',
        name: 'Workflow 5',
        description: 'dsklajdjlkasjdklasj  dasjkdhjkashdkjas ds dhjkasghdjjasgdhsagdjhasdgh hj djhsgjdhasghjdjsad sa',
        state: 'draft',
        runsCount: 23,
        creator: {
          _id: '1',
          email: 'airat@gmail.com',
          photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
        },
        updatedAt: new Date(),
      },
    ],
  )
  const workflow = ref<Workflow>()

  return {
    workflows,
    workflow,
  }
})
