<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <th
    :class="cn(
      'table-head',
      props.class,
    )"
    v-bind="$attrs"
  >
    <slot />
  </th>
</template>
