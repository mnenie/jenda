<script setup lang="ts">
import { computed, inject } from 'vue'
import { Icon } from '@iconify/vue'
import type { Card } from '@/modules/boards/types'
import UserAvatars from '@/modules/common/components/UserAvatars.vue'
import { UiBadge } from '@/shared/ui'
import { DayjsInjectionKey } from '@/plugins/dayjs'

const props = defineProps<{
  card: Card
}>()

const dayjs = inject(DayjsInjectionKey)!

const updatedAtCard = computed(() => {
  return dayjs(props.card.updatedAt).format('dd, hh:mm')
})
</script>

<template>
  <div class="flex w-full gap-1 items-end justify-between">
    <UserAvatars :max="3" avatar="!w-20px !h-20px cursor-default" :users="card.users" />
    <div class="flex items-center gap-3">
      <UiBadge v-if="card.estimate" variant="soft" class="!h-4 !w-4 rounded-full p-1 flex items-center justify-center">
        {{ card.estimate }}
      </UiBadge>
      <div class="flex items-center gap-1">
        <Icon icon="hugeicons:message-01" class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
        <p v-if="card.comments?.length" class="text-small text-neutral-500 dark:text-neutral-200">
          {{ card.comments.length }}
        </p>
        <p v-else class="text-default text-neutral-500 dark:text-neutral-200">
          -
        </p>
      </div>
      <div class="flex items-center gap-1">
        <Icon icon="hugeicons:time-quarter-02" class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
        <p class="text-small text-neutral-500 dark:text-neutral-200">
          {{ updatedAtCard }}
        </p>
      </div>
    </div>
  </div>
</template>
