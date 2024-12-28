<script setup lang="ts">
import { SelectLabel, type SelectLabelProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<SelectLabelProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <SelectLabel
    :class="cn(
      'select-label',
      props.class,
    )"
  >
    <slot />
  </SelectLabel>
</template>
