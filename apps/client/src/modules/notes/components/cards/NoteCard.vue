<script setup lang="ts" generic="T extends Note">
import { computed, inject } from 'vue'
import type { Note } from '../../types'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'
import { DayjsInjectionKey } from '@/plugins/dayjs'

defineProps<{
  note: T
}>()

const dayjs = inject(DayjsInjectionKey)!

const timesAgoNote = computed(() =>
  (note: T) => {
    return dayjs().to(dayjs(note.updatedAt))
  })
</script>

<template>
  <div class="relative cursor-pointer w-full flex flex-col justify-between h-full border border-solid border-neutral-200 rounded-8px dark:border-neutral-700">
    <div class="p-3 flex flex-col space-y-1">
      <div class="flex items-center space-x-1.5 mb-2">
        <UserAvatar class="!h-22px !w-22px" :img="note.creator!.photoUrl" />
        <span class="text-default dark:text-neutral-100">
          {{ note.creator!.email }}
        </span>
      </div>
      <p class="text-default fw500 hyphens-auto dark:text-neutral-100">
        {{ note.title }}
      </p>
      <span class="text-small text-neutral-600 dark:text-neutral-400 hyphens-auto line-clamp-2">
        {{ note.content }}
      </span>
    </div>
    <div class="px-1.5">
      <div class="flex items-center justify-between px-1.5 py-2">
        <div v-if="note.updatedBy" class="flex items-center space-x-1.5">
          <UserAvatar class="!h-20px !w-20px" :img="note.updatedBy.photoUrl" />
          <span class="text-xs text-neutral-500 dark:text-neutral-400">
            {{ note.updatedBy.email }}
          </span>
        </div>
        <div v-else class="flex items-center space-x-1.5">
          <UserAvatar class="!h-20px !w-20px" :img="note.creator!.photoUrl" />
          <span class="text-xs text-neutral-500 fw500 dark:text-neutral-400">
            {{ note.creator!.email }}
          </span>
        </div>
        <span class="text-xs text-neutral-500 dark:text-neutral-400">
          {{ timesAgoNote(note) }}
        </span>
      </div>
    </div>
  </div>
</template>
