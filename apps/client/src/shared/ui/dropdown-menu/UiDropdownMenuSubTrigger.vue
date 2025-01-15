<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import {
  DropdownMenuSubTrigger,
  type DropdownMenuSubTriggerProps,
  useForwardProps,
} from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'dropdown-menu-sub-trigger',
      props.class,
    )"
  >
    <slot />
    <div i-lucide-chevron-right class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>
