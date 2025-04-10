<script setup lang="ts">
import { useRouter } from 'vue-router/auto'
import { UiSheet, UiSheetContent, UiSheetHeader } from '@/shared/ui'
import TaskAttributes from '@/modules/tasks/components/TaskAttributes.vue'

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
      class="pt-0 min-w-xl"
      :portal="true"
      @close-auto-focus="router.push(
        { name: 'boards-id', params: { boardId: '1' } },
      )"
    >
      <UiSheetHeader :custom="true">
        @module/tasks
      </UiSheetHeader>
      <TaskAttributes />
    </UiSheetContent>
  </UiSheet>
</template>
