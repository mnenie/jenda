<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiButton } from '@/shared/ui'
</script>

<template>
  <div class="flex items-start flex-col gap-2 w-full">
    <span class="text-small text-neutral-500 dark:text-neutral-400">
      {{ $t('workflow.nodes.links') }}
    </span>
    <UiButton
      as="a"
      href="https://github.com/mnenie/jenda"
      target="_blank"
      variant="outline"
      class="cursor-pointer self-end items-start flex w-full flex-col !h-unset gap-1 p-1.5 border shadow-none dark:bg-neutral-800 rounded-lg"
    >
      <div class="flex items-center justify-center gap-2">
        <div class="flex items-center justify-center rounded-full p-1.2 bg-neutral-100 border border-neutral-200 dark:(bg-#2e2e2e border-neutral-700/60)">
          <Icon icon="lucide:book" class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-300" />
        </div>
        <span class="text-default text-neutral-700 fw500 dark:text-neutral-200">
          {{ $t('workflow.nodes.docs.title') }}
        </span>
      </div>
      <span class="text-small text-neutral-500 dark:text-neutral-300">
        {{ $t('workflow.nodes.docs.description') }}
      </span>
    </UiButton>
  </div>
</template>
