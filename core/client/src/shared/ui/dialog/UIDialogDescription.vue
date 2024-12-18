<script setup lang="ts">
import { cn } from '@/shared/libs/shadcn/utils'
import { DialogDescription, type DialogDescriptionProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DialogDescription
    v-bind="forwardedProps"
    :class="cn(
      'dialog-description',
      props.class,
    )"
  >
    <slot />
  </DialogDescription>
</template>
