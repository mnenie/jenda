<script setup lang="ts">
import { cn } from '@/shared/lib/shadcn/utils'
import { SelectScrollUpButton, type SelectScrollUpButtonProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollUpButton
    v-bind="forwardedProps"
    :class="cn(
      'select-scroll-button',
      props.class,
    )"
  >
    <slot>
      <div i-lucide-chevron-up />
    </slot>
  </SelectScrollUpButton>
</template>
