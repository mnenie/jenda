<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tr
    :class="cn(
      'table-row',
      props.class,
    )"
    v-bind="$attrs"
  >
    <slot />
  </tr>
</template>
