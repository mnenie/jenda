<script setup lang="ts">
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <div
    :class="cn(
      'form-field',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
