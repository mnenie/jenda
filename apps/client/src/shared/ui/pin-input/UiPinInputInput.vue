<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput
    v-bind="forwardedProps"
    :class="cn(
      'pin-input-input',
      props.class,
    )"
  />
</template>
