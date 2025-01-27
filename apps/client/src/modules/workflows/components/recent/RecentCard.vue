<script setup lang="ts">
import type { WorkflowCard } from '../../types'
import { UiBadge } from '@/shared/ui'

defineProps<{
  card: WorkflowCard
}>()
</script>

<template>
  <div class="relative p-3 cursor-pointer w-full flex flex-col justify-between h-full border border-solid border-neutral-200 rounded-8px dark:border-neutral-700">
    <div class="absolute inset-0 bg-dotted-pattern opacity-30 pointer-events-none" />

    <div class="flex items-start justify-between">
      <div class="flex flex-col gap-0.5">
        <p class="text-default hyphens-auto">
          {{ card.name }}
        </p>
        <span class="text-small text-neutral-500 overflow-hidden text-ellipsis line-clamp-2 break-words dark:text-neutral-400">
          {{ card.description }}
        </span>
      </div>
      <UiBadge variant="soft" class="px-1 py-px" :class="card.state === 'production' ? 'badge-soft-green' : 'badge-soft'">
        {{ card.state }}
      </UiBadge>
    </div>
  </div>
</template>

<style scoped>
.bg-dotted-pattern {
  background-image: radial-gradient(circle, #ccc 1px, transparent 1px);
  background-size: 12px 12px;
  background-color: inherit;
}
</style>
