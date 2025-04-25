<script setup lang="ts">
import { computed, inject } from 'vue'
import type { Task } from '../../types'
import { DayjsInjectionKey } from '@/plugins/dayjs'

const props = defineProps<{
  task: Task
}>()

const dayjs = inject(DayjsInjectionKey)!

const updatedAtFormatted = computed(() => {
  return dayjs(props.task.updatedAt).format('D MMM')
})
</script>

<template>
  <div class="absolute top-0 left-0 px-4 py-2 pt-2.5 z-10 bg-[#fff9]/60 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/10 dark:bg-transparent flex items-center gap-10 w-full">
    <div class="text-default text-neutral-400 dark:text-neutral-500 flex items-center gap-2 w-full">
      <span class="text-default fw430 text-neutral-800 dark:text-neutral-200">{{ task.description!.updatedBy.email }}</span>
      <span>{{ updatedAtFormatted }} ({{ $t(`task.description.status.${task.description!.status}`) }})</span>
    </div>
  </div>
</template>
