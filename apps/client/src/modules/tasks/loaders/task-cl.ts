import { defineColadaLoader } from 'unplugin-vue-router/data-loaders/pinia-colada'
import { getTaskById } from '../api'

export const useTaskData = defineColadaLoader('tasks-id', {
  async query(route, { signal }) {
    return getTaskById(route.params.taskId, signal)
  },
  key: to => ['task-loader', to.params.taskId],
  staleTime: 10000,
})
