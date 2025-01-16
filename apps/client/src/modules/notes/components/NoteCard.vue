<script setup lang="ts">
import type { Note } from '../types'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'

defineProps<{
  note: Note
}>()
</script>

<template>
  <div class="relative cursor-pointer w-full flex flex-col justify-between h-full border border-solid border-neutral-200 rounded-8px dark:border-neutral-700">
    <div class="p-3 flex flex-col space-y-1">
      <div class="flex items-center space-x-1.5 mb-2">
        <UserAvatar class="!h-22px !w-22px" :img="note.creator.photoUrl" />
        <span class="text-sm fw500 dark:text-neutral-100">
          {{ note.creator.email }}
        </span>
      </div>
      <p class="text-sm fw500 hyphens-auto dark:text-neutral-100">
        {{ note.title }}
      </p>
      <span class="text-xs text-neutral-600 dark:text-neutral-400 hyphens-auto line-clamp-2">
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
          <UserAvatar class="!h-20px !w-20px" :img="note.creator.photoUrl" />
          <span class="text-xs text-neutral-500 dark:text-neutral-400">
            {{ note.creator.email }}
          </span>
        </div>
        <span class="text-xs text-neutral-500 dark:text-neutral-400">
          {{ note.date }}
        </span>
      </div>
    </div>
  </div>
</template>
