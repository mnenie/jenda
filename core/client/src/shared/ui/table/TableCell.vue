<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <td
    :class="
      cn(
        'no-scrollbar p-2 border-r first:border-none last:border-none border-neutral-100  dark:border-neutral-700/50 overflow-hidden text-ellipsis whitespace-nowrap px-8px h-12 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:flex [&>[role=checkbox]]:items-center dark:text-neutral-100',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </td>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
