<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router/auto'
import { storeToRefs } from 'pinia'
import { UiSheet, UiSheetContent, UiSheetHeader } from '@/shared/ui'
import TaskAttributes from '@/modules/tasks/components/attributes/TaskAttributes.vue'
import { useBoardsStore } from '@/modules/boards/stores/boards'
import { provideTaskContext } from '@/modules/tasks/composables/task'

const router = useRouter()

// unplugin
definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'tasks-id',
  path: '/boards/:boardId/tasks/:taskId',
})

const boardStore = useBoardsStore()
const { board } = storeToRefs(boardStore)

const taskInBoard = computed(() => board.value.columns![0].cards![0])

provideTaskContext({
  taskInBoard,
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
