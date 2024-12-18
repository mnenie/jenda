<script setup lang="ts">
import { cn } from '@/shared/libs/shadcn/utils'
import {
  DropdownMenuSeparator,
  type DropdownMenuSeparatorProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuSeparatorProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DropdownMenuSeparator
    v-bind="delegatedProps"
    :class="cn(
      'dropdown-menu-separator',
      props.class,
    )"
  />
</template>
