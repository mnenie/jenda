<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <caption
    :class="cn(
      'table-caption',
      props.class,
    )"
  >
    <slot />
  </caption>
</template>
