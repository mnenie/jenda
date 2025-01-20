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
      custom ? 'sticky top-0 left-0 right-0 z-999 w-full flex items-center justify-between px-14px py-8px border-b border-[#e4e4e766]/60 bg-[#fff9]/80 backdrop-blur supports-[backdrop-filter]:bg-[#fff9]/20 dark:bg-transparent dark:border-neutral-700/40' : 'dialog-header',
      props.class,
    )"
  >
    <slot />
    <div v-if="custom" class="flex items-center gap-2">
      <slot name="actions" />
      <DialogClose
        :class="cn(
          'w-4 h-4 flex items-center justify-center rounded-sm opacity-70 ring-offset-0 transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none dark:(ring-offset-0 focus:ring-0)',
          'bg-transparent data-[state=open]:text-neutral-500 dark:data-[state=open]:text-neutral-400',
        )"
      >
        <div i-lucide-x class="w-4 h-4" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </div>
  </div>
</template>
