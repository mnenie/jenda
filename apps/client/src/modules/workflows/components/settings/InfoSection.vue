<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useSelectedNodeContext } from '../../composables/settings'

const { selectedNode: node } = useSelectedNodeContext()
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex items-center justify-between">
      <div class="w-full flex items-center gap-2">
        <div class="!bg-blue-100 dark:!bg-blue-900/30 !text-blue-500 border-blue-800 p-3 rounded-lg">
          <Icon :icon="node.data.icon" class="w-4.4 h-4.4" />
        </div>
        <div class="w-full flex flex-col gap-0">
          <p class="w-full text-default text-neutral-900 dark:text-neutral-200 truncate whitespace-nowrap">
            {{ node.data.title }}
          </p>
          <span class="w-full text-default text-neutral-500 dark:text-neutral-400 truncate">{{ node.data.description }}</span>
        </div>
      </div>
    </div>
    <div class="w-full h-px my-4 bg-neutral-100 dark:bg-neutral-700" />
  </div>
</template>
