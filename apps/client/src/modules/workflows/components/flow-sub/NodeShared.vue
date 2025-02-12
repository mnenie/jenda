<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Node } from '@vue-flow/core'

defineProps<{
  data: Node['data']
  isThisNode: boolean
  name: string
}>()
</script>

<template>
  <div
    class="p-2 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-#2e2e2e w-280px"
    :class="isThisNode && '!border-blue-300 dark:(!border-blue-800)'"
  >
    <div class="flex items-center gap-2 w-full">
      <div class="!bg-blue-100 dark:!bg-blue-900/30 !text-blue-500 border-blue-800 p-2 rounded-lg">
        <Icon :icon="data.icon" />
      </div>
      <div class="flex flex-col gap-0.5 w-84%">
        <div class="flex items-center gap-2">
          <span class="text-default text-neutral-900 dark:text-neutral-200 whitespace-nowrap">
            {{ name }}
          </span>
          <div
            v-if="!data.actions"
            v-tooltip="{ content: $t('workflow.nodes.alert'), triggers: ['hover'], placement: 'top' }"
            class="flex items-center justify-center bg-red-100 rounded-full w-3.5 h-3.5 dark:bg-red-900/40"
          >
            <Icon icon="ion:alert" class="w-3 h-3 text-red-800 dark:text-red-400" />
          </div>
        </div>
        <span class="text-small truncate text-neutral-600 dark:text-neutral-300 whitespace-nowrap">
          {{ data.description }}
        </span>
      </div>
    </div>
  </div>
</template>
