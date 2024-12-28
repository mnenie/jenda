import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from './types'

export const useUserStore = defineStore('user', () => {
  const user = ref({} as User)

  return {
    user,
  }
})
