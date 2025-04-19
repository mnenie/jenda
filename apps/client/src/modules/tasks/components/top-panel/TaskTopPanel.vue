<script setup lang="ts">
import TaskBadge from './TaskBadge.vue'
import TaskView from './TaskView.vue'
import AllUsers from './AllUsers.vue'
import TaskMenu from './TaskMenu.vue'
import { UiSheetHeader } from '@/shared/ui'
import { useTaskDataLoader as useTaskData } from '@/modules/tasks/loaders/task-cl'

const { data: task } = useTaskData()
</script>

<template>
  <UiSheetHeader :custom="true" class="py-1.5 pl-14px">
    <div class="flex items-center gap-2.5">
      <TaskView />
      <TaskBadge :id="task._id" />
    </div>
    <template #actions>
      <AllUsers :task />
      <TaskMenu :task />
    </template>
  </UiSheetHeader>
</template>
