<script setup lang="ts" generic="T extends WorkflowCard">
import { computed, inject } from 'vue'
import type { WorkflowCard } from '../../types'
import { UiBadge } from '@/shared/ui'
import { DayjsInjectionKey } from '@/plugins/dayjs'

defineProps<{
  card: T
}>()

const dayjs = inject(DayjsInjectionKey)!

const timesAgo = computed(() =>
  (workflow: T) => {
    return dayjs().to(dayjs(workflow.updatedAt))
  })
</script>

<template>
  <div
    class="relative p-3 cursor-pointer w-full flex flex-col justify-between h-full border border-solid border-neutral-200 rounded-8px dark:border-neutral-700/60"
    @click="$router.push({ name: 'workflows-id', params: { id: card._id! } })"
  >
    <div class="absolute inset-0 bg-dotted-pattern opacity-30 pointer-events-none" />

    <div class="w-full flex items-start justify-between">
      <div class="flex flex-col gap-0.5 w-full">
        <p class="text-default hyphens-auto">
          {{ card.name }}
        </p>
        <p class="text-small text-neutral-500 hyphens-auto overflow-hidden text-ellipsis line-clamp-1">
          {{ card.description }}
        </p>
      </div>
      <UiBadge variant="soft" class="px-1 py-px mt-px" :class="card.state === 'production' ? 'badge-soft-green' : 'badge-soft'">
        {{ $t(`workflows.status.${card.state}`) }}
      </UiBadge>
    </div>
    <span class="text-small mt-3 text-neutral-500 overflow-hidden text-ellipsis line-clamp-1 dark:text-neutral-400">
      {{ timesAgo(card) }}
    </span>
  </div>
</template>

<style scoped>
.bg-dotted-pattern {
  background-image: radial-gradient(circle, #ccc 1px, transparent 1px);
  background-size: 12px 12px;
  background-color: inherit;
}

:global(html.dark) {
  .bg-dotted-pattern {
    background-image: radial-gradient(circle, #424242 1px, transparent 1px);
  }
}
</style>
