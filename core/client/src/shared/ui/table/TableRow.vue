<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tr
    :class="cn('border-b border-neutral-100 dark:border-neutral-700/50 transition-colors data-[state=selected]:bg-blue-100 dark:data-[state=selected]:bg-blue-900 cursor-pointer', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </tr>
</template>
