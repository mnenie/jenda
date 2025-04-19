<script lang="ts">
import { useRoute, useRouter } from 'vue-router/auto'
import { useLocalStorage } from '@vueuse/core'
import type { TaskView } from '@/modules/tasks/types'
import { useTaskDataLoader } from '@/modules/tasks/loaders/task-cl'

export { useTaskDataLoader }
</script>

<script setup lang="ts">
import { UiSheet, UiSheetContent } from '@/shared/ui'
import TaskViewContainer from '@/modules/tasks/components/TaskViewContainer.vue'
import TaskTopPanel from '@/modules/tasks/components/top-panel/TaskTopPanel.vue'

const router = useRouter()
const route = useRoute('tasks-id')

const view = useLocalStorage<TaskView>('task-view', 'compact')

// unplugin
definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'tasks-id',
  path: '/boards/:boardId/tasks/:taskId',
})
</script>

<template>
  <UiSheet :default-open="true">
    <UiSheetContent
      class="p-0 h-full w-full flex flex-col overflow-x-hidden overflow-y-hidden transition-[min-width] !duration-200 ease-in !gap-0"
      :class="[view === 'compact' ? 'min-w-2xl' : 'min-w-6xl']"
      :portal="true"
      @close-auto-focus="router.push(
        {
          name: 'boards-id',
          params: { boardId: route.params.boardId },
        },
      )"
    >
      <TaskTopPanel />
      <TaskViewContainer :view />
    </UiSheetContent>
  </UiSheet>
</template>

<style scoped>
@import '@/styles/_scrollbar.css';
</style>
