<script setup lang="ts">
import { cn } from '@/shared/libs/shadcn/utils'
import { DialogTitle, type DialogTitleProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DialogTitle
    v-bind="forwardedProps"
    :class="
      cn(
        'dialog-title',
        props.class,
      )
    "
  >
    <slot />
  </DialogTitle>
</template>
