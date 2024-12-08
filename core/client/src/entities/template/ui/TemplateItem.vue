<script setup lang="ts">
import type { Template } from '../model'
import { UiBadge } from '@/shared/ui'

defineProps<{
  template: Template
}>()
</script>

<template>
  <div
    class="relative flex flex-col justify-between items-start h-fit w-100% border border-solid border-neutral-200
    rounded-lg cursor-pointer dark:(bg-neutral-700/40 border-neutral-600)"
  >
    <div class="py-2 px-3">
      <UiBadge
        variant="outline"
        class="mb-3 !bg-blue-100 text-blue-500 dark:(!bg-blue-800 !text-blue-100 !border-blue-800)"
      >
        {{ template.tag }}
      </UiBadge>
      <div class="flex flex-col gap-1.5 mb-3">
        <p class="text-sm">
          {{ template.title }}
        </p>
        <span
          class="text-xs text-neutral-500 overflow-hidden text-ellipsis line-clamp-2 break-words
          dark:text-neutral-400"
        >
          {{ template.description }}
        </span>
      </div>
      <div class="flex items-center w-full justify-between">
        <span class="text-xs text-neutral-600 dark:text-neutral-300">{{ template.date }}</span>
        <img
          v-tooltip.bottom-end="$t('templates.user')"
          :src="template.user"
          class="w-5 h-5 rounded-full"
        />
      </div>
    </div>
  </div>
</template>
