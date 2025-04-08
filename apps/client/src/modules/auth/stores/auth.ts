import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '../types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    _id: '1',
    email: 'alex@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
  } as User)

  return {
    user,
  }
})
