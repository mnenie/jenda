<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <thead
    :class="cn(
      'table-header',
      props.class,
    )"
    v-bind="$attrs"
  >
    <slot />
  </thead>
</template>
