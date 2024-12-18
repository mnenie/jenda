<script setup lang="ts">
import { cn } from '@/shared/libs/shadcn/utils'
import {
  DropdownMenuSubTrigger,
  type DropdownMenuSubTriggerProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

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
