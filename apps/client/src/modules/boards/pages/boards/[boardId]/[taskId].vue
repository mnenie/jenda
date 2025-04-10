<script lang="ts">
import { useRouter } from 'vue-router/auto'
import { useTaskData } from '@/modules/tasks/loaders/task-cl'

export { useTaskData }
</script>

<script setup lang="ts">
import { UiSheet, UiSheetContent, UiSheetHeader } from '@/shared/ui'
import TaskTabsContent from '@/modules/tasks/components/TaskTabsContent.vue'

const router = useRouter()

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
      class="p-0 min-w-2xl h-full w-full flex flex-col overflow-x-hidden overflow-y-hidden"
      :portal="true"
      @close-auto-focus="router.push(
        { name: 'boards-id', params: { boardId: '1' } },
      )"
    >
      <UiSheetHeader :custom="true">
        @module/tasks
      </UiSheetHeader>
      <TaskTabsContent />
    </UiSheetContent>
  </UiSheet>
</template>

<style scoped>
@import '@/styles/_scrollbar.css';
</style>
