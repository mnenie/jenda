<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="relative w-full overflow-x-hidden overflow-y-auto border border-neutral-100 dark:border-neutral-700/50 max-h-[calc(100dvh-160px)] rounded-md">
    <table v-bind="$attrs" :class="cn('w-full caption-bottom text-13px 2xl:text-sm overflow-y-auto', props.class)">
      <slot />
    </table>
  </div>
</template>
