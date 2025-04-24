<script setup lang="ts">
import { computed } from 'vue'
import { TabsIndicator, TabsList, TabsTrigger } from 'radix-vue'
import { useLocalStorage } from '@vueuse/core'
import { useTaskDataLoader as useTaskData } from '../loaders/task-cl'
import { UiBadge, UiTabs, UiTabsContent } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const { data: task } = useTaskData()

const tab = useLocalStorage('default-task-tab', 'comments')

const tabs = ['description', 'comments', 'actions', 'assets'] as const

const commentsCount = computed(() => {
  return task.value.commentsGroup?.reduce((acc, group) => acc + group.comments.length, 0) ?? 0
})
</script>

<template>
  <UiTabs v-model="tab" class="tabs-primary h-full overflow-hidden">
    <TabsList class="tabs-list-primary">
      <TabsIndicator class="tabs-indicator">
        <div class="bg-blue-500 w-full h-full rounded-lg dark:bg-blue-600" />
      </TabsIndicator>
      <TabsTrigger
        v-for="trigger, index in tabs"
        :key="trigger"
        :value="trigger"
        :class="cn(
          'tabs-trigger-primary',
          { 'gap-2': trigger === 'comments' },
          [tab === trigger ? 'dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-400'],
        )"
      >
        {{ $t(`task.tabs[${index}]`) }}
        <UiBadge v-if="trigger === 'comments'" variant="secondary" class="px-1 py-0 rounded-lg">
          {{ commentsCount }}
        </UiBadge>
      </TabsTrigger>
    </TabsList>
    <UiTabsContent v-for="section in tabs" :key="section" :value="section" class="relative h-full overflow-y-auto">
      <slot :name="section" />
    </UiTabsContent>
  </UiTabs>
</template>
