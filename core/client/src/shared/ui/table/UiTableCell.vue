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
        'table-cell',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </td>
</template>
