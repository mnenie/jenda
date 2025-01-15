<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { SelectScrollUpButton, type SelectScrollUpButtonProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

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
