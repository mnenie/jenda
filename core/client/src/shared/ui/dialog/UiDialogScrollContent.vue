<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

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
        'dialog-scroll-overlay',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      )"
    >
      <DialogContent
        :class="
          cn(
            'dialog-scroll-content',
            props.class,
          )
        "
        v-bind="forwarded"
        @pointer-down-outside="(event) => {
          const originalEvent = event.detail.originalEvent;
          const target = originalEvent.target as HTMLElement;
          if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
            event.preventDefault();
          }
        }"
      >
        <slot />

        <DialogClose
          class="dialog-scroll-close"
        >
          <div i-lucide-x class="w-4 h-4" />
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>
