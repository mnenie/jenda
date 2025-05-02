<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ContextMenuLabel, type ContextMenuLabelProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<ContextMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ContextMenuLabel
    v-bind="delegatedProps"
    :class="
      cn(
        'context-menu-label',
        inset && 'pl-8',
        props.class,
      )"
  >
    <slot />
  </ContextMenuLabel>
</template>
