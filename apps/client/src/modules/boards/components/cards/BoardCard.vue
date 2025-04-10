<script setup lang="ts" generic="T extends BoardRow">
import { computed, inject } from 'vue'
import { Icon } from '@iconify/vue'
import { createReusableTemplate } from '@vueuse/core'
import BoardChar from '../additions/BoardChar.vue'
import VisibleLabels from '../additions/VisibleLabels.vue'
import type { BoardRow } from '../../types'
import { DayjsInjectionKey } from '@/plugins/dayjs'
import UserAvatars from '@/modules/common/components/UserAvatars.vue'
import { UiButton } from '@/shared/ui'

defineProps<{
  board: T
}>()

const dayjs = inject(DayjsInjectionKey)!

const createdAt = computed(() =>
  (board: T) => {
    return dayjs(board.createdAt).format('L')
  })

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <div
    class="relative cursor-pointer p-2 w-full flex flex-col justify-between h-full border border-solid border-neutral-200 rounded-8px dark:border-neutral-700"
    :class="board.status === 'archived' && 'opacity-50 pointer-events-none'"
    @click="$router.push({ name: 'boards-id', params: { boardId: board._id! } })"
  >
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-2">
        <BoardChar :board="board" />
        <p
          class="text-default text-neutral-900 dark:text-neutral-100 fw500"
          :class="board.status === 'archived' && 'line-through'"
        >
          {{ board.name }}
        </p>
      </div>
      <UiButton variant="ghost" class="p-1 !h-5">
        <Icon icon="lucide:ellipsis" class="min-w-4 min-h-4 text-neutral-500 dark:text-neutral-400" />
      </UiButton>
    </div>
    <div class="max-w-100% flex items-center gap-1.5 mb-4">
      <VisibleLabels :labels="board.labels" label-class="!text-12px" />
    </div>
    <div class="flex items-center gap-2 justify-between">
      <UserAvatars avatar="!w-20px !h-20px" :users="board.users" :max="3" />
      <DefineTemplate v-slot="{ data, icon }">
        <div class="flex items-center gap-1">
          <Icon :icon="icon" class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <p v-if="data" class="text-small text-neutral-500 dark:text-neutral-200">
            {{ data }}
          </p>
          <p v-else class="text-small text-neutral-500 dark:text-neutral-200">
            -
          </p>
        </div>
      </DefineTemplate>
      <div class="flex items-center gap-2.5">
        <ReuseTemplate :data="board.tasks" icon="hugeicons:workflow-circle-06" />
        <ReuseTemplate :data="board.estimate" icon="hugeicons:bulb-charging" />
        <ReuseTemplate :data="createdAt(board)" icon="hugeicons:calendar-02" />
      </div>
    </div>
  </div>
</template>
