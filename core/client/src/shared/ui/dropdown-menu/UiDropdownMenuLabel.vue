<script setup lang="ts">
import { cn } from '@/shared/libs/shadcn/utils'
import { DropdownMenuLabel, type DropdownMenuLabelProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="cn(
      'dropdown-menu-label',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </DropdownMenuLabel>
</template>
