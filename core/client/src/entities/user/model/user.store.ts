import type { User } from './types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({} as User)

  return {
    user,
  }
})
