<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn(
      'dialog-header',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
