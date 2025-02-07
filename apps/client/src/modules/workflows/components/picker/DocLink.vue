<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiButton } from '@/shared/ui'
</script>

<template>
  <div class="flex items-start flex-col gap-2 w-full">
    <span class="text-small text-neutral-500 fw500">Полезные ссылки</span>
    <UiButton
      as="a"
      href="https://github.com/mnenie/jenda"
      target="_blank"
      variant="ghost"
      class="cursor-pointer self-end items-start flex w-full flex-col !h-unset gap-1 p-1.2 border border-neutral-200 dark:border-neutral-700 rounded-lg"
    >
      <div class="flex items-center justify-center gap-2">
        <div class="flex items-center justify-center bg-neutral-100 rounded-full p-1">
          <Icon icon="lucide:book" class="w-3.5 h-3.5 text-neutral-500" />
        </div>
        <span class="text-default text-neutral-700 fw500 dark:text-neutral-400">Документация</span>
      </div>
      <span class="text-small text-neutral-500 dark:text-neutral-400">
        Now that you are no longer receiving V1 events
      </span>
    </UiButton>
  </div>
</template>
