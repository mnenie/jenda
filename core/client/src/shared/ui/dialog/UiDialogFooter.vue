<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/lib/shadcn/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div
    :class="
      cn(
        'dialog-footer',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
