<script setup lang="ts">
import { cn } from '@/shared/lib/shadcn/utils'
import {
  SelectItem,
  SelectItemIndicator,
  type SelectItemProps,
  SelectItemText,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

interface Props extends SelectItemProps {
  withIndicator?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'select-item',
        props.class,
      )
    "
  >
    <div v-if="withIndicator" class="select-item-indicator">
      <SelectItemIndicator>
        <div i-lucide-check class="h-4 w-4" />
      </SelectItemIndicator>
    </div>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
