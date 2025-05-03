<script setup lang="ts">
import { DialogClose } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const { custom = false, ...props } = defineProps<{
  class?: HTMLAttributes['class']
  custom?: boolean
}>()
</script>

<template>
  <div
    :class="cn(
      custom ? 'dialog-custom-header' : 'dialog-header',
      props.class,
    )"
  >
    <slot />
    <div v-if="custom" class="flex items-center gap-2">
      <slot name="actions" />
      <DialogClose
        class="dialog-close"
      >
        <div i-lucide-x class="w-4 h-4" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </div>
  </div>
</template>
