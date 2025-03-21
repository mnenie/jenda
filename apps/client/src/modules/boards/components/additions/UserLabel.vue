<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { UserOption } from '../../types'
import { UiBadge } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

defineProps<{
  user: UserOption
  removable?: boolean
}>()

const emit = defineEmits<{
  (e: 'remove'): void
}>()
</script>

<template>
  <UiBadge
    variant="soft"
    :class="cn(
      ' flex items-center gap-2 rounded-lg !text-15px 2xl:!text-xs fw450 py-0.5 px-1 bg-transparent text-neutral-800 dark:(bg-neutral-700/80 text-neutral-100)',
    )"
  >
    <img :src="user.photoUrl" :alt="user.email" class="w-5 h-5 rounded-full" />
    <span :class="cn(removable ? '' : 'truncate')">{{ user.email }}</span>
    <Icon
      v-if="removable"
      icon="hugeicons:cancel-01"
      class="!w-3 !h-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer"
      @click="emit('remove')"
    />
  </UiBadge>
</template>
