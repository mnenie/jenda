<script setup lang="ts">
import type { UserOption } from '../../types'
import { UiBadge } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const { closable = true, ...props } = defineProps<{
  user: UserOption
  removable?: boolean
  closable?: boolean
}>()

const emit = defineEmits<{
  (e: 'remove'): void
}>()
</script>

<template>
  <UiBadge
    :closable
    variant="secondary"
    class="gap-1.5 rounded-lg px-1.5px py-0 !h-5.5 fw500"
    @close="emit('remove')"
  >
    <img :src="user.photoUrl" :alt="user.email" class="w-5 h-5 rounded-full" />
    <span :class="cn('!text-default fw420 text-neutral-600 dark:text-neutral-200 mb-px', removable && 'truncate', $attrs['name-class'] as string)">{{ user.email }}</span>
  </UiBadge>
</template>
