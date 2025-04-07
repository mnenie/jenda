<script setup lang="ts">
import { TabsIndicator, TabsList, TabsTrigger } from 'radix-vue'
import { useLocalStorage } from '@vueuse/core'
import type { Comment } from '@/modules/boards/types'
import { UiBadge, UiTabs, UiTabsContent } from '@/shared/ui'

defineProps<{
  comments?: Comment[]
}>()

const defaultTab = useLocalStorage('default-task-tab', 'subtasks')

const tabs = ['subtasks', 'comments', 'actions'] as const
</script>

<template>
  <UiTabs v-model="defaultTab" class="tabs-primary h-full">
    <TabsList class="tabs-list-primary">
      <TabsIndicator class="tabs-indicator">
        <div class="bg-blue-500 w-full h-full" />
      </TabsIndicator>
      <TabsTrigger value="subtasks" class="tabs-trigger-primary">
        {{ $t('task.tabs', 0) }}
      </TabsTrigger>
      <TabsTrigger value="comments" class="tabs-trigger-primary gap-2">
        {{ $t('task.tabs', 1) }}
        <UiBadge v-if="comments?.length" variant="secondary" class="px-1 py-0 rounded-lg">
          {{ comments.length }}
        </UiBadge>
      </TabsTrigger>
      <TabsTrigger value="actions" class="tabs-trigger-primary">
        {{ $t('task.tabs', 3) }}
      </TabsTrigger>
    </TabsList>
    <UiTabsContent v-for="tab in tabs" :key="tab" :value="tab" class="h-full">
      <slot :name="tab" />
    </UiTabsContent>
  </UiTabs>
</template>
