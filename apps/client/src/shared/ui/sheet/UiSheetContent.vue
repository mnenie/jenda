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
import { reactiveOmit } from '@vueuse/core'
import { type SheetVariants, sheetVariants } from '.'
import { cn } from '@/shared/libs/shadcn/utils'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
  portal?: boolean
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const rootProps = reactiveOmit(props, ['portal'])

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = rootProps

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal :disabled="!portal">
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />

    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <slot name="close" />
    </DialogContent>
  </DialogPortal>
</template>
