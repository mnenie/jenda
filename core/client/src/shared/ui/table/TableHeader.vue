<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <thead
    :class="cn('sticky top-0 z-33 border-b bg-neutral-50 dark:bg-#2e2e2e', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </thead>
</template>
