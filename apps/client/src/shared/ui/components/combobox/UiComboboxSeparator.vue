<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ComboboxSeparator } from 'radix-vue'
import type { ComboboxSeparatorProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<ComboboxSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ComboboxSeparator
    v-bind="delegatedProps"
    :class="cn('combobox-separator', props.class)"
  >
    <slot />
  </ComboboxSeparator>
</template>
