<script setup lang="ts">
import type { ChoosingWorkspaceItem } from '../model'
import { UiBadge, UiButton } from '@/shared/ui'

defineProps<{
  item: ChoosingWorkspaceItem
}>()

const emit = defineEmits<{
  (e: 'choose', id: string): void
}>()
</script>

<template>
  <UiButton
    variant="dashed"
    class="hover:(border-neutral-500 !bg-white dark:!bg-neutral-800) focus:border-neutral-500 justify-between"
    @click.prevent="emit('choose', item._id)"
  >
    {{ item.name }}
    <div class="flex items-center gap-1.5">
      <UiBadge variant="soft" class="px-1 py-0 text-xs">
        {{ item.plan }}
      </UiBadge>
      <UiBadge variant="soft" class="px-1 py-0 text-xs">
        {{ item.status }}
      </UiBadge>
    </div>
  </UiButton>
</template>
