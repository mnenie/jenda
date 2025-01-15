<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

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
