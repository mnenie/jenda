import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Task } from '../types'

// _todo[skip_ci]: с pinia colada loader вынести в queries и вообще заняться provide
export const useTaskStore = defineStore('task', () => {
  const task = ref<Task>({
    _id: '1',
    title: 'Add i18n',
    description: 'Add i18n to the app',
    users: [],
    commentsGroup: [],
    creator: {
      _id: '1',
      email: 'alex@test.com',
      photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
    },
  })

  return {
    task,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot))
}
