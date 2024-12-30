import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/entities/user'

interface BaseTestWorkspace {
  _id: string
  name: string
  img: string | Blob
  link: string
  status: 'active' | 'archive'
  members: User[]
  plan: 'FREE' | 'PREMIUM'
}

export const useWorkspaceStore = defineStore('workspace', () => {
  const workspace = ref({
    _id: '0',
    name: 'Example.io',
    img: 'https://avatars.githubusercontent.com/u/185750893?s=100&v=4',
    link: 'https://jenda-app-mnenie.com/example.io',
    status: 'active',
    members: [],
    plan: 'FREE',
  } as BaseTestWorkspace)

  return {
    workspace,
  }
})
