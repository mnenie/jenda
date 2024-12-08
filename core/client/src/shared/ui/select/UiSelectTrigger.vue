<script setup lang="ts">
import { cn } from '@/shared/lib/shadcn/utils'
import { SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'select-trigger',
      props.class,
    )"
  >
    <slot />
  </SelectTrigger>
</template>
