<script setup lang="ts">
import { UiSheetClose } from '.'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const { custom = false, ...props } = defineProps<{
  class?: HTMLAttributes['class']
  custom?: boolean
}>()
</script>

<template>
  <div
    :class="
      cn(
        custom ? 'sheet-custom-header' : 'sheet-header',
        props.class,
      )
    "
  >
    <slot />
    <div v-if="custom" class="flex items-center gap-2">
      <slot name="actions" />
      <UiSheetClose
        class="sheet-close"
      >
        <div i-lucide-x class="w-4 h-4" />
        <span class="sr-only">Close</span>
      </UiSheetClose>
    </div>
  </div>
</template>
