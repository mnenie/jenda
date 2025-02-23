<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

type Props = DialogContentProps
  & { class?: HTMLAttributes['class'], closed?: boolean }

const { closed = true, ...props } = defineProps<Props>()
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
          !closed && 'p-0',
        )"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
