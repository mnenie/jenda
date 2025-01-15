import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { BaseTestWorkspace } from '../types'

export const useWorkspaceStore = defineStore('workspace', () => {
  const workspace = ref<BaseTestWorkspace>({
    _id: '0',
    name: 'Example.io',
    img: 'https://avatars.githubusercontent.com/u/185750893?s=100&v=4',
    link: 'https://jenda-app-mnenie.com/example.io',
    status: 'active',
    members: [],
    plan: 'FREE',
  })

  return {
    workspace,
  }
})
