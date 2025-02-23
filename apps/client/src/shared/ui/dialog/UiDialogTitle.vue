<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { DialogClose, DialogTitle, type DialogTitleProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<DialogTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="flex items-center justify-between">
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
    <DialogClose class="dialog-close">
      <div i-lucide-x class="min-w-4.4 min-h-4.4" />
      <span class="sr-only">Close</span>
    </DialogClose>
  </div>
</template>
