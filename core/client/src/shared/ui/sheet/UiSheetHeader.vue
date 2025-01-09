<script setup lang="ts">
import { DialogClose } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div
    :class="
      cn('flex items-center justify-between gap-y-2 px-4 py-3 text-center sm:text-left', props.class)
    "
  >
    <slot />
    <div class="flex items-center gap-2">
      <slot name="actions" />
      <DialogClose
        class="rounded-sm bg-transparent opacity-60 transition-opacity hover:opacity-90 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none"
      >
        <div i-lucide-x class="w-[17px] h-[17px]" />
      </DialogClose>
    </div>
  </div>
</template>
