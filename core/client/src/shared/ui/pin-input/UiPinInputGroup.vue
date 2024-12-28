<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<PrimitiveProps & { class?: HTMLAttributes['class'] }>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    v-bind="forwardedProps"
    :class="cn(
      'pin-input-group',
      props.class,
    )"
  >
    <slot />
  </primitive>
</template>
