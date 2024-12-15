<script setup lang="ts">
import { cn } from '@/shared/lib/shadcn/utils'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      :class="cn(
        'dialog-overlay',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      )"
    />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'dialog-content duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-1/2 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-1/2',
          props.class,
        )"
    >
      <slot />

      <DialogClose
        :class="cn(
          'dialog-close',
          'bg-transparent data-[state=open]:text-neutral-500 dark:data-[state=open]:text-neutral-400',
        )"
      >
        <div i-lucide-x class="w-4 h-4" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
