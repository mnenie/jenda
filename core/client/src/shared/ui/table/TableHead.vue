<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <th
    :class="cn('h-12 px-8px border-r first:border-none last:border-none border-neutral-100 dark:border-neutral-700/50 text-ellipsis text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:hasalign-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:flex [&>[role=checkbox]]:items-center', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </th>
</template>
