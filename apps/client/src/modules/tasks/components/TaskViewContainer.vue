<script setup lang="ts">
import CommentsTabContent from './comments/CommentsTabContent.vue'
import type { TaskView } from '../types'
import TaskTabsContent from '@/modules/tasks/components/TaskTabsContent.vue'

defineProps<{
  view: TaskView
}>()
</script>

<template>
  <TaskTabsContent v-if="view === 'compact'" />
  <div v-else class="h-full w-full overflow-hidden">
    <div class="grid items-center grid-cols-2 h-full">
      <div class="h-full w-full border-r-2 dark:border-#1c1c1c">
        <!-- _todo -->
        main task content
      </div>
      <div class="relative h-full w-full overflow-y-auto">
        <CommentsTabContent />
      </div>
    </div>
  </div>
</template>
