<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { SelectScrollDownButton, type SelectScrollDownButtonProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<SelectScrollDownButtonProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollDownButton
    v-bind="forwardedProps"
    :class="cn(
      'select-scroll-button',
      props.class,
    )"
  >
    <slot>
      <div i-lucide-chevron-down />
    </slot>
  </SelectScrollDownButton>
</template>
