<script setup lang="ts">
import { computed } from 'vue'
import { TabsIndicator, TabsList, TabsTrigger } from 'radix-vue'
import { useLocalStorage } from '@vueuse/core'
import { useTaskDataLoader as useTaskData } from '../loaders/task-cl'
import { UiBadge, UiTabs, UiTabsContent } from '@/shared/ui'

const { data: task } = useTaskData()

const tab = useLocalStorage('default-task-tab', 'subtasks')

const tabs = ['subtasks', 'comments', 'actions', 'assets'] as const

const commentsCount = computed(() => {
  return task.value.commentsGroup?.reduce((acc, group) => acc + group.comments.length, 0) ?? 0
})
</script>

<template>
  <UiTabs v-model="tab" class="tabs-primary h-full overflow-hidden">
    <TabsList class="tabs-list-primary">
      <TabsIndicator class="tabs-indicator">
        <div class="bg-blue-500 w-full h-full" />
      </TabsIndicator>
      <TabsTrigger v-for="trigger, index in tabs" :key="trigger" :value="trigger" class="tabs-trigger-primary" :class="{ 'gap-2': trigger === 'comments' }">
        {{ $t(`task.tabs[${index}]`) }}
        <UiBadge v-if="trigger === 'comments'" variant="secondary" class="px-1 py-0 rounded-lg">
          {{ commentsCount }}
        </UiBadge>
      </TabsTrigger>
    </TabsList>
    <UiTabsContent v-for="section in tabs" :key="section" :value="section" class="relative h-full overflow-y-auto mt-1">
      <slot :name="section" />
    </UiTabsContent>
  </UiTabs>
</template>
